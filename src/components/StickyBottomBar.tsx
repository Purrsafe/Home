import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const StickyBottomBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-300/80 shadow-2xl py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Product & Phone Number Display */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
            🐾
          </div>
          <div>
            <div className="text-[11px] uppercase font-bold text-amber-800 tracking-wider hidden sm:block">
              {t.sticky.productName}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500 font-semibold hidden md:inline">{t.sticky.hotlineLabel}</span>
              <a
                href={`tel:${t.brand.hotline}`}
                className="text-base sm:text-lg font-black text-stone-900 hover:text-amber-800 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-amber-700 animate-bounce" />
                <span>{t.brand.hotlineFormatted}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zalo / Chat */}
          <a
            href={t.brand.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0068FF] hover:bg-[#0055d4] text-white text-xs font-bold shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.sticky.zaloBtn}</span>
          </a>

          {/* Call button on mobile */}
          <a
            href={`tel:${t.brand.hotline}`}
            className="sm:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-700 text-white text-xs font-bold shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{t.sticky.callBtn}</span>
          </a>

          {/* Agency consultation */}
          <a
            href="#dai-ly"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.sticky.distributorBtn}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
