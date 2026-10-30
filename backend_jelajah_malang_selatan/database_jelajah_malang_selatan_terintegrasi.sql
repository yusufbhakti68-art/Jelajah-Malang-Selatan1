-- ============================================================
-- JELAJAH MALANG SELATAN - PORTAL WISATA TERPADU
-- Skema MariaDB yang disempurnakan untuk proyek Jelajah Malang Selatan
-- id_mata_uang pada wisata, resort, UMKM, dan DAMRI memiliki DEFAULT 'IDR'.
-- Penambahan: umkm_foto, pengaturan_website (JSON), pengaturan_banner (JSON),
-- kolom rute_titik.keterangan_titik, DEFAULT IDR, dan satu role per pengguna.
-- Skrip ini DROP dan membuat ulang tabel.
-- HANYA jalankan pada database BARU/PENGEMBANGAN.
-- Jangan jalankan pada database berisi data penting karena data akan terhapus.
-- ============================================================

CREATE DATABASE IF NOT EXISTS jelajah_malang_selatan
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE jelajah_malang_selatan;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- Menghapus tabel dari anak ke induk agar skrip dapat dijalankan ulang.
DROP TABLE IF EXISTS pengaturan_banner;
DROP TABLE IF EXISTS pengaturan_website;
DROP TABLE IF EXISTS jadwal_damri;
DROP TABLE IF EXISTS rute_titik;
DROP TABLE IF EXISTS titik_pemberhentian;
DROP TABLE IF EXISTS transportasi_damri;
DROP TABLE IF EXISTS riwayat_perubahan;
DROP TABLE IF EXISTS rating_wisata;
DROP TABLE IF EXISTS pengguna_role;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS informasi_lalu_lintas;
DROP TABLE IF EXISTS rute_alternatif;
DROP TABLE IF EXISTS laporan_lalu_lintas;
DROP TABLE IF EXISTS acara;
DROP TABLE IF EXISTS ruas_jalan;
DROP TABLE IF EXISTS tradisi_budaya;
DROP TABLE IF EXISTS kategori_budaya;
DROP TABLE IF EXISTS jam_operasional_umkm;
DROP TABLE IF EXISTS umkm_foto;
DROP TABLE IF EXISTS komoditas_umkm;
DROP TABLE IF EXISTS kategori_umkm;
DROP TABLE IF EXISTS resort_fasilitas;
DROP TABLE IF EXISTS wisata_penginapan;
DROP TABLE IF EXISTS resort_foto;
DROP TABLE IF EXISTS resort_penginapan;
DROP TABLE IF EXISTS fasilitas_penginapan;
DROP TABLE IF EXISTS jam_operasional_wisata;
DROP TABLE IF EXISTS wisata_foto;
DROP TABLE IF EXISTS wisata;
DROP TABLE IF EXISTS kategori_wisata;
DROP TABLE IF EXISTS desa;
DROP TABLE IF EXISTS mata_uang;
DROP TABLE IF EXISTS kecamatan;
DROP TABLE IF EXISTS pengguna;

SET FOREIGN_KEY_CHECKS = 1;

-- 1. Kecamatan
CREATE TABLE kecamatan (
    id_kecamatan VARCHAR(36) PRIMARY KEY,
    nama_kecamatan VARCHAR(120) NOT NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Mata uang
CREATE TABLE mata_uang (
    id_mata_uang VARCHAR(36) PRIMARY KEY,
    kode_mata_uang VARCHAR(10) NOT NULL,
    nama_mata_uang VARCHAR(80) NOT NULL,
    simbol VARCHAR(10) NOT NULL,
    UNIQUE KEY uq_mata_uang_kode (kode_mata_uang)
) ENGINE=InnoDB;

-- 3. Kategori wisata
CREATE TABLE kategori_wisata (
    id_kategori_wisata VARCHAR(36) PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL,
    UNIQUE KEY uq_kategori_wisata_nama (nama_kategori)
) ENGINE=InnoDB;

-- 4. Kategori UMKM
CREATE TABLE kategori_umkm (
    id_kategori_umkm VARCHAR(36) PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL,
    UNIQUE KEY uq_kategori_umkm_nama (nama_kategori)
) ENGINE=InnoDB;

-- 5. Kategori budaya
CREATE TABLE kategori_budaya (
    id_kategori_budaya VARCHAR(36) PRIMARY KEY,
    nama_kategori VARCHAR(100) NOT NULL,
    UNIQUE KEY uq_kategori_budaya_nama (nama_kategori)
) ENGINE=InnoDB;

-- 6. Desa
CREATE TABLE desa (
    id_desa VARCHAR(36) PRIMARY KEY,
    id_kecamatan VARCHAR(36) NULL,
    nama_desa VARCHAR(120) NOT NULL,
    deskripsi TEXT NULL,
    foto_banner VARCHAR(500) NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_desa_kecamatan FOREIGN KEY (id_kecamatan)
      REFERENCES kecamatan(id_kecamatan)
      ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_desa_nama (nama_desa),
    KEY idx_desa_kecamatan (id_kecamatan)
) ENGINE=InnoDB;

-- 7. Pengguna/admin
CREATE TABLE pengguna (
    id_pengguna VARCHAR(36) PRIMARY KEY,
    username VARCHAR(80) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    status ENUM('aktif','nonaktif','terkunci') NOT NULL DEFAULT 'aktif',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_pengguna_username (username)
) ENGINE=InnoDB;

-- 8. Wisata
CREATE TABLE wisata (
    id_wisata VARCHAR(36) PRIMARY KEY,
    id_desa VARCHAR(36) NULL,
    id_kategori_wisata VARCHAR(36) NULL,
    id_mata_uang VARCHAR(36) NULL DEFAULT 'IDR',
    nama_wisata VARCHAR(180) NOT NULL,
    deskripsi TEXT NULL,
    harga_tiket DECIMAL(12,2) NULL DEFAULT 0.00,
    rute_deskripsi TEXT NULL,
    link_google_maps VARCHAR(1000) NULL,
    latitude DECIMAL(10,7) NULL,
    longitude DECIMAL(10,7) NULL,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    urutan_tampil INT NOT NULL DEFAULT 0,
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_wisata_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_wisata_kategori FOREIGN KEY (id_kategori_wisata)
      REFERENCES kategori_wisata(id_kategori_wisata) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_wisata_mata_uang FOREIGN KEY (id_mata_uang)
      REFERENCES mata_uang(id_mata_uang) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_wisata_nama (nama_wisata),
    KEY idx_wisata_desa (id_desa),
    KEY idx_wisata_kategori (id_kategori_wisata),
    KEY idx_wisata_featured (is_featured, urutan_tampil),
    KEY idx_wisata_status (status_publikasi)
) ENGINE=InnoDB;

-- 9. Foto wisata (dibuat setelah tabel wisata)
CREATE TABLE wisata_foto (
    id_foto VARCHAR(36) PRIMARY KEY,
    id_wisata VARCHAR(36) NOT NULL,
    url_foto VARCHAR(1000) NOT NULL,
    urutan INT NOT NULL DEFAULT 0,
    teks_alt VARCHAR(255) NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_wisata_foto_wisata FOREIGN KEY (id_wisata)
      REFERENCES wisata(id_wisata) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_wisata_foto_urutan (id_wisata, urutan)
) ENGINE=InnoDB;

-- 10. Jam operasional wisata
CREATE TABLE jam_operasional_wisata (
    id_jam_wisata VARCHAR(36) PRIMARY KEY,
    id_wisata VARCHAR(36) NOT NULL,
    hari ENUM('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu','Setiap hari') NOT NULL,
    jam_buka TIME NULL,
    jam_tutup TIME NULL,
    tutup BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_jam_wisata_wisata FOREIGN KEY (id_wisata)
      REFERENCES wisata(id_wisata) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_jam_wisata (id_wisata, hari)
) ENGINE=InnoDB;

-- 11. Fasilitas penginapan
CREATE TABLE fasilitas_penginapan (
    id_fasilitas VARCHAR(36) PRIMARY KEY,
    nama_fasilitas VARCHAR(120) NOT NULL,
    deskripsi TEXT NULL,
    UNIQUE KEY uq_fasilitas_nama (nama_fasilitas)
) ENGINE=InnoDB;

-- 12. Resort/penginapan
CREATE TABLE resort_penginapan (
    id_resort VARCHAR(36) PRIMARY KEY,
    id_mata_uang VARCHAR(36) NULL DEFAULT 'IDR',
    nama_resort VARCHAR(180) NOT NULL,
    jenis VARCHAR(80) NULL,
    harga_per_malam DECIMAL(12,2) NULL,
    kontak_reservasi VARCHAR(100) NULL,
    alamat TEXT NULL,
    id_desa VARCHAR(36) NULL,
    latitude DECIMAL(10,7) NULL,
    longitude DECIMAL(10,7) NULL,
    foto_url VARCHAR(1000) NULL,
    link_google_maps VARCHAR(1000) NULL,
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_resort_mata_uang FOREIGN KEY (id_mata_uang)
      REFERENCES mata_uang(id_mata_uang) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_resort_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_resort_nama (nama_resort),
    KEY idx_resort_desa (id_desa),
    KEY idx_resort_status (status_publikasi)
) ENGINE=InnoDB;

-- 13. Galeri foto penginapan (opsional, untuk lebih dari satu foto)
CREATE TABLE resort_foto (
    id_foto VARCHAR(36) PRIMARY KEY,
    id_resort VARCHAR(36) NOT NULL,
    url_foto VARCHAR(1000) NOT NULL,
    urutan INT NOT NULL DEFAULT 0,
    teks_alt VARCHAR(255) NULL,
    CONSTRAINT fk_resort_foto_resort FOREIGN KEY (id_resort)
      REFERENCES resort_penginapan(id_resort) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_resort_foto_urutan (id_resort, urutan)
) ENGINE=InnoDB;

-- 14. Relasi wisata dan penginapan
CREATE TABLE wisata_penginapan (
    id_wisata VARCHAR(36) NOT NULL,
    id_resort VARCHAR(36) NOT NULL,
    jarak_km DECIMAL(8,2) NULL,
    PRIMARY KEY (id_wisata, id_resort),
    CONSTRAINT fk_wisata_penginapan_wisata FOREIGN KEY (id_wisata)
      REFERENCES wisata(id_wisata) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_wisata_penginapan_resort FOREIGN KEY (id_resort)
      REFERENCES resort_penginapan(id_resort) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- 15. Relasi fasilitas penginapan
CREATE TABLE resort_fasilitas (
    id_resort VARCHAR(36) NOT NULL,
    id_fasilitas VARCHAR(36) NOT NULL,
    keterangan VARCHAR(255) NULL,
    PRIMARY KEY (id_resort, id_fasilitas),
    CONSTRAINT fk_resort_fasilitas_resort FOREIGN KEY (id_resort)
      REFERENCES resort_penginapan(id_resort) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_resort_fasilitas_fasilitas FOREIGN KEY (id_fasilitas)
      REFERENCES fasilitas_penginapan(id_fasilitas) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- 16. Komoditas/usaha UMKM
CREATE TABLE komoditas_umkm (
    id_umkm VARCHAR(36) PRIMARY KEY,
    id_desa VARCHAR(36) NULL,
    id_kategori_umkm VARCHAR(36) NULL,
    id_mata_uang VARCHAR(36) NULL DEFAULT 'IDR',
    nama_usaha VARCHAR(180) NOT NULL,
    deskripsi_produk TEXT NULL,
    harga_minimum DECIMAL(12,2) NULL,
    harga_maksimum DECIMAL(12,2) NULL,
    satuan_harga VARCHAR(50) NULL,
    lokasi TEXT NULL,
    kontak VARCHAR(100) NULL,
    foto_url VARCHAR(1000) NULL,
    link_google_maps VARCHAR(1000) NULL,
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_umkm_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_umkm_kategori FOREIGN KEY (id_kategori_umkm)
      REFERENCES kategori_umkm(id_kategori_umkm) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_umkm_mata_uang FOREIGN KEY (id_mata_uang)
      REFERENCES mata_uang(id_mata_uang) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_umkm_nama (nama_usaha),
    KEY idx_umkm_desa (id_desa),
    KEY idx_umkm_kategori (id_kategori_umkm),
    KEY idx_umkm_status (status_publikasi),
    CONSTRAINT chk_umkm_rentang_harga
      CHECK (harga_minimum IS NULL OR harga_maksimum IS NULL OR harga_minimum <= harga_maksimum)
) ENGINE=InnoDB;

-- 17. Galeri foto UMKM (foto_url pada komoditas_umkm tetap menjadi foto utama)
CREATE TABLE umkm_foto (
    id_foto VARCHAR(36) PRIMARY KEY,
    id_umkm VARCHAR(36) NOT NULL,
    url_foto VARCHAR(1000) NOT NULL,
    urutan INT NOT NULL DEFAULT 0,
    teks_alt VARCHAR(255) NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_umkm_foto_umkm FOREIGN KEY (id_umkm)
      REFERENCES komoditas_umkm(id_umkm) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_umkm_foto_urutan (id_umkm, urutan)
) ENGINE=InnoDB;

-- 18. Jam operasional UMKM
CREATE TABLE jam_operasional_umkm (
    id_jam_umkm VARCHAR(36) PRIMARY KEY,
    id_umkm VARCHAR(36) NOT NULL,
    hari ENUM('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu','Setiap hari') NOT NULL,
    jam_buka TIME NULL,
    jam_tutup TIME NULL,
    tutup BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_jam_umkm_umkm FOREIGN KEY (id_umkm)
      REFERENCES komoditas_umkm(id_umkm) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_jam_umkm (id_umkm, hari)
) ENGINE=InnoDB;

-- 18. Tradisi budaya
CREATE TABLE tradisi_budaya (
    id_budaya VARCHAR(36) PRIMARY KEY,
    id_desa VARCHAR(36) NULL,
    id_kategori_budaya VARCHAR(36) NULL,
    nama_tradisi VARCHAR(180) NOT NULL,
    deskripsi TEXT NULL,
    jadwal_rutin VARCHAR(255) NULL,
    foto VARCHAR(1000) NULL,
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_budaya_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_budaya_kategori FOREIGN KEY (id_kategori_budaya)
      REFERENCES kategori_budaya(id_kategori_budaya) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_budaya_nama (nama_tradisi),
    KEY idx_budaya_desa (id_desa),
    KEY idx_budaya_status (status_publikasi)
) ENGINE=InnoDB;

-- 19. Ruas jalan
CREATE TABLE ruas_jalan (
    id_ruas_jalan VARCHAR(36) PRIMARY KEY,
    nama_ruas VARCHAR(180) NOT NULL,
    deskripsi_lokasi TEXT NULL,
    latitude DECIMAL(10,7) NULL,
    longitude DECIMAL(10,7) NULL,
    KEY idx_ruas_nama (nama_ruas)
) ENGINE=InnoDB;

-- 20. Acara/event
CREATE TABLE acara (
    id_acara VARCHAR(36) PRIMARY KEY,
    id_desa VARCHAR(36) NULL,
    nama_acara VARCHAR(180) NOT NULL,
    deskripsi TEXT NULL,
    lokasi VARCHAR(255) NULL,
    tanggal_mulai DATETIME NULL,
    tanggal_selesai DATETIME NULL,
    sumber_informasi VARCHAR(500) NULL,
    status_verifikasi ENUM('belum_verifikasi','terverifikasi','ditolak') NOT NULL DEFAULT 'belum_verifikasi',
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_acara_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_acara_tanggal (tanggal_mulai, tanggal_selesai),
    KEY idx_acara_status (status_publikasi, status_verifikasi)
) ENGINE=InnoDB;

-- 21. Role pengguna
CREATE TABLE role (
    id_role VARCHAR(36) PRIMARY KEY,
    nama_role VARCHAR(80) NOT NULL,
    UNIQUE KEY uq_role_nama (nama_role)
) ENGINE=InnoDB;

-- 22. Relasi pengguna-role
CREATE TABLE pengguna_role (
    id_pengguna_role VARCHAR(36) PRIMARY KEY,
    id_pengguna VARCHAR(36) NOT NULL,
    id_role VARCHAR(36) NOT NULL,
    id_desa VARCHAR(36) NULL,
    CONSTRAINT fk_pengguna_role_pengguna FOREIGN KEY (id_pengguna)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_pengguna_role_role FOREIGN KEY (id_role)
      REFERENCES role(id_role) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_pengguna_role_desa FOREIGN KEY (id_desa)
      REFERENCES desa(id_desa) ON UPDATE CASCADE ON DELETE SET NULL,
    UNIQUE KEY uq_pengguna_satu_role (id_pengguna),
    UNIQUE KEY uq_pengguna_role (id_pengguna, id_role, id_desa),
    KEY idx_pengguna_role_desa (id_desa)
) ENGINE=InnoDB;

-- 23. Pengaturan website (JSON untuk konfigurasi yang fleksibel seperti logo/footer/nav)
CREATE TABLE pengaturan_website (
    id_pengaturan VARCHAR(36) PRIMARY KEY,
    kunci_pengaturan VARCHAR(120) NOT NULL,
    nilai_json JSON NOT NULL,
    diperbarui_oleh VARCHAR(36) NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_pengaturan_website_pengguna FOREIGN KEY (diperbarui_oleh)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE SET NULL,
    UNIQUE KEY uq_pengaturan_website_kunci (kunci_pengaturan)
) ENGINE=InnoDB;

-- 24. Konten banner per tab (Wisata, UMKM, Event Budaya)
CREATE TABLE pengaturan_banner (
    id_banner VARCHAR(36) PRIMARY KEY,
    kode_seksi ENUM('wisata','umkm','event') NOT NULL,
    label_banner VARCHAR(180) NULL,
    judul_banner VARCHAR(255) NOT NULL,
    deskripsi_banner TEXT NULL,
    daftar_foto JSON NULL,
    foto_aktif INT NOT NULL DEFAULT 0,
    diperbarui_oleh VARCHAR(36) NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_pengaturan_banner_pengguna FOREIGN KEY (diperbarui_oleh)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE SET NULL,
    UNIQUE KEY uq_pengaturan_banner_seksi (kode_seksi)
) ENGINE=InnoDB;

-- 25. Laporan lalu lintas
CREATE TABLE laporan_lalu_lintas (
    id_laporan VARCHAR(36) PRIMARY KEY,
    id_ruas_jalan VARCHAR(36) NULL,
    id_acara VARCHAR(36) NULL,
    id_pengguna VARCHAR(36) NULL,
    jenis VARCHAR(80) NULL,
    keterangan TEXT NULL,
    mulai DATETIME NULL,
    berakhir DATETIME NULL,
    status_verifikasi ENUM('belum_verifikasi','terverifikasi','ditolak') NOT NULL DEFAULT 'belum_verifikasi',
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    diperbarui_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_lalin_ruas FOREIGN KEY (id_ruas_jalan)
      REFERENCES ruas_jalan(id_ruas_jalan) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_lalin_acara FOREIGN KEY (id_acara)
      REFERENCES acara(id_acara) ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_lalin_pengguna FOREIGN KEY (id_pengguna)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_lalin_waktu (mulai, berakhir),
    KEY idx_lalin_status (status_publikasi, status_verifikasi)
) ENGINE=InnoDB;

-- 26. Rute alternatif lalu lintas
CREATE TABLE rute_alternatif (
    id_alternatif VARCHAR(36) PRIMARY KEY,
    id_laporan VARCHAR(36) NOT NULL,
    nama_rute VARCHAR(180) NOT NULL,
    url_google_maps VARCHAR(1000) NULL,
    CONSTRAINT fk_rute_alternatif_laporan FOREIGN KEY (id_laporan)
      REFERENCES laporan_lalu_lintas(id_laporan) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_rute_alternatif_laporan (id_laporan)
) ENGINE=InnoDB;

-- 27. Informasi lalu lintas untuk tampilan/banner frontend
CREATE TABLE informasi_lalu_lintas (
    id_info_lalu_lintas VARCHAR(36) PRIMARY KEY,
    id_laporan VARCHAR(36) NULL,
    judul_acara VARCHAR(180) NOT NULL,
    lokasi_dampak VARCHAR(255) NULL,
    tanggal_mulai DATETIME NULL,
    tanggal_selesai DATETIME NULL,
    status ENUM('aktif','selesai','dibatalkan') NOT NULL DEFAULT 'aktif',
    CONSTRAINT fk_info_lalin_laporan FOREIGN KEY (id_laporan)
      REFERENCES laporan_lalu_lintas(id_laporan) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_info_lalin_status_waktu (status, tanggal_mulai, tanggal_selesai)
) ENGINE=InnoDB;

-- 28. Rating wisata
CREATE TABLE rating_wisata (
    id_rating VARCHAR(36) PRIMARY KEY,
    id_wisata VARCHAR(36) NOT NULL,
    id_pengguna VARCHAR(36) NULL,
    nilai_rating TINYINT UNSIGNED NOT NULL,
    dibuat_pada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_rating_wisata CHECK (nilai_rating BETWEEN 1 AND 5),
    CONSTRAINT fk_rating_wisata_wisata FOREIGN KEY (id_wisata)
      REFERENCES wisata(id_wisata) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_rating_wisata_pengguna FOREIGN KEY (id_pengguna)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_rating_wisata (id_wisata),
    KEY idx_rating_pengguna (id_pengguna)
) ENGINE=InnoDB;

-- 29. Riwayat perubahan/audit log
CREATE TABLE riwayat_perubahan (
    id_riwayat VARCHAR(36) PRIMARY KEY,
    id_pengguna VARCHAR(36) NULL,
    nama_tabel VARCHAR(100) NOT NULL,
    id_data VARCHAR(36) NULL,
    jenis_perubahan ENUM('INSERT','UPDATE','DELETE','LOGIN','LOGOUT') NOT NULL,
    waktu_perubahan DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    keterangan TEXT NULL,
    CONSTRAINT fk_riwayat_pengguna FOREIGN KEY (id_pengguna)
      REFERENCES pengguna(id_pengguna) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_riwayat_tabel_data (nama_tabel, id_data),
    KEY idx_riwayat_waktu (waktu_perubahan)
) ENGINE=InnoDB;

-- 30. Rute transportasi DAMRI
CREATE TABLE transportasi_damri (
    id_rute VARCHAR(36) PRIMARY KEY,
    nama_rute VARCHAR(180) NOT NULL,
    tarif DECIMAL(12,2) NULL,
    id_mata_uang VARCHAR(36) NULL DEFAULT 'IDR',
    catatan TEXT NULL,
    sumber_informasi VARCHAR(500) NULL,
    diverifikasi BOOLEAN NOT NULL DEFAULT FALSE,
    status_publikasi ENUM('draft','terbit','arsip') NOT NULL DEFAULT 'draft',
    CONSTRAINT fk_damri_mata_uang FOREIGN KEY (id_mata_uang)
      REFERENCES mata_uang(id_mata_uang) ON UPDATE CASCADE ON DELETE SET NULL,
    KEY idx_damri_nama (nama_rute),
    KEY idx_damri_status (status_publikasi)
) ENGINE=InnoDB;

-- 31. Titik pemberhentian DAMRI
CREATE TABLE titik_pemberhentian (
    id_titik VARCHAR(36) PRIMARY KEY,
    nama_titik VARCHAR(180) NOT NULL,
    alamat TEXT NULL,
    latitude DECIMAL(10,7) NULL,
    longitude DECIMAL(10,7) NULL,
    KEY idx_titik_nama (nama_titik)
) ENGINE=InnoDB;

-- 32. Relasi urutan titik pada rute DAMRI
CREATE TABLE rute_titik (
    id_rute VARCHAR(36) NOT NULL,
    id_titik VARCHAR(36) NOT NULL,
    urutan INT NOT NULL DEFAULT 0,
    keterangan_titik VARCHAR(255) NULL,
    PRIMARY KEY (id_rute, id_titik),
    CONSTRAINT fk_rute_titik_rute FOREIGN KEY (id_rute)
      REFERENCES transportasi_damri(id_rute) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_rute_titik_titik FOREIGN KEY (id_titik)
      REFERENCES titik_pemberhentian(id_titik) ON UPDATE CASCADE ON DELETE CASCADE,
    UNIQUE KEY uq_rute_urutan (id_rute, urutan)
) ENGINE=InnoDB;

-- 33. Jadwal DAMRI
CREATE TABLE jadwal_damri (
    id_jadwal VARCHAR(36) PRIMARY KEY,
    id_rute VARCHAR(36) NOT NULL,
    hari ENUM('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu','Setiap hari') NOT NULL,
    waktu_berangkat TIME NOT NULL,
    berlaku_mulai DATE NULL,
    berlaku_sampai DATE NULL,
    sumber_informasi VARCHAR(500) NULL,
    diverifikasi BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_jadwal_damri_rute FOREIGN KEY (id_rute)
      REFERENCES transportasi_damri(id_rute) ON UPDATE CASCADE ON DELETE CASCADE,
    KEY idx_jadwal_rute_hari (id_rute, hari, waktu_berangkat)
) ENGINE=InnoDB;

-- Nilai awal mata uang rupiah (opsional; hapus jika ingin mengisi manual).
INSERT INTO mata_uang (id_mata_uang, kode_mata_uang, nama_mata_uang, simbol)
VALUES ('IDR', 'IDR', 'Rupiah Indonesia', 'Rp')
ON DUPLICATE KEY UPDATE nama_mata_uang = VALUES(nama_mata_uang);

-- Skema selesai. Tidak ada akun admin bawaan; buat admin dengan password hash
-- menggunakan backend Flask (werkzeug.security.generate_password_hash).
