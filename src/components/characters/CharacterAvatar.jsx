import React from 'react';
import { MASCOT_THEMES, getMascotTheme } from '../../constants/mascotThemes';

export function CharacterAvatar({
  characterId = 'kiko',
  size = 64,
  className = '',
  showName = false,
  animated = true,
  cheer = false
}) {
  const t = getMascotTheme(characterId);

  const characters = {
    kiko: {
      name: t.name,
      title: t.role,
      role: 'Pemandu',
      bg: t.badgeBg,
      border: t.badgeBorder,
      renderSvg: (isAnim) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Bunny Ears with subtle wiggle */}
          <g className={isAnim ? 'anim-mascot-ear' : ''} style={{ transformOrigin: '50px 45px' }}>
            <ellipse cx="36" cy="24" rx="10" ry="24" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
            <ellipse cx="36" cy="24" rx="5" ry="16" fill={t.innerEar} />
            <ellipse cx="64" cy="24" rx="10" ry="24" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
            <ellipse cx="64" cy="24" rx="5" ry="16" fill={t.innerEar} />
          </g>
          {/* Head */}
          <circle cx="50" cy="60" r="30" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
          {/* Cheeks */}
          <circle cx="34" cy="66" r="6" fill={t.blush} opacity="0.8" />
          <circle cx="66" cy="66" r="6" fill={t.blush} opacity="0.8" />
          {/* Blinking Eyes */}
          <g className={isAnim ? 'anim-mascot-blink' : ''} style={{ transformOrigin: '50px 56px' }}>
            <circle cx="40" cy="56" r="3.5" fill={t.outline} />
            <circle cx="60" cy="56" r="3.5" fill={t.outline} />
            <circle cx="41.5" cy="54.5" r="1.2" fill="#FFFFFF" />
            <circle cx="61.5" cy="54.5" r="1.2" fill="#FFFFFF" />
          </g>
          {/* Nose & Mouth */}
          <polygon points="50,62 47,59 53,59" fill={t.nose} />
          <path d="M47 65 Q50 68 53 65" fill="none" stroke={t.outline} strokeWidth="2" strokeLinecap="round" />
          {/* Explorer Hat */}
          <path d="M35 38 Q50 30 65 38 L62 46 Q50 42 38 46 Z" fill={t.accessory} stroke={t.outline} strokeWidth="2" />
          <circle cx="50" cy="33" r="3" fill={t.accessoryAccent} />
        </svg>
      )
    },
    mimi: {
      name: t.name,
      title: t.role,
      role: 'Matematika',
      bg: t.badgeBg,
      border: t.badgeBorder,
      renderSvg: (isAnim) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Cat Ears with ear wiggle */}
          <g className={isAnim ? 'anim-mascot-ear' : ''} style={{ transformOrigin: '50px 40px' }}>
            <polygon points="26,45 20,20 44,35" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="26,38 23,26 38,34" fill={t.innerEar} />
            <polygon points="74,45 80,20 56,35" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="74,38 77,26 62,34" fill={t.innerEar} />
          </g>
          {/* Head */}
          <circle cx="50" cy="60" r="30" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
          <ellipse cx="50" cy="65" rx="20" ry="16" fill={t.snout} />
          <circle cx="34" cy="66" r="5" fill={t.blush} />
          <circle cx="66" cy="66" r="5" fill={t.blush} />
          {/* Glasses for Math Cat */}
          <circle cx="39" cy="58" r="9" fill="none" stroke={t.outline} strokeWidth="2.5" />
          <circle cx="61" cy="58" r="9" fill="none" stroke={t.outline} strokeWidth="2.5" />
          <line x1="48" y1="58" x2="52" y2="58" stroke={t.outline} strokeWidth="2.5" />
          {/* Blinking Eyes */}
          <g className={isAnim ? 'anim-mascot-blink' : ''} style={{ transformOrigin: '50px 58px' }}>
            <circle cx="39" cy="58" r="3" fill={t.outline} />
            <circle cx="61" cy="58" r="3" fill={t.outline} />
          </g>
          {/* Nose */}
          <polygon points="50,65 47,62 53,62" fill={t.nose} />
          <path d="M47 67 Q50 70 53 67" fill="none" stroke={t.outline} strokeWidth="2" strokeLinecap="round" />
          {/* Whiskers */}
          <line x1="22" y1="63" x2="14" y2="61" stroke={t.outline} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="22" y1="68" x2="14" y2="70" stroke={t.outline} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="78" y1="63" x2="86" y2="61" stroke={t.outline} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="78" y1="68" x2="86" y2="70" stroke={t.outline} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    },
    luna: {
      name: t.name,
      title: t.role,
      role: 'B. Indonesia',
      bg: t.badgeBg,
      border: t.badgeBorder,
      renderSvg: (isAnim) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Owl Ear Tufts */}
          <g className={isAnim ? 'anim-mascot-ear' : ''} style={{ transformOrigin: '50px 38px' }}>
            <polygon points="26,38 20,20 38,32" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="74,38 80,20 62,32" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
          </g>
          {/* Owl Body/Head */}
          <circle cx="50" cy="58" r="32" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
          {/* Big eye circles */}
          <circle cx="37" cy="54" r="14" fill="#FFFFFF" stroke={t.outline} strokeWidth="2" />
          <circle cx="63" cy="54" r="14" fill="#FFFFFF" stroke={t.outline} strokeWidth="2" />
          {/* Blinking Owl Pupils */}
          <g className={isAnim ? 'anim-mascot-blink' : ''} style={{ transformOrigin: '50px 54px' }}>
            <circle cx="37" cy="54" r="6" fill={t.outline} />
            <circle cx="63" cy="54" r="6" fill={t.outline} />
            <circle cx="39" cy="52" r="2" fill="#FFFFFF" />
            <circle cx="65" cy="52" r="2" fill="#FFFFFF" />
          </g>
          {/* Beak */}
          <polygon points="50,64 45,56 55,56" fill={t.nose} stroke={t.outline} strokeWidth="2" strokeLinejoin="round" />
          {/* Feather chest pattern */}
          <path d="M42 75 Q50 80 58 75" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M44 82 Q50 86 56 82" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    bubu: {
      name: t.name,
      title: t.role,
      role: 'IPA & Sains',
      bg: t.badgeBg,
      border: t.badgeBorder,
      renderSvg: (isAnim) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Bear Ears */}
          <g className={isAnim ? 'anim-mascot-ear' : ''} style={{ transformOrigin: '50px 42px' }}>
            <circle cx="26" cy="34" r="12" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
            <circle cx="26" cy="34" r="6" fill={t.innerEar} />
            <circle cx="74" cy="34" r="12" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
            <circle cx="74" cy="34" r="6" fill={t.innerEar} />
          </g>
          {/* Head */}
          <circle cx="50" cy="60" r="30" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
          {/* Snout */}
          <ellipse cx="50" cy="68" rx="16" ry="12" fill={t.snout} stroke={t.outline} strokeWidth="2" />
          {/* Nose */}
          <ellipse cx="50" cy="63" rx="6" ry="4" fill={t.nose} />
          <path d="M50 67 L50 72" stroke={t.outline} strokeWidth="2" strokeLinecap="round" />
          <path d="M46 72 Q50 75 54 72" fill="none" stroke={t.outline} strokeWidth="2" strokeLinecap="round" />
          {/* Blinking Eyes */}
          <g className={isAnim ? 'anim-mascot-blink' : ''} style={{ transformOrigin: '50px 54px' }}>
            <circle cx="39" cy="54" r="3.5" fill={t.outline} />
            <circle cx="61" cy="54" r="3.5" fill={t.outline} />
            <circle cx="40" cy="52.5" r="1.2" fill="#FFFFFF" />
            <circle cx="62" cy="52.5" r="1.2" fill="#FFFFFF" />
          </g>
          {/* Green Leaf on head */}
          <path d="M48 28 C42 22 54 18 56 26 C58 32 50 34 48 28 Z" fill={t.accessory} stroke={t.outline} strokeWidth="1.8" />
        </svg>
      )
    },
    piko: {
      name: t.name,
      title: t.role,
      role: 'Pengetahuan',
      bg: t.badgeBg,
      border: t.badgeBorder,
      renderSvg: (isAnim) => (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Fox Ears with ear wiggle */}
          <g className={isAnim ? 'anim-mascot-ear' : ''} style={{ transformOrigin: '50px 44px' }}>
            <polygon points="22,46 16,16 42,32" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="24,40 20,24 36,34" fill="#FFFFFF" />
            <polygon points="78,46 84,16 58,32" fill={t.fur} stroke={t.outline} strokeWidth="2.5" strokeLinejoin="round" />
            <polygon points="76,40 80,24 64,34" fill="#FFFFFF" />
          </g>
          {/* Head */}
          <circle cx="50" cy="60" r="30" fill={t.fur} stroke={t.outline} strokeWidth="2.5" />
          {/* White Fox Cheeks */}
          <path d="M22 66 Q36 78 50 88 Q64 78 78 66 Q68 56 50 64 Q32 56 22 66 Z" fill="#FFFFFF" stroke={t.outline} strokeWidth="2" strokeLinejoin="round" />
          {/* Eyes (Cute curved fox wink) */}
          <g className={isAnim ? 'anim-mascot-blink' : ''} style={{ transformOrigin: '50px 56px' }}>
            <path d="M35 56 Q40 52 45 56" fill="none" stroke={t.outline} strokeWidth="3" strokeLinecap="round" />
            <path d="M65 56 Q60 52 55 56" fill="none" stroke={t.outline} strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* Nose */}
          <circle cx="50" cy="74" r="4" fill={t.nose} />
        </svg>
      )
    }
  };

  const char = characters[characterId] || characters.kiko;
  const animClass = cheer ? 'anim-mascot-cheer' : animated ? 'anim-mascot-idle' : '';

  return (
    <div
      className={`character-avatar-wrapper ${animClass} ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: char.bg,
          border: `3px solid ${char.border}`,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 8px rgba(48,60,74,0.12)',
          flexShrink: 0
        }}
      >
        {char.renderSvg(animated)}
      </div>
      {showName && (
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text)' }}>
            {char.name}
          </span>
        </div>
      )}
    </div>
  );
}
