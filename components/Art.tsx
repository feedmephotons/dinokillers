/* Hand-drawn vector pieces: the meteor, the night sky, and rock strata. */

function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const rand = lcg(66);
const stars = Array.from({ length: 90 }, () => ({
  x: Math.round(rand() * 1600),
  y: Math.round(rand() * 700),
  r: Math.round((0.4 + rand() * 1.1) * 10) / 10,
  o: Math.round((0.15 + rand() * 0.5) * 100) / 100,
}));

export function Sky() {
  return (
    <svg
      className="sky"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#ece7dd" opacity={s.o} />
      ))}
    </svg>
  );
}

/* Drawn flying right-to-left along the x axis; CSS rotates it into its dive. */
export function Meteor() {
  return (
    <svg
      className="meteor-svg"
      viewBox="0 0 900 160"
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <linearGradient id="m-tail" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ff2d6f" />
          <stop offset="0.28" stopColor="#c13df0" stopOpacity="0.85" />
          <stop offset="0.62" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="m-streak" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ffd0de" stopOpacity="0.95" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="m-head" cx="0.4" cy="0.5" r="0.6">
          <stop offset="0" stopColor="#fff4f7" />
          <stop offset="0.35" stopColor="#ff7aa5" />
          <stop offset="1" stopColor="#ff2d6f" />
        </radialGradient>
        <filter id="m-glow" x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
      <path
        d="M70 80 C 120 20, 420 46, 900 78 L 900 82 C 420 114, 120 140, 70 80 Z"
        fill="url(#m-tail)"
        filter="url(#m-glow)"
        opacity="0.75"
      />
      <path
        d="M78 80 C 130 34, 400 56, 880 79 L 880 81 C 400 104, 130 126, 78 80 Z"
        fill="url(#m-tail)"
      />
      <g stroke="url(#m-streak)" strokeLinecap="round" fill="none">
        <path d="M150 62 H 560" strokeWidth="3" />
        <path d="M130 98 H 470" strokeWidth="2.5" />
        <path d="M210 80 H 720" strokeWidth="2" opacity="0.7" />
        <path d="M330 48 H 520" strokeWidth="1.5" opacity="0.6" />
        <path d="M300 112 H 440" strokeWidth="1.5" opacity="0.6" />
      </g>
      <ellipse cx="84" cy="80" rx="64" ry="50" fill="#ff2d6f" filter="url(#m-glow)" opacity="0.8" />
      <ellipse cx="84" cy="80" rx="44" ry="34" fill="url(#m-head)" />
      <ellipse cx="70" cy="76" rx="16" ry="11" fill="#fff" opacity="0.55" />
    </svg>
  );
}

const strataPaths = [
  "M0 14 C 180 2, 360 34, 620 20 S 1080 4, 1440 22",
  "M0 40 C 220 58, 420 26, 700 44 S 1180 66, 1440 42",
  "M0 66 C 160 52, 480 84, 760 68 S 1220 50, 1440 72",
  "M0 92 C 260 108, 520 78, 820 96 S 1240 112, 1440 90",
];

export function Strata({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={"strata" + (flip ? " strata-flip" : "")}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="strata-vein" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="0.3" stopColor="#8b5cf6" />
          <stop offset="0.7" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      {strataPaths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={i === 1 ? "url(#strata-vein)" : "#ece7dd"}
          strokeOpacity={i === 1 ? 0.9 : 0.1 + i * 0.03}
          strokeWidth={i === 1 ? 1.5 : 1}
          vectorEffect="non-scaling-stroke"
          strokeDasharray={i === 3 ? "2 7" : undefined}
        />
      ))}
    </svg>
  );
}
