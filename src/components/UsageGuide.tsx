import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const UsageGuide: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            {t.usage.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
            {t.usage.title1} <br className="hidden sm:inline" />
            <span className="text-amber-700">{t.usage.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.usage.desc}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {t.usage.steps.map((item) => (
            <div
              key={item.step}
              className="bg-white/85 backdrop-blur-xs rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 font-black text-lg flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200/80 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" />
                <span>{t.usage.dailyAction}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip Box for Switching Litter */}
        <div className="bg-amber-900/10 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-amber-900/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-700 text-white flex items-center justify-center shrink-0 text-2xl shadow-md">
            🐱
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-extrabold text-stone-900">
              {t.usage.tipTitle}
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {t.usage.tipDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
