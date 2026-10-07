import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const IngredientsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="thanh-phan" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-md border border-amber-300">
            {t.ingredients.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
            {t.ingredients.title1} <br />
            <span className="text-amber-700">{t.ingredients.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.ingredients.desc}
          </p>
        </div>

        {/* 3 Ingredients Cards - Clean, balanced & focused */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.ingredients.items.map((item) => (
            <div
              key={item.id}
              className="bg-white/85 backdrop-blur-xs rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Ratio Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-stone-900">
                    {item.ratio}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                    {item.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-black text-stone-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium mb-4">
                  {item.englishName}
                </p>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {item.shortDesc}
                </p>

                {/* Checklist */}
                <ul className="space-y-2.5 border-t border-stone-100 pt-4">
                  {item.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
