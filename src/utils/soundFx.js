// Web Audio API Sound Synthesizer for EduKids
// 100% native, zero external dependencies, works offline and fast.
import { storageService } from '../services/storageService';

let audioCtx = null;
let lastPopTime = 0;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function isSoundAllowed() {
  const settings = storageService.getSettings();
  return settings ? settings.soundEnabled : true;
}

export const soundFx = {
  // 1. Taktil Pop (saat memilih tombol jawaban, tab, atau tombol navigasi apapun)
  playPop() {
    if (!isSoundAllowed()) return;
    const nowMs = Date.now();
    if (nowMs - lastPopTime < 45) return;
    lastPopTime = nowMs;

    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.055);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // Ignore audio error safely
    }
  },

  // 2. Bel Jawaban Benar (harmoni riang C5 -> E5 -> G5)
  playCorrect() {
    if (!isSoundAllowed()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const start = now + idx * 0.09;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.22, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.28);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.29);
      });
    } catch {
      // Ignore audio error safely
    }
  },

  // 3. Boing Lembut untuk Jawaban Belum Tepat (ramah anak, tidak menghakimi)
  playIncorrect() {
    if (!isSoundAllowed()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(280, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.22);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.23);
    } catch {
      // Ignore audio error safely
    }
  },

  // 4. Gemerlap Bintang (Arpeggio kilau bintang)
  playStar() {
    if (!isSoundAllowed()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const notes = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        const start = now + idx * 0.07;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.22);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.23);
      });
    } catch {
      // Ignore audio error safely
    }
  },

  // 5. Terompet / Selebrasi Kemenangan (Fanfare)
  playCelebration() {
    if (!isSoundAllowed()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const chord = [523.25, 659.25, 783.99, 1046.5]; // C major chord
      const now = ctx.currentTime;

      chord.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.66);
      });
    } catch {
      // Ignore audio error safely
    }
  },

  // 5b. Megah Fanfare Terompet Pembukaan Piagam Penghargaan
  playFanfare() {
    if (!isSoundAllowed()) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Motif terompet: C5 -> E5 -> G5 -> C6 (panjang)
      const fanfareSequence = [
        { freq: 523.25, time: 0, duration: 0.14, vol: 0.18 },
        { freq: 659.25, time: 0.15, duration: 0.14, vol: 0.2 },
        { freq: 783.99, time: 0.30, duration: 0.16, vol: 0.22 },
        { freq: 1046.5, time: 0.48, duration: 0.65, vol: 0.25 }
      ];

      fanfareSequence.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        const start = now + note.time;
        osc.frequency.setValueAtTime(note.freq, start);

        gain.gain.setValueAtTime(note.vol, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + note.duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + note.duration + 0.05);
      });
    } catch {
      // Ignore audio error safely
    }
  },

// 6. Kartun Boing (efek pegas melompat lucu saat klik maskot/pohon/objek peta)
playBoing() {
  if (!isSoundAllowed()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(580, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.24);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  } catch {}
},

// 7. Balon Udara / Whoosh Ringan
playWhoosh() {
  if (!isSoundAllowed()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.16);

    gain.gain.setValueAtTime(0.16, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.19);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
  } catch {}
},

// 8. Klakson Perahu Lucu (Toot-toot)
playBoatToot() {
  if (!isSoundAllowed()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    [0, 0.11].forEach((offset) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(392, now + offset); // G4
      gain.gain.setValueAtTime(0.18, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + offset);
      osc.stop(now + offset + 0.1);
    });
  } catch {}
}
};
