# EDUKIDS MAP REDESIGN — ANIMATED ANIMAL PLAYER & POLISHED ADVENTURE WORLD

Bertindaklah sebagai Senior React JS Developer, 2D Game UI Designer, dan Character Animator. Perbaiki peta petualangan EduKids yang sedang digunakan dalam proyek.

**Tujuan utama:** mengganti ikon bintang besar di atas lokasi Desa Angka dengan karakter hewan EduKids yang digunakan pada profil pengguna. Karakter tersebut harus berupa satu tubuh utuh dengan kepala, badan, dua tangan, dan dua kaki, serta mampu berjalan dan melakukan animasi idle secara natural.

Jangan hanya mengubah screenshot atau membuat mockup. Terapkan perubahan pada komponen dan aset yang benar-benar digunakan oleh website React JS EduKids.

## 1. GANTI BINTANG DENGAN KARAKTER PEMAIN

Pada screenshot, terdapat ikon bintang berwarna kuning di atas bangunan Desa Angka. Ganti ikon tersebut dengan karakter hewan yang sama dengan maskot profil pengguna.

Ketentuan karakter:
- Gunakan aset maskot yang sudah tersedia di proyek.
- Pertahankan spesies, warna, wajah, telinga, dan ciri khas karakter profil.
- Tampilkan karakter secara utuh: kepala, badan, tangan kiri dan kanan, serta kaki kiri dan kanan.
- Karakter harus memiliki proporsi tubuh yang konsisten, bukan sekadar kepala atau stiker maskot.
- Jangan menggunakan emoji sebagai karakter utama.
- Jangan mengganti karakter dengan ilustrasi acak yang berbeda dari profil.
- Pastikan karakter memiliki resolusi tajam dan transparansi yang benar.
- Ukuran karakter harus proporsional terhadap bangunan dan jalur peta.

Bintang boleh tetap digunakan sebagai indikator reward kecil di dekat lokasi jika memang diperlukan, tetapi tidak boleh lagi menggantikan karakter pemain.

## 2. BUAT ANIMASI KARAKTER SEPERTI GAME 2D

Karakter harus terasa seperti pemain yang sedang menjelajahi dunia EduKids.

### Idle animation
Ketika tidak bergerak:
- Karakter berdiri di atas jalan dengan posisi kaki yang wajar.
- Badan bergerak naik-turun sangat halus.
- Kepala dan telinga dapat bergerak sedikit.
- Karakter memiliki bayangan kontak kecil di bawah kaki.
- Hindari gerakan berlebihan atau gerakan melayang.

### Walking animation
Ketika pemain berpindah lokasi:
- Kedua kaki bergerak bergantian.
- Tangan bergerak berlawanan dengan kaki secara natural.
- Badan memiliki sedikit gerakan mengikuti langkah.
- Karakter menghadap arah perjalanan.
- Pergerakan mengikuti jalur yang benar-benar menghubungkan lokasi peta.
- Kecepatan berjalan konsisten dan tidak teleportasi.
- Karakter berhenti tepat di dekat lokasi tujuan.

### Interaksi lokasi
- Ketika mencapai Desa Angka, karakter berhenti di dekat bangunan.
- Karakter dapat memberikan respons ringan saat lokasi dipilih.
- Jangan menutupi label lokasi atau indikator reward.
- Jika terdapat animasi sukses, gunakan efek singkat yang tidak mengganggu.

PENTING: animasi berjalan harus benar-benar mengubah pose kaki dan tangan. Jangan hanya menggerakkan seluruh gambar ke atas-bawah untuk menyebutnya animasi berjalan.

## 3. IMPLEMENTASI ANIMASI YANG BENAR

Periksa format aset maskot yang tersedia.

Jika tersedia sprite sheet atau beberapa pose karakter:
- Gunakan frame berjalan yang sesuai.
- Pastikan ukuran setiap frame konsisten.
- Periksa transparansi dan area kosong pada frame.
- Sinkronkan frame dengan kecepatan pergerakan karakter.

Jika hanya tersedia satu gambar statis:
- Cari aset karakter atau bagian tubuh yang sudah ada dalam proyek.
- Jika karakter tersusun dari elemen terpisah, gunakan animasi skeletal atau transformasi per bagian secara hati-hati.
- Jika tidak ada aset animasi yang memadai, buat atau integrasikan aset sprite animasi yang konsisten dengan maskot profil.
- Jangan mengklaim animasi berjalan sudah selesai apabila yang tersedia hanya satu gambar yang bergerak.

Jangan menambahkan library animasi besar jika CSS atau teknologi yang sudah ada cukup untuk kebutuhan tersebut.

## 4. RAPikan PETA DESA ANGKA

Pertahankan konsep dunia petualangan EduKids, tetapi perbaiki kualitas visual peta.

### Jalan
- Rapikan sambungan jalan pada persimpangan.
- Hindari jalur yang terlihat bertabrakan, terpotong, atau menembus bangunan.
- Gunakan ketebalan, warna tepi, dan tekstur jalan yang konsisten.
- Pastikan karakter dapat bergerak mengikuti jalur yang terlihat.
- Hindari garis dekoratif yang tidak memiliki fungsi.

### Pepohonan dan lingkungan
- Rapikan bentuk pohon dan bayangannya.
- Samakan gaya ilustrasi seluruh pohon.
- Hindari objek yang terlihat seperti lingkaran hijau acak.
- Tambahkan detail lingkungan secukupnya, seperti rumput, semak, batu kecil, dan bunga.
- Gunakan variasi yang terkontrol agar lingkungan terasa alami.

### Bangunan Desa Angka
- Pertahankan identitas bangunan yang sudah ada.
- Rapikan garis, atap, pintu, jendela, dan bayangan.
- Pastikan bangunan memiliki pijakan yang jelas pada tanah.
- Jangan menumpuk ikon reward dan karakter pada titik yang sama.
- Pertahankan label “Desa Angka” dan “Matematika” agar tetap terbaca.

### Warna dan tekstur
- Gunakan hijau lingkungan yang harmonis dan tidak terlalu neon.
- Pertahankan jalan berwarna krem dengan tepi yang konsisten.
- Gunakan bayangan lembut yang mengikuti arah pencahayaan.
- Hindari gradient berlebihan, outline yang terlalu tebal, dan efek glow.
- Hindari detail acak yang hanya membuat peta terlihat ramai.

## 5. HILANGKAN KESAN TEMPLATE AI

Peta harus memiliki desain yang konsisten dan terasa sengaja dirancang sebagai satu dunia permainan.

Jangan:
- Menempelkan ikon yang tidak cocok dengan gaya ilustrasi.
- Menggunakan aset dengan outline dan perspektif yang berbeda-beda.
- Mengulang pohon identik terlalu rapat.
- Menempatkan dekorasi hanya untuk mengisi ruang kosong.
- Membuat bayangan acak atau objek melayang.
- Menambahkan efek visual tanpa fungsi.
- Mengubah semua warna secara acak.
- Mengganti seluruh peta dengan desain generik baru.

Utamakan komposisi yang bersih, jalur yang logis, detail yang terkontrol, dan aset yang konsisten.

## 6. INTEGRASI DENGAN REACT JS

Sebelum mengubah kode:
1. Temukan komponen peta yang benar-benar digunakan.
2. Temukan komponen avatar profil dan sumber aset maskotnya.
3. Periksa struktur rendering lokasi dan jalur.
4. Periksa sistem koordinat, ukuran container, serta aturan CSS yang sudah ada.
5. Pastikan apakah proyek memakai SVG, CSS, Canvas, sprite sheet, atau kombinasi beberapa teknologi.

Implementasi harus:
- Menggunakan kembali identitas maskot profil.
- Menjaga posisi karakter relatif terhadap peta.
- Mendukung perubahan ukuran layar.
- Tidak merusak navigasi lokasi.
- Tidak mengubah sistem reward, progres, autentikasi, dan routing yang tidak terkait.
- Menghindari duplikasi karakter akibat komponen yang dirender berulang.
- Menjaga aksesibilitas dan mendukung preferensi pengurangan gerakan.

Jika posisi karakter mengikuti jalur, gunakan sistem koordinat yang konsisten agar posisi karakter tidak bergeser ketika container berubah ukuran.

## 7. PENGUJIAN WAJIB

Setelah implementasi:
- Pastikan bintang besar di atas Desa Angka sudah diganti dengan maskot pemain.
- Pastikan seluruh tubuh karakter terlihat.
- Pastikan karakter tidak menumpuk dengan bangunan atau label.
- Uji idle animation.
- Uji walking animation dan perpindahan lokasi.
- Pastikan karakter berhenti pada tujuan yang benar.
- Uji desktop, tablet, dan mobile.
- Pastikan tidak ada karakter duplikat, gambar pecah, atau horizontal scrolling.
- Periksa console browser dan terminal untuk error.

Laporkan file yang diubah, aset yang digunakan, penyebab masalah sebelumnya, dan hasil pengujian.

## HASIL AKHIR YANG DIINGINKAN

Peta EduKids harus terasa seperti game petualangan edukasi 2D yang benar-benar memiliki karakter pemain. Maskot profil menjadi tokoh utama yang berjalan di jalur peta, memiliki tubuh lengkap dan gerakan kaki serta tangan yang natural.

Desa Angka tetap mudah dikenali, lingkungan terlihat rapi, dan semua elemen memiliki gaya ilustrasi yang konsisten. Jangan berhenti pada perubahan tampilan statis; implementasikan karakter dan animasi pada website yang sebenarnya.