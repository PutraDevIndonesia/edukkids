import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  Star,
  Zap,
  RotateCcw,
  Compass,
  Award,
  AlertTriangle,
  Play,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { quizList } from '../data/questions/quizData';
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
import { speechService } from '../utils/speech';

export function QuizPlayPage() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { progress, updateProgress, recordActivity, settings } = useEduProgress();

  const quiz = quizList.find((q) => q.id === quizId);

  // Flow states: 'intro' | 'playing' | 'completed'
  const [gameState, setGameState] = useState('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // array of { questionId, selectedId, isCorrect }
  const [showExitModal, setShowExitModal] = useState(false);
  const [newBadges, setNewBadges] = useState([]);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  // If quiz not found
  if (!quiz) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <CharacterAvatar characterId="kiko" size={80} />
        <h2 style={{ marginTop: '16px', color: 'var(--color-primary-dark)' }}>Kuis Tidak Ditemukan</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
          Kuis yang kamu cari mungkin belum tersedia atau sedang dipersiapkan oleh para sahabat EduKids.
        </p>
        <Link to="/kuis">
          <Button variant="primary">Kembali ke Katalog Kuis</Button>
        </Link>
      </div>
    );
  }

  const currentQuestion = quiz?.questions?.[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === (quiz?.questions?.length || 1) - 1;

  // Auto-read question prompt if auto narration is enabled in settings
  useEffect(() => {
    if (gameState === 'playing' && settings?.autoNarrationEnabled && currentQuestion?.prompt) {
      const timer = setTimeout(() => {
        speechService.speak(currentQuestion.prompt);
      }, 400);
      return () => {
        clearTimeout(timer);
        speechService.stop();
      };
    }
    return () => speechService.stop();
  }, [gameState, currentQuestionIndex, settings?.autoNarrationEnabled]);

  // Handle option click
  const handleSelectOption = (optionId) => {
    if (isAnswerSubmitted) return;
    soundFx.playPop();
    setSelectedOptionId(optionId);
  };

  // Submit current answer
  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      soundFx.playCorrect();
    } else {
      soundFx.playIncorrect();
    }
    setIsAnswerSubmitted(true);

    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        prompt: currentQuestion.prompt,
        selectedOptionId,
        correctOptionId: currentQuestion.correctOptionId,
        explanation: currentQuestion.explanation,
        options: currentQuestion.options,
        isCorrect
      }
    ]);
  };

  // Next question or finish
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    }
  };

  // Calculate final results and persist once
  const finishQuiz = () => {
    soundFx.playCelebration();
    setTimeout(() => soundFx.playStar(), 300);
    setGameState('completed');
  };

  useEffect(() => {
    if (gameState === 'completed' && !sessionCompleted && userAnswers.length === quiz.questions.length) {
      const correctCount = userAnswers.filter((a) => a.isCorrect).length;
      const result = calculateScore(correctCount, quiz.questions.length);

      const activityRecord = {
        id: `quiz-${quiz.id}-${Date.now()}`,
        activityId: quiz.id,
        activityTitle: quiz.title,
        activityType: 'quiz',
        subject: quiz.subject,
        grade: quiz.grade,
        score: result.score,
        maxScore: result.maxScore,
        correctAnswers: result.correctCount,
        totalQuestions: quiz.questions.length,
        percentage: result.percentage,
        stars: result.stars,
        xpEarned: result.xpEarned,
        coinsEarned: result.coinsEarned,
        completedAt: new Date().toISOString()
      };

      // Record activity to history
      recordActivity(activityRecord);

      // Check badges
      const unlockedBadges = evaluateAchievements(progress, activityRecord);
      setNewBadges(unlockedBadges);

      // Update progress
      const completedList = new Set(progress.completedQuizzes || []);
      completedList.add(quiz.id);

      const currentAchievements = new Set(progress.achievements || []);
      unlockedBadges.forEach((b) => currentAchievements.add(b));

      updateProgress({
        totalXp: (progress.totalXp || 0) + result.xpEarned,
        totalStars: (progress.totalStars || 0) + result.stars,
        totalCoins: (progress.totalCoins || 0) + result.coinsEarned,
        completedQuizzes: Array.from(completedList),
        achievements: Array.from(currentAchievements)
      });

      setSessionCompleted(true);
    }
  }, [gameState, sessionCompleted, userAnswers, quiz, progress, recordActivity, updateProgress]);

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setUserAnswers([]);
    setSessionCompleted(false);
    setNewBadges([]);
    setGameState('playing');
  };

  // ===================== INTRO SCREEN =====================
  if (gameState === 'intro') {
    return (
      <div className="container" style={{ maxWidth: '640px', padding: '40px 20px' }}>
        <Card style={{ textAlign: 'center', padding: '36px 24px', borderTop: '8px solid var(--color-primary)' }}>
          <div style={{ marginBottom: '16px' }}>
            <CharacterAvatar characterId={quiz.characterId} size={90} />
          </div>

          <Badge variant="primary" style={{ marginBottom: '12px' }}>
            {quiz.subject} • Kelas {quiz.grade}
          </Badge>

          <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '1.8rem', marginBottom: '12px' }}>
            {quiz.title}
          </h1>

          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {quiz.description}
          </p>

          <div
            style={{
              backgroundColor: 'var(--color-surface-muted)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '28px',
              border: '1.5px solid var(--color-border)'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>JUMLAH SOAL</span>
              <h3 style={{ margin: 0, color: 'var(--color-text)' }}>{quiz.questions.length} Butir</h3>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>ESTIMASI</span>
              <h3 style={{ margin: 0, color: 'var(--color-text)' }}>{quiz.estimatedTime}</h3>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>HADIAH XP</span>
              <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>+{quiz.rewardXp} XP</h3>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
            <Button variant="secondary" onClick={() => navigate('/kuis')}>
              Kembali
            </Button>
            <Button
              variant="primary"
              size="lg"
              icon={Play}
              onClick={() => {
                setGameState('playing');
              }}
            >
              Mulai Kuis Sekarang!
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // ===================== COMPLETED RESULTS SCREEN =====================
  if (gameState === 'completed') {
    const correctCount = userAnswers.filter((a) => a.isCorrect).length;
    const finalScore = calculateScore(correctCount, quiz.questions.length);

    return (
      <div className="container anim-slide-up" style={{ maxWidth: '680px', padding: '30px 20px' }}>
        <CelebrationEffect active={true} duration={4000} />
        <Card className="interactive-card" style={{ textAlign: 'center', padding: '36px 24px', marginBottom: '24px' }}>
          <div className="anim-pop" style={{ marginBottom: '16px' }}>
            <CharacterAvatar characterId={quiz.characterId} size={84} cheer={true} />
          </div>

          <Badge variant="success" icon={Sparkles} style={{ marginBottom: '8px' }} className="interactive-badge">
            Kuis Berhasil Diselesaikan!
          </Badge>

          <h1 style={{ color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
            {finalScore.percentage >= 70 ? 'Luar Biasa, Penjelajah Hebat!' : 'Semangat Belajar yang Bagus!'}
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
            Kamu telah menyelesaikan {quiz.title} dengan penuh ketekunan.
          </p>

          {/* Stars display with pop animation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
            {[1, 2, 3].map((starIdx) => (
              <div
                key={starIdx}
                className={starIdx <= finalScore.stars ? 'anim-star-burst' : ''}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: starIdx <= finalScore.stars ? 'var(--color-warning-soft)' : 'var(--color-surface-muted)',
                  border: `2px solid ${starIdx <= finalScore.stars ? '#E6B84E' : 'var(--color-border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animationDelay: `${starIdx * 0.2}s`
                }}
              >
                <Star
                  size={36}
                  fill={starIdx <= finalScore.stars ? '#E6B84E' : 'none'}
                  color={starIdx <= finalScore.stars ? '#E6B84E' : '#B0B8C0'}
                />
              </div>
            ))}
          </div>

          {/* Score breakdown metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}
          >
            <div style={{ padding: '12px', backgroundColor: 'var(--color-surface-muted)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>SKOR AKHIR</span>
              <h3 style={{ margin: 0, color: 'var(--color-primary-dark)' }}>{finalScore.score} Poin</h3>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-success-soft)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: '#216a44', fontWeight: 700 }}>BENAR</span>
              <h3 style={{ margin: 0, color: 'var(--color-success)' }}>{finalScore.correctCount} Soal</h3>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-coral-soft)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: '#b24a38', fontWeight: 700 }}>PERLU BELAJAR</span>
              <h3 style={{ margin: 0, color: 'var(--color-coral)' }}>{finalScore.wrongCount} Soal</h3>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'var(--color-primary-soft)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>XP DIDAPAT</span>
              <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>+{finalScore.xpEarned} XP</h3>
            </div>
          </div>

          {/* New Badge Unlocked Notice */}
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
                  🎉 Lencana Baru Terbuka!
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#997316' }}>
                  Hebat! Kamu telah memenuhi kriteria lencana baru di album prestasimu.
                </span>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <Button variant="primary" icon={RotateCcw} onClick={handleRestart}>
              Coba Lagi
            </Button>
            <Link to="/kuis">
              <Button variant="secondary" icon={HelpCircle}>
                Pilih Kuis Lain
              </Button>
            </Link>
            <Link to="/peta">
              <Button variant="secondary" icon={Compass}>
                Kembali ke Peta
              </Button>
            </Link>
          </div>
        </Card>

        {/* QUESTION REVIEW ACCORDION */}
        <Card>
          <h3 style={{ marginBottom: '16px', color: 'var(--color-text)' }}>
            Pembahasan Soal & Jawaban
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {userAnswers.map((ans, idx) => {
              const selectedOpt = ans.options.find((o) => o.id === ans.selectedOptionId);
              const correctOpt = ans.options.find((o) => o.id === ans.correctOptionId);

              return (
                <div
                  key={ans.questionId}
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: ans.isCorrect ? 'var(--color-success-soft)' : 'var(--color-coral-soft)',
                    border: `1.5px solid ${ans.isCorrect ? '#c2ebcb' : '#fad2c9'}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    {ans.isCorrect ? (
                      <CheckCircle size={20} color="var(--color-success)" />
                    ) : (
                      <XCircle size={20} color="var(--color-coral)" />
                    )}
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>
                      Soal #{idx + 1}: {ans.prompt}
                    </strong>
                  </div>

                  <p style={{ margin: '4px 0 6px 0', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    Jawabanmu:{' '}
                    <strong>{selectedOpt ? selectedOpt.text : '-'}</strong>{' '}
                    {ans.isCorrect ? ' (Tepat)' : ` • Jawaban benar: ${correctOpt?.text}`}
                  </p>

                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      backgroundColor: '#FFFFFF',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid var(--color-border)'
                    }}
                  >
                    💡 <strong>Penjelasan:</strong> {ans.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    );
  }

  // ===================== PLAYING QUESTION SCREEN =====================
  return (
    <div className="container" style={{ maxWidth: '720px', padding: '20px' }}>
      {/* Quiz Header Bar */}
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
          Soal {currentQuestionIndex + 1} dari {quiz.questions.length}
        </span>

        <Badge variant="primary">{quiz.subject}</Badge>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={quiz.questions.length}
        className="anim-slide-up"
        height={10}
      />

      {/* Question Card */}
      <Card
        key={currentQuestionIndex}
        className="anim-slide-up interactive-card"
        style={{ marginTop: '20px', padding: '28px', minHeight: '340px' }}
      >
        {/* Character Guide Voice with live reaction */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <CharacterAvatar
            characterId={quiz.characterId}
            size={48}
            cheer={isAnswerSubmitted && selectedOptionId === currentQuestion.correctOptionId}
            animated
          />
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
              Sahabat Pembimbing:
            </span>
            <p style={{ margin: 0, fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>
              {isAnswerSubmitted
                ? selectedOptionId === currentQuestion.correctOptionId
                  ? '🌟 Hebat sekali! Jawabanmu tepat dan cermat!'
                  : '🌱 Tetap semangat ya, mari pelajari penjelasannya!'
                : 'Bacalah pertanyaan dengan cermat ya!'}
            </p>
          </div>
        </div>

        {/* Prompt with Audio Narration Reader Button */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '14px',
            marginBottom: '24px'
          }}
        >
          <h2 style={{ fontSize: '1.35rem', margin: 0, color: 'var(--color-text)', lineHeight: 1.4, flex: '1 1 320px' }}>
            {currentQuestion.prompt}
          </h2>
          <AudioReaderButton
            textToRead={`${currentQuestion.prompt}. Pilihan: ${currentQuestion.options.map((o) => `${o.id.toUpperCase()}, ${o.text}`).join('. ')}`}
          />
        </div>

        {/* Options Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            const isCorrect = opt.id === currentQuestion.correctOptionId;

            let bg = '#FFFFFF';
            let border = '2px solid var(--color-border)';
            let textColor = 'var(--color-text)';

            if (isAnswerSubmitted) {
              if (isCorrect) {
                bg = 'var(--color-success-soft)';
                border = '2px solid var(--color-success)';
                textColor = '#216a44';
              } else if (isSelected && !isCorrect) {
                bg = 'var(--color-coral-soft)';
                border = '2px solid var(--color-coral)';
                textColor = '#b24a38';
              }
            } else if (isSelected) {
              bg = 'var(--color-primary-soft)';
              border = '2px solid var(--color-primary)';
              textColor = 'var(--color-primary-dark)';
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswerSubmitted}
                className="interactive-choice-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: bg,
                  border,
                  color: textColor,
                  fontFamily: 'inherit',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: isAnswerSubmitted ? 'default' : 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-surface-muted)',
                      color: isSelected ? '#FFFFFF' : 'var(--color-text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 800
                    }}
                  >
                    {opt.id.toUpperCase()}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerSubmitted && isCorrect && (
                  <CheckCircle size={22} color="var(--color-success)" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle size={22} color="var(--color-coral)" />
                )}
              </button>
            );
          })}
        </div>

        {/* Answer Feedback Alert & Next Button */}
        {isAnswerSubmitted ? (
          <div className="anim-slide-up" style={{ marginTop: '20px' }}>
            <div
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor:
                  selectedOptionId === currentQuestion.correctOptionId
                    ? 'var(--color-success-soft)'
                    : 'var(--color-warning-soft)',
                border: `1.5px solid ${
                  selectedOptionId === currentQuestion.correctOptionId
                    ? '#c2ebcb'
                    : '#f6e19f'
                }`,
                marginBottom: '20px'
              }}
            >
              <strong style={{ fontSize: '1rem', color: 'var(--color-text)', display: 'block', marginBottom: '4px' }}>
                {selectedOptionId === currentQuestion.correctOptionId
                  ? '✨ Hebat! Jawabanmu Benar!'
                  : '💡 Belum Tepat. Yuk Perhatikan Penjelasannya:'}
              </strong>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text)' }}>
                {currentQuestion.explanation}
              </p>
            </div>

            <NextChallengeButton
              onClick={handleNextQuestion}
              isLast={isLastQuestion}
              nextLabel="Lanjut ke Tantangan Berikutnya"
              lastLabel="Lihat Hasil Akhir Kuis"
            />
          </div>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmitAnswer}
            disabled={!selectedOptionId}
            style={{ width: '100%' }}
          >
            Kunci Jawaban
          </Button>
        )}
      </Card>

      {/* Confirmation Modal to Quit Quiz */}
      <Modal
        isOpen={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Ingin Keluar dari Kuis?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setShowExitModal(false)}>
              Lanjutkan Kuis
            </Button>
            <Button variant="coral" onClick={() => navigate('/kuis')}>
              Ya, Keluar
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <AlertTriangle size={36} color="var(--color-coral)" />
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text)' }}>
            Progres pengerjaan soal saat ini tidak akan disimpan jika kamu keluar sebelum kuis selesai.
          </p>
        </div>
      </Modal>
    </div>
  );
}
