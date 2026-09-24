import React, { useState, useEffect, useRef } from 'react';
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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Toggle shadow state based on scroll offset
      setIsScrolled(window.scrollY > 20);

      // Calculate active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const currentId = NAV_ITEMS[i].id;
          if (activeTab !== currentId) {
            setActiveTab(currentId);
            // Auto-scroll active tab into view in mobile nav container
            tabRefs.current[currentId]?.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('story');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navOffset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(id);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md border-[#E4DDD3] shadow-sm'
          : 'bg-[#F7F4EF]/90 backdrop-blur-md border-[#E4DDD3]'
      }`}
      aria-label="Brand guidelines navigation"
    >
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10 h-14 sm:h-[58px] flex items-center justify-between gap-4">
        {/* Brand Link */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, 'top')}
          className="flex items-center gap-2.5 text-[#0A0A0A] no-underline shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6D52] rounded"
        >
          <div className="text-[4px]">
            <LogoMark className="w-[28px] sm:w-[30px]" />
          </div>
          <span className="font-semibold text-xs tracking-[0.2em] uppercase font-sans hidden sm:inline-block group-hover:text-[#8A6D52] transition-colors">
            AUSSIE SNAP
          </span>
        </a>

        {/* Horizontal Navigation List */}
        <ul className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 flex-1 justify-start sm:justify-end mask-gradient-r">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  ref={(el) => {
                    tabRefs.current[item.id] = el;
                  }}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`block px-2.5 sm:px-3 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase rounded-full whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0A0A0A] text-[#F7F4EF] shadow-sm font-semibold scale-105'
                      : 'text-[#6B645C] hover:text-[#0A0A0A] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
