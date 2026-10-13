# EDUKIDS — Interactive Quiz & Educational Games

**Tagline:** Main, Belajar, Raih Bintang!

**Product type:** Interactive educational quiz and mini-game platform for elementary school students.

**Target:** Siswa Sekolah Dasar kelas 1–6.

**Technology:** React JS, Vite, JavaScript, React Router, CSS, Lucide React.

**Design direction:** Handcrafted 2D storybook illustration combined with polished, production-quality web interface design.

**Project status:** Build a fully functional frontend application with local demo data and persistent progress.

---

# 1. PROJECT OVERVIEW

EduKids adalah website edukasi interaktif untuk anak SD yang menggabungkan kuis, permainan edukasi, poin, lencana penghargaan, dan papan peringkat dalam satu pengalaman belajar yang menyenangkan.

Website membawa siswa ke dunia cerita yang terdiri dari beberapa lokasi edukasi. Di setiap lokasi, siswa bisa bermain game, menjawab kuis, mengumpulkan bintang, dan menyelesaikan tantangan.

Fokus utama produk ini bukan pembelajaran berbasis video atau sistem manajemen sekolah. Fokus utamanya adalah membuat anak tertarik belajar melalui permainan dan tantangan interaktif.

## Prinsip produk

1. Anak harus dapat memahami cara menggunakan website tanpa membaca instruksi panjang.
2. Kuis dan permainan harus menjadi fitur utama, bukan sekadar elemen tambahan.
3. Setiap permainan harus benar-benar dapat dimainkan sampai selesai.
4. Semua hasil permainan harus memiliki perhitungan skor yang benar.
5. Penghargaan diberikan berdasarkan aktivitas nyata.
6. Visual harus konsisten dari halaman awal sampai halaman hasil.
7. Website harus terasa dibuat oleh tim desainer dan developer profesional, bukan hasil generator template.
8. Jangan menambahkan fitur yang tidak berhubungan dengan tujuan utama produk.

---

# 2. VISUAL DESIGN PHILOSOPHY

## 2.1 Identitas visual

Gunakan gaya visual:

**Storybook Adventure × Modern Educational Game UI**

Artinya, ilustrasi dunia dan karakternya memiliki nuansa buku cerita anak, tetapi navigasi, tombol, tipografi, formulir, dan layout tetap mengikuti standar produk web modern.

Ilustrasi memberikan identitas dan suasana. Komponen antarmuka harus tetap rapi, konsisten, mudah dibaca, dan fungsional.

Jangan membuat seluruh website terlihat seperti gambar kartun. Halaman kuis, hasil, profil, dan papan peringkat tetap harus mempunyai struktur antarmuka yang jelas.

## 2.2 Referensi arah desain

Gunakan prinsip berikut sebagai inspirasi umum:

- Buku cerita anak berkualitas dengan ilustrasi 2D yang hangat.
- Permainan petualangan 2D dengan dunia yang mudah dikenali.
- Aplikasi edukasi modern dengan hierarki informasi yang jelas.
- Produk digital anak dengan interaksi sederhana dan konsisten.

Jangan menyalin layout, logo, karakter, atau aset spesifik dari produk yang sudah ada.

## 2.3 Larangan desain

Jangan menghasilkan desain dengan ciri-ciri berikut:

- Gradient pelangi pada hampir seluruh halaman.
- Glassmorphism atau efek kaca di setiap kartu.
- Glow, neon, dan shadow tebal pada semua elemen.
- Emoji digunakan sebagai seluruh ilustrasi utama.
- Semua elemen berbentuk kapsul atau lingkaran.
- Setiap bagian dibungkus kartu putih yang identik.
- Terlalu banyak kartu dengan ukuran dan susunan sama.
- Judul berukuran sangat besar tanpa kebutuhan.
- Heading, tombol, dan label dengan terlalu banyak warna.
- Dekorasi bintang, awan, dan bentuk abstrak secara acak.
- Sidebar admin generik yang hanya diganti warna.
- Avatar, ikon, dan ilustrasi yang tidak konsisten.
- Elemen mengambang yang menghalangi konten.
- Teks dummy, lorem ipsum, atau label yang tidak bermakna.
- Tombol dekoratif yang tidak memiliki fungsi.
- Layout yang terlihat bagus di screenshot tetapi tidak nyaman digunakan.
- Ilustrasi AI yang berbeda gaya pada setiap halaman.

**Aturan utama:** jangan menyelesaikan desain dengan menambahkan semakin banyak dekorasi. Bangun kualitas melalui komposisi, proporsi, tipografi, ilustrasi yang konsisten, spacing, dan interaksi yang tepat.

---

# 3. DESIGN SYSTEM

Buat design system sebelum membangun seluruh halaman.

## 3.1 Color palette

Gunakan variabel CSS berikut sebagai titik awal.

```css
:root {
  --color-primary: #347DB5;
  --color-primary-dark: #245E8B;
  --color-primary-soft: #E7F3FC;

  --color-background: #FFF9EF;
  --color-surface: #FFFFFF;
  --color-surface-muted: #F6F1E7;

  --color-text: #303C4A;
  --color-text-muted: #6F7B88;

  --color-success: #3E9568;
  --color-success-soft: #E5F5EA;

  --color-warning: #E6B84E;
  --color-warning-soft: #FFF3CF;

  --color-coral: #E9816F;
  --color-coral-soft: #FCEAE5;

  --color-lavender: #8D80C9;
  --color-lavender-soft: #F0ECFB;

  --color-border: #E8E2D8;
  --color-focus: #175D9B;
}
```

Aturan pemakaian:

- Gunakan warna utama untuk tindakan penting.
- Gunakan warna latar yang netral untuk area membaca.
- Gunakan warna aksen hanya untuk membedakan kategori, status, atau hadiah.
- Jangan menjadikan setiap komponen berbeda warna tanpa alasan.
- Gunakan warna teks yang memiliki kontras memadai terhadap latar.
- Warna benar dan salah harus disertai teks atau ikon, bukan warna saja.

## 3.2 Typography

Gunakan Nunito sebagai font utama dan Fredoka secara terbatas untuk heading atau elemen permainan.

Aturan:

- Body text: mudah dibaca, umumnya 15–17 px pada desktop.
- Teks petunjuk: jangan terlalu kecil.
- Judul halaman: memiliki skala yang konsisten.
- Judul game boleh lebih ekspresif, tetapi tidak mengganggu keterbacaan.
- Gunakan maksimal dua keluarga font.
- Sediakan fallback system font jika font eksternal gagal dimuat.

Jangan menggunakan font dekoratif untuk paragraf panjang atau penjelasan jawaban.

## 3.3 Spacing

Gunakan sistem spacing yang konsisten:

- 4 px untuk jarak sangat kecil.
- 8 px untuk jarak antar elemen terkait.
- 12 px untuk jarak elemen dalam satu grup.
- 16 px untuk padding komponen kecil.
- 24 px untuk jarak antarkomponen.
- 32 px untuk jarak antarseksi.
- 48–64 px untuk pemisah bagian besar jika dibutuhkan.

Jangan menentukan spacing secara acak pada setiap halaman.

## 3.4 Border radius

Gunakan variasi berdasarkan fungsi:

- Input dan tombol: 10–14 px.
- Panel informasi: 14–20 px.
- Area ilustrasi: sesuai bentuk artwork.
- Badge: boleh menggunakan bentuk bulat atau emblem.
- Dialog: 16–20 px.

Jangan membuat semua elemen memiliki radius yang sama.

## 3.5 Shadow dan border

Gunakan border tipis untuk membedakan permukaan.

Shadow hanya digunakan ketika membantu menunjukkan kedalaman, seperti pada dialog, menu mengambang, atau tombol utama tertentu.

Jangan memberikan shadow besar pada semua komponen.

## 3.6 Button system

Buat komponen tombol reusable:

- Primary button.
- Secondary button.
- Tertiary button.
- Icon button.
- Answer button.
- Disabled button.

Setiap tombol harus memiliki state:

- Default.
- Hover.
- Active.
- Focus-visible.
- Disabled.
- Loading jika ada proses asynchronous.

Semua tombol harus menggunakan komponen dan aturan styling yang konsisten.

---

# 4. ILLUSTRATION ART DIRECTION

## 4.1 Gaya ilustrasi

Gunakan ilustrasi 2D dengan karakter dan lingkungan yang konsisten.

Karakteristik:

- Bentuk sederhana dan mudah dikenali.
- Outline lembut dan konsisten.
- Ekspresi ramah.
- Warna harmonis.
- Pencahayaan sederhana.
- Komposisi jelas.
- Detail cukup, tetapi tidak berlebihan.
- Cocok untuk anak SD.

Hindari mencampur ilustrasi 3D realistis, flat vector, pixel art, dan anime dalam satu tampilan.

## 4.2 Dunia cerita

Bangun satu dunia visual yang dapat dikunjungi melalui peta.

Lokasi:

1. Desa Angka.
2. Hutan Kata.
3. Lembah Sains.
4. Pulau English.
5. Kerajaan Pengetahuan.

Setiap lokasi harus memiliki identitas warna, objek lingkungan, dan ilustrasi yang membedakannya.

Gunakan jalur petualangan yang menghubungkan lokasi. Jalur ini harus menjadi bagian dari peta, bukan garis dekoratif yang tidak terhubung dengan navigasi.

## 4.3 Karakter

Gunakan karakter orisinal:

- Kiko si Kelinci: pemandu.
- Mimi si Kucing: Matematika.
- Luna si Burung Hantu: Bahasa Indonesia.
- Bubu si Beruang: IPA.
- Piko si Rubah: kuis pengetahuan.

Karakter yang sama harus menggunakan aset yang sama di seluruh halaman.

Jika aset gambar belum tersedia, buat ilustrasi sementara yang rapi dan konsisten. Jangan mengganti karakter dengan emoji atau gambar acak dari URL eksternal.

## 4.4 Asset management

Simpan aset dengan struktur:

```text
public/
└── images/
    ├── characters/
    ├── worlds/
    ├── subjects/
    ├── games/
    ├── rewards/
    └── backgrounds/
```

Gunakan nama file yang deskriptif.

Contoh:

```text
characters/kiko-guide.png
characters/mimi-cat.png
worlds/world-map.webp
worlds/number-village.webp
games/math-adventure.webp
rewards/first-star.webp
```

Jangan merujuk ke gambar yang tidak tersedia. Periksa seluruh path aset sebelum build produksi.

Jika membuat ilustrasi dengan generator gambar, gunakan art direction yang sama dan hindari teks tertanam di dalam gambar. Teks antarmuka harus dibuat menggunakan HTML dan CSS.

---

# 5. INFORMATION ARCHITECTURE

Susun navigasi berdasarkan kebutuhan anak.

Menu utama:

1. Beranda.
2. Peta Petualangan.
3. Kuis.
4. Game Edukasi.
5. Koleksi Lencana.
6. Papan Peringkat.
7. Profil.

Jangan menambahkan menu admin, manajemen guru, pembayaran, atau pengaturan organisasi ke aplikasi siswa.

Pengaturan suara dan animasi dapat ditempatkan pada profil atau menu pengaturan sederhana.

Gunakan label yang mudah dimengerti anak. Jangan menggunakan istilah teknis yang tidak diperlukan.

---

# 6. HOME PAGE

Route: `/`

Halaman beranda harus memperkenalkan pengalaman utama produk.

## 6.1 Hero section

Tampilkan:

- Ilustrasi dunia petualangan.
- Karakter Kiko.
- Sapaan yang ramah.
- Tagline “Main, Belajar, Raih Bintang!”
- Tombol “Mulai Bermain”.
- Tombol sekunder “Jelajahi Dunia”.

Contoh teks:

“Halo, Penjelajah Cilik!”

“Siap memecahkan teka-teki, menemukan bintang, dan menjelajahi dunia penuh ilmu?”

Jangan menggunakan judul generik seperti “Welcome to Our Platform” atau paragraf pemasaran yang terlalu panjang.

Hero harus memiliki komposisi visual yang seimbang. Jangan memenuhi seluruh viewport dengan ilustrasi sehingga fitur utama tidak terlihat.

## 6.2 Daily challenge

Tampilkan satu tantangan pilihan.

Contoh:

“Bantu Mimi mengumpulkan 5 kristal dengan menyelesaikan tantangan Matematika!”

Informasi:

- Nama misi.
- Mata pelajaran.
- Jumlah soal.
- Estimasi waktu.
- Hadiah yang tersedia.
- Tombol “Mulai Misi”.

Misi harus mengarah ke game yang benar-benar tersedia.

## 6.3 Continue playing

Tampilkan permainan yang terakhir dimainkan atau rekomendasi berdasarkan kelas.

Jika belum ada aktivitas, tampilkan empty state yang mengajak siswa memilih permainan.

Jangan menampilkan aktivitas terakhir palsu sebagai riwayat pengguna sungguhan.

## 6.4 World preview

Tampilkan sebagian peta dunia dan beberapa lokasi yang dapat dipilih.

Klik lokasi harus membuka halaman yang sesuai.

## 6.5 Progress summary

Tampilkan ringkasan sederhana:

- XP.
- Bintang.
- Kuis selesai.
- Badge diperoleh.

Jangan menjadikan statistik sebagai fokus utama beranda. Fokus utama tetap bermain dan menjelajah.

---

# 7. WORLD MAP

Route: `/peta`

Peta adalah elemen visual penting yang membedakan EduKids dari website kuis biasa.

## Persyaratan

- Gunakan ilustrasi peta yang konsisten.
- Tampilkan lima lokasi pembelajaran.
- Gunakan jalur yang menghubungkan lokasi.
- Tampilkan status setiap lokasi.
- Tampilkan progres tiap lokasi jika relevan.
- Klik lokasi membuka halaman detail.
- Lokasi terkunci memberikan penjelasan cara membukanya.
- Status lokasi berubah berdasarkan progres.

Jangan membuat peta hanya berupa lima kartu yang disusun dalam grid.

Jika peta menggunakan SVG, semua elemen navigasi harus dapat difokuskan dan dioperasikan melalui keyboard.

Pada layar kecil, sediakan daftar lokasi alternatif yang tetap mempertahankan identitas visual dunia cerita.

---

# 8. QUIZ SYSTEM

Route:

- `/kuis`
- `/kuis/:quizId`

Kuis adalah salah satu fitur inti produk.

## 8.1 Quiz catalog

Tampilkan katalog kuis berdasarkan:

- Mata pelajaran.
- Kelas.
- Tingkat kesulitan.
- Status penyelesaian.

Setiap item menampilkan:

- Judul kuis.
- Ilustrasi atau identitas visual.
- Mata pelajaran.
- Kelas yang sesuai.
- Jumlah soal.
- Estimasi waktu.
- Hadiah yang tersedia.

Sediakan filter yang berfungsi. Jangan hanya membuat tampilan filter tanpa logika.

## 8.2 Quiz flow

Setiap kuis mengikuti urutan:

1. Halaman pengenalan.
2. Instruksi singkat.
3. Mulai kuis.
4. Tampilkan soal.
5. Pilih jawaban.
6. Tampilkan feedback.
7. Lanjutkan ke soal berikutnya.
8. Hitung hasil akhir.
9. Tampilkan penghargaan.
10. Simpan hasil dan progres.

## 8.3 Question interface

Tampilan soal harus fokus dan bebas gangguan.

Tampilkan:

- Nama kategori.
- Nomor soal.
- Progress bar.
- Teks soal.
- Ilustrasi jika diperlukan.
- Pilihan jawaban.
- Tombol konfirmasi atau lanjut sesuai pola interaksi.
- Tombol keluar dengan konfirmasi.

Jangan menampilkan terlalu banyak statistik di layar pengerjaan soal.

## 8.4 Answer interaction

Saat siswa memilih jawaban:

- Berikan state visual pada jawaban yang dipilih.
- Cegah jawaban ganda untuk soal yang sama.
- Tampilkan feedback yang mudah dimengerti.
- Jelaskan jawaban secara singkat.
- Berikan tombol lanjut.
- Pastikan keyboard dan pembaca layar dapat memahami status jawaban.

Contoh feedback:

“Hebat! Jawabanmu benar.”

“Belum tepat. Yuk, lihat cara menemukan jawaban yang benar.”

Jangan mempermalukan siswa.

## 8.5 Scoring

Gunakan aturan skor yang jelas dan konsisten.

Contoh konfigurasi awal:

- Jawaban benar: 10 poin.
- Jawaban salah: 0 poin.
- Skor maksimum: jumlah soal × 10.
- XP: dihitung berdasarkan jawaban benar.
- Bonus penyelesaian: hanya sekali untuk satu hasil penyelesaian yang memenuhi ketentuan.
- Bintang: ditentukan berdasarkan persentase jawaban benar.

Contoh aturan bintang:

- 90–100%: 3 bintang.
- 70–89%: 2 bintang.
- 50–69%: 1 bintang.
- Di bawah 50%: 0 bintang dan kesempatan mencoba lagi.

Aturan tersebut harus dipusatkan dalam satu modul agar dapat disesuaikan tanpa mengubah seluruh aplikasi.

Jangan mengubah skor berdasarkan animasi, klik tombol acak, atau nilai yang di-hardcode pada halaman hasil.

## 8.6 Results page

Tampilkan:

- Skor akhir.
- Jumlah jawaban benar.
- Jumlah jawaban salah.
- Persentase keberhasilan.
- Bintang yang diperoleh.
- XP yang didapat.
- Badge baru jika ada.
- Ringkasan soal yang perlu dipelajari.
- Tombol “Coba Lagi”.
- Tombol “Pilih Kuis Lain”.
- Tombol “Kembali ke Peta”.

Animasi keberhasilan harus ringan dan tidak menghalangi informasi hasil.

## 8.7 Question bank

Buat data soal terpisah untuk setiap kelas dan mata pelajaran.

Setiap soal memiliki:

- ID unik.
- Kelas.
- Mata pelajaran.
- Tingkat kesulitan.
- Pertanyaan.
- Pilihan jawaban.
- Jawaban benar.
- Penjelasan.
- Referensi ilustrasi opsional.

Validasi agar jawaban benar selalu cocok dengan salah satu pilihan jawaban.

Jangan menggunakan soal yang sama berulang kali dalam satu sesi jika bank soal memungkinkan variasi.

---

# 9. EDUCATIONAL GAMES

Route:

- `/game`
- `/game/:gameId`

Buat minimal tiga game yang mempunyai alur dan interaksi berbeda.

## 9.1 Petualangan Angka

Genre: Math challenge.

Cerita: Mimi membutuhkan bantuan untuk mengumpulkan kristal angka.

Fitur:

- Penjumlahan.
- Pengurangan.
- Perkalian.
- Pembagian.
- Tingkat kesulitan berdasarkan kelas.
- Pilihan jawaban.
- Feedback.
- Skor.
- Progres.
- Halaman hasil.

Jangan memberikan operasi Matematika yang tidak sesuai dengan tingkat kelas yang dipilih.

## 9.2 Hutan Kata

Genre: Word puzzle.

Cerita: Luna membutuhkan bantuan menemukan kata-kata yang hilang dari buku cerita.

Fitur:

- Tebak kata.
- Pilih kosakata yang benar.
- Melengkapi kalimat.
- Susun kata menjadi kalimat sederhana.
- Penjelasan jawaban.
- Skor dan progres.

Pastikan soal bahasa menggunakan ejaan yang benar.

## 9.3 Misi Pengetahuan

Genre: General knowledge quiz.

Cerita: Piko mengajak siswa menjelajahi dunia pengetahuan.

Fitur:

- Soal IPA.
- Soal IPS.
- Pengetahuan umum.
- Pilihan jawaban.
- Penjelasan.
- Sistem skor.
- Ringkasan hasil.

Jangan mencampur semua jenis pertanyaan tanpa label kategori.

## 9.4 Game state

Setiap permainan minimal memiliki state:

- Intro.
- Playing.
- Answer feedback.
- Completed.

Jika game menggunakan timer, sediakan pengaturan yang jelas dan jangan menjadikan timer sebagai sumber hukuman yang tidak perlu.

Semua game harus dapat dimulai ulang tanpa membawa jawaban atau skor lama secara tidak sengaja.

---

# 10. XP, STARS, COINS, AND REWARDS

Gunakan satu sistem penghargaan yang konsisten.

## XP

XP mencerminkan aktivitas belajar. Tentukan XP melalui fungsi yang terpusat.

## Bintang

Bintang diberikan berdasarkan hasil kuis atau tantangan yang selesai.

## Koin

Koin merupakan mata uang virtual untuk koleksi atau elemen kosmetik jika fitur tersebut benar-benar diimplementasikan.

Jangan menambahkan toko virtual yang tidak memiliki fungsi.

## Reward rules

- Hadiah diberikan setelah aktivitas memenuhi syarat.
- Bonus penyelesaian tidak diberikan dua kali untuk satu penyelesaian.
- Refresh halaman hasil tidak boleh menambahkan hadiah baru.
- Memulai ulang kuis harus membuat sesi baru.
- Riwayat hasil harus memiliki ID sesi.
- Validasi data sebelum menyimpannya.
- Tampilkan perubahan poin secara jelas.

Untuk versi frontend demo, sistem dapat disimpan secara lokal. Jangan mengklaim mekanisme lokal tahan manipulasi pengguna.

---

# 11. ACHIEVEMENT SYSTEM

Route: `/pencapaian`

Buat halaman koleksi badge dengan desain seperti buku koleksi atau album penghargaan.

Contoh badge:

- Bintang Pertama.
- Jago Berhitung.
- Sahabat Kata.
- Penjelajah Sains.
- Juara Kuis.
- Pantang Menyerah.

Setiap badge mempunyai:

- ID.
- Nama.
- Deskripsi.
- Ilustrasi.
- Kriteria.
- Status.
- Tanggal diperoleh jika terbuka.

Badge yang terkunci harus terlihat berbeda, tetapi tetap dapat dikenali.

Jangan menampilkan badge sebagai gambar dekoratif yang tidak berkaitan dengan pencapaian pengguna.

Buat fungsi yang memeriksa kriteria dan memperbarui badge berdasarkan data progres.

---

# 12. LEADERBOARD

Route: `/peringkat`

Papan peringkat harus sederhana, mudah dibaca, dan ramah anak.

Tampilkan:

- Posisi.
- Avatar.
- Nama panggilan.
- Total XP.
- Indikator posisi pengguna demo.

Sediakan filter periode jika memang didukung data:

- Mingguan.
- Keseluruhan.

Untuk versi demo, tampilkan label “Contoh Peringkat” atau “Data Demo”.

Jangan mengklaim data berasal dari siswa sungguhan. Jangan mengarang sinkronisasi real-time.

Jangan menampilkan nama lengkap, email, alamat, atau informasi pribadi anak.

Peringkat harus berdasarkan aturan pengurutan yang benar dan memiliki empty state apabila data tidak tersedia.

---

# 13. PROFILE AND SETTINGS

Route: `/profil`

Fitur:

- Nama panggilan.
- Kelas.
- Avatar.
- XP.
- Bintang.
- Game selesai.
- Kuis selesai.
- Badge diperoleh.
- Pengaturan suara.
- Pengaturan animasi.
- Reset progres.

Reset progres harus menggunakan dialog konfirmasi yang jelas.

Jangan menyimpan password atau data sensitif anak di localStorage.

Jika autentikasi sungguhan belum dibuat, profil harus diberi status sebagai profil demo, bukan akun terverifikasi.

---

# 14. ROUTING AND NAVIGATION

Gunakan React Router.

Route wajib:

```text
/
 /peta
 /kuis
 /kuis/:quizId
 /game
 /game/:gameId
 /pencapaian
 /peringkat
 /profil
```

Ketentuan:

- Semua route harus terhubung.
- Navigasi browser back dan forward harus berfungsi.
- Route yang tidak dikenal menampilkan halaman 404.
- ID yang tidak ditemukan menampilkan pesan yang jelas.
- Link aktif memiliki indikator visual.
- Tombol kembali tidak boleh kehilangan progres sesi tanpa penjelasan.
- Keluar dari kuis yang sedang berjalan harus menampilkan konfirmasi jika progres sesi akan dibuang.

Jangan membuat link yang sekadar mengarah ke `#`.

---

# 15. TECH STACK

Gunakan:

- React.
- Vite.
- JavaScript.
- React Router.
- Lucide React.
- CSS Modules atau CSS biasa yang terstruktur.
- localStorage untuk progres demo.

Jangan menggunakan TypeScript karena proyek ini secara eksplisit menggunakan JavaScript.

Jangan menambahkan banyak dependency hanya untuk efek visual sederhana.

Gunakan React state dan hooks untuk interaksi. Jangan memanipulasi DOM secara langsung jika dapat diselesaikan dengan state React.

---

# 16. PROJECT STRUCTURE

Gunakan struktur modular:

```text
edukids/
├── public/
│   └── images/
│       ├── characters/
│       ├── worlds/
│       ├── games/
│       └── rewards/
├── src/
│   ├── app/
│   │   └── router.jsx
│   ├── components/
│   │   ├── buttons/
│   │   ├── layout/
│   │   ├── characters/
│   │   ├── world-map/
│   │   ├── quiz/
│   │   ├── games/
│   │   ├── rewards/
│   │   └── common/
│   ├── pages/
│   ├── features/
│   │   ├── quiz/
│   │   ├── games/
│   │   ├── progress/
│   │   ├── achievements/
│   │   └── leaderboard/
│   ├── data/
│   │   ├── subjects.js
│   │   ├── worlds.js
│   │   ├── achievements.js
│   │   └── questions/
│   ├── hooks/
│   ├── services/
│   │   └── storageService.js
│   ├── utils/
│   │   ├── scoring.js
│   │   ├── rewards.js
│   │   └── validation.js
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── .gitignore
└── README.md
```

Struktur dapat dikembangkan, tetapi pemisahan halaman, komponen, data, dan logika harus dipertahankan.

---

# 17. DATA MODELS

Buat struktur data konsisten.

## Quiz

```js
{
  id: "math-grade-3",
  title: "Misi Kristal Angka",
  subject: "Matematika",
  grade: 3,
  difficulty: "easy",
  questions: []
}
```

## Question

```js
{
  id: "math-001",
  prompt: "Berapakah hasil dari 8 + 7?",
  options: [
    { id: "a", text: "13" },
    { id: "b", text: "14" },
    { id: "c", text: "15" },
    { id: "d", text: "16" }
  ],
  correctOptionId: "c",
  explanation: "8 ditambah 7 sama dengan 15."
}
```

## Profile

```js
{
  id: "demo-profile",
  nickname: "Penjelajah Cilik",
  grade: 3,
  avatarId: "kiko"
}
```

## Progress

```js
{
  totalXp: 0,
  totalStars: 0,
  totalCoins: 0,
  completedQuizzes: [],
  completedGames: [],
  achievements: [],
  history: []
}
```

## Activity history

```js
{
  id: "session-unique-id",
  activityId: "math-grade-3",
  activityType: "quiz",
  score: 0,
  correctAnswers: 0,
  totalQuestions: 0,
  xpEarned: 0,
  completedAt: null
}
```

Data di atas adalah skema awal. Validasi seluruh input dan pastikan ID sesi tidak digunakan ulang.

---

# 18. LOCAL STORAGE ARCHITECTURE

Buat `storageService.js` sebagai satu-satunya lapisan utama untuk membaca dan menulis progres.

Contoh key:

```text
edukids.profile.v1
edukids.progress.v1
edukids.settings.v1
edukids.history.v1
```

Implementasikan fungsi nyata:

```js
getProfile()
saveProfile(profile)

getProgress()
saveProgress(progress)

getSettings()
saveSettings(settings)

getHistory()
saveActivity(activity)

resetProgress()
```

Semua fungsi harus memiliki implementasi, error handling, dan nilai default yang aman.

Ketentuan:

- Tangani JSON yang rusak.
- Tangani data yang belum tersedia.
- Hindari menyimpan objek yang tidak diperlukan.
- Hindari duplikasi aktivitas.
- Jangan menyimpan jawaban sensitif.
- Pastikan komponen memperbarui UI setelah data berubah.
- Gunakan versi key untuk mendukung migrasi struktur data.
- Jangan menganggap localStorage sebagai penyimpanan online atau penyimpanan yang aman terhadap manipulasi.

---

# 19. RESPONSIVE DESIGN

## Desktop

- Peta dan ilustrasi mempunyai ruang yang memadai.
- Konten terpusat dengan lebar yang terkendali.
- Navigasi konsisten.
- Tidak ada area kosong besar tanpa fungsi.
- Soal dan pilihan jawaban mudah dipindai.

## Tablet

- Tata letak menyesuaikan lebar.
- Navigasi tidak bertabrakan dengan konten.
- Ilustrasi tetap proporsional.

## Mobile

- Navigasi mudah digunakan dengan sentuhan.
- Pilihan jawaban mempunyai area sentuh yang cukup.
- Tidak ada scrolling horizontal.
- Teks tidak terpotong.
- Dialog tetap berada di dalam viewport.
- Peta memiliki mode daftar.
- Halaman hasil mudah dibaca tanpa zoom.

Uji setidaknya pada lebar sekitar 360 px, 768 px, dan 1280 px.

---

# 20. ACCESSIBILITY AND CHILD SAFETY

- Gunakan HTML semantik.
- Pastikan navigasi dapat digunakan dengan keyboard.
- Sediakan focus-visible yang jelas.
- Berikan label pada kontrol.
- Gunakan alt text untuk ilustrasi informatif.
- Jangan menggunakan warna saja untuk menunjukkan benar atau salah.
- Hormati preferensi reduced motion.
- Hindari flashing animation.
- Jangan meminta data pribadi yang tidak diperlukan.
- Jangan menampilkan data pribadi anak di leaderboard.
- Jangan membuat fitur komunikasi publik tanpa moderasi.
- Jangan menggunakan dark patterns untuk mendorong anak bermain terus-menerus.

Kuis harus memberikan feedback yang membangun, bukan mempermalukan siswa.

---

# 21. ERROR AND EMPTY STATES

Setiap fitur perlu menangani keadaan kosong atau kesalahan.

Contoh:

- Belum ada profil: tampilkan onboarding.
- Belum ada riwayat: ajak siswa mencoba kuis pertama.
- Game tidak ditemukan: tampilkan pesan dan tombol kembali.
- Data progres rusak: gunakan default yang aman dan beri informasi yang sesuai.
- Gambar gagal dimuat: tampilkan fallback lokal.
- Tidak ada hasil filter: tampilkan pesan bahwa kuis tidak ditemukan.
- Reset progres: minta konfirmasi.
- Kuis terputus: tangani sesi yang belum selesai secara konsisten.

Jangan menampilkan stack trace atau error teknis mentah kepada anak.

---

# 22. PERFORMANCE

- Gunakan ukuran gambar yang sesuai.
- Gunakan format WebP atau format modern bila sesuai.
- Hindari memuat semua aset besar sekaligus.
- Gunakan lazy loading untuk gambar yang tidak langsung terlihat.
- Hindari dependency berlebihan.
- Hindari animasi yang memicu layout berulang.
- Pastikan build produksi berjalan.
- Jangan mengambil gambar dari URL yang tidak stabil tanpa fallback.

Utamakan kelancaran pada laptop sekolah dan smartphone kelas menengah.

---

# 23. TESTING REQUIREMENTS

Uji semua alur utama.

## Kuis

- Kuis dapat dimulai.
- Pilihan jawaban berfungsi.
- Jawaban tidak dapat dikirim berulang untuk soal yang sama.
- Feedback sesuai jawaban.
- Skor benar.
- Hasil akhir benar.
- Bonus tidak didapatkan berulang akibat refresh.
- Mengulang kuis memulai sesi baru.

## Game

- Setiap game dapat dimulai.
- Gameplay dapat diselesaikan.
- Jawaban benar dan salah diproses dengan tepat.
- Tombol restart bekerja.
- State permainan lama tidak terbawa secara tidak sengaja.

## Progress

- XP dan bintang dihitung dengan benar.
- Badge diperoleh ketika syarat terpenuhi.
- Riwayat tersimpan.
- Data bertahan setelah refresh.
- Reset progres bekerja.

## UI

- Tidak ada route rusak.
- Tidak ada gambar rusak.
- Tidak ada tombol dekoratif tanpa fungsi.
- Tidak ada overflow horizontal.
- Tidak ada error console.
- Layout responsif.
- Fokus keyboard terlihat.

## Production

- `npm run build` berhasil.
- Semua aset ditemukan.
- Semua import valid.
- README sesuai implementasi.

---

# 24. IMPLEMENTATION PHASES

Jangan membangun seluruh fitur secara acak. Ikuti tahapan berikut.

## Phase 1 — Foundation

- Setup React dan Vite.
- Buat routing.
- Buat design system.
- Buat komponen dasar.
- Buat navigasi responsif.

## Phase 2 — Visual Identity

- Tetapkan ilustrasi karakter.
- Buat dunia petualangan.
- Implementasikan peta.
- Buat beranda.
- Pastikan gaya visual konsisten.

## Phase 3 — Quiz Engine

- Buat model soal.
- Buat bank soal demo.
- Buat alur kuis.
- Implementasikan scoring.
- Buat hasil kuis.

## Phase 4 — Mini Games

- Implementasikan Petualangan Angka.
- Implementasikan Hutan Kata.
- Implementasikan Misi Pengetahuan.
- Uji seluruh alur game.

## Phase 5 — Progress and Rewards

- Implementasikan XP.
- Implementasikan bintang dan koin.
- Implementasikan badge.
- Implementasikan riwayat.
- Integrasikan localStorage.

## Phase 6 — Leaderboard and Profile

- Buat papan peringkat demo.
- Buat profil.
- Buat pengaturan.
- Implementasikan reset progres.

## Phase 7 — Quality Assurance

- Uji responsivitas.
- Uji navigasi.
- Uji skor.
- Uji persistensi data.
- Uji aksesibilitas.
- Perbaiki error.
- Jalankan build produksi.

---

# 25. INSTALLATION

Pastikan Node.js LTS yang kompatibel dengan versi Vite telah terpasang.

Periksa:

```bash
node -v
npm -v
```

Buat proyek:

```bash
npm create vite@latest edukids -- --template react
cd edukids
npm install
npm install react-router-dom lucide-react
```

Jalankan:

```bash
npm run dev
```

Build produksi:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

Tambahkan script testing atau linting sesuai tooling yang benar-benar dipasang. Jangan menuliskan perintah testing yang tidak tersedia dalam `package.json`.

---

# 26. DEFINITION OF DONE

Proyek belum dianggap selesai hanya karena halaman utama terlihat bagus.

Proyek dinyatakan selesai jika:

- [ ] Seluruh halaman inti tersedia.
- [ ] Desain menggunakan art direction yang konsisten.
- [ ] Peta berfungsi sebagai navigasi.
- [ ] Kuis dapat diselesaikan.
- [ ] Tiga mini-game berfungsi.
- [ ] Skor dihitung dengan benar.
- [ ] XP dan penghargaan tidak diberikan ganda.
- [ ] Badge diperoleh berdasarkan aturan.
- [ ] Leaderboard demo diurutkan dengan benar.
- [ ] Progres bertahan setelah refresh.
- [ ] Profil dan pengaturan berfungsi.
- [ ] Reset progres mempunyai konfirmasi.
- [ ] Tidak ada tautan atau tombol utama yang rusak.
- [ ] Layout responsif.
- [ ] Aset visual tidak rusak.
- [ ] Build produksi berhasil.
- [ ] Dokumentasi sesuai aplikasi yang benar-benar dibuat.

---

# 27. MANDATORY INSTRUCTIONS FOR AI CODING AGENT

Instruksi ini wajib diikuti selama implementasi.

## A. Jangan menghasilkan desain generik

Jangan langsung membuat dashboard dengan sidebar, grid kartu seragam, gradient, dan emoji.

Tentukan terlebih dahulu komposisi visual, tipografi, aset, palet warna, dan hierarki konten.

Setiap halaman harus memiliki struktur yang sesuai dengan fungsinya. Halaman bermain kuis tidak boleh terlihat sama dengan halaman katalog game atau halaman profil.

## B. Prioritaskan kualitas visual

Buat satu halaman beranda yang benar-benar matang sebelum menduplikasi pola desain ke seluruh aplikasi.

Pastikan ilustrasi, ukuran teks, spacing, tombol, dan warna sudah konsisten.

Jangan menyelesaikan halaman dengan menambahkan dekorasi acak untuk membuatnya tampak lebih ramai.

## C. Implementasikan fitur sungguhan

Jangan membuat tombol yang hanya menampilkan alert tanpa menyelesaikan tindakan yang dijanjikan.

Jangan menampilkan skor hardcoded seolah-olah berasal dari jawaban siswa.

Jangan menampilkan badge terbuka jika persyaratannya belum terpenuhi.

Jangan mengklaim leaderboard real-time jika belum ada backend.

## D. Jangan mengarang aset

Jangan menggunakan path gambar yang belum ada.

Jika aset belum tersedia, buat placeholder yang konsisten atau siapkan aset lokal yang benar-benar tersedia.

Periksa seluruh aset sebelum menyelesaikan build.

## E. Jaga kualitas kode

Jangan membuat seluruh aplikasi dalam satu file.

Jangan menduplikasi perhitungan skor.

Jangan menggunakan state terpisah yang saling bertentangan untuk data progres yang sama.

Jangan menambahkan dependency tanpa kebutuhan yang jelas.

Jangan mengabaikan error build atau console.

## F. Kerjakan secara bertahap

Setelah setiap tahap:

1. Periksa hasil implementasi.
2. Jalankan aplikasi.
3. Uji interaksi utama.
4. Perbaiki masalah.
5. Lanjutkan ke tahap berikutnya.

Jangan membuat banyak halaman sekaligus tanpa menguji alur pengguna.

## G. Laporkan status secara jujur

Pada akhir pekerjaan, laporkan:

- Fitur yang sudah selesai.
- Fitur yang belum selesai.
- Dependency yang digunakan.
- Cara menjalankan aplikasi.
- Hasil build.
- Batasan versi demo.
- Bagian yang memerlukan backend.

Jangan menyatakan pengujian berhasil jika belum benar-benar dijalankan.

---

# FINAL PRODUCT REQUIREMENT

Hasil akhir harus menjadi website kuis dan permainan edukasi anak yang benar-benar dapat digunakan.

Pengalaman utamanya adalah anak memilih kuis atau game, memainkan tantangan, mendapatkan feedback, melihat skor, mengumpulkan XP dan badge, lalu melihat progresnya pada profil dan papan peringkat.

Dunia cerita menjadi identitas visual yang menyatukan seluruh pengalaman, bukan alasan untuk memenuhi halaman dengan dekorasi.

**Bangun produk yang rapi, konsisten, menyenangkan, responsif, dan fungsional. Hindari estetika AI generik.**

**EduKids — Main, Belajar, Raih Bintang!**