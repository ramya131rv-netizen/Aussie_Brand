import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { Logo, LogoMark } from './Logo';
import { SectionNav } from './SectionNav';

interface ApplicationItem {
  id: string;
  title: string;
  category: string;
  description: string;
  renderMockup: () => React.ReactNode;
  tall?: boolean;
}

// 1. Retail Bag Mockup Component
const RetailBagMockup: React.FC = () => (
  <div className="w-full h-full min-h-[360px] bg-[#D4B896] relative overflow-hidden flex flex-col items-center justify-between p-6 sm:p-8 select-none border border-[#C2A47E]">
    {/* Background Paper Texture & Tonal Ribbon Graphic */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#DEC3A2] to-[#C8AA85]" />
    
    {/* Large Tonal "A" Graphic bleeding off lower right */}
    <div className="absolute -right-12 -bottom-10 opacity-20 pointer-events-none scale-150 transform rotate-12">
      <LogoMark colorA="#0A0A0A" colorB="#0A0A0A" colorC="#0A0A0A" colorBg="transparent" className="w-[280px]" />
    </div>

    {/* Black Rope Handle */}
    <div className="relative z-10 w-full flex justify-center -mt-2">
      <svg viewBox="0 0 160 80" className="w-32 sm:w-40 h-20 text-[#0A0A0A]">
        <path
          d="M 30 0 C 30 65, 130 65, 130 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="drop-shadow-md"
        />
        <circle cx="30" cy="8" r="7" fill="#0A0A0A" />
        <circle cx="130" cy="8" r="7" fill="#0A0A0A" />
      </svg>
    </div>

    {/* Centred Logo & Tagline Artwork */}
    <div className="relative z-10 flex flex-col items-center text-center my-auto py-4">
      <Logo variant="lk-full" size={13} className="drop-shadow-xs" />
      <hr className="w-10 h-[1px] bg-[#B39377] border-0 my-4" />
      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0A0A0A] leading-snug">
        Moments<br />That Stay Close
      </h3>
    </div>

    {/* Footer Label */}
    <div className="relative z-10 w-full text-left pt-2 border-t border-[#0A0A0A]/15">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0A0A0A]/70">
        RETAIL BAG
      </span>
      <p className="text-[11px] text-[#0A0A0A]/80 leading-tight mt-0.5">
        Natural kraft with black rope handles. Logo and tagline centred in upper half, tonal "A" graphic bleeding off lower right.
      </p>
    </div>
  </div>
);

// 2. Cards & Thank-You Notes Mockup Component
const CardsMockup: React.FC = () => (
  <div className="w-full h-full min-h-[260px] bg-[#E5DCD0] relative overflow-hidden flex flex-col justify-between p-6 select-none border border-[#D5C9BA]">
    {/* Stone / Wood Surface Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#EFE8DF] via-[#E2D6C7] to-[#D5C6B3]" />

    {/* Two Stacked Business Cards */}
    <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-4 py-2">
      {/* Soft Ivory Card */}
      <div className="w-full max-w-[280px] aspect-[1.75/1] bg-[#F7F4EF] rounded-md shadow-md p-5 flex flex-col items-center justify-center border border-[#E4DDD3] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        <Logo variant="lk-full" size={8} />
      </div>

      {/* Primary Black Card */}
      <div className="w-full max-w-[280px] aspect-[1.75/1] bg-[#0A0A0A] text-[#F7F4EF] rounded-md shadow-lg p-5 flex flex-col items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-6">
        <Logo variant="lk-rev" size={8} />
      </div>
    </div>

    {/* Footer Label */}
    <div className="relative z-10 w-full text-left pt-2 border-t border-[#0A0A0A]/15">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0A0A0A]/80">
        CARDS &amp; THANK-YOU NOTES
      </span>
    </div>
  </div>
);

// 3. Magnet Box Insert Mockup Component
const MagnetInsertMockup: React.FC = () => (
  <div className="w-full h-full min-h-[260px] bg-[#CBB193] relative overflow-hidden flex flex-col justify-between p-6 select-none border border-[#B89C7C]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#D9C3AA] to-[#BD9E7A]" />

    {/* Open Kraft Box Tray with Die-Cut Foam Insert holding 4 Photo Magnets */}
    <div className="relative z-10 my-auto bg-[#1A1A1A] p-3 sm:p-4 rounded-lg shadow-xl border border-black/30 grid grid-cols-2 gap-2.5 max-w-[320px] mx-auto">
      {/* Magnet 1: Dog */}
      <div className="aspect-[4/3] rounded-md overflow-hidden shadow border border-white/20 relative group">
        <img
          src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80"
          alt="Golden retriever dog photo magnet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </div>

      {/* Magnet 2: Family */}
      <div className="aspect-[4/3] rounded-md overflow-hidden shadow border border-white/20 relative group">
        <img
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&q=80"
          alt="Family photo magnet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </div>

      {/* Magnet 3: Mountain */}
      <div className="aspect-[4/3] rounded-md overflow-hidden shadow border border-white/20 relative group">
        <img
          src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=400&q=80"
          alt="Mountain sunset photo magnet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </div>

      {/* Magnet 4: Child */}
      <div className="aspect-[4/3] rounded-md overflow-hidden shadow border border-white/20 relative group">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
          alt="Travel photo magnet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30" />
      </div>
    </div>

    {/* Footer Label */}
    <div className="relative z-10 w-full text-left pt-2 border-t border-[#0A0A0A]/15">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0A0A0A]/80">
        MAGNET INSERT
      </span>
    </div>
  </div>
);

// 4. Gift Box & Mailer Brochure Mockup Component
const GiftBoxMailerMockup: React.FC = () => (
  <div className="w-full h-full min-h-[260px] bg-[#F2ECE4] relative overflow-hidden flex flex-col justify-between p-6 select-none border border-[#E2D5C5]">
    <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6F0] via-[#F2ECE4] to-[#E5D9CB]" />

    {/* Tonal Ribbon Graphic */}
    <div className="absolute -right-8 -top-8 opacity-15 pointer-events-none scale-125">
      <LogoMark colorA="#0A0A0A" colorB="#0A0A0A" colorC="#0A0A0A" colorBg="transparent" className="w-[200px]" />
    </div>

    {/* Mailer Brochure & Gift Box Mockup */}
    <div className="relative z-10 my-auto flex flex-col items-center gap-3 py-2 w-full max-w-[340px] mx-auto">
      {/* Box Lid Artwork */}
      <div className="w-full bg-[#F7F4EF] border border-[#E4DDD3] rounded-md p-4 shadow-md flex items-center justify-between">
        <Logo variant="lk-full" size={7} />
        <div className="text-right">
          <span className="font-serif text-xs italic text-[#8A6D52]">Moments That Stay Close</span>
        </div>
      </div>

      {/* Brochure Sheet & Photo Layout */}
      <div className="w-full bg-white border border-[#E4DDD3] rounded-md p-3 shadow flex items-center gap-3">
        <div className="w-1/2 flex flex-col items-center text-center p-1">
          <Logo variant="lk-full" size={5} />
          <span className="font-serif text-[10px] italic text-[#8A6D52] mt-1">Moments That Stay Close</span>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-1">
          <div className="aspect-square rounded bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=200&q=80" alt="Family" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square rounded bg-gray-200 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=200&q=80" alt="Dog" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    {/* Footer Label */}
    <div className="relative z-10 w-full text-left pt-2 border-t border-[#0A0A0A]/15">
      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0A0A0A]/80">
        GIFT BOX &amp; MAILER BROCHURE
      </span>
      <p className="text-[11px] text-[#0A0A0A]/80 leading-tight mt-0.5">
        Ivory rigid box with full-colour lockup, tagline and photo magnet catalog brochure.
      </p>
    </div>
  </div>
);

const APPLICATIONS: ApplicationItem[] = [
  {
    id: 'retail-bag',
    title: 'Retail Shopping Bag',
    category: 'Packaging',
    description: 'Natural kraft with black rope handles. Logo and tagline centred in upper half, tonal "A" graphic bleeding off lower right.',
    renderMockup: () => <RetailBagMockup />,
    tall: true,
  },
  {
    id: 'gift-box',
    title: 'Gift Box & Mailer Brochure',
    category: 'Unboxing & Catalog',
    description: 'Ivory rigid box with full-colour lockup, tagline and photo magnet catalog brochure layout.',
    renderMockup: () => <GiftBoxMailerMockup />,
  },
  {
    id: 'magnet-insert',
    title: 'Magnet Box Insert',
    category: 'Product Pack',
    description: 'Custom-printed photo magnets snuggly fitted inside precision-cut foam tray insert.',
    renderMockup: () => <MagnetInsertMockup />,
  },
  {
    id: 'cards',
    title: 'Cards & Thank-You Notes',
    category: 'Print Collateral',
    description: 'Textured Soft Ivory & Primary Black cotton paper business cards and thank-you notes.',
    renderMockup: () => <CardsMockup />,
  },
];

interface SpecRow {
  item: string;
  material: string;
  print: string;
  finish: string;
  notes: string;
}

const SPEC_TABLE: SpecRow[] = [
  {
    item: 'Photo Magnets',
    material: '0.8mm Flexible Magnetic Vinyl',
    print: '7-Color Digital UV Direct',
    finish: 'Protective High Gloss or Velvet Matte',
    notes: '2mm rounded corners standard on all die-cuts.',
  },
  {
    item: 'Keepsake Gift Box',
    material: '1200gsm Rigid Board + Kraft Wrapper',
    print: '1-Color Offset Black + Foil',
    finish: 'Deep Blind Emboss + Matte Varnish',
    notes: 'Symbol mark centered on lid with taupe rule.',
  },
  {
    item: 'Business Cards & Notes',
    material: '350gsm Soft Ivory & Black Cotton Paper',
    print: 'Letterpress / Foil Stamping / CMYK',
    finish: 'Uncoated Tactile Texture',
    notes: 'Full colour logo mark on front, handwritten note area on reverse.',
  },
  {
    item: 'Retail Shopping Bag',
    material: 'Natural Kraft + Black Braided Rope Handles',
    print: 'Flexographic Black & Taupe Ink',
    finish: 'Matte Varnish',
    notes: 'Centered logo and tagline, tonal "A" graphic bleeding off lower right.',
  },
];

export const ApplicationsSection: React.FC = () => {
  const [activeModalItem, setActiveModalItem] = useState<ApplicationItem | null>(null);

  return (
    <section id="applications" className="py-16 sm:py-20 lg:py-28 border-b border-[#E4DDD3] scroll-mt-14 sm:scroll-mt-16 bg-[#F7F4EF]">
      <div className="max-w-[1180px] 2xl:max-w-[1320px] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 sm:gap-8 mb-12">
          <div className="text-[11px] tracking-[0.3em] text-[#8A6D52] font-semibold pt-1">
            07 — APPLICATIONS
          </div>
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-semibold tracking-[0.06em] uppercase leading-tight text-[#0A0A0A] mb-4">
              Brand in action
            </h2>
            <p className="max-w-[62ch] text-[#3E3E3E] text-base leading-relaxed">
              How Aussie Snap Magnets comes together across unboxing packaging, e-commerce mailers, business cards, brochures, and retail shopping bags. Click any card to expand details.
            </p>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              onClick={() => setActiveModalItem(app)}
              className={`group relative border border-[#E4DDD3] rounded-lg overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-md ${
                app.tall ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[380px]' : 'min-h-[260px]'
              }`}
            >
              {app.renderMockup()}

              {/* Expand Icon Button */}
              <button
                type="button"
                aria-label={`Enlarge ${app.title}`}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Print & Production Specifications Table */}
        <div className="mt-16">
          <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0A0A0A] mb-6">
            Print &amp; Material Specifications
          </h3>

          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto border border-[#E4DDD3] rounded-lg bg-white shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FBF9F5] border-b border-[#0A0A0A]">
                  <th className="p-3.5 font-semibold text-[10.5px] tracking-[0.2em] uppercase text-[#6B645C]">
                    Item
                  </th>
                  <th className="p-3.5 font-semibold text-[10.5px] tracking-[0.2em] uppercase text-[#6B645C]">
                    Stock / Material
                  </th>
                  <th className="p-3.5 font-semibold text-[10.5px] tracking-[0.2em] uppercase text-[#6B645C]">
                    Printing Process
                  </th>
                  <th className="p-3.5 font-semibold text-[10.5px] tracking-[0.2em] uppercase text-[#6B645C]">
                    Coat / Finish
                  </th>
                  <th className="p-3.5 font-semibold text-[10.5px] tracking-[0.2em] uppercase text-[#6B645C]">
                    Special Rules
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DDD3]">
                {SPEC_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FBF9F5]/80 transition-colors">
                    <td className="p-3.5 font-semibold text-[#0A0A0A]">{row.item}</td>
                    <td className="p-3.5 text-[#3E3E3E]">{row.material}</td>
                    <td className="p-3.5 text-[#3E3E3E]">{row.print}</td>
                    <td className="p-3.5 text-[#3E3E3E]">{row.finish}</td>
                    <td className="p-3.5 text-[#6B645C] font-mono text-[11.5px]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card List View */}
          <div className="sm:hidden space-y-4">
            {SPEC_TABLE.map((row, idx) => (
              <div key={idx} className="border border-[#E4DDD3] rounded-lg bg-white p-4 shadow-sm text-xs space-y-2">
                <div className="font-semibold text-sm text-[#0A0A0A] border-b border-[#E4DDD3] pb-2">
                  {row.item}
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#6B645C] font-semibold">Material:</span>
                  <span className="text-[#3E3E3E]">{row.material}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#6B645C] font-semibold">Process:</span>
                  <span className="text-[#3E3E3E]">{row.print}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#6B645C] font-semibold">Finish:</span>
                  <span className="text-[#3E3E3E]">{row.finish}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2 border-t border-[#E4DDD3]/60 pt-2">
                  <span className="text-[10px] tracking-wider uppercase text-[#6B645C] font-semibold">Rules:</span>
                  <span className="text-[#6B645C] font-mono text-[11px]">{row.notes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Navigation */}
        <SectionNav prevId="magnets" prevLabel="Magnets" nextId="voice" nextLabel="Voice" />
      </div>

      {/* Enlarged Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-2xl w-full bg-[#F7F4EF] border border-[#333333] rounded-xl overflow-hidden shadow-2xl text-[#0A0A0A]">
            <button
              type="button"
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="min-h-[300px]">
              {activeModalItem.renderMockup()}
            </div>

            <div className="p-6 bg-white border-t border-[#E4DDD3]">
              <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B39377] bg-[#F7F4EF] px-2.5 py-1 rounded mb-2 border border-[#E4DDD3]">
                {activeModalItem.category}
              </span>
              <h3 className="text-xl font-semibold tracking-wide uppercase mb-2 text-[#0A0A0A]">
                {activeModalItem.title}
              </h3>
              <p className="text-sm text-[#3E3E3E] leading-relaxed m-0">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
