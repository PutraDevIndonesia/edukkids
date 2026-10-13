import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Star, Zap, TrendingUp, Settings } from 'lucide-react';
import { navItems } from './NavLinks';
import { CharacterAvatar } from '../characters/CharacterAvatar';
import { useEduProgress } from '../../hooks/useEduProgress';

export function MobileNavigation({ isOpen, onClose }) {
  const { profile, progress } = useEduProgress();

  // Handle escape key and lock body scroll
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigasi Menu Mobile"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(32, 87, 132, 0.45)',
        backdropFilter: 'blur(3px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      {/* Drawer Container */}
      <div
        className="anim-drawer"
        style={{
          width: '100%',
          maxWidth: '320px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-4px 0 20px rgba(48, 60, 74, 0.15)',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header (Clickable to /profil) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 18px',
            borderBottom: '1.5px solid #E8E2D8',
            backgroundColor: '#FFF9EF'
          }}
        >
          <Link
            to="/profil"
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
              flex: 1
            }}
          >
            <CharacterAvatar characterId={profile.avatarId || 'kiko'} size={44} />
            <div>
              <strong style={{ display: 'block', fontSize: '1rem', color: '#205784', fontFamily: 'var(--font-display)' }}>
                {profile.nickname}
              </strong>
              <span style={{ fontSize: '0.8rem', color: '#718096', fontWeight: 700 }}>
                Kelas {profile.grade} SD
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup menu navigasi"
            style={{
              padding: '8px',
              borderRadius: '10px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E8E2D8',
              color: '#344256',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Reward Status Bar in Drawer */}
        <div
          style={{
            padding: '12px 20px',
            backgroundColor: '#F8F4EB',
            borderBottom: '1px solid #E8E2D8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#B7791F', fontSize: '0.9rem' }}>
            <Star size={18} fill="#FFC857" color="#FFC857" />
            <span>{progress.totalStars} Bintang</span>
          </div>
          <span style={{ color: '#E8E2D8' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, color: '#205784', fontSize: '0.9rem' }}>
            <Zap size={18} fill="#2875B8" color="#2875B8" />
            <span>{progress.totalXp} XP</span>
          </div>
        </div>

        {/* Nav Links List */}
        <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  color: isActive ? '#205784' : '#344256',
                  backgroundColor: isActive ? '#E8F3FF' : 'transparent',
                  border: isActive ? '1.5px solid #B9DCFD' : '1.5px solid transparent',
                  textDecoration: 'none',
                  minHeight: '46px'
                })}
              >
                <Icon size={20} strokeWidth={2.4} aria-hidden="true" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div style={{ height: '1px', backgroundColor: '#E8E2D8', margin: '8px 4px' }} />

          {/* Quick links to Progress & Settings for Mobile */}
          <NavLink
            to="/progres"
            onClick={onClose}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem',
              fontWeight: 800,
              color: isActive ? '#205784' : '#344256',
              backgroundColor: isActive ? '#E8F3FF' : 'transparent',
              border: isActive ? '1.5px solid #B9DCFD' : '1.5px solid transparent',
              textDecoration: 'none',
              minHeight: '46px'
            })}
          >
            <TrendingUp size={20} strokeWidth={2.4} aria-hidden="true" />
            <span>Progres Belajar</span>
          </NavLink>

          <NavLink
            to="/pengaturan"
            onClick={onClose}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '12px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem',
              fontWeight: 800,
              color: isActive ? '#205784' : '#344256',
              backgroundColor: isActive ? '#E8F3FF' : 'transparent',
              border: isActive ? '1.5px solid #B9DCFD' : '1.5px solid transparent',
              textDecoration: 'none',
              minHeight: '46px'
            })}
          >
            <Settings size={20} strokeWidth={2.4} aria-hidden="true" />
            <span>Pengaturan</span>
          </NavLink>
        </div>

        {/* Footer info in drawer */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid #E8E2D8',
            fontSize: '0.8rem',
            color: '#718096',
            textAlign: 'center'
          }}
        >
          EduKids • Main, Belajar, Raih Bintang!
        </div>
      </div>
    </div>
  );
}
