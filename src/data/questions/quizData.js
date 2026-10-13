export const quizList = [
  {
    id: 'math-grade-3-pola',
    title: 'Misi Kristal Angka & Pola',
    subject: 'Matematika',
    grade: 3,
    difficulty: 'easy',
    characterId: 'mimi',
    estimatedTime: '3 Menit',
    rewardXp: 90,
    worldId: 'desa-angka',
    description: 'Bantu Mimi menghitung kristal ajaib dan melengkapi urutan angka di Desa Angka!',
    questions: [
      {
        id: 'mq-01',
        prompt: 'Berapakah hasil dari 25 + 18?',
        options: [
          { id: 'a', text: '41' },
          { id: 'b', text: '43' },
          { id: 'c', text: '45' },
          { id: 'd', text: '33' }
        ],
        correctOptionId: 'b',
        explanation: '25 + 18 = 43. (25 + 10 = 35, lalu 35 + 8 = 43).'
      },
      {
        id: 'mq-02',
        prompt: 'Lengkapilah deret pola angka berikut: 4, 8, 12, ... , 20',
        options: [
          { id: 'a', text: '14' },
          { id: 'b', text: '15' },
          { id: 'c', text: '16' },
          { id: 'd', text: '18' }
        ],
        correctOptionId: 'c',
        explanation: 'Polanya adalah bertambah 4 pada setiap langkah (4, 8, 12, 16, 20).'
      },
      {
        id: 'mq-03',
        prompt: 'Mimi memiliki 6 keranjang buah. Setiap keranjang berisi 4 buah apel. Berapa jumlah seluruh buah apel Mimi?',
        options: [
          { id: 'a', text: '20' },
          { id: 'b', text: '22' },
          { id: 'c', text: '24' },
          { id: 'd', text: '28' }
        ],
        correctOptionId: 'c',
        explanation: '6 keranjang dikali 4 apel = 6 × 4 = 24 apel.'
      },
      {
        id: 'mq-04',
        prompt: 'Sebuah kue dipotong menjadi 8 bagian sama besar. Kiko memakan 2 bagian. Berapa bagian kue yang dimakan Kiko dalam bentuk pecahan?',
        options: [
          { id: 'a', text: '1/8' },
          { id: 'b', text: '2/8' },
          { id: 'c', text: '3/8' },
          { id: 'd', text: '2/4' }
        ],
        correctOptionId: 'b',
        explanation: 'Kiko memakan 2 dari total 8 potongan, sehingga pecahannya adalah 2/8 (atau disederhanakan menjadi 1/4).'
      },
      {
        id: 'mq-05',
        prompt: 'Berapa hasil dari 50 - 27?',
        options: [
          { id: 'a', text: '23' },
          { id: 'b', text: '27' },
          { id: 'c', text: '33' },
          { id: 'd', text: '13' }
        ],
        correctOptionId: 'a',
        explanation: '50 - 27 = 23.'
      }
    ]
  },
  {
    id: 'indo-grade-3-kalimat',
    title: 'Petualangan Kalimat Luna',
    subject: 'Bahasa Indonesia',
    grade: 3,
    difficulty: 'easy',
    characterId: 'luna',
    estimatedTime: '4 Menit',
    rewardXp: 95,
    worldId: 'hutan-kata',
    description: 'Bantu Luna menyusun kalimat runtut dan menemukan arti kata indah di Hutan Kata.',
    questions: [
      {
        id: 'iq-01',
        prompt: 'Manakah penulisan huruf kapital yang tepat pada kalimat berikut?',
        options: [
          { id: 'a', text: 'ani dan budi pergi ke bandung.' },
          { id: 'b', text: 'Ani dan Budi pergi ke Bandung.' },
          { id: 'c', text: 'Ani Dan Budi pergi Ke bandung.' },
          { id: 'd', text: 'ani dan Budi pergi ke Bandung.' }
        ],
        correctOptionId: 'b',
        explanation: 'Nama orang (Ani, Budi) dan nama kota (Bandung) selalu diawali dengan huruf kapital.'
      },
      {
        id: 'iq-02',
        prompt: 'Lengkapilah kalimat berikut: Burung elang terbang sangat ... di langit biru.',
        options: [
          { id: 'a', text: 'panjang' },
          { id: 'b', text: 'tinggi' },
          { id: 'c', text: 'berat' },
          { id: 'd', text: 'gemuk' }
        ],
        correctOptionId: 'b',
        explanation: 'Kata yang tepat untuk menggambarkan posisi terbang burung adalah "tinggi".'
      },
      {
        id: 'iq-03',
        prompt: 'Apakah lawan kata (antonim) dari kata "RAJIN"?',
        options: [
          { id: 'a', text: 'Pintar' },
          { id: 'b', text: 'Cepat' },
          { id: 'c', text: 'Malas' },
          { id: 'd', text: 'Hemat' }
        ],
        correctOptionId: 'c',
        explanation: 'Lawan kata dari rajin adalah malas.'
      },
      {
        id: 'iq-04',
        prompt: 'Tanda baca yang tepat untuk mengakhiri kalimat tanya adalah ...',
        options: [
          { id: 'a', text: 'Titik (.)' },
          { id: 'b', text: 'Tanda seru (!)' },
          { id: 'c', text: 'Tanda tanya (?)' },
          { id: 'd', text: 'Koma (,)' }
        ],
        correctOptionId: 'c',
        explanation: 'Kalimat tanya selalu diakhiri dengan tanda tanya (?).'
      },
      {
        id: 'iq-05',
        prompt: 'Susunlah kata-kata acak ini menjadi kalimat yang baik: [buku - Luna - perpustakaan - di - membaca]',
        options: [
          { id: 'a', text: 'Perpustakaan membaca buku di Luna.' },
          { id: 'b', text: 'Luna membaca buku di perpustakaan.' },
          { id: 'c', text: 'Membaca Luna di perpustakaan buku.' },
          { id: 'd', text: 'Buku di perpustakaan membaca Luna.' }
        ],
        correctOptionId: 'b',
        explanation: 'Susunan pola Subjek (Luna) - Predikat (membaca) - Objek (buku) - Keterangan (di perpustakaan).'
      }
    ]
  },
  {
    id: 'ipa-grade-3-hewan',
    title: 'Rahasia Alam Makhluk Hidup',
    subject: 'IPA',
    grade: 3,
    difficulty: 'medium',
    characterId: 'bubu',
    estimatedTime: '3 Menit',
    rewardXp: 100,
    worldId: 'lembah-sains',
    description: 'Jelajahi Lembah Sains bersama Bubu untuk mengenali ciri-ciri dan pengelompokan makhluk hidup.',
    questions: [
      {
        id: 'aq-01',
        prompt: 'Hewan yang berkembang biak dengan cara melahirkan disebut ...',
        options: [
          { id: 'a', text: 'Ovipar' },
          { id: 'b', text: 'Vivipar' },
          { id: 'c', text: 'Ovovivipar' },
          { id: 'd', text: 'Karnivora' }
        ],
        correctOptionId: 'b',
        explanation: 'Vivipar adalah hewan yang berkembang biak dengan cara melahirkan (seperti kucing, sapi, dan beruang).'
      },
      {
        id: 'aq-02',
        prompt: 'Ikan bernapas di dalam air menggunakan organ ...',
        options: [
          { id: 'a', text: 'Paru-paru' },
          { id: 'b', text: 'Trakea' },
          { id: 'c', text: 'Insang' },
          { id: 'd', text: 'Kulit' }
        ],
        correctOptionId: 'c',
        explanation: 'Ikan menyaring oksigen terlarut dalam air menggunakan insang.'
      },
      {
        id: 'aq-03',
        prompt: 'Tumbuhan hijau membuat makanannya sendiri melalui proses yang disebut ...',
        options: [
          { id: 'a', text: 'Metamorfosis' },
          { id: 'b', text: 'Fotosintesis' },
          { id: 'c', text: 'Penyerbukan' },
          { id: 'd', text: 'Pencernaan' }
        ],
        correctOptionId: 'b',
        explanation: 'Fotosintesis adalah proses tumbuhan hijau memasak makanan dengan bantuan sinar matahari, air, dan karbon dioksida.'
      },
      {
        id: 'aq-04',
        prompt: 'Hewan pemakan tumbuhan seperti sapi, kambing, dan kelinci disebut ...',
        options: [
          { id: 'a', text: 'Herbivora' },
          { id: 'b', text: 'Karnivora' },
          { id: 'c', text: 'Omnivora' },
          { id: 'd', text: 'Insektivora' }
        ],
        correctOptionId: 'a',
        explanation: 'Herbivora adalah golongan hewan pemakan tumbuh-tumbuhan.'
      },
      {
        id: 'aq-05',
        prompt: 'Benda langit yang menjadi sumber cahaya utama dan energi bagi bumi adalah ...',
        options: [
          { id: 'a', text: 'Bulan' },
          { id: 'b', text: 'Matahari' },
          { id: 'c', text: 'Komet' },
          { id: 'd', text: 'Bintang Kejora' }
        ],
        correctOptionId: 'b',
        explanation: 'Matahari adalah bintang terdekat bumi yang memancarkan panas dan cahaya untuk kehidupan.'
      }
    ]
  },
  {
    id: 'eng-grade-2-words',
    title: 'Fun Island English Words',
    subject: 'Bahasa Inggris',
    grade: 2,
    difficulty: 'easy',
    characterId: 'kiko',
    estimatedTime: '3 Menit',
    rewardXp: 85,
    worldId: 'pulau-english',
    description: 'Yuk mengenal kata bahasa Inggris seputar warna, hewan, dan benda di Pulau English bersama Kiko!',
    questions: [
      {
        id: 'eq-01',
        prompt: 'Apakah bahasa Inggris dari warna "KUNING"?',
        options: [
          { id: 'a', text: 'Red' },
          { id: 'b', text: 'Blue' },
          { id: 'c', text: 'Yellow' },
          { id: 'd', text: 'Green' }
        ],
        correctOptionId: 'c',
        explanation: 'Warna kuning dalam bahasa Inggris adalah Yellow.'
      },
      {
        id: 'eq-02',
        prompt: '"Good morning" adalah ucapan sapaan yang diucapkan saat ...',
        options: [
          { id: 'a', text: 'Pagi hari' },
          { id: 'b', text: 'Malam hari' },
          { id: 'c', text: 'Sore hari' },
          { id: 'd', text: 'Akan tidur' }
        ],
        correctOptionId: 'a',
        explanation: '"Good morning" berarti Selamat Pagi.'
      },
      {
        id: 'eq-03',
        prompt: 'Hewan apakah yang disebut "RABBIT"?',
        options: [
          { id: 'a', text: 'Kucing' },
          { id: 'b', text: 'Kelinci' },
          { id: 'c', text: 'Burung' },
          { id: 'd', text: 'Kura-kura' }
        ],
        correctOptionId: 'b',
        explanation: 'Rabbit adalah kelinci (seperti Kiko!).'
      },
      {
        id: 'eq-04',
        prompt: 'Berapakah angka "SEVEN" dalam angka biasa?',
        options: [
          { id: 'a', text: '5' },
          { id: 'b', text: '6' },
          { id: 'c', text: '7' },
          { id: 'd', text: '8' }
        ],
        correctOptionId: 'c',
        explanation: 'Seven artinya tujuh (7).'
      },
      {
        id: 'eq-05',
        prompt: 'Benda yang digunakan untuk menulis dan membaca adalah "BOOK". Apa artinya?',
        options: [
          { id: 'a', text: 'Buku' },
          { id: 'b', text: 'Pensil' },
          { id: 'c', text: 'Meja' },
          { id: 'd', text: 'Tas' }
        ],
        correctOptionId: 'a',
        explanation: 'Book adalah buku.'
      }
    ]
  },
  {
    id: 'umum-grade-5-nusantara',
    title: 'Jelajah Wawasan Nusantara',
    subject: 'Pengetahuan Umum',
    grade: 5,
    difficulty: 'medium',
    characterId: 'piko',
    estimatedTime: '4 Menit',
    rewardXp: 110,
    worldId: 'kerajaan-pengetahuan',
    description: 'Buktikan kecerdikanmu menelusuri keanekaragaman budaya dan kepulauan Indonesia bersama Piko.',
    questions: [
      {
        id: 'uq-01',
        prompt: 'Rumah adat Tongkonan berasal dari provinsi ...',
        options: [
          { id: 'a', text: 'Sumatera Barat' },
          { id: 'b', text: 'Sulawesi Selatan' },
          { id: 'c', text: 'Kalimantan Timur' },
          { id: 'd', text: 'Papua' }
        ],
        correctOptionId: 'b',
        explanation: 'Rumah Tongkonan adalah rumah adat masyarakat suku Toraja di Sulawesi Selatan.'
      },
      {
        id: 'uq-02',
        prompt: 'Lagu kebangsaan Indonesia Raya diciptakan oleh ...',
        options: [
          { id: 'a', text: 'W.R. Soepratman' },
          { id: 'b', text: 'Ismail Marzuki' },
          { id: 'c', text: 'Ibu Sud' },
          { id: 'd', text: 'Cornel Simanjuntak' }
        ],
        correctOptionId: 'a',
        explanation: 'Wage Rudolf Soepratman menciptakan lagu kebangsaan Indonesia Raya yang pertama kali diperdengarkan pada Sumpah Pemuda 1928.'
      },
      {
        id: 'uq-03',
        prompt: 'Candi Borobudur yang megah terletak di provinsi ...',
        options: [
          { id: 'a', text: 'Jawa Timur' },
          { id: 'b', text: 'Jawa Barat' },
          { id: 'c', text: 'Jawa Tengah' },
          { id: 'd', text: 'Bali' }
        ],
        correctOptionId: 'c',
        explanation: 'Candi Borobudur terletak di Kabupaten Magelang, Jawa Tengah.'
      },
      {
        id: 'uq-04',
        prompt: 'Sila pertama dalam Pancasila berbunyi ...',
        options: [
          { id: 'a', text: 'Kemanusiaan yang adil dan beradab' },
          { id: 'b', text: 'Ketuhanan Yang Maha Esa' },
          { id: 'c', text: 'Persatuan Indonesia' },
          { id: 'd', text: 'Keadilan sosial bagi seluruh rakyat Indonesia' }
        ],
        correctOptionId: 'b',
        explanation: 'Sila pertama adalah Ketuhanan Yang Maha Esa, dilambangkan dengan perisai bintang emas.'
      },
      {
        id: 'uq-05',
        prompt: 'Alat musik tradisional Sasando yang dimainkan dengan cara dipetik berasal dari ...',
        options: [
          { id: 'a', text: 'Nusa Tenggara Timur (NTT)' },
          { id: 'b', text: 'Maluku' },
          { id: 'c', text: 'Aceh' },
          { id: 'd', text: 'Banten' }
        ],
        correctOptionId: 'a',
        explanation: 'Sasando adalah alat musik dawai dari Pulau Rote, Nusa Tenggara Timur.'
      }
    ]
  }
];
