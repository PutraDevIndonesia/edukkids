import React, { useState, useEffect, useRef } from 'react';
import { MapPlayerCharacter } from './MapPlayerCharacter';
import { soundFx } from '../../utils/soundFx';

export function AdventureWorldMap({
  worlds = [],
  progress = { totalStars: 0, completedQuizzes: [] },
  selectedWorld = null,
  onSelectWorld = () => {},
  avatarId = 'kiko'
}) {
  // Road stops where character stands in front of each landmark
  const roadStops = {
    'desa-angka': { x: 225, y: 370 },
    'hutan-kata': { x: 295, y: 175 },
    'pulau-english': { x: 765, y: 190 },
    'lembah-sains': { x: 520, y: 430 },
    'kerajaan-pengetahuan': { x: 735, y: 425 }
  };

  // Road graph with waypoints along the actual visible roads
  const roadGraph = {
    'desa-angka': {
      'hutan-kata': [{ x: 225, y: 370 }, { x: 230, y: 260 }, { x: 295, y: 175 }],
      'lembah-sains': [{ x: 225, y: 370 }, { x: 340, y: 420 }, { x: 520, y: 430 }],
      'kerajaan-pengetahuan': [{ x: 225, y: 370 }, { x: 340, y: 420 }, { x: 520, y: 430 }, { x: 640, y: 475 }, { x: 735, y: 425 }],
      'pulau-english': [{ x: 225, y: 370 }, { x: 230, y: 260 }, { x: 295, y: 175 }, { x: 380, y: 150 }, { x: 480, y: 250 }, { x: 640, y: 200 }, { x: 765, y: 190 }]
    },
    'hutan-kata': {
      'desa-angka': [{ x: 295, y: 175 }, { x: 230, y: 260 }, { x: 225, y: 370 }],
      'pulau-english': [{ x: 295, y: 175 }, { x: 380, y: 150 }, { x: 480, y: 250 }, { x: 640, y: 200 }, { x: 765, y: 190 }],
      'lembah-sains': [{ x: 295, y: 175 }, { x: 380, y: 150 }, { x: 480, y: 250 }, { x: 500, y: 340 }, { x: 520, y: 430 }],
      'kerajaan-pengetahuan': [{ x: 295, y: 175 }, { x: 380, y: 150 }, { x: 480, y: 250 }, { x: 620, y: 340 }, { x: 735, y: 425 }]
    },
    'pulau-english': {
      'hutan-kata': [{ x: 765, y: 190 }, { x: 640, y: 200 }, { x: 480, y: 250 }, { x: 380, y: 150 }, { x: 295, y: 175 }],
      'desa-angka': [{ x: 765, y: 190 }, { x: 640, y: 200 }, { x: 480, y: 250 }, { x: 380, y: 150 }, { x: 295, y: 175 }, { x: 230, y: 260 }, { x: 225, y: 370 }],
      'kerajaan-pengetahuan': [{ x: 765, y: 190 }, { x: 840, y: 280 }, { x: 735, y: 425 }],
      'lembah-sains': [{ x: 765, y: 190 }, { x: 840, y: 280 }, { x: 735, y: 425 }, { x: 640, y: 475 }, { x: 520, y: 430 }]
    },
    'lembah-sains': {
      'desa-angka': [{ x: 520, y: 430 }, { x: 340, y: 420 }, { x: 225, y: 370 }],
      'kerajaan-pengetahuan': [{ x: 520, y: 430 }, { x: 640, y: 475 }, { x: 735, y: 425 }],
      'hutan-kata': [{ x: 520, y: 430 }, { x: 500, y: 340 }, { x: 480, y: 250 }, { x: 380, y: 150 }, { x: 295, y: 175 }],
      'pulau-english': [{ x: 520, y: 430 }, { x: 640, y: 475 }, { x: 735, y: 425 }, { x: 840, y: 280 }, { x: 765, y: 190 }]
    },
    'kerajaan-pengetahuan': {
      'lembah-sains': [{ x: 735, y: 425 }, { x: 640, y: 475 }, { x: 520, y: 430 }],
      'pulau-english': [{ x: 735, y: 425 }, { x: 840, y: 280 }, { x: 765, y: 190 }],
      'desa-angka': [{ x: 735, y: 425 }, { x: 640, y: 475 }, { x: 520, y: 430 }, { x: 340, y: 420 }, { x: 225, y: 370 }],
      'hutan-kata': [{ x: 735, y: 425 }, { x: 620, y: 340 }, { x: 480, y: 250 }, { x: 380, y: 150 }, { x: 295, y: 175 }]
    }
  };

  // State: Default location is Desa Angka
  const [currentWorldId, setCurrentWorldId] = useState(() => selectedWorld?.id || 'desa-angka');
  const [playerPos, setPlayerPos] = useState(() => roadStops[currentWorldId] || roadStops['desa-angka']);
  const [playerFacing, setPlayerFacing] = useState('right');
  const [playerState, setPlayerState] = useState('idle'); // 'idle' | 'walking' | 'cheer'

  const animFrameRef = useRef(null);
  const cheerTimerRef = useRef(null);

  // Navigate along waypoints when selectedWorld changes externally or internally
  const moveToWorld = (targetWorld) => {
    if (!targetWorld) return;
    const targetId = targetWorld.id;
    const destPos = roadStops[targetId];
    if (!destPos) {
      onSelectWorld(targetWorld);
      return;
    }

    // If already at the location, cheer happily!
    if (targetId === currentWorldId) {
      soundFx.playBoing();
      setPlayerState('cheer');
      if (cheerTimerRef.current) clearTimeout(cheerTimerRef.current);
      cheerTimerRef.current = setTimeout(() => {
        setPlayerState('idle');
      }, 700);
      onSelectWorld(targetWorld);
      return;
    }

    // Cancel any running animation
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (cheerTimerRef.current) clearTimeout(cheerTimerRef.current);

    // Get waypoints path
    const waypoints = roadGraph[currentWorldId]?.[targetId] || [playerPos, destPos];

    // Compute segment lengths
    const segments = [];
    let totalDist = 0;
    for (let i = 0; i < waypoints.length - 1; i++) {
      const p1 = waypoints[i];
      const p2 = waypoints[i + 1];
      const d = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      segments.push({ p1, p2, dist: d, startDist: totalDist });
      totalDist += d;
    }

    if (totalDist === 0) {
      setCurrentWorldId(targetId);
      setPlayerPos(destPos);
      setPlayerState('idle');
      onSelectWorld(targetWorld);
      return;
    }

    // Walking speed: ~220px / second (feels natural, responsive)
    const walkSpeed = 220;
    const duration = Math.min(2400, Math.max(700, (totalDist / walkSpeed) * 1000));
    const startTime = performance.now();

    setPlayerState('walking');

    const animate = (now) => {
      const elapsed = now - startTime;
      const progressRatio = Math.min(1, elapsed / duration);
      const curDist = progressRatio * totalDist;

      // Find current segment
      let curSeg = segments[0];
      for (let s of segments) {
        if (curDist >= s.startDist && curDist <= s.startDist + s.dist) {
          curSeg = s;
          break;
        }
      }

      const segProgress = curSeg.dist > 0 ? (curDist - curSeg.startDist) / curSeg.dist : 1;
      const curX = curSeg.p1.x + (curSeg.p2.x - curSeg.p1.x) * segProgress;
      const curY = curSeg.p1.y + (curSeg.p2.y - curSeg.p1.y) * segProgress;

      // Update direction facing
      const dx = curSeg.p2.x - curSeg.p1.x;
      if (Math.abs(dx) > 1) {
        setPlayerFacing(dx < 0 ? 'left' : 'right');
      }

      setPlayerPos({ x: curX, y: curY });

      if (progressRatio < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Arrived at destination!
        setPlayerPos(destPos);
        setCurrentWorldId(targetId);
        soundFx.playBoing();
        setPlayerState('cheer');
        cheerTimerRef.current = setTimeout(() => {
          setPlayerState('idle');
        }, 700);
        onSelectWorld(targetWorld);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  // Sync when parent component changes selectedWorld prop
  useEffect(() => {
    if (selectedWorld && selectedWorld.id !== currentWorldId) {
      moveToWorld(selectedWorld);
    }
  }, [selectedWorld]);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (cheerTimerRef.current) clearTimeout(cheerTimerRef.current);
    };
  }, []);

  return (
    <div
      className="colorful-topdown-map-wrap"
      style={{
        width: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        position: 'relative',
        borderRadius: '24px',
        boxShadow: '0 12px 36px rgba(28, 64, 42, 0.16)',
        border: '3px solid #E6DEC8',
        backgroundColor: '#72BA66'
      }}
    >
      <svg
        viewBox="0 0 1000 640"
        style={{
          width: '100%',
          minWidth: '880px',
          height: 'auto',
          display: 'block',
          userSelect: 'none'
        }}
        role="img"
        aria-label="Peta Petualangan EduKids - 5 Wilayah Belajar Terhubung"
      >
        <defs>
          {/* ================= NATURAL PALETTE GRADIENTS ================= */}
          {/* Main Park Lawn Gradients - Harmonious natural green */}
          <linearGradient id="lushParkLawn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84CF76" />
            <stop offset="50%" stopColor="#6DB85E" />
            <stop offset="100%" stopColor="#5AA650" />
          </linearGradient>

          {/* Biome Grass Tones */}
          <linearGradient id="forestCanopyFloor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4FA058" />
            <stop offset="100%" stopColor="#3C8245" />
          </linearGradient>

          <linearGradient id="castleTerraceStone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          {/* Road Gradients - Soft warm cream with smooth transition */}
          <linearGradient id="creamRoadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9E8" />
            <stop offset="100%" stopColor="#F6E3B8" />
          </linearGradient>

          {/* Coastal Water & Sand */}
          <linearGradient id="coastalDeep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67D9EC" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          <linearGradient id="sandBeachShore" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF5D6" />
            <stop offset="60%" stopColor="#FEE6A8" />
            <stop offset="100%" stopColor="#F5D07E" />
          </linearGradient>

          {/* Stream Water */}
          <linearGradient id="freshWaterStream" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="60%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          {/* Golden Badge Gradient */}
          <linearGradient id="goldStarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Natural Soft Board Shadows */}
          <filter id="softBoardShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#1B4D29" floodOpacity="0.18" />
          </filter>

          <filter id="structureShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4.5" stdDeviation="3.5" floodColor="#143D20" floodOpacity="0.2" />
          </filter>

          {/* Reusable Tree Foliage Components with unified, clean illustration style */}
          {/* 1. Oak / Orchard Tree */}
          <g id="tree-oak">
            {/* Soft Ground Contact Shadow */}
            <ellipse cx="0" cy="18" rx="16" ry="6" fill="#1B4D29" opacity="0.22" />
            {/* Trunk */}
            <path d="M -3 6 L -4 18 L 4 18 L 3 6 Z" fill="#78350F" stroke="#451A03" strokeWidth="1.2" />
            {/* Cohesive Stylized Canopy (Base, Mid, and Sunlit Highlight) */}
            <path
              d="M 0 -22 C 14 -22, 22 -10, 18 4 C 14 16, -14 16, -18 4 C -22 -10, -14 -22, 0 -22 Z"
              fill="#15803D"
            />
            <path
              d="M -3 -19 C 9 -19, 17 -9, 13 3 C 9 12, -10 12, -14 3 C -17 -9, -11 -19, -3 -19 Z"
              fill="#22C55E"
            />
            <ellipse cx="-4" cy="-8" rx="9" ry="7" fill="#4ADE80" opacity="0.8" />
            <circle cx="5" cy="-4" r="6" fill="#86EFAC" opacity="0.65" />
          </g>

          {/* 2. Pine / Evergreen Tree */}
          <g id="tree-pine">
            <ellipse cx="0" cy="19" rx="14" ry="5" fill="#143D20" opacity="0.2" />
            <rect x="-2.5" y="12" width="5" height="10" rx="1.5" fill="#58290B" />
            {/* 3 Balanced Tiers */}
            <polygon points="0,-6 -16,14 16,14" fill="#15803D" />
            <polygon points="0,-6 0,14 16,14" fill="#166534" />
            <polygon points="0,-16 -13,0 13,0" fill="#16A34A" />
            <polygon points="0,-16 0,0 13,0" fill="#15803D" />
            <polygon points="0,-26 -9,-10 9,-10" fill="#22C55E" />
            <polygon points="0,-26 0,-10 9,-10" fill="#16A34A" />
          </g>

          {/* 3. Coconut Palm Tree */}
          <g id="tree-palm">
            <ellipse cx="0" cy="20" rx="15" ry="5" fill="#78592A" opacity="0.22" />
            {/* Trunk */}
            <path d="M 0 20 Q 8 6 2 -14" fill="none" stroke="#854D0E" strokeWidth="4.5" strokeLinecap="round" />
            {/* Palm Fronds */}
            <g transform="translate(2, -14)">
              <ellipse cx="-12" cy="-4" rx="14" ry="4" fill="#15803D" transform="rotate(-30 -12 -4)" />
              <ellipse cx="12" cy="-4" rx="14" ry="4" fill="#16A34A" transform="rotate(30 12 -4)" />
              <ellipse cx="14" cy="6" rx="14" ry="4.5" fill="#15803D" transform="rotate(50 14 6)" />
              <ellipse cx="-14" cy="6" rx="14" ry="4.5" fill="#166534" transform="rotate(-50 -14 6)" />
              <ellipse cx="0" cy="-10" rx="14" ry="4" fill="#22C55E" transform="rotate(-90 0 -10)" />
              <circle cx="-2" cy="0" r="2.5" fill="#58290B" />
              <circle cx="2" cy="2" r="2.5" fill="#451A03" />
            </g>
          </g>

          {/* 4. Small Flowering Bush */}
          <g id="bush-flower">
            <ellipse cx="0" cy="8" rx="12" ry="4" fill="#1B4D29" opacity="0.18" />
            <ellipse cx="0" cy="2" rx="11" ry="8" fill="#16A34A" />
            <ellipse cx="-2" cy="0" rx="9" ry="6" fill="#22C55E" />
            <circle cx="-3" cy="-1" r="2.5" fill="#F43F5E" />
            <circle cx="4" cy="2" r="2.5" fill="#FBBF24" />
          </g>
        </defs>

        {/* ============================================================ */}
        {/* 1. LUSH PARK LAWN BASEBOARD */}
        {/* ============================================================ */}
        <rect width="1000" height="640" rx="24" fill="url(#lushParkLawn)" />

        {/* Subtle Biome Turf Overlays */}
        {/* Hutan Kata Woodland Turf (Top-Left) */}
        <path
          d="M 160 30 C 260 20, 420 40, 460 120 C 490 200, 390 250, 260 240 C 170 230, 120 120, 160 30 Z"
          fill="url(#forestCanopyFloor)"
          opacity="0.32"
        />

        {/* Desa Angka Countryside Plot (Mid-Left) */}
        <path
          d="M 60 290 C 140 260, 280 280, 310 370 C 330 470, 230 520, 130 510 C 50 500, 20 380, 60 290 Z"
          fill="#86D878"
          opacity="0.45"
        />

        {/* Vegetable Garden Rows in Desa Angka */}
        <g stroke="#92400E" strokeWidth="2.2" strokeLinecap="round" opacity="0.55">
          <line x1="80" y1="420" x2="120" y2="420" />
          <line x1="80" y1="428" x2="120" y2="428" />
          <line x1="80" y1="436" x2="120" y2="436" />
        </g>
        <g fill="#EA580C">
          <circle cx="88" cy="420" r="2" />
          <circle cx="102" cy="420" r="2" />
          <circle cx="114" cy="420" r="2" />
          <circle cx="94" cy="428" r="2" />
          <circle cx="108" cy="428" r="2" />
          <circle cx="88" cy="436" r="2" />
          <circle cx="104" cy="436" r="2" />
        </g>

        {/* Kerajaan Pengetahuan Stone Courtyard Terrace (Southeast) */}
        <path
          d="M 680 340 C 750 300, 880 310, 920 380 C 950 450, 920 540, 820 560 C 720 570, 640 470, 680 340 Z"
          fill="url(#castleTerraceStone)"
          opacity="0.5"
        />

        {/* ============================================================ */}
        {/* 2. GENTLE MEANDERING VALLEY CREEK (THROUGH LEMBAH SAINS) */}
        {/* ============================================================ */}
        <path
          d="M 440 290 Q 420 380 470 460 Q 520 540 480 640"
          fill="none"
          stroke="#3B8A5A"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M 440 290 Q 420 380 470 460 Q 520 540 480 640"
          fill="none"
          stroke="url(#freshWaterStream)"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <path
          className="anim-stream"
          d="M 440 290 Q 420 380 470 460 Q 520 540 480 640"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeDasharray="12 10"
          strokeLinecap="round"
          opacity="0.8"
        />
        {/* Smooth River Pebbles */}
        <g fill="#94A3B8" opacity="0.8">
          <ellipse cx="430" cy="330" rx="5" ry="3.5" />
          <ellipse cx="448" cy="360" rx="4" ry="3" />
          <ellipse cx="460" cy="500" rx="6" ry="4" />
          <ellipse cx="488" cy="525" rx="5" ry="3" />
          <ellipse cx="495" cy="580" rx="6" ry="3.5" />
        </g>

        {/* ============================================================ */}
        {/* 3. COASTAL COVE & BEACH (NORTHEAST EDGE FOR PULAU ENGLISH) */}
        {/* ============================================================ */}
        <path
          d="M 680 0 Q 730 150 820 220 Q 920 270 1000 260 L 1000 0 Z"
          fill="url(#sandBeachShore)"
          filter="url(#softBoardShadow)"
        />
        <path
          d="M 720 0 Q 760 130 840 195 Q 920 240 1000 230 L 1000 0 Z"
          fill="url(#coastalDeep)"
        />
        <g stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75">
          <path d="M 760 50 Q 775 45 790 50" />
          <path d="M 810 110 Q 825 105 840 110" />
          <path d="M 870 165 Q 885 160 900 165" />
          <path d="M 930 205 Q 945 200 960 205" />
        </g>
        <g fill="#F97316" opacity="0.8">
          <circle cx="785" cy="190" r="3" />
          <circle cx="820" cy="225" r="2.5" />
          <circle cx="880" cy="245" r="3" />
        </g>

        {/* ============================================================ */}
        {/* 4. NATURAL WINDING CREAM BOARD GAME ROADS */}
        {/* Polished connections: no road cuts into buildings */}
        {/* ============================================================ */}
        {/* Warm Earthen Curb Underlay */}
        <g fill="none" stroke="#D4A247" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round">
          {/* Main Loop: South-West Entrance -> Desa Angka (in front of cottage) -> Hutan Kata -> Central Plaza */}
          <path d="M 80 570 Q 120 460 205 385 Q 230 260 270 165 Q 380 140 480 250" />
          {/* Central Plaza -> Coastal Pulau English */}
          <path d="M 480 250 Q 640 200 780 180" />
          {/* Central Plaza -> Kerajaan Pengetahuan */}
          <path d="M 480 250 Q 620 340 750 420" />
          {/* Kerajaan Pengetahuan -> Lembah Sains -> Desa Angka */}
          <path d="M 750 420 Q 640 480 500 440 Q 340 420 205 385" />
          {/* Coastal Promenade Link: Pulau English -> Kerajaan Pengetahuan */}
          <path d="M 780 180 Q 840 280 750 420" />
        </g>

        {/* Smooth Bright Cream Road Surface */}
        <g fill="none" stroke="url(#creamRoadGrad)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 80 570 Q 120 460 205 385 Q 230 260 270 165 Q 380 140 480 250" />
          <path d="M 480 250 Q 640 200 780 180" />
          <path d="M 480 250 Q 620 340 750 420" />
          <path d="M 750 420 Q 640 480 500 440 Q 340 420 205 385" />
          <path d="M 780 180 Q 840 280 750 420" />
        </g>

        {/* Central Crossroads Plaza & Fountain (Replaces old bullseye target circle) */}
        <g
          transform="translate(480, 250)"
          filter="url(#softBoardShadow)"
          onClick={() => soundFx.playPop()}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Air mancur persimpangan jalan"
        >
          {/* Outer Paver Cobblestone Ring */}
          <circle cx="0" cy="0" r="28" fill="url(#creamRoadGrad)" stroke="#D4A247" strokeWidth="3" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#D97706" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          {/* Central Stone Planter / Fountain */}
          <circle cx="0" cy="0" r="14" fill="#93C5FD" stroke="#2563EB" strokeWidth="2" />
          <circle cx="0" cy="0" r="8" fill="#3B82F6" />
          <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
          {/* Little Water Glimmer */}
          <circle cx="-2" cy="-2" r="1.5" fill="#BAE6FD" />
        </g>

        {/* Wooden Footbridge Crossing the Stream near Lembah Sains */}
        <g transform="translate(470, 440) rotate(-15)" filter="url(#structureShadow)">
          <rect x="-18" y="-14" width="36" height="28" rx="3" fill="#854D0E" stroke="#451A03" strokeWidth="2" />
          <line x1="-12" y1="-14" x2="-12" y2="14" stroke="#D97706" strokeWidth="1.5" />
          <line x1="-4" y1="-14" x2="-4" y2="14" stroke="#D97706" strokeWidth="1.5" />
          <line x1="4" y1="-14" x2="4" y2="14" stroke="#D97706" strokeWidth="1.5" />
          <line x1="12" y1="-14" x2="12" y2="14" stroke="#D97706" strokeWidth="1.5" />
          <rect x="-18" y="-16" width="36" height="4" rx="1.5" fill="#451A03" />
          <rect x="-18" y="12" width="36" height="4" rx="1.5" fill="#451A03" />
        </g>

        {/* ============================================================ */}
        {/* 5. HAND-CRAFTED HARMONIOUS TREE CLUSTERS & ENVIRONMENT */}
        {/* ============================================================ */}
        {/* Woodland around Hutan Kata */}
        <use href="#tree-pine" x="195" y="115" />
        <use href="#tree-oak" x="235" y="80" transform="scale(1.05) translate(-10, -5)" />
        <use href="#tree-oak" x="315" y="70" />
        <use href="#tree-pine" x="355" y="105" />
        <use href="#tree-oak" x="415" y="80" />

        {/* Countryside Orchard Trees around Desa Angka */}
        <use href="#tree-oak" x="110" y="270" />
        <use href="#tree-oak" x="80" y="340" />
        <use href="#tree-oak" x="115" y="470" />
        <use href="#tree-oak" x="75" y="515" />

        {/* Coastal Palms on Pulau English */}
        <use href="#tree-palm" x="850" y="90" />
        <use href="#tree-palm" x="915" y="140" transform="scale(1.1) translate(-10, -10)" />

        {/* Nature Valley Trees around Lembah Sains */}
        <use href="#tree-pine" x="380" y="490" />
        <use href="#tree-oak" x="420" y="550" />
        <use href="#tree-oak" x="580" y="490" />
        <use href="#tree-pine" x="620" y="550" />

        {/* Trees near Kerajaan Pengetahuan */}
        <use href="#tree-oak" x="660" y="280" />
        <use href="#tree-pine" x="880" y="480" />
        <use href="#tree-pine" x="920" y="430" />

        {/* Flowering Bushes for gentle environment details */}
        <use href="#bush-flower" x="330" y="240" />
        <use href="#bush-flower" x="670" y="160" />
        <use href="#bush-flower" x="410" y="280" />
        <use href="#bush-flower" x="560" y="220" />
        <use href="#bush-flower" x="150" y="460" />

        {/* Hot Air Balloon drifting gently in upper sky */}
        <g
          transform="translate(130, 80)"
          onClick={() => soundFx.playWhoosh()}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Balon udara petualangan, klik untuk mendengarkan desau angin"
        >
          <g className="anim-float" filter="url(#structureShadow)">
            <ellipse cx="0" cy="0" rx="16" ry="20" fill="#F59E0B" stroke="#B45309" strokeWidth="1.8" />
            <path d="M -8 -17 Q 0 0 -8 17 M 8 -17 Q 0 0 8 17" fill="none" stroke="#EF4444" strokeWidth="2.6" />
            <line x1="-4" y1="20" x2="-3" y2="28" stroke="#78350F" strokeWidth="1.2" />
            <line x1="4" y1="20" x2="3" y2="28" stroke="#78350F" strokeWidth="1.2" />
            <rect x="-5" y="28" width="10" height="7" rx="1.8" fill="#B45309" stroke="#451A03" strokeWidth="1.2" />
          </g>
        </g>

        {/* Moored Sailboat at Coastal Pier */}
        <g
          transform="translate(890, 220)"
          onClick={() => soundFx.playBoatToot()}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Perahu layar dermaga, klik untuk membunyikan klakson pelaut"
        >
          <g className="anim-boat" filter="url(#structureShadow)">
            <path d="M 0 10 L 26 10 L 20 18 L 6 18 Z" fill="#804B22" stroke="#451A03" strokeWidth="1.5" />
            <line x1="13" y1="10" x2="13" y2="-5" stroke="#451A03" strokeWidth="1.8" />
            <polygon points="13,8 13,-5 23,8" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
            <polygon points="13,8 13,-2 5,8" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
          </g>
        </g>

        {/* Vintage Compass Rose Badge at South Entrance */}
        <g
          transform="translate(70, 565)"
          opacity="0.95"
          onClick={() => soundFx.playPop()}
          style={{ cursor: 'pointer' }}
          role="button"
          aria-label="Kompas penunjuk arah mata angin"
        >
          <circle cx="0" cy="0" r="18" fill="#FFFDF5" stroke="#C5A059" strokeWidth="2" filter="url(#softBoardShadow)" />
          <polygon points="0,-14 3,-3 14,0 3,3 0,14 -3,3 -14,0 -3,-3" fill="#C5A059" />
          <polygon points="0,-14 0,0 3,-3" fill="#B45309" />
          <polygon points="0,14 0,0 -3,3" fill="#B45309" />
          <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" stroke="#92400E" strokeWidth="1" />
          <text x="0" y="-5.5" textAnchor="middle" fontSize="6" fontWeight="900" fill="#92400E" fontFamily="sans-serif">U</text>
        </g>

        {/* ============================================================ */}
        {/* 6. THE 5 INTERACTIVE LANDMARKS */}
        {/* ============================================================ */}
        {worlds.map((w) => {
          const isLocked = progress.totalStars < w.minStarsToUnlock;
          const isSelected = selectedWorld?.id === w.id;
          const isCompleted =
            !isLocked &&
            (w.quizIds || []).some((qid) => (progress.completedQuizzes || []).includes(qid));

          return (
            <g
              key={w.id}
              className={`map-landmark-node ${isSelected ? 'selected' : ''}`}
              transform={`translate(${w.x}, ${w.y})`}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (isLocked) {
                  soundFx.playIncorrect();
                } else {
                  soundFx.playPop();
                }
                moveToWorld(w);
              }}
              tabIndex={0}
              role="button"
              aria-label={`Wilayah ${w.name}, Mata Pelajaran: ${w.subject}, Status: ${
                isLocked ? `Terkunci (Butuh ${w.minStarsToUnlock} Bintang)` : 'Terbuka'
              }`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  moveToWorld(w);
                }
              }}
            >
              {/* Soft Golden Selection Aura */}
              {isSelected && (
                <g className="anim-pulse-subtle">
                  <ellipse
                    cx="0"
                    cy="8"
                    rx="64"
                    ry="42"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3.5"
                    strokeDasharray="8 6"
                  />
                  <circle cx="-52" cy="8" r="3.5" fill="#F59E0B" />
                  <circle cx="52" cy="8" r="3.5" fill="#F59E0B" />
                </g>
              )}

              {/* Realistic Ground Contact Shadow */}
              <ellipse cx="0" cy="24" rx="42" ry="14" fill="#143D20" opacity="0.3" />

              {/* =================================================== */}
              {/* LANDMARK A: DESA ANGKA (Village House, Windmill & Garden) */}
              {/* Polished lines, firmly grounded on foundation, clean visual identity */}
              {/* =================================================== */}
              {w.id === 'desa-angka' && (
                <g transform="translate(0, -14)">
                  {/* Paved Stone Foundation Slab */}
                  <rect x="-26" y="20" width="52" height="6" rx="2" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="-12" y1="20" x2="-12" y2="26" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="12" y1="20" x2="12" y2="26" stroke="#94A3B8" strokeWidth="1" />

                  {/* Timber Garden Fence on Left */}
                  <g stroke="#78350F" strokeWidth="1.4">
                    <line x1="-36" y1="12" x2="-22" y2="12" />
                    <line x1="-36" y1="18" x2="-22" y2="18" />
                    <line x1="-34" y1="8" x2="-34" y2="22" strokeWidth="2" strokeLinecap="round" />
                    <line x1="-28" y1="8" x2="-28" y2="22" strokeWidth="2" strokeLinecap="round" />
                    <line x1="-22" y1="8" x2="-22" y2="22" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  {/* Little Garden Flowers by Fence */}
                  <circle cx="-31" cy="18" r="2" fill="#EC4899" />
                  <circle cx="-25" cy="17" r="2" fill="#FBBF24" />

                  {/* Cottage Main Body */}
                  <rect x="-22" y="-6" width="44" height="28" rx="3" fill="#FFFDF5" stroke="#78350F" strokeWidth="2.2" />
                  {/* Vertical Timber Beam Details */}
                  <line x1="-8" y1="-6" x2="-8" y2="22" stroke="#D97706" strokeWidth="1.2" />
                  <line x1="8" y1="-6" x2="8" y2="22" stroke="#D97706" strokeWidth="1.2" />

                  {/* Arched Wooden Entrance Door */}
                  <path d="M -6 22 L -6 9 Q 0 3 6 9 L 6 22 Z" fill="#92400E" stroke="#451A03" strokeWidth="1.6" />
                  <circle cx="3" cy="15" r="1.3" fill="#FEF08A" />

                  {/* Cozy Country Window on Right */}
                  <rect x="9" y="3" width="9" height="9" rx="1.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1.4" />
                  <line x1="13.5" y1="3" x2="13.5" y2="12" stroke="#78350F" strokeWidth="1" />
                  <line x1="9" y1="7.5" x2="18" y2="7.5" stroke="#78350F" strokeWidth="1" />

                  {/* Crisp Terracotta Red Gabled Roof */}
                  <polygon points="0,-32 -28,-6 28,-6" fill="#DC2626" stroke="#991B1B" strokeWidth="2.4" />
                  {/* Roof Tile Eaves Line */}
                  <line x1="-26" y1="-7" x2="26" y2="-7" stroke="#FEF2F2" strokeWidth="1.2" opacity="0.7" />

                  {/* Stone Chimney with Puffing Smoke */}
                  <rect x="12" y="-30" width="8" height="14" rx="1.5" fill="#94A3B8" stroke="#475569" strokeWidth="1.4" />
                  <g transform="translate(16, -34)">
                    <g className="anim-smoke">
                      <circle cx="0" cy="0" r="3.2" fill="#E2E8F0" />
                      <circle cx="2" cy="-6" r="4.2" fill="#CBD5E1" />
                    </g>
                  </g>

                  {/* Rustic Windmill Blades (Clean wooden construction, no star badge) */}
                  <g className="anim-float">
                    <circle cx="0" cy="-14" r="4.5" fill="#78350F" />
                    <line x1="0" y1="-32" x2="0" y2="4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-18" y1="-14" x2="18" y2="-14" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                    {/* Wooden slat blades */}
                    <rect x="-2" y="-32" width="4" height="8" rx="1" fill="#D97706" />
                    <rect x="-2" y="-4" width="4" height="8" rx="1" fill="#D97706" />
                    <rect x="-18" y="-16" width="8" height="4" rx="1" fill="#D97706" />
                    <rect x="10" y="-16" width="8" height="4" rx="1" fill="#D97706" />
                  </g>

                  {/* Floating Math Crystal (+3) */}
                  <g transform="translate(26, -18)">
                    <g className="anim-crystal-1">
                      <polygon points="0,-10 6,-3 0,4 -6,-3" fill="#67E8F9" stroke="#0891B2" strokeWidth="1.4" />
                      <text x="0" y="-1" textAnchor="middle" fontSize="7" fontWeight="900" fill="#0891B2" fontFamily="sans-serif">+3</text>
                    </g>
                  </g>
                </g>
              )}

              {/* =================================================== */}
              {/* LANDMARK B: HUTAN KATA (Treehouse Library & Letters) */}
              {/* =================================================== */}
              {w.id === 'hutan-kata' && (
                <g transform="translate(0, -14)">
                  {/* Tree Trunk Base */}
                  <path d="M -16 26 L -10 -4 L 10 -4 L 16 26 Z" fill="#78350F" stroke="#451A03" strokeWidth="2.4" />
                  <line x1="-4" y1="-4" x2="-6" y2="24" stroke="#92400E" strokeWidth="1.2" />
                  <line x1="4" y1="-4" x2="6" y2="24" stroke="#92400E" strokeWidth="1.2" />

                  {/* Multi-Layered Round Foliage */}
                  <ellipse cx="0" cy="-26" rx="40" ry="28" fill="#15803D" stroke="#14532D" strokeWidth="2.6" />
                  <ellipse cx="-16" cy="-30" rx="20" ry="16" fill="#22C55E" />
                  <ellipse cx="16" cy="-28" rx="18" ry="15" fill="#4ADE80" />

                  {/* Open Storybook on Trunk */}
                  <polygon points="-18,2 0,-3 18,2 15,18 0,14 -15,18" fill="#FFFDF5" stroke="#7C3AED" strokeWidth="2" />
                  <line x1="0" y1="-3" x2="0" y2="14" stroke="#7C3AED" strokeWidth="1.8" />
                  <line x1="-12" y1="4" x2="-4" y2="2" stroke="#A78BFA" strokeWidth="1.2" />
                  <line x1="-12" y1="9" x2="-4" y2="7" stroke="#A78BFA" strokeWidth="1.2" />
                  <line x1="4" y1="2" x2="12" y2="4" stroke="#A78BFA" strokeWidth="1.2" />
                  <line x1="4" y1="7" x2="12" y2="9" stroke="#A78BFA" strokeWidth="1.2" />

                  {/* Floating Letter Rune "A" */}
                  <g className="anim-float">
                    <circle cx="0" cy="-48" r="10" fill="#EDE9FE" stroke="#8B5CF6" strokeWidth="1.8" />
                    <text x="0" y="-44" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="800" fontSize="11" fill="#6D28D9">A</text>
                  </g>
                </g>
              )}

              {/* =================================================== */}
              {/* LANDMARK C: PULAU ENGLISH (Lighthouse & Seaside Beach) */}
              {/* =================================================== */}
              {w.id === 'pulau-english' && (
                <g transform="translate(0, -14)">
                  {/* Wooden Pier Staging */}
                  <rect x="-32" y="10" width="24" height="14" rx="2" fill="#D97706" stroke="#78350F" strokeWidth="1.6" />
                  <line x1="-22" y1="10" x2="-22" y2="24" stroke="#92400E" strokeWidth="1.2" />

                  {/* Lighthouse Shaft */}
                  <polygon points="-9,-36 9,-36 15,22 -15,22" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.4" />
                  <polygon points="-11,-20 11,-20 13,-8 -13,-8" fill="#EF4444" />
                  <polygon points="-13,4 13,4 14,16 -14,16" fill="#EF4444" />

                  {/* Beacon Light Room */}
                  <rect x="-11" y="-44" width="22" height="9" rx="2" fill="#FEF08A" stroke="#0F172A" strokeWidth="2.2" />
                  <polygon points="-14,-44 0,-54 14,-44" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
                  <line x1="0" y1="-54" x2="0" y2="-60" stroke="#0F172A" strokeWidth="1.5" />

                  {/* Welcoming Speech Balloon "Hi!" */}
                  <g transform="translate(26, -38)">
                    <g className="anim-float">
                      <rect x="-5" y="-9" width="40" height="20" rx="7" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.8" />
                      <text x="15" y="5" textAnchor="middle" fontFamily="Fredoka, sans-serif" fontWeight="800" fontSize="10" fill="#0284C7">Hi!</text>
                    </g>
                  </g>
                </g>
              )}

              {/* =================================================== */}
              {/* LANDMARK D: LEMBAH SAINS (Observatory Dome & Telescope) */}
              {/* =================================================== */}
              {w.id === 'lembah-sains' && (
                <g transform="translate(0, -12)">
                  {/* Expedition Dome Tent */}
                  <path d="M -28 24 L 0 -16 L 28 24 Z" fill="#E0F2FE" stroke="#0369A1" strokeWidth="2.5" />
                  <polygon points="0,-16 0,24 20,24" fill="#BAE6FD" />
                  <polygon points="0,2 -10,24 10,24" fill="#0284C7" />

                  {/* Brass Astronomy Telescope */}
                  <g transform="translate(20, -14) rotate(-35)">
                    <rect x="0" y="0" width="24" height="7" rx="2" fill="#F59E0B" stroke="#78350F" strokeWidth="1.6" />
                    <rect x="20" y="-2" width="7" height="11" rx="1.5" fill="#FEF08A" stroke="#78350F" strokeWidth="1.4" />
                    <line x1="8" y1="7" x2="2" y2="24" stroke="#78350F" strokeWidth="2.2" />
                    <line x1="14" y1="7" x2="20" y2="24" stroke="#78350F" strokeWidth="2.2" />
                  </g>

                  {/* Specimen Flask */}
                  <g transform="translate(-18, -14)">
                    <g className="anim-float">
                      <circle cx="0" cy="0" r="9" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
                      <path d="M -3 -4 Q 0 3 0 3 Q 0 -4 -3 -4" fill="#15803D" />
                    </g>
                  </g>
                </g>
              )}

              {/* =================================================== */}
              {/* LANDMARK E: KERAJAAN PENGETAHUAN (Fairytale Castle) */}
              {/* =================================================== */}
              {w.id === 'kerajaan-pengetahuan' && (
                <g transform="translate(0, -14)">
                  {/* Castle Rampart Walls */}
                  <rect x="-30" y="-8" width="60" height="34" rx="4" fill="#FFF1EE" stroke="#9F1239" strokeWidth="2.6" />
                  <path d="M -11 26 L -11 8 Q 0 -1 11 8 L 11 26 Z" fill="#4C0519" stroke="#9F1239" strokeWidth="2" />
                  <line x1="-11" y1="12" x2="11" y2="12" stroke="#E11D48" strokeWidth="1.2" strokeDasharray="2 2" />

                  {/* Left Conical Rose Tower */}
                  <rect x="-36" y="-24" width="18" height="38" rx="2.5" fill="#FFE4E6" stroke="#9F1239" strokeWidth="2.2" />
                  <polygon points="-27,-44 -40,-24 -14,-24" fill="#F43F5E" stroke="#881337" strokeWidth="2" />

                  {/* Right Conical Rose Tower */}
                  <rect x="18" y="-24" width="18" height="38" rx="2.5" fill="#FFE4E6" stroke="#9F1239" strokeWidth="2.2" />
                  <polygon points="27,-44 14,-24 40,-24" fill="#F43F5E" stroke="#881337" strokeWidth="2" />

                  {/* Center Keep */}
                  <rect x="-14" y="-30" width="28" height="26" rx="2" fill="#FFF1EE" stroke="#9F1239" strokeWidth="2.2" />
                  <polygon points="0,-52 -16,-30 16,-30" fill="#E11D48" stroke="#881337" strokeWidth="2" />

                  {/* Royal Pennant */}
                  <g transform="translate(0, -52)">
                    <g className="anim-flag">
                      <line x1="0" y1="0" x2="0" y2="-12" stroke="#B45309" strokeWidth="2" />
                      <polygon points="0,-12 18,-7 0,-2" fill="url(#goldStarGrad)" stroke="#B45309" strokeWidth="1.2" />
                    </g>
                  </g>
                </g>
              )}

              {/* =================================================== */}
              {/* CLEAN LOCATION SIGNBOARDS WITH SUBTLE REWARD / LOCK BADGE */}
              {/* (NO big stars hovering over buildings replacing player!) */}
              {/* =================================================== */}
              <g transform="translate(0, 36)" filter="url(#softBoardShadow)">
                {/* Board Container */}
                <rect
                  x="-68"
                  y="0"
                  width="136"
                  height="34"
                  rx="10"
                  fill="#FFFFFF"
                  stroke={isSelected ? '#2563EB' : '#D1D5DB'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />

                {/* Region Title */}
                <text
                  x="0"
                  y="15"
                  textAnchor="middle"
                  fontFamily="Fredoka, Nunito, sans-serif"
                  fontWeight="700"
                  fontSize="12.5"
                  fill="#1E293B"
                >
                  {w.name}
                </text>

                {/* Subject Pill Badge */}
                <rect
                  x="-48"
                  y="19"
                  width="96"
                  height="11"
                  rx="5.5"
                  fill={w.bgColor}
                  stroke={w.themeColor}
                  strokeWidth="0.8"
                />
                <text
                  x="0"
                  y="27.5"
                  textAnchor="middle"
                  fontFamily="Fredoka, sans-serif"
                  fontWeight="700"
                  fontSize="8"
                  fill={w.themeColor}
                >
                  {w.subject}
                </text>

                {/* Subtle Status Indicator on Signboard Corner */}
                {isLocked ? (
                  /* Small Neat Lock Emblem on Corner */
                  <g transform="translate(56, 0)">
                    <circle cx="0" cy="0" r="8" fill="#475569" stroke="#FFFFFF" strokeWidth="1.5" />
                    <rect x="-2.5" y="-1.5" width="5" height="4.5" rx="1" fill="#FFFFFF" />
                    <path d="M -1.5 -1.5 A 1.5 1.5 0 0 1 1.5 -1.5 V-1.5" fill="none" stroke="#FFFFFF" strokeWidth="1" />
                  </g>
                ) : isCompleted ? (
                  /* Small Tasteful Reward Star Indicator on Corner */
                  <g transform="translate(56, 0)">
                    <g className="anim-star-twinkle">
                      <circle cx="0" cy="0" r="8.5" fill="url(#goldStarGrad)" stroke="#FFFFFF" strokeWidth="1.5" />
                      <polygon
                        points="0,-4.5 1.2,-1.2 4.6,-0.8 2,1.8 2.6,5.2 0,3.4 -2.6,5.2 -2,1.8 -4.6,-0.8 -1.2,-1.2"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                ) : null}
              </g>
            </g>
          );
        })}

        {/* ============================================================ */}
        {/* 7. FULL-BODY 2D ANIMATED PLAYER CHARACTER ON THE ROAD */}
        {/* Rendered on top of the map paths with full walking & idle rigging */}
        {/* ============================================================ */}
        <MapPlayerCharacter
          avatarId={avatarId}
          x={playerPos.x}
          y={playerPos.y}
          facing={playerFacing}
          state={playerState}
          onClick={() => {
            // Clicking player makes them cheer happily
            soundFx.playBoing();
            setPlayerState('cheer');
            if (cheerTimerRef.current) clearTimeout(cheerTimerRef.current);
            cheerTimerRef.current = setTimeout(() => {
              setPlayerState('idle');
            }, 700);
          }}
        />
      </svg>

      {/* Clean Interactive Styles */}
      <style>{`
        .map-landmark-node {
          outline: none;
        }
        .map-landmark-node:focus-visible ellipse {
          stroke: #2563EB;
          stroke-width: 3px;
        }
      `}</style>
    </div>
  );
}
