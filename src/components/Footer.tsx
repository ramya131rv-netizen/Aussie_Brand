import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0A0A0A] text-[#A39B92] text-xs">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Logo variant="lk-rev" size={7} />
        </div>

        <div className="text-center sm:text-left">
          <span className="block font-semibold text-white text-sm mb-1">Aussie Snap Magnets</span>
          <span>Brand Guidelines Edition 1.0 · © 2026 Aussie Snap Magnets. All rights reserved.</span>
        </div>

        <a
          href="#top"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
};
