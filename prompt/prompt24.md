# REFINEMENT UI/UX ANIMASI EDUKIDS — HILANGKAN KESAN TEMPLATE AI

Perbaiki komponen animasi pada halaman EduKids berdasarkan screenshot yang diberikan. Fokus utama adalah menghilangkan elemen visual yang terlihat generik, terutama indikator hijau "Tersimpan", karakter kelinci yang terlihat kaku, latar belakang yang terlalu kosong, dan komposisi yang kurang menyatu.

## 1. Perbaiki Indikator "Tersimpan"

- Hapus penggunaan warna hijau neon atau hijau terang yang terlalu dominan.
- Ganti indikator status menjadi desain yang lebih natural dan konsisten dengan identitas EduKids.
- Gunakan warna biru EduKids `#2875B8`, putih, dan krem lembut.
- Status sukses tetap harus mudah dikenali melalui ikon centang yang jelas dan teks "Tersimpan".
- Gunakan kapsul status kecil dengan border tipis, tanpa glow berlebihan, tanpa shadow mencolok, dan tanpa efek glassmorphism.
- Pertahankan fungsi indikator agar hanya muncul ketika data benar-benar berhasil disimpan.
- Jika penyimpanan gagal, tampilkan status gagal dengan pesan yang jelas dan warna yang sesuai.

## 2. Tingkatkan Kualitas Karakter Animasi

Karakter kelinci harus menggunakan aset maskot EduKids yang sudah tersedia di proyek, bukan karakter baru yang dibuat sembarangan.

- Pertahankan identitas, proporsi, warna, dan gaya ilustrasi maskot yang sudah digunakan pada navbar, profil, peta petualangan, serta halaman lainnya.
- Jangan mengganti maskot dengan emoji atau ikon generik.
- Pastikan seluruh tubuh, kepala, telinga, tangan, kaki, dan aksesori terlihat utuh.
- Hilangkan kesan karakter hanya ditempel di atas background.
- Gunakan animasi idle yang lembut: berkedip, telinga bergerak sedikit, badan naik-turun secara natural, atau melambaikan tangan.
- Animasi harus memiliki jeda dan variasi yang wajar, bukan bergerak terus-menerus secara mekanis.
- Hindari gerakan berlebihan, rotasi acak, bouncing ekstrem, atau efek animasi yang mengganggu.

## 3. Bangun Ulang Background agar Lebih Hidup

Rapikan background yang saat ini hanya berupa langit pucat, dua awan putih, dan gundukan hijau.

Gunakan konsep ilustrasi buku cerita anak 2D yang dibuat secara konsisten dengan dunia EduKids:

- Langit biru muda dengan gradasi sangat halus atau warna datar yang lembut.
- Awan ilustratif yang memiliki bentuk konsisten dengan aset website.
- Bukit hijau berlapis dengan bentuk organik dan transisi warna natural.
- Tambahkan sedikit detail lingkungan seperti rumput, bunga kecil, atau kupu-kupu jika sesuai.
- Gunakan elemen dekoratif secukupnya agar karakter menjadi fokus utama.
- Buat karakter benar-benar berpijak di permukaan tanah dengan bayangan kontak yang lembut.
- Hindari elemen dekoratif yang melayang tanpa alasan atau tidak terhubung dengan lingkungan.

Jangan membuat background baru yang terlihat seperti ilustrasi AI acak. Utamakan aset yang sudah tersedia di proyek.

## 4. Hilangkan Gaya UI Generik

Jangan gunakan:
- Indikator hijau neon dengan glow.
- Shadow tebal pada setiap elemen.
- Banyak kapsul dan border yang tidak diperlukan.
- Ornamen bintang, awan, atau lingkaran yang ditempatkan secara acak.
- Gradient berlebihan.
- Animasi otomatis pada semua elemen.
- Layout simetris yang terlalu kaku dan terlihat seperti template generator AI.

Gunakan prinsip desain produk edukasi profesional: hierarki visual jelas, ruang kosong yang terukur, warna konsisten, ilustrasi berkualitas, dan animasi yang memiliki tujuan.

## 5. Interaksi dan Responsivitas

- Animasi harus tetap berfungsi di desktop, tablet, dan smartphone.
- Pastikan karakter tidak terpotong dan tidak keluar dari container.
- Hindari horizontal scrolling.
- Gunakan `prefers-reduced-motion` untuk pengguna yang mengurangi animasi.
- Jangan menampilkan status "Tersimpan" sebelum proses penyimpanan benar-benar berhasil.
- Jangan mengubah sistem autentikasi, database, routing, atau mekanisme penyimpanan profil yang sudah berjalan.

## 6. Aturan Implementasi

Sebelum mengubah kode:
1. Periksa struktur proyek, komponen terkait, stylesheet, dan aset maskot yang sudah digunakan.
2. Temukan sumber warna hijau pada indikator "Tersimpan", termasuk class CSS, variabel tema, atau komponen statusnya.
3. Periksa apakah animasi karakter menggunakan CSS, SVG, aset gambar, atau library animasi yang sudah tersedia.
4. Lakukan perubahan pada komponen yang relevan saja.
5. Gunakan kembali aset dan variabel desain yang sudah ada. Jangan menduplikasi maskot atau membuat sistem desain baru yang tidak diperlukan.

Setelah selesai, jalankan aplikasi dan periksa hasilnya pada beberapa ukuran layar. Pastikan animasi halus, background menyatu, status penyimpanan akurat, dan tampilannya konsisten dengan seluruh dunia EduKids.

**Target akhir:** tampilan harus terasa seperti produk edukasi anak yang benar-benar dirancang dan dikembangkan secara profesional, bukan kumpulan elemen UI generik hasil generator AI.