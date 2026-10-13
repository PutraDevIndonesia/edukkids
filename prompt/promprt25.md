# FIX TOTAL MASKOT DAN ANIMASI SUKSES EDUKIDS — REACT JS

Perbaiki seluruh karakter maskot pada website EduKids. Saat ini terdapat masalah ketidaksesuaian warna tubuh, tangan, dan kaki, seperti yang terlihat pada screenshot karakter Bubu Beruang. Selain itu, animasi keberhasilan penyimpanan profil masih kurang ekspresif dan belum memberikan pengalaman menyenangkan kepada anak-anak.

Jangan hanya memperbaiki satu karakter. Audit dan benahi SELURUH maskot EduKids agar konsisten, berkualitas, dan siap digunakan dalam website edukasi anak kelas 1–6 SD.

## 1. Perbaiki Konsistensi Warna Semua Maskot

Periksa seluruh karakter yang tersedia:
- Kiko — kelinci putih.
- Mimi — kucing oranye.
- Luna — burung hantu ungu.
- Bubu — beruang cokelat.
- Piko — rubah oranye kemerahan.

Untuk setiap karakter, pastikan:
- Warna kepala, badan, tangan, lengan, kaki, dan telinga konsisten dengan identitas karakternya.
- Tangan dan kaki tidak berubah menjadi hijau, biru, abu-abu, atau warna lain yang tidak sesuai.
- Warna kulit atau bulu tidak berbeda antara bagian tubuh yang seharusnya sama.
- Outline, highlight, dan bayangan memiliki warna yang harmonis.
- Aksesori tetap konsisten dengan desain karakter aslinya.
- Proporsi kepala, badan, tangan, dan kaki tetap seimbang.

**Palet warna yang harus dipertahankan:**
- Kiko: bulu putih, detail telinga merah muda, aksen biru seperlunya.
- Mimi: bulu oranye dengan detail krem.
- Luna: bulu ungu dengan wajah dan detail yang sesuai desain aslinya.
- Bubu: bulu cokelat dengan moncong dan bagian perut berwarna cokelat muda.
- Piko: bulu oranye kemerahan dengan moncong dan detail krem.

Jangan mengganti warna karakter secara sembarangan. Gunakan palet asli yang sudah diterapkan pada profil dan komponen maskot lainnya.

## 2. Audit Sumber Masalah Warna

Sebelum mengubah desain, telusuri implementasi karakter dalam kode.

Periksa apakah karakter dibuat menggunakan:
- SVG dengan banyak elemen dan atribut `fill`.
- CSS dengan class yang saling menimpa.
- Beberapa gambar atau layer terpisah.
- Komponen React dengan variasi karakter.
- Animasi yang mengubah warna melalui state atau keyframes.

Cari penyebab ketidaksesuaian warna, termasuk:
- CSS global yang menimpa warna maskot.
- Properti `fill` atau `stroke` SVG yang tidak konsisten.
- Layer tangan atau kaki yang menggunakan warna dari karakter lain.
- Variabel warna yang tertukar.
- Penggunaan ulang komponen dengan konfigurasi warna yang salah.

Perbaiki sumber masalahnya, bukan sekadar menambahkan CSS baru di atas aturan lama.

## 3. Buat Sistem Warna Maskot yang Konsisten

Jika struktur proyek memungkinkan, buat konfigurasi warna terpusat untuk setiap karakter.

Contoh konsep:

- `character.primary`
- `character.secondary`
- `character.belly`
- `character.innerEar`
- `character.outline`
- `character.highlight`

Sesuaikan implementasinya dengan struktur proyek yang sebenarnya. Jangan membuat konfigurasi duplikat apabila sistem yang sama sudah tersedia.

Pastikan seluruh komponen yang menggunakan maskot mengambil desain dan warna dari sumber yang konsisten, termasuk:
- Avatar profil.
- Navbar.
- Dropdown profil.
- Halaman pemilihan karakter.
- Peta petualangan.
- Modal berhasil menyimpan profil.
- Halaman lencana dan sertifikat.
- Animasi karakter pada halaman lainnya.

## 4. Animasi Hore Ketika Profil Berhasil Disimpan

Setelah server atau database mengonfirmasi bahwa profil benar-benar berhasil disimpan, tampilkan animasi keberhasilan yang menyenangkan.

Urutan animasi:

1. Maskot berdiri pada posisi awal dengan warna dan proporsi yang benar.
2. Maskot menekuk badan sedikit sebagai persiapan melompat.
3. Maskot melompat dengan gerakan melengkung yang natural.
4. Saat berada di udara, kedua tangan terangkat sebagai tanda hore.
5. Kaki bergerak sedikit mengikuti gerakan lompatan.
6. Tambahkan ekspresi wajah gembira dan gerakan telinga atau aksesori jika sesuai dengan karakter.
7. Tambahkan beberapa partikel bintang kecil berwarna kuning yang muncul sesaat.
8. Maskot mendarat dengan lembut, lalu kembali ke animasi idle.
9. Tampilkan pesan **"Hore! Profil Berhasil Disimpan!"** dengan ikon centang yang jelas.

Animasi harus terasa seperti maskot sungguhan sedang merayakan keberhasilan, bukan sekadar gambar yang bergerak naik-turun.

### Ketentuan animasi

- Gunakan `transform` dan `opacity` jika sesuai agar animasi tetap ringan.
- Gunakan easing yang natural, misalnya `cubic-bezier`, bukan gerakan linear yang kaku.
- Durasi keseluruhan animasi sekitar 1,2–1,8 detik.
- Efek partikel harus singkat dan tidak memenuhi layar.
- Jangan menggunakan flash, neon, glow berlebihan, atau efek ledakan.
- Hindari mengganti warna karakter ketika animasi berlangsung.
- Jangan membuat animasi berulang tanpa henti.
- Setelah perayaan selesai, kembalikan maskot ke posisi normal.

## 5. Sinkronisasi dengan Proses Penyimpanan

Animasi hore hanya boleh berjalan setelah penyimpanan profil berhasil dikonfirmasi.

- Jangan memicu animasi hanya karena tombol simpan diklik.
- Jika penyimpanan gagal, jangan tampilkan pesan sukses atau animasi perayaan.
- Cegah animasi sukses berjalan berkali-kali akibat render ulang atau perubahan state.
- Pastikan tombol simpan tidak menghasilkan data profil duplikat.
- Pertahankan mekanisme autentikasi, database, dan validasi profil yang sudah berjalan.

Jangan mengubah struktur database atau mekanisme penyimpanan jika tidak diperlukan untuk memperbaiki masalah ini.

## 6. Integrasi dengan Desain EduKids

Pertahankan identitas visual website:
- Biru EduKids sebagai warna utama.
- Krem hangat sebagai warna latar.
- Kuning sebagai aksen bintang penghargaan.
- Ilustrasi 2D dengan outline konsisten.
- Sudut membulat dan bayangan lembut.

Hindari gaya visual yang terlalu generik, warna acak, proporsi karakter yang berubah-ubah, dan animasi yang berlebihan.

Gunakan aset maskot yang sudah tersedia. Jangan membuat ulang karakter dengan desain berbeda jika aset aslinya masih bisa diperbaiki.

## 7. Pengujian Wajib

Setelah implementasi:

1. Uji kelima maskot pada halaman profil dan pemilihan karakter.
2. Periksa warna kepala, badan, tangan, kaki, dan aksesori satu per satu.
3. Uji animasi hore untuk setiap karakter.
4. Pastikan semua bagian tubuh tetap menyatu selama animasi.
5. Uji penyimpanan profil berhasil dan gagal.
6. Pastikan animasi tidak terpicu sebelum penyimpanan berhasil.
7. Periksa tampilan desktop dan mobile.
8. Periksa console browser untuk error JavaScript, React, SVG, dan CSS.

Jangan mengubah halaman lain yang tidak berkaitan dan jangan menghapus fitur yang sudah berjalan.

**HASIL AKHIR:** Semua maskot EduKids memiliki warna yang akurat dan konsisten dari kepala sampai kaki, serta dapat melakukan animasi lompat hore yang halus, ekspresif, dan menyenangkan ketika profil berhasil disimpan. Seluruh implementasi harus terintegrasi dengan kode proyek yang sudah ada, bukan hanya berupa mockup visual.