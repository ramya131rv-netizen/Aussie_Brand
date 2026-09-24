import React from 'react';
import { Logo } from './Logo';

export const MisuseSection: React.FC = () => {
  return (
    <section id="misuse" className="py-16 sm:py-20 lg:py-28 bg-[#0A0A0A] text-[#F7F4EF] border-b border-[#222222] scroll-mt-14 sm:scroll-mt-16">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#A89F95] font-semibold pt-1">
            03 — LOGO
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#F7F4EF] mb-4">
              Please don't
            </h2>
            <p className="max-w-[62ch] text-[#CFC8BF] text-base leading-relaxed">
              The mark only works if it looks the same everywhere. These are the mistakes we see most often on print proofs and social posts.
            </p>
          </div>
        </div>

        {/* Misuse Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* 1. Stretched */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative overflow-hidden">
              <div style={{ transform: 'scaleX(1.45)' }}>
                <Logo variant="lk-full" size={8} />
              </div>
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Stretch or squash the logo. Always scale proportionally.</span>
            </figcaption>
          </figure>

          {/* 2. Recoloured */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative overflow-hidden">
              <Logo
                variant="custom"
                size={8}
                customColors={{
                  la: '#1D4E89',
                  lb: '#3C8D5A',
                  lc: '#1D4E89',
                  lbg: '#F7F4EF',
                  ink: '#1D4E89',
                }}
              />
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Recolour it outside the palette, even for seasonal campaigns.</span>
            </figcaption>
          </figure>

          {/* 3. Rotated */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative overflow-hidden">
              <div style={{ transform: 'rotate(-14deg)' }}>
                <Logo variant="lk-full" size={8} />
              </div>
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Rotate or tilt it. The “A” always stands upright.</span>
            </figcaption>
          </figure>

          {/* 4. Drop Shadow */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative overflow-hidden">
              <div style={{ filter: 'drop-shadow(4px 5px 3px rgba(0,0,0,0.55))' }}>
                <Logo variant="lk-full" size={8} />
              </div>
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Add drop shadows, glows, bevels or gradients.</span>
            </figcaption>
          </figure>

          {/* 5. Busy background */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div
              className="aspect-[4/3] grid place-items-center bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80)',
              }}
            >
              <Logo variant="lk-full" size={8} />
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Place the full-colour logo on busy photos without clear space.</span>
            </figcaption>
          </figure>

          {/* 6. Overcrowded */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative p-4 text-center">
              <div className="relative">
                <span className="absolute -top-3 -left-4 text-[10px] font-sans text-gray-500 font-bold">
                  CHEAP DEALS
                </span>
                <Logo variant="lk-full" size={7} />
                <span className="absolute -bottom-3 -right-4 text-[10px] font-sans text-gray-500 font-bold">
                  BUY 1 GET 1
                </span>
              </div>
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Crowd the logo with competing text or promo badges.</span>
            </figcaption>
          </figure>

          {/* 7. Low Contrast */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#B39377] relative overflow-hidden">
              <Logo variant="lk-full" size={8} />
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Use black text on mid-tone backgrounds with insufficient contrast.</span>
            </figcaption>
          </figure>

          {/* 8. Rearranging lockup */}
          <figure className="m-0 bg-[#141414] border border-[#262626] rounded overflow-hidden">
            <div className="aspect-[4/3] grid place-items-center bg-[#F7F4EF] relative overflow-hidden">
              <div className="flex items-center gap-3">
                <Logo showSymbolOnly size={8} />
                <span className="font-bold text-xs font-sans tracking-widest text-black">
                  AUSSIE SNAP
                </span>
              </div>
            </div>
            <figcaption className="flex gap-2.5 items-start p-3.5 text-xs sm:text-[13px] leading-snug text-[#DDD6CD]">
              <span className="shrink-0 w-4 h-4 rounded-full bg-[#B0443A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                ✕
              </span>
              <span>Rearrange or alter proportions between symbol and wordmark.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
