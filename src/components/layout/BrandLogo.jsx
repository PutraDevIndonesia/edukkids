import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { soundFx } from '../../utils/soundFx';

export function BrandLogo() {
  return (
    <Link
      to="/"
      onClick={() => soundFx.playPop()}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none',
        flexShrink: 0
      }}
      aria-label="EduKids - Main, Belajar, Raih Bintang!"
    >
      {/* Blue Rounded Square Logo with Yellow Star */}
      <div
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '14px',
          backgroundColor: '#2875B8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 0 #205784',
          transition: 'transform 0.15s ease'
        }}
      >
        <Star size={26} fill="#FFC857" color="#FFC857" />
      </div>

      <div>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#205784',
            display: 'block',
            lineHeight: 1.15,
            letterSpacing: '-0.02em'
          }}
        >
          EduKids
        </span>
        <span
          style={{
            fontSize: '0.75rem',
            color: '#718096',
            fontWeight: 700,
            fontFamily: 'var(--font-body)',
            display: 'block',
            lineHeight: 1
          }}
        >
          Main, Belajar, Raih Bintang!
        </span>
      </div>
    </Link>
  );
}
