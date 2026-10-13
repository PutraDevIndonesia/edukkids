import React, { useState, useEffect } from 'react';
import { Gift, Star, Zap, CheckCircle2, Sparkles } from 'lucide-react';
import { storageService } from '../../services/storageService';
import { soundFx } from '../../utils/soundFx';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { CelebrationEffect } from '../common/CelebrationEffect';

export function DailyRewardChest() {
  const [rewardStatus, setRewardStatus] = useState(() => storageService.getDailyRewardStatus());
  const [isOpening, setIsOpening] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [claimedReward, setClaimedReward] = useState(null);

  useEffect(() => {
    function handleStorage() {
      setRewardStatus(storageService.getDailyRewardStatus());
    }
    window.addEventListener('edukids:storage-change', handleStorage);
    return () => window.removeEventListener('edukids:storage-change', handleStorage);
  }, []);

  const handleOpenChest = () => {
    if (rewardStatus.isClaimedToday || isOpening) return;

    setIsOpening(true);
    soundFx.playPop();

    setTimeout(() => {
      const res = storageService.claimDailyReward();
      if (res.success) {
        setClaimedReward(res);
        setShowCelebration(true);
        soundFx.playCelebration();
        setTimeout(() => soundFx.playStar(), 300);
        setRewardStatus(storageService.getDailyRewardStatus());
      }
      setIsOpening(false);
    }, 450);
  };

  const isClaimed = rewardStatus.isClaimedToday;

  return (
    <Card
      className="interactive-card"
      style={{
        padding: '24px',
        backgroundColor: '#FFFFFF',
        borderTop: '6px solid var(--color-warning)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CelebrationEffect trigger={showCelebration} type="stars" />

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        {/* Left: Chest Illustration & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* 2D Chest SVG Icon */}
          <div
            className={!isClaimed ? 'anim-float' : ''}
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '18px',
              backgroundColor: isClaimed ? '#FFF9E6' : '#FFF5DD',
              border: '2px solid #E6B84E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: !isClaimed ? '0 6px 16px rgba(255, 200, 87, 0.35)' : 'none'
            }}
          >
            <svg viewBox="0 0 64 64" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Chest Body */}
              <rect x="8" y="24" width="48" height="28" rx="6" fill="#804B22" stroke="#4A2508" strokeWidth="2.5" />
              {/* Gold Straps */}
              <rect x="18" y="24" width="6" height="28" fill="#FFC857" stroke="#B7791F" strokeWidth="1.5" />
              <rect x="40" y="24" width="6" height="28" fill="#FFC857" stroke="#B7791F" strokeWidth="1.5" />
              {/* Chest Lid */}
              <path
                d={
                  isClaimed || isOpening
                    ? 'M 6 12 Q 32 -4 58 12 L 56 22 Q 32 6 8 22 Z'
                    : 'M 6 24 Q 32 10 58 24 L 58 26 Q 32 12 6 26 Z'
                }
                fill="#9C6237"
                stroke="#4A2508"
                strokeWidth="2.5"
              />
              {/* Stars bursting inside when open */}
              {(isClaimed || isOpening) && (
                <g className="anim-star-twinkle" transform="translate(32, 22)">
                  <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#FFDE72" stroke="#E6A823" strokeWidth="1.2" />
                </g>
              )}
              {/* Keyhole / Lock */}
              <rect x="28" y="27" width="8" height="11" rx="2" fill="#FFC857" stroke="#B7791F" strokeWidth="1.5" />
              <circle cx="32" cy="31" r="1.8" fill="#4A2508" />
              <line x1="32" y1="32" x2="32" y2="36" stroke="#4A2508" strokeWidth="1.2" />
            </svg>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            </div>
            <h3 style={{ margin: 0, color: 'var(--color-primary-dark)', fontSize: '1.15rem' }}>
              Peti Harian Penjelajah
            </h3>
            <p style={{ margin: '3px 0 0 0', color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
              {isClaimed
                ? 'Luar biasa! Kamu sudah mengambil hadiah hari ini. Datang lagi besok ya!'
                : 'Buka peti kejutan harianmu untuk mendapatkan bonus XP dan Bintang gratis!'}
            </p>
          </div>
        </div>

        {/* Right: Claim Action / Claimed Status */}
        <div>
          {isClaimed ? (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px 8px 10px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                border: '1.5px solid #86EFAC',
                boxShadow: '0 2px 0 #4ADE80',
                color: '#166534',
                fontWeight: 800,
                fontSize: '0.88rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.2px'
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '8px',
                  backgroundColor: '#22C55E',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.12)'
                }}
              >
                <CheckCircle2 size={15} strokeWidth={2.8} />
              </span>
              <span>Sudah Diklaim Hari Ini</span>
            </div>
          ) : (
            <Button
              variant="warning"
              size="lg"
              onClick={handleOpenChest}
              disabled={isOpening}
              style={{
                boxShadow: '0 4px 14px rgba(255, 200, 87, 0.45)',
                fontWeight: 800
              }}
            >
              <Gift size={20} />
              <span>{isOpening ? 'Membuka Peti...' : 'Buka Peti Sekarang!'}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Claimed Banner Notification if just claimed */}
      {claimedReward && (
        <div
          className="anim-pop"
          style={{
            marginTop: '16px',
            padding: '12px 16px',
            borderRadius: '10px',
            backgroundColor: '#FFF9E6',
            border: '2px dashed #E6B84E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#997316', fontWeight: 800 }}>
            <span>🎉 Selamat! Kamu mendapatkan:</span>
          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#B7791F', fontWeight: 800 }}>
              <Star size={16} fill="#FFC857" color="#FFC857" />
              <span>+{claimedReward.bonusStars} Bintang</span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary-dark)', fontWeight: 800 }}>
              <Zap size={16} fill="#2875B8" color="#2875B8" />
              <span>+{claimedReward.bonusXp} XP</span>
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}
