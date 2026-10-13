import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { NavLinks } from './NavLinks';
import { RewardSummary } from './RewardSummary';
import { UserAvatarMenu } from './UserAvatarMenu';
import { MobileNavigation } from './MobileNavigation';

export function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: '3.5px solid #E2D9CC',
        boxShadow: '0 4px 0 rgba(226, 217, 204, 0.45)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '88px',
          paddingTop: '8px',
          paddingBottom: '8px',
          gap: '16px'
        }}
      >
        {/* A. Brand EduKids */}
        <BrandLogo />

        {/* B. Nav Links (Desktop & Tablet Wide) */}
        <div className="desktop-nav-section" style={{ display: 'flex', alignItems: 'center' }}>
          <NavLinks />
        </div>

        {/* Right Section: Reward Capsule & Avatar Dropdown / Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {/* C. Reward Capsule Summary */}
          <div className="reward-desktop">
            <RewardSummary />
          </div>
          <div className="reward-mobile">
            <RewardSummary compact />
          </div>

          {/* D. User Avatar Dropdown (Desktop & Tablet) */}
          <div className="avatar-desktop">
            <UserAvatarMenu />
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Buka menu navigasi"
            aria-expanded={mobileDrawerOpen}
            style={{
              display: 'none',
              padding: '10px',
              borderRadius: '12px',
              backgroundColor: '#FFF9EF',
              border: '1.5px solid #E8E2D8',
              color: '#205784',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(48, 60, 74, 0.05)'
            }}
          >
            <Menu size={24} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />

      {/* Responsive Breakpoint Styles */}
      <style>{`
        /* Desktop styles (>= 1200px) */
        @media (min-width: 1200px) {
          .desktop-nav-section {
            display: flex !important;
          }
          .reward-desktop {
            display: block !important;
          }
          .reward-mobile {
            display: none !important;
          }
          .avatar-desktop {
            display: block !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }

        /* Tablet mode (1024px - 1199px) */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .desktop-nav-section {
            display: flex !important;
          }
          .desktop-nav-section .nav-link-item {
            padding: 8px 9px !important;
            font-size: 0.88rem !important;
            gap: 5px !important;
          }
          .reward-desktop {
            display: block !important;
          }
          .reward-mobile {
            display: none !important;
          }
          .avatar-desktop {
            display: block !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }

        /* Smaller Tablet & Mobile (< 1024px) */
        @media (max-width: 1023px) {
          .desktop-nav-section {
            display: none !important;
          }
          .avatar-desktop {
            display: none !important;
          }
          .reward-desktop {
            display: none !important;
          }
          .reward-mobile {
            display: block !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }

        /* Extra small mobile (< 440px) */
        @media (max-width: 440px) {
          .reward-mobile {
            display: none !important;
          }
        }

        .dropdown-item:hover {
          background-color: #E8F3FF !important;
          color: #205784 !important;
        }
        .dropdown-item.logout:hover {
          background-color: #FCEAE5 !important;
          color: #C25F4E !important;
        }
      `}</style>
    </header>
  );
}
