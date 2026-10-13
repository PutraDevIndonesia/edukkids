# FIX TOTAL ANIMASI HERO EDUKIDS — MASKOT, LAYOUT & MOTION

Bertindaklah sebagai Senior React Developer, 2D Game Animator, dan UI/UX Designer profesional.

Perbaiki animasi pada hero section EduKids berdasarkan screenshot yang diberikan. Saat ini animasi maskot bermasalah: beberapa karakter menumpuk di pojok kiri atas, keluar dari komposisi ilustrasi, memiliki ukuran terlalu besar, dan tidak menyatu dengan lingkungan.

**Jangan hanya memperkecil gambar atau menambahkan CSS sementara. Temukan penyebab sebenarnya dan perbaiki implementasi animasinya.**

## 1. PERBAIKI POSISI MASKOT

- Maskot tidak boleh muncul di luar area ilustrasi.
- Hapus posisi animasi yang menyebabkan karakter menumpuk di pojok kiri atas.
- Pastikan setiap maskot memiliki posisi awal, posisi akhir, dan area gerak yang terdefinisi.
- Tempatkan karakter pada permukaan tanah yang sesuai dengan perspektif lingkungan.
- Pastikan karakter tidak menutupi gerbang EDUKIDS, papan petunjuk, jalan, judul, atau tombol.
- Gunakan koordinat relatif terhadap container ilustrasi, bukan posisi absolut terhadap viewport.
- Jika menggunakan `position: absolute`, pastikan parent yang benar memiliki `position: relative`.
- Gunakan `overflow: hidden` hanya pada container ilustrasi yang memang membutuhkan clipping, bukan sebagai solusi untuk menyembunyikan bug posisi.

## 2. SATUKAN SISTEM ANIMASI MASKOT

Periksa apakah beberapa komponen sedang merender maskot yang sama sekaligus.

- Hilangkan duplikasi karakter akibat rendering komponen, loop, atau animasi yang berjalan bersamaan.
- Setiap maskot hanya boleh muncul sebanyak yang direncanakan dalam desain.
- Gunakan aset karakter yang sudah tersedia.
- Pertahankan identitas, bentuk, dan warna setiap karakter.
- Jangan menampilkan beberapa maskot bertumpuk sebagai satu objek.
- Jangan membuat gambar baru secara acak saat animasi berjalan.

Jika maskot menggunakan GIF atau sprite sheet, periksa ukuran frame, transparansi, dan posisi gambar. Jika menggunakan CSS animation, periksa transform, keyframes, dan aturan positioning yang saling bertabrakan.

## 3. BUAT ANIMASI IDLE YANG NATURAL

Maskot harus terasa hidup tanpa mengganggu tampilan.

Contoh animasi:
- Kelinci melakukan gerakan kecil pada telinga atau kepala.
- Kucing bergerak naik-turun dengan lembut.
- Beruang melakukan gerakan idle yang halus.
- Burung kecil terbang melintasi langit sesekali.
- Awan bergerak sangat perlahan.
- Bintang pada gerbang berkilau sesekali.

Ketentuan:
- Gerakan kecil dan tidak berlebihan.
- Setiap karakter memiliki timing berbeda agar tidak bergerak serempak.
- Karakter tetap berada di area yang telah ditentukan.
- Jangan menggerakkan karakter melintasi seluruh layar.
- Jangan menggunakan transformasi yang membuat karakter melompat ke luar container.
- Hormati `prefers-reduced-motion`.

## 4. ATUR UKURAN DAN HIERARKI VISUAL

- Ukuran maskot harus proporsional terhadap gerbang dan lingkungan.
- Gunakan ukuran berdasarkan container atau breakpoint yang sesuai.
- Pastikan maskot tidak mendominasi seluruh ilustrasi.
- Hindari perubahan ukuran mendadak saat animasi dimulai.
- Pertahankan jarak yang cukup antarkarakter.
- Pastikan gerbang tetap menjadi fokus visual utama.

Jangan mengatur ukuran hanya berdasarkan satu resolusi layar.

## 5. PERBAIKI KOMPOSISI HERO

Pertahankan ilustrasi EduKids yang sudah ada:
- Langit dan awan.
- Perbukitan hijau.
- Gerbang EDUKIDS.
- Jalan petualangan.
- Pepohonan dan papan petunjuk.
- Maskot karakter.

Perbaiki layering agar urutannya masuk akal:
1. Langit dan awan.
2. Perbukitan serta lingkungan belakang.
3. Jalan dan permukaan tanah.
4. Gerbang dan objek lingkungan.
5. Maskot beserta bayangan kontaknya.
6. Label dan elemen antarmuka yang memang harus berada di depan.

Sesuaikan urutan tersebut dengan struktur ilustrasi yang sebenarnya. Jangan sampai maskot berada di depan elemen yang seharusnya menutupinya atau melayang tanpa pijakan.

## 6. HINDARI ANIMASI YANG TERASA RUSAK

Jangan:
- Membuat semua elemen bergerak bersamaan.
- Menggunakan animasi `bounce` berlebihan.
- Membuat maskot berputar tanpa alasan.
- Menambahkan karakter duplikat untuk menciptakan kesan ramai.
- Menggunakan nilai `top`, `left`, atau `transform` yang tidak konsisten antar-breakpoint.
- Membuat maskot bergerak di luar area ilustrasi.
- Menambahkan animasi sebelum memastikan layout dasarnya benar.

## 7. RESPONSIVE DAN PERFORMA

- Periksa tampilan desktop, tablet, dan mobile.
- Pastikan posisi maskot tetap benar saat ukuran container berubah.
- Hindari horizontal scrolling.
- Gunakan animasi CSS yang efisien jika memungkinkan.
- Jangan membuat interval animasi JavaScript baru tanpa kebutuhan.
- Bersihkan event listener atau timer jika memang digunakan.
- Pastikan animasi tidak menyebabkan layout bergeser saat halaman dimuat.

## 8. LANGKAH IMPLEMENTASI WAJIB

Sebelum mengubah kode:
1. Temukan komponen hero EduKids yang sedang digunakan.
2. Periksa semua elemen maskot dan sumber asetnya.
3. Identifikasi penyebab karakter bertumpuk dan keluar dari area.
4. Periksa CSS positioning, transform, animation keyframes, serta struktur container.
5. Periksa apakah komponen atau aset dirender lebih dari sekali.

Kemudian:
- Perbaiki sumber masalahnya.
- Gunakan kembali aset dan komponen yang sudah tersedia.
- Jangan membuat hero section baru yang tidak terhubung dengan halaman sebenarnya.
- Jangan mengubah routing, sistem reward, autentikasi, atau fitur lain yang tidak berkaitan.

Setelah selesai, jalankan aplikasi dan verifikasi hasilnya pada beberapa ukuran layar.

## KRITERIA SELESAI

Animasi dianggap berhasil jika:
- Tidak ada maskot yang menumpuk di pojok kiri atas.
- Tidak ada karakter yang keluar dari area ilustrasi.
- Tidak ada karakter duplikat yang tidak disengaja.
- Setiap maskot memiliki ukuran dan posisi yang proporsional.
- Animasi berjalan lembut dan konsisten.
- Gerbang, jalan, dan lingkungan tetap terlihat jelas.
- Hero section terlihat seperti dunia petualangan EduKids yang hidup, bukan kumpulan gambar yang bergerak secara acak.

Laporkan penyebab bug, file yang diubah, dan pengujian yang dilakukan. Jangan menyatakan selesai jika masalah masih terlihat pada browser.