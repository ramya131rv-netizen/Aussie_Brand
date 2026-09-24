import React from 'react';

export type LogoVariant = 'lk-full' | 'lk-rev' | 'lk-black' | 'lk-white' | 'custom';

interface LogoProps {
  variant?: LogoVariant;
  size?: number; // Base font size in px (e.g. 14, 16, 20)
  showSymbolOnly?: boolean;
  className?: string;
  customColors?: {
    la?: string;
    lb?: string;
    lc?: string;
    lbg?: string;
    ink?: string;
  };
}

export const LogoMark: React.FC<{
  colorA?: string;
  colorB?: string;
  colorC?: string;
  colorBg?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({
  colorA = 'currentColor',
  colorB = '#B39377',
  colorC = 'currentColor',
  colorBg = '#F7F4EF',
  className = '',
  style,
}) => (
  <svg
    viewBox="0 0 200 144"
    className={`block overflow-visible ${className}`}
    style={{ width: '7.2em', height: 'auto', ...style }}
    role="img"
    aria-label="Aussie Snap Magnets symbol"
  >
    {/* Right ribbon leg */}
    <path d="M104 2 Q116 0 124 14 L184 142 L144 142 L100 52 Z" fill={colorB} />
    {/* Left ribbon leg */}
    <path d="M16 142 L82 12 Q90 0 104 2 Q112 4 116 12 L58 142 Z" fill={colorA} />
    {/* Outer photo frame */}
    <rect
      x="77"
      y="98"
      width="46"
      height="44"
      rx="5"
      fill={colorC}
      stroke={colorBg}
      strokeWidth="3.5"
      paintOrder="stroke"
    />
    {/* Photo mat/background */}
    <rect x="83" y="104" width="34" height="32" rx="1.5" fill={colorBg} />
    {/* Sun / magnet accent */}
    <circle cx="93" cy="113" r="4.2" fill={colorB} />
    {/* Mountain silhouette inside frame */}
    <path d="M83 136 L95 121 L102 129 L109 120 L117 131 L117 136 Z" fill={colorC} />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({
  variant = 'lk-full',
  size = 16,
  showSymbolOnly = false,
  className = '',
  customColors,
}) => {
  // Determine color variables based on variant
  let la = '#0A0A0A';
  let lb = '#B39377';
  let lc = '#0A0A0A';
  let lbg = '#F7F4EF';
  let ink = '#0A0A0A';

  if (variant === 'lk-rev') {
    la = '#F7F4EF';
    lb = '#B39377';
    lc = '#F7F4EF';
    lbg = '#0A0A0A';
    ink = '#F7F4EF';
  } else if (variant === 'lk-white') {
    la = '#FFFFFF';
    lb = '#FFFFFF';
    lc = '#FFFFFF';
    lbg = '#0A0A0A';
    ink = '#FFFFFF';
  } else if (variant === 'lk-black') {
    la = '#0A0A0A';
    lb = '#0A0A0A';
    lc = '#0A0A0A';
    lbg = '#F7F4EF';
    ink = '#0A0A0A';
  } else if (variant === 'custom' && customColors) {
    if (customColors.la) la = customColors.la;
    if (customColors.lb) lb = customColors.lb;
    if (customColors.lc) lc = customColors.lc;
    if (customColors.lbg) lbg = customColors.lbg;
    if (customColors.ink) ink = customColors.ink;
  }

  return (
    <div
      className={`inline-flex flex-col items-center gap-[0.9em] ${className}`}
      style={{ fontSize: `${size}px`, color: ink }}
    >
      <LogoMark colorA={la} colorB={lb} colorC={lc} colorBg={lbg} />
      {!showSymbolOnly && (
        <div className="flex flex-col items-center gap-[0.35em] leading-none select-none">
          <b className="font-semibold text-[1.9em] tracking-[0.16em] -mr-[0.16em] whitespace-nowrap font-sans">
            AUSSIE SNAP
          </b>
          <i className="not-italic font-medium text-[0.78em] tracking-[0.62em] -mr-[0.62em] whitespace-nowrap font-sans">
            MAGNETS
          </i>
        </div>
      )}
    </div>
  );
};
