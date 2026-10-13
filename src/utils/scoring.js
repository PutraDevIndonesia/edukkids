export function calculateScore(correctCount, totalCount) {
  const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const score = correctCount * 10;
  const maxScore = totalCount * 10;

  let stars = 0;
  if (percentage >= 90) {
    stars = 3;
  } else if (percentage >= 70) {
    stars = 2;
  } else if (percentage >= 50) {
    stars = 1;
  } else {
    stars = 0;
  }

  // XP: 15 per correct answer + completion bonus if >= 50%
  const xpEarned = correctCount * 15 + (percentage >= 50 ? 20 : 5);
  // Coins: 5 per star earned
  const coinsEarned = stars * 5;

  return {
    score,
    maxScore,
    correctCount,
    wrongCount: totalCount - correctCount,
    percentage,
    stars,
    xpEarned,
    coinsEarned
  };
}

// Unified achievement evaluator across the entire EduKids app
export function getEligibleAchievements(progress = {}, history = []) {
  const eligible = new Set(progress?.achievements || []);
  const totalStars = Number(progress?.totalStars || 0);
  const completedQuizzes = progress?.completedQuizzes || [];

  // 1. Bintang Pertama: Minimal 1 bintang (dari totalStars atau dari riwayat)
  if (totalStars >= 1 || history.some((h) => Number(h.stars || 0) >= 1)) {
    eligible.add('first-star');
  }

  // 2. Jago Berhitung: 2 bintang atau lebih di materi Matematika
  const hasMathAchieved = history.some(
    (h) => (h.subject === 'Matematika' || h.activityType === 'game-math') && Number(h.stars || 0) >= 2
  );
  if (hasMathAchieved) {
    eligible.add('math-whiz');
  }

  // 3. Sahabat Kata: 2 bintang atau lebih di materi Bahasa Indonesia
  const hasWordAchieved = history.some(
    (h) => (h.subject === 'Bahasa Indonesia' || h.activityType === 'game-word') && Number(h.stars || 0) >= 2
  );
  if (hasWordAchieved) {
    eligible.add('word-friend');
  }

  // 4. Penjelajah Sains: 2 bintang atau lebih di materi IPA
  const hasScienceAchieved = history.some(
    (h) => (h.subject === 'IPA' || h.activityType === 'game-trivia') && Number(h.stars || 0) >= 2
  );
  if (hasScienceAchieved) {
    eligible.add('science-explorer');
  }

  // 5. Juara Kuis: Menyelesaikan minimal 3 kuis pembelajaran
  if (completedQuizzes.length >= 3) {
    eligible.add('quiz-master');
  }

  // 6. Pantang Menyerah: Menyelesaikan 5 sesi aktivitas belajar
  if (history.length >= 5) {
    eligible.add('never-give-up');
  }

  return Array.from(eligible);
}

export function evaluateAchievements(progress, latestActivity) {
  const unlocked = new Set(progress?.achievements || []);
  const newlyEarned = [];

  const currentStars = Number(progress?.totalStars || 0) + Number(latestActivity?.stars || 0);

  // 1. Bintang Pertama
  if (currentStars >= 1 && !unlocked.has('first-star')) {
    newlyEarned.push('first-star');
  }

  // 2. Jago Berhitung (Matematika)
  if (
    (latestActivity?.subject === 'Matematika' || latestActivity?.activityType === 'game-math') &&
    Number(latestActivity?.stars || 0) >= 2 &&
    !unlocked.has('math-whiz')
  ) {
    newlyEarned.push('math-whiz');
  }

  // 3. Sahabat Kata (Bahasa Indonesia)
  if (
    (latestActivity?.subject === 'Bahasa Indonesia' || latestActivity?.activityType === 'game-word') &&
    Number(latestActivity?.stars || 0) >= 2 &&
    !unlocked.has('word-friend')
  ) {
    newlyEarned.push('word-friend');
  }

  // 4. Penjelajah Sains (IPA)
  if (
    (latestActivity?.subject === 'IPA' || latestActivity?.activityType === 'game-trivia') &&
    Number(latestActivity?.stars || 0) >= 2 &&
    !unlocked.has('science-explorer')
  ) {
    newlyEarned.push('science-explorer');
  }

  // 5. Juara Kuis (>= 3 kuis selesai)
  const isQuiz = latestActivity?.activityType === 'quiz';
  const completedList = new Set(progress?.completedQuizzes || []);
  if (isQuiz && latestActivity?.activityId) {
    completedList.add(latestActivity.activityId);
  }
  if (completedList.size >= 3 && !unlocked.has('quiz-master')) {
    newlyEarned.push('quiz-master');
  }

  // 6. Pantang Menyerah (mencoba kuis / game minimal 5 kali aktivitas)
  const currentHistoryLength = (progress?.history || []).length + 1;
  if (currentHistoryLength >= 5 && !unlocked.has('never-give-up')) {
    newlyEarned.push('never-give-up');
  }

  return newlyEarned;
}
