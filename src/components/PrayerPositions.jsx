// SVG illustrations for each prayer position

export function StandingPosition() {
  return (
    <svg viewBox="0 0 120 200" width="120" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Standing position">
      {/* Head */}
      <circle cx="60" cy="28" r="16" fill="#c8a882" stroke="#8b6344" strokeWidth="1.5" />
      {/* Kufi / prayer cap */}
      <ellipse cx="60" cy="14" rx="13" ry="6" fill="#2d6a4f" />
      {/* Body / thobe */}
      <rect x="36" y="44" width="48" height="72" rx="6" fill="#f5f0e8" stroke="#ccc" strokeWidth="1" />
      {/* Arms folded on chest */}
      <path d="M36 65 Q20 68 22 80 Q24 90 36 88" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M84 65 Q100 68 98 80 Q96 90 84 88" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Right hand over left on chest */}
      <path d="M50 76 Q60 70 70 76" stroke="#c8a882" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x="40" y="114" width="16" height="60" rx="5" fill="#4a3728" />
      <rect x="64" y="114" width="16" height="60" rx="5" fill="#4a3728" />
      {/* Feet */}
      <ellipse cx="48" cy="174" rx="12" ry="6" fill="#3a2a1c" />
      <ellipse cx="72" cy="174" rx="12" ry="6" fill="#3a2a1c" />
      {/* Prayer mat line */}
      <line x1="10" y1="180" x2="110" y2="180" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RukuPosition() {
  return (
    <svg viewBox="0 0 200 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg" aria-label="Bowing position (Ruku)">
      {/* Head */}
      <circle cx="160" cy="58" r="16" fill="#c8a882" stroke="#8b6344" strokeWidth="1.5" />
      {/* Kufi */}
      <ellipse cx="160" cy="44" rx="13" ry="6" fill="#2d6a4f" />
      {/* Back (horizontal) */}
      <rect x="60" y="68" width="100" height="18" rx="6" fill="#f5f0e8" stroke="#ccc" strokeWidth="1" />
      {/* Torso going down */}
      <rect x="54" y="72" width="18" height="52" rx="6" fill="#f5f0e8" stroke="#ccc" strokeWidth="1" />
      {/* Arms hanging down to knees */}
      <line x1="90" y1="80" x2="90" y2="120" stroke="#c8a882" strokeWidth="8" strokeLinecap="round" />
      <line x1="130" y1="80" x2="130" y2="120" stroke="#c8a882" strokeWidth="8" strokeLinecap="round" />
      {/* Hands on knees */}
      <ellipse cx="90" cy="122" rx="10" ry="6" fill="#c8a882" />
      <ellipse cx="130" cy="122" rx="10" ry="6" fill="#c8a882" />
      {/* Legs */}
      <rect x="40" y="122" width="16" height="24" rx="5" fill="#4a3728" />
      <rect x="66" y="122" width="16" height="24" rx="5" fill="#4a3728" />
      {/* Feet */}
      <ellipse cx="48" cy="146" rx="12" ry="6" fill="#3a2a1c" />
      <ellipse cx="74" cy="146" rx="12" ry="6" fill="#3a2a1c" />
      {/* Prayer mat line */}
      <line x1="10" y1="152" x2="190" y2="152" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SujudPosition() {
  return (
    <svg viewBox="0 0 200 140" width="200" height="140" xmlns="http://www.w3.org/2000/svg" aria-label="Prostration position (Sujud)">
      {/* Prayer mat */}
      <rect x="10" y="108" width="180" height="12" rx="4" fill="#d4a855" opacity="0.4" />
      <line x1="10" y1="120" x2="190" y2="120" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
      {/* Body arched down */}
      <path d="M50 90 Q80 60 120 55 Q150 52 170 58" stroke="#f5f0e8" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M50 90 Q80 60 120 55 Q150 52 170 58" stroke="#ccc" strokeWidth="19" fill="none" strokeLinecap="round" opacity="0.3"/>
      {/* Head on ground */}
      <circle cx="170" cy="68" r="16" fill="#c8a882" stroke="#8b6344" strokeWidth="1.5" />
      <ellipse cx="170" cy="108" rx="14" ry="5" fill="#c8a882" opacity="0.8" />
      {/* Forehead dot on ground */}
      <ellipse cx="170" cy="108" rx="8" ry="3" fill="#8b6344" opacity="0.6" />
      {/* Kufi */}
      <ellipse cx="170" cy="56" rx="12" ry="5" fill="#2d6a4f" />
      {/* Arms outstretched on ground */}
      <path d="M130 75 Q110 90 85 100 Q70 106 55 108" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M130 75 Q115 85 100 95 Q88 103 75 108" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Knees on ground */}
      <ellipse cx="55" cy="108" rx="12" ry="7" fill="#4a3728" />
      <ellipse cx="38" cy="108" rx="12" ry="7" fill="#4a3728" />
      {/* Feet up */}
      <path d="M55 108 Q45 95 40 85" stroke="#4a3728" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M38 108 Q28 95 24 85" stroke="#4a3728" strokeWidth="10" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="84" rx="8" ry="5" fill="#3a2a1c" transform="rotate(-20 40 84)" />
      <ellipse cx="24" cy="84" rx="8" ry="5" fill="#3a2a1c" transform="rotate(-20 24 84)" />
    </svg>
  );
}

export function SittingPosition() {
  return (
    <svg viewBox="0 0 160 180" width="160" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Sitting position (Tashahhud)">
      {/* Head */}
      <circle cx="80" cy="28" r="16" fill="#c8a882" stroke="#8b6344" strokeWidth="1.5" />
      {/* Kufi */}
      <ellipse cx="80" cy="14" rx="13" ry="6" fill="#2d6a4f" />
      {/* Body */}
      <rect x="56" y="44" width="48" height="52" rx="6" fill="#f5f0e8" stroke="#ccc" strokeWidth="1" />
      {/* Left arm resting on knee */}
      <path d="M56 70 Q40 80 38 100" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      <ellipse cx="38" cy="102" rx="9" ry="5" fill="#c8a882" />
      {/* Right arm — index finger raised (pointing) */}
      <path d="M104 70 Q120 80 122 100" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      <ellipse cx="122" cy="102" rx="9" ry="5" fill="#c8a882" />
      {/* Index finger pointing up */}
      <line x1="122" y1="102" x2="125" y2="82" stroke="#c8a882" strokeWidth="4" strokeLinecap="round" />
      {/* Legs folded (sitting) */}
      <path d="M56 94 Q40 110 30 130 Q28 142 40 144 Q55 146 68 136 Q76 128 80 120" stroke="#4a3728" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M104 94 Q120 110 130 130 Q132 142 120 144 Q105 146 92 136 Q84 128 80 120" stroke="#4a3728" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Feet */}
      <ellipse cx="34" cy="144" rx="13" ry="6" fill="#3a2a1c" transform="rotate(10 34 144)" />
      <ellipse cx="126" cy="144" rx="13" ry="6" fill="#3a2a1c" transform="rotate(-10 126 144)" />
      {/* Prayer mat line */}
      <line x1="10" y1="155" x2="150" y2="155" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RisingPosition() {
  return (
    <svg viewBox="0 0 120 200" width="120" height="200" xmlns="http://www.w3.org/2000/svg" aria-label="Rising from bowing">
      {/* Head */}
      <circle cx="60" cy="28" r="16" fill="#c8a882" stroke="#8b6344" strokeWidth="1.5" />
      {/* Kufi */}
      <ellipse cx="60" cy="14" rx="13" ry="6" fill="#2d6a4f" />
      {/* Body */}
      <rect x="36" y="44" width="48" height="72" rx="6" fill="#f5f0e8" stroke="#ccc" strokeWidth="1" />
      {/* Arms at sides */}
      <path d="M36 60 Q18 65 16 85 Q16 100 36 98" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M84 60 Q102 65 104 85 Q104 100 84 98" stroke="#c8a882" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x="40" y="114" width="16" height="60" rx="5" fill="#4a3728" />
      <rect x="64" y="114" width="16" height="60" rx="5" fill="#4a3728" />
      {/* Feet */}
      <ellipse cx="48" cy="174" rx="12" ry="6" fill="#3a2a1c" />
      <ellipse cx="72" cy="174" rx="12" ry="6" fill="#3a2a1c" />
      {/* Prayer mat line */}
      <line x1="10" y1="180" x2="110" y2="180" stroke="#2d6a4f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
