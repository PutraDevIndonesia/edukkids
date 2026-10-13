# PROMPT REDESIGN ANIMASI MODAL SUKSES PROFIL EDUKIDS

Perbaiki tampilan modal **“Profil Berhasil Disimpan!”** pada website EduKids. Desain saat ini masih terlihat kaku, terutama ikon centang hijau yang generik dan ikon avatar kelinci yang kurang menyatu dengan tema petualangan EduKids.

Saya ingin hasil yang terasa seperti website edukasi anak profesional dengan ilustrasi karakter 2D buatan khusus, animasi yang halus, dan visual yang menyenangkan. Jangan sekadar mengganti warna atau menambahkan animasi CSS secara acak.

## 1. Ganti Ikon Sukses Generik

Hapus ikon centang hijau besar yang sekarang berada di tengah modal.

Ganti dengan animasi karakter maskot EduKids yang sudah digunakan di seluruh website, seperti Kiko (kelinci), Mimi (kucing), Luna (burung hantu), Bubu (beruang), atau Piko (rubah).

Karakter harus memiliki:
- Kepala dengan bentuk dan ekspresi yang jelas.
- Badan yang menyatu secara proporsional dengan kepala.
- Dua tangan dan dua kaki yang terlihat.
- Mata yang ekspresif dan senyum ramah.
- Garis luar yang rapi dengan ketebalan konsisten.
- Warna, proporsi, dan gaya ilustrasi yang sama dengan maskot yang sudah ada.

**Jangan gunakan emoji sebagai ilustrasi utama.** Jangan membuat avatar berupa lingkaran yang hanya berisi gambar wajah. Gunakan aset maskot 2D lengkap yang sudah tersedia dalam proyek.

## 2. Buat Animasi Keberhasilan yang Menarik

Saat profil berhasil disimpan, tampilkan urutan animasi berikut:

1. Maskot muncul dengan gerakan melompat kecil (*bounce-in*) yang lembut.
2. Maskot mengangkat kedua tangan sebagai tanda keberhasilan.
3. Beberapa bintang kecil muncul di sekitar karakter, lalu menghilang secara perlahan.
4. Ikon centang kecil muncul sebagai tanda bahwa penyimpanan berhasil.
5. Maskot kembali ke posisi istirahat dengan animasi idle yang sangat halus.

Animasi harus terasa alami, menyenangkan, dan tidak berlebihan. Hindari efek berputar cepat, berkedip, ledakan partikel, atau gerakan yang mengganggu keterbacaan.

Gunakan CSS keyframes atau library animasi yang sudah tersedia. Jangan menambahkan library besar jika tidak diperlukan.

## 3. Sempurnakan Isi Modal

Pertahankan informasi penting yang sudah ada:

- Judul: “Profil Berhasil Disimpan!”
- Pesan: “Hore, Data Kamu Tersimpan!”
- Deskripsi bahwa identitas siap digunakan di dunia EduKids.
- Nama profil dan jenjang kelas yang benar-benar tersimpan.
- Tombol utama “Siap Berpetualang!”

Susun konten dengan hierarki visual yang rapi. Berikan ruang yang cukup antara maskot, judul, deskripsi, kartu profil, dan tombol.

Gunakan latar putih hangat, aksen biru EduKids, warna krem lembut, dan sedikit kuning bintang. Hindari lingkaran hijau neon dan bayangan berlebihan.

## 4. Buat Maskot Menyatu dengan Modal

Jangan menempatkan karakter seolah-olah hanya ditempel di atas komponen.

Buat area ilustrasi khusus di bagian atas modal dengan latar dekoratif sederhana, misalnya awan kecil, bintang, atau bukit lembut yang konsisten dengan dunia EduKids.

Dekorasi hanya berfungsi sebagai pendukung. Maskot tetap menjadi fokus utama dan tidak boleh menutupi teks, tombol, atau informasi profil.

Gunakan aset ilustrasi yang sudah ada. Jangan membuat karakter baru dengan desain berbeda dari maskot di halaman peta, profil, dan halaman utama.

## 5. Interaksi dan Fungsionalitas

- Modal hanya muncul setelah proses penyimpanan profil benar-benar berhasil.
- Jangan menampilkan status sukses jika proses penyimpanan gagal.
- Nama profil dan kelas harus mengambil data aktual, bukan teks hardcoded yang berbeda dari data pengguna.
- Tombol “Siap Berpetualang!” harus menutup modal dan membawa pengguna ke halaman yang sesuai dengan alur aplikasi.
- Tombol tutup tetap berfungsi.
- Modal dapat digunakan dengan keyboard dan memiliki label aksesibel.
- Pada smartphone, karakter dan konten tidak boleh terpotong.
- Hormati preferensi `prefers-reduced-motion` dengan menyediakan animasi minimal atau tanpa gerakan.

## 6. Ketentuan Implementasi

Sebelum mengubah kode:
1. Periksa komponen modal yang sudah ada.
2. Cari aset maskot asli beserta format dan lokasi filenya.
3. Periksa sistem CSS, komponen UI, routing, dan alur penyimpanan profil.
4. Gunakan kembali aset dan komponen yang sudah tersedia.
5. Hindari duplikasi modal atau perubahan pada halaman yang tidak berkaitan.

Jangan mengubah logika autentikasi, database, maupun proses penyimpanan profil hanya demi redesign visual.

## 7. Kriteria Hasil Akhir

Hasil akhir harus terlihat seperti bagian asli dari website EduKids, bukan komponen template AI.

- Maskot 2D lengkap dengan badan, tangan, kaki, dan ekspresi yang konsisten.
- Animasi sukses yang halus dan menyenangkan.
- Tidak ada ikon generik berukuran besar yang mendominasi modal.
- Tidak ada dekorasi acak, warna neon, atau efek berlebihan.
- Tata letak rapi, responsif, dan tidak terpotong.
- Seluruh tombol dan alur penyimpanan tetap berfungsi.

Setelah selesai, jalankan aplikasi dan uji modal pada desktop serta smartphone. Pastikan animasi berjalan dengan benar, data profil sesuai, dan tidak ada error di console browser.