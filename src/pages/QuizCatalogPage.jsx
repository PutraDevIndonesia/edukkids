import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Filter,
  Play,
  Clock,
  BookOpen,
  Zap,
  Star,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { quizList } from '../data/questions/quizData';
import { subjects } from '../data/subjects';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export function QuizCatalogPage() {
  const { progress } = useEduProgress();
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredQuizzes = useMemo(() => {
    return quizList.filter((q) => {
      if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
      if (selectedGrade !== 'all' && q.grade !== Number(selectedGrade)) return false;
      if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;

      const isCompleted = (progress.completedQuizzes || []).includes(q.id);
      if (selectedStatus === 'completed' && !isCompleted) return false;
      if (selectedStatus === 'uncompleted' && isCompleted) return false;

      return true;
    });
  }, [selectedSubject, selectedGrade, selectedDifficulty, selectedStatus, progress.completedQuizzes]);

  const resetFilters = () => {
    setSelectedSubject('all');
    setSelectedGrade('all');
    setSelectedDifficulty('all');
    setSelectedStatus('all');
  };

  return (
    <div className="container anim-slide-up">
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
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
            <HelpCircle size={13} strokeWidth={2.6} />
          </span>
          <span>Tantangan Soal & Kuis</span>
        </div>
        <h1 style={{ color: 'var(--color-primary-dark)', margin: 0 }}>
          Katalog Kuis Pintar
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Pilih mata pelajaran dan kelasmu. Jawab kuis untuk mengasah kemampuan dan meraih bintang emas!
        </p>
      </div>

      {/* FILTER CONTROLS */}
      <Card className="interactive-card stagger-1" style={{ marginBottom: '28px', padding: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Filter size={18} color="var(--color-primary)" />
          <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>Filter Kuis</strong>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '14px'
          }}
        >
          {/* Subject Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '4px' }}>
              Mata Pelajaran
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--color-border)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-text)'
              }}
            >
              <option value="all">Semua Pelajaran</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          {/* Grade Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '4px' }}>
              Kelas SD
            </label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--color-border)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-text)'
              }}
            >
              <option value="all">Semua Kelas</option>
              {[1, 2, 3, 4, 5, 6].map((g) => (
                <option key={g} value={g}>Kelas {g}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '4px' }}>
              Tingkat Kesulitan
            </label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--color-border)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-text)'
              }}
            >
              <option value="all">Semua Tingkat</option>
              <option value="easy">Mudah</option>
              <option value="medium">Sedang</option>
              <option value="hard">Tantangan</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '4px' }}>
              Status Kuis
            </label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid var(--color-border)',
                fontFamily: 'inherit',
                fontSize: '0.9rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--color-text)'
              }}
            >
              <option value="all">Semua Status</option>
              <option value="completed">Sudah Selesai</option>
              <option value="uncompleted">Belum Selesai</option>
            </select>
          </div>
        </div>
      </Card>

      {/* QUIZ GRID OR EMPTY STATE */}
      {filteredQuizzes.length === 0 ? (
        <Card style={{ textAlign: 'center', padding: '48px 20px' }}>
          <CharacterAvatar characterId="kiko" size={80} style={{ margin: '0 auto 16px auto' }} />
          <h3 style={{ color: 'var(--color-text)', marginBottom: '8px' }}>
            Tidak Ada Kuis yang Cocok
          </h3>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
            Coba ubah pilihan filter di atas untuk menemukan kuis seru lainnya.
          </p>
          <Button variant="secondary" onClick={resetFilters}>
            Reset Semua Filter
          </Button>
        </Card>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredQuizzes.map((q, idx) => {
            const isCompleted = (progress.completedQuizzes || []).includes(q.id);

            return (
              <Card
                key={q.id}
                className={`interactive-card stagger-${(idx % 5) + 1}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: isCompleted ? '6px solid var(--color-success)' : '6px solid var(--color-primary)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CharacterAvatar characterId={q.characterId} size={36} />
                      <Badge variant="primary">{q.subject}</Badge>
                    </div>
                    {isCompleted ? (
                      <Badge variant="success" icon={CheckCircle2}>
                        Selesai
                      </Badge>
                    ) : (
                      <Badge variant="warning">
                        Kelas {q.grade}
                      </Badge>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--color-text)' }}>
                    {q.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                    {q.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '14px',
                      fontSize: '0.85rem',
                      color: 'var(--color-text)',
                      marginBottom: '20px'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <BookOpen size={16} color="var(--color-primary)" />
                      {q.questions.length} Soal
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={16} color="var(--color-primary)" />
                      {q.estimatedTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary-dark)', fontWeight: 700 }}>
                      <Zap size={16} fill="#347DB5" color="#347DB5" />
                      +{q.rewardXp} XP
                    </span>
                  </div>
                </div>

                <Link to={`/kuis/${q.id}`} style={{ textDecoration: 'none' }}>
                  <Button
                    variant={isCompleted ? 'secondary' : 'primary'}
                    icon={Play}
                    style={{ width: '100%' }}
                  >
                    {isCompleted ? 'Mainkan Lagi' : 'Mulai Kuis'}
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
