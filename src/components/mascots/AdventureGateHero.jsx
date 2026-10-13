import React from 'react';
import { useTimeTheme, TIME_THEMES } from '../../hooks/useTimeTheme';

export function AdventureGateHero({ className = '', theme: propTheme }) {
  const { themeId, config } = useTimeTheme();
  const activeConfig = propTheme && TIME_THEMES[propTheme] ? TIME_THEMES[propTheme] : config;
  const sky = activeConfig.sky;

  return (
    <div
      className={`adventure-gate-scene theme-${activeConfig.id} ${className}`}
      style={{
        width: '100%',
        maxWidth: '540px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
      aria-label={activeConfig.ariaLabel}
    >
      <svg
        viewBox="0 0 540 340"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ borderRadius: '20px', overflow: 'hidden' }}
      >
        <defs>
          {/* Canvas Clip to prevent any accidental overflow */}
          <clipPath id="heroCanvasClip">
            <rect width="540" height="340" rx="20" />
          </clipPath>

          {/* 1. DYNAMIC SKY GRADIENT */}
          <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.top} />
            <stop offset="55%" stopColor={sky.mid} />
            <stop offset="100%" stopColor={sky.bottom} />
          </linearGradient>

          {/* Sun Aura Radial Gradient */}
          <radialGradient id="sunAura" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor={sky.auraStop1} stopOpacity="0.95" />
            <stop offset="45%" stopColor={sky.auraStop2} stopOpacity="0.4" />
            <stop offset="100%" stopColor={sky.bottom} stopOpacity="0" />
          </radialGradient>

          {/* Moon Glow Gradient for Night Theme */}
          <radialGradient id="moonAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFEAA7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1B263B" stopOpacity="0" />
          </radialGradient>

          {/* Gate Lantern Glow Gradient for Night Theme */}
          <radialGradient id="lanternGlowAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF1B8" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#FFC857" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFC857" stopOpacity="0" />
          </radialGradient>

          {/* 2. LAYERED HILLS GRADIENTS */}
          <linearGradient id="mountDist" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.mountDistTop} />
            <stop offset="100%" stopColor={sky.mountDistBottom} />
          </linearGradient>

          <linearGradient id="hillBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.hillBackTop} />
            <stop offset="100%" stopColor={sky.hillBackBottom} />
          </linearGradient>

          <linearGradient id="hillMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.hillMidTop} />
            <stop offset="100%" stopColor={sky.hillMidBottom} />
          </linearGradient>

          <linearGradient id="hillFore" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.hillForeTop} />
            <stop offset="100%" stopColor={sky.hillForeBottom} />
          </linearGradient>

          {/* 3. PATH GRADIENT */}
          <linearGradient id="pathSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.pathTop} />
            <stop offset="50%" stopColor={sky.pathMid} />
            <stop offset="100%" stopColor={sky.pathBottom} />
          </linearGradient>

          {/* 4. GATE TIMBER & STONE GRADIENTS */}
          <linearGradient id="woodPost" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={sky.isNight ? '#5E381C' : '#9C6237'} />
            <stop offset="50%" stopColor={sky.isNight ? '#46270E' : '#804B22'} />
            <stop offset="100%" stopColor={sky.isNight ? '#2E1705' : '#5E3314'} />
          </linearGradient>

          <linearGradient id="stoneBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.isNight ? '#6E7D91' : '#D5DEE8'} />
            <stop offset="100%" stopColor={sky.isNight ? '#485669' : '#9AA9BA'} />
          </linearGradient>

          <linearGradient id="roofTileGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.isNight ? '#234E75' : '#4394D4'} />
            <stop offset="50%" stopColor={sky.isNight ? '#163654' : '#2B79B8'} />
            <stop offset="100%" stopColor={sky.isNight ? '#0C2033' : '#1E5C91'} />
          </linearGradient>

          <linearGradient id="goldPlate" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE07A" />
            <stop offset="50%" stopColor="#FFC857" />
            <stop offset="100%" stopColor="#E5A620" />
          </linearGradient>

          {/* Shadow Filter */}
          <filter id="cohesiveShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#283C4D" floodOpacity="0.14" />
          </filter>
        </defs>

        <g clipPath="url(#heroCanvasClip)">
          {/* ==================== 1. SKY & DISTANT HORIZON ==================== */}
          <rect x="0" y="0" width="540" height="340" rx="20" fill="url(#heroSky)" />

          {/* SUN (FOR MORNING, DAY, EVENING) */}
          {sky.showSun && (
            <g>
              <circle cx={sky.sunX} cy={sky.sunY} r={sky.sunAuraR} fill="url(#sunAura)" />
              <circle
                cx={sky.sunX}
                cy={sky.sunY}
                r={sky.sunR}
                fill={sky.sunFill}
                stroke={sky.sunStroke}
                strokeWidth="2.5"
                opacity={activeConfig.id === 'evening' ? 0.95 : 0.9}
              />
            </g>
          )}

          {/* MOON & STARS (FOR NIGHT) */}
          {sky.showMoon && (
            <g>
              {/* Moon Glow Aura */}
              <circle cx="85" cy="65" r="46" fill="url(#moonAura)" className="hero-moon-glow" />
              {/* Crescent Moon */}
              <g transform="translate(85, 65)">
                <path
                  d="M -3 -18 A 18 18 0 1 0 15 13 A 14.5 14.5 0 1 1 -3 -18 Z"
                  fill="#FFF4C2"
                  stroke="#FFEAA7"
                  strokeWidth="1.8"
                  filter="url(#cohesiveShadow)"
                />
                <circle cx="-1" cy="-3" r="2.2" fill="#FFEAA7" opacity="0.65" />
                <circle cx="5" cy="5" r="1.6" fill="#FFEAA7" opacity="0.65" />
              </g>
            </g>
          )}

          {/* TWINKLING STARS IN SKY */}
          {sky.showStars ? (
            <g opacity="0.95">
              <circle cx="155" cy="38" r="1.8" fill="#FFFFFF" className="hero-night-star" />
              <circle cx="215" cy="28" r="1.4" fill="#FFF8DB" className="hero-night-star" style={{ animationDelay: '1.1s' }} />
              <circle cx="270" cy="52" r="2" fill="#FFFFFF" className="hero-night-star" style={{ animationDelay: '2.2s' }} />
              <circle cx="330" cy="34" r="1.6" fill="#FFF4C2" className="hero-night-star" style={{ animationDelay: '0.7s' }} />
              <circle cx="430" cy="45" r="1.8" fill="#FFFFFF" className="hero-night-star" style={{ animationDelay: '1.7s' }} />
              <circle cx="485" cy="30" r="1.5" fill="#FFF8DB" className="hero-night-star" style={{ animationDelay: '2.7s' }} />
            </g>
          ) : (
            /* Tiny Daytime Sparkle */
            <g transform="translate(200, 32)">
              <g className="hero-star-twinkle">
                <polygon
                  points="0,-6 1.8,-1.8 6,0 1.8,1.8 0,6 -1.8,1.8 -6,0 -1.8,-1.8"
                  fill="#FFC857"
                  stroke="#D49917"
                  strokeWidth="0.8"
                />
              </g>
            </g>
          )}

          {/* DISTANT BIRDS MELINTAS (Pagi & Siang) */}
          {(activeConfig.id === 'morning' || activeConfig.id === 'day') && (
            <g className="hero-distant-birds" opacity="0.65">
              <path d="M 175 48 Q 179 44 183 48 Q 187 44 191 48" fill="none" stroke="#2B5B7C" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M 198 42 Q 201 38 204 42 Q 207 38 210 42" fill="none" stroke="#2B5B7C" strokeWidth="1.1" strokeLinecap="round" />
            </g>
          )}

          {/* Distant Fairytale Mountain Ridges */}
          <path
            d="M 20 185 Q 85 115 150 178 Q 215 125 285 185 L 285 240 L 20 240 Z"
            fill="url(#mountDist)"
            opacity={sky.isNight ? '0.75' : '0.65'}
          />
          <path
            d="M 270 190 Q 350 120 430 182 Q 480 140 535 180 L 535 240 L 270 240 Z"
            fill="url(#mountDist)"
            opacity={sky.isNight ? '0.65' : '0.55'}
          />

          {/* Castle Spire in Far Left Mist */}
          <g transform="translate(135, 130)" opacity={sky.isNight ? '0.45' : '0.7'}>
            <rect x="6" y="14" width="10" height="18" fill={sky.mountDistBottom} />
            <polygon points="11,2 4,14 18,14" fill={sky.mountDistTop} />
            <line x1="11" y1="2" x2="11" y2="0" stroke="#FFC857" strokeWidth="1" />
          </g>

          {/* Windmill Silhouette in Far Right Mist */}
          <g transform="translate(415, 136)" opacity={sky.isNight ? '0.45' : '0.7'}>
            <polygon points="7,10 3,24 13,24" fill={sky.mountDistBottom} />
            <circle cx="8" cy="11" r="2" fill={sky.mountDistTop} />
            <line x1="3" y1="6" x2="13" y2="16" stroke={sky.mountDistTop} strokeWidth="1.2" />
            <line x1="13" y1="6" x2="3" y2="16" stroke={sky.mountDistTop} strokeWidth="1.2" />
          </g>

          {/* Soft Drifting 2D Clouds */}
          <g transform="translate(40, 26)">
            <g className="hero-cloud-drift-1">
              <path
                d="M 14 26 A 12 12 0 0 1 32 14 A 18 18 0 0 1 64 16 A 14 14 0 0 1 80 26 A 8 8 0 0 1 76 36 L 14 36 Z"
                fill={sky.cloudFill}
                stroke={sky.cloudStroke}
                strokeWidth="1.6"
                filter="url(#cohesiveShadow)"
              />
            </g>
          </g>

          <g transform="translate(370, 22)">
            <g className="hero-cloud-drift-2">
              <path
                d="M 12 24 A 10 10 0 0 1 27 14 A 16 16 0 0 1 54 16 A 12 12 0 0 1 68 24 A 7 7 0 0 1 64 32 L 12 32 Z"
                fill={sky.cloudFill}
                stroke={sky.cloudStroke}
                strokeWidth="1.6"
                filter="url(#cohesiveShadow)"
              />
            </g>
          </g>

          {/* ==================== 2. LAYERED ROLLING HILLS ==================== */}
          {/* Hill 1: Background Layer */}
          <path d="M 0 210 Q 130 152 265 178 Q 400 204 540 162 L 540 340 L 0 340 Z" fill="url(#hillBack)" />

          {/* Distant trees on Hill 1 */}
          <g transform="translate(70, 162)" opacity="0.85">
            <rect x="7" y="16" width="4" height="12" fill={sky.treeTrunk} />
            <ellipse cx="9" cy="12" rx="10" ry="14" fill={sky.hillMidBottom} stroke={sky.hillForeBottom} strokeWidth="1.2" />
          </g>
          <g transform="translate(455, 158)" opacity="0.85">
            <rect x="7" y="16" width="4" height="12" fill={sky.treeTrunk} />
            <ellipse cx="9" cy="12" rx="11" ry="14" fill={sky.hillMidBottom} stroke={sky.hillForeBottom} strokeWidth="1.2" />
          </g>

          {/* Hill 2: Mid-ground Layer */}
          <path d="M 0 236 Q 145 192 290 218 Q 435 240 540 198 L 540 340 L 0 340 Z" fill="url(#hillMid)" />

          {/* Trees with animated sway */}
          <g transform="translate(42, 168)">
            <g className="hero-tree-sway">
              <rect x="11" y="24" width="7" height="22" rx="2" fill={sky.treeTrunk} />
              <ellipse cx="14" cy="18" rx="18" ry="22" fill={sky.hillMidBottom} stroke={sky.hillForeBottom} strokeWidth="1.6" />
              <ellipse cx="11" cy="13" rx="12" ry="15" fill={sky.hillMidTop} />
            </g>
          </g>
          <g transform="translate(470, 162)">
            <g className="hero-tree-sway" style={{ animationDelay: '1.4s' }}>
              <rect x="10" y="22" width="6" height="20" rx="2" fill={sky.treeTrunk} />
              <ellipse cx="13" cy="16" rx="16" ry="20" fill={sky.hillMidBottom} stroke={sky.hillForeBottom} strokeWidth="1.6" />
              <ellipse cx="15" cy="12" rx="11" ry="14" fill={sky.hillMidTop} />
            </g>
          </g>

          {/* Hill 3: Foreground Meadow Base */}
          <path d="M 0 268 Q 155 230 310 252 Q 450 272 540 236 L 540 340 L 0 340 Z" fill="url(#hillFore)" />

          {/* ==================== 3. WINDING DIRT & COBBLESTONE PATH ==================== */}
          <path
            d="M 238 214 C 238 230, 232 246, 218 266 C 196 292, 172 308, 145 340 L 325 340 C 305 308, 292 288, 280 262 C 272 244, 268 226, 266 214 Z"
            fill="url(#pathSurface)"
            stroke={sky.pathBorder}
            strokeWidth="2.2"
          />

          {/* Embedded Stepping Cobblestones */}
          <g opacity={sky.isNight ? '0.45' : '0.65'}>
            <ellipse cx="251" cy="225" rx="7" ry="3.5" fill={sky.pathBorder} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="258" cy="240" rx="9" ry="4.5" fill={sky.pathMid} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="242" cy="248" rx="10" ry="5" fill={sky.pathBorder} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="232" cy="268" rx="13" ry="6.5" fill={sky.pathMid} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="256" cy="274" rx="12" ry="6" fill={sky.pathBorder} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="226" cy="294" rx="16" ry="8" fill={sky.pathMid} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="258" cy="300" rx="15" ry="7.5" fill={sky.pathBorder} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="212" cy="324" rx="19" ry="9" fill={sky.pathMid} stroke="#8A6E40" strokeWidth="0.8" />
            <ellipse cx="254" cy="328" rx="18" ry="8.5" fill={sky.pathBorder} stroke="#8A6E40" strokeWidth="0.8" />
          </g>

          {/* Grass Tufts along path edges */}
          <g stroke={sky.isNight ? '#0E291B' : '#1F693D'} strokeWidth="2.2" strokeLinecap="round">
            <path d="M 200 274 L 197 265 M 200 274 L 204 266" />
            <path d="M 288 270 L 286 262 M 288 270 L 291 263" />
            <path d="M 172 302 L 168 290 M 172 302 L 176 292" />
            <path d="M 298 298 L 295 286 M 298 298 L 302 288" />
          </g>

          {/* ==================== 4. WOODEN DIRECTION SIGNPOST (LEFT MEADOW) ==================== */}
          <ellipse cx="73" cy="296" rx="18" ry="6" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.4'} />

          <g id="worldDirectionSignpost" transform="translate(38, 196)">
            {/* Main Wooden Pole */}
            <rect x="30" y="8" width="10" height="94" rx="3" fill="url(#woodPost)" stroke="#341A0B" strokeWidth="2.2" />
            <polygon points="30,8 35,2 40,8" fill={sky.isNight ? '#6E3C18' : '#9C6237'} stroke="#341A0B" strokeWidth="1.8" />
            <circle cx="35" cy="2" r="3.5" fill="#FFC857" stroke="#9E7314" strokeWidth="1.2" />

            {/* SIGNBOARD 1: DESA ANGKA (Pointing Left) */}
            <g filter="url(#cohesiveShadow)" transform="translate(0, 14)">
              <path
                d="M 76 0 L 14 0 L 2 12 L 14 24 L 76 24 C 77.5 24 78 23 78 21.5 L 78 2.5 C 78 1 77.5 0 76 0 Z"
                fill={sky.isNight ? '#FCE3B0' : '#FFF3CE'}
                stroke="#804B22"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <text
                x="45"
                y="12"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#5C3F05"
                fontFamily="Fredoka, Nunito, sans-serif"
                fontWeight="700"
                fontSize="11.5"
                letterSpacing="0.3"
              >
                Desa Angka
              </text>
            </g>

            {/* SIGNBOARD 2: HUTAN KATA (Pointing Right) */}
            <g filter="url(#cohesiveShadow)" transform="translate(0, 44)">
              <path
                d="M -6 0 L 54 0 L 66 12 L 54 24 L -6 24 C -7.5 24 -8 23 -8 21.5 L -8 2.5 C -8 1 -7.5 0 -6 0 Z"
                fill={sky.isNight ? '#C3ECCF' : '#D5F5E3'}
                stroke="#195B36"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <text
                x="23"
                y="12"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#114D29"
                fontFamily="Fredoka, Nunito, sans-serif"
                fontWeight="700"
                fontSize="11.5"
                letterSpacing="0.3"
              >
                Hutan Kata
              </text>
            </g>
          </g>

          {/* ==================== 5. EDUKIDS ADVENTURE GATEWAY ==================== */}
          <ellipse cx="196" cy="232" rx="22" ry="7.5" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.4'} />
          <ellipse cx="308" cy="232" rx="22" ry="7.5" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.4'} />

          <g id="storybookGate" transform="translate(162, 70)">
            {/* Left Stone Pedestal */}
            <rect x="22" y="126" width="26" height="36" rx="4" fill="url(#stoneBase)" stroke="#334155" strokeWidth="2.2" />
            {/* Right Stone Pedestal */}
            <rect x="132" y="126" width="26" height="36" rx="4" fill="url(#stoneBase)" stroke="#334155" strokeWidth="2.2" />

            {/* Left Timber Column */}
            <rect x="26" y="42" width="18" height="86" rx="3" fill="url(#woodPost)" stroke="#341A0B" strokeWidth="2.4" />
            <rect x="24" y="58" width="22" height="6.5" rx="1.5" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />
            <rect x="24" y="106" width="22" height="6.5" rx="1.5" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />

            {/* Right Timber Column */}
            <rect x="136" y="42" width="18" height="86" rx="3" fill="url(#woodPost)" stroke="#341A0B" strokeWidth="2.4" />
            <rect x="134" y="58" width="22" height="6.5" rx="1.5" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />
            <rect x="134" y="106" width="22" height="6.5" rx="1.5" fill="#334155" stroke="#1E293B" strokeWidth="1.2" />

            {/* Timber Arch Crossbeam */}
            <path
              d="M 18 48 Q 90 26 162 48 L 162 64 Q 90 42 18 64 Z"
              fill="url(#woodPost)"
              stroke="#341A0B"
              strokeWidth="2.5"
              filter="url(#cohesiveShadow)"
            />

            {/* Shingled Roof Canopy */}
            <polygon
              points="10,48 90,16 170,48 160,56 90,26 20,56"
              fill="url(#roofTileGrad)"
              stroke="#133553"
              strokeWidth="2.4"
            />

            {/* Festive Pennant Flags */}
            <g>
              <path d="M 28 65 Q 90 85 152 65" fill="none" stroke="#64748B" strokeWidth="1.5" />
              <polygon points="40,68 47,82 54,69" fill="#E9816F" />
              <polygon points="62,72 69,87 76,73" fill="#FFC857" />
              <polygon points="84,74 91,89 98,74" fill="#3E9568" />
              <polygon points="106,73 113,87 120,72" fill="#2875B8" />
              <polygon points="128,69 135,83 142,68" fill="#8D80C9" />
            </g>

            {/* SIGNBOARD: "EDUKIDS" */}
            <g transform="translate(42, 66)" filter="url(#cohesiveShadow)">
              <line x1="18" y1="-8" x2="18" y2="4" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="78" y1="-8" x2="78" y2="4" stroke="#475569" strokeWidth="2" strokeDasharray="2 2" />
              <rect x="4" y="4" width="88" height="28" rx="6" fill="#FFF2DF" stroke="#804B22" strokeWidth="2.4" />
              <rect x="7" y="7" width="82" height="22" rx="4" fill="#FFE8C2" stroke="#B87333" strokeWidth="1" />
              <text
                x="48"
                y="23"
                textAnchor="middle"
                fill="#205784"
                fontFamily="Fredoka, Nunito, sans-serif"
                fontWeight="700"
                fontSize="16"
                letterSpacing="1.2"
              >
                EDUKIDS
              </text>
            </g>

            {/* Golden Star at Roof Peak */}
            <g transform="translate(90, 16)">
              <g className="hero-star-twinkle">
                <circle cx="0" cy="0" r="14" fill="#FFF5DD" opacity="0.6" />
                <polygon
                  points="0,-14 4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4"
                  fill="url(#goldPlate)"
                  stroke="#B7791F"
                  strokeWidth="2"
                />
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
              </g>
            </g>

            {/* LANTERN ON LEFT GATE POST */}
            <g transform="translate(14, 76)">
              {/* Night Radial Light Glow */}
              {sky.lanternGlow && (
                <circle cx="0" cy="11" r="28" fill="url(#lanternGlowAura)" className="hero-lantern-light" />
              )}
              <line x1="12" y1="0" x2="0" y2="4" stroke="#334155" strokeWidth="2" />
              <rect
                x="-6"
                y="4"
                width="12"
                height="15"
                rx="3"
                fill={sky.lanternGlow ? '#FFF09E' : '#FFEAA7'}
                stroke="#1E293B"
                strokeWidth="1.8"
              />
              <polygon points="0,0 -8,5 8,5" fill="#334155" />
              <circle cx="0" cy="11" r="3.5" fill={sky.lanternGlow ? '#FFB800' : '#FFC857'} />
            </g>

            {/* MATCHING LANTERN ON RIGHT GATE POST FOR COHESIVE NIGHT WARMTH */}
            <g transform="translate(166, 76)">
              {sky.lanternGlow && (
                <circle cx="0" cy="11" r="28" fill="url(#lanternGlowAura)" className="hero-lantern-light" />
              )}
              <line x1="-12" y1="0" x2="0" y2="4" stroke="#334155" strokeWidth="2" />
              <rect
                x="-6"
                y="4"
                width="12"
                height="15"
                rx="3"
                fill={sky.lanternGlow ? '#FFF09E' : '#FFEAA7'}
                stroke="#1E293B"
                strokeWidth="1.8"
              />
              <polygon points="0,0 -8,5 8,5" fill="#334155" />
              <circle cx="0" cy="11" r="3.5" fill={sky.lanternGlow ? '#FFB800' : '#FFC857'} />
            </g>

            {/* CHARACTER 4: LUNA SI BURUNG BIJAK (Perched on Left Gate Timber Arch) */}
            <g transform="translate(32, 28)">
              <g className="hero-bird-perch">
                {/* Owl Body */}
                <ellipse cx="14" cy="16" rx="10" ry="12" fill="#8D80C9" stroke="#303C4A" strokeWidth="1.8" />
                {/* Owl Ear Tufts */}
                <polygon points="7,8 5,0 12,6" fill="#8D80C9" stroke="#303C4A" strokeWidth="1.5" />
                <polygon points="21,8 23,0 16,6" fill="#8D80C9" stroke="#303C4A" strokeWidth="1.5" />
                {/* Big White Owl Eye Discs */}
                <circle cx="10" cy="14" r="4.2" fill="#FFFFFF" stroke="#303C4A" strokeWidth="1" />
                <circle cx="18" cy="14" r="4.2" fill="#FFFFFF" stroke="#303C4A" strokeWidth="1" />
                {/* Pupils */}
                <circle cx="10.5" cy="14" r="2" fill="#303C4A" />
                <circle cx="18.5" cy="14" r="2" fill="#303C4A" />
                <circle cx="11.2" cy="13.2" r="0.8" fill="#FFFFFF" />
                <circle cx="19.2" cy="13.2" r="0.8" fill="#FFFFFF" />
                {/* Golden Beak */}
                <polygon points="14,16 12.5,19 15.5,19" fill="#FFC857" stroke="#303C4A" strokeWidth="0.8" />
                {/* Little Feet gripping timber */}
                <line x1="11" y1="28" x2="11" y2="31" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="17" y1="28" x2="17" y2="31" stroke="#FFC857" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </g>

            {/* Pipi the Blue Bird on Right Gate Post */}
            <g transform="translate(145, 20)">
              <g className="hero-bird-perch" style={{ animationDelay: '1.2s' }}>
                <ellipse cx="12" cy="16" rx="9" ry="7" fill="#3B88C4" stroke="#1C4D75" strokeWidth="1.6" />
                <ellipse cx="15" cy="18" rx="5" ry="4" fill="#E8F3FF" />
                <polygon points="20,15 26,17 20,19" fill="#FFC857" stroke="#9E7314" strokeWidth="1" />
                <circle cx="15" cy="14" r="1.8" fill="#205784" />
                <circle cx="15.8" cy="13.4" r="0.6" fill="#FFFFFF" />
                <polygon points="3,17 -2,15 1,20" fill="#205784" />
                <line x1="10" y1="23" x2="10" y2="26" stroke="#D49917" strokeWidth="1.4" />
                <line x1="14" y1="23" x2="14" y2="26" stroke="#D49917" strokeWidth="1.4" />
              </g>
            </g>
          </g>

          {/* ==================== 6. INTEGRATED 2D MASCOTS ON GROUND ==================== */}

          {/* CHARACTER 1: MIMI SI KELINCI CERIA (Left Meadow) */}
          <ellipse cx="132" cy="282" rx="22" ry="7" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.45'} />
          <g transform="translate(104, 186)">
            <g id="mascotMimi" className="hero-mascot-mimi">
              <rect x="6" y="52" width="16" height="26" rx="6" fill="#2875B8" stroke="#163C5C" strokeWidth="2" />
              <circle cx="14" cy="62" r="2.5" fill="#FFC857" />
              <circle cx="8" cy="78" r="8" fill="#F4F8FC" stroke="#303C4A" strokeWidth="2" />
              <ellipse cx="19" cy="94" rx="9.5" ry="5.5" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.2" />
              <ellipse cx="37" cy="94" rx="9.5" ry="5.5" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.2" />
              <ellipse cx="28" cy="68" rx="20" ry="24" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.4" />
              <ellipse cx="28" cy="71" rx="12" ry="15" fill="#F4F8FC" />
              <g className="hero-mimi-ears">
                <g transform="rotate(-10 20 18)">
                  <ellipse cx="20" cy="18" rx="8" ry="24" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.4" />
                  <ellipse cx="20" cy="19" rx="4" ry="16" fill="#FFAEBC" />
                </g>
                <g transform="rotate(12 36 18)">
                  <ellipse cx="36" cy="18" rx="8" ry="24" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.4" />
                  <ellipse cx="36" cy="19" rx="4" ry="16" fill="#FFAEBC" />
                </g>
              </g>
              <ellipse cx="28" cy="46" rx="23" ry="20" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2.4" />
              <ellipse cx="14" cy="52" rx="5" ry="3" fill="#FFAEBC" opacity="0.75" />
              <ellipse cx="42" cy="52" rx="5" ry="3" fill="#FFAEBC" opacity="0.75" />
              <g className="hero-mimi-blink">
                <ellipse cx="20" cy="44" rx="3.5" ry="4.5" fill="#205784" />
                <circle cx="19" cy="42.5" r="1.5" fill="#FFFFFF" />
                <ellipse cx="36" cy="44" rx="3.5" ry="4.5" fill="#205784" />
                <circle cx="35" cy="42.5" r="1.5" fill="#FFFFFF" />
              </g>
              <polygon points="28,49 26,47 30,47" fill="#FF8B94" />
              <path d="M 26 50 Q 28 53 30 50" fill="none" stroke="#303C4A" strokeWidth="1.8" strokeLinecap="round" />
              <ellipse cx="17" cy="66" rx="5.5" ry="5" fill="#FFFFFF" stroke="#303C4A" strokeWidth="1.8" />
              <ellipse cx="39" cy="66" rx="5.5" ry="5" fill="#FFFFFF" stroke="#303C4A" strokeWidth="1.8" />
              <polygon
                className="hero-crystal-pulse"
                points="28,60 34,66 31,75 25,75 22,66"
                fill="#FFC857"
                stroke="#D49917"
                strokeWidth="1.6"
              />
            </g>
          </g>

          {/* CHARACTER 2: BUBU SI BERUANG RAMAH (Right of Gate, Welcoming) */}
          <ellipse cx="342" cy="280" rx="24" ry="7.5" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.45'} />
          <g transform="translate(310, 178)">
            <g id="mascotBubu" className="hero-mascot-bimo">
              <g className="hero-bimo-ears">
                <circle cx="16" cy="18" r="9" fill="#C68958" stroke="#303C4A" strokeWidth="2.4" />
                <circle cx="16" cy="18" r="4.5" fill="#E8B58F" />
                <circle cx="48" cy="18" r="9" fill="#C68958" stroke="#303C4A" strokeWidth="2.4" />
                <circle cx="48" cy="18" r="4.5" fill="#E8B58F" />
              </g>
              <ellipse cx="20" cy="95" rx="11" ry="6.5" fill="#A86A3B" stroke="#303C4A" strokeWidth="2.4" />
              <ellipse cx="44" cy="95" rx="11" ry="6.5" fill="#A86A3B" stroke="#303C4A" strokeWidth="2.4" />
              <ellipse cx="32" cy="64" rx="26" ry="28" fill="#C68958" stroke="#303C4A" strokeWidth="2.6" />
              <ellipse cx="32" cy="68" rx="16" ry="18" fill="#E8B58F" />
              <ellipse cx="32" cy="38" rx="26" ry="23" fill="#C68958" stroke="#303C4A" strokeWidth="2.6" />
              <ellipse cx="32" cy="44" rx="12" ry="9" fill="#FFF2DF" stroke="#303C4A" strokeWidth="1.8" />
              <ellipse cx="32" cy="40" rx="4.5" ry="3" fill="#303C4A" />
              <path d="M 32 43 L 32 46 M 29 46 Q 32 49 35 46" fill="none" stroke="#303C4A" strokeWidth="1.8" strokeLinecap="round" />
              <g className="hero-bimo-blink">
                <ellipse cx="22" cy="35" rx="3.5" ry="4" fill="#303C4A" />
                <circle cx="21" cy="33.5" r="1.5" fill="#FFFFFF" />
                <ellipse cx="42" cy="35" rx="3.5" ry="4" fill="#303C4A" />
                <circle cx="41" cy="33.5" r="1.5" fill="#FFFFFF" />
              </g>
              <circle cx="15" cy="43" r="4" fill="#FFAEBC" opacity="0.65" />
              <circle cx="49" cy="43" r="4" fill="#FFAEBC" opacity="0.65" />
              {/* Yellow Scarf */}
              <path
                d="M 16 52 Q 32 59 48 52 Q 50 57 46 60 Q 32 66 18 60 Z"
                fill="url(#goldPlate)"
                stroke="#9E7314"
                strokeWidth="2"
              />
              <path d="M 36 58 L 41 78 L 33 80 L 30 60 Z" fill="url(#goldPlate)" stroke="#9E7314" strokeWidth="1.8" />
              <ellipse cx="10" cy="64" rx="6.5" ry="8" fill="#A86A3B" stroke="#303C4A" strokeWidth="2.2" />
              <g className="hero-bimo-wave">
                <ellipse cx="56" cy="50" rx="7" ry="11" fill="#A86A3B" stroke="#303C4A" strokeWidth="2.2" transform="rotate(32 56 50)" />
                <circle cx="58" cy="44" r="2.5" fill="#E8B58F" />
              </g>
            </g>
          </g>

          {/* CHARACTER 3: KIKO SI RUBAH CERDAS (Right Foreground Meadow) */}
          <ellipse cx="420" cy="286" rx="22" ry="7" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.45'} />
          <g transform="translate(392, 196)">
            <g id="mascotKiko" className="hero-mascot-kiko">
              <g className="hero-kiko-tail">
                <path
                  d="M 12 60 C -12 50, -18 20, 2 12 C 14 8, 22 25, 18 55 Z"
                  fill="#E67E22"
                  stroke="#303C4A"
                  strokeWidth="2.4"
                />
                <path d="M 2 12 C -6 18, -12 32, -4 40 L 4 35 Z" fill="#FFF8EA" />
              </g>
              <ellipse cx="19" cy="89" rx="9" ry="5.5" fill="#A04000" stroke="#303C4A" strokeWidth="2.2" />
              <ellipse cx="37" cy="89" rx="9" ry="5.5" fill="#A04000" stroke="#303C4A" strokeWidth="2.2" />
              <ellipse cx="28" cy="65" rx="20" ry="24" fill="#E67E22" stroke="#303C4A" strokeWidth="2.4" />
              <path d="M 18 49 Q 28 65 38 49 L 34 61 Q 28 67 22 61 Z" fill="#FFF8EA" />
              <g className="hero-kiko-ears">
                <polygon points="12,28 18,6 26,26" fill="#E67E22" stroke="#303C4A" strokeWidth="2.4" />
                <polygon points="15,25 18,12 23,25" fill="#FFF2DF" />
                <polygon points="30,26 38,6 44,28" fill="#E67E22" stroke="#303C4A" strokeWidth="2.4" />
                <polygon points="33,25 38,12 41,25" fill="#FFF2DF" />
              </g>
              <ellipse cx="28" cy="41" rx="22" ry="19" fill="#E67E22" stroke="#303C4A" strokeWidth="2.4" />
              <path d="M 10 41 Q 28 56 46 41 L 40 49 Q 28 55 16 49 Z" fill="#FFF8EA" />
              <g className="hero-kiko-blink">
                <circle cx="21" cy="37" r="3" fill="#303C4A" />
                <circle cx="20" cy="36" r="1.2" fill="#FFFFFF" />
                <circle cx="35" cy="37" r="3" fill="#303C4A" />
                <circle cx="34" cy="36" r="1.2" fill="#FFFFFF" />
              </g>
              <polygon points="28,44 25,41 31,41" fill="#303C4A" />
              <path d="M 28 45 Q 28 48 31 47" fill="none" stroke="#303C4A" strokeWidth="1.5" strokeLinecap="round" />
              <ellipse cx="18" cy="61" rx="5" ry="6.5" fill="#A04000" stroke="#303C4A" strokeWidth="2" />
              <ellipse cx="38" cy="61" rx="5" ry="6.5" fill="#A04000" stroke="#303C4A" strokeWidth="2" />
            </g>
          </g>

          {/* CHARACTER 5: PIKO SI PANDA TELITI (Peeking between Kiko and Far Right Tree) */}
          <ellipse cx="482" cy="274" rx="16" ry="5.5" fill="#184D2F" opacity={sky.isNight ? '0.6' : '0.4'} />
          <g transform="translate(464, 212)">
            <g className="hero-mascot-kiko" style={{ animationDelay: '0.6s' }}>
              {/* Panda Round Ears */}
              <circle cx="10" cy="18" r="6.5" fill="#303C4A" />
              <circle cx="26" cy="18" r="6.5" fill="#303C4A" />
              {/* Panda Body */}
              <ellipse cx="18" cy="46" rx="16" ry="18" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2" />
              <path d="M 4 40 Q 18 50 32 40 L 30 48 Q 18 56 6 48 Z" fill="#303C4A" />
              {/* Panda Head */}
              <ellipse cx="18" cy="28" rx="16" ry="14" fill="#FFFFFF" stroke="#303C4A" strokeWidth="2" />
              {/* Black Eye Patches */}
              <ellipse cx="12" cy="28" rx="4.5" ry="3.5" fill="#303C4A" transform="rotate(-15 12 28)" />
              <ellipse cx="24" cy="28" rx="4.5" ry="3.5" fill="#303C4A" transform="rotate(15 24 28)" />
              {/* White Pupils */}
              <circle cx="12" cy="27.5" r="1.3" fill="#FFFFFF" />
              <circle cx="24" cy="27.5" r="1.3" fill="#FFFFFF" />
              {/* Nose & Smile */}
              <ellipse cx="18" cy="32" rx="2.5" ry="1.8" fill="#303C4A" />
              <path d="M 16 34 Q 18 36.5 20 34" fill="none" stroke="#303C4A" strokeWidth="1.2" strokeLinecap="round" />
              {/* Magnifying Glass / Little Book */}
              <circle cx="28" cy="46" r="4.5" fill="none" stroke="#E6B84E" strokeWidth="1.6" />
              <line x1="31" y1="49" x2="35" y2="53" stroke="#804B22" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          </g>

          {/* ==================== 7. FOREGROUND WILDFLOWERS & GRASS ACCENTS ==================== */}
          <g transform="translate(95, 292)">
            <circle cx="6" cy="6" r="3.2" fill={sky.isNight ? '#D0E1F9' : '#FFFFFF'} />
            <circle cx="6" cy="6" r="1.5" fill="#FFC857" />
          </g>
          <g transform="translate(142, 304)">
            <circle cx="6" cy="6" r="3.6" fill={sky.isNight ? '#E28492' : '#FF949D'} />
            <circle cx="6" cy="6" r="1.5" fill="#FFFFFF" />
          </g>
          <g transform="translate(378, 294)">
            <circle cx="6" cy="6" r="3.2" fill={sky.isNight ? '#D0E1F9' : '#FFFFFF'} />
            <circle cx="6" cy="6" r="1.5" fill="#FFC857" />
          </g>
          <g transform="translate(452, 302)">
            <circle cx="6" cy="6" r="3.6" fill={sky.isNight ? '#E28492' : '#FF949D'} />
            <circle cx="6" cy="6" r="1.5" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </div>
  );
}
