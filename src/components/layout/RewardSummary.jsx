import React, { useState } from 'react';
import { Star, Zap } from 'lucide-react';
import { useEduProgress } from '../../hooks/useEduProgress';
import { soundFx } from '../../utils/soundFx';

export function RewardSummary({ className = '', compact = false }) {
  const { progress } = useEduProgress();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    soundFx.playStar();
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`reward-summary-capsule ${className}`}
      role="status"
      aria-label={`Pencapaian belajar: ${progress.totalStars} Bintang, ${progress.totalXp} XP. Klik untuk mendengarkan kilau bintang!`}
      title={`Kamu punya ${progress.totalStars} Bintang dan ${progress.totalXp} XP! Klik untuk dengar suara kilau!`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: compact ? '8px' : '10px',
        padding: compact ? '6px 12px' : '7px 16px',
        backgroundColor: '#FFF9EF',
        borderRadius: '999px',
        border: '2.5px solid #F3DFC1',
        boxShadow: '0 3.5px 0 #E2CDAF',
        transform: clicked ? 'scale(0.95) translateY(1px)' : 'none',
        transition: 'all 0.12s ease',
        flexShrink: 0,
        userSelect: 'none',
        cursor: 'pointer'
      }}
    >
      {/* Stars count */}
      <span
        className="interactive-badge"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontWeight: 800,
          fontSize: '0.92rem',
          color: '#B7791F',
          fontFamily: 'var(--font-body)'
        }}
      >
        <Star size={17} fill="#FFC857" color="#FFC857" className="anim-star-twinkle" aria-hidden="true" />
        <span>{progress.totalStars}</span>
      </span>

      {/* Vertical separator */}
      <span
        style={{
          width: '1px',
          height: '16px',
          backgroundColor: '#E8E2D8',
          display: 'inline-block'
        }}
        aria-hidden="true"
      />

      {/* XP count */}
      <span
        className="interactive-badge"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontWeight: 800,
          fontSize: '0.92rem',
          color: '#205784',
          fontFamily: 'var(--font-body)'
        }}
      >
        <Zap size={17} fill="#2875B8" color="#2875B8" aria-hidden="true" />
        <span>{compact ? `${progress.totalXp}` : `${progress.totalXp} XP`}</span>
      </span>
    </button>
  );
}
