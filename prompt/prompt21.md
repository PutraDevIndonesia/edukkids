# FIX MODAL PIAGAM PRESTASI EDUKIDS — REMOVE BLACK BACKGROUND

Perbaiki tampilan modal **Piagam Prestasi EduKids** berdasarkan screenshot yang diberikan. Saat ini terdapat area gelap atau hitam yang tidak semestinya di belakang modal, terutama pada sisi kiri, kanan, dan area sekitar konten.

## 1. Masalah yang Harus Diperbaiki

- Hilangkan background hitam atau abu-abu gelap yang terlihat seperti blok persegi di belakang modal.
- Periksa apakah masalah berasal dari overlay, backdrop, pseudo-element, container, atau CSS `background` yang salah.
- Pastikan tidak ada elemen persegi gelap yang menutupi halaman di belakang modal.
- Jangan menghilangkan efek backdrop sepenuhnya jika memang dibutuhkan untuk membedakan modal dari halaman utama.

## 2. Perbaiki Backdrop Modal

Gunakan backdrop transparan dengan warna netral dan opacity yang konsisten, misalnya:

`background: rgba(35, 48, 65, 0.48);`

Backdrop harus menutupi seluruh viewport secara merata, bukan hanya area tertentu.

Ketentuan:
- Gunakan `position: fixed`.
- Gunakan `inset: 0`.
- Gunakan `width: 100%` dan `height: 100%` jika diperlukan.
- Gunakan `z-index` yang tepat agar backdrop berada di bawah modal.
- Pastikan backdrop tidak terpotong oleh parent yang memiliki `overflow: hidden`, `transform`, atau stacking context yang tidak sesuai.
- Hindari backdrop kedua yang menyebabkan area terlihat terlalu gelap.

Jika backdrop menggunakan pseudo-element `::before` atau `::after`, periksa agar tidak ada lapisan tambahan yang menampilkan blok hitam.

## 3. Pertahankan Desain Modal

Jangan mengubah desain utama modal yang sudah bagus, termasuk:

- Header “Piagam Prestasi EduKids”.
- Pilihan cap dan tanda tangan.
- Pratinjau sertifikat dengan bingkai biru dan emas.
- Tombol “Cetak / PDF”.
- Tombol “Unduh Gambar (PNG)”.
- Tombol tutup di kanan atas.

Pertahankan warna krem, biru, dan emas serta tata letak responsif yang sudah digunakan.

## 4. Perilaku Modal yang Benar

- Modal tetap berada di tengah viewport.
- Halaman di belakang modal terlihat redup secara merata.
- Tidak ada blok hitam, garis gelap, atau area backdrop yang berbeda warna tanpa alasan.
- Klik backdrop menutup modal hanya jika perilaku tersebut memang sesuai dengan implementasi saat ini.
- Tombol Escape menutup modal jika sudah didukung.
- Saat modal ditutup, halaman kembali ke tampilan normal tanpa overlay yang tertinggal.
- Pastikan tidak ada scroll horizontal atau modal terpotong pada layar kecil.

## 5. Pemeriksaan Kode

Sebelum mengubah kode:
1. Temukan komponen modal Piagam Prestasi EduKids dan seluruh CSS terkait.
2. Periksa struktur DOM, backdrop, parent container, serta aturan `position`, `z-index`, `opacity`, `filter`, dan `background`.
3. Identifikasi sumber pasti blok gelap tersebut.
4. Perbaiki penyebabnya, bukan sekadar menambahkan CSS baru yang menimpa banyak aturan lama.
5. Hapus CSS duplikat atau aturan yang bertentangan jika memang menjadi penyebabnya.

Jangan membuat ulang modal dari nol. Jangan mengubah fitur sertifikat, data pengguna, sistem reward, atau proses unduh dan cetak.

## 6. Kriteria Selesai

Perubahan dianggap selesai apabila:
- Area di belakang modal memiliki warna redup yang seragam.
- Tidak ada lagi blok hitam berbentuk persegi di sisi modal.
- Modal tetap tajam, bersih, dan mudah dibaca.
- Pratinjau sertifikat tetap utuh.
- Tombol cetak dan unduh tetap berfungsi.
- Tidak ada error baru di console browser.

Setelah memperbaiki, jalankan aplikasi dan verifikasi langsung menggunakan screenshot sebelum dan sesudah perubahan.