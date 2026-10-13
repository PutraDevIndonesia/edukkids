import React from 'react';
import { MASCOT_THEMES, getMascotTheme } from '../../constants/mascotThemes';

/**
 * Full-body 2D vector game character representing the user's active profile mascot
 * (kiko, mimi, luna, bubu, piko).
 * 
 * Features:
 * - Full anatomy: head, torso, left/right arms, left/right legs, tail/ears/accessories
 * - 100% Consistent colors across all parts (no accidental green arms/feet on Bubu, etc.)
 * - 2D Game rigging:
 *   - Idle state: planted feet, subtle breathing bob, ear twitch, eye blinking, contact shadow
 *   - Walking state: alternate leg swinging, opposite arm swinging, body vertical bob, horizontal facing flip
 *   - Cheer / Hurray state: anticipation crouch, joyous arc jump, raised arms, gentle landing
 * - Pure SVG vectors: crisp rendering at any resolution, zero blurry pixels, responsive scaling
 */
export function MapPlayerCharacter({
  avatarId = 'kiko',
  x = 225,
  y = 370,
  facing = 'right', // 'left' | 'right'
  state = 'idle',   // 'idle' | 'walking' | 'cheer' | 'hurray'
  onClick,
  style = {}
}) {
  const isWalking = state === 'walking';
  const isCheer = state === 'cheer' || state === 'hurray';
  const isHurray = state === 'hurray';
  const flip = facing === 'left' ? -1 : 1;

  const c = getMascotTheme(avatarId);

  return (
    <g
      className={`map-player-character mascot-${avatarId} state-${state}`}
      transform={`translate(${x}, ${y})`}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.05s linear',
        ...style
      }}
      role="img"
      aria-label={`Pemain: ${avatarId.toUpperCase()} sedang ${isWalking ? 'berjalan' : 'berdiri'}`}
    >
      {/* 1. Ground Contact Shadow (Always stays on the road floor, shrinks during jump) */}
      <ellipse
        cx="0"
        cy="18"
        rx={isWalking ? 13 : isHurray ? 9 : isCheer ? 11 : 14}
        ry={isHurray ? 3 : 4.5}
        fill="#205784"
        opacity={isHurray ? 0.16 : 0.24}
        style={{ transition: 'all 0.2s ease' }}
      />

      {/* Cheer Sparkles when arriving / victorious */}
      {isCheer && (
        <g className="anim-cheer-sparkles">
          <circle cx="-16" cy="-28" r="2.5" fill="#F59E0B" />
          <polygon points="-16,-22 -14,-18 -18,-18" fill="#F59E0B" />
          <circle cx="16" cy="-30" r="2.5" fill="#38BDF8" />
          <circle cx="0" cy="-38" r="2" fill="#EC4899" />
        </g>
      )}

      {/* 2. Directional Root Group (Mirrors horizontally when moving left) */}
      <g transform={`scale(${flip}, 1)`}>
        {/* Dynamic Bobbing Root: walking bob, hurray jump, cheer hop, or idle breathe */}
        <g className={isWalking ? 'anim-walk-bob' : isHurray ? 'anim-hurray-jump' : isCheer ? 'anim-cheer-hop' : 'anim-idle-breathe'}>

          {/* ================= BACK ACCESSORIES (TAIL) ================= */}
          {c.species === 'cat' && (
            <g className={isWalking ? 'anim-tail-walk' : 'anim-tail-idle'}>
              <path
                d="M -6 6 Q -18 4 -16 -4 Q -15 -8 -11 -7 Q -13 -2 -4 3"
                fill={c.fur}
                stroke={c.outline}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          )}

          {c.species === 'fox' && (
            <g className={isWalking ? 'anim-tail-walk' : 'anim-tail-idle'} style={{ transformOrigin: '-6px 4px' }}>
              {/* Bushy Fox Tail with White Tip */}
              <path
                d="M -6 4 C -16 6 -24 0 -22 -8 C -20 -15 -13 -13 -10 -8 C -7 -3 -5 1 -6 4 Z"
                fill={c.fur}
                stroke={c.outline}
                strokeWidth="2"
              />
              <path
                d="M -22 -8 C -20 -15 -13 -13 -10 -8 C -14 -6 -18 -4 -22 -8 Z"
                fill="#FFFFFF"
                stroke={c.outline}
                strokeWidth="1.5"
              />
            </g>
          )}

          {c.species === 'rabbit' && (
            <circle cx="-8" cy="8" r="4.5" fill="#FFFFFF" stroke={c.outline} strokeWidth="1.8" />
          )}

          {c.species === 'bear' && (
            <circle cx="-8" cy="7" r="4" fill={c.fur} stroke={c.outline} strokeWidth="1.8" />
          )}

          {/* ================= LEFT LEG (BACK LAYER IN PROFILE) ================= */}
          <g
            className={`char-leg-left ${isWalking ? 'anim-leg-left-walk' : isHurray ? 'anim-leg-hurray' : ''}`}
            style={{ transformOrigin: '-5px 6px' }}
          >
            <rect
              x="-8"
              y="5"
              width="6"
              height="11"
              rx="3"
              fill={c.legShade || c.furShade}
              stroke={c.outline}
              strokeWidth="2"
            />
            {/* Foot Paw (Uses mascot foot color, never mismatched accessory color) */}
            <ellipse
              cx="-5"
              cy="16"
              rx="4.5"
              ry="2.8"
              fill={c.foot || c.fur}
              stroke={c.outline}
              strokeWidth="1.8"
            />
            {/* Foot Pad */}
            {c.footPad && (
              <ellipse cx="-5" cy="16" rx="2.5" ry="1.5" fill={c.footPad} />
            )}
          </g>

          {/* ================= LEFT ARM (SWINGS OPPOSITE TO LEFT LEG) ================= */}
          <g
            className={`char-arm-left ${isWalking ? 'anim-arm-left-walk' : isHurray ? 'anim-arm-hurray-left' : isCheer ? 'anim-arm-cheer' : ''}`}
            style={{ transformOrigin: '-7px -2px' }}
          >
            {c.species === 'owl' ? (
              /* Owl Left Wing */
              <path
                d="M -7 -2 Q -15 3 -12 10 Q -7 8 -5 3 Z"
                fill={c.arm}
                stroke={c.outline}
                strokeWidth="2"
              />
            ) : (
              /* Standard Left Arm (Uses mascot arm fur color) */
              <g>
                <rect
                  x="-11"
                  y="-2"
                  width="5"
                  height="11"
                  rx="2.5"
                  fill={c.arm}
                  stroke={c.outline}
                  strokeWidth="2"
                />
                {/* Hand Paw */}
                <circle cx="-8.5" cy="8.5" r="3.2" fill={c.paw} stroke={c.outline} strokeWidth="1.6" />
                {c.pawPad && (
                  <circle cx="-8.5" cy="8.5" r="1.6" fill={c.pawPad} />
                )}
              </g>
            )}
          </g>

          {/* ================= TORSO / BODY ================= */}
          <g className="char-torso">
            {/* Main Body Bulb */}
            <ellipse
              cx="0"
              cy="2"
              rx="10"
              ry="11"
              fill={c.fur}
              stroke={c.outline}
              strokeWidth="2.2"
            />

            {/* Belly Patch / Explorer Vest */}
            {c.species === 'rabbit' && (
              <g>
                {/* Explorer Vest */}
                <path
                  d="M -7 -6 Q 0 -5 7 -6 L 8 6 Q 0 8 -8 6 Z"
                  fill={c.clothPrimary}
                  stroke={c.outline}
                  strokeWidth="1.8"
                />
                {/* Gold Button */}
                <circle cx="0" cy="1" r="1.5" fill={c.clothSecondary} />
              </g>
            )}

            {c.species === 'cat' && (
              <g>
                {/* Cream Belly */}
                <ellipse cx="0" cy="3" rx="6.5" ry="7" fill={c.belly} />
                {/* Explorer Bandana */}
                <polygon points="-7,-6 7,-6 0,-1" fill={c.clothPrimary} stroke={c.outline} strokeWidth="1.5" />
              </g>
            )}

            {c.species === 'owl' && (
              <g>
                {/* Feather Chest Markings */}
                <path d="M -4 1 Q 0 3 4 1" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M -4 5 Q 0 7 4 5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
              </g>
            )}

            {c.species === 'bear' && (
              <g>
                {/* Honey Bear Belly */}
                <ellipse cx="0" cy="4" rx="7" ry="8" fill={c.belly} />
              </g>
            )}

            {c.species === 'fox' && (
              <g>
                {/* White Chest & Belly Fluff without harsh dividing stroke */}
                <ellipse cx="0" cy="4" rx="6.5" ry="7.5" fill="#FFFFFF" />
                <path d="M -6 -5 Q 0 1 6 -5 Q 3 2 0 4 Q -3 2 -6 -5 Z" fill="#FFFFFF" />
              </g>
            )}
          </g>

          {/* ================= RIGHT LEG (FRONT LAYER) ================= */}
          <g
            className={`char-leg-right ${isWalking ? 'anim-leg-right-walk' : isHurray ? 'anim-leg-hurray' : ''}`}
            style={{ transformOrigin: '5px 6px' }}
          >
            <rect
              x="2"
              y="5"
              width="6"
              height="11"
              rx="3"
              fill={c.leg || c.fur}
              stroke={c.outline}
              strokeWidth="2"
            />
            {/* Foot Paw (Uses mascot foot color, never mismatched accessory color) */}
            <ellipse
              cx="5"
              cy="16"
              rx="4.5"
              ry="2.8"
              fill={c.foot || c.fur}
              stroke={c.outline}
              strokeWidth="1.8"
            />
            {/* Foot Pad */}
            {c.footPad && (
              <ellipse cx="5" cy="16" rx="2.5" ry="1.5" fill={c.footPad} />
            )}
          </g>

          {/* ================= RIGHT ARM (FRONT LAYER) ================= */}
          <g
            className={`char-arm-right ${isWalking ? 'anim-arm-right-walk' : isHurray ? 'anim-arm-hurray-right' : isCheer ? 'anim-arm-cheer' : ''}`}
            style={{ transformOrigin: '7px -2px' }}
          >
            {c.species === 'owl' ? (
              /* Owl Right Wing */
              <path
                d="M 5 -2 Q 13 3 10 10 Q 5 8 3 3 Z"
                fill={c.arm}
                stroke={c.outline}
                strokeWidth="2"
              />
            ) : (
              /* Standard Right Arm (Uses mascot arm fur color) */
              <g>
                <rect
                  x="6"
                  y="-2"
                  width="5"
                  height="11"
                  rx="2.5"
                  fill={c.arm}
                  stroke={c.outline}
                  strokeWidth="2"
                />
                {/* Hand Paw */}
                <circle cx="8.5" cy="8.5" r="3.2" fill={c.paw} stroke={c.outline} strokeWidth="1.6" />
                {c.pawPad && (
                  <circle cx="8.5" cy="8.5" r="1.6" fill={c.pawPad} />
                )}
              </g>
            )}
          </g>

          {/* ================= HEAD & FACE (WITH CHARACTER PROFILE IDENTITY) ================= */}
          <g className="char-head" transform="translate(0, -14)">
            {/* 1. Species Specific Ears */}
            {c.species === 'rabbit' && (
              <g className="anim-ear-twitch" style={{ transformOrigin: '0px -6px' }}>
                {/* Left Ear */}
                <ellipse cx="-5" cy="-14" rx="4" ry="10" fill="#FFFFFF" stroke={c.outline} strokeWidth="2" />
                <ellipse cx="-5" cy="-14" rx="2" ry="7" fill={c.innerEar} />
                {/* Right Ear */}
                <ellipse cx="5" cy="-14" rx="4" ry="10" fill="#FFFFFF" stroke={c.outline} strokeWidth="2" />
                <ellipse cx="5" cy="-14" rx="2" ry="7" fill={c.innerEar} />
              </g>
            )}

            {c.species === 'cat' && (
              <g className="anim-ear-twitch" style={{ transformOrigin: '0px -4px' }}>
                <polygon points="-11,-2 -9,-12 -2,-4" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
                <polygon points="-9,-3 -8,-9 -4,-4" fill={c.innerEar} />
                <polygon points="11,-2 9,-12 2,-4" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
                <polygon points="9,-3 8,-9 4,-4" fill={c.innerEar} />
              </g>
            )}

            {c.species === 'owl' && (
              <g className="anim-ear-twitch" style={{ transformOrigin: '0px -4px' }}>
                <polygon points="-10,-3 -8,-10 -3,-5" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
                <polygon points="10,-3 8,-10 3,-5" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
              </g>
            )}

            {c.species === 'bear' && (
              <g className="anim-ear-twitch" style={{ transformOrigin: '0px -4px' }}>
                <circle cx="-8" cy="-8" r="4.5" fill={c.fur} stroke={c.outline} strokeWidth="2" />
                <circle cx="-8" cy="-8" r="2.2" fill={c.innerEar} />
                <circle cx="8" cy="-8" r="4.5" fill={c.fur} stroke={c.outline} strokeWidth="2" />
                <circle cx="8" cy="-8" r="2.2" fill={c.innerEar} />
              </g>
            )}

            {c.species === 'fox' && (
              <g className="anim-ear-twitch" style={{ transformOrigin: '0px -4px' }}>
                <polygon points="-11,-2 -9,-13 -2,-4" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
                <polygon points="-9,-3 -8,-10 -4,-4" fill="#FFFFFF" />
                <polygon points="11,-2 9,-13 2,-4" fill={c.fur} stroke={c.outline} strokeWidth="2" strokeLinejoin="round" />
                <polygon points="9,-3 8,-10 4,-4" fill="#FFFFFF" />
              </g>
            )}

            {/* 2. Head Shape */}
            <circle cx="0" cy="0" r="12" fill={c.fur} stroke={c.outline} strokeWidth="2.2" />

            {/* Species Special Head Features */}
            {c.species === 'cat' && (
              /* Cat Cream Snout Muzzle */
              <ellipse cx="0" cy="2.5" rx="7" ry="5" fill={c.snout} />
            )}

            {c.species === 'fox' && (
              /* White Fox Cheek patches */
              <path
                d="M -11 2 Q -6 6 0 8 Q 6 6 11 2 Q 8 -1 0 1 Q -8 -1 -11 2 Z"
                fill="#FFFFFF"
                stroke={c.outline}
                strokeWidth="1.5"
              />
            )}

            {c.species === 'bear' && (
              /* Bear Snout */
              <ellipse cx="0" cy="3" rx="6.5" ry="4.5" fill={c.snout} stroke={c.outline} strokeWidth="1.5" />
            )}

            {/* Blushing Cheeks */}
            <circle cx="-6.5" cy="2.5" r="2.4" fill={c.blush} opacity="0.8" />
            <circle cx="6.5" cy="2.5" r="2.4" fill={c.blush} opacity="0.8" />

            {/* Cat Whiskers */}
            {c.species === 'cat' && (
              <g stroke={c.outline} strokeWidth="1.2" strokeLinecap="round">
                <line x1="-7" y1="1.8" x2="-11.5" y2="0.8" />
                <line x1="-7" y1="3.5" x2="-11.5" y2="4.5" />
                <line x1="7" y1="1.8" x2="11.5" y2="0.8" />
                <line x1="7" y1="3.5" x2="11.5" y2="4.5" />
              </g>
            )}

            {/* Blinking Eyes */}
            <g className="anim-char-blink" style={{ transformOrigin: '0px -1px' }}>
              {c.species === 'owl' ? (
                <g>
                  {/* Big round owl eye circles */}
                  <circle cx="-4.5" cy="-1.5" r="4.2" fill="#FFFFFF" stroke={c.outline} strokeWidth="1.4" />
                  <circle cx="4.5" cy="-1.5" r="4.2" fill="#FFFFFF" stroke={c.outline} strokeWidth="1.4" />
                  <circle cx="-4" cy="-1.5" r="2" fill={c.outline} />
                  <circle cx="5" cy="-1.5" r="2" fill={c.outline} />
                </g>
              ) : c.species === 'fox' ? (
                /* Cheerful curved eye line */
                <g stroke={c.outline} strokeWidth="1.8" strokeLinecap="round" fill="none">
                  <path d="M -6 -2 Q -4 -4 -2 -2" />
                  <path d="M 2 -2 Q 4 -4 6 -2" />
                </g>
              ) : (
                /* Expressive round eyes */
                <g>
                  <circle cx="-4" cy="-1.5" r="1.8" fill={c.outline} />
                  <circle cx="4" cy="-1.5" r="1.8" fill={c.outline} />
                  <circle cx="-3.3" cy="-2.2" r="0.7" fill="#FFFFFF" />
                  <circle cx="4.7" cy="-2.2" r="0.7" fill="#FFFFFF" />
                </g>
              )}
            </g>

            {/* Accessories on Head */}
            {c.species === 'rabbit' && (
              /* Kiko's Signature Explorer Hat */
              <g>
                <path
                  d="M -7 -8 Q 0 -13 7 -8 L 5 -5 Q 0 -7 -5 -5 Z"
                  fill={c.clothPrimary}
                  stroke={c.outline}
                  strokeWidth="1.6"
                />
                <circle cx="0" cy="-9" r="1.5" fill={c.clothSecondary} />
              </g>
            )}

            {c.species === 'cat' && (
              /* Mimi's Signature Round Glasses */
              <g stroke={c.outline} strokeWidth="1.2" fill="none">
                <circle cx="-4" cy="-1.5" r="3.2" />
                <circle cx="4" cy="-1.5" r="3.2" />
                <line x1="-0.8" y1="-1.5" x2="0.8" y2="-1.5" />
              </g>
            )}

            {/* Nose & Mouth */}
            {c.species === 'owl' ? (
              /* Golden Beak */
              <polygon points="0,4 -2,1 2,1" fill="#E6B84E" stroke={c.outline} strokeWidth="1.2" />
            ) : (
              <g>
                <polygon points="0,2.5 -1.5,1 1.5,1" fill={c.nose} />
                <path d="M -1.5 3.5 Q 0 4.8 1.5 3.5" fill="none" stroke={c.outline} strokeWidth="1.3" strokeLinecap="round" />
              </g>
            )}

            {/* Bubu's Signature Green Sprout Leaf on head */}
            {c.species === 'bear' && (
              <path
                d="M -1 -11 C -4 -16 3 -18 3 -13 C 3 -10 -1 -9 -1 -11 Z"
                fill="#3E9568"
                stroke={c.outline}
                strokeWidth="1.3"
              />
            )}
          </g>
        </g>
      </g>

      {/* Internal Animation Keyframes for Skeletal Movement */}
      <style>{`
        /* Idle breathing */
        .anim-idle-breathe {
          animation: charIdleBreathe 2.4s ease-in-out infinite;
        }
        @keyframes charIdleBreathe {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1.5px); }
        }

        /* Ear twitch */
        .anim-ear-twitch {
          animation: charEarTwitch 4.5s ease-in-out infinite;
        }
        @keyframes charEarTwitch {
          0%, 90%, 100% { transform: rotate(0deg); }
          93% { transform: rotate(-4deg); }
          96% { transform: rotate(4deg); }
        }

        /* Blinking eyes */
        .anim-char-blink {
          animation: charEyeBlink 3.8s infinite;
        }
        @keyframes charEyeBlink {
          0%, 95%, 100% { transform: scaleY(1); }
          97.5% { transform: scaleY(0.1); }
        }

        /* Walking Animation: True limb rotation & vertical bobbing */
        .anim-walk-bob {
          animation: charWalkBob 0.35s ease-in-out infinite alternate;
        }
        @keyframes charWalkBob {
          0% { transform: translateY(0); }
          100% { transform: translateY(-3.2px); }
        }

        .anim-leg-left-walk {
          animation: charLegLeftSwing 0.4s ease-in-out infinite alternate;
        }
        @keyframes charLegLeftSwing {
          0% { transform: rotate(-24deg); }
          100% { transform: rotate(24deg); }
        }

        .anim-leg-right-walk {
          animation: charLegRightSwing 0.4s ease-in-out infinite alternate;
        }
        @keyframes charLegRightSwing {
          0% { transform: rotate(24deg); }
          100% { transform: rotate(-24deg); }
        }

        .anim-arm-left-walk {
          animation: charArmLeftSwing 0.4s ease-in-out infinite alternate;
        }
        @keyframes charArmLeftSwing {
          0% { transform: rotate(22deg); }
          100% { transform: rotate(-22deg); }
        }

        .anim-arm-right-walk {
          animation: charArmRightSwing 0.4s ease-in-out infinite alternate;
        }
        @keyframes charArmRightSwing {
          0% { transform: rotate(-22deg); }
          100% { transform: rotate(22deg); }
        }

        /* Tail gentle swish */
        .anim-tail-idle {
          animation: charTailSwish 2.2s ease-in-out infinite alternate;
          transform-origin: -6px 6px;
        }
        .anim-tail-walk {
          animation: charTailSwish 0.4s ease-in-out infinite alternate;
          transform-origin: -6px 6px;
        }
        @keyframes charTailSwish {
          0% { transform: rotate(-8deg); }
          100% { transform: rotate(12deg); }
        }

        /* Cheer Animation */
        .anim-cheer-hop {
          animation: charCheerHop 0.5s ease-in-out infinite alternate;
        }
        @keyframes charCheerHop {
          0% { transform: translateY(0); }
          100% { transform: translateY(-7px); }
        }
        .anim-arm-cheer {
          animation: charCheerArms 0.5s ease-in-out infinite alternate;
        }
        @keyframes charCheerArms {
          0% { transform: rotate(-45deg); }
          100% { transform: rotate(-65deg); }
        }

        /* Hurray Celebration Jump (Natural multi-phase celebration) */
        .anim-hurray-jump {
          animation: charHurrayJump 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          transform-origin: 0 16px;
        }
        @keyframes charHurrayJump {
          0% {
            transform: translateY(0) scale(1, 1);
          }
          15% {
            /* Phase 1: Anticipation crouch */
            transform: translateY(3px) scale(1.08, 0.88);
          }
          45% {
            /* Phase 2: Joyous arc jump peak */
            transform: translateY(-13px) scale(0.94, 1.06);
          }
          75% {
            /* Phase 3: Descending */
            transform: translateY(-2px) scale(1.02, 0.96);
          }
          88% {
            /* Phase 4: Gentle landing squish */
            transform: translateY(2px) scale(1.05, 0.92);
          }
          100% {
            /* Phase 5: Restored to natural idle */
            transform: translateY(0) scale(1, 1);
          }
        }

        .anim-arm-hurray-left {
          animation: charArmHurrayLeft 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes charArmHurrayLeft {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(10deg); }
          45% { transform: rotate(-80deg); }
          75% { transform: rotate(-45deg); }
          100% { transform: rotate(0deg); }
        }

        .anim-arm-hurray-right {
          animation: charArmHurrayRight 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes charArmHurrayRight {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-10deg); }
          45% { transform: rotate(80deg); }
          75% { transform: rotate(45deg); }
          100% { transform: rotate(0deg); }
        }

        .anim-leg-hurray {
          animation: charLegHurray 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes charLegHurray {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-6deg); }
          45% { transform: rotate(10deg); }
          85% { transform: rotate(-3deg); }
          100% { transform: rotate(0deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .anim-idle-breathe,
          .anim-ear-twitch,
          .anim-walk-bob,
          .anim-leg-left-walk,
          .anim-leg-right-walk,
          .anim-arm-left-walk,
          .anim-arm-right-walk,
          .anim-tail-idle,
          .anim-tail-walk,
          .anim-cheer-hop,
          .anim-arm-cheer,
          .anim-hurray-jump,
          .anim-arm-hurray-left,
          .anim-arm-hurray-right,
          .anim-leg-hurray {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </g>
  );
}
