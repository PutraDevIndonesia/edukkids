import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Map,
  HelpCircle,
  Gamepad2,
  Award,
  Trophy,
  User
} from 'lucide-react';
import { soundFx } from '../../utils/soundFx';

export const navItems = [
  { to: '/', label: 'Beranda', icon: Home },
  { to: '/peta', label: 'Peta Petualangan', icon: Map },
  { to: '/kuis', label: 'Kuis', icon: HelpCircle },
  { to: '/game', label: 'Game Edukasi', icon: Gamepad2 },
  { to: '/pencapaian', label: 'Lencana', icon: Award },
  { to: '/peringkat', label: 'Peringkat', icon: Trophy },
  { to: '/profil', label: 'Profil', icon: User }
];

export function NavLinks({ className = '', onItemClick }) {
  const handleNavClick = (e) => {
    soundFx.playPop();
    if (onItemClick) onItemClick(e);
  };

  return (
    <nav
      className={`nav-links-container ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}
      aria-label="Navigasi Utama"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            onClick={handleNavClick}
            style={({ isActive }) => ({
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 14px',
              borderRadius: '14px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.92rem',
              fontWeight: 800,
              color: isActive ? '#1A4971' : '#334155',
              backgroundColor: isActive ? '#E2F1FF' : 'transparent',
              border: isActive ? '2.5px solid #2875B8' : '2.5px solid transparent',
              boxShadow: isActive ? '0 3px 0 #205784' : 'none',
              transform: isActive ? 'translateY(-1px)' : 'none',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.12s ease'
            })}
            className="nav-link-item"
          >
            <Icon size={18} strokeWidth={2.4} aria-hidden="true" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
