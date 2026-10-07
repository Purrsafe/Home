import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProductIntro: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="gioi-thieu" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            {t.intro.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
            {t.intro.titleLine1} <br />
            <span className="text-amber-700">{t.intro.titleLine2}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.intro.desc}
          </p>
        </div>

        {/* 4 Solutions Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.intro.painPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-stone-200/80 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">
                    ✕
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-bold text-red-700 uppercase tracking-wider">
                      {idx === 0 ? '01' : idx === 1 ? '02' : idx === 2 ? '03' : '04'}
                    </div>
                    <div className="text-base font-extrabold text-stone-900">{item.problem}</div>
                    <div className="text-xs sm:text-sm text-stone-500">{item.effect}</div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200 flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200/60">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                      PurrSafe:
                    </span>
                    <span className="text-sm font-medium text-stone-800">
                      {item.solution}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Specifications Table */}
        <div className="bg-white/80 backdrop-blur-xs rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase font-extrabold text-amber-800 tracking-wider">
                {t.intro.specBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {t.intro.specTitle} <br />
                <span className="text-amber-800">{t.intro.specTitleHighlight}</span>
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {t.intro.specDesc}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {t.intro.specs.map((s, idx) => (
                  <div key={idx} className="bg-white/90 p-4 rounded-xl border border-stone-200/80 text-center shadow-2xs">
                    <span className="text-xs text-stone-500 block mb-1">{s.label}</span>
                    <strong className="text-sm font-bold text-stone-900">{s.value}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
