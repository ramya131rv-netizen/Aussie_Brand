import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { SectionNav } from './SectionNav';

export const VoiceSection: React.FC = () => {
  return (
    <section id="voice" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            08 — VOICE
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              Voice &amp; Tone
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              We speak like a thoughtful friend who happens to take pride in fine craft. Our tone is warm, plain-spoken, and calm. We let your photos do the emotional heavy lifting.
            </p>
          </div>
        </div>

        {/* Tone Principles & Copy Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          {/* Tone Principles */}
          <div className="border-t border-[#E4DDD3] divide-y divide-[#E4DDD3]">
            <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6B645C] py-3.5 m-0">
              Tone Principles
            </h3>

            <div className="grid grid-cols-2 gap-4 py-3.5 text-sm sm:text-base">
              <b className="font-semibold text-[#0A0A0A]">Warm</b>
              <span className="text-[#6B645C]">not gushing</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-3.5 text-sm sm:text-base">
              <b className="font-semibold text-[#0A0A0A]">Clear</b>
              <span className="text-[#6B645C]">not clinical</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-3.5 text-sm sm:text-base">
              <b className="font-semibold text-[#0A0A0A]">Proud</b>
              <span className="text-[#6B645C]">not boastful</span>
            </div>
            <div className="grid grid-cols-2 gap-4 py-3.5 text-sm sm:text-base">
              <b className="font-semibold text-[#0A0A0A]">Local</b>
              <span className="text-[#6B645C]">not ocker</span>
            </div>
          </div>

          {/* Do vs Don't Examples */}
          <div className="grid gap-4">
            <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-[#6B645C] m-0">
              Copy Examples
            </h3>

            {/* Do Example */}
            <div className="border border-[#E4DDD3] bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center justify-between text-[10.5px] tracking-[0.2em] uppercase text-[#3F7A4E] font-semibold mb-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Say this (DO)
                </span>
                <span className="text-[#6B645C]">Product Line</span>
              </div>
              <p className="text-sm sm:text-base text-[#0A0A0A] leading-relaxed m-0 font-medium">
                "Printed in Melbourne on thick magnetic vinyl, made to hold your favorite memories every day."
              </p>
            </div>

            {/* Don't Example */}
            <div className="border border-[#E4DDD3] bg-white rounded-lg p-5 opacity-75">
              <div className="flex items-center justify-between text-[10.5px] tracking-[0.2em] uppercase text-[#B0443A] font-semibold mb-2">
                <span className="flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  Not this (DON'T)
                </span>
                <span className="text-[#6B645C]">Overhyped</span>
              </div>
              <p className="text-sm sm:text-base text-[#6B645C] line-through decoration-[#B0443A]/60 leading-relaxed m-0">
                "BUY OUR EPIC AMAZING 100% MAGICAL PHOTO MAGNETS NOW BEFORE STOCK RUNS OUT!!!"
              </p>
            </div>
          </div>
        </div>

        {/* Big Tagline Banner */}
        <div className="text-center py-10 border-t border-[#E4DDD3]">
          <h2 className="font-serif text-[clamp(36px,6vw,84px)] font-normal leading-[1.05] text-[#0A0A0A] m-0">
            Moments <em className="not-italic text-[#8A6D52]">That Stay Close</em>
          </h2>
        </div>

        {/* Section Navigation */}
        <SectionNav prevId="applications" prevLabel="Applications" nextId="top" nextLabel="Back to Top" />
      </div>
    </section>
  );
};
