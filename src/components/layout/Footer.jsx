import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Map,
  HelpCircle,
  Gamepad2,
  Award,
  ArrowRight,
  Heart
} from 'lucide-react';
import { CharacterAvatar } from '../characters/CharacterAvatar';

export function Footer() {
  const characters = [
    { id: 'kiko', name: 'Kiko', role: 'Rubah Cerdas' },
    { id: 'mimi', name: 'Mimi', role: 'Kelinci Ceria' },
    { id: 'luna', name: 'Luna', role: 'Burung Bijak' },
    { id: 'bubu', name: 'Bubu', role: 'Beruang Ramah' },
    { id: 'piko', name: 'Piko', role: 'Panda Teliti' }
  ];

  const exploreLinks = [
    { to: '/peta', label: 'Peta Petualangan', icon: Map, color: '#2875B8' },
    { to: '/kuis', label: 'Tantangan Kuis', icon: HelpCircle, color: '#FFC857' },
    { to: '/game', label: 'Mini-Game Edukasi', icon: Gamepad2, color: '#3E9568' },
    { to: '/pencapaian', label: 'Koleksi Lencana', icon: Award, color: '#8D80C9' }
  ];

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#FFF9EF',
        marginTop: 'auto',
        overflow: 'hidden'
      }}
      aria-label="Informasi Footer EduKids"
    >
      {/* 1. ORGANIC STORYBOOK ROLLING HILL TOP DIVIDER */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: 'translateY(1px)'
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 64"
          width="100%"
          height="48"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle back hill curve */}
          <path
            d="M 0 38 Q 300 8 600 24 Q 900 40 1200 14 L 1200 64 L 0 64 Z"
            fill="#EAF7EE"
          />
          {/* Main front green hill curve */}
          <path
            d="M 0 44 Q 350 20 700 36 Q 1050 52 1200 28 L 1200 64 L 0 64 Z"
            fill="#FFF9EF"
          />
          {/* Decorative hill stroke */}
          <path
            d="M 0 44 Q 350 20 700 36 Q 1050 52 1200 28"
            stroke="#DCEFE3"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      {/* AMBIENT BACKGROUND DECORATIONS (Stars, Flowers, Dots) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0
        }}
        aria-hidden="true"
      >
        {/* Soft Star 1 */}
        <div
          className="anim-star-twinkle"
          style={{ position: 'absolute', top: '55px', left: '4%', opacity: 0.65 }}
        >
          <Star size={18} fill="#FFC857" color="#FFC857" />
        </div>
        {/* Soft Star 2 */}
        <div
          className="anim-star-twinkle"
          style={{ position: 'absolute', top: '70px', right: '5%', opacity: 0.65, animationDelay: '1.5s' }}
        >
          <Star size={20} fill="#FFC857" color="#FFC857" />
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT CONTAINER */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '20px',
          paddingBottom: '32px'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'start',
            marginBottom: '36px'
          }}
        >
          {/* AREA 1: BRAND EDUKIDS & VALUE PROPOSITION */}
          <div style={{ maxWidth: '380px' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                marginBottom: '14px'
              }}
              aria-label="EduKids Beranda"
            >
              {/* Blue rounded logo box with gold star */}
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: '#2875B8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 3px 0 #205784'
                }}
              >
                <Star size={24} fill="#FFC857" color="#FFC857" />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#205784',
                    display: 'block',
                    lineHeight: 1
                  }}
                >
                  EduKids
                </span>
                <span style={{ fontSize: '0.74rem', color: '#718096', fontWeight: 700 }}>
                  Main, Belajar, Raih Bintang!
                </span>
              </div>
            </Link>

            <p
              style={{
                fontSize: '0.92rem',
                color: '#718096',
                lineHeight: 1.6,
                marginBottom: '16px',
                marginRight: '8px'
              }}
            >
              Platform kuis dan permainan edukasi interaktif untuk siswa Sekolah Dasar kelas 1–6. Dirancang dengan pendekatan gamifikasi aman dan penuh keceriaan.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E8E2D8',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#205784'
              }}
            >
              <ShieldCheck size={16} color="#3E9568" />
              <span>100% Ramah Anak & Edukatif</span>
            </div>
          </div>

          {/* AREA 2: SAHABAT PETUALANG EDUKIDS (MASCOTS LINE-UP) */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: '#205784',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Sahabat Petualang EduKids
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '14px' }}>
              Lima sahabat setia yang selalu menemani penjelajahan ilmu di setiap pulau!
            </p>

            {/* Mascot Avatar Cards Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(88px, 1fr))',
                gap: '10px'
              }}
            >
              {characters.map((c) => (
                <div
                  key={c.id}
                  aria-label={`${c.name} - ${c.role}`}
                  className="footer-mascot-card interactive-badge"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E8E2D8',
                    borderRadius: '16px',
                    padding: '10px 6px',
                    textAlign: 'center',
                    boxShadow: '0 2px 6px rgba(48, 60, 74, 0.04)',
                    cursor: 'default'
                  }}
                >
                  <div style={{ marginBottom: '6px' }}>
                    <CharacterAvatar characterId={c.id} size={44} />
                  </div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: '#205784',
                      fontFamily: 'var(--font-display)',
                      lineHeight: 1.1
                    }}
                  >
                    {c.name}
                  </strong>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: '#718096',
                      fontWeight: 700,
                      display: 'block',
                      marginTop: '2px'
                    }}
                  >
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AREA 3: JELAJAHI EDUKIDS (EXPLORATION LINKS) */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: '#205784',
                marginBottom: '14px'
              }}
            >
              Jelajahi EduKids
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              {exploreLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="footer-nav-link"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '9px 14px',
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #E8E2D8',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#344256',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        transition: 'all 0.15s ease',
                        boxShadow: '0 2px 4px rgba(48, 60, 74, 0.03)'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Icon size={18} color={item.color} strokeWidth={2.4} aria-hidden="true" />
                        <span>{item.label}</span>
                      </span>
                      <ArrowRight size={15} color="#718096" className="link-arrow" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* 3. BOTTOM BAR (SECURITY & CREDITS) */}
        <div
          style={{
            borderTop: '1.5px solid #E8E2D8',
            paddingTop: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '14px',
            fontSize: '0.85rem',
            color: '#718096'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={18} color="#3E9568" />
            <span>EduKids — Lingkungan Belajar Digital Aman & Ramah Anak</span>
          </div>
          <div>
            <span>
              Dibuat dengan semangat oleh <strong style={{ color: '#205784' }}>mputraramadhani</strong>
            </span>
          </div>
        </div>
      </div>

      {/* FOOTER HOVER & TRANSITION STYLES */}
      <style>{`
        .footer-mascot-card:hover {
          transform: translateY(-4px);
          border-color: #2875B8 !important;
          box-shadow: 0 6px 14px rgba(40, 117, 184, 0.12) !important;
        }

        .footer-nav-link:hover {
          background-color: #E8F3FF !important;
          border-color: #B9DCFD !important;
          color: #205784 !important;
          transform: translateX(4px);
        }

        .footer-nav-link:hover .link-arrow {
          color: #205784 !important;
          transform: translateX(2px);
        }

        .footer-nav-link:focus-visible {
          outline: 2px solid #2875B8;
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  );
}
