import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Star,
  Zap,
  Award,
  CheckCircle2,
  Gamepad2,
  BookOpen,
  Calendar,
  Compass,
  ArrowRight,
  Sparkles,
  FileText
} from 'lucide-react';
import { useEduProgress } from '../hooks/useEduProgress';
import { quizList } from '../data/questions/quizData';
import { gamesList } from '../data/games/gamesData';
import { achievements } from '../data/achievements';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { CertificateModal } from '../components/features/CertificateModal';
import { getEligibleAchievements } from '../utils/scoring';

export function ProgressPage() {
  const { profile, progress, history = [] } = useEduProgress();
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const completedQuizzesCount = (progress.completedQuizzes || []).length;
  const completedGamesCount = (progress.completedGames || []).length;
  const totalActivitiesCount = completedQuizzesCount + completedGamesCount;
  const eligibleBadges = getEligibleAchievements(progress, history);
  const unlockedBadgesCount = eligibleBadges.length;
  const totalBadgesCount = achievements.length;

  // Subjects breakdown
  const subjects = [
    { name: 'Matematika', color: '#E6B84E', bg: '#FFF7E6', border: '#F4D07E' },
    { name: 'Bahasa Indonesia', color: '#8D80C9', bg: '#F2EFFB', border: '#B8AEE2' },
    { name: 'Bahasa Inggris', color: '#2875B8', bg: '#EBF4FC', border: '#7FB2DF' },
    { name: 'IPA & Sains', color: '#3E9568', bg: '#E8F6EE', border: '#83C8A3' },
    { name: 'Pengetahuan Umum', color: '#E9816F', bg: '#FDEFE9', border: '#F3B4A8' }
  ];

  const subjectProgress = subjects.map((sub) => {
    const totalInSubject = quizList.filter(
      (q) => q.subject.toLowerCase().includes(sub.name.toLowerCase()) || sub.name.toLowerCase().includes(q.subject.toLowerCase())
    ).length;
    const completedInSubject = quizList.filter(
      (q) =>
        (progress.completedQuizzes || []).includes(q.id) &&
        (q.subject.toLowerCase().includes(sub.name.toLowerCase()) || sub.name.toLowerCase().includes(q.subject.toLowerCase()))
    ).length;
    const percent = totalInSubject > 0 ? Math.round((completedInSubject / totalInSubject) * 100) : 0;
    return {
      ...sub,
      total: totalInSubject,
      completed: completedInSubject,
      percent
    };
  });

  const overallQuizPercent =
    quizList.length > 0 ? Math.round((completedQuizzesCount / quizList.length) * 100) : 0;

  return (
    <div className="container anim-slide-up" style={{ maxWidth: '860px', paddingBottom: '48px' }}>
      {/* 1. Header Banner */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '24px'
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 14px 5px 8px',
              background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE9B3 100%)',
              color: '#7A5200',
              border: '1.5px solid #E5B232',
              borderRadius: '12px',
              boxShadow: '0 2px 0 #D49C1E',
              fontSize: '0.86rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.2px',
              marginBottom: '10px'
            }}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '8px',
                backgroundColor: '#E5A823',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 1px 2px rgba(0,0,0,0.12)'
              }}
            >
              <TrendingUp size={13} strokeWidth={2.6} />
            </span>
            <span>Laporan Progres Belajar</span>
          </div>
          <h1 style={{ color: '#205784', margin: 0, fontFamily: 'var(--font-display)' }}>
            Catatan Jejak Petualangan
          </h1>
          <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0 }}>
            Lihat pencapaian, bintang, dan riwayat aktivitas belajar {profile.nickname || 'Penjelajah Cilik'}!
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Button
            variant="primary"
            size="sm"
            icon={FileText}
            onClick={() => setIsCertificateOpen(true)}
          >
            Cetak Piagam Prestasi
          </Button>
          <CharacterAvatar characterId={profile.avatarId || 'kiko'} size={56} animated cheer />
        </div>
      </div>

      {/* 2. Key Metrics 4-Box Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          marginBottom: '26px'
        }}
      >
        {/* Total Bintang */}
        <div
          style={{
            backgroundColor: '#FFF9E6',
            border: '2.5px solid #F6D884',
            boxShadow: '0 4px 0 #E5C362',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFF0B8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px auto'
            }}
          >
            <Star size={24} fill="#FFC857" color="#FFC857" />
          </div>
          <span style={{ fontSize: '0.78rem', color: '#B7791F', fontWeight: 800, textTransform: 'uppercase' }}>
            Total Bintang
          </span>
          <h2 style={{ margin: '4px 0 0 0', color: '#92400E', fontSize: '1.7rem' }}>
            {progress.totalStars || 0}
          </h2>
        </div>

        {/* Total XP */}
        <div
          style={{
            backgroundColor: '#EBF4FC',
            border: '2.5px solid #A8D1F7',
            boxShadow: '0 4px 0 #8BBCEB',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#D1E6FA',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px auto'
            }}
          >
            <Zap size={24} fill="#2875B8" color="#2875B8" />
          </div>
          <span style={{ fontSize: '0.78rem', color: '#205784', fontWeight: 800, textTransform: 'uppercase' }}>
            Total Energi XP
          </span>
          <h2 style={{ margin: '4px 0 0 0', color: '#1B4D73', fontSize: '1.7rem' }}>
            {progress.totalXp || 0}
          </h2>
        </div>

        {/* Aktivitas Selesai */}
        <div
          style={{
            backgroundColor: '#EBF8F0',
            border: '2.5px solid #A3E3BC',
            boxShadow: '0 4px 0 #82CFA1',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#C8F0D9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px auto'
            }}
          >
            <CheckCircle2 size={24} color="#2D8A58" />
          </div>
          <span style={{ fontSize: '0.78rem', color: '#236E46', fontWeight: 800, textTransform: 'uppercase' }}>
            Aktivitas Tuntas
          </span>
          <h2 style={{ margin: '4px 0 0 0', color: '#1A5334', fontSize: '1.7rem' }}>
            {totalActivitiesCount}
          </h2>
        </div>

        {/* Lencana Diperoleh */}
        <div
          style={{
            backgroundColor: '#F3EFFC',
            border: '2.5px solid #CDBDF3',
            boxShadow: '0 4px 0 #B39FE0',
            borderRadius: '16px',
            padding: '16px',
            textAlign: 'center'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#E1D5F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 8px auto'
            }}
          >
            <Award size={24} color="#6C53B5" />
          </div>
          <span style={{ fontSize: '0.78rem', color: '#563E9B', fontWeight: 800, textTransform: 'uppercase' }}>
            Lencana Koleksi
          </span>
          <h2 style={{ margin: '4px 0 0 0', color: '#442F7F', fontSize: '1.7rem' }}>
            {unlockedBadgesCount} / {totalBadgesCount}
          </h2>
        </div>
      </div>

      {/* 3. Persentase Penyelesaian Materi */}
      <Card
        style={{
          padding: '24px',
          marginBottom: '26px',
          border: '3px solid #E2D9CC',
          boxShadow: '0 5px 0 #D5C9B8',
          borderRadius: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h3 style={{ margin: 0, color: '#205784', fontSize: '1.15rem' }}>
              Persentase Penyelesaian Materi Kuis
            </h3>
            <span style={{ fontSize: '0.85rem', color: '#718096' }}>
              {completedQuizzesCount} dari {quizList.length} kuis modul tuntas ({overallQuizPercent}%)
            </span>
          </div>
          <Link to="/kuis" style={{ textDecoration: 'none' }}>
            <Button variant="secondary" size="sm" icon={BookOpen}>
              Buka Katalog Kuis
            </Button>
          </Link>
        </div>

        {/* Global Progress Bar */}
        <div
          style={{
            height: '14px',
            backgroundColor: '#EBE5D8',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '22px'
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.min(100, Math.max(0, overallQuizPercent))}%`,
              backgroundColor: '#2875B8',
              borderRadius: '999px',
              transition: 'width 0.4s ease'
            }}
          />
        </div>

        {/* Per-Subject Breakdown List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {subjectProgress.map((sub) => (
            <div
              key={sub.name}
              style={{
                backgroundColor: sub.bg,
                border: `2px solid ${sub.border}`,
                borderRadius: '14px',
                padding: '12px 16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <strong style={{ fontSize: '0.92rem', color: '#205784' }}>{sub.name}</strong>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: sub.color }}>
                  {sub.completed} / {sub.total} Selesai ({sub.percent}%)
                </span>
              </div>
              <div
                style={{
                  height: '8px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '999px',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${Math.min(100, Math.max(0, sub.percent))}%`,
                    backgroundColor: sub.color,
                    borderRadius: '999px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 4. Riwayat Aktivitas Belajar Nyata */}
      <Card
        style={{
          padding: '24px',
          border: '3px solid #E2D9CC',
          boxShadow: '0 5px 0 #D5C9B8',
          borderRadius: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ margin: 0, color: '#205784', fontSize: '1.15rem' }}>
            Riwayat Aktivitas Belajar
          </h3>
          <span style={{ fontSize: '0.85rem', color: '#718096' }}>
            {history.length} Catatan Tersimpan
          </span>
        </div>

        {history && history.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {history.map((item, idx) => {
              const formattedDate = item.timestamp
                ? new Date(item.timestamp).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                : 'Baru saja';

              return (
                <div
                  key={item.id || idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    padding: '12px 16px',
                    backgroundColor: '#FFFDF9',
                    border: '2px solid #E8E2D8',
                    borderRadius: '14px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: item.type === 'game' ? '#FFF5DD' : '#E8F3FF',
                        border: `1.5px solid ${item.type === 'game' ? '#F6E19F' : '#B9DCFD'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.type === 'game' ? '#B7791F' : '#2875B8'
                      }}
                    >
                      {item.type === 'game' ? <Gamepad2 size={20} /> : <BookOpen size={20} />}
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.92rem', color: '#205784', display: 'block' }}>
                        {item.title || item.quizTitle || item.gameTitle || 'Tantangan Belajar'}
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: '#718096', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} />
                        {formattedDate} • Skor: {item.score !== undefined ? `${item.score}%` : 'Selesai'}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {item.starsEarned > 0 && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: '#B7791F',
                          backgroundColor: '#FFF5DD',
                          padding: '3px 8px',
                          borderRadius: '8px'
                        }}
                      >
                        <Star size={13} fill="#FFC857" color="#FFC857" />
                        +{item.starsEarned}
                      </span>
                    )}
                    {item.xpEarned > 0 && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: '#205784',
                          backgroundColor: '#E8F3FF',
                          padding: '3px 8px',
                          borderRadius: '8px'
                        }}
                      >
                        <Zap size={13} fill="#2875B8" color="#2875B8" />
                        +{item.xpEarned} XP
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State Ramah Anak */
          <div
            style={{
              padding: '36px 20px',
              textAlign: 'center',
              backgroundColor: '#FFFDF9',
              border: '2.5px dashed #E2D9CC',
              borderRadius: '16px'
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <Compass size={48} color="#2875B8" style={{ margin: '0 auto' }} />
            </div>
            <h4 style={{ margin: '0 0 6px 0', color: '#205784', fontSize: '1.1rem' }}>
              Ayo Mulai Petualangan Pertamamu!
            </h4>
            <p style={{ margin: '0 0 18px 0', color: '#718096', fontSize: '0.9rem', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>
              Kamu belum memiliki catatan aktivitas. Selesaikan kuis di peta atau mainkan mini-game seru untuk mengumpulkan bintang pertamamu!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Link to="/peta" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="sm" icon={Compass}>
                  Jelajahi Peta 2D
                </Button>
              </Link>
              <Link to="/kuis" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" size="sm" icon={BookOpen}>
                  Mulai Kuis
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Card>

      {/* Printable / Downloadable Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        profile={profile}
        progress={progress}
      />
    </div>
  );
}
