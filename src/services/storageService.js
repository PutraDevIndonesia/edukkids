const PROFILE_KEY = 'edukids.profile.v1';
const PROGRESS_KEY = 'edukids.progress.v1';
const SETTINGS_KEY = 'edukids.settings.v1';
const HISTORY_KEY = 'edukids.history.v1';
const DAILY_REWARD_KEY = 'edukids.daily_reward.v1';

const DEFAULT_PROFILE = {
  id: 'demo-profile',
  nickname: 'Penjelajah Cilik',
  grade: 3,
  avatarId: 'kiko'
};

const DEFAULT_PROGRESS = {
  totalXp: 120,
  totalStars: 5,
  totalCoins: 25,
  completedQuizzes: ['math-grade-3-pola'],
  completedGames: [],
  achievements: ['first-star'],
  history: []
};

const DEFAULT_SETTINGS = {
  soundEnabled: true,
  animationsEnabled: true,
  autoNarrationEnabled: false
};

function safeParse(jsonString, fallback) {
  if (!jsonString) return fallback;
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error('Error parsing storage item:', err);
    return fallback;
  }
}

export const storageService = {
  getProfile() {
    const raw = localStorage.getItem(PROFILE_KEY);
    return safeParse(raw, DEFAULT_PROFILE);
  },

  saveProfile(profile) {
    try {
      const merged = { ...this.getProfile(), ...profile };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(merged));
      window.dispatchEvent(new Event('edukids:storage-change'));
      return merged;
    } catch (err) {
      console.error('Error saving profile:', err);
      return null;
    }
  },

  getProgress() {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return safeParse(raw, DEFAULT_PROGRESS);
  },

  saveProgress(progress) {
    try {
      const merged = { ...this.getProgress(), ...progress };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(merged));
      window.dispatchEvent(new Event('edukids:storage-change'));
      return merged;
    } catch (err) {
      console.error('Error saving progress:', err);
      return null;
    }
  },

  getSettings() {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return safeParse(raw, DEFAULT_SETTINGS);
  },

  saveSettings(settings) {
    try {
      const merged = { ...this.getSettings(), ...settings };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
      window.dispatchEvent(new Event('edukids:storage-change'));
      return merged;
    } catch (err) {
      console.error('Error saving settings:', err);
      return null;
    }
  },

  getHistory() {
    const raw = localStorage.getItem(HISTORY_KEY);
    return safeParse(raw, []);
  },

  saveActivity(activity) {
    try {
      const current = this.getHistory();
      // Ensure unique session id and prevent duplicate submissions
      if (!activity.id) {
        activity.id = 'act-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7);
      }
      if (!activity.completedAt) {
        activity.completedAt = new Date().toISOString();
      }
      const updated = [activity, ...current];
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated.slice(0, 50)));
      window.dispatchEvent(new Event('edukids:storage-change'));
      return activity;
    } catch (err) {
      console.error('Error saving activity:', err);
      return null;
    }
  },

  getDailyRewardStatus() {
    const todayStr = new Date().toISOString().split('T')[0];
    const raw = localStorage.getItem(DAILY_REWARD_KEY);
    const parsed = safeParse(raw, { lastClaimedDate: null });
    return {
      todayDate: todayStr,
      lastClaimedDate: parsed.lastClaimedDate,
      isClaimedToday: parsed.lastClaimedDate === todayStr
    };
  },

  claimDailyReward() {
    const status = this.getDailyRewardStatus();
    if (status.isClaimedToday) {
      return { success: false, reason: 'already_claimed' };
    }

    try {
      const todayStr = status.todayDate;
      localStorage.setItem(DAILY_REWARD_KEY, JSON.stringify({ lastClaimedDate: todayStr }));

      const currentProgress = this.getProgress();
      const bonusXp = 40;
      const bonusStars = 2;

      const updated = {
        ...currentProgress,
        totalXp: (currentProgress.totalXp || 0) + bonusXp,
        totalStars: (currentProgress.totalStars || 0) + bonusStars
      };
      this.saveProgress(updated);

      this.saveActivity({
        id: 'daily-reward-' + Date.now(),
        type: 'daily-chest',
        title: 'Membuka Peti Kejutan Harian',
        score: bonusXp,
        starsEarned: bonusStars,
        completedAt: new Date().toISOString()
      });

      return {
        success: true,
        bonusXp,
        bonusStars
      };
    } catch (err) {
      console.error('Error claiming daily reward:', err);
      return { success: false, reason: 'error' };
    }
  },

  resetProgress() {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(DEFAULT_PROFILE));
      localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify({
          totalXp: 0,
          totalStars: 0,
          totalCoins: 0,
          completedQuizzes: [],
          completedGames: [],
          achievements: [],
          history: []
        })
      );
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
      localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
      window.dispatchEvent(new Event('edukids:storage-change'));
      return true;
    } catch (err) {
      console.error('Error resetting progress:', err);
      return false;
    }
  }
};
