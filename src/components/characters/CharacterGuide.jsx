import React from 'react';
import { CharacterAvatar } from './CharacterAvatar';

export function CharacterGuide({ characterId = 'kiko', speech = '', mood = 'neutral', className = '' }) {
  const moodBorder = {
    neutral: 'var(--color-border)',
    happy: 'var(--color-success)',
    encouraging: 'var(--color-warning)',
    curious: 'var(--color-primary)'
  }[mood] || 'var(--color-border)';

  return (
    <div
      className={`character-guide-box ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-surface)',
        border: `2px solid ${moodBorder}`,
        borderRadius: 'var(--radius-lg)',
        padding: '12px 18px',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <CharacterAvatar characterId={characterId} size={54} />
      <div style={{ flex: 1 }}>
        <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text)' }}>
          {speech}
        </p>
      </div>
    </div>
  );
}
