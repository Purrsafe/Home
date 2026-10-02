import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FooterContact: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="lien-he" className="bg-[#1A1612] text-stone-300 pt-16 pb-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominently Placed Contact Phone Section at the Bottom */}
        <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 rounded-3xl p-8 sm:p-12 border border-amber-600/40 shadow-2xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                <span className="text-sm">🐾</span> {t.footer.support247}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-snug">
                {t.footer.title1} <br />
                <span className="text-amber-300">{t.footer.titleHighlight}</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl">
                {t.footer.desc}
              </p>
            </div>

            {/* Giant Phone Number Display */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-3.5">
              
              {/* Primary Hotline */}
              <a
                href={`tel:${t.brand.hotline}`}
                className="w-full max-w-sm p-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black shadow-xl hover:shadow-2xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-stone-800">
                      {t.footer.phoneLabel}
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {t.brand.hotlineFormatted}
                    </div>
                  </div>
                </div>
                <span className="text-xs uppercase font-extrabold bg-stone-950 text-white px-2.5 py-1 rounded-lg">
                  {t.footer.callNow}
                </span>
              </a>

              {/* Direct Zalo Chat Button */}
              <a
                href={t.brand.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm py-3 px-4 rounded-xl bg-[#0068FF] hover:bg-[#0055d4] text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.footer.zaloChat} ({t.brand.hotlineFormatted})</span>
              </a>

            </div>

          </div>
        </div>

        {/* Detailed Brand & Address Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800 text-sm">
          
          {/* Brand Intro */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🐾</span>
              <span className="text-2xl font-black text-white">
                Purr<span className="text-amber-500">Safe</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Address */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" /> {t.footer.addressLabel}
            </div>
            <p className="text-sm sm:text-base font-medium text-stone-200 leading-relaxed">
              {t.brand.address}
            </p>
            <p className="text-xs text-stone-400">
              {t.footer.phoneLabelBottom} <strong className="text-amber-400">{t.brand.hotlineFormatted}</strong>
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span>{t.footer.quality1}</span>
            <span>·</span>
            <span>{t.footer.quality2}</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
