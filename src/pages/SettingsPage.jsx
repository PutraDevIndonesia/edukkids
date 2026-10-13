import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Settings,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  RotateCcw,
  User,
  CheckCircle2,
  AlertTriangle,
  Play,
  Headphones
} from 'lucide-react';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { Modal } from '../components/common/Modal';
import { soundFx } from '../utils/soundFx';
import { speechService } from '../utils/speech';

export function SettingsPage() {
  const { profile, settings, updateSettings, resetAll } = useEduProgress();
  const [showResetModal, setShowResetModal] = useState(false);
  const [soundFeedback, setSoundFeedback] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState(false);

  const handleToggleSound = () => {
    const nextState = !settings.soundEnabled;
    updateSettings({ soundEnabled: nextState });
    if (nextState) {
      soundFx.playPop();
    }
  };

  const handleToggleAutoNarration = () => {
    const nextState = !settings.autoNarrationEnabled;
    updateSettings({ autoNarrationEnabled: nextState });
    soundFx.playPop();
  };

  const handleTestSpeech = () => {
    soundFx.playPop();
    setSpeechFeedback(true);
    speechService.speak('Halo sahabat EduKids! Semangat bertualang dan raih bintang belajarmu!', {
      onEnd: () => setSpeechFeedback(false),
      onError: () => setSpeechFeedback(false)
    });
  };

  const handleTestSound = () => {
    soundFx.playStar();
    setSoundFeedback(true);
    setTimeout(() => setSoundFeedback(false), 1500);
  };

  const handleToggleAnimations = () => {
    const nextState = !settings.animationsEnabled;
    updateSettings({ animationsEnabled: nextState });
    soundFx.playPop();
  };

  const handleConfirmReset = () => {
    resetAll();
    setShowResetModal(false);
    soundFx.playPop();
  };

  return (
    <div className="container anim-slide-up" style={{ maxWidth: '820px', paddingBottom: '48px' }}>
      {/* 1. Header */}
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
            <Settings size={13} strokeWidth={2.6} />
          </span>
          <span>Pengaturan Aplikasi</span>
        </div>
        <h1 style={{ color: '#205784', margin: 0, fontFamily: 'var(--font-display)' }}>
          Pengaturan Kenyamanan Belajar
        </h1>
        <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0 }}>
          Atur suara, animasi, dan preferensi aplikasi untuk pengalaman petualangan terbaik.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* 2. Suara & Efek Audio */}
        <Card
          style={{
            padding: '24px',
            border: '3px solid #E2D9CC',
            boxShadow: '0 5px 0 #D5C9B8',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: settings.soundEnabled ? '#E8F3FF' : '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: settings.soundEnabled ? '#2875B8' : '#94A3B8'
              }}
            >
              {settings.soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#205784', fontSize: '1.1rem' }}>
                Efek Suara Permainan
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                Bunyi pop saat klik, lonceng bintang, dan melodi kemenangan
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#FFFDF9',
              border: '2px solid #E8E2D8',
              borderRadius: '16px'
            }}
          >
            <div>
              <strong style={{ fontSize: '0.95rem', color: '#205784', display: 'block' }}>
                Status: {settings.soundEnabled ? 'Aktif (Menyala)' : 'Hening (Mati)'}
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#718096' }}>
                {settings.soundEnabled
                  ? 'Suara taktil dan efek audio petualangan dapat didengar.'
                  : 'Seluruh efek suara dimatikan agar suasana tetap tenang.'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {settings.soundEnabled && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={Play}
                  onClick={handleTestSound}
                >
                  {soundFeedback ? 'Berbunyi!' : 'Uji Suara'}
                </Button>
              )}
              <Button
                variant={settings.soundEnabled ? 'primary' : 'secondary'}
                size="sm"
                onClick={handleToggleSound}
              >
                {settings.soundEnabled ? 'Matikan Suara' : 'Nyalakan Suara'}
              </Button>
            </div>
          </div>
        </Card>

        {/* 2b. Narasi Soal Otomatis (Text-to-Speech) */}
        <Card
          style={{
            padding: '24px',
            border: '3px solid #E2D9CC',
            boxShadow: '0 5px 0 #D5C9B8',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: settings.autoNarrationEnabled ? '#EBF5EB' : '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: settings.autoNarrationEnabled ? '#22C55E' : '#94A3B8'
              }}
            >
              <Headphones size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#205784', fontSize: '1.1rem' }}>
                Narasi Suara Otomatis (Bacakan Soal)
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                Membantu anak yang sedang belajar mengeja dengan mendengarkan soal saat kuis dibuka
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#FFFDF9',
              border: '2px solid #E8E2D8',
              borderRadius: '16px'
            }}
          >
            <div>
              <strong style={{ fontSize: '0.95rem', color: '#205784', display: 'block' }}>
                Status: {settings.autoNarrationEnabled ? 'Bacakan Otomatis (Aktif)' : 'Manual (Klik Tombol Speaker)'}
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#718096' }}>
                {settings.autoNarrationEnabled
                  ? 'Setiap berganti soal kuis, teks pertanyaan akan dibacakan langsung.'
                  : 'Anak dapat menekan tombol speaker di setiap soal kapan pun ingin mendengar.'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Button
                variant="secondary"
                size="sm"
                icon={Play}
                onClick={handleTestSpeech}
              >
                {speechFeedback ? 'Sedang Membaca...' : 'Uji Narasi'}
              </Button>
              <Button
                variant={settings.autoNarrationEnabled ? 'primary' : 'secondary'}
                size="sm"
                onClick={handleToggleAutoNarration}
              >
                {settings.autoNarrationEnabled ? 'Matikan Otomatis' : 'Aktifkan Otomatis'}
              </Button>
            </div>
          </div>
        </Card>

        {/* 3. Tampilan & Animasi Visual */}
        <Card
          style={{
            padding: '24px',
            border: '3px solid #E2D9CC',
            boxShadow: '0 5px 0 #D5C9B8',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: settings.animationsEnabled ? '#FFF5DD' : '#F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: settings.animationsEnabled ? '#B7791F' : '#94A3B8'
              }}
            >
              <Sparkles size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#205784', fontSize: '1.1rem' }}>
                Animasi Visual & Gerakan
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                Karakter melompat ceria, efek kartu timbul, dan transisi halus
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#FFFDF9',
              border: '2px solid #E8E2D8',
              borderRadius: '16px'
            }}
          >
            <div>
              <strong style={{ fontSize: '0.95rem', color: '#205784', display: 'block' }}>
                Status Animasi: {settings.animationsEnabled ? 'Aktif' : 'Hemat Gerakan'}
              </strong>
              <span style={{ fontSize: '0.82rem', color: '#718096' }}>
                {settings.animationsEnabled
                  ? 'Animasi berjalan penuh untuk keceriaan visual.'
                  : 'Gerakan dikurangi untuk perangkat lebih ringan.'}
              </span>
            </div>

            <Button
              variant={settings.animationsEnabled ? 'primary' : 'secondary'}
              size="sm"
              onClick={handleToggleAnimations}
            >
              {settings.animationsEnabled ? 'Kurangi Gerakan' : 'Aktifkan Animasi'}
            </Button>
          </div>
        </Card>

        {/* 4. Informasi Akun Terhubung */}
        <Card
          style={{
            padding: '24px',
            border: '3px solid #E2D9CC',
            boxShadow: '0 5px 0 #D5C9B8',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#E8F3FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2875B8'
              }}
            >
              <User size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#205784', fontSize: '1.1rem' }}>
                Profil Penjelajah
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                Identitas nama, kelas, dan sahabat avatar yang sedang aktif
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              padding: '16px',
              backgroundColor: '#FFFDF9',
              border: '2px solid #E8E2D8',
              borderRadius: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <CharacterAvatar characterId={profile.avatarId || 'kiko'} size={48} animated />
              <div>
                <strong style={{ fontSize: '1rem', color: '#205784', display: 'block' }}>
                  {profile.nickname || 'Penjelajah Cilik'}
                </strong>
                <span style={{ fontSize: '0.85rem', color: '#718096' }}>
                  Siswa Kelas {profile.grade || 1} Sekolah Dasar
                </span>
              </div>
            </div>

            <Link to="/profil" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="sm" icon={User}>
                Ubah Profil
              </Button>
            </Link>
          </div>
        </Card>

        {/* 5. Zona Atur Ulang Data Progres */}
        <Card
          style={{
            padding: '24px',
            border: '3px solid #F6D884',
            boxShadow: '0 5px 0 #E5C362',
            borderRadius: '20px',
            backgroundColor: '#FFFDF5'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#FFF5DD',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#B7791F'
              }}
            >
              <RotateCcw size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, color: '#92400E', fontSize: '1.1rem' }}>
                Mulai Ulang Petualangan (Reset Progres)
              </h3>
              <span style={{ fontSize: '0.85rem', color: '#B45309' }}>
                Kembalikan bintang, XP, dan riwayat aktivitas ke kondisi awal
              </span>
            </div>
          </div>

          <p style={{ margin: '0 0 16px 0', fontSize: '0.88rem', color: '#718096', lineHeight: 1.5 }}>
            Gunakan pilihan ini jika ingin mengulang semua kuis dan tantangan dari awal. Tindakan ini memerlukan konfirmasi terlebih dahulu.
          </p>

          <Button
            variant="warning"
            size="sm"
            icon={RotateCcw}
            onClick={() => setShowResetModal(true)}
          >
            Atur Ulang Data Progres
          </Button>
        </Card>
      </div>

      {/* Modal Konfirmasi Reset */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Konfirmasi Mulai Ulang"
      >
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: '#DC2626'
            }}
          >
            <AlertTriangle size={32} />
          </div>

          <h3 style={{ margin: '0 0 8px 0', color: '#205784' }}>
            Yakin ingin mengatur ulang?
          </h3>

          <p style={{ margin: '0 0 24px 0', color: '#718096', fontSize: '0.92rem', lineHeight: 1.5 }}>
            Semua bintang, XP, dan lencana yang telah dikumpulkan akan kembali ke awal.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <Button
              variant="secondary"
              onClick={() => setShowResetModal(false)}
            >
              Batal
            </Button>
            <Button
              variant="danger"
              onClick={handleConfirmReset}
            >
              Ya, Mulai Ulang
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
