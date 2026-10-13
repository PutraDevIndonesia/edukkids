# EDUKIDS — PIAGAM PENGHARGAAN & SERTIFIKAT KELULUSAN PETUALANG

Implementasikan fitur cetak dan unduh Piagam Prestasi Belajar resmi untuk siswa anak SD di aplikasi EduKids. Fitur ini dirancang sebagai bentuk apresiasi visual yang nyata, memotivasi ketekunan anak, dan dapat diunduh atau dicetak oleh orang tua/guru sebagai kenang-kenangan.

Gunakan teknologi murni web tanpa ketergantungan library berat luar: memanfaatkan **HTML5 Canvas API** untuk rendering resolusi tinggi cetak (A4 landscape) dan **CSS Print Media / window.print()** untuk pencetakan dokumen PDF instan.

---

## 1. TUJUAN & NILAI EDUKASI
- **Apresiasi Positif Anak**: Menghadirkan penghargaan resmi atas misi belajar, akumulasi bintang, dan kenaikan level yang dicapai anak.
- **Keterlibatan Orang Tua**: Memungkinkan orang tua mencetak sertifikat fisik berkualitas tinggi untuk dipajang di meja belajar atau kamar anak.
- **Identitas Visual Konsisten**: Mengikuti tema warna ceria ramah anak (navy `#205784`, gold `#E5A823`, dan nuansa kertas piagam `#FFFDF8`).

---

## 2. INTEGRASI TITIK AKSES (ENTRY POINTS)
Tombol akses piagam ditempatkan secara terarah pada dua halaman utama refleksi prestasi:
1. **Halaman Album Prestasi (`src/pages/AchievementsPage.jsx`)**:
   - Ditempatkan di header bagian atas sejajar judul halaman sebagai tombol aksi utama berikon piagam (`FileText`).
2. **Halaman Laporan Rapor Belajar (`src/pages/ProgressPage.jsx`)**:
   - Ditempatkan berdampingan dengan ringkasan profil avatar anak agar orang tua dapat langsung mencetak saat melihat progres belajar.

---

## 3. ARSITEKTUR KOMPONEN (`CertificateModal.jsx`)
Komponen modal dialog interaktif (`src/components/features/CertificateModal.jsx`) dengan spesifikasi:

### A. Dimensi & Resolusi Tinggi Cetak
- Canvas dirender dengan resolusi **1200 x 850 piksel** (aspek rasio proporsional A4 landscape standar sertifikat).
- Preview di modal responsif menyesuaikan lebar layar perangkat (desktop, tablet, mobile).

### B. Komposisi Visual Sertifikat (Canvas Drawing)
1. **Latar Belakang**: Gradasi linier kertas piagam lembut (`#FFFDF8` ke `#FDF6E8`).
2. **Bingkai Ornamen Ganda**:
   - Border luar tebal warna Navy `#205784`.
   - Border dalam warna aksen tema (Gold `#E5A823` / warna maskot).
   - Aksen lengkung sudut seperempat lingkaran di ke-4 pojok canvas.
3. **Kop & Judul Penghargaan**:
   - Teks kop: `"AKADEMI PETUALANG BELAJAR EDUKIDS"` dengan letter-spacing lebar.
   - Judul utama berukuran besar: `"PIAGAM PENGHARGAAN"`.
   - Subjudul: `"SERTIFIKAT KELULUSAN & KETEKUNAN PETUALANG CILIK"`.
4. **Data Siswa Dinamis**:
   - Nama panggilan / nama lengkap siswa (`profile.nickname` / `profile.fullName`).
   - Jenjang pendidikan: `"Siswa Penjelajah Kelas [grade] SD"`.
   - Kalimat apresiasi resmi dari Akademi EduKids.
5. **Kotak Metrik Pencapaian**:
   - Total Bintang Prestasi (`★ [stars]`).
   - Tingkat / Level Petualang (`Lv. [level]`).
6. **Tanggal & Tanda Tangan Virtual**:
   - Tanggal terbit otomatis mengikuti tanggal lokal format Indonesia (`id-ID`).
   - Tanda tangan penanggung jawab / maskot pilihan.
   - Stempel cap resmi lingkaran bergerigi dengan lambang ikonik.

---

## 4. SISTEM PILIHAN CAP & STEMPEL MASKOT INTERAKTIF
Anak dan orang tua dapat memilih karakter pendamping yang menandatangani sertifikat:
- **Akademi Resmi** (Warna Gold `#E5A823` | Penandatangan: *Tim Akademi EduKids*)
- **Kiko si Kelinci** (Warna Biru `#2875B8` | Penandatangan: *Kiko si Pemandu Petualang*)
- **Mimi si Kucing** (Warna Oranye `#D97706` | Penandatangan: *Mimi si Ahli Sains & Hitung*)
- **Bimo si Beruang** (Warna Hijau `#059669` | Penandatangan: *Bimo si Penjaga Alam*)

Ketika tombol pilihan cap diklik, canvas secara instan merender ulang warna border aksen, stempel cap, nama penandatangan, dan gelar sahabat petualang.

---

## 5. AUDIO SELEBRASI KEMENANGAN (FANFARE)
- Memanfaatkan **Web Audio API** native (`src/utils/soundFx.js`) melalui metode `soundFx.playFanfare()`.
- Menggunakan 4 melodi nada terompet naik yang megah (C5 `523Hz` -> E5 `659Hz` -> G5 `783Hz` -> C6 `1046Hz`) saat modal sertifikat pertama kali terbuka.
- Tidak membutuhkan file audio eksternal (`.mp3`/`.wav`), sehingga ringan, hemat memori, dan dapat berjalan secara luring (*offline*).

---

## 6. OPSI OUTPUT PENGGUNA
1. **Unduh Gambar PNG (`handleDownloadImage`)**:
   - Mengambil data URL canvas (`canvas.toDataURL('image/png')`).
   - Memicu unduhan otomatis dengan penamaan rapi: `Piagam-EduKids-[Nama_Anak].png`.
2. **Cetak Langsung / Simpan PDF (`handlePrint`)**:
   - Membuka popup cetak dengan aturan CSS `@page { size: landscape; margin: 0; }`.
   - Otomatis memicu dialog `window.print()` browser pengguna (memungkinkan opsi *Save as PDF* atau cetak langsung ke printer fisik).

---

## 7. FITUR PENDUKUNG TERKAIT (TEXT-TO-SPEECH)
- **Pengaturan Narasi Otomatis** (`src/pages/SettingsPage.jsx`):
  - Toggle switch untuk menyalakan/mematikan pembacaan soal otomatis.
  - Tombol uji dengar narasi.
- **Pembaca Soal Otomatis Kuis** (`src/pages/QuizPlayPage.jsx`):
  - Memanfaatkan `speechService` bawaan browser (`window.speechSynthesis`).
  - Membantu anak kelas rendah SD yang masih belajar membaca lancar.
