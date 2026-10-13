# EDUKIDS — DYNAMIC DAY & NIGHT WORLD THEME

Perbaiki background ilustrasi utama pada website EduKids agar memiliki suasana dunia 2D yang hidup dan berubah otomatis mengikuti waktu lokal pengguna.

Gunakan gambar utama EduKids yang sudah ada sebagai referensi identitas visual. Pertahankan gerbang EduKids, karakter Kiko, Mimi, Luna, Bubu, Piko, papan petunjuk, jalan setapak, bukit, dan pepohonan. Jangan mengganti seluruh ilustrasi dengan desain baru yang tidak konsisten.

Tujuan utama adalah menciptakan dunia petualangan edukasi yang terasa seperti game 2D ilustrasi profesional untuk anak SD, bukan sekadar mengganti warna background.

## 1. SISTEM WAKTU OTOMATIS

Gunakan waktu lokal perangkat pengguna melalui JavaScript `Date`. Perbarui suasana berdasarkan jam lokal, bukan angka waktu yang di-hardcode.

Bagi suasana menjadi empat periode:

- Pagi: 05.00–09.59
- Siang: 10.00–14.59
- Sore: 15.00–17.59
- Malam: 18.00–04.59

Buat fungsi terpisah, misalnya `getTimeTheme()`, untuk menentukan tema aktif. Terapkan tema secara konsisten ke background, langit, pencahayaan, awan, pepohonan, dan elemen dekoratif.

Jangan mengubah tema secara acak. Jangan mengubah progres, karakter terpilih, bintang, XP, atau data pengguna ketika tema berganti.

## 2. TEMA PAGI — FRESH ADVENTURE

Suasana:
- Langit biru muda dengan gradasi sangat lembut.
- Matahari pagi berwarna kuning hangat di salah satu sisi.
- Awan putih bergerak perlahan.
- Bukit hijau segar dengan pencahayaan hangat.
- Pepohonan dan rerumputan terlihat cerah.
- Tambahkan burung kecil yang sesekali melintas di kejauhan.
- Gerbang EduKids menerima cahaya pagi dengan bayangan yang lembut.

Animasi:
- Awan bergerak horizontal dengan lambat.
- Matahari memiliki glow yang sangat halus.
- Karakter melakukan gerakan idle kecil.
- Hindari terlalu banyak partikel atau ornamen yang mengganggu.

## 3. TEMA SIANG — BRIGHT EXPLORATION

Suasana:
- Langit biru cerah dengan awan putih yang tidak berlebihan.
- Cahaya matahari lebih terang, tetapi tidak menyilaukan.
- Bukit hijau memiliki beberapa variasi warna alami.
- Jalan setapak berwarna krem hangat.
- Pepohonan memiliki bayangan lembut yang konsisten dengan arah cahaya.
- Gerbang, papan petunjuk, dan karakter tetap jelas dan mudah dikenali.

Animasi:
- Awan bergerak perlahan.
- Daun atau pucuk pohon bergerak ringan.
- Karakter melakukan animasi idle yang lembut.
- Gunakan efek cahaya secukupnya, tanpa lens flare atau glow berlebihan.

## 4. TEMA SORE — GOLDEN ADVENTURE

Suasana:
- Langit berubah menjadi biru keemasan, peach, dan jingga lembut.
- Matahari tampak lebih rendah dekat horizon.
- Bukit menerima cahaya keemasan dari satu arah.
- Bayangan pepohonan dan gerbang sedikit lebih panjang.
- Warna jalan setapak menjadi lebih hangat.
- Awan mendapat sentuhan warna sunset yang halus.

Animasi:
- Transisi warna langit berlangsung perlahan.
- Cahaya matahari bergeser secara visual tanpa menggerakkan seluruh layout.
- Karakter tetap memiliki warna asli dan tidak berubah menjadi jingga pekat.
- Jangan menggunakan gradient merah atau ungu yang terlalu kuat.

## 5. TEMA MALAM — MAGICAL NIGHT ADVENTURE

Suasana:
- Langit biru tua dan navy, dengan gradasi malam yang elegan.
- Bulan sabit dan bintang kecil muncul di langit.
- Beberapa bintang berkelip secara perlahan dengan intensitas rendah.
- Bukit berubah menjadi hijau gelap yang tetap memiliki detail.
- Gerbang EduKids mendapatkan cahaya hangat dari lampu kecil.
- Jendela atau lentera dapat memiliki cahaya kuning lembut.
- Awan malam berwarna biru keabu-abuan.
- Jalan setapak masih terlihat jelas agar lokasi dan karakter mudah dikenali.

Animasi:
- Bintang berkelip dengan opacity yang berubah secara halus.
- Awan malam bergerak lambat.
- Lampu gerbang memiliki efek cahaya lembut.
- Karakter tetap terlihat ceria, bukan menyeramkan.
- Gunakan bulan dan bintang sebagai dekorasi kecil, bukan memenuhi seluruh layar.

Jangan membuat malam hanya dengan memberikan `filter: brightness(0.5)` pada seluruh ilustrasi. Buat palet warna malam khusus supaya detail karakter, papan nama, gerbang, dan jalan tetap terbaca.

## 6. TRANSISI ANTARTEMA

Perubahan suasana harus terasa alami.

- Gunakan transisi warna background sekitar 1–2 detik.
- Hindari pergantian tema yang berkedip atau menyebabkan flash putih.
- Jangan menggunakan animasi yang menggeser posisi gerbang, karakter, jalan, atau komponen halaman.
- Gunakan CSS variables atau class tema, misalnya `theme-morning`, `theme-day`, `theme-evening`, dan `theme-night`.
- Pertahankan layout, ukuran ilustrasi, dan responsive behavior.
- Hindari memasang interval pendek yang memperbarui seluruh React component terus-menerus.
- Jika menggunakan timer untuk memperbarui tema, periksa perubahan waktu secara efisien dan bersihkan timer ketika komponen dilepas.

## 7. KUALITAS ILUSTRASI

Pertahankan gaya visual EduKids:
- Ilustrasi 2D bergaya buku cerita anak.
- Bentuk organik dan garis outline yang konsisten.
- Warna hangat dengan kontras yang terkontrol.
- Bayangan sederhana dan pencahayaan yang masuk akal.
- Hindari ikon dekoratif yang terlihat seperti ditempel secara acak.
- Hindari efek neon, glassmorphism, 3D realistis yang tidak sesuai, dan gradient berlebihan.

Jangan mengubah gambar utama menjadi kumpulan elemen yang saling bertabrakan. Semua objek harus berada pada layer yang tepat: langit di belakang, awan dan matahari di atas langit, bukit di latar tengah, kemudian jalan, gerbang, pepohonan, karakter, dan papan petunjuk sesuai kedalaman visualnya.

Jika ilustrasi utama berupa satu gambar raster, jangan menganggap objek di dalamnya dapat dianimasikan secara terpisah. Periksa aset dan struktur proyek terlebih dahulu. Gunakan layer atau aset terpisah yang memang tersedia; jangan menimpa ilustrasi dengan elemen duplikat.

## 8. IMPLEMENTASI REACT

Sebelum mengubah kode:
1. Periksa komponen hero atau background utama EduKids.
2. Periksa sumber gambar, SVG, CSS, dan animasi yang sudah ada.
3. Gunakan kembali aset yang tersedia.
4. Terapkan tema waktu sebagai fitur modular, bukan menulis ulang seluruh halaman.
5. Pertahankan routing, autentikasi, profil, reward, dan sistem pemilihan karakter.

Pastikan implementasi:
- Menggunakan waktu lokal perangkat.
- Tidak membutuhkan API eksternal.
- Tetap berjalan jika pengguna offline.
- Menghormati `prefers-reduced-motion`.
- Tidak menghasilkan hydration mismatch jika proyek menggunakan SSR.
- Tidak menyebabkan horizontal overflow atau error console.

## 9. PENGUJIAN WAJIB

Uji seluruh tema dengan waktu yang dapat disimulasikan dalam pengembangan tanpa mengubah jam sistem pengguna.

Periksa:
- Pagi menampilkan matahari pagi dan langit cerah.
- Siang menampilkan pencahayaan terang dan warna natural.
- Sore menampilkan sunset yang hangat.
- Malam menampilkan bulan, bintang, dan pencahayaan gerbang.
- Tema berubah otomatis ketika melewati batas waktu.
- Seluruh karakter dan teks tetap terbaca.
- Layout desktop dan mobile tidak berubah posisi secara tidak sengaja.

Mode simulasi waktu hanya untuk development atau pengujian. Pada penggunaan normal, tema harus mengikuti waktu lokal perangkat.

HASIL AKHIR: EduKids harus terasa seperti satu dunia petualangan 2D yang hidup dari pagi sampai malam. Perubahan tema harus terlihat jelas, indah, konsisten, dan tidak merusak identitas ilustrasi yang sudah ada.