import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, AlertTriangle } from 'lucide-react';

interface Swatch {
  id: string;
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone: string;
  usage: string;
  isLight?: boolean;
}

const SWATCHES: Swatch[] = [
  {
    id: 'black',
    name: 'Primary Black',
    hex: '#0A0A0A',
    rgb: '10 10 10',
    cmyk: '70 65 60 85',
    pantone: 'Black 6 C',
    usage: 'Body text, dark backgrounds, hero lockup',
  },
  {
    id: 'taupe',
    name: 'Accent Taupe',
    hex: '#B39377',
    rgb: '179 147 119',
    cmyk: '25 38 48 4',
    pantone: '7530 C',
    usage: 'Symbol ribbon, keylines, rules, accents',
  },
  {
    id: 'ivory',
    name: 'Soft Ivory',
    hex: '#F7F4EF',
    rgb: '247 244 239',
    cmyk: '2 3 5 0',
    pantone: '7541 C',
    usage: 'Primary background, paper tint, light UI',
    isLight: true,
  },
  {
    id: 'warm',
    name: 'Warm Gray',
    hex: '#D9D2C9',
    rgb: '217 210 201',
    cmyk: '12 13 16 0',
    pantone: '427 C',
    usage: 'Subtle container fills, secondary paper',
    isLight: true,
  },
  {
    id: 'graphite',
    name: 'Deep Graphite',
    hex: '#3E3E3E',
    rgb: '62 62 62',
    cmyk: '65 58 57 37',
    pantone: '425 C',
    usage: 'Secondary body text, subtle borders',
  },
];

// Helper to compute WCAG relative luminance & contrast ratio
function getLuminance(hex: string): number {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) =>
    v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

interface ColourSectionProps {
  onCopyToast?: (text: string) => void;
}

export const ColourSection: React.FC<ColourSectionProps> = ({ onCopyToast }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Accessibility Tester State
  const [fgColor, setFgColor] = useState<Swatch>(SWATCHES[0]); // Black
  const [bgColor, setBgColor] = useState<Swatch>(SWATCHES[2]); // Ivory

  const contrastRatio = getContrastRatio(fgColor.hex, bgColor.hex);

  const passesAA = contrastRatio >= 4.5;
  const passesAAA = contrastRatio >= 7.0;

  const handleCopy = (swatch: Swatch) => {
    navigator.clipboard.writeText(swatch.hex);
    setCopiedId(swatch.id);
    if (onCopyToast) {
      onCopyToast(`Copied ${swatch.name} (${swatch.hex}) to clipboard!`);
    }
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="colour" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            04 — COLOUR
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              The palette
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              Warm, quiet, tactile. Soft Ivory creates space; Primary Black provides crisp typography; Accent Taupe anchors the ribbon symbol. Click any color swatch below to copy its HEX value.
            </p>
          </div>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {SWATCHES.map((sw) => (
            <button
              key={sw.id}
              type="button"
              onClick={() => handleCopy(sw)}
              className="group border border-[#E4DDD3] bg-white rounded overflow-hidden text-left cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6D52]"
            >
              <div
                className="h-36 sm:h-40 relative p-3 flex flex-col justify-end transition-opacity"
                style={{ backgroundColor: sw.hex }}
              >
                <span
                  className={`absolute right-3 bottom-3 text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full font-semibold transition-opacity flex items-center gap-1 ${
                    copiedId === sw.id
                      ? 'opacity-100 bg-[#0A0A0A] text-white'
                      : 'opacity-0 group-hover:opacity-100 bg-white/90 text-[#0A0A0A]'
                  }`}
                >
                  {copiedId === sw.id ? (
                    <>
                      <Check className="w-3 h-3 text-[#3F7A4E]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy HEX
                    </>
                  )}
                </span>
              </div>
              <div className="p-4 grid gap-1 text-xs">
                <b className="text-sm font-semibold text-[#0A0A0A]">{sw.name}</b>
                <code className="font-mono text-[#3E3E3E] font-medium">{sw.hex}</code>
                <div className="text-[11px] text-[#6B645C] mt-1 space-y-0.5">
                  <div>RGB: {sw.rgb}</div>
                  <div>CMYK: {sw.cmyk}</div>
                </div>
                <em className="not-italic text-[11.5px] text-[#6B645C] mt-2 block border-t border-[#E4DDD3]/60 pt-2">
                  {sw.usage}
                </em>
              </div>
            </button>
          ))}
        </div>

        {/* Brand Color Proportion Bar */}
        <div className="mb-16">
          <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6B645C] mb-3">
            Brand Color Distribution Proportions
          </h4>
          <div className="flex h-12 rounded border border-[#E4DDD3] overflow-hidden shadow-inner font-mono text-[11px]">
            <div
              className="bg-[#F7F4EF] text-[#0A0A0A] flex items-end p-2 font-semibold border-r border-[#E4DDD3] whitespace-nowrap overflow-hidden"
              style={{ flex: 55 }}
            >
              55% Soft Ivory
            </div>
            <div
              className="bg-[#0A0A0A] text-[#F7F4EF] flex items-end p-2 font-semibold border-r border-gray-800 whitespace-nowrap overflow-hidden"
              style={{ flex: 25 }}
            >
              25% Primary Black
            </div>
            <div
              className="bg-[#D9D2C9] text-[#0A0A0A] flex items-end p-2 font-semibold border-r border-[#E4DDD3] whitespace-nowrap overflow-hidden"
              style={{ flex: 10 }}
            >
              10% Warm Gray
            </div>
            <div
              className="bg-[#B39377] text-white flex items-end p-2 font-semibold border-r border-white/20 whitespace-nowrap overflow-hidden"
              style={{ flex: 7 }}
            >
              7% Taupe
            </div>
            <div
              className="bg-[#3E3E3E] text-white flex items-end p-2 font-semibold whitespace-nowrap overflow-hidden"
              style={{ flex: 3 }}
            >
              3% Graphite
            </div>
          </div>
        </div>

        {/* Interactive Accessibility Contrast Ratio Checker */}
        <div className="border border-[#E4DDD3] rounded-lg overflow-hidden bg-[#FBF9F5] shadow-sm">
          <div className="p-6 border-b border-[#E4DDD3] bg-white">
            <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-[#0A0A0A] mb-1">
              WCAG Accessibility Contrast Checker
            </h3>
            <p className="text-xs text-[#6B645C] m-0">
              Select text and background colors to verify contrast ratio standards (WCAG 2.1).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Live Preview Box */}
            <div
              className="p-8 sm:p-10 flex flex-col justify-center gap-3 min-h-[240px] transition-colors duration-300"
              style={{ backgroundColor: bgColor.hex, color: fgColor.hex }}
            >
              <div className="text-xs tracking-[0.2em] font-semibold uppercase opacity-80 font-sans">
                Aussie Snap Magnets
              </div>
              <div className="text-2xl sm:text-3xl font-semibold uppercase tracking-wider leading-tight font-sans">
                Moments That Stay Close
              </div>
              <div className="text-sm max-w-[42ch] opacity-90 leading-relaxed">
                Every magnet starts with someone's real photo. High contrast ensures readability across all printed packaging and digital screens.
              </div>
            </div>

            {/* Controls & WCAG Scores */}
            <div className="p-6 sm:p-8 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-[#E4DDD3] bg-[#FBF9F5]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Text Color Selector */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6B645C] mb-2">
                    Text Color
                  </label>
                  <select
                    value={fgColor.id}
                    onChange={(e) =>
                      setFgColor(SWATCHES.find((s) => s.id === e.target.value) || SWATCHES[0])
                    }
                    className="w-full bg-white border border-[#E4DDD3] rounded px-3 py-2 text-xs text-[#0A0A0A] font-medium focus:outline-none focus:ring-2 focus:ring-[#8A6D52]"
                  >
                    {SWATCHES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.hex})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Background Selector */}
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6B645C] mb-2">
                    Background Color
                  </label>
                  <select
                    value={bgColor.id}
                    onChange={(e) =>
                      setBgColor(SWATCHES.find((s) => s.id === e.target.value) || SWATCHES[2])
                    }
                    className="w-full bg-white border border-[#E4DDD3] rounded px-3 py-2 text-xs text-[#0A0A0A] font-medium focus:outline-none focus:ring-2 focus:ring-[#8A6D52]"
                  >
                    {SWATCHES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.hex})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contrast Ratio Score Display */}
              <div className="pt-4 border-t border-[#E4DDD3] flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-[#6B645C] font-semibold mb-1">
                    Contrast Ratio
                  </span>
                  <strong className="text-4xl font-semibold font-mono text-[#0A0A0A]">
                    {contrastRatio.toFixed(1)}:1
                  </strong>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full ${
                      passesAA ? 'bg-[#3F7A4E] text-white' : 'bg-[#E7D6D3] text-[#B0443A]'
                    }`}
                  >
                    {passesAA ? <ShieldCheck className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                    WCAG AA (Normal)
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider px-3 py-1.5 rounded-full ${
                      passesAAA ? 'bg-[#3F7A4E] text-white' : 'bg-[#E7D6D3] text-[#B0443A]'
                    }`}
                  >
                    {passesAAA ? <ShieldCheck className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                    WCAG AAA (Enhanced)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
