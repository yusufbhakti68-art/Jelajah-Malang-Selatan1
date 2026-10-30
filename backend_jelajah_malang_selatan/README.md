# Backend Jelajah Malang Selatan

Backend REST API menggunakan FastAPI + MariaDB, disesuaikan dengan skema SQL yang diberikan.

## 1. Persiapan
- Jalankan MySQL/MariaDB melalui XAMPP.
- Import `database_jelajah_malang_selatan_terintegrasi.sql` melalui phpMyAdmin **hanya jika database masih baru/kosong**. Skrip SQL ini melakukan DROP dan membuat ulang tabel.
- Pastikan database `jelajah_malang_selatan` sudah terbentuk.

## 2. Instalasi (Windows)
Buka CMD/PowerShell di folder backend:

```bash
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
```

Edit `.env`: sesuaikan DB_USER dan DB_PASSWORD dengan akun MariaDB XAMPP. Ganti SECRET_KEY dengan string acak panjang.

## 3. Buat akun Admin Utama
Skema SQL tidak menyediakan akun admin bawaan. Buat hash password dengan Python:

```bash
python -c "from werkzeug.security import generate_password_hash; print(generate_password_hash('GANTI_PASSWORD_KUAT'))"
```

Salin hasil hash, lalu jalankan SQL berikut di phpMyAdmin (ganti hash dan password jangan pernah disimpan sebagai teks biasa):

```sql
INSERT INTO role (id_role, nama_role) VALUES ('ROLE-SUPER', 'super');
INSERT INTO pengguna (id_pengguna, username, password_hash, status)
VALUES ('USR-ADMIN-001', 'admin', 'TEMPEL_HASH_DI_SINI', 'aktif');
INSERT INTO pengguna_role (id_pengguna_role, id_pengguna, id_role, id_desa)
VALUES ('PR-ADMIN-001', 'USR-ADMIN-001', 'ROLE-SUPER', NULL);
```

## 4. Jalankan backend
```bash
uvicorn app:app --host 127.0.0.1 --port 8000 --reload
```
Buka `http://127.0.0.1:8000/api/health` dan `http://127.0.0.1:8000/docs`.

## 5. Endpoint utama
- `GET /api/health` - cek API dan database.
- `POST /api/auth/login` - body JSON `{"username":"admin","password":"PASSWORD"}`
- `GET /api/auth/me` - profil sesi (Bearer token).
- `GET /api/wisata`, `/api/desa`, `/api/umkm`, `/api/resort`, `/api/event`, `/api/damri`, dan resource lain.
- `POST /api/{resource}`, `PUT /api/{resource}/{id}`, `DELETE /api/{resource}/{id}` - operasi data (Bearer token).

Contoh header untuk endpoint yang memerlukan login:
`Authorization: Bearer TOKEN_DARI_LOGIN`

## Catatan integrasi frontend
File HTML yang diberikan saat ini masih menyimpan sebagian besar data dan akun admin di `localStorage`. Backend ini menyediakan REST API, tetapi halaman belum otomatis berpindah dari LocalStorage ke API. Fungsi login frontend juga masih memeriksa akun hardcoded (`admin` / `admin123`), sehingga perlu diganti agar memanggil `POST /api/auth/login`, menyimpan token sesi, lalu mengirim header Authorization pada permintaan data.

Endpoint scraper Google Maps `/api/scrape-maps` belum disertakan; fitur tersebut membutuhkan implementasi Playwright dan aturan penyimpanan/validasi tersendiri.
