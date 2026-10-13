import React, { useState, useMemo } from 'react';
import { Trophy, Star, Zap, Medal } from 'lucide-react';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { CharacterGuide } from '../components/characters/CharacterGuide';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

// Safe demo students (using friendly nicknames only, no private data)
const baseLeaderboardData = [
  { id: 'u1', nickname: 'Bintang Kecil', avatarId: 'mimi', grade: 3, xp: 480, stars: 18 },
  { id: 'u2', nickname: 'Kancil Cerdik', avatarId: 'piko', grade: 4, xp: 420, stars: 15 },
  { id: 'u3', nickname: 'Sahabat Rimba', avatarId: 'bubu', grade: 3, xp: 360, stars: 14 },
  { id: 'u4', nickname: 'Pena Emas', avatarId: 'luna', grade: 2, xp: 290, stars: 11 },
  { id: 'u5', nickname: 'Penjelajah Langit', avatarId: 'kiko', grade: 3, xp: 210, stars: 8 },
  { id: 'u6', nickname: 'Si Pelangi', avatarId: 'mimi', grade: 2, xp: 160, stars: 6 }
];

export function LeaderboardPage() {
  const { profile, progress } = useEduProgress();
  const [period, setPeriod] = useState('all'); // 'weekly' or 'all'

  // Combine demo roster with the active user's dynamic XP and Stars
  const sortedLeaderboard = useMemo(() => {
    const currentUserEntry = {
      id: profile.id || 'demo-profile',
      nickname: profile.nickname || 'Penjelajah Cilik',
      avatarId: profile.avatarId || 'kiko',
      grade: profile.grade || 3,
      xp: progress.totalXp || 0,
      stars: progress.totalStars || 0,
      isCurrentUser: true
    };

    const multiplier = period === 'weekly' ? 0.6 : 1;

    const list = [
      currentUserEntry,
      ...baseLeaderboardData.map((d) => ({
        ...d,
        xp: Math.round(d.xp * multiplier),
        stars: Math.max(1, Math.round(d.stars * multiplier)),
        isCurrentUser: false
      }))
    ];

    // Sort descending by XP
    list.sort((a, b) => b.xp - a.xp);

    return list.map((entry, index) => ({
      ...entry,
      rank: index + 1
    }));
  }, [profile, progress, period]);

  const currentUserRank = sortedLeaderboard.find((u) => u.isCurrentUser)?.rank || 1;

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
            <Trophy size={13} strokeWidth={2.6} />
          </span>
          <span>Papan Bintang & Prestasi</span>
        </div>
        <h1 style={{ color: 'var(--color-primary-dark)', margin: 0 }}>
          Papan Peringkat Penjelajah
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Lihat peringkat para pembelajar hebat. Kumpulkan lebih banyak XP dari kuis dan game untuk melompat ke posisi teratas!
        </p>
      </div>

      {/* Period Filter Tabs & Rank Status */}
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
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant={period === 'all' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setPeriod('all')}
          >
            Keseluruhan
          </Button>
          <Button
            variant={period === 'weekly' ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setPeriod('weekly')}
          >
            Pekan Ini
          </Button>
        </div>

        <div
          className="interactive-badge"
          style={{
            padding: '8px 16px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            border: '2px solid var(--color-primary)',
            fontSize: '0.92rem',
            fontWeight: 700,
            color: 'var(--color-primary-dark)',
            boxShadow: '0 2px 6px rgba(40, 117, 184, 0.1)'
          }}
        >
          Posisi Kamu Saat Ini: <strong>Peringkat #{currentUserRank}</strong>
        </div>
      </div>

      {/* LEADERBOARD LIST TABLE */}
      <Card className="interactive-card stagger-1" style={{ padding: 0, overflow: 'hidden', marginBottom: '28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Header Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '70px 1fr 120px 120px',
              padding: '14px 20px',
              backgroundColor: 'var(--color-surface-muted)',
              borderBottom: '1.5px solid var(--color-border)',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase'
            }}
          >
            <span>Posisi</span>
            <span>Nama Penjelajah</span>
            <span style={{ textAlign: 'right' }}>Bintang</span>
            <span style={{ textAlign: 'right' }}>Total XP</span>
          </div>

          {/* User Rows */}
          {sortedLeaderboard.map((student, idx) => {
            let rankColor = 'var(--color-text)';
            let medalBadge = null;
            let isPodium = student.rank <= 3;

            if (student.rank === 1) {
              medalBadge = '🥇';
              rankColor = '#B7791F';
            } else if (student.rank === 2) {
              medalBadge = '🥈';
              rankColor = '#4A5568';
            } else if (student.rank === 3) {
              medalBadge = '🥉';
              rankColor = '#9C4221';
            }

            return (
              <div
                key={student.id}
                className={`stagger-${(idx % 6) + 1}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '70px 1fr 120px 120px',
                  alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: '1px solid var(--color-border)',
                  backgroundColor: student.isCurrentUser ? '#FFF9E6' : '#FFFFFF',
                  fontWeight: student.isCurrentUser ? 700 : 500,
                  transition: 'background-color 0.15s ease'
                }}
              >
                {/* Rank Column */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '1.2rem', fontWeight: 800, color: rankColor }}>
                  {medalBadge ? (
                    <span className={isPodium ? 'anim-medal-glow' : ''}>{medalBadge}</span>
                  ) : (
                    <span>#{student.rank}</span>
                  )}
                </div>

                {/* Avatar & Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CharacterAvatar characterId={student.avatarId} size={40} animated />
                  <div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block' }}>
                      {student.nickname}
                      {student.isCurrentUser && (
                        <span
                          className="anim-pulse-subtle"
                          style={{
                            marginLeft: '8px',
                            fontSize: '0.75rem',
                            padding: '2px 8px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--color-primary)',
                            color: '#FFFFFF'
                          }}
                        >
                          Kamu
                        </span>
                      )}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      Kelas {student.grade} SD
                    </span>
                  </div>
                </div>

                {/* Stars Column */}
                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', color: '#997316', fontWeight: 700 }}>
                  <Star size={16} fill="#E6B84E" color="#E6B84E" className="anim-star-twinkle" />
                  <span>{student.stars}</span>
                </div>

                {/* XP Column */}
                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
                  <Zap size={16} fill="#2875B8" color="#2875B8" />
                  <span>{student.xp} XP</span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Cheering Mascot Footer */}
      <CharacterGuide
        characterId="piko"
        speech={`"Peringkat yang fantastis, ${profile.nickname}! Setiap soal matematika dan permainan kata yang kamu menangkan akan langsung menambah poin XP kamu di sini!"`}
        mood="excited"
      />
    </div>
  );
}
