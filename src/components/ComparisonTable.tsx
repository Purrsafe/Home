import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ComparisonTable: React.FC = () => {
  const { t } = useLanguage();

  const renderCell = (text: string, isHighlight = false) => {
    if (text.includes('·')) {
      const [main, detail] = text.split('·');
      return (
        <div className="leading-snug">
          <span className={`font-bold block ${isHighlight ? 'text-amber-950 font-extrabold' : 'text-stone-800'}`}>
            {main.trim()}
          </span>
          <span className={`text-xs block mt-0.5 ${isHighlight ? 'text-amber-800/80 font-medium' : 'text-stone-500'}`}>
            {detail.trim()}
          </span>
        </div>
      );
    }
    return <span className="leading-snug font-medium text-stone-800">{text}</span>;
  };

  return (
    <section className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
            {t.comparison.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
            {t.comparison.title1} <br className="hidden sm:inline" />
            <span className="text-amber-700">{t.comparison.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            {t.comparison.desc}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-stone-200/80 shadow-sm bg-white/85 backdrop-blur-xs">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50/80">
                <th className="py-4 px-6 text-sm font-extrabold text-stone-900 w-1/4">
                  {t.comparison.colCriteria}
                </th>
                <th className="py-4 px-6 text-base font-black text-amber-900 bg-amber-100/70 border-x-2 border-amber-400 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🐾</span>
                    <div>
                      <div>{t.comparison.colPurrSafe}</div>
                      <span className="text-[11px] font-normal text-amber-800 block">
                        {t.brand.ratioBadge}
                      </span>
                    </div>
                  </div>
                </th>
                <th className="py-4 px-6 text-sm font-bold text-stone-600 w-1/5">
                  {t.comparison.colClay}
                </th>
                <th className="py-4 px-6 text-sm font-bold text-stone-600 w-1/5">
                  {t.comparison.colWood}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 text-sm">
              {t.comparison.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-stone-900 bg-stone-50/30">
                    {row.criteria}
                  </td>
                  
                  {/* PurrSafe Highlight Column */}
                  <td className="py-4 px-6 bg-amber-50/50 border-x-2 border-amber-300">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      {renderCell(row.purrsafe, true)}
                    </div>
                  </td>

                  {/* Regular Clay */}
                  <td className="py-4 px-6 text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      {renderCell(row.clay)}
                    </div>
                  </td>

                  {/* Wood Litter */}
                  <td className="py-4 px-6 text-stone-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-3 h-3" />
                      </div>
                      {renderCell(row.wood)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 text-center bg-stone-50/80 p-4 rounded-2xl border border-stone-200 text-xs sm:text-sm text-stone-600">
          💡 <strong className="text-stone-900 font-bold">{t.comparison.tipLabel}</strong> {t.comparison.tipContent}
        </div>

      </div>
    </section>
  );
};
