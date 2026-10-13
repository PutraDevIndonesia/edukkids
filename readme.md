# EduKids — Belajar Sambil Bermain

**Innovating Education Through Technology**

EduKids adalah platform pembelajaran digital interaktif untuk siswa Sekolah Dasar (SD) kelas 1–6 yang menggabungkan kegiatan belajar dengan permainan, kuis, petualangan, dan sistem penghargaan. Proyek ini dikembangkan untuk menciptakan pengalaman belajar yang menyenangkan, mudah dipahami, interaktif, dan menarik bagi anak-anak.

EduKids mengusung konsep *belajar sambil bermain* dengan dunia petualangan 2D yang mengajak siswa menjelajahi berbagai lokasi pembelajaran, menyelesaikan tantangan, memperoleh bintang, mengumpulkan XP, dan mengembangkan pengetahuan melalui aktivitas interaktif.

Proyek ini berfokus pada pengembangan website edukasi yang memiliki identitas visual sendiri, pengalaman pengguna yang baik, dan fitur pembelajaran yang saling terintegrasi.

---

## 1. Identitas Proyek

- **Nama proyek:** EduKids
- **Jenis proyek:** Website edukasi interaktif
- **Tema:** Belajar sambil bermain dalam dunia petualangan
- **Target pengguna:** Siswa Sekolah Dasar kelas 1–6
- **Platform:** Website responsif
- **Teknologi utama:** React JS
- **Tujuan:** Membuat pengalaman belajar digital yang interaktif, menyenangkan, dan mendorong motivasi belajar anak.
- **Slogan:** Main, Belajar, Raih Bintang!
- **Bahasa antarmuka:** Bahasa Indonesia

EduKids merupakan proyek yang memiliki identitas, desain, karakter, sistem navigasi, dan konsep pembelajaran tersendiri. Setiap pengembangan harus mengikuti identitas proyek ini, bukan menggantinya dengan desain atau struktur generik dari proyek lain.

## 2. Latar Belakang

Pembelajaran digital tidak hanya membutuhkan materi yang informatif, tetapi juga penyajian yang mampu mempertahankan perhatian dan keterlibatan siswa.

EduKids dikembangkan dengan pendekatan gamifikasi, yaitu penerapan elemen permainan ke dalam pengalaman belajar. Siswa tidak hanya membaca materi, tetapi juga dapat menjelajahi lokasi, menyelesaikan kuis, memainkan permainan edukatif, dan memperoleh penghargaan berdasarkan aktivitas belajar.

Melalui pendekatan ini, EduKids bertujuan membantu menciptakan suasana belajar yang lebih aktif, menyenangkan, dan mendorong siswa untuk terus mencoba.

## 3. Tujuan Pengembangan

1. Menyediakan platform belajar digital yang ramah anak.
2. Menggabungkan pembelajaran dengan permainan interaktif.
3. Mendorong motivasi siswa melalui sistem bintang, XP, lencana, dan peringkat.
4. Menyajikan materi melalui tantangan dan petualangan visual.
5. Mengembangkan antarmuka yang konsisten, responsif, dan mudah digunakan.
6. Menghadirkan pengalaman belajar yang menarik tanpa mengurangi kejelasan materi.
7. Membangun proyek React JS yang terstruktur dan mudah dikembangkan.

## 4. Fitur Utama

### 4.1. Dunia Petualangan dan Peta Eksplorasi

Peta merupakan salah satu identitas utama EduKids. Peta dirancang sebagai dunia petualangan edukatif yang memungkinkan siswa memilih lokasi berdasarkan bidang pembelajaran.

Lokasi utama yang digunakan dalam konsep EduKids:

- **Desa Angka** — pembelajaran Matematika.
- **Hutan Kata** — pembelajaran Bahasa Indonesia.
- **Pulau English** — pembelajaran Bahasa Inggris.
- **Lembah Sains** — pembelajaran Ilmu Pengetahuan Alam.
- **Kerajaan Pengetahuan** — pembelajaran Pengetahuan Umum.

Peta menggunakan ilustrasi lingkungan 2D dengan jalan petualangan, pepohonan, bangunan tematik, maskot hewan, dan elemen alam.

Prinsip desain peta:
- Seluruh elemen harus terlihat menyatu dalam satu lingkungan.
- Gaya ilustrasi, outline, pencahayaan, bayangan, dan perspektif harus konsisten.
- Setiap lokasi memiliki identitas visual yang jelas.
- Jalan menghubungkan lokasi secara logis.
- Tampilan harus tajam, rapi, dan tidak terlihat seperti kumpulan gambar yang ditempel.
- Animasi lingkungan harus halus dan tidak mengganggu navigasi.

### 4.2. Kuis Interaktif

Kuis interaktif membantu siswa menguji pemahaman melalui pertanyaan yang sesuai dengan bidang pembelajaran.

Konsep fitur:
- Pertanyaan dengan antarmuka yang mudah dipahami.
- Pilihan jawaban yang jelas.
- Umpan balik setelah siswa menjawab.
- Perhitungan skor berdasarkan aturan kuis.
- Integrasi progres dan penghargaan apabila didukung oleh sistem yang tersedia.

Kuis harus dirancang agar mudah digunakan oleh siswa kelas 1–6 dengan tingkat kesulitan dan materi yang sesuai.

### 4.3. Game Edukasi

Game edukasi menyediakan aktivitas belajar berbasis permainan untuk membantu siswa memahami materi melalui interaksi.

Prinsip pengembangan:
- Mekanisme permainan harus memiliki tujuan pembelajaran yang jelas.
- Instruksi harus sederhana dan mudah dipahami.
- Interaksi harus responsif.
- Permainan harus dapat digunakan dengan mouse maupun layar sentuh sesuai kebutuhan.
- Hasil permainan tidak boleh memberikan penghargaan ganda akibat pengulangan atau kesalahan logika.

### 4.4. Sistem Bintang dan XP

Sistem reward memberikan penghargaan atas aktivitas belajar siswa.

- **Bintang:** penghargaan atas pencapaian aktivitas.
- **XP:** akumulasi pengalaman belajar.
- **Progres:** menunjukkan perkembangan aktivitas siswa.

Ketentuan:
- Nilai reward harus berasal dari sumber data yang benar.
- Perolehan bintang dan XP harus mengikuti aturan aktivitas.
- Refresh halaman tidak boleh menyebabkan reward bertambah tanpa aktivitas yang sah.
- Hindari penghitungan reward ganda.
- Tampilkan perubahan progres secara jelas kepada pengguna.

Jika penyimpanan permanen belum tersedia, jelaskan keterbatasannya dan jangan mengklaim data telah tersimpan di server.

### 4.5. Lencana Penghargaan

Lencana digunakan untuk menandai pencapaian tertentu, misalnya penyelesaian tantangan atau keberhasilan dalam aktivitas belajar.

Lencana harus memiliki:
- Nama pencapaian yang jelas.
- Desain yang konsisten dengan ilustrasi EduKids.
- Kondisi perolehan yang terdefinisi.
- Status terkunci atau terbuka jika didukung oleh sistem.
- Integrasi dengan data progres siswa.

Jangan menampilkan lencana sebagai pencapaian yang sudah diperoleh apabila persyaratannya belum terpenuhi.

### 4.6. Papan Peringkat

Papan peringkat digunakan untuk menyajikan perbandingan progres siswa berdasarkan aturan penilaian yang transparan.

Ketentuan:
- Urutan peringkat harus dihitung berdasarkan data yang tersedia.
- Jangan membuat nama siswa atau nilai fiktif seolah-olah berasal dari pengguna nyata.
- Jika hanya tersedia data demo, tampilkan keterangan yang jelas.
- Pertimbangkan privasi siswa dalam menampilkan informasi akun.
- Pastikan peringkat diperbarui sesuai mekanisme penyimpanan data.

### 4.7. Profil Pengguna

Profil menjadi pusat informasi identitas dan aktivitas siswa.

Elemen yang dapat ditampilkan sesuai ketersediaan data:
- Nama pengguna.
- Kelas siswa.
- Avatar atau maskot.
- Jumlah bintang dan XP.
- Progres belajar.
- Lencana yang diperoleh.
- Pengaturan akun.
- Tombol keluar.

Dropdown profil harus mudah digunakan, responsif, dan memiliki navigasi keyboard yang baik.

### 4.8. Tantangan Harian

Tantangan harian memberikan aktivitas belajar tambahan dengan tujuan dan aturan yang jelas.

Informasi tantangan dapat mencakup:
- Nama tantangan.
- Deskripsi aktivitas.
- Jumlah soal atau target.
- Perkiraan durasi.
- Reward yang bisa diperoleh.
- Status aktivitas.

Tantangan harus terhubung dengan logika aktivitas yang sebenarnya. Jangan mengklaim tantangan selesai atau memberikan reward sebelum kondisi penyelesaiannya terpenuhi.

## 5. Konsep Desain dan Identitas Visual

EduKids menggunakan pendekatan visual **playful educational adventure**: ceria seperti buku cerita anak, tetapi tetap rapi dan profesional seperti produk digital modern.

### Palet warna

- Primary Blue: `#2875B8`
- Dark Blue: `#205784`
- Soft Blue: `#E8F3FF`
- Warm Background: `#FFF9EF`
- Main Text: `#344256`
- Secondary Text: `#718096`
- Border: `#E8E2D8`
- Star Yellow: `#FFC857`

Warna dapat disesuaikan jika sistem desain proyek sudah memiliki token yang lebih lengkap. Pertahankan konsistensi antarhalaman.

### Tipografi

- Nunito untuk teks antarmuka dan navigasi.
- Fredoka untuk judul atau elemen pendek yang membutuhkan karakter lebih ekspresif, jika sudah tersedia.

### Karakter dan ilustrasi

EduKids menggunakan karakter hewan sebagai sahabat petualangan, antara lain:
- Kiko
- Mimi
- Luna
- Bubu
- Piko

Pertahankan identitas visual karakter yang sudah digunakan. Jangan mengganti karakter secara acak atau mencampurkan aset yang memiliki gaya ilustrasi berbeda.

### Prinsip visual

- Hierarki informasi jelas.
- Ruang kosong cukup.
- Bentuk membulat digunakan secara konsisten.
- Ikon berasal dari sistem ikon yang seragam.
- Bayangan digunakan secara halus dan masuk akal.
- Hindari gradient, efek glow, glassmorphism, dekorasi, dan animasi yang berlebihan.
- Jangan menggunakan ilustrasi buram atau gambar berkualitas rendah.
- Hindari tampilan yang menyerupai template generik.

## 6. Animasi dan Interaksi

Animasi digunakan untuk meningkatkan keterlibatan siswa, bukan sekadar hiasan.

Animasi yang sesuai:
- Awan bergerak perlahan.
- Pohon atau daun bergoyang lembut.
- Maskot memiliki idle animation.
- Tombol memberikan umpan balik saat hover dan ditekan.
- Kartu tantangan muncul dengan transisi ringan.
- Bintang berkilau sesekali.
- Progres belajar berubah dengan transisi yang halus.

Ketentuan:
- Gunakan animasi secukupnya.
- Hindari gerakan berlebihan dan elemen yang terus berkedip.
- Jangan sampai animasi menutupi teks atau mengganggu navigasi.
- Hormati preferensi `prefers-reduced-motion`.
- Pertimbangkan performa perangkat siswa.

## 7. Teknologi dan Arsitektur

### Teknologi utama

- React JS sebagai library antarmuka.
- JavaScript sebagai bahasa pengembangan.
- CSS atau sistem styling yang sudah digunakan proyek.
- React Router jika sudah digunakan untuk navigasi.
- Lucide React jika tersedia untuk ikon.
- Backend atau layanan penyimpanan yang sudah terintegrasi dengan proyek, apabila ada.

**Penting:** daftar di atas menjelaskan teknologi yang direncanakan atau relevan untuk proyek. Periksa `package.json`, source code, dan konfigurasi aktual sebelum menambah dependency atau mengklaim bahwa suatu layanan telah aktif.

### Prinsip arsitektur

- Gunakan komponen modular dan dapat digunakan kembali.
- Pisahkan logika bisnis dari tampilan bila sesuai.
- Gunakan satu sumber data yang konsisten untuk progres siswa.
- Hindari duplikasi komponen dan aturan styling.
- Pertahankan struktur folder yang sudah berjalan.
- Jangan memindahkan seluruh proyek ke arsitektur baru tanpa alasan teknis yang kuat.

## 8. Aturan Penting untuk AI Coding Assistant

README ini juga menjadi pedoman saat AI coding assistant membantu mengembangkan EduKids.

AI harus memperlakukan EduKids sebagai proyek yang sudah memiliki identitas dan keputusan desain sendiri, bukan sebagai proyek baru yang bebas diganti.

### Sebelum mengubah kode

1. Periksa struktur folder proyek.
2. Baca `package.json` dan konfigurasi yang relevan.
3. Cari komponen yang benar-benar digunakan oleh halaman.
4. Periksa aset, routing, state, autentikasi, dan integrasi data.
5. Pahami fungsi yang sudah tersedia sebelum menambahkan fitur.

### Saat mengimplementasikan perubahan

- Modifikasi kode proyek yang sebenarnya.
- Pertahankan fitur yang sudah berfungsi.
- Gunakan kembali komponen dan aset yang tersedia.
- Jangan membuat halaman demo terpisah untuk menggantikan halaman produksi.
- Jangan mengganti data dinamis dengan data statis.
- Jangan membuat tombol dekoratif tanpa fungsi.
- Jangan mengarang API, route, atau hasil integrasi.
- Jangan menghapus kode yang tidak terkait dengan tugas.
- Jangan memasang dependency baru jika kebutuhan dapat dipenuhi dengan teknologi yang sudah ada.
- Jangan mengubah seluruh desain website saat tugas hanya menyangkut satu komponen.
- Jangan menyatakan pekerjaan selesai sebelum perubahan benar-benar diterapkan.

### Setelah perubahan

1. Jalankan aplikasi.
2. Periksa error pada console dan terminal.
3. Uji fungsi yang berubah.
4. Periksa desktop, tablet, dan mobile.
5. Pastikan tidak ada horizontal overflow.
6. Pastikan data progres dan reward tetap konsisten.
7. Laporkan file yang diubah, fitur yang diuji, dan masalah yang belum terselesaikan.

Jika informasi proyek belum diketahui, periksa kode terlebih dahulu. Jangan membuat asumsi tentang struktur atau teknologi yang belum terverifikasi.

## 9. Prinsip Kualitas Proyek

EduKids harus dikembangkan dengan standar berikut:

**Fungsionalitas**
- Navigasi mengarah ke halaman yang benar.
- Tombol menjalankan tindakan sesuai label.
- Perhitungan skor dan reward konsisten.
- Status progres sesuai dengan aktivitas siswa.

**Pengalaman pengguna**
- Mudah digunakan siswa SD.
- Teks terbaca dengan jelas.
- Instruksi sederhana dan tidak membingungkan.
- Interaksi memiliki umpan balik yang tepat.

**Kualitas visual**
- Komposisi konsisten.
- Ilustrasi tajam.
- Animasi halus.
- Tidak ada elemen yang bertabrakan atau terpotong.
- Seluruh halaman terasa bagian dari satu produk.

**Kualitas teknis**
- Tidak menimbulkan error baru.
- Komponen dapat dipelihara.
- Tampilan responsif.
- Performa tetap baik.
- Aksesibilitas dasar diperhatikan.

## 10. Status Pengembangan

Status fitur harus diperbarui sesuai kondisi implementasi aktual.

Jangan menandai fitur sebagai selesai hanya karena desainnya sudah terlihat. Fitur baru dinyatakan selesai setelah fungsi, data, dan interaksinya diuji.

Contoh status:
- Perencanaan
- Dalam pengembangan
- Implementasi selesai
- Pengujian
- Selesai dan terverifikasi

## 11. Visi EduKids

EduKids bertujuan menjadi lingkungan belajar digital yang menggabungkan materi edukasi, eksplorasi, permainan, dan penghargaan dalam pengalaman yang menyenangkan bagi siswa Sekolah Dasar.

Setiap halaman, karakter, animasi, dan fitur harus memperkuat satu tujuan yang sama: membantu anak belajar sambil bermain dalam dunia EduKids yang konsisten, interaktif, dan mudah digunakan.

**EduKids — Main, Belajar, Raih Bintang!**