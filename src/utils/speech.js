// Web Speech API Narrator for EduKids
// Reads questions and educational hints out loud for young students.

let currentUtterance = null;

export const speechService = {
  isSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  },

  isSpeaking() {
    return this.isSupported() && window.speechSynthesis.speaking;
  },

  stop() {
    if (this.isSupported()) {
      window.speechSynthesis.cancel();
      currentUtterance = null;
    }
  },

  speak(text, { onStart, onEnd, onError } = {}) {
    if (!this.isSupported() || !text) return false;

    // Stop previous narration if running
    this.stop();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      currentUtterance = utterance;

      // Select Indonesian voice if present
      const voices = window.speechSynthesis.getVoices();
      const idVoice = voices.find(
        (v) => v.lang.startsWith('id') || v.lang.startsWith('in') || v.name.toLowerCase().includes('indonesia')
      );
      if (idVoice) {
        utterance.voice = idVoice;
      }
      utterance.lang = 'id-ID';
      utterance.rate = 0.92; // Slightly slower, easy to understand for children
      utterance.pitch = 1.08; // Friendly, warm tone

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (err) => {
        currentUtterance = null;
        if (onError) onError(err);
      };

      window.speechSynthesis.speak(utterance);
      return true;
    } catch {
      return false;
    }
  }
};
