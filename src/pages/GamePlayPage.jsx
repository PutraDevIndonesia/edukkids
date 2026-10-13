import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Star,
  Zap,
  RotateCcw,
  Sparkles,
  Gamepad2,
  AlertTriangle,
  Play,
  Award
} from 'lucide-react';
import { gamesList } from '../data/games/gamesData';
import { useEduProgress } from '../hooks/useEduProgress';
import { calculateScore, evaluateAchievements } from '../utils/scoring';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { CharacterGuide } from '../components/characters/CharacterGuide';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { Modal } from '../components/common/Modal';
import { CelebrationEffect } from '../components/common/CelebrationEffect';
import { NextChallengeButton } from '../components/common/NextChallengeButton';
import { AudioReaderButton } from '../components/common/AudioReaderButton';
import { soundFx } from '../utils/soundFx';

// GAME 1: MATH CHALLENGE QUESTIONS
const mathLevels = [
  {
    id: 'm1',
    question: 'Berapakah 14 + 19?',
    options: ['31', '33', '35', '29'],
    correct: '33',
    hint: '14 + 19 = 33'
  },
  {
    id: 'm2',
    question: 'Berapakah 45 - 18?',
    options: ['25', '27', '29', '31'],
    correct: '27',
    hint: '45 - 18 = 27'
  },
  {
    id: 'm3',
    question: '7 kelompok masing-masing berisi 4 pensil. Berapakah 7 × 4?',
    options: ['24', '26', '28', '32'],
    correct: '28',
    hint: '7 × 4 = 28'
  },
  {
    id: 'm4',
    question: '24 kue dibagikan sama rata ke 4 piring. Berapakah 24 ÷ 4?',
    options: ['5', '6', '7', '8'],
    correct: '6',
    hint: '24 ÷ 4 = 6'
  },
  {
    id: 'm5',
    question: 'Berapakah 50 + 75?',
    options: ['115', '120', '125', '135'],
    correct: '125',
    hint: '50 + 75 = 125'
  }
];

// GAME 2: WORD PUZZLE & SENTENCE CHALLENGES
const wordLevels = [
  {
    id: 'w1',
    type: 'choice',
    question: 'Pilihlah kata yang memiliki arti sama (sinonim) dengan kata "PANDAI":',
    options: ['Cerdas', 'Kuat', 'Tinggi', 'Ramah'],
    correct: 'Cerdas',
    hint: 'Pandai bermakna sama dengan cerdas atau pintar.'
  },
  {
    id: 'w2',
    type: 'arrange',
    question: 'Susunlah kata-kata berikut menjadi kalimat yang benar:',
    tokens: ['setiap', 'buku', 'membaca', 'Luna', 'hari'],
    correctSentence: 'Luna membaca buku setiap hari',
    hint: 'Subjek diawali dengan Luna, lalu kata kerja membaca.'
  },
  {
    id: 'w3',
    type: 'choice',
    question: 'Lengkapilah peribahasa ini: "Rajin pangkal pandai, hemat pangkal ..."',
    options: ['Sehat', 'Kaya', 'Cepat', 'Berani'],
    correct: 'Kaya',
    hint: 'Peribahasa lengkapnya: Rajin pangkal pandai, hemat pangkal kaya.'
  },
  {
    id: 'w4',
    type: 'arrange',
    question: 'Susunlah kata berikut menjadi kalimat santun:',
    tokens: ['guru', 'sopan', 'Budi', 'kepada', 'berbicara'],
    correctSentence: 'Budi berbicara sopan kepada guru',
    hint: 'Urutan: Subjek (Budi) - Kata kerja (berbicara) - Keterangan (sopan kepada guru).'
  },
  {
    id: 'w5',
    type: 'choice',
    question: 'Manakah kata berimbuhan yang penulisannya tepat?',
    options: ['Menulis', 'Mulis', 'Mengtulis', 'Metulis'],
    correct: 'Menulis',
    hint: 'Awalan me- bertemu kata dasar tulis berubah menjadi menulis.'
  }
];

// GAME 3: SCIENCE & TRIVIA CHALLENGES
const triviaLevels = [
  {
    id: 't1',
    question: 'Planet terdekat dengan Matahari dalam tata surya kita adalah ...',
    options: ['Merkurius', 'Venus', 'Bumi', 'Mars'],
    correct: 'Merkurius',
    hint: 'Merkurius adalah planet pertama dan paling dekat dengan matahari.'
  },
  {
    id: 't2',
    question: 'Hewan pemakan daging seperti singa dan harimau digolongkan sebagai ...',
    options: ['Herbivora', 'Karnivora', 'Omnivora', 'Insektivora'],
    correct: 'Karnivora',
    hint: 'Karnivora adalah istilah ilmiah untuk hewan pemakan daging.'
  },
  {
    id: 't3',
    question: 'Pulau manakah di Indonesia yang menjadi habitat asli hewan langka Komodo?',
    options: ['Pulau Komodo (NTT)', 'Pulau Bali', 'Pulau Madura', 'Pulau Bangka'],
    correct: 'Pulau Komodo (NTT)',
    hint: 'Taman Nasional Komodo berada di wilayah Nusa Tenggara Timur.'
  },
  {
    id: 't4',
    question: 'Zat hijau daun pada tumbuhan yang berfungsi menangkap cahaya matahari adalah ...',
    options: ['Klorofil', 'Oksigen', 'Stomata', 'Kloroplas'],
    correct: 'Klorofil',
    hint: 'Klorofil adalah pigmen hijau penangkap cahaya untuk fotosintesis.'
  },
  {
    id: 't5',
    question: 'Benda padat yang berubah wujud menjadi cair ketika dipanaskan disebut peristiwa ...',
    options: ['Membeku', 'Mencair', 'Menguap', 'Menyublim'],
    correct: 'Mencair',
    hint: 'Contohnya es batu yang mencair menjadi air saat terkena panas.'
  }
];

export function GamePlayPage() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { progress, updateProgress, recordActivity } = useEduProgress();

  const game = gamesList.find((g) => g.id === gameId);

  const [gameState, setGameState] = useState('intro'); // 'intro' | 'playing' | 'completed'
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [arrangedTokens, setArrangedTokens] = useState([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [scoreList, setScoreList] = useState([]); // array of booleans
  const [showExitModal, setShowExitModal] = useState(false);
  const [newBadges, setNewBadges] = useState([]);
  const [hasRecorded, setHasRecorded] = useState(false);

  if (!game) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <CharacterAvatar characterId="kiko" size={80} />
        <h2>Game Tidak Ditemukan</h2>
        <Link to="/game">
          <Button variant="primary">Kembali ke Katalog Game</Button>
        </Link>
      </div>
    );
  }

  // Get active dataset based on gameId
  const levels =
    game.id === 'petualangan-angka'
      ? mathLevels
      : game.id === 'hutan-kata'
      ? wordLevels
      : triviaLevels;

  const currentLevel = levels[levelIndex];
  const isLastLevel = levelIndex === levels.length - 1;

  // Word token click handler for 'arrange' question types
  const handleTokenClick = (token) => {
    if (isAnswerSubmitted) return;
    soundFx.playPop();
    if (arrangedTokens.includes(token)) {
      setArrangedTokens(arrangedTokens.filter((t) => t !== token));
    } else {
      setArrangedTokens([...arrangedTokens, token]);
    }
  };

  const handleCheckAnswer = () => {
    if (isAnswerSubmitted) return;

    let isCorrect = false;
    if (currentLevel.type === 'arrange') {
      const sentence = arrangedTokens.join(' ');
      isCorrect = sentence.toLowerCase().trim() === currentLevel.correctSentence.toLowerCase().trim();
      setSelectedAnswer(sentence);
    } else {
      isCorrect = selectedAnswer === currentLevel.correct;
    }

    if (isCorrect) {
      soundFx.playCorrect();
    } else {
      soundFx.playIncorrect();
    }

    setIsAnswerSubmitted(true);
    setScoreList((prev) => [...prev, isCorrect]);
  };

  const handleNextLevel = () => {
    if (isLastLevel) {
      soundFx.playCelebration();
      setTimeout(() => soundFx.playStar(), 300);
      setGameState('completed');
    } else {
      setLevelIndex((prev) => prev + 1);
      setSelectedAnswer('');
      setArrangedTokens([]);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRestart = () => {
    setLevelIndex(0);
    setSelectedAnswer('');
    setArrangedTokens([]);
    setIsAnswerSubmitted(false);
    setScoreList([]);
    setHasRecorded(false);
    setNewBadges([]);
    setGameState('playing');
  };

  // Completion record handler
  useEffect(() => {
    if (gameState === 'completed' && !hasRecorded && scoreList.length === levels.length) {
      const correctCount = scoreList.filter(Boolean).length;
      const res = calculateScore(correctCount, levels.length);

      const activityRecord = {
        id: `game-${game.id}-${Date.now()}`,
        activityId: game.id,
        activityTitle: game.title,
        activityType: `game-${game.id === 'petualangan-angka' ? 'math' : game.id === 'hutan-kata' ? 'word' : 'trivia'}`,
        subject: game.subject,
        score: res.score,
        maxScore: res.maxScore,
        correctAnswers: correctCount,
        totalQuestions: levels.length,
        percentage: res.percentage,
        stars: res.stars,
        xpEarned: res.xpEarned,
        coinsEarned: res.coinsEarned,
        completedAt: new Date().toISOString()
      };

      recordActivity(activityRecord);

      const unlockedBadges = evaluateAchievements(progress, activityRecord);
      setNewBadges(unlockedBadges);

      const completedGameSet = new Set(progress.completedGames || []);
      completedGameSet.add(game.id);

      const currentAchievements = new Set(progress.achievements || []);
      unlockedBadges.forEach((b) => currentAchievements.add(b));

      updateProgress({
        totalXp: (progress.totalXp || 0) + res.xpEarned,
        totalStars: (progress.totalStars || 0) + res.stars,
        totalCoins: (progress.totalCoins || 0) + res.coinsEarned,
        completedGames: Array.from(completedGameSet),
        achievements: Array.from(currentAchievements)
      });

      setHasRecorded(true);
    }
  }, [gameState, hasRecorded, scoreList, levels.length, game, progress, recordActivity, updateProgress]);

  // ===================== INTRO SCREEN =====================
  if (gameState === 'intro') {
    return (
      <div className="container" style={{ maxWidth: '640px', padding: '40px 20px' }}>
        <Card style={{ textAlign: 'center', padding: '36px 24px', borderTop: `8px solid ${game.themeColor}` }}>
          <div style={{ marginBottom: '16px' }}>
            <CharacterAvatar characterId={game.characterId} size={96} />
          </div>

          <Badge variant="warning" icon={Gamepad2} style={{ marginBottom: '10px' }}>
            {game.genre}
          </Badge>

          <h1 style={{ color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
            {game.title}
          </h1>

          <div
            style={{
              backgroundColor: game.bgColor,
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginBottom: '24px',
              border: `1.5px solid ${game.themeColor}`
            }}
          >
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text)', fontStyle: 'italic' }}>
              "{game.story}"
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <Button variant="secondary" onClick={() => navigate('/game')}>
              Kembali
            </Button>
            <Button
              variant="primary"
              size="lg"
              icon={Play}
              onClick={() => setGameState('playing')}
            >
              Mulai Petualangan Game!
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // ===================== COMPLETED SCREEN =====================
  if (gameState === 'completed') {
    const correctCount = scoreList.filter(Boolean).length;
    const finalScore = calculateScore(correctCount, levels.length);

    return (
      <div className="container anim-slide-up" style={{ maxWidth: '640px', padding: '30px 20px' }}>
        <CelebrationEffect active={true} duration={4000} />
        <Card className="interactive-card" style={{ textAlign: 'center', padding: '36px 24px', borderTop: `8px solid ${game.themeColor}` }}>
          <div className="anim-pop" style={{ marginBottom: '16px' }}>
            <CharacterAvatar characterId={game.characterId} size={84} cheer={true} />
          </div>

          <Badge variant="success" icon={Sparkles} style={{ marginBottom: '8px' }} className="interactive-badge">
            Misi Permainan Selesai!
          </Badge>

          <h1 style={{ color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            {finalScore.stars >= 2 ? 'Permainan yang Luar Biasa!' : 'Terus Berlatih, Kamu Hebat!'}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            Terima kasih telah membantu {game.characterName} menyelesaikan tantangan {game.title}!
          </p>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={s <= finalScore.stars ? 'anim-star-burst' : ''}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: s <= finalScore.stars ? 'var(--color-warning-soft)' : 'var(--color-surface-muted)',
                  border: `2px solid ${s <= finalScore.stars ? '#E6B84E' : 'var(--color-border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animationDelay: `${s * 0.2}s`
                }}
              >
                <Star
                  size={36}
                  fill={s <= finalScore.stars ? '#E6B84E' : 'none'}
                  color={s <= finalScore.stars ? '#E6B84E' : '#B0B8C0'}
                />
              </div>
            ))}
          </div>

          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            <div style={{ padding: '12px', backgroundColor: 'var(--color-surface-muted)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>SKOR</span>
              <h3 style={{ margin: 0, color: 'var(--color-primary-dark)' }}>{finalScore.score} Poin</h3>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-success-soft)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: '#216a44', fontWeight: 700 }}>TEPAT</span>
              <h3 style={{ margin: 0, color: 'var(--color-success)' }}>{finalScore.correctCount} / {levels.length}</h3>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-primary-soft)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>XP DIDAPAT</span>
              <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>+{finalScore.xpEarned} XP</h3>
            </div>
          </div>

          {/* Badge Alert */}
          {newBadges.length > 0 && (
            <div
              className="anim-pop"
              style={{
                backgroundColor: 'var(--color-warning-soft)',
                border: '2px dashed var(--color-warning)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <Award size={32} color="#997316" />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ color: '#8C6812', display: 'block', fontSize: '0.95rem' }}>
                  🎉 Lencana Baru Diperoleh!
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#997316' }}>
                  Cek koleksi lencanamu untuk melihat piala barumu.
                </span>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <Button variant="primary" icon={RotateCcw} onClick={handleRestart}>
              Main Lagi
            </Button>
            <Link to="/game">
              <Button variant="secondary">Pilih Game Lain</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  // ===================== PLAYING SCREEN =====================
  const isArrangeMode = currentLevel.type === 'arrange';

  return (
    <div className="container" style={{ maxWidth: '720px', padding: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <button
          onClick={() => setShowExitModal(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.9rem',
            fontWeight: 700,
            color: 'var(--color-text-muted)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            border: '1.5px solid var(--color-border)',
            backgroundColor: '#FFFFFF'
          }}
        >
          <ArrowLeft size={16} /> Keluar
        </button>

        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)' }}>
          Tantangan {levelIndex + 1} dari {levels.length}
        </span>

        <Badge variant="warning">{game.title}</Badge>
      </div>

      <ProgressBar current={levelIndex + 1} total={levels.length} height={10} />

      {/* Game Card */}
      <Card
        key={levelIndex}
        className="anim-slide-up interactive-card"
        style={{ marginTop: '20px', padding: '28px', borderTop: `6px solid ${game.themeColor}` }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <CharacterAvatar
            characterId={game.characterId}
            size={48}
            cheer={isAnswerSubmitted}
            animated
          />
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
              {game.characterName}:
            </span>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
              {isAnswerSubmitted
                ? '🌟 Kerja bagus! Mari lanjutkan ke tantangan berikutnya!'
                : game.id === 'petualangan-angka'
                ? 'Pilihlah kristal angka yang tepat!'
                : game.id === 'hutan-kata'
                ? 'Susun kata atau pilih ejaan yang paling tepat!'
                : 'Temukan jawaban fakta alam yang benar!'}
            </p>
          </div>
        </div>

        {/* Question Heading with Audio Narration Reader Button */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '14px',
            marginBottom: '20px'
          }}
        >
          <h2 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-text)', flex: '1 1 320px' }}>
            {currentLevel.question}
          </h2>
          <AudioReaderButton
            textToRead={`${currentLevel.question}. ${currentLevel.options ? 'Pilihan: ' + currentLevel.options.join(', ') : ''}`}
          />
        </div>

        {/* IF ARRANGE MODE: TOKENS SELECTION */}
        {isArrangeMode ? (
          <div>
            {/* Answer Display Box */}
            <div
              style={{
                minHeight: '60px',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-surface-muted)',
                border: '2px dashed var(--color-border)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                alignItems: 'center',
                marginBottom: '20px'
              }}
            >
              {arrangedTokens.length === 0 ? (
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Klik kata-kata di bawah ini untuk menyusun kalimatmu...
                </span>
              ) : (
                arrangedTokens.map((tok, idx) => (
                  <span
                    key={idx}
                    onClick={() => handleTokenClick(tok)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      cursor: isAnswerSubmitted ? 'default' : 'pointer'
                    }}
                  >
                    {tok}
                  </span>
                ))
              )}
            </div>

            {/* Available Tokens to click */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              {currentLevel.tokens.map((tok) => {
                const isUsed = arrangedTokens.includes(tok);
                return (
                  <button
                    key={tok}
                    type="button"
                    disabled={isAnswerSubmitted || isUsed}
                    onClick={() => handleTokenClick(tok)}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '10px',
                      border: '2px solid var(--color-border)',
                      backgroundColor: isUsed ? 'var(--color-surface-muted)' : '#FFFFFF',
                      opacity: isUsed ? 0.4 : 1,
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      fontSize: '1rem',
                      cursor: isUsed || isAnswerSubmitted ? 'default' : 'pointer'
                    }}
                  >
                    {tok}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* STANDARD MULTIPLE CHOICE OPTIONS */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {currentLevel.options.map((opt) => {
              const isSelected = selectedAnswer === opt;
              const isCorrect = opt === currentLevel.correct;

              let bg = '#FFFFFF';
              let border = '2px solid var(--color-border)';

              if (isAnswerSubmitted) {
                if (isCorrect) {
                  bg = 'var(--color-success-soft)';
                  border = '2px solid var(--color-success)';
                } else if (isSelected && !isCorrect) {
                  bg = 'var(--color-coral-soft)';
                  border = '2px solid var(--color-coral)';
                }
              } else if (isSelected) {
                bg = 'var(--color-primary-soft)';
                border = '2px solid var(--color-primary)';
              }

              return (
                <button
                  key={opt}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => {
                    soundFx.playPop();
                    setSelectedAnswer(opt);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: bg,
                    border,
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: 'var(--color-text)',
                    cursor: isAnswerSubmitted ? 'default' : 'pointer'
                  }}
                >
                  <span>{opt}</span>
                  {isAnswerSubmitted && isCorrect && <CheckCircle size={20} color="var(--color-success)" />}
                  {isAnswerSubmitted && isSelected && !isCorrect && <XCircle size={20} color="var(--color-coral)" />}
                </button>
              );
            })}
          </div>
        )}

        {/* FEEDBACK & NEXT BUTTON */}
        {isAnswerSubmitted ? (
          <div className="anim-slide-up">
            <div
              style={{
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: scoreList[scoreList.length - 1]
                  ? 'var(--color-success-soft)'
                  : 'var(--color-warning-soft)',
                border: `1.5px solid ${scoreList[scoreList.length - 1] ? '#c2ebcb' : '#f6e19f'}`,
                marginBottom: '20px'
              }}
            >
              <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>
                {scoreList[scoreList.length - 1] ? '✨ Jawabanmu Benar!' : '💡 Pembahasan:'}
              </strong>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                {currentLevel.hint}
              </p>
            </div>

            <NextChallengeButton
              onClick={handleNextLevel}
              isLast={isLastLevel}
              nextLabel="Lanjut ke Tantangan Berikutnya"
              lastLabel="Selesaikan Game & Buka Skor"
            />
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={handleCheckAnswer}
            disabled={isArrangeMode ? arrangedTokens.length === 0 : !selectedAnswer}
            style={{ width: '100%' }}
          >
            Periksa Jawaban
          </Button>
        )}
      </Card>

      {/* Exit Modal */}
      <Modal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Keluar dari Game?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setShowExitModal(false)}>
              Lanjut Main
            </Button>
            <Button variant="coral" onClick={() => navigate('/game')}>
              Ya, Keluar
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertTriangle size={36} color="var(--color-coral)" />
          <p style={{ margin: 0, color: 'var(--color-text)' }}>
            Progres game ini belum selesai. Kamu bisa mencoba lagi kapan saja!
          </p>
        </div>
      </Modal>
    </div>
  );
}
