import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { speechService } from '../../utils/speech';

export function AudioReaderButton({
  textToRead = '',
  label = 'Bacakan Soal',
  className = '',
  size = 'md'
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const isSupported = speechService.isSupported();

  useEffect(() => {
    return () => {
      speechService.stop();
    };
  }, [textToRead]);

  if (!isSupported) return null;

  const handleToggle = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      speechService.speak(textToRead, {
        onStart: () => setIsPlaying(true),
        onEnd: () => setIsPlaying(false),
        onError: () => setIsPlaying(false)
      });
    }
  };

  const isSmall = size === 'sm';

  return (
    <button
      type="button"
      onClick={handleToggle}
      title={isPlaying ? 'Hentikan Suara Narasi' : 'Dengarkan Soal Dibacakan'}
      aria-label={isPlaying ? 'Hentikan Suara' : label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: isSmall ? '4px' : '6px',
        padding: isSmall ? '5px 10px' : '7px 14px',
        borderRadius: '999px',
        backgroundColor: isPlaying ? 'var(--color-warning)' : 'var(--color-primary-soft)',
        color: isPlaying ? '#4A3810' : 'var(--color-primary-dark)',
        border: isPlaying ? '2px solid #E6B84E' : '2px solid var(--color-primary)',
        fontSize: isSmall ? '0.78rem' : '0.85rem',
        fontWeight: 800,
        fontFamily: 'var(--font-body)',
        cursor: 'pointer',
        boxShadow: isPlaying ? '0 0 10px rgba(255, 200, 87, 0.5)' : 'none',
        transition: 'all 0.18s ease',
        userSelect: 'none'
      }}
      className={`audio-reader-btn ${className}`}
    >
      {isPlaying ? (
        <>
          <VolumeX size={isSmall ? 15 : 18} />
          <span>Hentikan</span>
        </>
      ) : (
        <>
          <Volume2 size={isSmall ? 15 : 18} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
