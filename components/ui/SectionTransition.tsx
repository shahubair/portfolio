"use client";

interface SectionTransitionProps {
  reverse?: boolean;
}

export default function SectionTransition({ reverse }: SectionTransitionProps) {
  return (
    <div className="relative h-16 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        style={{ transform: reverse ? "scaleY(-1)" : "none" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 L360,8 L720,40 L1080,4 L1440,28 L1440,64 L0,64 Z"
          fill="rgba(0,212,255,0.02)"
        />
        <path
          d="M0,32 L360,8 L720,40 L1080,4 L1440,28"
          stroke="url(#lineGrad)"
          strokeWidth="0.5"
          fill="none"
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#00d4ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
