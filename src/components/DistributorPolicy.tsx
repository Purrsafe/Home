import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DistributorPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="dai-ly" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-md border border-amber-300">
            {t.distributor.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
            {t.distributor.title1} <br className="hidden sm:inline" />
            <span className="text-amber-700">{t.distributor.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.distributor.desc}
          </p>
        </div>

        {/* 6 Core Distributor Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.distributor.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold text-lg mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center text-xs font-bold text-amber-800">
                <span>{t.distributor.exclusiveBadge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Onboarding Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-extrabold text-amber-800 tracking-wider">
              {t.distributor.stepHeadingBadge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
              {t.distributor.stepHeadingTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.distributor.steps.map((step) => (
              <div key={step.num} className="p-5 rounded-2xl bg-stone-50 border border-stone-200 relative">
                <div className="text-3xl font-black text-amber-700/80 mb-2">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-stone-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Call to Action Box */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-white">
              {t.distributor.ctaCardTitle}
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              {t.distributor.ctaCardDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#dang-ky-dai-ly"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm text-center shadow-md transition-colors"
            >
              {t.distributor.ctaCardBtn}
            </a>

            <a
              href={`tel:${t.brand.hotline}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{t.brand.hotlineFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
