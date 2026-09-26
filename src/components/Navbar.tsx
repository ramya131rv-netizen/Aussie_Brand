import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { LogoMark } from './Logo';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'story', label: 'Story' },
  { id: 'logo', label: 'Logo' },
  { id: 'misuse', label: 'Misuse' },
  { id: 'colour', label: 'Colour' },
  { id: 'type', label: 'Type' },
  { id: 'magnets', label: 'Magnets' },
  { id: 'applications', label: 'Applications' },
  { id: 'voice', label: 'Voice' },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('story');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(id);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EF] border-b border-[#E4DDD3] shadow-xs transition-all duration-200"
      aria-label="Brand guidelines navigation"
    >
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 h-14 sm:h-[60px] flex items-center justify-between gap-4">
        {/* Brand Link */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2.5 text-[#0A0A0A] no-underline shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6D52] rounded"
        >
          <div className="text-[4px]">
            <LogoMark className="w-[26px] sm:w-[30px]" />
          </div>
          <span className="font-semibold text-xs tracking-[0.2em] uppercase font-sans text-[#0A0A0A] group-hover:text-[#8A6D52] transition-colors">
            AUSSIE SNAP
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-1.5 py-1 justify-end">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block px-2.5 sm:px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0A0A0A] text-[#F7F4EF] shadow-sm font-semibold scale-[1.02]'
                      : 'text-[#6B645C] hover:text-[#0A0A0A] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#0A0A0A] hover:bg-black/5 active:bg-black/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6D52]"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Hamburger Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F7F4EF] border-b border-[#E4DDD3] shadow-2xl max-h-[calc(100vh-56px)] overflow-y-auto z-50">
          <div className="p-4 sm:p-5 space-y-4">
            {/* Header branding inside Mobile Hamburger Menu */}
            <div className="pb-3 border-b border-[#E4DDD3] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8A6D52] block mb-0.5">
                  Brand Guidelines Navigation
                </span>
                <span className="font-extrabold text-sm tracking-[0.15em] uppercase text-[#0A0A0A] font-sans">
                  AUSSIE SNAP
                </span>
              </div>
              <span className="text-[9px] font-mono px-2.5 py-1 bg-[#E4DDD3]/60 text-[#0A0A0A] rounded-full uppercase tracking-wider font-bold">
                {NAV_ITEMS.length} Sections
              </span>
            </div>

            {/* Navigation links inside Mobile Hamburger Menu */}
            <nav className="grid grid-cols-1 gap-2" aria-label="Mobile section links">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150 ${
                      isActive
                        ? 'bg-[#0A0A0A] shadow-md'
                        : 'bg-white border border-[#E4DDD3] hover:bg-[#E4DDD3]/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          isActive ? 'text-[#B39377]' : 'text-[#8A6D52]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <span className={`text-sm font-semibold tracking-[0.14em] uppercase font-sans ${isActive ? 'text-[#F7F4EF]' : 'text-[#0A0A0A]'}`}>
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <span className="text-[9px] uppercase tracking-widest bg-[#B39377] text-white px-2 py-0.5 rounded-full font-bold">
                          Active
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#6B645C]" />
                      )}
                    </div>
                  </a>
                );
              })}
            </nav>

            {/* Footer inside Mobile Hamburger Menu */}
            <div className="pt-3 border-t border-[#E4DDD3] flex items-center justify-between text-xs text-[#6B645C]">
              <span className="font-sans font-medium text-[11px]">
                Aussie Snap Identity Guide
              </span>
              <button
                type="button"
                onClick={(e) => scrollToSection(e, 'top')}
                className="text-[#8A6D52] hover:underline font-bold text-[11px] uppercase tracking-wider cursor-pointer"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


