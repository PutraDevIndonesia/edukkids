# EDUKIDS — PERBAIKAN SERTIFIKAT, VALIDASI LENCANA, DAN SINKRONISASI DATA

Lakukan audit dan perbaikan pada fitur **Piagam Prestasi EduKids** dan sistem **Lencana & Penghargaan**. Ada dua masalah utama:

1. Pratinjau sertifikat terpotong dan bagian bawah sertifikat tidak terlihat dengan baik.
2. Pengguna sudah memperoleh minimal 1 bintang, tetapi lencana yang seharusnya terbuka masih berstatus terkunci.

Jangan langsung mengasumsikan masalah berasal dari server atau database. Periksa alur data dan kode secara menyeluruh untuk menemukan penyebab sebenarnya.

## A. PERBAIKI PRATINJAU SERTIFIKAT

### Masalah saat ini

- Sertifikat terlalu besar untuk area pratinjau modal.
- Bagian bawah sertifikat, termasuk informasi penerbitan, stempel, tanda tangan, atau footer, terpotong.
- Area preview memiliki tinggi terbatas sehingga keseluruhan sertifikat tidak terlihat.
- Modal harus tetap nyaman digunakan pada desktop maupun perangkat mobile.

### Ketentuan perbaikan

1. Tampilkan keseluruhan sertifikat A4 landscape dalam area preview, dari sudut atas sampai sudut bawah.
2. Pertahankan rasio aspek A4 landscape, yaitu sekitar 1,414:1.
3. Gunakan pendekatan responsive scaling berdasarkan lebar dan tinggi area yang tersedia.
4. Gunakan `object-fit: contain` apabila sertifikat dirender sebagai gambar, atau pendekatan rasio aspek yang setara jika sertifikat dibuat menggunakan HTML/CSS.
5. Jika tinggi modal terbatas, sesuaikan ukuran sertifikat terlebih dahulu. Jika tetap tidak muat, sediakan area preview yang dapat di-scroll secara vertikal tanpa memotong konten.
6. Jangan menggunakan `overflow: hidden` pada container yang menyebabkan bagian sertifikat hilang.
7. Pastikan header modal, pilihan cap, tombol cetak, dan tombol unduh tetap dapat diakses.
8. Pada layar kecil, modal boleh menggunakan hampir seluruh viewport dengan header dan footer yang tetap mudah dijangkau.

### Cetak dan unduh

- Hasil cetak harus berukuran A4 landscape.
- Hasil PDF dan PNG harus memuat sertifikat secara lengkap, bukan hanya bagian yang sedang terlihat di preview.
- Jangan mengambil screenshot dari container preview yang terpotong sebagai sumber file unduhan.
- Gunakan sumber render sertifikat lengkap yang sama untuk preview, PDF, dan PNG.
- Pastikan font, bingkai, stempel, tanda tangan, nama siswa, bintang, dan level tetap terlihat jelas.

## B. AUDIT LOGIKA PEMBUKAAN LENCANA

Saya telah memperoleh 1 bintang, tetapi lencana yang seharusnya terbuka masih terkunci. Periksa implementasi sistem lencana sebelum mengubah aturan pembukaan.

### Langkah pemeriksaan

1. Temukan konfigurasi seluruh lencana beserta kriteria pembukaannya.
2. Temukan sumber data bintang, XP, level, dan progres aktivitas siswa.
3. Periksa apakah halaman lencana membaca data dari sumber yang sama dengan halaman profil dan ringkasan reward.
4. Periksa apakah syarat pembukaan membandingkan jumlah bintang dengan benar.
5. Periksa kemungkinan kesalahan seperti:
   - Halaman lencana membaca field atau path database yang berbeda.
   - Data bintang belum diperbarui setelah aktivitas selesai.
   - Komponen lencana tidak melakukan render ulang setelah data berubah.
   - Nilai bintang tersimpan sebagai string dan dibandingkan secara keliru.
   - Logika pembukaan menggunakan XP atau jumlah aktivitas, padahal seharusnya menggunakan bintang.
   - Nama lencana atau ID kriterianya tidak cocok dengan konfigurasi yang tersimpan.
   - Status terkunci lama tetap dipakai meskipun syarat sudah terpenuhi.
   - Data progres dihitung dari sumber lokal yang berbeda dengan data reward yang ditampilkan.

Jangan langsung mengganti semua lencana menjadi terbuka. Setiap lencana harus mengikuti syarat resminya masing-masing.

## C. VERIFIKASI SYARAT LENCANA

Periksa lencana pertama, yaitu **Bintang Pertama**, yang berdasarkan tampilan sebelumnya mensyaratkan minimal 1 bintang.

Aturan yang diharapkan:

- Jika jumlah bintang valid kurang dari 1, lencana tetap terkunci.
- Jika jumlah bintang valid mencapai atau melebihi 1, lencana terbuka.
- Status lencana berubah otomatis setelah data progres berhasil diperbarui.
- Status lencana tidak kembali terkunci setelah halaman dimuat ulang jika progres sudah tersimpan.
- Lencana lainnya tetap mengikuti persyaratan masing-masing, seperti kategori mata pelajaran, jumlah sesi, atau pencapaian tertentu.

Gunakan satu fungsi evaluasi kriteria lencana yang konsisten agar halaman lencana dan detail lencana tidak memberikan status yang berbeda.

## D. PERIKSA DATABASE LOKAL DAN SERVER

Identifikasi arsitektur proyek yang benar sebelum mengubah penyimpanan.

Jangan mengasumsikan bahwa proyek menggunakan Firebase, SQLite, localStorage, atau server tertentu tanpa memeriksa kode aktual.

Periksa:

1. Apakah aplikasi berjalan dengan database lokal, API server, atau penyimpanan browser.
2. Di mana nilai bintang, XP, dan progres siswa benar-benar disimpan.
3. Apakah halaman profil, lencana, dan sertifikat menggunakan sumber data yang sama.
4. Apakah data berhasil dibaca setelah reload.
5. Apakah ada cache atau state lama yang menyebabkan nilai reward tidak terbarui.
6. Apakah proses pembukaan lencana dijalankan di frontend, backend, atau keduanya.
7. Apakah ada perbedaan antara data demo dan data pengguna aktif.
8. Apakah permintaan API gagal atau mengembalikan data yang tidak sesuai.

Jika terdapat database lokal dan server sekaligus, tentukan mana sumber data utama. Jangan membuat sinkronisasi ganda yang justru menyebabkan progres tertimpa atau kembali ke nilai lama.

Jika ditemukan masalah database, perbaiki berdasarkan bukti dari kode, respons API, dan data yang tersedia. Jangan menghapus database, mereset progres, atau mengubah data pengguna hanya untuk membuat lencana terlihat terbuka.

## E. SATUKAN SUMBER DATA PROGRES

Buat atau gunakan satu lapisan pengelolaan progres siswa yang menjadi acuan untuk:

- Ringkasan bintang dan XP pada navbar.
- Profil siswa.
- Halaman lencana dan penghargaan.
- Detail syarat pembukaan lencana.
- Piagam prestasi.

Pastikan setiap komponen menggunakan data progres aktual dari pengguna yang sedang login, bukan nilai demo atau nilai statis.

Sertifikat harus menampilkan data yang sesuai dengan progres sebenarnya, termasuk:
- Nama atau nama panggilan siswa yang dipilih dalam profil.
- Kelas atau tingkat petualangan jika tersedia.
- Jumlah bintang yang benar.
- Level yang benar.
- Tanggal penerbitan yang sesuai dengan aturan proyek.

Jangan menampilkan angka bintang atau level yang dibuat secara acak.

## F. STATUS LENCANA HARUS KONSISTEN

Bedakan status berikut dengan jelas:

- Terkunci: persyaratan belum terpenuhi.
- Terbuka: persyaratan sudah terpenuhi.
- Diperoleh: pencapaian benar-benar telah dicatat sebagai reward pengguna, jika proyek membedakan status terbuka dan diperoleh.

Jika sistem yang ada hanya menggunakan status terkunci dan terbuka, pertahankan model tersebut daripada menambahkan status baru tanpa kebutuhan.

Jika lencana terbuka otomatis saat syarat terpenuhi, simpan statusnya dengan aman sesuai arsitektur aplikasi. Jangan memberikan reward berulang setiap kali halaman dibuka.

## G. PENGUJIAN WAJIB

Lakukan pengujian menggunakan data uji yang terisolasi atau akun pengujian, tanpa mengubah progres pengguna sebenarnya.

**Skenario 1 — Nol bintang**
- Jumlah bintang: 0.
- Lencana Bintang Pertama harus terkunci.

**Skenario 2 — Satu bintang**
- Jumlah bintang: 1.
- Lencana Bintang Pertama harus terbuka sesuai kriteria yang sudah ditentukan.

**Skenario 3 — Reload halaman**
- Muat ulang halaman setelah progres tersimpan.
- Pastikan bintang dan status lencana tetap benar.

**Skenario 4 — Perubahan progres**
- Tambahkan bintang melalui mekanisme aktivitas yang sah.
- Pastikan navbar, profil, halaman lencana, dan sertifikat memperlihatkan nilai yang konsisten.

**Skenario 5 — Sertifikat**
- Pastikan seluruh sertifikat terlihat dalam preview.
- Unduh PNG dan PDF, kemudian periksa seluruh bagian hasilnya.
- Uji pada desktop dan mobile.

## H. BATASAN PERUBAHAN

- Pertahankan desain visual EduKids yang sudah ada.
- Jangan mengubah semua halaman atau routing yang tidak berkaitan.
- Jangan menghapus data pengguna.
- Jangan mengganti kriteria lencana tanpa alasan yang terverifikasi.
- Jangan membuat tombol dekoratif yang tidak berfungsi.
- Jangan menutupi bug dengan data statis atau memaksa status lencana menjadi terbuka.
- Jangan menyatakan masalah server telah diperbaiki sebelum melakukan pengujian.

## I. LAPORAN HASIL

Setelah selesai, berikan laporan singkat berisi:

1. Penyebab sertifikat terpotong.
2. Penyebab lencana tidak terbuka meskipun sudah memiliki 1 bintang.
3. Sumber data progres yang digunakan aplikasi.
4. File yang diubah dan alasan perubahannya.
5. Hasil pengujian pembukaan lencana, reload, cetak, dan unduh.
6. Apakah ditemukan masalah pada database lokal, server, API, atau hanya state frontend.

Prioritas utama adalah memperbaiki akar masalah, menjaga data pengguna tetap aman, dan memastikan semua fitur EduKids menggunakan progres yang benar-benar valid.