import React, { useState, useEffect } from 'react';
import { Check, AlertCircle, Compass, Star } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { MapPlayerCharacter } from '../map/MapPlayerCharacter';
import { CharacterAvatar } from '../characters/CharacterAvatar';
import { soundFx } from '../../utils/soundFx';
import { getMascotTheme } from '../../constants/mascotThemes';

/**
 * ProfileSaveSuccessModal
 * Professional educational illustration modal when user profile is updated.
 * 
 * Features:
 * - Full-body 2D mascot with 100% anatomically consistent palette (no mismatched arms/feet).
 * - Multi-phase celebration jump sequence:
 *   1. Crouch anticipation
 *   2. Natural parabolic arc jump with raised hands (hore)
 *   3. Golden yellow celebration stars appearing at peak
 *   4. Soft gentle landing returning to peaceful resting idle
 * - Natural EduKids blue & cream status pill (no neon/glow)
 */
export function ProfileSaveSuccessModal({
  isOpen,
  onClose,
  nickname = 'Penjelajah Cilik',
  grade = 3,
  avatarId = 'kiko',
  status = 'success', // 'success' | 'error'
  errorMessage = 'Gagal menyimpan perubahan. Silakan coba lagi.'
}) {
  const isSuccess = status === 'success';
  const [charState, setCharState] = useState('idle');
  const [showStars, setShowStars] = useState(false);
  const mascotTheme = getMascotTheme(avatarId);

  // Trigger celebration sequence only on genuine successful confirmation
  useEffect(() => {
    if (!isOpen || !isSuccess) {
      setCharState('idle');
      setShowStars(false);
      return;
    }

    // Step 1: Start hurray jump sequence
    setCharState('hurray');

    // Step 2: Show celebration stars at jump apex (350ms - 1300ms)
    const tStarsOn = setTimeout(() => {
      setShowStars(true);
    }, 300);

    const tStarsOff = setTimeout(() => {
      setShowStars(false);
    }, 1300);

    // Step 3: Transition smoothly back to resting idle after landing (1450ms)
    const tIdle = setTimeout(() => {
      setCharState('idle');
    }, 1450);

    return () => {
      clearTimeout(tStarsOn);
      clearTimeout(tStarsOff);
      clearTimeout(tIdle);
    };
  }, [isOpen, isSuccess]);

  const handleActionClick = () => {
    soundFx.playPop();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isSuccess ? 'Hore! Profil Berhasil Disimpan!' : 'Penyimpanan Gagal'}
      maxWidth={480}
      actions={
        <Button
          variant={isSuccess ? 'primary' : 'secondary'}
          size="lg"
          onClick={handleActionClick}
          icon={isSuccess ? Compass : undefined}
          style={{
            width: '100%',
            justifyContent: 'center',
            fontSize: '1rem',
            padding: '12px 20px',
            borderRadius: '12px'
          }}
        >
          {isSuccess ? 'Siap Berpetualang!' : 'Tutup'}
        </Button>
      }
    >
      <div style={{ textAlign: 'center', margin: '-4px 0 6px 0' }}>
        {/* ================= 1. 2D STORYBOOK ENVIRONMENT STAGE ================= */}
        <div
          className="storybook-mascot-stage"
          style={{
            position: 'relative',
            width: '100%',
            height: '180px',
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #EBF4FC 0%, #FDFBF7 100%)',
            border: '1px solid #D6E4F0',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}
        >
          {/* Layered Storybook Landscape SVG */}
          <svg
            viewBox="0 0 460 180"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
          >
            <defs>
              {/* Sky soft gradient */}
              <linearGradient id="modalSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E2F0FB" />
                <stop offset="60%" stopColor="#F2F8FD" />
                <stop offset="100%" stopColor="#FFFDF8" />
              </linearGradient>

              {/* Distant hill gradient */}
              <linearGradient id="modalHillDistant" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#CDE4F5" />
                <stop offset="100%" stopColor="#B3D4EE" />
              </linearGradient>

              {/* Mid hill green gradient */}
              <linearGradient id="modalHillMid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#BCE3B2" />
                <stop offset="100%" stopColor="#95CD8A" />
              </linearGradient>

              {/* Foreground meadow gradient */}
              <linearGradient id="modalHillFore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#89CF7B" />
                <stop offset="100%" stopColor="#67B557" />
              </linearGradient>

              {/* Sandy cobblestone footpath gradient */}
              <linearGradient id="modalPath" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF8E7" />
                <stop offset="100%" stopColor="#EADBBE" />
              </linearGradient>
            </defs>

            {/* Background Sky */}
            <rect width="460" height="180" fill="url(#modalSky)" />

            {/* Soft Storybook Clouds */}
            <g className="anim-cloud-drift-slow" opacity="0.85">
              <path
                d="M 35 42 A 10 10 0 0 1 52 34 A 14 14 0 0 1 76 36 A 10 10 0 0 1 86 44 L 35 44 Z"
                fill="#FFFFFF"
              />
              <path
                d="M 360 35 A 9 9 0 0 1 376 28 A 13 13 0 0 1 398 30 A 8 8 0 0 1 408 37 L 360 37 Z"
                fill="#FFFFFF"
              />
            </g>

            {/* Distant Soft Blue Hills */}
            <path
              d="M -20 180 Q 80 115 190 133 Q 310 153 480 123 L 480 180 Z"
              fill="url(#modalHillDistant)"
              opacity="0.75"
            />

            {/* Mid Rolling Green Hills with Gentle Trees */}
            <path
              d="M -20 180 Q 110 130 230 146 Q 360 160 480 138 L 480 180 Z"
              fill="url(#modalHillMid)"
            />
            {/* Small trees on mid hill */}
            <g opacity="0.9">
              <ellipse cx="65" cy="138" rx="11" ry="14" fill="#75B86B" />
              <rect x="63" y="148" width="4" height="8" rx="1" fill="#7C5A3E" />

              <ellipse cx="400" cy="142" rx="10" ry="13" fill="#75B86B" />
              <rect x="398" y="151" width="4" height="7" rx="1" fill="#7C5A3E" />
            </g>

            {/* Foreground Meadow Base */}
            <path
              d="M -20 180 Q 120 152 230 156 Q 340 160 480 150 L 480 180 Z"
              fill="url(#modalHillFore)"
            />

            {/* Winding Footpath where character stands */}
            <path
              d="M 188 154 C 190 160, 185 166, 172 180 L 288 180 C 275 166, 270 160, 272 154 Z"
              fill="url(#modalPath)"
              stroke="#D4C29E"
              strokeWidth="1.2"
            />

            {/* Natural Wildflower Details along the path */}
            <g>
              {/* Left Grass & Daisy */}
              <path d="M 170 162 Q 166 154 162 152" stroke="#4D923E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M 172 163 Q 175 156 178 154" stroke="#4D923E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <circle cx="163" cy="152" r="2.2" fill="#FFFFFF" />
              <circle cx="163" cy="152" r="1" fill="#FFC857" />

              {/* Right Grass & Daisy */}
              <path d="M 290 162 Q 294 154 298 152" stroke="#4D923E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M 288 163 Q 285 156 282 154" stroke="#4D923E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <circle cx="297" cy="152" r="2.2" fill="#FFFFFF" />
              <circle cx="297" cy="152" r="1" fill="#FFC857" />
            </g>
          </svg>

          {/* Golden Yellow Sparkle Stars at Jump Apex (Urutan 7) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: showStars ? 1 : 0,
              transition: 'opacity 0.35s ease',
              zIndex: 3
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '26px',
                left: '28%',
                color: '#FFC857',
                filter: 'drop-shadow(0 2px 4px rgba(229,168,35,0.25))'
              }}
            >
              <Star size={16} fill="#FFC857" stroke="#D49917" strokeWidth={1.5} />
            </span>
            <span
              style={{
                position: 'absolute',
                top: '24px',
                right: '27%',
                color: '#FFC857',
                filter: 'drop-shadow(0 2px 4px rgba(229,168,35,0.25))'
              }}
            >
              <Star size={14} fill="#FFC857" stroke="#D49917" strokeWidth={1.5} />
            </span>
            <span
              style={{
                position: 'absolute',
                top: '58px',
                left: '22%',
                color: '#FFC857'
              }}
            >
              <Star size={11} fill="#FFC857" stroke="#D49917" strokeWidth={1.2} />
            </span>
            <span
              style={{
                position: 'absolute',
                top: '56px',
                right: '22%',
                color: '#FFC857'
              }}
            >
              <Star size={11} fill="#FFC857" stroke="#D49917" strokeWidth={1.2} />
            </span>
          </div>

          {/* Full-Body Mascot Grounded with Multi-Phase Hurray Jump */}
          <div
            className="modal-mascot-grounded"
            style={{
              position: 'relative',
              width: '180px',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '10px',
              zIndex: 2
            }}
          >
            <svg
              viewBox="-40 -36 80 60"
              width="100%"
              height="100%"
              style={{ overflow: 'visible' }}
            >
              <MapPlayerCharacter
                avatarId={avatarId}
                x={0}
                y={0}
                state={charState}
              />
            </svg>
          </div>

          {/* ================= 2. NATURAL STATUS PILL (NO NEON) ================= */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 4,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px 4px 8px',
              background: isSuccess ? '#F0F7FD' : '#FDEFE9',
              borderRadius: '999px',
              border: isSuccess ? '1px solid #C7E1F7' : '1px solid #F3B4A8'
            }}
          >
            <span
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                backgroundColor: isSuccess ? '#2875B8' : '#B24A38',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}
            >
              {isSuccess ? (
                <Check size={11} strokeWidth={2.8} />
              ) : (
                <AlertCircle size={11} strokeWidth={2.8} />
              )}
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                color: isSuccess ? '#205784' : '#8A3222',
                fontWeight: 700,
                letterSpacing: '0.1px'
              }}
            >
              {isSuccess ? 'Tersimpan' : 'Gagal'}
            </span>
          </div>
        </div>

        {/* ================= 3. TITLE & HIERARCHY ================= */}
        {isSuccess ? (
          <>
            <p
              style={{
                margin: '4px 0 16px 0',
                color: '#64748B',
                fontSize: '0.92rem',
                lineHeight: 1.5
              }}
            >
              Data profil barumu sudah aktif dan siap menemani petualangan belajarmu di dunia EduKids.
            </p>

            {/* ================= 4. ACTIVE PROFILE CARD ================= */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                padding: '12px 16px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: mascotTheme.badgeBg || '#F8FAFC',
                    border: `1px solid ${mascotTheme.badgeBorder || '#E2E8F0'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <CharacterAvatar characterId={avatarId} size={38} animated={false} />
                </div>

                <div>
                  <strong
                    style={{
                      display: 'block',
                      color: '#1E293B',
                      fontSize: '0.96rem',
                      lineHeight: 1.25
                    }}
                  >
                    {nickname}
                  </strong>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: '#64748B',
                      fontWeight: 600
                    }}
                  >
                    Kelas {grade} Sekolah Dasar
                  </span>
                </div>
              </div>

              <span
                style={{
                  fontSize: '0.76rem',
                  color: '#205784',
                  fontWeight: 700,
                  backgroundColor: '#EBF4FC',
                  padding: '3px 9px',
                  borderRadius: '999px',
                  border: '1px solid #C7E1F7',
                  whiteSpace: 'nowrap'
                }}
              >
                Profil Aktif
              </span>
            </div>
          </>
        ) : (
          <>
            <h3
              style={{
                margin: '0 0 6px 0',
                color: '#B24A38',
                fontSize: '1.25rem',
                fontFamily: 'var(--font-display)'
              }}
            >
              Penyimpanan Tidak Berhasil
            </h3>

            <p
              style={{
                margin: '0 0 16px 0',
                color: '#64748B',
                fontSize: '0.92rem',
                lineHeight: 1.5
              }}
            >
              {errorMessage}
            </p>
          </>
        )}
      </div>

      {/* Scoped Peaceful Animation & Reduced Motion Support */}
      <style>{`
        .anim-cloud-drift-slow {
          animation: cloudDriftSlow 24s ease-in-out infinite alternate;
        }

        @keyframes cloudDriftSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(12px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-cloud-drift-slow {
            animation: none !important;
          }
        }
      `}</style>
    </Modal>
  );
}
