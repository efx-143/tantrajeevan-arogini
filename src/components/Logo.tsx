import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  showText?: boolean;
}

export default function Logo({
  size = 36,
  className = "",
  showText = false,
  ...props
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        {...props}
      >
        <defs>
          <linearGradient
            id="tj-logo-grad"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          <linearGradient
            id="tj-pulse-grad"
            x1="14"
            y1="24"
            x2="34"
            y2="24"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <filter
            id="tj-shadow"
            x="0"
            y="0"
            width="48"
            height="52"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#6366f1"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Soft rounded squircle base */}
        <rect
          width="48"
          height="48"
          rx="13"
          fill="url(#tj-logo-grad)"
          filter="url(#tj-shadow)"
        />

        {/* Four-Petal Medical Cross of Life (Jeevan & Healing) */}
        <path
          d="M24 10C21.79 10 20 11.79 20 14V20H28V14C28 11.79 26.21 10 24 10Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M24 38C26.21 38 28 36.21 28 34V28H20V34C20 36.21 21.79 38 24 38Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M10 24C10 26.21 11.79 28 14 28H20V20H14C11.79 20 10 21.79 10 24Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M38 24C38 21.79 36.21 20 34 20H28V28H34C36.21 28 38 26.21 38 24Z"
          fill="white"
          fillOpacity="0.9"
        />

        {/* Center Bio-Tech Vital Waveform (Tantra - Technology) */}
        <path
          d="M15 24H20.5L22.5 18.5L25.5 29.5L27.5 24H33"
          stroke="url(#tj-pulse-grad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sub-node pulse beacon */}
        <circle cx="24" cy="24" r="1.5" fill="#38bdf8" />
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-stone-900 leading-tight">
            Tantrajeevan Arogini
          </span>
          <span className="text-[10px] text-stone-500 font-sans tracking-wider uppercase">
            Healthcare Technology
          </span>
        </div>
      )}
    </div>
  );
}
