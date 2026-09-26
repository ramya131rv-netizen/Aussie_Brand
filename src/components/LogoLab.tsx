import React, { useState } from 'react';
import { Logo, type LogoVariant } from './Logo';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionNav } from './SectionNav';

interface BgPreset {
  id: string;
  name: string;
  color: string;
  isImage?: boolean;
  imageUrl?: string;
  approvedVariants: LogoVariant[];
  note: string;
}

const BG_PRESETS: BgPreset[] = [
  {
    id: 'ivory',
    name: 'Ivory',
    color: '#F7F4EF',
    approvedVariants: ['lk-full', 'lk-black'],
    note: 'Full colour is the hero version. Use it on Ivory and Warm Gray wherever you can.',
  },
  {
    id: 'warm',
    name: 'Warm Gray',
    color: '#D9D2C9',
    approvedVariants: ['lk-full', 'lk-black'],
    note: 'Warm Gray provides gentle contrast for full colour and black versions.',
  },
  {
    id: 'taupe',
    name: 'Accent Taupe',
    color: '#B39377',
    approvedVariants: ['lk-white', 'lk-rev'],
    note: 'Use white or reversed logo on Taupe for legibility.',
  },
  {
    id: 'kraft',
    name: 'Kraft board',
    color: '#C8AA85',
    approvedVariants: ['lk-black', 'lk-white'],
    note: 'On packaging kraft board, use solid black or opaque white print.',
  },
  {
    id: 'graphite',
    name: 'Graphite',
    color: '#3E3E3E',
    approvedVariants: ['lk-rev', 'lk-white'],
    note: 'Dark background requires Reversed or White lockup.',
  },
  {
    id: 'black',
    name: 'Primary Black',
    color: '#0A0A0A',
    approvedVariants: ['lk-rev', 'lk-white'],
    note: 'Primary Black pairs beautifully with the Reversed or White mark.',
  },
  {
    id: 'photo',
    name: 'Busy photo',
    color: 'transparent',
    isImage: true,
    imageUrl:
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    approvedVariants: [],
    note: 'Avoid placing logo directly over busy imagery without an opaque background container.',
  },
];

export const LogoLab: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<LogoVariant>('lk-full');
  const [selectedBg, setSelectedBg] = useState<BgPreset>(BG_PRESETS[0]);
  const [logoSize, setLogoSize] = useState<number>(14);
  const [showClearSpace, setShowClearSpace] = useState<boolean>(false);

  const isApproved = selectedBg.approvedVariants.includes(selectedVariant);

  return (
    <section id="logo" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            02 — LOGO
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              The mark
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              The symbol is a folded ribbon “A” (for Aussie) that shelters a photo frame, the product itself. Try the logo on different backgrounds below; the lab tells you whether the combination is approved.
            </p>
          </div>
        </div>

        {/* Interactive Logo Lab Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] border border-[#E4DDD3] rounded-lg overflow-hidden bg-[#FBF9F5] shadow-sm mb-16">
          {/* Stage Area */}
          <div
            className="relative min-h-[360px] sm:min-h-[420px] grid place-items-center transition-all duration-300 overflow-hidden bg-cover bg-center p-8"
            style={
              selectedBg.isImage
                ? { backgroundImage: `url(${selectedBg.imageUrl})` }
                : { backgroundColor: selectedBg.color }
            }
          >
            {/* Verdict Badge */}
            <div
              className={`absolute top-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full shadow-sm transition-all ${
                isApproved
                  ? 'bg-[#3F7A4E] text-white'
                  : 'bg-[#B0443A] text-white'
              }`}
            >
              {isApproved ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Approved</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Not Approved</span>
                </>
              )}
            </div>

            {/* Logo Display with Clear Space Box */}
            <div className="relative transition-all duration-300">
              {showClearSpace && (
                <div
                  className="absolute -inset-7 border-2 border-dashed border-[#B0443A] pointer-events-none transition-opacity duration-200"
                  aria-hidden="true"
                >
                  <div className="absolute inset-4 border border-[#B0443A]/50" />
                  <span className="absolute top-1 left-1.5 text-[10px] tracking-[0.14em] text-[#B0443A] font-semibold bg-white/80 px-1 rounded">
                    CLEAR SPACE = X
                  </span>
                </div>
              )}
              <Logo variant={selectedVariant} size={logoSize} />
            </div>
          </div>

          {/* Controls Panel */}
          <div className="border-t lg:border-t-0 lg:border-l border-[#E4DDD3] p-6 flex flex-col gap-6 bg-[#FBF9F5]">
            {/* Version Switcher */}
            <div>
              <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#6B645C] font-semibold mb-2.5">
                Version
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'lk-full', label: 'Full colour' },
                  { id: 'lk-rev', label: 'Reversed' },
                  { id: 'lk-black', label: 'Black' },
                  { id: 'lk-white', label: 'White' },
                ].map((ver) => (
                  <button
                    key={ver.id}
                    type="button"
                    onClick={() => setSelectedVariant(ver.id as LogoVariant)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
                      selectedVariant === ver.id
                        ? 'bg-[#0A0A0A] text-[#F7F4EF] border-[#0A0A0A]'
                        : 'bg-white border-[#E4DDD3] text-[#0A0A0A] hover:border-[#0A0A0A]'
                    }`}
                  >
                    {ver.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Selector */}
            <div>
              <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#6B645C] font-semibold mb-2.5">
                Background
              </h4>
              <div className="flex flex-wrap gap-2">
                {BG_PRESETS.map((bg) => (
                  <button
                    key={bg.id}
                    type="button"
                    aria-label={bg.name}
                    onClick={() => setSelectedBg(bg)}
                    className={`w-8 h-8 rounded-full border border-black/15 cursor-pointer transition-all ${
                      selectedBg.id === bg.id
                        ? 'ring-2 ring-offset-2 ring-[#0A0A0A] scale-110'
                        : 'hover:scale-105'
                    }`}
                    style={
                      bg.isImage
                        ? { backgroundImage: `url(${bg.imageUrl})`, backgroundSize: 'cover' }
                        : { backgroundColor: bg.color }
                    }
                  />
                ))}
              </div>
            </div>

            {/* Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#6B645C] font-semibold m-0">
                  Size
                </h4>
                <span className="text-xs font-mono text-[#0A0A0A] font-medium">{logoSize}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="24"
                value={logoSize}
                onChange={(e) => setLogoSize(Number(e.target.value))}
                className="w-full accent-[#0A0A0A] cursor-pointer"
                aria-label="Logo size"
              />
            </div>

            {/* Clear Space Toggle */}
            <label className="flex items-center gap-2.5 text-xs text-[#0A0A0A] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showClearSpace}
                onChange={(e) => setShowClearSpace(e.target.checked)}
                className="w-4 h-4 accent-[#0A0A0A] rounded cursor-pointer"
              />
              Show clear space guide
            </label>

            {/* Note Output */}
            <p className="text-[12.5px] text-[#6B645C] leading-relaxed border-t border-[#E4DDD3] pt-4 m-0">
              {selectedBg.note}
            </p>
          </div>
        </div>

        {/* Anatomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="border-t border-[#0A0A0A] pt-4">
            <div className="h-[120px] grid place-items-center bg-[#FBF9F5] border border-[#E4DDD3] rounded mb-4 p-4">
              <Logo showSymbolOnly size={10} />
            </div>
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              Symbol
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Use alone for app icons, social avatars, stickers and the embossed lid of the keepsake box. Minimum 16&nbsp;px / 6&nbsp;mm wide.
            </p>
          </div>

          <div className="border-t border-[#0A0A0A] pt-4">
            <div className="h-[120px] grid place-items-center bg-[#FBF9F5] border border-[#E4DDD3] rounded mb-4 p-4">
              <Logo variant="lk-full" size={9} />
            </div>
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              Primary lockup
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Symbol stacked above the wordmark. The default for packaging, web headers and print. Minimum 120&nbsp;px / 25&nbsp;mm wide.
            </p>
          </div>

          <div className="border-t border-[#0A0A0A] pt-4">
            <div className="h-[120px] grid place-items-center bg-[#FBF9F5] border border-[#E4DDD3] rounded mb-4 p-4">
              <div className="flex flex-col items-center gap-2">
                <Logo variant="lk-full" size={7} />
                <span className="font-serif text-sm text-[#0A0A0A]">Moments That Stay Close</span>
              </div>
            </div>
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              Lockup + tagline
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              For box lids, gift bags and brochure covers only. Keep a short taupe rule between lockup and tagline, as on the packaging.
            </p>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <figure className="m-0 group">
            <div className="aspect-[4/3] grid place-items-center border border-[#E4DDD3] rounded bg-[#F7F4EF] transition-shadow group-hover:shadow-sm">
              <Logo variant="lk-full" size={10} />
            </div>
            <figcaption className="pt-2.5 text-xs">
              <b className="block text-[11px] tracking-[0.2em] uppercase text-[#0A0A0A]">Full colour</b>
              <span className="text-[#6B645C]">Light backgrounds</span>
            </figcaption>
          </figure>

          <figure className="m-0 group">
            <div className="aspect-[4/3] grid place-items-center border border-[#E4DDD3] rounded bg-[#0A0A0A] transition-shadow group-hover:shadow-sm">
              <Logo variant="lk-rev" size={10} />
            </div>
            <figcaption className="pt-2.5 text-xs">
              <b className="block text-[11px] tracking-[0.2em] uppercase text-[#0A0A0A]">Reversed</b>
              <span className="text-[#6B645C]">Dark backgrounds, keeps taupe</span>
            </figcaption>
          </figure>

          <figure className="m-0 group">
            <div className="aspect-[4/3] grid place-items-center border border-[#E4DDD3] rounded bg-[#0A0A0A] transition-shadow group-hover:shadow-sm">
              <Logo variant="lk-white" size={10} />
            </div>
            <figcaption className="pt-2.5 text-xs">
              <b className="block text-[11px] tracking-[0.2em] uppercase text-[#0A0A0A]">White</b>
              <span className="text-[#6B645C]">Foil, emboss, over photos</span>
            </figcaption>
          </figure>

          <figure className="m-0 group">
            <div className="aspect-[4/3] grid place-items-center border border-[#E4DDD3] rounded bg-white transition-shadow group-hover:shadow-sm">
              <Logo variant="lk-black" size={10} />
            </div>
            <figcaption className="pt-2.5 text-xs">
              <b className="block text-[11px] tracking-[0.2em] uppercase text-[#0A0A0A]">Black</b>
              <span className="text-[#6B645C]">Single-colour print, stamps</span>
            </figcaption>
          </figure>
        </div>

        {/* Section Navigation */}
        <SectionNav prevId="story" prevLabel="Story" nextId="misuse" nextLabel="Misuse" />
      </div>
    </section>
  );
};
