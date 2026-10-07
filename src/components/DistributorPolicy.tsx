import React, { useState } from 'react';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const DistributorPolicy: React.FC = () => {
  const { t } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section id="dai-ly" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
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
          <p className="text-xs font-bold text-amber-700 mt-3">
            💡 Nhấp vào từng ô chính sách bên dưới để xem nội dung chi tiết
          </p>
        </div>

        {/* 6 Core Distributor Benefits - Click to Expand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {t.distributor.benefits.map((benefit, idx) => {
            const isExpanded = !!expandedItems[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`bg-white/85 backdrop-blur-xs rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group select-none ${
                  isExpanded
                    ? 'border-amber-500 shadow-md ring-2 ring-amber-500/20 p-6'
                    : 'border-stone-200/80 hover:border-amber-300 hover:shadow-xs p-5'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleItem(idx);
                  }
                }}
              >
                {/* Header: Number, Title and Toggle Icon */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-black text-base shrink-0 group-hover:bg-amber-100 transition-colors">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-stone-900 group-hover:text-amber-800 transition-colors text-left leading-snug">
                      {benefit.title}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                    isExpanded ? 'bg-amber-100 text-amber-800 rotate-180' : 'bg-stone-100 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-700'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Collapsible Content */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-amber-100 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                    <p className="text-stone-600 text-sm leading-relaxed mb-3">
                      {benefit.desc}
                    </p>
                    <div className="flex items-center text-xs font-bold text-amber-800">
                      <span>✓ {t.distributor.exclusiveBadge}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 4-Step Onboarding Process */}
        <div className="bg-white/85 backdrop-blur-xs rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm mb-12">
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

        {/* CTA Card for Inquiry */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-amber-900/40 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
              {t.distributor.ctaCardTitle}
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.distributor.ctaCardDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="#dang-ky-dai-ly"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <span>{t.distributor.ctaCardBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${t.brand.hotline}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>{t.distributor.ctaCardCall} {t.brand.hotlineFormatted}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
