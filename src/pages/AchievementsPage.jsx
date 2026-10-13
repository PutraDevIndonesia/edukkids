import React, { useState, useEffect } from 'react';
import { Award, Star, Lock, CheckCircle, Sparkles, BookOpen, Calculator, Compass, Shield, HelpCircle, FileText } from 'lucide-react';
import { achievements } from '../data/achievements';
import { useEduProgress } from '../hooks/useEduProgress';
import { getEligibleAchievements } from '../utils/scoring';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { ProgressBar } from '../components/common/ProgressBar';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { CertificateModal } from '../components/features/CertificateModal';

export function AchievementsPage() {
  const { profile, progress, history = [], updateProgress } = useEduProgress();
  
  // Single consistent source of truth for unlocked achievements
  const eligibleBadgesList = getEligibleAchievements(progress, history);
  const unlockedBadges = new Set(eligibleBadgesList);
  const unlockedCount = unlockedBadges.size;
  const [selectedBadge, setSelectedBadge] = useState(null);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Auto-sync persistent storage if new eligible badges exist
  useEffect(() => {
    const storedBadges = new Set(progress?.achievements || []);
    const hasMissingBadge = eligibleBadgesList.some((b) => !storedBadges.has(b));
    if (hasMissingBadge) {
      updateProgress({ achievements: eligibleBadgesList });
    }
  }, [eligibleBadgesList, progress?.achievements, updateProgress]);

  const getIcon = (type, isUnlocked, color) => {
    const iconColor = isUnlocked ? color : '#8C97A5';
    switch (type) {
      case 'star':
        return <Star size={36} fill={isUnlocked ? color : 'none'} color={iconColor} />;
      case 'calculator':
        return <Calculator size={36} color={iconColor} />;
      case 'book':
        return <BookOpen size={36} color={iconColor} />;
      case 'compass':
        return <Compass size={36} color={iconColor} />;
      case 'award':
        return <Award size={36} color={iconColor} />;
      case 'shield':
        return <Shield size={36} color={iconColor} />;
      default:
        return <Sparkles size={36} color={iconColor} />;
    }
  };

  return (
    <div className="container anim-slide-up">
      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px' }}>
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
              <Award size={13} strokeWidth={2.6} />
            </span>
            <span>Album Koleksi Prestasi</span>
          </div>
          <h1 style={{ color: 'var(--color-primary-dark)', margin: 0 }}>
            Lencana & Penghargaan EduKids
          </h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: '4px 0 0 0' }}>
            Kumpulkan lencana istimewa sebagai tanda ketekunan dan keberhasilan petualangan belajarmu!
          </p>
        </div>
        <Button
          variant="primary"
          icon={FileText}
          onClick={() => setIsCertificateOpen(true)}
          style={{ padding: '10px 18px' }}
        >
          Cetak Piagam Prestasi
        </Button>
      </div>

      {/* Progress Album Overview */}
      <Card className="interactive-card stagger-1" style={{ marginBottom: '32px', padding: '24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '14px' }}>
          <div>
            <h3 style={{ margin: 0, color: 'var(--color-text)' }}>Koleksi Lencana Terbuka</h3>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Kamu telah membuka <strong>{unlockedCount}</strong> dari <strong>{achievements.length}</strong> lencana
            </span>
          </div>
          <Badge variant={unlockedCount === achievements.length ? 'success' : 'primary'} style={{ fontSize: '0.95rem', padding: '6px 14px' }}>
            {Math.round((unlockedCount / achievements.length) * 100)}% Terkumpul
          </Badge>
        </div>

        <ProgressBar current={unlockedCount} total={achievements.length} color="var(--color-warning)" height={14} />
      </Card>

      {/* BADGES GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        {achievements.map((badge, idx) => {
          const isUnlocked = unlockedBadges.has(badge.id);

          return (
            <Card
              key={badge.id}
              className={`interactive-card stagger-${(idx % 6) + 1}`}
              onClick={() => setSelectedBadge(badge)}
              style={{
                display: 'flex',
                gap: '18px',
                padding: '22px',
                backgroundColor: isUnlocked ? '#FFFFFF' : 'var(--color-surface-muted)',
                borderColor: isUnlocked ? badge.color : 'var(--color-border)',
                borderLeft: isUnlocked ? `6px solid ${badge.color}` : '6px solid #CBD5E1',
                opacity: isUnlocked ? 1 : 0.85,
                cursor: 'pointer'
              }}
            >
              {/* Badge Icon Emblem with Gleam on hover */}
              <div
                className={isUnlocked ? 'badge-gleam-container' : ''}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: isUnlocked ? badge.bg : '#E2E8F0',
                  border: `2px solid ${isUnlocked ? badge.color : '#CBD5E1'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getIcon(badge.iconType, isUnlocked, badge.color)}
              </div>

              {/* Badge Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: isUnlocked ? badge.color : 'var(--color-text-muted)' }}>
                    {badge.category}
                  </span>
                  {isUnlocked ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-success)' }}>
                      <CheckCircle size={14} /> Terbuka
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                      <Lock size={14} /> Terkunci
                    </span>
                  )}
                </div>

                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: isUnlocked ? 'var(--color-text)' : 'var(--color-text-muted)' }}>
                  {badge.name}
                </h3>

                <p style={{ margin: '0 0 10px 0', fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  {badge.description}
                </p>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: isUnlocked ? '#2D3748' : '#718096',
                    backgroundColor: isUnlocked ? 'var(--color-surface-muted)' : '#EDF2F7',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <strong>Kriteria:</strong> {badge.criteria}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* DETAIL BADGE MODAL */}
      {selectedBadge && (
        <Modal
          isOpen={Boolean(selectedBadge)}
          onClose={() => setSelectedBadge(null)}
          title={`Detail Lencana: ${selectedBadge.name}`}
          maxWidth={460}
        >
          <div style={{ textAlign: 'center', padding: '6px 0 2px 0' }}>
            {/* Status Pill Badge: Terbuka or Terkunci */}
            <div style={{ marginBottom: '14px' }}>
              {unlockedBadges.has(selectedBadge.id) ? (
                <Badge variant="success" icon={CheckCircle}>
                  Status: Lencana Terbuka
                </Badge>
              ) : (
                <Badge variant="secondary" icon={Lock}>
                  Status: Masih Terkunci
                </Badge>
              )}
            </div>

            {/* Emblem Circle */}
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '50%',
                backgroundColor: unlockedBadges.has(selectedBadge.id) ? selectedBadge.bg : '#F1F5F9',
                border: `3px solid ${unlockedBadges.has(selectedBadge.id) ? selectedBadge.color : '#CBD5E1'}`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
                boxShadow: unlockedBadges.has(selectedBadge.id)
                  ? `0 8px 18px ${selectedBadge.color}35`
                  : '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              {getIcon(selectedBadge.iconType, unlockedBadges.has(selectedBadge.id), selectedBadge.color)}
            </div>

            <h3
              style={{
                margin: '0 0 6px 0',
                color: '#205784',
                fontSize: '1.22rem',
                fontFamily: 'var(--font-display)'
              }}
            >
              {selectedBadge.name}
            </h3>

            <p style={{ color: '#718096', fontSize: '0.92rem', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              {selectedBadge.description}
            </p>

            {/* Syarat Membuka Card */}
            <div
              style={{
                backgroundColor: '#FFFDF9',
                borderRadius: '14px',
                padding: '14px 16px',
                border: '1.5px solid #E8E2D8',
                marginBottom: '16px',
                textAlign: 'left'
              }}
            >
              <strong
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: '#205784',
                  marginBottom: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                Syarat Membuka:
              </strong>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#344256', fontWeight: 600 }}>
                {selectedBadge.criteria}
              </p>
            </div>

            {/* Friendly Mascot Message */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: '#F8F4EB',
                border: '1px solid #E8E2D8',
                marginBottom: '20px',
                textAlign: 'left'
              }}
            >
              <CharacterAvatar characterId="luna" size={38} animated />
              <span style={{ fontSize: '0.84rem', color: '#718096', fontStyle: 'italic', lineHeight: 1.4 }}>
                {unlockedBadges.has(selectedBadge.id)
                  ? 'Selamat! Lencana ini telah tersimpan abadi di album belajarmu!'
                  : 'Selesaikan tantangan di atas untuk membuka lencana ini!'}
              </span>
            </div>

            {/* Action Tutup */}
            <Button
              variant="primary"
              onClick={() => setSelectedBadge(null)}
              style={{ width: '100%', padding: '12px' }}
            >
              Tutup
            </Button>
          </div>
        </Modal>
      )}

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
