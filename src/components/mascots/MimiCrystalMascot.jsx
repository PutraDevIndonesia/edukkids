import React from 'react';

export function MimiCrystalMascot({ size = 180, className = '' }) {
  return (
    <div
      className={`mimi-crystal-container ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size * 0.95}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
      aria-label="Ilustrasi Mimi si kelinci beransel biru sedang menghitung kristal ajaib"
    >
      <svg
        viewBox="0 0 240 220"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="mimiBackpack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B88C4" />
            <stop offset="100%" stopColor="#205784" />
          </linearGradient>

          <linearGradient id="crystalBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8BE3FF" />
            <stop offset="100%" stopColor="#2875B8" />
          </linearGradient>

          <linearGradient id="crystalGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF3A8" />
            <stop offset="100%" stopColor="#E5A823" />
          </linearGradient>

          <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shadow under mascot */}
        <ellipse cx="120" cy="205" rx="55" ry="9" fill="#344256" opacity="0.12" />

        {/* FLOATING DECORATIONS (Crystals, Numbers, Twinkling Stars) */}
        {/* Floating Star 1 */}
        <g className="anim-star-twinkle" transform="translate(42, 35)">
          <polygon
            points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3"
            fill="#FFC857"
            stroke="#D49917"
            strokeWidth="1.2"
          />
        </g>

        {/* Floating Star 2 */}
        <g className="anim-star-twinkle" style={{ animationDelay: '1.2s' }} transform="translate(198, 50)">
          <polygon
            points="0,-8 2.5,-2.5 8,0 2.5,2.5 0,8 -2.5,2.5 -8,0 -2.5,-2.5"
            fill="#FFC857"
            stroke="#D49917"
            strokeWidth="1.2"
          />
        </g>

        {/* Floating Crystal 1 (Blue) */}
        <g className="anim-crystal-1" transform="translate(35, 105)">
          <polygon
            points="0,-18 14,-5 10,16 -10,16 -14,-5"
            fill="url(#crystalBlue)"
            stroke="#205784"
            strokeWidth="2"
          />
          {/* Facet line */}
          <polyline points="0,-18 0,16 -14,-5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        </g>

        {/* Floating Crystal 2 (Gold) */}
        <g className="anim-crystal-2" transform="translate(195, 120)">
          <polygon
            points="0,-16 12,-4 8,14 -8,14 -12,-4"
            fill="url(#crystalGold)"
            stroke="#9E7314"
            strokeWidth="2"
          />
          <polyline points="0,-16 0,14 12,-4" fill="none" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
        </g>

        {/* Floating Number Badge: "3" */}
        <g className="anim-crystal-2" style={{ animationDelay: '0.8s' }} transform="translate(170, 30)">
          <circle cx="10" cy="10" r="13" fill="#E8F3FF" stroke="#2875B8" strokeWidth="1.8" />
          <text x="10" y="15" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="13" fill="#205784">+3</text>
        </g>

        {/* Floating Number Badge: "7" */}
        <g className="anim-crystal-1" style={{ animationDelay: '1.5s' }} transform="translate(60, 48)">
          <circle cx="9" cy="9" r="11" fill="#FFF5DD" stroke="#FFC857" strokeWidth="1.8" />
          <text x="9" y="13" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="700" fontSize="11" fill="#B7791F">7</text>
        </g>

        {/* MIMI THE BUNNY MASCOT (Animated Hop) */}
        <g className="anim-mascot-hop">
          {/* Blue Backpack behind body */}
          <rect x="76" y="115" width="22" height="42" rx="9" fill="url(#mimiBackpack)" stroke="#205784" strokeWidth="2.5" />
          <circle cx="86" cy="128" r="3" fill="#FFC857" />

          {/* Bunny Fluffy Tail */}
          <circle cx="78" cy="162" r="11" fill="#F4F8FC" stroke="#344256" strokeWidth="2.5" />

          {/* Bunny Left Foot */}
          <ellipse cx="104" cy="196" rx="14" ry="9" fill="#FFFFFF" stroke="#344256" strokeWidth="2.5" />
          <ellipse cx="104" cy="195" rx="8" ry="4" fill="#FFD6DD" />

          {/* Bunny Right Foot */}
          <ellipse cx="136" cy="196" rx="14" ry="9" fill="#FFFFFF" stroke="#344256" strokeWidth="2.5" />
          <ellipse cx="136" cy="195" rx="8" ry="4" fill="#FFD6DD" />

          {/* Bunny Body */}
          <ellipse cx="120" cy="154" rx="32" ry="36" fill="#FFFFFF" stroke="#344256" strokeWidth="2.8" />
          {/* Tummy patch */}
          <ellipse cx="120" cy="158" rx="20" ry="24" fill="#F4F8FC" />

          {/* Ears Left */}
          <g transform="rotate(-12 100 68)">
            <ellipse cx="100" cy="68" rx="14" ry="38" fill="#FFFFFF" stroke="#344256" strokeWidth="2.8" />
            <ellipse cx="100" cy="70" rx="7" ry="26" fill="#FFAEBC" />
          </g>

          {/* Ears Right */}
          <g transform="rotate(10 140 68)">
            <ellipse cx="140" cy="68" rx="14" ry="38" fill="#FFFFFF" stroke="#344256" strokeWidth="2.8" />
            <ellipse cx="140" cy="70" rx="7" ry="26" fill="#FFAEBC" />
          </g>

          {/* Head */}
          <ellipse cx="120" cy="116" rx="35" ry="30" fill="#FFFFFF" stroke="#344256" strokeWidth="2.8" />

          {/* Cute Bunny Cheeks */}
          <ellipse cx="98" cy="124" rx="7" ry="4" fill="#FFAEBC" opacity="0.75" />
          <ellipse cx="142" cy="124" rx="7" ry="4" fill="#FFAEBC" opacity="0.75" />

          {/* Eyes (Big sparkling cute eyes) */}
          {/* Left Eye */}
          <ellipse cx="107" cy="114" rx="4.5" ry="6.5" fill="#205784" />
          <circle cx="106" cy="112" r="2" fill="#FFFFFF" />
          <circle cx="108.5" cy="116" r="1" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="133" cy="114" rx="4.5" ry="6.5" fill="#205784" />
          <circle cx="132" cy="112" r="2" fill="#FFFFFF" />
          <circle cx="134.5" cy="116" r="1" fill="#FFFFFF" />

          {/* Nose & Smile */}
          <polygon points="120,121 117,118 123,118" fill="#FF8B94" stroke="#344256" strokeWidth="1" />
          <path d="M117 122 Q120 126 123 122" fill="none" stroke="#344256" strokeWidth="2" strokeLinecap="round" />

          {/* Whiskers */}
          <line x1="88" y1="120" x2="77" y2="118" stroke="#718096" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="89" y1="125" x2="78" y2="127" stroke="#718096" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="152" y1="120" x2="163" y2="118" stroke="#718096" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="151" y1="125" x2="162" y2="127" stroke="#718096" strokeWidth="1.8" strokeLinecap="round" />

          {/* Hands holding sparkling crystal */}
          {/* Left Hand */}
          <ellipse cx="102" cy="150" rx="9" ry="7" fill="#FFFFFF" stroke="#344256" strokeWidth="2.2" />

          {/* Handheld Magical Crystal */}
          <polygon
            points="120,140 129,149 125,163 115,163 111,149"
            fill="url(#crystalBlue)"
            stroke="#205784"
            strokeWidth="2.2"
          />
          <polygon points="120,140 125,149 120,163 115,149" fill="#8BE3FF" opacity="0.8" />

          {/* Right Hand */}
          <ellipse cx="138" cy="150" rx="9" ry="7" fill="#FFFFFF" stroke="#344256" strokeWidth="2.2" />
        </g>
      </svg>
    </div>
  );
}
