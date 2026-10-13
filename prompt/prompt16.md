# EDUKIDS — PERBAIKAN FUNGSIONALITAS DROPDOWN PROFIL

Bertindaklah sebagai Senior React JS Developer yang bertanggung jawab memastikan setiap elemen antarmuka EduKids benar-benar berfungsi, bukan hanya terlihat bagus.

Perbaiki dropdown profil pengguna berdasarkan screenshot yang diberikan. Pertahankan desain visual yang sekarang karena sudah cukup rapi. Fokus utama adalah menghubungkan setiap menu ke halaman dan fitur yang nyata.

**PERUBAHAN UTAMA: HAPUS MENU "KELUAR" SEPENUHNYA dari dropdown profil, termasuk ikon, teks, garis pemisah khusus, event handler yang hanya digunakan menu tersebut, dan ruang kosong yang ditinggalkannya. Jangan menghapus fungsi autentikasi lain yang masih digunakan oleh aplikasi.**

## 1. HEADER PROFIL

Pertahankan bagian atas dropdown yang menampilkan:
- Avatar maskot pengguna.
- Nama pengguna, misalnya "aku hebat".
- Nama atau level petualang, misalnya "Penjelajah Kelas 1 SD".
- Ringkasan jumlah bintang.
- Jumlah XP pengguna.

Ketentuan:
- Nama pengguna harus berasal dari data profil yang sebenarnya.
- Level kelas harus berasal dari data pengguna atau progres yang tersedia.
- Jumlah bintang dan XP harus menggunakan sumber data progres yang sama dengan halaman lainnya.
- Jangan menggunakan angka statis jika aplikasi sudah memiliki data dinamis.
- Klik pada avatar atau nama pengguna dapat diarahkan ke halaman Profil Saya.
- Jika data belum tersedia, tampilkan nilai default yang wajar tanpa menyebabkan error.

## 2. MENU PROFIL SAYA

Ikon: `UserRound` dari Lucide React.

Ketika diklik:
- Arahkan pengguna ke halaman profil yang sebenarnya, misalnya `/profil`.
- Tampilkan data profil yang tersedia, seperti nama pengguna, avatar, kelas, dan informasi akun yang memang disimpan aplikasi.
- Jika fitur edit profil sudah tersedia, hubungkan tombol edit ke fungsi tersebut.
- Jika belum tersedia, buat halaman profil sederhana yang terintegrasi dengan sistem data yang sudah ada.
- Jangan menampilkan halaman kosong atau tautan yang tidak berfungsi.

Gunakan route yang sesuai dengan struktur proyek. Jangan membuat route duplikat apabila halaman profil sudah tersedia.

## 3. MENU PROGRES BELAJAR

Ikon: `TrendingUp` dari Lucide React.

Ketika diklik:
- Arahkan pengguna ke halaman progres belajar, misalnya `/progres`.
- Tampilkan progres nyata yang berasal dari hasil kuis, permainan edukasi, atau aktivitas belajar yang sudah tersimpan.
- Jika tersedia, tampilkan:
  - Total aktivitas yang telah diselesaikan.
  - Jumlah bintang yang dikumpulkan.
  - Total XP.
  - Lencana yang telah diperoleh.
  - Riwayat aktivitas belajar.
  - Persentase penyelesaian materi.
- Gunakan data yang benar-benar tersedia dalam aplikasi.
- Jangan membuat statistik atau riwayat palsu hanya untuk memenuhi tampilan.
- Jika pengguna belum memiliki riwayat, tampilkan empty state yang ramah anak, misalnya "Ayo mulai petualangan pertamamu!"

Jika halaman progres sudah tersedia, gunakan halaman tersebut dan integrasikan data yang ada.

## 4. MENU PENGATURAN

Ikon: `Settings` dari Lucide React.

Ketika diklik:
- Arahkan pengguna ke halaman pengaturan yang sebenarnya, misalnya `/pengaturan`.
- Tampilkan hanya pengaturan yang benar-benar didukung oleh aplikasi, seperti:
  - Pengaturan suara efek permainan, jika fitur audio tersedia.
  - Preferensi animasi atau pengurangan gerakan.
  - Pengaturan aksesibilitas yang relevan.
  - Informasi akun.
- Simpan preferensi jika sistem penyimpanan yang sesuai sudah tersedia.
- Jika autentikasi atau backend digunakan, jangan mengubah kredensial maupun konfigurasi akun secara sembarangan.
- Jangan menampilkan switch yang tidak melakukan apa-apa.
- Jangan membuat pengaturan fiktif yang hanya mengubah tampilan tanpa efek nyata.

Bila pengaturan belum tersedia, buat halaman sederhana dengan fungsi yang benar-benar dapat digunakan. Prioritaskan fitur yang sesuai dengan kemampuan proyek.

## 5. HAPUS MENU KELUAR

Hapus item "Keluar" dari dropdown profil.

Pastikan:
- Tidak ada teks "Keluar" atau ikon logout di dropdown.
- Tidak ada garis pemisah kosong di bagian bawah.
- Tinggi dropdown otomatis menyesuaikan isi yang tersisa.
- Menu Profil Saya, Progres Belajar, dan Pengaturan tetap berfungsi.
- Jangan menghapus sistem autentikasi atau mekanisme sesi yang masih diperlukan bagian lain aplikasi.
- Jangan mengganti menu Keluar dengan menu lain tanpa alasan.

## 6. ROUTING DAN INTERAKSI

Gunakan React Router yang sudah terpasang.

Wajib:
- Gunakan `Link` atau `useNavigate` sesuai kebutuhan.
- Jangan memakai `window.location.href` jika navigasi internal dapat dilakukan tanpa reload.
- Tutup dropdown setelah salah satu menu dipilih.
- Pastikan klik menu tidak hanya mengubah URL tanpa menampilkan halaman tujuan.
- Pertahankan route yang sudah ada dan hindari duplikasi halaman.
- Pastikan tombol browser Back dan Forward berfungsi dengan normal.
- Berikan indikator hover dan focus yang konsisten.
- Gunakan elemen semantik dan atribut aksesibilitas yang sesuai.

## 7. DESAIN VISUAL

Pertahankan identitas visual dropdown yang sekarang:
- Latar putih.
- Sudut membulat.
- Bayangan lembut.
- Ikon Lucide yang konsisten.
- Tipografi yang mudah dibaca.
- Spasi yang rapi.
- Warna merah hanya digunakan untuk tindakan destruktif jika memang diperlukan di bagian aplikasi lain.

Jangan mendesain ulang seluruh navbar. Cukup rapikan dropdown profil dan pastikan ukurannya menyesuaikan setelah menu Keluar dihapus.

## 8. PEMERIKSAAN PROYEK SEBELUM CODING

Sebelum mengubah kode:
1. Periksa struktur folder proyek.
2. Temukan komponen dropdown profil yang sedang digunakan.
3. Identifikasi route profil, progres, dan pengaturan yang sudah tersedia.
4. Periksa sumber data nama, kelas, bintang, XP, dan progres.
5. Periksa autentikasi dan sistem penyimpanan yang digunakan.
6. Gunakan ulang komponen serta fungsi yang sudah ada.

Jangan membuat data dummy baru jika data asli sudah tersedia. Jangan mengganti Firebase, backend, atau sistem penyimpanan yang sudah berjalan.

## 9. PENGUJIAN WAJIB

Setelah implementasi:
- Klik Profil Saya dan pastikan halaman profil terbuka.
- Klik Progres Belajar dan pastikan progres yang relevan tampil.
- Klik Pengaturan dan pastikan kontrol yang tersedia benar-benar bekerja.
- Pastikan dropdown menutup setelah navigasi.
- Pastikan menu Keluar sudah dihapus sepenuhnya.
- Pastikan angka reward tidak berubah secara acak.
- Uji tampilan desktop dan mobile.
- Periksa console browser serta terminal untuk error.

Laporkan file yang diubah, route yang digunakan, sumber data setiap fitur, dan hasil pengujian.

**KRITERIA AKHIR:** dropdown profil EduKids harus menjadi pusat navigasi akun yang nyata. Setiap menu mengarah ke fitur yang benar-benar tersedia, tidak ada tombol palsu, tidak ada statistik buatan, dan menu Keluar sudah dihapus tanpa merusak autentikasi aplikasi.