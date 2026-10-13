import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  UserRound,
  TrendingUp,
  Settings,
  Star,
  Zap
} from 'lucide-react';
import { useEduProgress } from '../../hooks/useEduProgress';
import { CharacterAvatar } from '../characters/CharacterAvatar';

export function UserAvatarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const { profile = {}, progress = {} } = useEduProgress();

  // Close on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const nickname = profile?.nickname || 'Penjelajah Cilik';
  const grade = profile?.grade || 1;
  const avatarId = profile?.avatarId || 'kiko';
  const totalStars = progress?.totalStars ?? 0;
  const totalXp = progress?.totalXp ?? 0;

  return (
    <div ref={menuRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {/* Clean Minimalist Avatar Trigger Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Menu profil ${nickname}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="avatar-clean-btn"
      >
        <CharacterAvatar characterId={avatarId} size={42} animated />
      </button>

      {/* Dropdown Menu Panel - Player Identity Card */}
      {isOpen && (
        <div
          role="menu"
          aria-label="Menu akun penjelajah"
          className="profile-dropdown-menu anim-pop"
        >
          {/* 1. Header: Mini Player Identity Card (Clickable to /profil) */}
          <div className="profile-card-header">
            <Link
              to="/profil"
              onClick={() => setIsOpen(false)}
              className="profile-card-user-row"
              style={{ textDecoration: 'none', color: 'inherit' }}
              title="Buka Halaman Profil Saya"
            >
              <div className="profile-avatar-circle">
                <CharacterAvatar characterId={avatarId} size={38} animated />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '0.96rem',
                    color: '#205784',
                    fontFamily: 'var(--font-display)',
                    lineHeight: 1.2,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                  title={nickname}
                >
                  {nickname}
                </strong>
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: '#718096',
                    fontWeight: 700,
                    display: 'block',
                    lineHeight: 1.3
                  }}
                >
                  Penjelajah Kelas {grade} SD
                </span>
              </div>
            </Link>

            {/* 2. Mini Progress Summary Capsule */}
            <div className="profile-card-stats" aria-label={`Pencapaian: ${totalStars} Bintang, ${totalXp} XP`}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#B7791F'
                }}
              >
                <Star size={14} fill="#FFC857" color="#FFC857" aria-hidden="true" />
                <span>{totalStars} Bintang</span>
              </span>

              <span
                style={{
                  width: '1px',
                  height: '14px',
                  backgroundColor: '#E8E2D8',
                  display: 'inline-block'
                }}
                aria-hidden="true"
              />

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: '#205784'
                }}
              >
                <Zap size={14} fill="#2875B8" color="#2875B8" aria-hidden="true" />
                <span>{totalXp} XP</span>
              </span>
            </div>
          </div>

          {/* 3. Redesigned Functional Menu Items (No Logout Menu) */}
          <div style={{ padding: '6px 0 4px 0' }}>
            <Link
              to="/profil"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="profile-menu-item"
            >
              <span className="profile-menu-icon" aria-hidden="true">
                <UserRound size={18} strokeWidth={2.4} />
              </span>
              <span>Profil Saya</span>
            </Link>

            <Link
              to="/progres"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="profile-menu-item"
            >
              <span className="profile-menu-icon" aria-hidden="true">
                <TrendingUp size={18} strokeWidth={2.4} />
              </span>
              <span>Progres Belajar</span>
            </Link>

            <Link
              to="/pengaturan"
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="profile-menu-item"
            >
              <span className="profile-menu-icon" aria-hidden="true">
                <Settings size={18} strokeWidth={2.4} />
              </span>
              <span>Pengaturan</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
