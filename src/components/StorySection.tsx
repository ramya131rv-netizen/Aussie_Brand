import React from 'react';
import { SectionNav } from './SectionNav';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            01 — BRAND
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              Who we are
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              Aussie Snap Magnets turns the photos sitting in your camera roll into small, sturdy keepsakes that live where life happens: the fridge door. Every decision in this guide should make that feel warm, crafted and quietly premium.
            </p>
          </div>
        </div>

        {/* Quote & Key Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 mb-16">
          <blockquote className="m-0 font-serif text-[clamp(24px,2.8vw,34px)] leading-[1.3] text-[#0A0A0A] font-normal italic">
            "A photo on your phone is a file. A photo on your fridge is <em className="not-italic text-[#8A6D52] font-medium">a moment you walk past every day.</em>"
          </blockquote>

          <dl className="grid gap-0 border-t border-[#E4DDD3]">
            <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#E4DDD3] items-baseline">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-[#6B645C]">Purpose</dt>
              <dd className="m-0 text-sm sm:text-base text-[#0A0A0A]">Keep the people, pets and places you love in everyday view.</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#E4DDD3] items-baseline">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-[#6B645C]">Product</dt>
              <dd className="m-0 text-sm sm:text-base text-[#0A0A0A]">Custom-printed photo magnets, gift sets and keepsake boxes.</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#E4DDD3] items-baseline">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-[#6B645C]">Audience</dt>
              <dd className="m-0 text-sm sm:text-base text-[#0A0A0A]">Families, pet parents, travellers and gift-givers across Australia.</dd>
            </div>
            <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[120px_1fr] gap-4 py-4 border-b border-[#E4DDD3] items-baseline">
              <dt className="text-[11px] tracking-[0.22em] uppercase text-[#6B645C]">Feeling</dt>
              <dd className="m-0 text-sm sm:text-base text-[#0A0A0A]">Warm, calm, considered. A small luxury, never cute or loud.</dd>
            </div>
          </dl>
        </div>

        {/* 4 Core Brand Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E4DDD3] border border-[#E4DDD3] rounded-lg overflow-hidden shadow-sm">
          <div className="bg-[#FBF9F5] p-6 sm:p-7 hover:bg-white transition-colors">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0A0A0A] mb-2">Personal</h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Every magnet starts with someone's real photo. The brand frames it; it never competes with it.
            </p>
          </div>
          <div className="bg-[#FBF9F5] p-6 sm:p-7 hover:bg-white transition-colors">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0A0A0A] mb-2">Crafted</h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Rounded corners, thick edges, rich print. We talk about the making with pride.
            </p>
          </div>
          <div className="bg-[#FBF9F5] p-6 sm:p-7 hover:bg-white transition-colors">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0A0A0A] mb-2">Local</h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Aussie made and Aussie spoken. Relaxed, friendly, plain-speaking.
            </p>
          </div>
          <div className="bg-[#FBF9F5] p-6 sm:p-7 hover:bg-white transition-colors">
            <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0A0A0A] mb-2">Lasting</h3>
            <p className="text-sm text-[#3E3E3E] leading-relaxed">
              Built to stay close for years: fade-resistant prints and strong magnetic backing.
            </p>
          </div>
        </div>

        {/* Section Navigation */}
        <SectionNav nextId="logo" nextLabel="Logo" />
      </div>
    </section>
  );
};
