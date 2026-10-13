import React from 'react';

export function BimoMapMascot({ size = 180, isCompleted = false, className = '' }) {
  return (
    <div
      className={`bimo-map-container ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size * 0.95}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
      aria-label="Ilustrasi Bimo si beruang kecil bersyal kuning memegang peta petualangan"
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
          <linearGradient id="bearFur" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C68958" />
            <stop offset="100%" stopColor="#9C6237" />
          </linearGradient>

          <linearGradient id="mapParchment" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="100%" stopColor="#EFE6CF" />
          </linearGradient>

          <linearGradient id="scarfYellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE07A" />
            <stop offset="100%" stopColor="#E5A823" />
          </linearGradient>
        </defs>

        {/* Soft ground shadow */}
        <ellipse cx="120" cy="205" rx="55" ry="9" fill="#344256" opacity="0.12" />

        {/* FLOATING MAP SCENERY ACCENTS */}
        {/* Floating Mini Cloud */}
        <g className="anim-cloud" transform="translate(30, 30)">
          <path
            d="M 10 25 A 8 8 0 0 1 24 16 A 12 12 0 0 1 44 18 A 9 9 0 0 1 54 26 A 5 5 0 0 1 50 32 L 10 32 Z"
            fill="#FFFFFF"
            stroke="#C7E1F7"
            strokeWidth="1.5"
            opacity="0.9"
          />
        </g>

        {/* Target Destination Star on top */}
        <g className="anim-star-twinkle" transform="translate(195, 40)">
          <polygon
            points="0,-12 3.5,-3.5 12,0 3.5,3.5 0,12 -3.5,3.5 -12,0 -3.5,-3.5"
            fill="#FFC857"
            stroke="#D49917"
            strokeWidth="1.5"
          />
        </g>

        {/* Floating Mini Compass Pin */}
        <g className="anim-crystal-1" transform="translate(185, 95)">
          <circle cx="10" cy="10" r="12" fill="#E8F3FF" stroke="#2875B8" strokeWidth="2" />
          <polygon points="10,3 13,10 10,9 7,10" fill="#E9816F" />
          <polygon points="10,17 13,10 10,11 7,10" fill="#205784" />
        </g>

        {/* BIMO THE BEAR (Animated float) */}
        <g className="anim-float">
          {/* Bear Left Ear */}
          <circle cx="86" cy="85" r="14" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />
          <circle cx="86" cy="85" r="7" fill="#E8B58F" />

          {/* Bear Right Ear */}
          <circle cx="154" cy="85" r="14" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />
          <circle cx="154" cy="85" r="7" fill="#E8B58F" />

          {/* Bear Feet */}
          <ellipse cx="104" cy="196" rx="15" ry="9" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />
          <ellipse cx="104" cy="195" rx="7" ry="4" fill="#E8B58F" />

          <ellipse cx="136" cy="196" rx="15" ry="9" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />
          <ellipse cx="136" cy="195" rx="7" ry="4" fill="#E8B58F" />

          {/* Bear Body */}
          <ellipse cx="120" cy="154" rx="35" ry="38" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />
          <ellipse cx="120" cy="158" rx="20" ry="24" fill="#E8B58F" />

          {/* Bear Head */}
          <ellipse cx="120" cy="116" rx="38" ry="32" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.8" />

          {/* Bear Muzzle */}
          <ellipse cx="120" cy="125" rx="16" ry="12" fill="#FFF2DF" stroke="#344256" strokeWidth="2" />
          {/* Nose */}
          <ellipse cx="120" cy="119" rx="6" ry="4" fill="#344256" />
          {/* Mouth */}
          <path d="M120 123 V127 M116 127 Q120 131 124 127" fill="none" stroke="#344256" strokeWidth="2" strokeLinecap="round" />

          {/* Cheerful Bear Eyes */}
          <circle cx="104" cy="112" r="4.5" fill="#344256" />
          <circle cx="102.5" cy="110.5" r="1.8" fill="#FFFFFF" />

          <circle cx="136" cy="112" r="4.5" fill="#344256" />
          <circle cx="134.5" cy="110.5" r="1.8" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <circle cx="94" cy="124" r="5.5" fill="#FFAEBC" opacity="0.65" />
          <circle cx="146" cy="124" r="5.5" fill="#FFAEBC" opacity="0.65" />

          {/* Yellow Warm Scarf around neck */}
          <path
            d="M 94 136 Q 120 148 146 136 Q 150 144 144 148 Q 120 156 96 148 Z"
            fill="url(#scarfYellow)"
            stroke="#9E7314"
            strokeWidth="2.2"
          />
          {/* Scarf knot hanging */}
          <path
            d="M 124 146 L 132 172 L 122 174 L 117 148 Z"
            fill="url(#scarfYellow)"
            stroke="#9E7314"
            strokeWidth="2.2"
          />

          {/* TREASURE MAP OR TROPHY */}
          {isCompleted ? (
            /* Celebration Mode: Holding a Golden Trophy / Map flag */
            <g transform="translate(90, 130)">
              {/* Hands holding up gold trophy */}
              <ellipse cx="30" cy="38" rx="9" ry="7" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.2" />
              <ellipse cx="30" cy="18" rx="14" ry="12" fill="#FFC857" stroke="#9E7314" strokeWidth="2.5" />
              <polygon points="30,8 33,14 39,15 35,19 36,25 30,22 24,25 25,19 21,15 27,14" fill="#FFFFFF" />
            </g>
          ) : (
            /* Explorer Mode: Rolled out treasure map held by bear */
            <g transform="translate(68, 142)">
              {/* Map parchment */}
              <rect
                x="14"
                y="0"
                width="76"
                height="46"
                rx="6"
                fill="url(#mapParchment)"
                stroke="#B5A078"
                strokeWidth="2.2"
                transform="rotate(-5 50 20)"
              />
              {/* Winding dotted path on map */}
              <path
                d="M 26 36 Q 42 16 56 30 T 78 12"
                fill="none"
                stroke="#E9816F"
                strokeWidth="2.5"
                strokeDasharray="4 3"
                strokeLinecap="round"
              />
              {/* Map X marks the spot */}
              <text x="76" y="16" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#E9816F">✕</text>
              {/* Mini pine tree on map */}
              <polygon points="36,18 32,26 40,26" fill="#88C5A0" />

              {/* Bear Paws holding map */}
              <ellipse cx="20" cy="22" rx="8" ry="6" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.2" />
              <ellipse cx="84" cy="18" rx="8" ry="6" fill="url(#bearFur)" stroke="#344256" strokeWidth="2.2" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
