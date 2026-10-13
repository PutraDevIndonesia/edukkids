/**
 * mascotThemes.js
 * Konfigurasi sistem warna dan identitas terpusat untuk 5 Maskot EduKids:
 * - Kiko (Kelinci Putih Petualang)
 * - Mimi (Kucing Oranye Ceria)
 * - Luna (Burung Hantu Ungu Bijak)
 * - Bubu (Beruang Cokelat Ramah)
 * - Piko (Rubah Oranye Kemerahan Cerdik)
 * 
 * Memastikan warna kepala, badan, lengan, telapak tangan, kaki, dan telinga
 * SELALU KONSISTEN dan tidak pernah tertukar dengan warna aksesori atau karakter lain.
 */

export const MASCOT_THEMES = {
  kiko: {
    id: 'kiko',
    name: 'Kiko',
    species: 'rabbit',
    role: 'Pemandu Petualangan',
    // Bulu utama (kepala, badan, lengan, kaki)
    fur: '#FFFFFF',
    furShade: '#E2E8F0',
    // Bagian tubuh sekunder
    belly: '#F8FAFC',
    innerEar: '#FCEAE5',
    snout: '#FFFFFF',
    blush: '#FCEAE5',
    nose: '#E9816F',
    // Tangan & Kaki (Warna bulu kelinci putih asli)
    arm: '#FFFFFF',
    armShade: '#E2E8F0',
    paw: '#FFFFFF',
    pawPad: '#FCEAE5',
    leg: '#FFFFFF',
    legShade: '#E2E8F0',
    foot: '#FFFFFF',
    footPad: '#FCEAE5',
    // Aksesori explorer
    clothPrimary: '#347DB5',     // Rompi biru petualang
    clothSecondary: '#E6B84E',   // Kancing emas
    accessory: '#347DB5',        // Topi petualang biru
    accessoryAccent: '#E6B84E',
    outline: '#303C4A',
    badgeBg: '#E7F3FC',
    badgeBorder: '#347DB5'
  },

  mimi: {
    id: 'mimi',
    name: 'Mimi',
    species: 'cat',
    role: 'Ahli Matematika Ceria',
    // Bulu utama (kepala, badan, lengan, kaki)
    fur: '#FFA962',
    furShade: '#EA8D46',
    // Bagian tubuh sekunder
    belly: '#FFF5EB',
    innerEar: '#FCEAE5',
    snout: '#FFF5EB',
    blush: '#FCEAE5',
    nose: '#E9816F',
    // Tangan & Kaki (Warna bulu kucing oranye asli)
    arm: '#FFA962',
    armShade: '#EA8D46',
    paw: '#FFA962',
    pawPad: '#FFF5EB',
    leg: '#FFA962',
    legShade: '#EA8D46',
    foot: '#FFA962',
    footPad: '#FFF5EB',
    // Aksesori
    clothPrimary: '#E6B84E',     // Bandana leher kuning emas
    clothSecondary: '#D97706',
    accessory: '#E6B84E',
    accessoryAccent: '#D97706',
    outline: '#303C4A',
    badgeBg: '#FFF3CF',
    badgeBorder: '#E6B84E'
  },

  luna: {
    id: 'luna',
    name: 'Luna',
    species: 'owl',
    role: 'Pustakawan Kata & Bahasa',
    // Bulu utama (kepala, badan, sayap)
    fur: '#8D80C9',
    furShade: '#776AB0',
    // Bagian tubuh sekunder
    belly: '#EDE9FE',
    innerEar: '#EDE9FE',
    snout: '#EDE9FE',
    blush: '#EDE9FE',
    nose: '#E6B84E',            // Paruh burung hantu kuning
    // Tangan (Sayap) & Kaki (Cakar kuning)
    arm: '#8D80C9',
    armShade: '#776AB0',
    paw: '#8D80C9',
    leg: '#E6B84E',             // Cakar kuning burung
    legShade: '#D49C1E',
    foot: '#E6B84E',
    footPad: '#D49C1E',
    // Aksesori
    clothPrimary: '#EDE9FE',
    clothSecondary: '#6D28D9',
    accessory: '#EDE9FE',
    accessoryAccent: '#6D28D9',
    outline: '#303C4A',
    badgeBg: '#F0ECFB',
    badgeBorder: '#8D80C9'
  },

  bubu: {
    id: 'bubu',
    name: 'Bubu',
    species: 'bear',
    role: 'Peneliti Alam & Sains',
    // Bulu utama (kepala, badan, lengan, kaki) - Cokelat beruang asli!
    fur: '#996633',
    furShade: '#805327',
    // Bagian tubuh sekunder
    belly: '#E6C29E',           // Perut cokelat muda madu
    innerEar: '#D2996E',
    snout: '#E6C29E',           // Moncong cokelat muda
    blush: '#FCEAE5',
    nose: '#303C4A',
    // Tangan & Kaki (COKELAT BERUANG ASLI, BUKAN HIJAU!)
    arm: '#996633',
    armShade: '#805327',
    paw: '#996633',
    pawPad: '#E6C29E',          // Bantalan telapak cokelat muda
    leg: '#996633',
    legShade: '#805327',
    foot: '#996633',
    footPad: '#E6C29E',
    // Aksesori alam
    clothPrimary: '#3E9568',     // Daun di kepala (bukan baju lengan!)
    clothSecondary: '#2E7D52',
    accessory: '#3E9568',
    accessoryAccent: '#2E7D52',
    outline: '#303C4A',
    badgeBg: '#E5F5EA',
    badgeBorder: '#3E9568'
  },

  piko: {
    id: 'piko',
    name: 'Piko',
    species: 'fox',
    role: 'Penjelajah Cerdik',
    // Bulu utama (kepala, badan, lengan, kaki) - Oranye kemerahan rubah asli!
    fur: '#E9816F',
    furShade: '#D46755',
    // Bagian tubuh sekunder
    belly: '#FFFFFF',           // Dada & pipi putih bersih
    innerEar: '#FFFFFF',
    snout: '#FFFFFF',
    blush: '#FCEAE5',
    nose: '#303C4A',
    // Tangan & Kaki (Oranye kemerahan asli dengan aksen kaus kaki cokelat/putih)
    arm: '#E9816F',
    armShade: '#D46755',
    paw: '#E9816F',
    pawPad: '#FFFFFF',
    leg: '#E9816F',
    legShade: '#D46755',
    foot: '#E9816F',
    footPad: '#FFFFFF',
    // Aksesori
    clothPrimary: '#347DB5',
    clothSecondary: '#E6B84E',
    accessory: '#347DB5',
    accessoryAccent: '#E6B84E',
    outline: '#303C4A',
    badgeBg: '#FCEAE5',
    badgeBorder: '#E9816F'
  }
};

export function getMascotTheme(avatarId) {
  return MASCOT_THEMES[avatarId] || MASCOT_THEMES.kiko;
}
