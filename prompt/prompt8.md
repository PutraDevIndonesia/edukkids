# MASTER PROMPT — EDUKIDS FULL WEBSITE ANIMATION & MICRO-INTERACTION REDESIGN

Bertindaklah sebagai Senior Frontend Engineer, Motion Designer, 2D Game UI Designer, dan Child-Friendly UX Specialist.

Saya sedang mengembangkan EduKids, sebuah website belajar sambil bermain untuk siswa Sekolah Dasar kelas 1–6. Website ini menggunakan React JS dan memiliki fitur peta petualangan, kuis interaktif, game edukasi, sistem poin, lencana penghargaan, papan peringkat, profil siswa, serta progres belajar.

Tugasmu adalah meningkatkan seluruh pengalaman visual website melalui animasi 2D, karakter hewan, transisi halaman, micro-interaction, dan feedback visual yang menyenangkan.

**PENTING: Terapkan animasi ke seluruh halaman dan komponen yang relevan, bukan hanya halaman Beranda atau Peta Petualangan. Audit proyek yang sudah ada sebelum melakukan implementasi. Pertahankan semua fitur dan data yang telah berjalan.**

Tujuan akhirnya adalah membuat EduKids terasa seperti dunia game edukasi interaktif yang hidup, menyenangkan, berkualitas tinggi, dan tetap nyaman digunakan untuk belajar.

## 1. ARAH VISUAL DAN MOTION DESIGN

Gunakan konsep:

**“A Living Storybook — Explore, Learn, Play, and Celebrate!”**

Karakter visual:
- Ilustrasi hewan 2D yang lucu, ekspresif, dan konsisten.
- Animasi lembut yang membuat dunia terasa hidup.
- Transisi yang halus dan tidak mengganggu konsentrasi.
- Gerakan yang memiliki tujuan, bukan animasi dekoratif tanpa fungsi.
- Gaya ilustrasi sesuai dengan dunia petualangan EduKids.
- Perpaduan antara website pendidikan profesional dan game petualangan 2D.

Gunakan karakter maskot EduKids yang sudah ada jika tersedia:
- Kiko — kelinci.
- Mimi — kucing.
- Luna — burung hantu.
- Bubu — beruang.
- Piko — rubah.

Jangan mengganti desain karakter secara sembarangan. Pertahankan identitas, proporsi, warna, dan gaya ilustrasi maskot di seluruh halaman.

Hindari tampilan yang terlalu ramai, animasi berlebihan, efek neon, serta penggunaan emoji sebagai pengganti ilustrasi karakter.

## 2. ANIMASI KARAKTER HEWAN 2D

Tambahkan karakter hewan 2D yang terasa hidup pada area yang sesuai.

Gerakan yang diperbolehkan:
- Idle animation berupa gerakan naik-turun yang sangat halus.
- Kedipan mata berkala.
- Telinga atau ekor yang bergerak ringan jika ilustrasinya mendukung.
- Gerakan melompat kecil ketika pengguna menyelesaikan aktivitas.
- Gerakan berjalan pendek pada area petualangan.
- Lambaian atau ekspresi menyambut pada halaman tertentu.
- Reaksi senang saat mendapatkan bintang atau lencana.

Karakter harus tampak seperti ilustrasi game 2D, bukan foto hewan atau model 3D yang tidak cocok dengan tema.

Jika tersedia aset GIF atau sprite sheet berkualitas, gunakan aset tersebut. Jika tidak, gunakan ilustrasi 2D dan animasi CSS yang sesuai dengan struktur gambar. Jangan mengklaim animasi mata, kaki, atau ekor berfungsi jika asetnya tidak mendukung gerakan tersebut.

Hindari membuat seluruh maskot bergerak bersamaan. Gunakan beberapa karakter pada titik yang relevan agar tampilan tetap rapi.

## 3. HALAMAN BERANDA

Buat halaman Beranda terasa seperti pintu masuk ke dunia petualangan EduKids.

Implementasikan:
- Hero section dengan animasi masuk yang lembut.
- Maskot hewan yang menyambut pengguna.
- Awan yang bergerak sangat perlahan jika sesuai dengan ilustrasi.
- Bintang kecil yang berkilau secara terbatas.
- Tombol utama dengan hover, pressed, dan focus state yang jelas.
- Kartu aktivitas yang muncul dengan staggered entrance animation.
- Ilustrasi yang bereaksi secara halus saat diarahkan dengan pointer.
- Ringkasan progres dengan angka yang diperbarui berdasarkan data sebenarnya.

Ketika tombol “Mulai Bermain” ditekan, tampilkan feedback visual singkat sebelum atau saat navigasi sesuai kebutuhan, tanpa menunda pengguna secara tidak perlu.

Jangan membuat semua teks dan kartu terbang dari berbagai arah. Gunakan animasi masuk sederhana, konsisten, dan cepat.

## 4. HALAMAN PETA PETUALANGAN

Terapkan animasi pada dunia petualangan yang sudah ada.

Contoh:
- Pepohonan bergerak sangat ringan seperti tertiup angin.
- Awan melintas perlahan pada area langit.
- Kupu-kupu bergerak di sekitar taman.
- Burung terbang melintasi area tertentu sesekali.
- Air memiliki gerakan ringan jika terdapat sungai atau laut.
- Bendera kastel bergerak halus.
- Landmark memberikan reaksi saat dipilih.
- Jalur menuju lokasi aktif mendapatkan highlight halus.
- Maskot dapat muncul di dekat lokasi tertentu dengan animasi menyambut.
- Lokasi yang telah selesai memiliki indikator bintang atau lencana yang tampil dengan animasi singkat.

Saat pengguna memilih lokasi:
1. Berikan feedback visual pada landmark.
2. Tampilkan status dan informasi lokasi.
3. Sediakan tombol untuk mulai belajar.
4. Navigasikan pengguna menggunakan routing yang sudah ada.

Jangan menjalankan animasi jalur terus-menerus dengan efek mencolok. Jangan menutupi label lokasi atau menghalangi klik pada landmark.

## 5. HALAMAN KUIS INTERAKTIF

Buat pengalaman kuis lebih menyenangkan dan komunikatif.

Implementasikan:
- Maskot kecil yang memberikan sambutan sebelum kuis.
- Animasi ringan saat soal baru muncul.
- Pilihan jawaban dengan hover dan pressed state.
- Indikator jawaban terpilih yang jelas.
- Progress bar dengan transisi halus.
- Feedback visual untuk jawaban benar dan salah.
- Animasi bintang singkat ketika pengguna menyelesaikan rangkaian soal.
- Hasil akhir dengan ringkasan skor dan apresiasi.
- Tombol untuk mengulang atau melanjutkan aktivitas.

Jawaban benar boleh mendapatkan efek kilau ringan atau animasi maskot yang senang. Jawaban salah harus memberikan petunjuk yang ramah dan tidak mempermalukan pengguna.

Jangan menggunakan layar berkedip, getaran berlebihan, atau efek yang membuat anak merasa dihukum.

Pastikan animasi tidak mengubah logika penilaian, urutan soal, maupun penyimpanan jawaban.

## 6. HALAMAN GAME EDUKASI

Gunakan animasi yang sesuai dengan mekanisme masing-masing permainan.

Contoh:
- Kartu bergerak halus ketika dipilih.
- Objek yang berhasil dipasangkan memberikan feedback positif.
- Objek yang dapat diseret mengikuti pointer secara responsif.
- Item yang terkumpul memiliki animasi singkat.
- Maskot bereaksi terhadap pencapaian.
- Layar selesai menampilkan hasil dan reward.

Animasi harus membantu anak memahami apa yang terjadi. Jangan menambahkan animasi yang memperlambat permainan atau mengganggu kontrol sentuh.

Jangan mengganti game interaktif yang sudah ada dengan simulasi animasi dekoratif.

## 7. SISTEM POIN, XP, BINTANG, DAN REWARD

Buat reward terasa menyenangkan tanpa berlebihan.

Ketika pengguna memperoleh reward:
- Bintang dapat muncul dengan animasi scale dan fade.
- Angka XP dapat diperbarui dengan transisi singkat.
- Lencana baru dapat ditampilkan dalam dialog penghargaan yang rapi.
- Maskot memberikan reaksi gembira.
- Gunakan partikel kecil secara terbatas pada pencapaian khusus.
- Berikan ringkasan reward yang mudah dipahami.

Penting:
- Angka bintang dan XP harus berasal dari data progres sebenarnya.
- Jangan memberikan reward palsu hanya untuk memicu animasi.
- Jangan mengubah sistem penyimpanan reward.
- Jangan memunculkan animasi penghargaan berulang kali setiap halaman dirender.
- Hormati status reward yang sudah pernah diklaim.

## 8. HALAMAN LENCANA PENGHARGAAN

Buat koleksi lencana terasa seperti album pencapaian.

Implementasikan:
- Kartu lencana dengan hover yang lembut.
- Animasi pembukaan detail lencana.
- Efek kilau singkat pada lencana yang baru diperoleh.
- Transisi status terkunci dan terbuka.
- Maskot kecil yang memberikan penjelasan.
- Progress menuju pencapaian berikutnya jika datanya tersedia.

Lencana yang terkunci tetap harus terlihat ramah dan menarik. Jangan membuat pengguna merasa gagal karena belum mendapatkannya.

## 9. HALAMAN PAPAN PERINGKAT

Buat leaderboard mudah dibaca dan terasa seperti kompetisi yang positif.

Implementasikan:
- Kartu peringkat dengan animasi masuk yang sederhana.
- Highlight lembut untuk profil pengguna saat ini.
- Ikon pencapaian untuk peringkat teratas.
- Transisi angka atau posisi hanya ketika data benar-benar berubah.
- Maskot kecil yang memberikan semangat.

Jangan mengacak urutan peringkat demi animasi. Jangan menampilkan data siswa palsu seolah-olah berasal dari database. Hindari efek berlebihan yang mengganggu keterbacaan nama dan skor.

## 10. HALAMAN PROFIL DAN PROGRES BELAJAR

Tambahkan:
- Avatar maskot yang bereaksi ringan.
- Progress bar yang terisi dengan transisi halus.
- Kartu statistik yang muncul dengan animasi sederhana.
- Tab dengan perpindahan yang lembut.
- Feedback yang jelas saat pengaturan disimpan.
- Ilustrasi kecil yang sesuai dengan aktivitas belajar.

Jangan menganimasikan seluruh angka secara dramatis. Informasi kemajuan harus tetap akurat, mudah dipindai, dan mudah dipahami.

## 11. NAVBAR, SIDEBAR, FOOTER, DAN KOMPONEN GLOBAL

Terapkan micro-interaction konsisten di seluruh antarmuka:
- Navbar dengan active state yang halus.
- Dropdown avatar dengan animasi fade dan scale singkat.
- Drawer mobile dengan transisi yang rapi.
- Tombol dengan hover, pressed, disabled, dan focus state.
- Kartu dengan perubahan elevasi yang sangat ringan.
- Tooltip dengan kemunculan singkat.
- Modal dengan transisi masuk dan keluar.
- Notifikasi dengan animasi yang tidak mengganggu.
- Footer dengan dekorasi maskot yang sederhana jika sesuai.

Jangan membuat elemen penting bergoyang terus-menerus hanya agar terlihat hidup.

Pastikan dropdown, drawer, dan modal tetap bisa digunakan dengan keyboard dan teknologi bantu.

## 12. SISTEM TEKNIS ANIMASI REACT

Sebelum implementasi, periksa package.json, komponen, stylesheet, routing, dan aset yang sudah tersedia.

Gunakan library yang sudah ada jika memadai. Jika belum ada, pilih pendekatan yang ringan dan sesuai kebutuhan.

Prioritas:
- CSS keyframes dan transitions untuk animasi sederhana.
- SVG untuk ilustrasi vektor yang membutuhkan animasi terarah.
- Sprite sheet atau GIF berkualitas untuk animasi karakter yang sesuai.
- Framer Motion atau Motion hanya jika manfaatnya jelas dan tidak menimbulkan dependensi yang tidak perlu.

Buat komponen reusable jika memang membantu konsistensi, misalnya:
- `AnimatedMascot`
- `FloatingDecorations`
- `PageTransition`
- `RewardAnimation`
- `AnimatedProgress`
- `CelebrationEffect`

Sesuaikan penamaan dan struktur dengan proyek yang sudah ada. Jangan membuat duplikasi komponen jika fungsinya sudah tersedia.

Pastikan:
- Animasi tidak memicu render berlebihan.
- Event listener dibersihkan dengan benar.
- Timer dan animasi tidak menumpuk setelah berpindah halaman.
- Tidak ada layout shift yang mengganggu.
- Animasi tidak mengubah logika aplikasi.
- Tidak ada horizontal scrolling akibat transformasi.
- Semua interaksi tetap bekerja pada perangkat sentuh.

## 13. PERFORMA DAN AKSESIBILITAS

Website harus tetap ringan dan nyaman digunakan pada perangkat siswa.

Ketentuan:
- Utamakan transform dan opacity untuk animasi CSS.
- Hindari animasi layout mahal secara terus-menerus.
- Batasi jumlah elemen partikel.
- Hindari GIF berukuran besar jika aset alternatif yang lebih ringan tersedia.
- Jangan menjalankan banyak animasi berat secara bersamaan.
- Pastikan konten utama tetap tampil meskipun animasi gagal dimuat.
- Hormati `prefers-reduced-motion`.
- Sediakan alternatif visual statis untuk pengguna yang mengurangi gerakan.
- Jangan mengandalkan warna atau animasi saja untuk menunjukkan jawaban benar, status, atau kesalahan.
- Pastikan fokus keyboard tetap terlihat.
- Jangan membuat animasi yang berkedip cepat.

Pada smartphone, gunakan gerakan yang lebih ringan daripada desktop jika diperlukan.

## 14. ATURAN DESAIN AGAR TIDAK TERLIHAT GENERIK

Jangan:
- Menambahkan animasi yang sama ke semua komponen.
- Membuat setiap kartu melompat ketika diarahkan pointer.
- Menggunakan gradient neon atau glassmorphism secara berlebihan.
- Memasang emoji secara acak di setiap halaman.
- Membuat dekorasi bergerak menutupi teks.
- Menambahkan maskot hanya sebagai tempelan tanpa konteks.
- Mengganti seluruh UI dengan template baru.
- Menghapus atau menyederhanakan fitur yang sudah ada demi animasi.

Setiap halaman harus memiliki animasi yang sesuai dengan konteksnya, tetapi tetap menggunakan sistem gerakan dan ilustrasi yang konsisten.

## 15. URUTAN PENGERJAAN WAJIB

Kerjakan secara sistematis:

1. Audit seluruh route dan halaman EduKids.
2. Identifikasi komponen global dan fitur interaktif yang sudah tersedia.
3. Audit aset maskot dan ilustrasi yang ada.
4. Buat sistem motion design yang konsisten.
5. Implementasikan animasi pada komponen global.
6. Terapkan animasi sesuai fungsi setiap halaman.
7. Integrasikan feedback reward dengan data sebenarnya.
8. Optimalkan animasi untuk desktop, tablet, dan mobile.
9. Uji semua tombol, dropdown, kuis, game, peta, dan navigasi.
10. Jalankan build serta periksa error console.
11. Laporkan file yang diubah dan fitur animasi yang benar-benar selesai.

Jangan hanya membuat rencana, screenshot, atau mockup. Implementasikan animasi langsung di kode proyek yang ada.

## HASIL AKHIR YANG DIHARAPKAN

EduKids harus terasa seperti dunia belajar yang hidup:
- Maskot 2D yang ekspresif.
- Peta yang terasa bergerak secara alami.
- Kuis yang responsif.
- Game yang memberikan feedback jelas.
- Reward yang menyenangkan.
- Transisi halaman yang halus.
- Tombol dan kartu yang interaktif.
- Pengalaman yang konsisten pada seluruh halaman.

**Prioritas utama: animasi harus meningkatkan rasa bermain, membantu pemahaman, dan membuat anak senang menjelajahi website tanpa mengganggu fokus belajar, performa, aksesibilitas, atau fungsi aplikasi yang sudah ada.**