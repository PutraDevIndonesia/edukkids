# EDUKIDS — IMMERSIVE BACKGROUND INTEGRATION & 2D WORLD REDESIGN

Bertindaklah sebagai Senior 2D Game Environment Artist, Professional UI/UX Designer, Motion Designer, dan React Frontend Engineer.

Saya sedang mengembangkan website EduKids, platform belajar sambil bermain untuk siswa SD kelas 1–6. Perbaiki background ilustrasi pada hero section yang menampilkan gerbang EduKids, jalan petualangan, perbukitan, pepohonan, awan, serta maskot hewan.

**Masalah utama:** ilustrasi saat ini terlihat seperti kumpulan gambar yang ditempel di atas background. Elemen langit, bukit, jalan, gerbang, dan karakter belum menyatu secara alami. Komposisinya terasa datar, kurang hidup, dan belum mencapai kualitas ilustrasi dunia game edukasi profesional.

Saya tidak ingin sekadar menambahkan animasi pada desain lama. Saya ingin memperbaiki integrasi visualnya agar terasa seperti satu dunia petualangan 2D yang dirancang secara utuh.

## 1. PERTAHANKAN IDENTITAS EDUKIDS

Pertahankan:
- Identitas brand EduKids.
- Gerbang utama dengan tulisan EDUKIDS.
- Maskot kelinci, kucing, dan beruang yang sudah digunakan.
- Tema dunia belajar dan petualangan anak.
- Palet warna biru, hijau, krem, dan kuning yang hangat.
- Gaya ilustrasi 2D yang ramah anak.

Jangan mengganti karakter dengan ilustrasi acak atau membuat desain baru yang tidak konsisten dengan halaman lainnya.

## 2. BANGUN ULANG KOMPOSISI BACKGROUND

Susun seluruh ilustrasi sebagai satu lingkungan yang saling terhubung, bukan kumpulan objek yang berdiri sendiri.

### Lapisan langit
- Gunakan gradasi warna langit yang sangat lembut dan natural.
- Tambahkan awan 2D dengan bentuk dan gaya ilustrasi yang konsisten.
- Tempatkan matahari secara halus jika sesuai dengan komposisi.
- Tambahkan variasi kedalaman melalui ukuran, posisi, dan warna awan.
- Hindari lingkaran dekoratif transparan besar yang terlihat seperti bentuk abstrak tanpa konteks.

### Lapisan lingkungan
- Buat perbukitan berlapis dengan perbedaan warna dan nilai terang-gelap.
- Hubungkan bentuk bukit dengan permukaan rumput tanpa batas potongan yang terasa kaku.
- Gunakan detail lingkungan secukupnya, seperti semak, bunga kecil, dan pepohonan.
- Variasikan ukuran pepohonan untuk memberi kesan jarak.
- Pastikan elemen dekoratif mengikuti perspektif dan arah lingkungan.

### Lapisan tanah dan jalan
- Jalan petualangan harus terlihat benar-benar berada di atas tanah.
- Hubungkan jalan dengan area depan gerbang secara natural.
- Gunakan tepian jalan yang konsisten, tekstur ilustratif lembut, dan bayangan kontak yang ringan.
- Pastikan jalan tidak terlihat seperti segitiga atau bidang datar yang ditempel di atas rumput.
- Tambahkan sedikit variasi warna tanah dan detail halus agar jalan lebih meyakinkan.

### Gerbang EduKids
- Jadikan gerbang sebagai pusat perhatian.
- Integrasikan kaki gerbang dengan tanah menggunakan bayangan kontak yang konsisten.
- Tambahkan volume melalui highlight dan bayangan 2D yang lembut.
- Pastikan papan EDUKIDS mengikuti perspektif gerbang.
- Hubungkan gerbang dengan jalan dan lingkungan sekitarnya.
- Hindari outline terlalu tebal atau bayangan yang berbeda-beda antarobjek.

## 3. SATUKAN MASKOT DENGAN LINGKUNGAN

Karakter kelinci, kucing, dan beruang saat ini terlihat seperti stiker yang ditempel di atas background.

Perbaiki dengan:
- Menyamakan arah cahaya pada semua karakter dan lingkungan.
- Menambahkan bayangan kontak yang lembut tepat di bawah kaki.
- Memastikan karakter berdiri pada bidang tanah yang sama.
- Menyesuaikan ukuran karakter terhadap gerbang, jalan, dan pepohonan.
- Menyelaraskan ketebalan outline, saturasi warna, dan tingkat detail.
- Menambahkan sedikit interaksi dengan lingkungan jika cocok, seperti karakter berdiri di jalan atau berada di dekat gerbang.

Jangan mengubah identitas wajah, warna, atau bentuk maskot yang sudah dikenal pengguna.

Karakter harus terlihat sebagai bagian dari dunia yang sama, bukan gambar dengan gaya ilustrasi berbeda.

## 4. TAMBAHKAN KEDALAMAN VISUAL

Gunakan teknik ilustrasi lingkungan 2D:
- Foreground, middle ground, dan background yang jelas.
- Perbedaan ukuran objek berdasarkan jarak.
- Variasi saturasi dan kontras untuk membedakan kedalaman.
- Bayangan lembut yang konsisten.
- Overlap objek secara natural.
- Detail kecil yang terintegrasi dengan bentuk lingkungan.

Jangan menggunakan efek blur secara berlebihan untuk menciptakan kedalaman. Jangan membuat background buram atau menurunkan kualitas gambar.

Hasil akhir harus tajam, bersih, memiliki hierarki visual yang jelas, dan nyaman dilihat anak-anak.

## 5. TAMBAHKAN ANIMASI LINGKUNGAN YANG NATURAL

Setelah komposisi visual diperbaiki, tambahkan animasi 2D ringan agar dunia terasa hidup.

Contoh:
- Awan bergerak perlahan melintasi langit.
- Daun atau pucuk pohon bergoyang lembut.
- Rumput bergerak sangat ringan seperti tertiup angin.
- Burung kecil melintas sesekali di area langit.
- Bunga atau kupu-kupu bergerak terbatas di sekitar lingkungan.
- Maskot melakukan idle animation yang lembut jika asetnya mendukung.
- Bintang pada gerbang berkilau sesekali dengan intensitas rendah.

Ketentuan:
- Animasi harus memiliki kecepatan dan arah yang konsisten.
- Jangan menggerakkan seluruh elemen secara bersamaan.
- Hindari gerakan acak yang membuat lingkungan terasa tidak stabil.
- Jangan membuat maskot, gerbang, dan jalan bergoyang tanpa alasan.
- Pastikan dekorasi tidak menutupi judul, tombol, atau informasi penting.
- Gunakan animasi berbasis CSS, SVG, atau aset animasi yang sesuai.
- Hormati preferensi `prefers-reduced-motion`.

## 6. PERBAIKI KOMPOSISI RESPONSIVE

Pastikan ilustrasi tetap menyatu pada desktop, tablet, dan smartphone.

- Pertahankan rasio dan proporsi karakter.
- Hindari gerbang terpotong secara tidak sengaja.
- Pastikan maskot tidak bertumpuk dengan label atau tombol.
- Jangan membuat jalan berubah menjadi bentuk yang aneh ketika layar mengecil.
- Atur ulang komposisi untuk layar mobile jika diperlukan, bukan sekadar mengecilkan semua objek.
- Pastikan tidak ada horizontal scrolling.
- Pertahankan teks dan kontrol HTML sebagai elemen yang mudah dibaca dan diakses.

## 7. IMPLEMENTASI PADA PROYEK REACT JS

Sebelum mengubah kode:
1. Cari komponen hero section yang menampilkan ilustrasi tersebut.
2. Periksa apakah ilustrasi dibuat dengan SVG, CSS, gambar raster, atau kombinasi beberapa elemen.
3. Periksa aset karakter dan background yang sudah tersedia.
4. Identifikasi elemen mana yang menyebabkan tampilan seperti kolase.
5. Pilih metode perbaikan yang paling sesuai dengan struktur proyek.

Jika background menggunakan SVG, rapikan susunan layer, bentuk, path, dan konsistensi gaya visualnya.

Jika menggunakan gambar terpisah, perbaiki ukuran, posisi, bayangan, perspektif, dan integrasinya.

Jika menggunakan ilustrasi raster berkualitas rendah, gunakan aset sumber yang lebih tajam jika tersedia. Jangan sekadar memperbesar gambar yang buram.

Jangan membuat ulang seluruh website. Fokus pada background hero section dan komponen visual yang memang diperlukan.

Jangan menghapus fungsi tombol, routing, sistem reward, atau data profil.

## 8. KRITERIA HASIL AKHIR

Background harus:
- Terlihat sebagai satu dunia petualangan 2D yang utuh.
- Memiliki komposisi yang seimbang dan fokus visual yang jelas.
- Memiliki pencahayaan, bayangan, perspektif, dan outline yang konsisten.
- Membuat maskot menyatu dengan lingkungan.
- Memiliki animasi yang lembut dan bermakna.
- Tetap ceria, ramah anak, dan profesional.
- Tajam pada berbagai ukuran layar.
- Tidak terlihat seperti template generik atau kumpulan clip-art yang ditempel.

**Instruksi terpenting:** jangan hanya mengubah warna, menambahkan gradient, atau memasang animasi pada objek lama. Benahi komposisi dan integrasi visual terlebih dahulu, lalu tambahkan motion design. Implementasikan langsung pada kode yang benar-benar digunakan dan laporkan file yang diubah serta hasil pengujiannya.

**Art direction reference:** Bayangkan ilustrasi peta dan lingkungan dalam buku cerita anak berkualitas tinggi yang dipadukan dengan dunia game petualangan 2D. Setiap objek harus terasa digambar untuk lingkungan yang sama, dengan pencahayaan, perspektif, outline, dan palet warna yang konsisten. Prioritaskan komposisi artistik dan integrasi lingkungan dibandingkan jumlah dekorasi. Jangan mempertahankan komposisi lama jika komposisi tersebut menjadi penyebab utama background terlihat seperti kolase.