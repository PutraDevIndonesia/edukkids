# REDESIGN PROFILE DROPDOWN EDUKIDS — PLAYER IDENTITY CARD

Bertindaklah sebagai Senior UI/UX Designer dan React Developer. Perbaiki desain dropdown profil pengguna pada navbar EduKids berdasarkan screenshot yang diberikan.

Tujuannya adalah mengubah dropdown profil yang saat ini terlihat standar menjadi komponen identitas pemain yang lebih menarik, ramah anak, modern, dan konsisten dengan tema petualangan EduKids.

PENTING: Perbaiki komponen profil yang sudah ada. Jangan membuat komponen demo terpisah atau mengubah keseluruhan navbar.

## 1. BAGIAN HEADER PROFIL

Ubah bagian atas dropdown menjadi mini player identity card.

Tampilkan:
- Avatar maskot pengguna dalam lingkaran yang lebih jelas.
- Nama pengguna yang berasal dari data akun sebenarnya.
- Label level atau kelas siswa jika tersedia, misalnya “Penjelajah Kelas 3 SD”.
- Aksen biru muda dan krem yang konsisten dengan EduKids.
- Background lembut dengan pemisah visual yang rapi.

Gunakan ilustrasi avatar yang sudah tersedia. Jangan mengganti avatar pengguna dengan emoji atau avatar acak.

Nama dan kelas harus diambil dari data profil aktual. Jangan mengarang informasi pengguna.

## 2. TAMBAHKAN RINGKASAN PROGRES MINI

Jika ruang memungkinkan, tampilkan ringkasan progres yang ringkas di bagian header profil:
- Total bintang yang dimiliki.
- Total XP yang diperoleh.
- Level atau progres belajar jika tersedia.

Gunakan ikon Lucide React yang konsisten:
- `Star` untuk bintang.
- `Zap` untuk XP.
- `Trophy` untuk pencapaian.

Gunakan warna aksen secara terkontrol. Jangan membuat setiap informasi menjadi kartu terpisah yang memenuhi dropdown.

Semua nilai harus berasal dari data progres sebenarnya dan tetap sinkron dengan sistem yang sudah ada.

Jika dropdown terlalu sempit, cukup tampilkan bintang dan XP secara ringkas atau hilangkan ringkasan tersebut karena navbar sudah memiliki komponen reward.

## 3. DESAIN ULANG MENU PROFIL

Pertahankan menu berikut:
1. Profil Saya
2. Progres Belajar
3. Pengaturan
4. Keluar

Gunakan ikon Lucide React:
- `UserRound` untuk Profil Saya.
- `ChartNoAxesCombined` atau `TrendingUp` untuk Progres Belajar.
- `Settings` untuk Pengaturan.
- `LogOut` untuk Keluar.

Aturan desain:
- Ikon dan label sejajar secara vertikal.
- Gunakan ukuran ikon sekitar 17–19 px.
- Area klik harus nyaman untuk anak.
- Gunakan padding yang konsisten.
- Gunakan teks yang jelas dan mudah dibaca.
- Menu biasa memakai teks biru tua atau abu-abu gelap.
- Berikan hover state berupa latar biru muda yang lembut.
- Ikon dan teks berubah warna secara konsisten saat hover.
- Berikan indikator fokus keyboard yang jelas.

Menu Keluar harus memiliki pemisah visual tersendiri di bagian bawah dan menggunakan aksen coral atau merah lembut. Jangan menggunakan warna merah yang terlalu mencolok.

## 4. BENTUK DAN VISUAL

Gunakan:
- Dropdown putih dengan border krem tipis.
- Border radius sekitar 16–20 px.
- Bayangan lembut dan realistis.
- Lebar sekitar 220–260 px pada desktop, disesuaikan dengan konten.
- Jarak antarelemen yang konsisten.
- Animasi masuk singkat berupa opacity dan scale.
- Tipografi Nunito sesuai identitas EduKids.

Hindari:
- Glassmorphism.
- Gradient berlebihan.
- Border tebal pada setiap item.
- Banyak warna berbeda untuk setiap menu.
- Dekorasi bintang yang memenuhi dropdown.
- Desain yang terlalu padat atau terlihat seperti dashboard admin generik.

## 5. ANIMASI DAN INTERAKSI

Ketika avatar ditekan:
- Dropdown terbuka dengan transisi fade dan scale yang lembut.
- Ikon chevron berputar sesuai keadaan dropdown.
- Tombol avatar mendapatkan active state yang konsisten dengan navbar.

Ketika pointer diarahkan ke item:
- Latar berubah secara halus.
- Ikon dapat bergeser 1–2 px jika sesuai.
- Jangan membuat setiap item melompat atau membesar berlebihan.

Ketika item dipilih:
- Navigasikan ke route yang benar.
- Tutup dropdown setelah navigasi.
- Pastikan klik di luar dropdown menutupnya.
- Tombol Escape menutup dropdown.
- Keyboard navigation dan indikator fokus harus berfungsi.

## 6. RESPONSIVE DESIGN

Desktop:
- Dropdown muncul tepat di bawah avatar.
- Pastikan tidak terpotong oleh viewport.
- Jaga jarak dari tepi layar.

Mobile:
- Dropdown tidak boleh keluar dari layar.
- Area sentuh setiap item harus cukup besar.
- Hindari dropdown menutupi kontrol penting.
- Jika pola dropdown tidak cocok pada layar kecil, gunakan panel profil yang lebih nyaman disentuh.

## 7. ATURAN IMPLEMENTASI

Sebelum mengubah kode:
1. Temukan komponen avatar dan dropdown yang benar-benar digunakan.
2. Periksa sistem autentikasi dan sumber data profil.
3. Periksa route Profil Saya, Progres Belajar, dan Pengaturan.
4. Gunakan kembali komponen dan ikon yang sudah tersedia.

Jangan:
- Menghapus fungsi logout.
- Mengubah logika autentikasi.
- Mengganti data profil dinamis menjadi teks statis.
- Mengarang jumlah bintang, XP, atau level.
- Membuat tautan yang tidak berfungsi.
- Membuat ulang navbar dari nol.

Setelah selesai, jalankan aplikasi dan uji seluruh menu, dropdown, interaksi keyboard, serta tampilan mobile.

## HASIL AKHIR

Dropdown harus terasa seperti kartu identitas seorang penjelajah kecil dalam dunia EduKids: ramah, rapi, menyenangkan, dan profesional. Tetap ringan, tidak terlalu ramai, dan konsisten dengan desain navbar serta sistem reward yang sudah ada.

Implementasikan perubahan langsung pada komponen yang digunakan oleh aplikasi dan laporkan file yang diubah.