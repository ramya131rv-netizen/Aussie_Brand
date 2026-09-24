import React, { useState } from 'react';

export const TypographySection: React.FC = () => {
  // Interactive Type Tester State
  const [selectedFont, setSelectedFont] = useState<'serif' | 'sans'>('serif');
  const [fontSize, setFontSize] = useState<number>(36);
  const [fontWeight, setFontWeight] = useState<number>(500);
  const [textTransform, setTextTransform] = useState<'none' | 'uppercase'>('none');
  const [testText, setTestText] = useState<string>(
    'A photo on your phone is a file. A photo on your fridge is a moment you walk past every day.'
  );

  return (
    <section id="type" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            05 — TYPE
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              Typography
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              We pair an expressive serif with a warm geometric sans. Cormorant Garamond gives voice to emotional taglines; Montserrat delivers clear, confident product details and UI elements.
            </p>
          </div>
        </div>

        {/* Font Family Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#0A0A0A] mb-16">
          {/* Card 1: Cormorant Garamond */}
          <div className="py-8 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#E4DDD3]">
            <div className="font-serif text-[72px] sm:text-[84px] leading-none mb-3 text-[#0A0A0A]">
              Aa
            </div>
            <h3 className="text-base font-semibold text-[#0A0A0A]">Cormorant Garamond</h3>
            <div className="font-mono text-xs tracking-wider text-[#3E3E3E] my-3 break-all uppercase">
              ABCDEFGHIJKLM NOPQRSTUVWXYZ 1234567890
            </div>
            <p className="text-xs text-[#6B645C] leading-relaxed">
              Primary serif for hero taglines, emotional quotes, and print covers. Set loose with balance text wrapping.
            </p>
          </div>

          {/* Card 2: Montserrat */}
          <div className="py-8 px-0 md:px-6 border-b md:border-b-0 md:border-r border-[#E4DDD3]">
            <div className="font-sans text-[72px] sm:text-[84px] font-semibold leading-none mb-3 text-[#0A0A0A]">
              Aa
            </div>
            <h3 className="text-base font-semibold text-[#0A0A0A]">Montserrat</h3>
            <div className="font-mono text-xs tracking-wider text-[#3E3E3E] my-3 break-all uppercase">
              ABCDEFGHIJKLM NOPQRSTUVWXYZ 1234567890
            </div>
            <p className="text-xs text-[#6B645C] leading-relaxed">
              Primary sans-serif for headlines, body copy, navigation, buttons, and technical specifications.
            </p>
          </div>

          {/* Card 3: Monospace / Numbers */}
          <div className="py-8 pl-0 md:pl-6">
            <div className="font-mono text-[72px] sm:text-[84px] leading-none mb-3 text-[#0A0A0A]">
              09
            </div>
            <h3 className="text-base font-semibold text-[#0A0A0A]">Tabular Monospace</h3>
            <div className="font-mono text-xs tracking-wider text-[#3E3E3E] my-3 break-all">
              0123456789 $#%&amp;@+=-
            </div>
            <p className="text-xs text-[#6B645C] leading-relaxed">
              Used for dimensions, order codes, color HEX numbers, and production tabular data.
            </p>
          </div>
        </div>

        {/* Interactive Type Tester */}
        <div className="border border-[#E4DDD3] rounded-lg overflow-hidden bg-white shadow-sm mb-16">
          {/* Controls Bar */}
          <div className="p-4 sm:p-5 border-b border-[#E4DDD3] bg-[#FBF9F5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Font Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B645C] font-semibold">
                  Font:
                </span>
                <div className="inline-flex rounded-md border border-[#E4DDD3] p-0.5 bg-white">
                  <button
                    type="button"
                    onClick={() => setSelectedFont('serif')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                      selectedFont === 'serif'
                        ? 'bg-[#0A0A0A] text-white'
                        : 'text-[#0A0A0A] hover:bg-gray-100'
                    }`}
                  >
                    Cormorant Garamond
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFont('sans')}
                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                      selectedFont === 'sans'
                        ? 'bg-[#0A0A0A] text-white'
                        : 'text-[#0A0A0A] hover:bg-gray-100'
                    }`}
                  >
                    Montserrat
                  </button>
                </div>
              </div>

              {/* Size Slider */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B645C] font-semibold">
                  Size: {fontSize}px
                </span>
                <input
                  type="range"
                  min="14"
                  max="64"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-28 accent-[#0A0A0A] cursor-pointer"
                  aria-label="Font size slider"
                />
              </div>

              {/* Weight Selector */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B645C] font-semibold">
                  Weight:
                </span>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(Number(e.target.value))}
                  className="bg-white border border-[#E4DDD3] rounded px-2.5 py-1 text-xs text-[#0A0A0A] focus:outline-none"
                >
                  <option value={400}>Regular (400)</option>
                  <option value={500}>Medium (500)</option>
                  <option value={600}>Semi-Bold (600)</option>
                  <option value={700}>Bold (700)</option>
                </select>
              </div>

              {/* Transform */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setTextTransform(textTransform === 'none' ? 'uppercase' : 'none')
                  }
                  className={`px-3 py-1 border border-[#E4DDD3] rounded text-xs font-semibold uppercase tracking-wider transition-all ${
                    textTransform === 'uppercase'
                      ? 'bg-[#0A0A0A] text-white'
                      : 'bg-white text-[#0A0A0A] hover:bg-gray-50'
                  }`}
                >
                  Caps
                </button>
              </div>
            </div>
          </div>

          {/* Type Specimen Input/Textarea */}
          <div className="p-6 sm:p-8 min-h-[160px] bg-white">
            <textarea
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              className={`w-full border-0 outline-none resize-y bg-transparent text-[#0A0A0A] leading-tight ${
                selectedFont === 'serif' ? 'font-serif' : 'font-sans'
              }`}
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                textTransform: textTransform,
              }}
              rows={3}
            />
          </div>

          {/* Spec Readout Footer */}
          <div className="px-6 py-3 border-t border-[#E4DDD3] text-xs text-[#6B645C] font-mono flex flex-wrap justify-between gap-4 bg-[#FBF9F5]">
            <span>
              Family: {selectedFont === 'serif' ? 'Cormorant Garamond' : 'Montserrat'}
            </span>
            <span>
              Size: {fontSize}px ({ (fontSize / 16).toFixed(2) }rem)
            </span>
            <span>Weight: {fontWeight}</span>
            <span>Transform: {textTransform}</span>
          </div>
        </div>

        {/* Type Scale Table */}
        <div className="border-t border-[#E4DDD3] pt-8">
          <h3 className="text-xs font-semibold tracking-[0.24em] uppercase text-[#6B645C] mb-6">
            Typography Scale & Hierarchy
          </h3>

          <div className="divide-y divide-[#E4DDD3] border-b border-[#E4DDD3]">
            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                Display · 72px / 4.5rem
              </span>
              <span className="font-serif text-3xl sm:text-5xl font-normal text-[#0A0A0A] leading-tight">
                Moments That Stay Close
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                H1 · 44px / 2.75rem
              </span>
              <span className="font-sans text-2xl sm:text-4xl font-semibold text-[#0A0A0A] tracking-wider uppercase">
                BRAND GUIDELINES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                H2 · 32px / 2.0rem
              </span>
              <span className="font-sans text-xl sm:text-2xl font-semibold text-[#0A0A0A] tracking-wide uppercase">
                THE LOGO MARK
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                H3 · 18px / 1.125rem
              </span>
              <span className="font-sans text-base sm:text-lg font-semibold text-[#0A0A0A] tracking-wider uppercase">
                Primary Lockup Specifications
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                Body · 15px / 0.94rem
              </span>
              <span className="font-sans text-sm sm:text-base text-[#3E3E3E] leading-relaxed">
                Aussie Snap Magnets turns the photos sitting in your camera roll into small, sturdy keepsakes that live where life happens: the fridge door.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline py-4">
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B645C]">
                Caption · 11px / 0.69rem
              </span>
              <span className="font-sans text-xs font-semibold text-[#6B645C] tracking-[0.2em] uppercase">
                01 — BRAND PURPOSE &amp; AUDIENCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
