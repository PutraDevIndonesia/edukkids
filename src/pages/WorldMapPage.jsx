import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Compass,
  Lock,
  Unlock,
  Play,
  Gamepad2,
  Star,
  MapPin,
  CheckCircle,
  HelpCircle,
  X,
  Sparkles
} from 'lucide-react';
import { worlds } from '../data/worlds';
import { quizList } from '../data/questions/quizData';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { AdventureWorldMap } from '../components/map/AdventureWorldMap';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { soundFx } from '../utils/soundFx';

export function WorldMapPage() {
  const [searchParams] = useSearchParams();
  const { progress, profile } = useEduProgress();
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'list'

  // If URL has ?world=xyz, select it automatically
  useEffect(() => {
    const worldQuery = searchParams.get('world');
    if (worldQuery) {
      const found = worlds.find((w) => w.id === worldQuery);
      if (found) setSelectedWorld(found);
    }
  }, [searchParams]);

  const unlockedCount = worlds.filter((w) => progress.totalStars >= w.minStarsToUnlock).length;

  return (
    <div className="container" style={{ paddingBottom: '48px' }}>
      {/* 1. HEADER & CONTROLS */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '20px'
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
              <Compass size={13} strokeWidth={2.6} />
            </span>
            <span>Peta Petualangan Belajar</span>
          </div>
          <h1 style={{ color: '#205784', margin: 0, fontFamily: 'var(--font-display)' }}>
            Dunia Belajar EduKids
          </h1>
          <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0 }}>
            Jelajahi setiap pulau dan lokasi belajar. Kumpulkan bintang untuk membuka wilayah baru!
          </p>
        </div>

        {/* View mode toggle */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant={viewMode === 'map' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('map')}
          >
            Tampilan Peta 2D
          </Button>
          <Button
            variant={viewMode === 'list' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            Daftar Wilayah
          </Button>
        </div>
      </div>

      {/* 2. COMPANION GUIDE STRIP */}
      <div
        style={{
          backgroundColor: '#FFFDF9',
          border: '3px solid #E2D9CC',
          borderRadius: '18px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px',
          boxShadow: '0 4px 0 #D5C9B8'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="anim-float">
            <CharacterAvatar characterId="bubu" size={42} />
          </div>
          <div>
            <strong style={{ fontSize: '0.92rem', color: '#205784', display: 'block' }}>
              Bimo si Penjelajah
            </strong>
            <span style={{ fontSize: '0.85rem', color: '#718096' }}>
              "Sentuh atau klik salah satu wilayah di peta untuk membuka pilihan kuis dan mini-game edukasi!"
            </span>
          </div>
        </div>

        {/* Live Explorer Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#FFF5DD',
              border: '2px solid #F59E0B',
              boxShadow: '0 2.5px 0 #D97706',
              padding: '6px 14px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.88rem',
              color: '#B7791F'
            }}
          >
            <Star size={16} fill="#FFC857" color="#FFC857" />
            <span>{progress.totalStars} Bintang</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#E8F3FF',
              border: '2px solid #2875B8',
              boxShadow: '0 2.5px 0 #1D4E89',
              padding: '6px 14px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.88rem',
              color: '#205784'
            }}
          >
            <Unlock size={16} color="#2875B8" />
            <span>{unlockedCount} / 5 Wilayah</span>
          </div>
        </div>
      </div>

      {/* 3. IMMERSIVE 2D MAP VIEW */}
      {viewMode === 'map' && (
        <AdventureWorldMap
          worlds={worlds}
          progress={progress}
          selectedWorld={selectedWorld}
          onSelectWorld={(w) => setSelectedWorld(w)}
          avatarId={profile?.avatarId || 'kiko'}
        />
      )}

      {/* 4. LIST VIEW (FOR EASY SEARCH & ACCESSIBILITY) */}
      {viewMode === 'list' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {worlds.map((w) => {
            const isLocked = progress.totalStars < w.minStarsToUnlock;
            return (
              <Card
                key={w.id}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  backgroundColor: w.bgColor,
                  borderColor: w.themeColor,
                  borderLeft: `8px solid ${w.themeColor}`,
                  boxShadow: '0 3px 10px rgba(48, 60, 74, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CharacterAvatar characterId={w.characterId} size={64} />
                  <div>
                    <h3 style={{ margin: 0, color: '#205784', fontSize: '1.2rem' }}>{w.name}</h3>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: w.themeColor }}>
                      {w.subject} • Dipandu oleh {w.characterName}
                    </span>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#718096' }}>
                      {w.description}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {isLocked ? (
                    <Badge variant="warning" icon={Lock}>
                      Terkunci (Butuh {w.minStarsToUnlock} Bintang)
                    </Badge>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Play}
                      onClick={() => setSelectedWorld(w)}
                    >
                      Buka Aktivitas
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* 5. LOCATION DETAIL MODAL / DRAWER */}
      {selectedWorld && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(32, 87, 132, 0.55)',
            backdropFilter: 'blur(3px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 9999
          }}
          onClick={() => {
            soundFx.playPop();
            setSelectedWorld(null);
          }}
        >
          <div
            className="card-panel anim-pop"
            style={{
              width: '100%',
              maxWidth: '560px',
              padding: '28px',
              backgroundColor: '#FFFFFF',
              border: '3.5px solid #205784',
              borderTop: `10px solid ${selectedWorld.themeColor}`,
              borderRadius: '24px',
              boxShadow: '0 8px 0 rgba(32, 87, 132, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <CharacterAvatar characterId={selectedWorld.characterId} size={64} />
                <div>
                  <h2 style={{ margin: 0, color: '#205784', fontFamily: 'var(--font-display)' }}>
                    {selectedWorld.name}
                  </h2>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: selectedWorld.themeColor }}>
                    {selectedWorld.subject} • Dipandu oleh {selectedWorld.characterName}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  soundFx.playPop();
                  setSelectedWorld(null);
                }}
                aria-label="Tutup jendela lokasi"
                style={{
                  padding: '8px',
                  borderRadius: '12px',
                  backgroundColor: '#FFF9EF',
                  border: '2px solid #E2D9CC',
                  boxShadow: '0 2px 0 #D5C9B8',
                  color: '#718096',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.5 }}>
              {selectedWorld.description}
            </p>

            {/* Check if locked */}
            {progress.totalStars < selectedWorld.minStarsToUnlock ? (
              <div
                style={{
                  backgroundColor: '#FFFDF5',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '2px dashed #F6E19F',
                  textAlign: 'center',
                  marginBottom: '16px'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#FFF5DD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 10px auto',
                    color: '#B7791F'
                  }}
                >
                  <Lock size={26} />
                </div>
                <h4 style={{ margin: '0 0 6px 0', color: '#205784' }}>Gerbang Wilayah Terkunci</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#718096', lineHeight: 1.5 }}>
                  Kamu butuh minimal <strong>{selectedWorld.minStarsToUnlock} bintang</strong> untuk membuka gerbang {selectedWorld.name}.
                  <br />
                  Bintang yang kamu miliki saat ini: <strong>{progress.totalStars} bintang</strong>.
                </p>
              </div>
            ) : (
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '12px', color: '#205784' }}>
                  Pilihan Aktivitas Belajar di Wilayah Ini:
                </h4>

                {/* Quizzes in this world */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {quizList
                    .filter((q) => selectedWorld.quizIds.includes(q.id))
                    .map((q) => (
                      <div
                        key={q.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderRadius: '14px',
                          backgroundColor: '#F8FAFC',
                          border: '2.5px solid #CBD5E1',
                          boxShadow: '0 3px 0 #94A3B8'
                        }}
                      >
                        <div>
                          <strong style={{ fontSize: '0.95rem', color: '#205784', display: 'block' }}>
                            {q.title}
                          </strong>
                          <span style={{ fontSize: '0.82rem', color: '#718096' }}>
                            Kelas {q.grade} • {q.questions.length} Soal • +{q.rewardXp} XP
                          </span>
                        </div>
                        <Link to={`/kuis/${q.id}`} onClick={() => soundFx.playPop()} style={{ textDecoration: 'none' }}>
                          <Button variant="primary" size="sm" icon={Play}>
                            Mulai Kuis
                          </Button>
                        </Link>
                      </div>
                    ))}
                </div>

                {/* Mini-game link */}
                {selectedWorld.gameId && (
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '14px',
                      backgroundColor: '#FFF9EF',
                      border: '2.5px solid #F6E19F',
                      boxShadow: '0 3.5px 0 #E2CDAF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: '#92400E', display: 'block' }}>
                        Mini-Game: {selectedWorld.gameTitle}
                      </strong>
                      <span style={{ fontSize: '0.82rem', color: '#B45309' }}>
                        Tantangan permainan interaktif berhadiah bintang!
                      </span>
                    </div>
                    <Link to={`/game/${selectedWorld.gameId}`} onClick={() => soundFx.playPop()} style={{ textDecoration: 'none' }}>
                      <Button variant="warning" size="sm" icon={Gamepad2}>
                        Main Game
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="secondary" onClick={() => setSelectedWorld(null)}>
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
