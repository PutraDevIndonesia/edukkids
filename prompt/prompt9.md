## REDESIGN TOMBOL “LANJUT KE TANTANGAN BERIKUTNYA” — EDUKIDS

Perbaiki desain tombol utama “Lanjut ke Tantangan Berikutnya” agar lebih intuitif, menarik untuk anak SD, dan terlihat profesional.

### Desain tombol
- Pertahankan warna biru EduKids yang sudah digunakan.
- Gunakan ikon Lucide React `ArrowRight` berukuran 22–24 px di sebelah kanan teks.
- Susun ikon dan teks secara horizontal dengan alignment di tengah.
- Gunakan font Nunito dengan bobot 800.
- Pertahankan sudut membulat dan efek bayangan bawah yang menjadi identitas tombol EduKids.
- Berikan jarak yang proporsional antara teks dan ikon.
- Jangan menggunakan emoji sebagai pengganti ikon.

### Interaksi
- Saat hover, warna tombol sedikit lebih terang dan ikon bergeser ke kanan sekitar 3–4 px.
- Saat ditekan, tombol bergerak turun sedikit dengan efek pressed state.
- Tambahkan transisi halus sekitar 180–220 ms.
- Sediakan indikator fokus keyboard yang jelas.
- Pada mobile, pastikan tombol mudah disentuh dan teks tidak terpotong.

### Logika
- Pertahankan fungsi navigasi tombol yang sudah ada.
- Pastikan tombol benar-benar membuka tantangan berikutnya sesuai urutan aktivitas.
- Jika tidak ada tantangan berikutnya, tampilkan aksi penyelesaian yang sesuai, bukan navigasi palsu.
- Jangan mengubah sistem skor, progres, atau penyimpanan data.

### Implementasi
Gunakan komponen `ArrowRight` dari `lucide-react` jika library tersebut sudah tersedia. Jangan menambahkan library baru jika tidak diperlukan.

Hasil akhir harus berupa tombol CTA EduKids yang jelas, interaktif, dan konsisten dengan desain website. Ubah komponen yang benar-benar digunakan oleh halaman tersebut, bukan hanya membuat contoh tombol baru.