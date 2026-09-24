import React from 'react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <header id="top" className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] min-h-[500px] lg:min-h-[580px] border-b border-[#E4DDD3] bg-[#F7F4EF]">
      {/* Left Column: Brand Statement */}
      <div className="flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 gap-8 sm:gap-10">
        <div className="text-[11px] font-medium tracking-[0.32em] uppercase text-[#6B645C]">
          Brand Guidelines · Edition 1.0
        </div>

        <div className="my-auto py-6 flex flex-col items-center justify-center text-center gap-8">
          <div className="text-[clamp(16px,2.5vw,22px)] sm:text-[20px]">
            <Logo variant="lk-full" />
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-md">
            <hr className="w-12 h-[1px] bg-[#B39377] border-0 my-0" />
            <h1 className="font-serif text-[clamp(28px,3.5vw,42px)] text-center leading-[1.18] tracking-[0.02em] font-normal text-[#0A0A0A]">
              Moments<br />That Stay Close
            </h1>
          </div>
        </div>

        {/* Hero Metadata Footer */}
        <div className="flex flex-wrap justify-between gap-4 text-xs text-[#6B645C] border-t border-[#E4DDD3]/60 pt-4">
          <div>
            <b className="block text-[#0A0A0A] font-semibold text-[13px]">Aussie Snap Magnets</b>
            Custom photo fridge magnets
          </div>
          <div>
            <b className="block text-[#0A0A0A] font-semibold text-[13px]">September 2026</b>
            For designers, printers &amp; partners
          </div>
        </div>
      </div>

      {/* Right Column: Stainless Steel Fridge with Custom Photo Magnet Frames */}
      <div className="relative m-0 min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden fridge-texture flex items-center justify-center p-6 sm:p-10 select-none group">
        {/* Stainless Steel Handle */}
        <div className="absolute left-4 sm:left-6 top-[8%] bottom-[8%] w-3.5 sm:w-4 rounded-full bg-gradient-to-r from-[#6d6e70] via-[#e3e4e6] to-[#8a8b8d] shadow-[4px_0_14px_rgba(0,0,0,0.35)]" />

        {/* Magnet Photo Frame Composition */}
        <div className="relative w-full max-w-[440px] h-[340px] sm:h-[400px]">
          {/* Magnet Frame 1: Family (Main Centre-Top) */}
          <div className="absolute left-[15%] top-[5%] w-[180px] sm:w-[220px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35),0_12px_24px_rgba(0,0,0,0.3)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 border border-white/30 z-20">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
              alt="Family photo magnet frame"
              className="w-full h-full object-cover"
            />
            {/* Gloss Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/40 pointer-events-none" />
          </div>

          {/* Magnet Frame 2: Golden Retriever Dog (Top Right) */}
          <div className="absolute right-[5%] top-[18%] w-[130px] sm:w-[160px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.25)] transform rotate-3 group-hover:rotate-1 transition-transform duration-500 border border-white/30 z-10">
            <img
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80"
              alt="Golden retriever dog photo magnet frame"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/40 pointer-events-none" />
          </div>

          {/* Magnet Frame 3: Mountain Landscape (Bottom Left) */}
          <div className="absolute left-[8%] bottom-[10%] w-[140px] sm:w-[170px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.25)] transform rotate-4 group-hover:rotate-2 transition-transform duration-500 border border-white/30 z-10">
            <img
              src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=500&q=80"
              alt="Mountain landscape photo magnet frame"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/40 pointer-events-none" />
          </div>

          {/* Magnet Frame 4: Beach Sunset / Travel (Bottom Right) */}
          <div className="absolute right-[12%] bottom-[8%] w-[150px] sm:w-[190px] aspect-[4/3] rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.35),0_12px_24px_rgba(0,0,0,0.3)] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-white/30 z-20">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
              alt="Beach sunset photo magnet frame"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-white/40 pointer-events-none" />
          </div>
        </div>

        {/* Caption Badge */}
        <figcaption className="absolute left-4 bottom-4 bg-[#0A0A0A]/85 backdrop-blur-sm text-[#F7F4EF] text-[11px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-sm z-30 shadow-md">
          The product, in its natural habitat — Custom Photo Magnets
        </figcaption>
      </div>
    </header>
  );
};
