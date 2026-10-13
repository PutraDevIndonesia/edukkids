import React from 'react';

export function ProgressBar({
  current = 0,
  total = 100,
  color = 'var(--color-primary)',
  height = 12,
  className = '',
  animated = true
}) {
  const percentage = Math.min(100, Math.max(0, total > 0 ? (current / total) * 100 : 0));

  return (
    <div
      className={`progress-bar-wrapper ${className}`}
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      style={{
        width: '100%',
        backgroundColor: 'var(--color-surface-muted)',
        borderRadius: 'var(--radius-full)',
        height: `${height}px`,
        overflow: 'hidden',
        border: '1.5px solid var(--color-border)',
        position: 'relative'
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
          height: '100%',
          borderRadius: 'var(--radius-full)',
          transition: animated ? 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle glossy sheen on bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))',
            borderRadius: 'var(--radius-full)'
          }}
        />
      </div>
    </div>
  );
}
