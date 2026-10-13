# REDESIGN AVATAR PROFIL EDUKIDS — SIMPLE & CLEAN

Perbaiki tampilan tombol profil pengguna pada navbar EduKids berdasarkan screenshot yang diberikan.

Saat ini tombol profil memiliki outline biru, border berbentuk kapsul, bayangan, dan ikon chevron yang membuatnya terlihat seperti tombol dropdown yang terlalu menonjol.

Saya ingin mengubahnya menjadi **avatar profil biasa yang minimalis, natural, dan elegan**, seperti profil pengguna pada website modern.

## 1. Desain Avatar

- Tampilkan avatar maskot pengguna yang sudah digunakan saat ini.
- Hapus border biru yang mengelilingi seluruh tombol profil.
- Hapus bentuk kapsul atau kotak pembungkus avatar.
- Hapus bayangan biru yang terlalu mencolok.
- Hapus ikon chevron atau tanda panah kecil di sebelah avatar.
- Pertahankan avatar berbentuk lingkaran dengan ukuran sekitar 40–44 px.
- Jika diperlukan, gunakan border netral yang sangat tipis pada lingkaran avatar saja.
- Jangan mengubah gambar, warna, atau identitas maskot yang digunakan pengguna.

## 2. Interaksi Profil

Walaupun tampilannya sederhana, avatar tetap harus berfungsi sebagai tombol profil.

- Ketika avatar diklik, dropdown profil yang sudah ada tetap terbuka.
- Ketika diklik kembali, dropdown tertutup.
- Klik di luar dropdown menutup menu.
- Tombol Escape menutup dropdown.
- Pertahankan menu Profil Saya, Progres Belajar, Pengaturan, dan Keluar.
- Pertahankan dukungan keyboard serta atribut aksesibilitas seperti `aria-label` dan `aria-expanded`.

Jangan menambahkan ikon panah pengganti atau indikator dekoratif lain.

## 3. Efek Hover

Gunakan interaksi yang sangat halus:
- Avatar sedikit berubah opacity atau memiliki latar netral yang lembut saat hover.
- Jangan menampilkan outline biru tebal.
- Jangan memperbesar avatar secara berlebihan.
- Pertahankan indikator fokus keyboard yang jelas ketika pengguna menavigasi menggunakan keyboard.

## 4. Konsistensi Navbar

- Pertahankan posisi avatar di ujung kanan navbar.
- Jaga jarak yang proporsional dari komponen reward bintang dan XP.
- Jangan mengubah desain navbar lainnya.
- Pastikan avatar tetap terlihat rapi pada desktop, tablet, dan mobile.

## 5. Aturan Implementasi

- Periksa komponen avatar profil yang benar-benar digunakan.
- Ubah komponen tersebut secara langsung.
- Pertahankan seluruh fungsi dropdown, autentikasi, dan navigasi yang sudah ada.
- Jangan membuat komponen profil baru yang menduplikasi komponen lama.
- Jangan mengubah sistem reward atau data pengguna.
- Setelah selesai, uji klik avatar, dropdown, klik di luar, tombol Escape, dan tampilan responsif.

**Target akhir:** avatar maskot berbentuk lingkaran yang berdiri sendiri tanpa border biru pembungkus, tanpa kapsul, tanpa bayangan mencolok, dan tanpa ikon chevron. Tampilannya harus bersih, sederhana, dan menyatu dengan navbar EduKids.