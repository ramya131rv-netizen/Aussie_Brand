import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SectionNavProps {
  prevId?: string;
  prevLabel?: string;
  nextId?: string;
  nextLabel?: string;
}

export const SectionNav: React.FC<SectionNavProps> = ({
  prevId,
  prevLabel,
  nextId,
  nextLabel,
}) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#E4DDD3] flex items-center justify-between gap-4">
      {prevId && prevLabel ? (
        <button
          type="button"
          onClick={() => scrollTo(prevId)}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#6B645C] hover:text-[#0A0A0A] transition-colors py-2 px-3 rounded hover:bg-black/5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous: {prevLabel}</span>
        </button>
      ) : (
        <div />
      )}

      {nextId && nextLabel ? (
        <button
          type="button"
          onClick={() => scrollTo(nextId)}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#F7F4EF] bg-[#0A0A0A] hover:bg-[#8A6D52] transition-all py-2.5 px-4 rounded-full shadow-xs hover:shadow-md cursor-pointer"
        >
          <span>Next: {nextLabel}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      ) : (
        <div />
      )}
    </div>
  );
};
