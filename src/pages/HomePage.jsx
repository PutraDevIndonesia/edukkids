import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Sparkles,
  Star,
  Zap,
  Play,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  BookOpen
} from 'lucide-react';
import { useEduProgress } from '../hooks/useEduProgress';
import { useTimeTheme } from '../hooks/useTimeTheme';
import { soundFx } from '../utils/soundFx';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { CharacterGuide } from '../components/characters/CharacterGuide';
import { MimiCrystalMascot } from '../components/mascots/MimiCrystalMascot';
import { BimoMapMascot } from '../components/mascots/BimoMapMascot';
import { AdventureGateHero } from '../components/mascots/AdventureGateHero';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { worlds } from '../data/worlds';
import { quizList } from '../data/questions/quizData';
import { DailyRewardChest } from '../components/gamification/DailyRewardChest';
import { getEligibleAchievements } from '../utils/scoring';

export function HomePage() {
  const { profile, progress, history } = useEduProgress();
  const { themeId, config: timeTheme, isAuto, setSimulatedTheme } = useTimeTheme();
  const [activeMascotId, setActiveMascotId] = useState(null);

  // Daily challenge sample
  const dailyQuiz = quizList[0];

  // Last played activity or recommendation
  const lastActivity = history.length > 0 ? history[0] : null;

  return (
    <div className="home-page-container anim-slide-up">
      <div className="container">
        {/* 1. HERO STORYBOOK SECTION */}
        <section
          className={`stagger-1 theme-${themeId}`}
          style={{
            background: timeTheme.heroBg,
            border: `2px solid ${timeTheme.heroBorder}`,
            borderRadius: '24px',
            padding: 'clamp(24px, 4vw, 36px)',
            marginBottom: 'var(--space-2xl)',
            boxShadow: timeTheme.heroShadow,
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 1.2s ease, border-color 1.2s ease, box-shadow 1.2s ease'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '28px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {/* Left text column */}
            <div style={{ flex: '1 1 420px', maxWidth: '560px' }}>
              <h1
                style={{
                  color: '#205784',
                  fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
                  lineHeight: 1.2,
                  marginBottom: '10px',
                  fontFamily: 'var(--font-display)'
                }}
              >
                {timeTheme.greeting}, {profile.nickname}!
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#718096',
                  marginBottom: '22px',
                  lineHeight: 1.6
                }}
              >
                {timeTheme.subtitle} — {timeTheme.description}. Selesaikan misi teka-teki dan kumpulkan bintang kejutan bersama sahabat EduKids!
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link to="/kuis" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="lg" icon={Play}>
                    Mulai Bermain
                  </Button>
                </Link>
                <Link to="/peta" style={{ textDecoration: 'none' }}>
                  <Button variant="secondary" size="lg" icon={Compass}>
                    Jelajahi Peta Dunia
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Storybook Gate Illustration */}
            <div
              style={{
                flex: '1 1 460px',
                maxWidth: '540px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '300px'
              }}
            >
              <AdventureGateHero theme={themeId} />

              {/* Time Theme Controls & Grade Badge */}
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%'
                }}
              >
                {/* Simulation / Quick Preview switcher for Testing (Prompt 19 Section 9) */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                    padding: '3px 6px',
                    borderRadius: '999px',
                    border: '1.5px solid #E8E2D8',
                    boxShadow: '0 2px 6px rgba(48, 60, 74, 0.04)'
                  }}
                  title="Simulasi suasana waktu (Waktu otomatis mengikuti jam lokal perangkat)"
                >
                  <button
                    type="button"
                    onClick={() => { soundFx.playPop(); setSimulatedTheme(null); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: isAuto ? '#205784' : 'transparent',
                      color: isAuto ? '#FFFFFF' : '#718096',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    Auto
                  </button>
                  <button
                    type="button"
                    onClick={() => { soundFx.playPop(); setSimulatedTheme('morning'); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: !isAuto && themeId === 'morning' ? '#E5A823' : 'transparent',
                      color: !isAuto && themeId === 'morning' ? '#FFFFFF' : '#718096',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    Pagi
                  </button>
                  <button
                    type="button"
                    onClick={() => { soundFx.playPop(); setSimulatedTheme('day'); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: !isAuto && themeId === 'day' ? '#2875B8' : 'transparent',
                      color: !isAuto && themeId === 'day' ? '#FFFFFF' : '#718096',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    Siang
                  </button>
                  <button
                    type="button"
                    onClick={() => { soundFx.playPop(); setSimulatedTheme('evening'); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: !isAuto && themeId === 'evening' ? '#E9816F' : 'transparent',
                      color: !isAuto && themeId === 'evening' ? '#FFFFFF' : '#718096',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    Sore
                  </button>
                  <button
                    type="button"
                    onClick={() => { soundFx.playPop(); setSimulatedTheme('night'); }}
                    style={{
                      padding: '3px 8px',
                      borderRadius: '999px',
                      border: 'none',
                      backgroundColor: !isAuto && themeId === 'night' ? '#1B263B' : 'transparent',
                      color: !isAuto && themeId === 'night' ? '#FFFFFF' : '#718096',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    Malam
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROGRESS SUMMARY METRIC TILES */}
        <section style={{ marginBottom: 'var(--space-2xl)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            <Card className="interactive-card stagger-1" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px', backgroundColor: '#FFFFFF', borderColor: '#F6E2B8' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#FFF5DD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B7791F'
                }}
              >
                <Star size={26} fill="#FFC857" color="#FFC857" />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 700 }}>Total Bintang</span>
                <h3 style={{ margin: 0, color: '#344256', fontSize: '1.4rem' }}>{progress.totalStars}</h3>
              </div>
            </Card>

            <Card className="interactive-card stagger-2" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px', backgroundColor: '#FFFFFF', borderColor: '#CDE5FC' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#E8F3FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2875B8'
                }}
              >
                <Zap size={26} fill="#2875B8" color="#2875B8" />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 700 }}>XP Pengalaman</span>
                <h3 style={{ margin: 0, color: '#344256', fontSize: '1.4rem' }}>{progress.totalXp} XP</h3>
              </div>
            </Card>

            <Card className="interactive-card stagger-3" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px', backgroundColor: '#FFFFFF', borderColor: '#C8EBD3' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#E5F5EA',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3E9568'
                }}
              >
                <CheckCircle2 size={26} />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 700 }}>Kuis Tuntas</span>
                <h3 style={{ margin: 0, color: '#344256', fontSize: '1.4rem' }}>
                  {(progress.completedQuizzes || []).length}
                </h3>
              </div>
            </Card>

            <Card className="interactive-card stagger-4" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px', backgroundColor: '#FFFFFF', borderColor: '#E5DEF9' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#F0ECFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8D80C9'
                }}
              >
                <Award size={26} />
              </div>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 700 }}>Lencana Diraih</span>
                <h3 style={{ margin: 0, color: '#344256', fontSize: '1.4rem' }}>
                  {getEligibleAchievements(progress, history || []).length} / 6
                </h3>
              </div>
            </Card>
          </div>
        </section>

        {/* DAILY MYSTERY CHEST */}
        <section style={{ marginBottom: '28px' }}>
          <DailyRewardChest />
        </section>

        {/* 3. TWO LIVING STORYBOOK CARDS (DAILY CHALLENGE + JOURNEY GUIDE) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px',
            marginBottom: 'var(--space-2xl)'
          }}
        >
          {/* A. DAILY CHALLENGE CARD WITH MIMI CRYSTAL MASCOT */}
          <div
            className="mission-card-mimi interactive-card stagger-2"
            style={{
              backgroundColor: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF5 100%)',
              border: '2px solid #F5E6C8',
              borderTop: '8px solid #FFC857',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 14px rgba(229, 168, 35, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '5px 12px 5px 8px',
                    background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE9B3 100%)',
                    color: '#7A5200',
                    border: '1.5px solid #E5B232',
                    borderRadius: '12px',
                    boxShadow: '0 2px 0 #D49C1E',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.2px'
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '8px',
                      backgroundColor: '#E5A823',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.12)'
                    }}
                  >
                    <Star size={12} fill="#FFFFFF" strokeWidth={1.5} />
                  </span>
                  <span>Misi Harian Spesial</span>
                </div>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: '#855800',
                    fontWeight: 800,
                    backgroundColor: '#FFF4D4',
                    padding: '4px 11px',
                    borderRadius: '999px',
                    border: '1.5px solid #F0C760',
                    boxShadow: '0 1px 0 #E2B23E'
                  }}
                >
                  +{dailyQuiz.rewardXp} XP Bonus
                </span>
              </div>

              <div
                className="mission-inner-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ flex: '1 1 200px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#205784', fontSize: '1.25rem' }}>
                    {dailyQuiz.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#718096', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                    {dailyQuiz.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: '#344256', fontWeight: 700 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <BookOpen size={16} color="#2875B8" /> {dailyQuiz.questions.length} Soal
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={16} color="#2875B8" /> {dailyQuiz.estimatedTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={16} fill="#FFC857" color="#FFC857" /> 3 Bintang
                    </span>
                  </div>
                </div>

                {/* Living Mimi Mascot */}
                <div style={{ flexShrink: 0 }}>
                  <MimiCrystalMascot size={150} />
                </div>
              </div>
            </div>

            <Link to={`/kuis/${dailyQuiz.id}`} style={{ textDecoration: 'none', marginTop: '12px' }}>
              <Button variant="warning" icon={Play} style={{ width: '100%' }}>
                Mulai Misi Tantangan
              </Button>
            </Link>
          </div>

          {/* B. JOURNEY GUIDE CARD WITH BIMO TREASURE MAP MASCOT */}
          <div
            className="mission-card-bimo interactive-card stagger-3"
            style={{
              backgroundColor: '#FFFFFF',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F9FF 100%)',
              border: '2px solid #D6E8FA',
              borderTop: '8px solid #2875B8',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 4px 14px rgba(40, 117, 184, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '5px 12px 5px 8px',
                    background: 'linear-gradient(135deg, #FFF9E6 0%, #FFE9B3 100%)',
                    color: '#7A5200',
                    border: '1.5px solid #E5B232',
                    borderRadius: '12px',
                    boxShadow: '0 2px 0 #D49C1E',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.2px'
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '8px',
                      backgroundColor: '#E5A823',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.12)'
                    }}
                  >
                    <Compass size={13} strokeWidth={2.6} />
                  </span>
                  <span>{lastActivity ? 'Lanjutkan Belajar' : 'Peta Petualangan'}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.82rem',
                    color: '#855800',
                    fontWeight: 800,
                    backgroundColor: '#FFF4D4',
                    padding: '4px 11px',
                    borderRadius: '999px',
                    border: '1.5px solid #F0C760',
                    boxShadow: '0 1px 0 #E2B23E'
                  }}
                >
                  Rekomendasi Kelas {profile.grade}
                </span>
              </div>

              <div
                className="mission-inner-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  marginBottom: '16px'
                }}
              >
                <div style={{ flex: '1 1 200px' }}>
                  {lastActivity ? (
                    <div>
                      <h3 style={{ margin: '0 0 8px 0', color: '#205784', fontSize: '1.25rem' }}>
                        Aktivitas Terakhir: {lastActivity.activityTitle || 'Kuis Belajar'}
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#718096', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                        Kamu meraih skor <strong>{lastActivity.score} poin</strong> ({lastActivity.correctAnswers}/{lastActivity.totalQuestions} benar) dengan <strong>{lastActivity.stars} bintang</strong>!
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 style={{ margin: '0 0 8px 0', color: '#205784', fontSize: '1.25rem' }}>
                        Langkah Pertama Petualanganmu!
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#718096', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                        Bimo siap memandu petualangan! Pilih pulau ilmu di peta dan kumpulkan bintang pertamamu hari ini!
                      </p>
                    </div>
                  )}
                </div>

                {/* Living Bimo Mascot */}
                <div style={{ flexShrink: 0 }}>
                  <BimoMapMascot size={150} isCompleted={Boolean(lastActivity)} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              {lastActivity ? (
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link to="/kuis" style={{ flex: 1, textDecoration: 'none' }}>
                    <Button variant="secondary" icon={Play} style={{ width: '100%' }}>
                      Coba Kuis Lain
                    </Button>
                  </Link>
                  <Link to="/game" style={{ flex: 1, textDecoration: 'none' }}>
                    <Button variant="primary" icon={ArrowRight} style={{ width: '100%' }}>
                      Main Game
                    </Button>
                  </Link>
                </div>
              ) : (
                <Link to="/peta" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" icon={Compass} style={{ width: '100%' }}>
                    Buka Peta & Pilih Lokasi
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* 4. WORLD PREVIEW SECTION (STORYBOOK CHAPTER CARDS) */}
        <section style={{ marginBottom: 'var(--space-2xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h2 style={{ color: '#205784', margin: 0, fontFamily: 'var(--font-display)' }}>
                Dunia Petualangan EduKids
              </h2>
              <p style={{ color: '#718096', fontSize: '0.92rem', margin: 0 }}>
                Kunjungi lima pulau belajar yang dipandu oleh sahabat istimewa
              </p>
            </div>
            <Link
              to="/peta"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 800,
                fontSize: '0.95rem',
                color: '#2875B8',
                textDecoration: 'none'
              }}
            >
              Lihat Peta Utuh <ArrowRight size={18} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {worlds.map((w, idx) => {
              const isLocked = progress.totalStars < w.minStarsToUnlock;
              const isHovered = activeMascotId === w.id;

              return (
                <Link
                  key={w.id}
                  to={`/peta?world=${w.id}`}
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={() => setActiveMascotId(w.id)}
                  onMouseLeave={() => setActiveMascotId(null)}
                >
                  <Card
                    className={`interactive-card stagger-${(idx % 5) + 1}`}
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '22px 16px',
                      backgroundColor: w.bgColor,
                      borderColor: w.themeColor,
                      borderTop: `6px solid ${w.themeColor}`,
                      opacity: isLocked ? 0.75 : 1
                    }}
                  >
                    <div style={{ marginBottom: '12px' }}>
                      <CharacterAvatar
                        characterId={w.characterId}
                        size={64}
                        cheer={isHovered}
                        animated
                      />
                    </div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px', color: '#344256' }}>
                      {w.name}
                    </h3>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: w.themeColor, marginBottom: '8px' }}>
                      {w.subject}
                    </span>
                    <p style={{ fontSize: '0.84rem', color: '#718096', margin: '0 0 12px 0', flex: 1, lineHeight: 1.4 }}>
                      {w.description}
                    </p>
                    <div>
                      {isLocked ? (
                        <span style={{ fontSize: '0.78rem', color: '#718096', fontWeight: 700 }}>
                          🔒 Butuh {w.minStarsToUnlock} Bintang
                        </span>
                      ) : (
                        <span style={{ fontSize: '0.84rem', color: '#205784', fontWeight: 800 }}>
                          Kunjungi Lokasi →
                        </span>
                      )}
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 5. GUIDANCE BANNER */}
        <CharacterGuide
          characterId="kiko"
          speech={`"Ingat ya ${profile.nickname}, setiap kuis yang kamu selesaikan memberikan poin XP untuk menaikkan peringkatmu di papan juara. Teruslah mencoba!"`}
          mood="encouraging"
        />
      </div>

      {/* Responsive adjustments for mobile mascot stacking */}
      <style>{`
        @media (max-width: 580px) {
          .mission-inner-row {
            flex-direction: column-reverse !important;
            text-align: center;
          }
          .mission-inner-row div {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
