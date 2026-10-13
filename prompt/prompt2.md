# PROMPT REDESIGN EDUKIDS — LIVING 2D ANIMAL MASCOTS & STORYBOOK ANIMATIONS

Bertindaklah sebagai Senior UI/UX Designer, React Developer, dan 2D Motion Designer. Tingkatkan tampilan website EduKids, platform belajar sambil bermain untuk siswa SD kelas 1–6, agar lebih hidup, unik, menyenangkan, dan kompetitif untuk lomba.

## 1. MASALAH DESAIN SAAT INI

Dashboard saat ini terlalu didominasi kartu putih, teks, border, dan tombol. Secara fungsi cukup jelas, tetapi secara visual terasa seperti dashboard AI generik dan belum memiliki karakter visual yang kuat.

Contohnya, bagian “Misi Kristal Angka & Pola” dan “Langkah Pertama Petualanganmu!” hanya menampilkan teks, statistik, dan tombol. Ruang visualnya perlu diisi dengan ilustrasi karakter dan dunia petualangan yang menarik.

**Tujuan utama: ubah pengalaman dashboard menjadi dunia buku cerita interaktif yang terasa hidup.** Anak harus merasa sedang memasuki petualangan, bukan hanya membuka halaman berisi kartu.

## 2. GAYA VISUAL UTAMA

Gunakan gaya ilustrasi 2D kartun original dengan karakter hewan lucu, ekspresif, dan mudah dikenali.

Referensi karakter:
- Mimi si kelinci putih dengan ransel biru.
- Bimo si beruang kecil berwarna cokelat dengan syal kuning.
- Kiko si rubah oranye yang cerdas dan ceria.
- Pipi si burung biru sebagai pemandu petualangan.

Karakter tersebut merupakan konsep baru yang dapat disesuaikan dengan identitas EduKids. Buat gaya ilustrasi konsisten di seluruh halaman.

Karakteristik ilustrasi:
- 2D hand-drawn atau clean vector cartoon.
- Outline lembut dan konsisten.
- Bentuk membulat, ekspresi wajah jelas, dan siluet mudah dikenali.
- Warna hangat: biru, kuning, krem, hijau mint, dan oranye lembut.
- Shading sederhana dan tekstur minimal.
- Terlihat seperti ilustrasi buku cerita anak profesional, bukan emoji, clip-art acak, atau karakter 3D generik.

Hindari penggunaan emoji sebagai pengganti ilustrasi utama. Jangan mencampur foto realistis, ikon flat, dan maskot dari gaya yang berbeda.

## 3. TAMBAHKAN ILUSTRASI PADA DASHBOARD

### A. Kartu “Misi Kristal Angka & Pola”

Pertahankan judul, deskripsi, informasi jumlah soal, durasi, reward, dan tombol yang sudah tersedia.

Tambahkan ilustrasi utama berupa Mimi si kelinci yang sedang menghitung kristal ajaib berwarna biru dan kuning.

Komposisi:
- Karakter ditempatkan di sisi kanan kartu pada desktop.
- Kristal, bintang kecil, dan beberapa angka mengambang mengelilingi karakter.
- Area teks di sebelah kiri tetap luas dan mudah dibaca.
- Pada mobile, ilustrasi dapat ditempatkan di bagian atas atau samping tanpa membuat teks sempit.
- Gunakan latar ilustrasi transparan atau area berwarna pastel yang menyatu dengan kartu.

Animasi:
- Kelinci bergerak naik-turun perlahan seolah sedang melompat kecil.
- Kristal melayang dengan gerakan lembut.
- Bintang sesekali berkilau.
- Saat tombol “Mulai Misi Tantangan” diklik, gunakan transisi singkat menuju aktivitas yang sebenarnya.

Jangan membuat semua objek bergerak bersamaan atau terlalu cepat.

### B. Kartu “Langkah Pertama Petualanganmu!”

Jangan biarkan kartu ini hanya berisi teks dan tombol.

Tambahkan Bimo si beruang atau Pipi si burung yang sedang menunjukkan peta harta karun.

Visual pendukung:
- Peta kecil dengan jalur putus-putus.
- Penanda lokasi berwarna cerah.
- Pohon, rumput, awan, atau bukit kecil.
- Satu ikon bintang sebagai simbol tujuan pertama.

Gunakan ilustrasi sebagai pengarah perhatian ke tombol “Buka Peta & Pilih Lokasi”.

Jika siswa belum menyelesaikan aktivitas, karakter dapat memberikan petunjuk visual yang ramah. Jika progres siswa sudah tersedia, sesuaikan pesan dan ilustrasi dengan status sebenarnya.

### C. Hero Section Dashboard

Jika struktur halaman memungkinkan, buat hero section yang lebih kuat di bagian atas dashboard.

Contoh pesan:
“Siap Menjelajah Hari Ini?”
“Belajar hal baru, selesaikan misi, dan kumpulkan bintang!”

Tempatkan ilustrasi utama sekelompok hewan kecil yang berada di depan gerbang dunia petualangan EduKids.

Tambahkan jalur menuju dunia belajar berupa:
- Hutan Angka.
- Pulau Kata.
- Lembah Sains.
- Kastel Logika.

Nama lokasi hanya ditampilkan jika sesuai dengan materi dan fitur yang benar-benar tersedia di aplikasi. Hubungkan lokasi dengan halaman yang relevan jika route-nya ada.

Hero tidak boleh terlalu tinggi sehingga fitur utama terdorong jauh ke bawah halaman.

## 4. BUAT ILUSTRASI TERASA HIDUP

Implementasikan animasi 2D menggunakan CSS keyframes, SVG, atau teknologi yang sudah tersedia di proyek.

Animasi yang disarankan:
- `mascot-float`: karakter mengambang perlahan.
- `mascot-hop`: lompatan kecil sesekali.
- `star-twinkle`: kilau bintang yang halus.
- `crystal-float`: kristal melayang.
- `cloud-drift`: awan bergerak sangat perlahan.
- `path-draw`: jalur petualangan muncul secara bertahap.
- `button-feedback`: respons singkat saat tombol ditekan.

Ketentuan:
- Gunakan durasi dan jeda animasi yang bervariasi secara terukur.
- Hindari gerakan yang mengganggu fokus membaca.
- Jangan menerapkan animasi berat pada seluruh halaman.
- Hindari efek berkedip cepat.
- Hormati `prefers-reduced-motion` dengan mengurangi atau menonaktifkan animasi nonesensial.
- Pastikan performa tetap lancar pada perangkat Android kelas menengah.

## 5. ASET ILUSTRASI YANG BERKUALITAS

Prioritaskan aset ilustrasi original dengan gaya visual yang konsisten.

Jika tersedia generator gambar atau aset ilustrasi:
- Buat karakter dengan bentuk, proporsi, warna, dan outline yang konsisten.
- Siapkan variasi pose: berdiri, melompat, membaca, menghitung, memegang peta, dan merayakan keberhasilan.
- Gunakan background transparan jika cocok.
- Pisahkan karakter dari dekorasi bila diperlukan untuk mempermudah animasi.
- Optimalkan ukuran file untuk website.

Jangan mengandalkan satu gambar yang sama untuk semua kartu jika konteks aktivitas berbeda.

Jika belum tersedia aset:
- Buat ilustrasi SVG sederhana yang orisinal atau gunakan aset proyek yang relevan.
- Hindari mengganti ilustrasi yang dibutuhkan dengan emoji.
- Jangan menggunakan URL gambar acak yang belum diverifikasi.
- Jangan membuat area gambar kosong atau gambar rusak jika aset gagal dimuat.

Struktur aset dapat disesuaikan dengan proyek, misalnya:
`src/assets/mascots/`
`src/assets/scenes/`
`src/components/mascots/`

## 6. DESAIN KARTU YANG LEBIH NATURAL

Pertahankan identitas warna EduKids:
- Primary blue: `#2875B8`
- Dark blue: `#205784`
- Soft blue: `#E8F3FF`
- Warm background: `#FFF9EF`
- Main text: `#344256`
- Star yellow: `#FFC857`
- White: `#FFFFFF`

Perbaiki tampilan kartu dengan:
- Mengurangi kesan kotak putih yang terlalu seragam.
- Menggunakan variasi latar pastel yang terkontrol berdasarkan kategori aktivitas.
- Menjaga border dan bayangan tetap halus.
- Memberi ruang bernapas untuk ilustrasi.
- Menyatukan gaya tombol, radius, tipografi, dan jarak antarelemen.
- Mempertahankan kontras teks agar mudah dibaca siswa SD.

Tidak semua kartu harus memiliki ilustrasi besar. Gunakan ilustrasi utama pada bagian yang paling penting dan dekorasi kecil pada bagian pendukung.

## 7. RESPONSIVE DESIGN

Desktop:
- Tampilkan karakter dan teks berdampingan.
- Pertahankan ruang untuk informasi misi dan tombol.
- Gunakan komposisi visual yang seimbang.

Tablet:
- Kurangi ukuran ilustrasi secara proporsional.
- Pertahankan teks, tombol, dan informasi reward agar tidak bertabrakan.

Mobile:
- Susun ilustrasi di atas atau di samping teks sesuai lebar yang tersedia.
- Pastikan tombol tetap mudah disentuh.
- Hindari karakter menutupi judul, deskripsi, atau informasi reward.
- Jangan menyebabkan horizontal scrolling.

## 8. INTERAKSI BERDASARKAN PROGRES

Hubungkan visual dengan status aplikasi yang sudah ada:
- Misi belum dimulai: karakter mengajak siswa memulai.
- Misi sedang berjalan: karakter memberi semangat.
- Misi selesai: karakter merayakan pencapaian dengan animasi singkat.
- Peta belum dibuka: karakter menunjukkan arah.
- Lencana diperoleh: tampilkan ilustrasi penghargaan yang sesuai.

Jangan mengarang status, skor, bintang, atau XP. Gunakan data progres yang sebenarnya.

Animasi adalah umpan balik visual, bukan pengganti logika aplikasi. Semua tombol harus tetap menjalankan fungsi aslinya.

## 9. BATASAN TEKNIS

Sebelum mengubah kode:
- Periksa struktur proyek React.
- Temukan komponen dashboard, sistem routing, autentikasi, dan data progres.
- Pertahankan fitur yang sudah berjalan.
- Gunakan kembali library dan sistem styling yang ada.
- Jangan melakukan redesign seluruh website di luar ruang lingkup yang diperlukan.
- Jangan menambahkan dependensi besar hanya untuk animasi sederhana.

Buat komponen reusable sesuai kebutuhan, seperti:
- `Mascot.jsx`
- `FloatingStars.jsx`
- `AdventureScene.jsx`
- `MissionCard.jsx`

Sesuaikan dengan struktur yang sudah ada dan hindari duplikasi komponen.

## 10. PENGUJIAN DAN KRITERIA SELESAI

Setelah implementasi:
1. Jalankan website dan periksa dashboard.
2. Pastikan semua aset berhasil dimuat.
3. Uji animasi di desktop dan mobile.
4. Periksa posisi karakter pada berbagai ukuran layar.
5. Uji seluruh tombol dan route terkait.
6. Pastikan progres, reward, dan autentikasi tidak rusak.
7. Periksa console browser dan build produksi.
8. Pastikan preferensi reduced motion diterapkan.
9. Perbaiki overflow, layout bergeser, dan animasi yang mengganggu.

Laporkan file yang berubah dan pengujian yang benar-benar sudah dijalankan.

**HASIL AKHIR YANG DIINGINKAN:**

EduKids harus terasa seperti buku cerita 2D interaktif yang hidup. Karakter hewan menjadi teman belajar yang konsisten, ilustrasi menyatu dengan fungsi aktivitas, animasi terasa lembut dan menyenangkan, serta keseluruhan antarmuka tetap rapi, responsif, ringan, dan profesional.

Jangan hanya menambahkan gambar ke dalam kartu lama. Rancang ulang komposisi visual sehingga karakter, cerita, aktivitas, dan tombol terasa sebagai satu pengalaman belajar yang utuh.