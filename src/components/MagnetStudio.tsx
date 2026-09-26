import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { SectionNav } from './SectionNav';

interface SizePreset {
  id: string;
  name: string;
  widthMm: number;
  heightMm: number;
  aspect: string;
  renderWidth: number; // width in px on canvas
  renderHeight: number;
}

const SIZE_PRESETS: SizePreset[] = [
  { id: 'sq50', name: 'Square (50×50 mm)', widthMm: 50, heightMm: 50, aspect: '1:1', renderWidth: 200, renderHeight: 200 },
  { id: 'med75', name: 'Medium (75×50 mm)', widthMm: 75, heightMm: 50, aspect: '3:2', renderWidth: 260, renderHeight: 173 },
  { id: 'lg100', name: 'Large (100×75 mm)', widthMm: 100, heightMm: 75, aspect: '4:3', renderWidth: 280, renderHeight: 210 },
  { id: 'sq75', name: 'Square L (75×75 mm)', widthMm: 75, heightMm: 75, aspect: '1:1', renderWidth: 230, renderHeight: 230 },
  { id: 'mini38', name: 'Mini (38×38 mm)', widthMm: 38, heightMm: 38, aspect: '1:1', renderWidth: 160, renderHeight: 160 },
];

const PRESET_PHOTOS = [
  {
    id: 'family',
    title: 'Family',
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'dog',
    title: 'Pet',
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'beach',
    title: 'Travel',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sunset',
    title: 'Sunset',
    url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=800&q=80',
  },
];

interface MagnetStudioProps {
  onCopyToast?: (text: string) => void;
}

export const MagnetStudio: React.FC<MagnetStudioProps> = ({ onCopyToast }) => {
  const [selectedSize, setSelectedSize] = useState<SizePreset>(SIZE_PRESETS[1]); // Medium
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState<string>(PRESET_PHOTOS[0].url);
  const [finish, setFinish] = useState<'gloss' | 'matte'>('gloss');
  const [cornerRadius, setCornerRadius] = useState<number>(10);
  const [showGuides, setShowGuides] = useState<boolean>(false);

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setSelectedPhotoUrl(event.target.result as string);
          if (onCopyToast) {
            onCopyToast('Uploaded custom photo to Magnet Studio mockup!');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="magnets" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            06 — MAGNET STUDIO
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              Mockup &amp; Specifications
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              Every magnet features a flexible 0.8mm magnetic sheet, vivid photo print, and protective top coat. Use the interactive studio below to preview print finishes, bleed safety guides, and custom photo cropping.
            </p>
          </div>
        </div>

        {/* Studio Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] border border-[#2A2A2A] rounded-lg overflow-hidden bg-[#121212] shadow-lg mb-16">
          {/* Fridge Door Stage */}
          <div className="relative min-h-[420px] sm:min-h-[500px] grid place-items-center p-8 sm:p-12 fridge-texture overflow-hidden select-none">
            {/* Fridge Stainless Steel Handle */}
            <div className="absolute left-4 sm:left-6 top-[10%] bottom-[10%] w-3.5 sm:w-4 rounded-full bg-gradient-to-r from-[#6d6e70] via-[#e3e4e6] to-[#8a8b8d] shadow-[4px_0_12px_rgba(0,0,0,0.35)]" />

            {/* Realistic Magnet */}
            <div
              className="relative z-10 transition-all duration-300 transform -rotate-2"
              style={{
                width: `${selectedSize.renderWidth}px`,
                height: `${selectedSize.renderHeight}px`,
              }}
            >
              {/* Photo & Shadow Container */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all shadow-[0_2px_4px_rgba(0,0,0,0.4),0_12px_28px_rgba(0,0,0,0.45)]"
                style={{
                  backgroundImage: `url(${selectedPhotoUrl})`,
                  borderRadius: `${cornerRadius}px`,
                }}
              >
                {/* Gloss / Matte Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                    finish === 'gloss'
                      ? 'opacity-100 bg-gradient-to-tr from-transparent via-white/20 to-white/45'
                      : 'opacity-15 bg-white'
                  }`}
                  style={{ borderRadius: `${cornerRadius}px` }}
                />

                {/* Print Safety / Bleed Guides */}
                {showGuides && (
                  <>
                    {/* Bleed Line (Red) */}
                    <div
                      className="absolute -inset-3 border-2 border-dashed border-[#D2432F] pointer-events-none transition-opacity"
                      style={{ borderRadius: `${cornerRadius + 2}px` }}
                    >
                      <i className="not-italic absolute -top-5 left-0 text-[10px] font-mono font-bold tracking-wider text-[#D2432F] bg-white/90 px-1 rounded">
                        BLEED +3mm
                      </i>
                    </div>

                    {/* Safe Zone (Blue) */}
                    <div
                      className="absolute inset-2 border-2 border-dashed border-[#2F6FD2] pointer-events-none"
                      style={{ borderRadius: `${Math.max(2, cornerRadius - 4)}px` }}
                    >
                      <i className="not-italic absolute -bottom-5 left-0 text-[10px] font-mono font-bold tracking-wider text-[#2F6FD2] bg-white/90 px-1 rounded">
                        SAFE MARGIN
                      </i>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Studio Controls Panel */}
          <div className="bg-[#121212] border-t lg:border-t-0 lg:border-l border-[#2A2A2A] p-6 text-[#F7F4EF] flex flex-col gap-6">
            {/* Photo Selection */}
            <div>
              <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#9C958D] font-semibold mb-2.5">
                Photo Source
              </h4>
              <div className="flex flex-wrap gap-2">
                {PRESET_PHOTOS.map((ph) => (
                  <button
                    key={ph.id}
                    type="button"
                    onClick={() => setSelectedPhotoUrl(ph.url)}
                    className={`w-12 h-12 rounded border transition-all bg-cover bg-center cursor-pointer ${
                      selectedPhotoUrl === ph.url
                        ? 'ring-2 ring-offset-2 ring-[#B39377] ring-offset-[#121212] border-[#B39377]'
                        : 'border-[#333333] hover:border-white/50'
                    }`}
                    style={{ backgroundImage: `url(${ph.url})` }}
                    title={ph.title}
                  />
                ))}

                {/* File Upload Button */}
                <label className="w-12 h-12 rounded border border-dashed border-[#555555] hover:border-[#B39377] flex items-center justify-center cursor-pointer text-[#AAAAAA] hover:text-white transition-all bg-white/5">
                  <Upload className="w-5 h-5" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Size Preset Selector */}
            <div>
              <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#9C958D] font-semibold mb-2.5">
                Size Format
              </h4>
              <div className="flex flex-col gap-1.5">
                {SIZE_PRESETS.map((sz) => (
                  <button
                    key={sz.id}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`w-full text-left px-3 py-2 rounded text-xs font-medium cursor-pointer border transition-all flex justify-between items-center ${
                      selectedSize.id === sz.id
                        ? 'bg-[#B39377] text-[#0A0A0A] border-[#B39377] font-semibold'
                        : 'bg-[#1E1E1E] text-[#DDDDDD] border-[#333333] hover:border-[#555555]'
                    }`}
                  >
                    <span>{sz.name}</span>
                    <span className="font-mono text-[11px] opacity-80">{sz.aspect}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Toggle */}
            <div>
              <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#9C958D] font-semibold mb-2.5">
                Top Coat Finish
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFinish('gloss')}
                  className={`py-1.5 px-3 rounded text-xs font-medium border cursor-pointer transition-all ${
                    finish === 'gloss'
                      ? 'bg-[#B39377] text-[#0A0A0A] border-[#B39377] font-semibold'
                      : 'bg-[#1E1E1E] text-[#DDDDDD] border-[#333333]'
                  }`}
                >
                  High Gloss
                </button>
                <button
                  type="button"
                  onClick={() => setFinish('matte')}
                  className={`py-1.5 px-3 rounded text-xs font-medium border cursor-pointer transition-all ${
                    finish === 'matte'
                      ? 'bg-[#B39377] text-[#0A0A0A] border-[#B39377] font-semibold'
                      : 'bg-[#1E1E1E] text-[#DDDDDD] border-[#333333]'
                  }`}
                >
                  Velvet Matte
                </button>
              </div>
            </div>

            {/* Corner Radius Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[10px] tracking-[0.26em] uppercase text-[#9C958D] font-semibold m-0">
                  Corner Radius
                </h4>
                <span className="text-xs font-mono text-[#B39377]">{cornerRadius}px</span>
              </div>
              <input
                type="range"
                min="2"
                max="24"
                value={cornerRadius}
                onChange={(e) => setCornerRadius(Number(e.target.value))}
                className="w-full accent-[#B39377] cursor-pointer"
                aria-label="Corner radius slider"
              />
            </div>

            {/* Show Print Guides */}
            <label className="flex items-center gap-2.5 text-xs text-[#DDDDDD] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showGuides}
                onChange={(e) => setShowGuides(e.target.checked)}
                className="w-4 h-4 accent-[#B39377] rounded cursor-pointer"
              />
              Show Print Bleed &amp; Safe Margins
            </label>

            {/* Live Readout Data */}
            <div className="grid grid-cols-2 gap-[1px] bg-[#2A2A2A] border border-[#2A2A2A] rounded overflow-hidden text-xs mt-2">
              <div className="bg-[#171717] p-2.5">
                <span className="block text-[9px] tracking-[0.18em] uppercase text-[#8E877F]">
                  Dimensions
                </span>
                <b className="font-mono text-sm text-white">
                  {selectedSize.widthMm}×{selectedSize.heightMm} mm
                </b>
              </div>
              <div className="bg-[#171717] p-2.5">
                <span className="block text-[9px] tracking-[0.18em] uppercase text-[#8E877F]">
                  Bleed Size
                </span>
                <b className="font-mono text-sm text-white">
                  {selectedSize.widthMm + 6}×{selectedSize.heightMm + 6} mm
                </b>
              </div>
            </div>
          </div>
        </div>

        {/* Photography & Imagery Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-t border-[#444444] pt-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              Natural Lighting
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Warm, natural window light brings out true skin tones and vibrant Australian landscapes. Avoid heavy flash photography.
            </p>
          </div>

          <div className="border-t border-[#444444] pt-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              Subject Focus
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Keep faces, pets, and main subjects centered within the safe margin guide to avoid edge trimming during die-cutting.
            </p>
          </div>

          <div className="border-t border-[#444444] pt-4">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0A0A0A] mb-1.5">
              High Print Resolution
            </h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Photos should be at least 300 DPI at full print dimensions (minimum 1500×1000 px) to prevent pixelation on magnetic vinyl.
            </p>
          </div>
        </div>

        {/* Section Navigation */}
        <SectionNav prevId="type" prevLabel="Type" nextId="applications" nextLabel="Applications" />
      </div>
    </section>
  );
};
