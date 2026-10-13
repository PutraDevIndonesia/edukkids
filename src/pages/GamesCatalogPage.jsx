import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Play, Sparkles, Star, Award, Shield } from 'lucide-react';
import { gamesList } from '../data/games/gamesData';
import { useEduProgress } from '../hooks/useEduProgress';
import { CharacterAvatar } from '../components/characters/CharacterAvatar';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

export function GamesCatalogPage() {
  const { progress } = useEduProgress();

  return (
    <div className="container anim-slide-up">
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
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
            <Gamepad2 size={13} strokeWidth={2.6} />
          </span>
          <span>Mini-Game Edukasi</span>
        </div>
        <h1 style={{ color: 'var(--color-primary-dark)', margin: 0 }}>
          Arena Permainan EduKids
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
          Bermain sambil mengasah logika, merangkai kata, dan memecahkan misteri alam bersama sahabat petualang!
        </p>
      </div>

      {/* GAMES GRID */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}
      >
        {gamesList.map((game, idx) => {
          const isCompleted = (progress.completedGames || []).includes(game.id);

          return (
            <Card
              key={game.id}
              className={`interactive-card stagger-${(idx % 4) + 1}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF',
                borderTop: `8px solid ${game.themeColor}`
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CharacterAvatar characterId={game.characterId} size={48} />
                    <div>
                      <h3 style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.2rem' }}>
                        {game.title}
                      </h3>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: game.themeColor }}>
                        {game.genre}
                      </span>
                    </div>
                  </div>
                  {isCompleted && (
                    <Badge variant="success" icon={Award}>Tuntas</Badge>
                  )}
                </div>

                <div
                  style={{
                    backgroundColor: game.bgColor,
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    marginBottom: '16px',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-text)', fontStyle: 'italic' }}>
                    "{game.story}"
                  </p>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {game.description}
                </p>

                <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                  <Badge variant="primary">{game.subject}</Badge>
                  <Badge variant="warning">{game.gradeLevel}</Badge>
                </div>
              </div>

              <Link to={`/game/${game.id}`} style={{ textDecoration: 'none' }}>
                <Button variant="primary" icon={Play} style={{ width: '100%' }}>
                  Mainkan Sekarang
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
