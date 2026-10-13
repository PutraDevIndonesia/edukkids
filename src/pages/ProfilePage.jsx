import React, { useState } from 'react';
import {
  User,
  Settings,
  Star,
  Zap,
  Award,
  CheckCircle2,
  Gamepad2,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  AlertTriangle,
  Save,
  Check
} from 'lucide-react';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { soundFx } from '../utils/soundFx';
import { getEligibleAchievements } from '../utils/scoring';
import { ProfileSaveSuccessModal } from '../components/features/ProfileSaveSuccessModal';

export function ProfilePage() {
  const { profile, progress, settings, history = [], updateProfile, updateSettings, resetAll } = useEduProgress();

  const [nickname, setNickname] = useState(profile.nickname || 'Penjelajah Cilik');
  const [grade, setGrade] = useState(profile.grade || 3);
  const [selectedAvatar, setSelectedAvatar] = useState(profile.avatarId || 'kiko');
  const [justSelectedId, setJustSelectedId] = useState(null);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const avatarOptions = [
    { id: 'kiko', name: 'Kiko', role: 'Rubah Cerdas' },
    { id: 'mimi', name: 'Mimi', role: 'Kelinci Ceria' },
    { id: 'luna', name: 'Luna', role: 'Burung Bijak' },
    { id: 'bubu', name: 'Bubu', role: 'Beruang Ramah' },
    { id: 'piko', name: 'Piko', role: 'Panda Teliti' }
  ];

  const handleSelectAvatar = (id) => {
    soundFx.playPop();
    setSelectedAvatar(id);
    setJustSelectedId(id);
    setTimeout(() => {
      setJustSelectedId((prev) => (prev === id ? null : prev));
    }, 450);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const cleanName = nickname.trim() || 'Penjelajah Cilik';
    updateProfile({
      nickname: cleanName,
      grade: Number(grade),
      avatarId: selectedAvatar
    });
    soundFx.playCelebration();
    setShowSaveModal(true);
    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 3000);
  };

  const handleToggleSound = () => {
    updateSettings({ soundEnabled: !settings.soundEnabled });
  };

  const handleToggleAnimations = () => {
    updateSettings({ animationsEnabled: !settings.animationsEnabled });
  };

  const handleConfirmReset = () => {
    resetAll();
    setShowResetModal(false);
    setNickname('Penjelajah Cilik');
    setGrade(3);
    setSelectedAvatar('kiko');
  };

  return (
    <div className="container anim-slide-up" style={{ maxWidth: '840px' }}>
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
            <User size={13} strokeWidth={2.6} />
          </span>
          <span>Profil Siswa & Pengaturan</span>
        </div>
        <h1 style={{ color: 'var(--color-primary-dark)', margin: 0 }}>
          Profil Penjelajah Cilik
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Atur nama panggilan, pilih sahabat avatarmu, dan sesuaikan pengaturan kenyamanan bermain.
        </p>
      </div>

      {/* STATS OVERVIEW CARDS */}
      <Card className="interactive-card stagger-1" style={{ marginBottom: '28px', padding: '24px' }}>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text)' }}>Ringkasan Prestasi Belajar</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '12px'
          }}
        >
          <div className="interactive-badge" style={{ padding: '14px', backgroundColor: 'var(--color-warning-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <Star size={24} fill="#E6B84E" color="#E6B84E" style={{ margin: '0 auto 6px auto' }} />
            <span style={{ fontSize: '0.8rem', color: '#997316', fontWeight: 700, display: 'block' }}>TOTAL BINTANG</span>
            <h3 style={{ margin: 0, color: '#8C6812' }}>{progress.totalStars}</h3>
          </div>

          <div className="interactive-badge" style={{ padding: '14px', backgroundColor: 'var(--color-primary-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <Zap size={24} fill="#347DB5" color="#347DB5" style={{ margin: '0 auto 6px auto' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-dark)', fontWeight: 700, display: 'block' }}>TOTAL XP</span>
            <h3 style={{ margin: 0, color: 'var(--color-primary-dark)' }}>{progress.totalXp} XP</h3>
          </div>

          <div className="interactive-badge" style={{ padding: '14px', backgroundColor: 'var(--color-success-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <CheckCircle2 size={24} color="var(--color-success)" style={{ margin: '0 auto 6px auto' }} />
            <span style={{ fontSize: '0.8rem', color: '#216a44', fontWeight: 700, display: 'block' }}>KUIS TUNTAS</span>
            <h3 style={{ margin: 0, color: 'var(--color-success)' }}>{(progress.completedQuizzes || []).length}</h3>
          </div>

          <div className="interactive-badge" style={{ padding: '14px', backgroundColor: 'var(--color-coral-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <Gamepad2 size={24} color="var(--color-coral)" style={{ margin: '0 auto 6px auto' }} />
            <span style={{ fontSize: '0.8rem', color: '#b24a38', fontWeight: 700, display: 'block' }}>GAME TUNTAS</span>
            <h3 style={{ margin: 0, color: 'var(--color-coral)' }}>{(progress.completedGames || []).length}</h3>
          </div>

          <div className="interactive-badge" style={{ padding: '14px', backgroundColor: 'var(--color-lavender-soft)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <Award size={24} color="var(--color-lavender)" style={{ margin: '0 auto 6px auto' }} />
            <span style={{ fontSize: '0.8rem', color: '#5c4ea8', fontWeight: 700, display: 'block' }}>LENCANA</span>
            <h3 style={{ margin: 0, color: 'var(--color-lavender)' }}>{getEligibleAchievements(progress, history).length}</h3>
          </div>
        </div>
      </Card>

      {/* EDIT PROFILE FORM */}
      <Card className="interactive-card stagger-2" style={{ marginBottom: '28px', padding: '24px' }}>
        <h3 style={{ marginBottom: '18px', color: 'var(--color-text)' }}>Ubah Data Profil</h3>

        <form onSubmit={handleSaveProfile}>
          {/* Avatar Picker */}
          <div style={{ marginBottom: '26px' }}>
            <label
              id="avatar-picker-label"
              style={{
                display: 'block',
                fontSize: '0.92rem',
                fontWeight: 800,
                color: 'var(--color-primary-dark)',
                fontFamily: 'var(--font-display)',
                marginBottom: '12px'
              }}
            >
              Pilih Sahabat Avatarmu:
            </label>
            <div
              role="radiogroup"
              aria-labelledby="avatar-picker-label"
              className="char-picker-grid"
            >
              {avatarOptions.map((av, idx) => {
                const isSelected = selectedAvatar === av.id;
                const isCheering = justSelectedId === av.id;

                return (
                  <button
                    key={av.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Pilih ${av.name} - ${av.role}`}
                    onClick={() => handleSelectAvatar(av.id)}
                    className={`char-select-card ${isSelected ? 'is-selected' : ''} char-card-anim-${idx + 1}`}
                  >
                    {/* Corner Check Indicator for Selected Avatar */}
                    {isSelected && (
                      <div className="char-check-badge" aria-hidden="true">
                        <Check size={13} strokeWidth={3.2} />
                      </div>
                    )}

                    {/* Animated Avatar Icon */}
                    <div className="char-avatar-inner">
                      <CharacterAvatar
                        characterId={av.id}
                        size={56}
                        cheer={isCheering}
                        animated
                      />
                    </div>

                    {/* Character Name */}
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.96rem',
                        fontWeight: 800,
                        color: isSelected ? '#1E4E75' : '#2D3748',
                        marginTop: '8px',
                        lineHeight: 1.2
                      }}
                    >
                      {av.name}
                    </span>

                    {/* Character Role / Description */}
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: isSelected ? '#766126' : '#718096',
                        marginTop: '2px',
                        textAlign: 'center',
                        lineHeight: 1.2
                      }}
                    >
                      {av.role}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '22px'
            }}
          >
            {/* Nickname input */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
                Nama Panggilan
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={20}
                required
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-border)',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            {/* Grade select */}
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
                Tingkat Kelas SD
              </label>
              <select
                value={grade}
                onChange={(e) => setGrade(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--color-border)',
                  fontFamily: 'inherit',
                  fontSize: '0.95rem',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((g) => (
                  <option key={g} value={g}>Kelas {g} Sekolah Dasar</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button type="submit" variant="primary" icon={Save}>
              Simpan Perubahan
            </Button>
            {saveSuccessNotice && (
              <span className="anim-pop" style={{ color: 'var(--color-success)', fontWeight: 700, fontSize: '0.9rem' }}>
                ✓ Profil berhasil diperbarui!
              </span>
            )}
          </div>
        </form>
      </Card>

      {/* SETTINGS CARD */}
      <Card style={{ marginBottom: '28px', padding: '24px' }}>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text)' }}>Pengaturan Aplikasi</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Sound Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {settings.soundEnabled ? <Volume2 size={22} color="var(--color-primary)" /> : <VolumeX size={22} color="var(--color-text-muted)" />}
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block' }}>Efek Suara</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Bunyi bel saat menjawab dan selesai tantangan</span>
              </div>
            </div>
            <Button
              variant={settings.soundEnabled ? 'primary' : 'secondary'}
              size="sm"
              onClick={handleToggleSound}
            >
              {settings.soundEnabled ? 'Aktif' : 'Mati'}
            </Button>
          </div>

          {/* Animation Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Sparkles size={22} color="var(--color-warning)" />
              <div>
                <strong style={{ fontSize: '0.95rem', color: 'var(--color-text)', display: 'block' }}>Animasi Halus</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Gerakan karakter melayang dan bintang bersinar</span>
              </div>
            </div>
            <Button
              variant={settings.animationsEnabled ? 'primary' : 'secondary'}
              size="sm"
              onClick={handleToggleAnimations}
            >
              {settings.animationsEnabled ? 'Aktif' : 'Mati'}
            </Button>
          </div>
        </div>
      </Card>

      {/* DANGER ZONE: RESET PROGRESS */}
      <Card style={{ padding: '24px', border: '2px dashed var(--color-coral)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0', color: '#b24a38' }}>Reset Seluruh Progres</h4>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              Menghapus bintang, poin XP, kuis tuntas, dan lencana untuk memulai petualangan dari awal.
            </p>
          </div>
          <Button variant="coral" icon={RotateCcw} onClick={() => setShowResetModal(true)}>
            Reset Progres
          </Button>
        </div>
      </Card>

      {/* CONFIRMATION MODAL FOR RESET */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Konfirmasi Reset Progres"
        actions={
          <>
            <Button variant="secondary" onClick={() => setShowResetModal(false)}>
              Batal
            </Button>
            <Button variant="coral" onClick={handleConfirmReset}>
              Ya, Hapus dan Mulai Ulang
            </Button>
          </>
        }
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <AlertTriangle size={42} color="var(--color-coral)" style={{ flexShrink: 0 }} />
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
            Apakah kamu yakin ingin mereset seluruh progres? Semua bintang, XP, lencana yang sudah diraih akan kembali ke nol. Tindakan ini tidak dapat dibatalkan.
          </p>
        </div>
      </Modal>

      {/* POP-UP MODAL BERHASIL TERSIMPAN (REDESIGNED 2D ANIMATED MASCOT) */}
      <ProfileSaveSuccessModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        nickname={nickname.trim() || 'Penjelajah Cilik'}
        grade={grade}
        avatarId={selectedAvatar}
      />
    </div>
  );
}
