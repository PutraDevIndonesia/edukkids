# REDESIGN ANIMASI PEMILIHAN KARAKTER EDUKIDS — NATURAL, POLISHED & CHILD-FRIENDLY

Perbaiki komponen pemilihan karakter pada website EduKids untuk siswa SD kelas 1–6. Tampilan saat ini masih terlihat seperti komponen UI generik buatan AI, terutama outline biru yang muncul pada kartu Bubu, efek hover yang terlalu mencolok, dan indikator pemilihan yang kurang menyatu dengan ilustrasi karakter.

**Jangan hanya mengganti warna. Perbaiki keseluruhan interaksi, animasi, dan hierarki visual agar terasa seperti produk game edukasi anak yang dirancang secara profesional.**

## 1. Perbaiki Indikator Karakter Terpilih

Karakter yang tersedia:
- Kiko — Rubah Cerdas
- Mimi — Kelinci Ceria
- Luna — Burung Bijak
- Bubu — Beruang Ramah
- Piko — Panda Teliti

Ketentuan:
- Hilangkan border biru terang yang mengelilingi seluruh kartu karakter saat dipilih.
- Jangan menggunakan outline biru default browser sebagai indikator seleksi.
- Gunakan latar kartu berwarna warm white atau krem muda dengan border netral yang konsisten.
- Tunjukkan karakter terpilih menggunakan indikator kecil yang menyatu dengan desain, misalnya tanda centang pada lingkaran kecil di sudut kartu.
- Alternatifnya, gunakan border krem keemasan yang tipis dan lembut, bukan garis biru tebal.
- Berikan perbedaan visual yang jelas antara karakter terpilih, hover, dan fokus keyboard.
- Jangan membuat semua karakter memiliki warna border berbeda.
- Pastikan indikator pilihan tidak mengubah ukuran kartu atau menggeser layout.

## 2. Animasi Karakter yang Lebih Hidup

Hindari animasi UI generik seperti scale berlebihan, bounce berulang, glow neon, dan efek berputar tanpa alasan.

Gunakan animasi 2D yang halus dan memiliki karakter:
- Saat halaman dibuka, karakter muncul dengan gerakan naik ringan dan opacity transition.
- Saat pointer diarahkan ke kartu, karakter melakukan gerakan kecil seperti mengangguk, melambaikan tangan, atau bergerak lucu sesuai karakter.
- Saat karakter dipilih, karakter melakukan satu gerakan pendek yang menyenangkan, kemudian kembali ke posisi normal.
- Tambahkan animasi idle yang sangat halus dan tidak terus-menerus mencuri perhatian.
- Gerakan karakter harus terasa organik, bukan seluruh kartu yang terus melompat.
- Animasi harus singkat, responsif, dan tidak mengganggu proses memilih karakter.

Gunakan aset karakter yang sudah tersedia. Jangan mengganti ilustrasi asli dengan emoji, gambar acak, atau maskot baru yang tidak konsisten.

## 3. Hilangkan Tooltip Hitam yang Mengganggu

Pada tampilan saat ini, tooltip browser bertuliskan “Bubu - Beruang Ramah” muncul dengan latar hitam dan mengganggu estetika.

- Periksa penggunaan atribut `title` pada kartu karakter.
- Hapus tooltip native yang menduplikasi nama dan deskripsi yang sudah terlihat.
- Jika tooltip memang diperlukan, buat tooltip custom yang konsisten dengan desain EduKids.
- Tooltip harus muncul hanya saat diperlukan dan tidak menghalangi karakter maupun teks.
- Pastikan aksesibilitas tetap terjaga melalui nama aksesibel dan navigasi keyboard.

## 4. Perbaiki Desain Kartu

Pertahankan layout kartu yang ringkas, tetapi rapikan proporsi dan konsistensinya.

- Gunakan latar putih hangat dan bayangan yang sangat halus.
- Samakan ukuran kartu, radius sudut, padding, dan jarak antar elemen.
- Pertahankan lingkaran ilustrasi karakter, tetapi hindari terlalu banyak ring atau border bertumpuk.
- Gunakan bayangan hanya untuk memberi kedalaman ringan, bukan efek kartu melayang berlebihan.
- Nama karakter menggunakan font tebal yang ramah anak.
- Deskripsi karakter menggunakan warna sekunder yang cukup kontras dan ukuran yang nyaman dibaca.
- Pertahankan latar halaman krem muda yang sudah menjadi identitas EduKids.
- Hindari glassmorphism, gradient mencolok, neon, ornamen acak, dan dekorasi berlebihan.

## 5. Interaksi dan Aksesibilitas

- Seluruh kartu tetap dapat dipilih dengan klik atau keyboard.
- Gunakan elemen tombol yang semantik atau pola radio group yang sesuai.
- Status terpilih harus disampaikan melalui `aria-pressed`, `aria-checked`, atau mekanisme aksesibilitas yang tepat.
- Fokus keyboard harus terlihat, tetapi gunakan indikator fokus yang dirancang khusus dan tidak tertukar dengan indikator karakter terpilih.
- Jangan menghapus fungsi penyimpanan karakter yang sedang digunakan.
- Pertahankan event handler, state React, data profil, dan integrasi backend.
- Pastikan animasi tidak berjalan berlebihan ketika pengguna mengaktifkan `prefers-reduced-motion`.

## 6. Aturan Implementasi

Sebelum mengubah kode:
1. Periksa komponen pemilihan karakter yang sebenarnya.
2. Telusuri sumber outline biru, termasuk CSS `:focus`, `:focus-visible`, `:active`, class selected, box-shadow, dan atribut `title`.
3. Periksa apakah style tersebut berasal dari browser, Bootstrap, library UI, atau CSS proyek.
4. Perbaiki sumber masalahnya, bukan menambahkan override acak yang menumpuk.

Jangan:
- Mengubah seluruh tema website.
- Mengganti aset karakter yang sudah digunakan.
- Menghapus fitur yang sudah berjalan.
- Menambahkan library animasi besar jika CSS atau library yang tersedia sudah cukup.
- Menggunakan animasi berlebihan untuk membuat halaman terlihat menarik.
- Menambahkan border biru pada kartu karakter yang dipilih.

## 7. Kriteria Selesai

Hasil akhir harus:
- Terlihat seperti produk game edukasi anak yang dibuat oleh tim desain profesional.
- Tidak memiliki outline biru yang mengganggu pada kartu karakter.
- Tidak menampilkan tooltip hitam native yang menutupi tampilan.
- Memiliki animasi karakter 2D yang lembut, menyenangkan, dan konsisten.
- Memiliki indikator karakter terpilih yang jelas tanpa merusak desain.
- Responsif pada desktop, tablet, dan ponsel.
- Tidak menyebabkan perubahan layout, error console, atau gangguan pada fitur pemilihan karakter.

Setelah implementasi, jalankan aplikasi dan uji seluruh lima karakter dalam kondisi normal, hover, selected, dan keyboard focus. Pastikan perubahan benar-benar terlihat pada browser, bukan hanya pada kode sumber.