import React, { useEffect, useState } from 'react';
import { Star, Sparkles } from 'lucide-react';

export function CelebrationEffect({ active = false, duration = 3000, onComplete }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    // Generate 16 lightweight confetti/star particles
    const colors = ['#F59E0B', '#3B82F6', '#10B981', '#EC4899', '#8B5CF6', '#F97316'];
    const newParticles = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${15 + (i * 70) / 16}%`,
      color: colors[i % colors.length],
      size: 6 + (i % 4) * 3,
      delay: `${(i % 5) * 0.12}s`,
      isStar: i % 3 === 0
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
      if (onComplete) onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [active, duration, onComplete]);

  if (!active || particles.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '20%',
            left: p.left,
            animation: `confettiFall 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${p.delay} infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {p.isStar ? (
            <Star size={p.size * 1.5} fill={p.color} color={p.color} />
          ) : (
            <div
              style={{
                width: `${p.size}px`,
                height: `${p.size * 1.4}px`,
                backgroundColor: p.color,
                borderRadius: '2px'
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
