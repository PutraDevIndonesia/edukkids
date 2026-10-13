# PROMPT REDESIGN NAVBAR EDUKIDS — REACT JS

Redesign komponen navigasi utama (navbar/header) website EduKids, sebuah platform belajar sambil bermain untuk siswa Sekolah Dasar kelas 1–6.

Gunakan screenshot referensi yang diberikan sebagai acuan visual. Pertahankan identitas EduKids yang ceria, tetapi buat tampilannya lebih rapi, konsisten, modern, dan siap digunakan sebagai website nyata.

## 1. Arah Desain

Buat navbar dengan gaya **playful educational website**, perpaduan website edukasi anak dan produk digital profesional.

Karakter visual:
- Ramah anak, ceria, dan mudah dipahami.
- Menggunakan ilustrasi dan ikon sederhana yang konsisten.
- Terlihat seperti dirancang oleh UI designer profesional, bukan hasil template AI generik.
- Jangan membuat desain terlalu ramai atau memenuhi navbar dengan dekorasi.
- Prioritaskan keterbacaan, navigasi yang jelas, dan konsistensi jarak.

## 2. Struktur Navbar Desktop

Gunakan satu baris navigasi horizontal dengan latar putih atau warm white, tinggi sekitar 84–92 px, dan garis pembatas bawah berwarna krem muda.

### A. Brand EduKids

Di sisi kiri tampilkan:
- Ikon logo berbentuk rounded square berwarna biru dengan ilustrasi bintang kuning.
- Nama **EduKids** dengan font tebal dan warna biru tua.
- Tagline pendek: “Main, Belajar, Raih Bintang!”

Brand harus menjadi elemen yang mudah dikenali, tetapi tidak mendominasi seluruh navbar.

### B. Menu Navigasi

Urutkan menu berikut:

1. **Beranda** — ikon rumah.
2. **Peta Petualangan** — ikon peta.
3. **Kuis** — ikon lingkaran tanda tanya atau clipboard.
4. **Game Edukasi** — ikon gamepad.
5. **Lencana** — ikon medal atau award.
6. **Peringkat** — ikon trophy.
7. **Profil** — ikon user.

Gunakan Lucide React untuk ikon. Hindari penggunaan emoji sebagai ikon navigasi utama.

Aturan desain:
- Setiap menu memiliki ikon dan label yang sejajar.
- Gunakan ukuran ikon sekitar 16–19 px.
- Gunakan font Nunito dengan bobot 700 atau 800.
- Teks menu sekitar 14–16 px.
- Jarak antarmenu konsisten.
- Menu aktif memiliki latar biru muda, border tipis biru, dan teks biru tua.
- Menu tidak aktif memiliki latar transparan dan teks abu-abu gelap.
- Hindari setiap menu memiliki warna berbeda.
- Label panjang seperti “Peta Petualangan” dan “Game Edukasi” boleh membungkus baris hanya jika ruang terbatas pada breakpoint tertentu.

### C. Informasi Reward

Di sisi kanan menu, tampilkan ringkasan progres siswa dalam satu komponen berbentuk kapsul.

Konten:
- Ikon bintang kuning dan jumlah bintang, misalnya `5`.
- Pemisah vertikal tipis.
- Ikon petir biru dan jumlah XP, misalnya `120 XP`.

Ketentuan:
- Gunakan latar krem lembut.
- Gunakan angka tebal dan mudah dibaca.
- Pastikan komponen tidak terlalu lebar.
- Nilai reward berasal dari data progres siswa, bukan angka yang dibuat ulang secara acak.
- Beri tooltip atau label aksesibel agar arti bintang dan XP mudah dipahami.

### D. Avatar Pengguna

Letakkan avatar berbentuk lingkaran di ujung kanan.

Gunakan ilustrasi karakter anak atau maskot EduKids yang konsisten dengan gaya ilustrasi website. Berikan border biru tipis dan bayangan ringan.

Ketika diklik, tampilkan dropdown yang berisi:
- Profil Saya
- Progres Belajar
- Pengaturan
- Keluar

Dropdown harus dapat dibuka, ditutup, dan digunakan dengan keyboard.

## 3. Sistem Warna

Gunakan palet yang konsisten:

- Primary blue: `#2875B8`
- Dark blue: `#205784`
- Soft blue: `#E8F3FF`
- Warm background: `#FFF9EF`
- Main text: `#344256`
- Secondary text: `#718096`
- Border: `#E8E2D8`
- Star yellow: `#FFC857`
- White: `#FFFFFF`

Hindari penggunaan gradient yang berlebihan. Warna utama harus terasa hangat, bersih, dan konsisten.

## 4. Tipografi dan Bentuk

Gunakan:
- Nunito untuk teks dan label navigasi.
- Fredoka untuk logo atau elemen judul pendek jika sesuai.

Bentuk:
- Border radius menu aktif: 12–16 px.
- Kapsul reward: 999 px.
- Avatar: lingkaran.
- Bayangan sangat halus, hanya jika membantu hierarki visual.
- Gunakan ukuran dan ketebalan font secara konsisten.

## 5. Responsive Design

Navbar harus berfungsi pada desktop, tablet, dan smartphone.

**Desktop (≥ 1200 px)**
- Tampilkan brand, semua menu, reward, dan avatar.
- Jaga agar seluruh elemen muat tanpa saling bertabrakan.
- Jangan mengecilkan teks sampai sulit dibaca hanya demi mempertahankan satu baris.

**Tablet (768–1199 px)**
- Kurangi jarak horizontal secara terukur.
- Jika ruang tidak cukup, pindahkan sebagian navigasi ke menu “Lainnya” atau gunakan pola navigasi yang sesuai.
- Reward dapat dipersingkat menjadi ikon dan angka.

**Mobile (< 768 px)**
- Jangan memaksakan seluruh menu desktop dalam satu baris.
- Tampilkan logo EduKids, ringkasan reward yang ringkas, dan tombol menu.
- Gunakan drawer atau menu navigasi yang nyaman disentuh.
- Alternatif: bottom navigation dengan menu utama seperti Beranda, Peta, Kuis, Game, dan Profil.
- Menu Lencana dan Peringkat dapat dimasukkan ke drawer jika diperlukan.
- Semua tombol harus memiliki area sentuh yang cukup besar.
- Pastikan menu tidak menutupi konten tanpa mekanisme penutupan yang jelas.

## 6. Interaksi dan Fungsionalitas

Implementasikan menggunakan React JS dan React Router.

Wajib:
- Menu mengarah ke route halaman yang benar.
- Menu aktif berubah otomatis berdasarkan route saat ini.
- Tombol avatar membuka dropdown.
- Tombol menu mobile membuka dan menutup navigasi.
- Klik di luar dropdown menutupnya.
- Tombol Escape menutup dropdown atau drawer.
- Navigasi mendukung keyboard dan memiliki indikator fokus yang terlihat.
- Gunakan `aria-label`, `aria-expanded`, dan elemen navigasi semantik jika diperlukan.
- Hindari reload halaman penuh saat berpindah route.
- Pastikan navbar tidak menimbulkan horizontal scrolling.

Gunakan struktur komponen modular, misalnya:
- `Navbar.jsx`
- `BrandLogo.jsx`
- `NavLinks.jsx`
- `RewardSummary.jsx`
- `UserAvatarMenu.jsx`
- `MobileNavigation.jsx`

Sesuaikan struktur dengan proyek yang sudah ada. Jangan membuat duplikasi komponen jika fungsi yang sama sudah tersedia.

## 7. Aturan Penting

- Periksa kode proyek dan sistem styling yang sudah digunakan sebelum mengubah komponen.
- Pertahankan fitur autentikasi, data progres, dan routing yang sudah berjalan.
- Jangan mengganti angka reward dinamis menjadi angka statis.
- Jangan membuat tombol dekoratif yang tidak memiliki fungsi.
- Jangan menggunakan emoji sebagai pengganti semua ikon.
- Jangan membuat setiap menu memiliki bentuk, warna, atau bayangan yang berbeda.
- Hindari glassmorphism, neon, gradient berlebihan, dan dekorasi acak.
- Jangan mengubah seluruh desain website hanya untuk memperbaiki navbar.
- Jangan menambahkan library besar jika kebutuhan dapat diselesaikan dengan library yang sudah tersedia.

## 8. Hasil Akhir

Hasilkan navbar EduKids yang:
- Memiliki hierarki visual yang jelas.
- Menampilkan menu secara rapi dan konsisten.
- Tetap menyenangkan untuk siswa SD tanpa terlihat kekanak-kanakan secara berlebihan.
- Konsisten dengan tema ilustrasi buku cerita EduKids.
- Responsif pada desktop, tablet, dan smartphone.
- Memiliki interaksi yang benar-benar berfungsi.
- Tidak mengalami tabrakan elemen, teks terpotong, atau overflow horizontal.

Setelah selesai, jalankan aplikasi, periksa semua route, uji dropdown avatar, uji menu mobile, dan pastikan tidak ada error pada console browser.