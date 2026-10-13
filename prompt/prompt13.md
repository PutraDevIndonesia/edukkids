Tiga fitur penentu kemenangan:

1. Suara Narasi Soal (Web Speech API)
Alasan: Siswa SD kelas 1–3 lambat membaca teks panjang. Butuh audio penuntun.
Solusi: Tombol speaker di kartu kuis. Gunakan window.speechSynthesis native browser. 0 library tambahan. Maskot bacakan soal dan pilihan dalam Bahasa Indonesia.
Dampak juri: Skor aksesibilitas dan inklusi melonjak.
2. Peti Kejutan Harian (Daily Mystery Chest)
Alasan: Anak suka sensasi unboxing dan hadiah instan.
Solusi: 1 klik per hari di Beranda. Buka peti kayu 2D, muncul taburan bintang dan bonus 20–50 XP acak. Simpan timestamp di localStorage.
Dampak juri: Bukti retensi pengguna (retention loop) teruji.
3. Mode Suara Efek Interaktif (Haptic & Sound FX)
Alasan: Klik hening bikin anak cepat bosan.
Solusi: Bunyi pop saat klik kartu, bunyi ding nada tinggi saat jawaban benar, suara terompet mini saat selesai level. Gunakan Web Audio API synthesizer bawaan yang sudah ada di proyek.
Dampak juri: Aplikasi terasa seperti game edukasi utuh kelas komersial.