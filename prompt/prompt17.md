# FIX MODAL DETAIL LENCANA EDUKIDS — CLEAN, MODERN & CHILD-FRIENDLY

Bertindaklah sebagai Senior React Developer dan UI/UX Designer profesional. Perbaiki tampilan modal detail lencana pada halaman Lencana & Penghargaan EduKids.

## 1. MASALAH SAAT INI

Ketika pengguna mengeklik salah satu item lencana, modal detail muncul di tengah layar. Namun, background halaman di belakang modal menjadi terlalu gelap, seluruh halaman tampak tertutup lapisan abu-abu, dan konten halaman terlihat kusam.

Perbaiki overlay dan modal agar tampil lebih bersih, nyaman dilihat, dan konsisten dengan desain EduKids.

## 2. PERBAIKI BACKGROUND OVERLAY

Ketika modal dibuka:
- Gunakan overlay dengan warna gelap netral dan transparansi yang lembut.
- Hindari overlay abu-abu pekat yang membuat halaman hampir tidak terlihat.
- Mulai dengan warna seperti `rgba(31, 41, 55, 0.38)` dan sesuaikan berdasarkan hasil visual.
- Jika sesuai dengan desain, gunakan `backdrop-filter: blur(2px)` secara ringan.
- Jangan membuat background menjadi putih pekat atau menggunakan efek glassmorphism berlebihan.
- Pertahankan halaman Lencana di belakang sebagai konteks visual.
- Pastikan overlay menutupi area aplikasi yang benar, termasuk navbar jika modal memang dirancang sebagai dialog global.
- Jangan membuat overlay menimbulkan horizontal scrolling.

Overlay harus berada di belakang modal, tetapi di depan seluruh konten halaman.

## 3. RAPikan MODAL DETAIL LENCANA

Pertahankan struktur dan informasi yang sudah ada:
- Judul detail lencana.
- Tombol tutup.
- Ikon atau ilustrasi lencana.
- Nama lencana.
- Deskripsi lencana.
- Syarat untuk membuka lencana.
- Informasi status terkunci atau terbuka.
- Tombol Tutup.

Perbaiki tampilannya dengan ketentuan:
- Latar modal putih bersih.
- Sudut membulat sekitar 20–24 px.
- Border tipis warna krem atau abu-abu hangat.
- Bayangan lembut dan natural.
- Padding yang konsisten.
- Lebar responsif dengan batas maksimum yang wajar.
- Ikon lencana harus tajam, jelas, dan proporsional.
- Teks mudah dibaca dan tidak terlalu rapat.
- Tombol tutup menggunakan ikon Lucide yang jelas dan memiliki area sentuh yang cukup.

Jangan mengubah isi, syarat, atau logika penilaian lencana.

## 4. ANIMASI MODAL

Gunakan animasi masuk dan keluar yang halus:
- Modal muncul dengan fade-in singkat dan pergerakan vertikal yang sangat kecil.
- Overlay menggunakan transisi opacity.
- Hindari zoom berlebihan, bounce, atau animasi yang mengganggu.
- Hormati preferensi `prefers-reduced-motion`.
- Pastikan modal tidak berkedip atau berpindah posisi saat pertama dibuka.

## 5. INTERAKSI DAN AKSESIBILITAS

Pastikan:
- Tombol X menutup modal.
- Tombol Tutup menutup modal.
- Tombol Escape menutup modal.
- Klik pada overlay dapat menutup modal jika sesuai dengan perilaku aplikasi.
- Klik di dalam modal tidak menutup modal.
- Fokus keyboard berada di dalam modal ketika dibuka dan dikembalikan ke pemicu ketika modal ditutup.
- Gunakan `role="dialog"`, `aria-modal="true"`, dan label aksesibel yang sesuai.
- Jangan mengubah status lencana hanya karena modal dibuka atau ditutup.

Jika aplikasi sudah memiliki komponen modal bersama, perbaiki komponen yang digunakan tersebut daripada membuat implementasi duplikat.

## 6. RESPONSIVE DESIGN

Desktop:
- Modal berada di tengah viewport.
- Lebar proporsional dan tidak menutupi seluruh layar.
- Background tetap terlihat di sekeliling modal.

Tablet dan mobile:
- Modal tidak melebihi lebar layar.
- Tinggi modal menyesuaikan konten.
- Jika konten terlalu panjang, gunakan scrolling di dalam modal, bukan membuat seluruh halaman bergeser.
- Tombol tutup tetap terlihat dan mudah disentuh.
- Pastikan tidak ada teks terpotong atau elemen keluar dari layar.

## 7. ATURAN IMPLEMENTASI

Sebelum mengubah kode:
1. Temukan komponen modal detail lencana yang benar-benar digunakan.
2. Periksa CSS overlay, z-index, positioning, dan aturan overflow.
3. Periksa apakah ada overlay ganda atau style global yang menyebabkan background terlalu gelap.
4. Periksa apakah modal dirender melalui React Portal atau struktur DOM biasa.
5. Gunakan kembali sistem warna dan komponen EduKids yang sudah tersedia.

Jangan mengubah seluruh halaman Lencana. Jangan mengganti data lencana, persyaratan pembukaan, progres pengguna, routing, atau navbar.

## 8. PENGUJIAN AKHIR

Uji beberapa kondisi:
- Membuka detail lencana yang sudah terbuka.
- Membuka detail lencana yang masih terkunci.
- Menutup modal melalui tombol X.
- Menutup modal melalui tombol Tutup.
- Menutup modal dengan Escape.
- Membuka dan menutup modal beberapa kali.
- Menguji desktop dan mobile.
- Memastikan tidak ada overlay ganda, modal tertinggal, atau error console.

Laporkan file yang diubah dan penyebab overlay sebelumnya terlihat terlalu gelap.

**Target akhir:** modal detail lencana terlihat seperti dialog profesional pada game edukasi anak. Background halaman tetap terlihat dengan redup yang lembut, sedangkan modal menjadi fokus utama tanpa merusak tampilan halaman di belakangnya.