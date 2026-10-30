import os
from datetime import datetime, timedelta, timezone
from typing import Any
import pymysql
from pymysql.cursors import DictCursor
from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from werkzeug.security import check_password_hash, generate_password_hash
from itsdangerous import URLSafeTimedSerializer, BadSignature, SignatureExpired
from dotenv import load_dotenv

load_dotenv()

DB_CONFIG = {
    "host": os.getenv("DB_HOST", "127.0.0.1"),
    "port": int(os.getenv("DB_PORT", "3306")),
    "user": os.getenv("DB_USER", "root"),
    "password": os.getenv("DB_PASSWORD", ""),
    "database": os.getenv("DB_NAME", "jelajah_malang_selatan"),
    "charset": "utf8mb4",
    "cursorclass": DictCursor,
    "autocommit": False,
}
SECRET_KEY = os.getenv("SECRET_KEY", "GANTI_DENGAN_SECRET_RANDOM_MINIMAL_32_KARAKTER")
TOKEN_MAX_AGE = int(os.getenv("TOKEN_MAX_AGE", "28800"))
serializer = URLSafeTimedSerializer(SECRET_KEY, salt="jelajah-mal selatan-auth")

app = FastAPI(title="API Jelajah Malang Selatan", version="1.0.0")
origins = [x.strip() for x in os.getenv("CORS_ORIGINS", "http://127.0.0.1:5500,http://localhost:5500,http://127.0.0.1:8000,http://localhost:8000").split(",") if x.strip()]
app.add_middleware(
    CORSMiddleware, allow_origins=origins, allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"],
)

def db():
    return pymysql.connect(**DB_CONFIG)

def token_for(user):
    return serializer.dumps({
        "id": user["id_pengguna"], "username": user["username"],
        "role": user["nama_role"], "desa": user.get("id_desa")
    })

def current_user(authorization: str | None = Header(default=None)):
    if not authorization or not authorization.lower().startswith("bearer "):
        raise HTTPException(401, "Silakan login terlebih dahulu.")
    raw = authorization.split(" ", 1)[1]
    try:
        payload = serializer.loads(raw, max_age=TOKEN_MAX_AGE)
    except SignatureExpired:
        raise HTTPException(401, "Sesi login kedaluwarsa. Silakan login kembali.")
    except BadSignature:
        raise HTTPException(401, "Token login tidak valid.")
    conn = db()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT p.id_pengguna,p.username,p.status, r.nama_role, pr.id_desa
                FROM pengguna p
                JOIN pengguna_role pr ON pr.id_pengguna=p.id_pengguna
                JOIN role r ON r.id_role=pr.id_role
                WHERE p.id_pengguna=%s
            """, (payload["id"],))
            user = cur.fetchone()
        if not user or user["status"] != "aktif":
            raise HTTPException(401, "Akun tidak aktif atau tidak ditemukan.")
        return user
    finally:
        conn.close()

def require_super(user=Depends(current_user)):
    if user["nama_role"] != "super":
        raise HTTPException(403, "Akses hanya untuk Admin Utama.")
    return user

class LoginBody(BaseModel):
    username: str
    password: str

@app.get("/api/health")
def health():
    try:
        conn = db()
        with conn.cursor() as cur:
            cur.execute("SELECT DATABASE() AS dbname")
            row = cur.fetchone()
        conn.close()
        return {"status": "ok", "database": row["dbname"], "time": datetime.now().isoformat()}
    except Exception as e:
        raise HTTPException(503, f"MariaDB tidak tersambung: {e}")

@app.post("/api/auth/login")
def login(body: LoginBody):
    conn = db()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT p.id_pengguna,p.username,p.password_hash,p.status,
                       r.nama_role,pr.id_desa
                FROM pengguna p
                JOIN pengguna_role pr ON pr.id_pengguna=p.id_pengguna
                JOIN role r ON r.id_role=pr.id_role
                WHERE p.username=%s
            """, (body.username.strip(),))
            user = cur.fetchone()
        if not user or user["status"] != "aktif" or not check_password_hash(user["password_hash"], body.password):
            raise HTTPException(401, "Username atau password salah, atau akun tidak aktif.")
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO riwayat_perubahan
                (id_riwayat,id_pengguna,nama_tabel,jenis_perubahan,keterangan)
                VALUES (%s,%s,'pengguna','LOGIN',%s)
            """, (__import__("uuid").uuid4().hex, user["id_pengguna"], "Login berhasil"))
        conn.commit()
        return {"access_token": token_for(user), "token_type": "bearer",
                "user": {"id": user["id_pengguna"], "username": user["username"],
                         "role": user["nama_role"], "id_desa": user["id_desa"]}}
    finally:
        conn.close()

@app.get("/api/auth/me")
def me(user=Depends(current_user)):
    return {"id": user["id_pengguna"], "username": user["username"],
            "role": user["nama_role"], "id_desa": user["id_desa"]}

# Daftar tabel dan kolom yang boleh diakses API. Nama tabel/kolom tidak pernah
# diambil langsung dari input pengguna.
RESOURCES = {
 "kecamatan": ("kecamatan", {"id_kecamatan","nama_kecamatan"}),
 "desa": ("desa", {"id_desa","id_kecamatan","nama_desa","deskripsi","foto_banner"}),
 "kategori-wisata": ("kategori_wisata", {"id_kategori_wisata","nama_kategori"}),
 "kategori-umkm": ("kategori_umkm", {"id_kategori_umkm","nama_kategori"}),
 "kategori-budaya": ("kategori_budaya", {"id_kategori_budaya","nama_kategori"}),
 "wisata": ("wisata", {"id_wisata","id_desa","id_kategori_wisata","id_mata_uang","nama_wisata","deskripsi","harga_tiket","rute_deskripsi","link_google_maps","latitude","longitude","is_featured","urutan_tampil","status_publikasi"}),
 "wisata-foto": ("wisata_foto", {"id_foto","id_wisata","url_foto","urutan","teks_alt"}),
 "resort": ("resort_penginapan", {"id_resort","id_mata_uang","nama_resort","jenis","harga_per_malam","kontak_reservasi","alamat","id_desa","latitude","longitude","foto_url","link_google_maps","status_publikasi"}),
 "umkm": ("komoditas_umkm", {"id_umkm","id_desa","id_kategori_umkm","id_mata_uang","nama_usaha","deskripsi_produk","harga_minimum","harga_maksimum","satuan_harga","lokasi","kontak","foto_url","link_google_maps","status_publikasi"}),
 "umkm-foto": ("umkm_foto", {"id_foto","id_umkm","url_foto","urutan","teks_alt"}),
 "event": ("acara", {"id_acara","id_desa","nama_acara","deskripsi","lokasi","tanggal_mulai","tanggal_selesai","sumber_informasi","status_verifikasi","status_publikasi"}),
 "budaya": ("tradisi_budaya", {"id_budaya","id_desa","id_kategori_budaya","nama_tradisi","deskripsi","jadwal_rutin","foto","status_publikasi"}),
 "ruas-jalan": ("ruas_jalan", {"id_ruas_jalan","nama_ruas","deskripsi_lokasi","latitude","longitude"}),
 "laporan-lalin": ("laporan_lalu_lintas", {"id_laporan","id_ruas_jalan","id_acara","id_pengguna","jenis","keterangan","mulai","berakhir","status_verifikasi","status_publikasi"}),
 "rute-alternatif": ("rute_alternatif", {"id_alternatif","id_laporan","nama_rute","url_google_maps"}),
 "damri": ("transportasi_damri", {"id_rute","nama_rute","tarif","id_mata_uang","catatan","sumber_informasi","diverifikasi","status_publikasi"}),
 "titik-damri": ("titik_pemberhentian", {"id_titik","nama_titik","alamat","latitude","longitude"}),
 "jadwal-damri": ("jadwal_damri", {"id_jadwal","id_rute","hari","waktu_berangkat","berlaku_mulai","berlaku_sampai","sumber_informasi","diverifikasi"}),
 "pengaturan-website": ("pengaturan_website", {"id_pengaturan","kunci_pengaturan","nilai_json","diperbarui_oleh"}),
 "pengaturan-banner": ("pengaturan_banner", {"id_banner","kode_seksi","label_banner","judul_banner","deskripsi_banner","daftar_foto","foto_aktif","diperbarui_oleh"}),
 "fasilitas": ("fasilitas_penginapan", {"id_fasilitas","nama_fasilitas","deskripsi"}),
}

PUBLIC_RESOURCES = {"kecamatan","desa","kategori-wisata","kategori-umkm","kategori-budaya",
                    "wisata","wisata-foto","resort","umkm","umkm-foto","event","budaya",
                    "ruas-jalan","rute-alternatif","damri","titik-damri","jadwal-damri",
                    "fasilitas","pengaturan-website","pengaturan-banner"}

def resource_or_404(name):
    if name not in RESOURCES:
        raise HTTPException(404, "Resource tidak ditemukan.")
    return RESOURCES[name]

def can_manage(user, resource, payload=None):
    if user["nama_role"] == "super":
        return
    # Pengelola desa hanya boleh mengelola data yang terkait desa miliknya.
    if user["nama_role"] != "desa":
        raise HTTPException(403, "Tidak memiliki izin.")
    table, _ = resource
    if table not in {"wisata","resort_penginapan","komoditas_umkm","acara","tradisi_budaya"}:
        raise HTTPException(403, "Resource ini hanya dapat dikelola Admin Utama.")
    desa_id = (payload or {}).get("id_desa") or user.get("id_desa")
    if not user.get("id_desa") or desa_id != user["id_desa"]:
        raise HTTPException(403, "Data berada di luar wilayah desa akun ini.")

@app.get("/api/{name}")
def list_resource(name: str, authorization: str | None = Header(default=None)):
    table, _ = resource_or_404(name)
    user = None
    if authorization and authorization.lower().startswith("bearer "):
        try:
            payload = serializer.loads(authorization.split(" ", 1)[1], max_age=TOKEN_MAX_AGE)
            conn_check = db()
            try:
                with conn_check.cursor() as cur:
                    cur.execute("""SELECT p.id_pengguna,p.username,p.status,r.nama_role,pr.id_desa
                                   FROM pengguna p JOIN pengguna_role pr ON pr.id_pengguna=p.id_pengguna
                                   JOIN role r ON r.id_role=pr.id_role WHERE p.id_pengguna=%s""",
                                (payload["id"],))
                    user = cur.fetchone()
            finally:
                conn_check.close()
        except (BadSignature, SignatureExpired, KeyError):
            user = None

    admin_only = {"pengaturan_website", "pengaturan_banner"}
    if table in admin_only and (not user or user["status"] != "aktif" or user["nama_role"] != "super"):
        raise HTTPException(403, "Pengaturan hanya dapat dibaca Admin Utama.")
    conn=db()
    try:
        with conn.cursor() as cur:
            scoped = {"wisata","resort_penginapan","komoditas_umkm","acara","tradisi_budaya"}
            if user and user["status"] == "aktif" and user["nama_role"] == "desa" and table in scoped:
                cur.execute(f"SELECT * FROM `{table}` WHERE id_desa=%s ORDER BY 1 DESC", (user["id_desa"],))
            elif user and user["status"] == "aktif" and user["nama_role"] == "super":
                cur.execute(f"SELECT * FROM `{table}` ORDER BY 1 DESC")
            elif table in {"wisata","resort_penginapan","komoditas_umkm","acara","tradisi_budaya","transportasi_damri"}:
                cur.execute(f"SELECT * FROM `{table}` WHERE status_publikasi='terbit' ORDER BY 1 DESC")
            else:
                cur.execute(f"SELECT * FROM `{table}` ORDER BY 1 DESC")
            return cur.fetchall()
    finally: conn.close()

@app.post("/api/{name}")
def create_resource(name: str, payload: dict[str, Any], user=Depends(current_user)):
    table, allowed = resource_or_404(name)
    can_manage(user, (table, allowed), payload)
    data={k:v for k,v in payload.items() if k in allowed}
    if not data: raise HTTPException(400, "Tidak ada kolom data yang valid.")
    if user["nama_role"] == "desa" and "id_desa" in allowed:
        data["id_desa"] = user["id_desa"]
    if "diperbarui_oleh" in allowed: data["diperbarui_oleh"] = user["id_pengguna"]
    cols=list(data)
    sql=f"INSERT INTO `{table}` ({','.join('`'+c+'`' for c in cols)}) VALUES ({','.join(['%s']*len(cols))})"
    conn=db()
    try:
        with conn.cursor() as cur: cur.execute(sql, tuple(data[c] for c in cols))
        conn.commit()
        return {"message":"Data berhasil ditambahkan.","id":next((v for k,v in data.items() if k.startswith("id_") and k not in {"id_desa","id_kecamatan","id_kategori_wisata","id_kategori_umkm"}),None)}
    except pymysql.MySQLError as e:
        conn.rollback(); raise HTTPException(400, f"Gagal menyimpan data: {e}")
    finally: conn.close()

@app.put("/api/{name}/{item_id}")
def update_resource(name: str, item_id: str, payload: dict[str, Any], user=Depends(current_user)):
    table, allowed = resource_or_404(name)
    can_manage(user, (table, allowed), payload)
    data={k:v for k,v in payload.items() if k in allowed and not k.startswith("id_")}
    if not data: raise HTTPException(400, "Tidak ada kolom yang dapat diperbarui.")
    primary=next((c for c in allowed if c.startswith("id_") and c not in {"id_desa","id_kecamatan","id_kategori_wisata","id_kategori_umkm","id_kategori_budaya","id_mata_uang","id_rute","id_titik","id_wisata","id_umkm","id_laporan","id_acara","id_resort","id_pengguna"}), None)
    # Primary key eksplisit per resource
    pk_map={"kecamatan":"id_kecamatan","desa":"id_desa","kategori-wisata":"id_kategori_wisata","kategori-umkm":"id_kategori_umkm","kategori-budaya":"id_kategori_budaya","wisata":"id_wisata","wisata-foto":"id_foto","resort":"id_resort","umkm":"id_umkm","umkm-foto":"id_foto","event":"id_acara","budaya":"id_budaya","ruas-jalan":"id_ruas_jalan","laporan-lalin":"id_laporan","rute-alternatif":"id_alternatif","damri":"id_rute","titik-damri":"id_titik","jadwal-damri":"id_jadwal","pengaturan-website":"id_pengaturan","pengaturan-banner":"id_banner","fasilitas":"id_fasilitas"}
    pk=pk_map[name]
    sets=",".join(f"`{c}`=%s" for c in data)
    conn=db()
    try:
        with conn.cursor() as cur:
            if user["nama_role"]=="desa" and "id_desa" in allowed:
                cur.execute(f"UPDATE `{table}` SET {sets} WHERE `{pk}`=%s AND id_desa=%s", (*data.values(),item_id,user["id_desa"]))
            else:
                cur.execute(f"UPDATE `{table}` SET {sets} WHERE `{pk}`=%s", (*data.values(),item_id))
            if cur.rowcount==0: raise HTTPException(404,"Data tidak ditemukan atau tidak memiliki akses.")
        conn.commit(); return {"message":"Data berhasil diperbarui."}
    except pymysql.MySQLError as e:
        conn.rollback(); raise HTTPException(400,f"Gagal memperbarui data: {e}")
    finally: conn.close()

@app.delete("/api/{name}/{item_id}")
def delete_resource(name: str, item_id: str, user=Depends(current_user)):
    table, allowed = resource_or_404(name)
    can_manage(user, (table, allowed))
    pk_map={"kecamatan":"id_kecamatan","desa":"id_desa","kategori-wisata":"id_kategori_wisata","kategori-umkm":"id_kategori_umkm","kategori-budaya":"id_kategori_budaya","wisata":"id_wisata","wisata-foto":"id_foto","resort":"id_resort","umkm":"id_umkm","umkm-foto":"id_foto","event":"id_acara","budaya":"id_budaya","ruas-jalan":"id_ruas_jalan","laporan-lalin":"id_laporan","rute-alternatif":"id_alternatif","damri":"id_rute","titik-damri":"id_titik","jadwal-damri":"id_jadwal","pengaturan-website":"id_pengaturan","pengaturan-banner":"id_banner","fasilitas":"id_fasilitas"}
    pk=pk_map[name]
    conn=db()
    try:
        with conn.cursor() as cur:
            if user["nama_role"]=="desa" and "id_desa" in allowed:
                cur.execute(f"DELETE FROM `{table}` WHERE `{pk}`=%s AND id_desa=%s",(item_id,user["id_desa"]))
            else: cur.execute(f"DELETE FROM `{table}` WHERE `{pk}`=%s",(item_id,))
            if cur.rowcount==0: raise HTTPException(404,"Data tidak ditemukan atau tidak memiliki akses.")
        conn.commit(); return {"message":"Data berhasil dihapus."}
    except pymysql.MySQLError as e:
        conn.rollback(); raise HTTPException(400,f"Gagal menghapus data: {e}")
    finally: conn.close()

@app.get("/")
def root():
    return {"message":"API Jelajah Malang Selatan aktif. Buka /docs untuk dokumentasi."}
