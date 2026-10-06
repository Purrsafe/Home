import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const IngredientsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeIngredient, setActiveIngredient] = useState<string>('tofu');

  const selectedData = t.ingredients.items.find((ing) => ing.id === activeIngredient) || t.ingredients.items[0];

  const ingredientComments: Record<string, { vi: { author: string; text: string }; zh: { author: string; text: string }; en: { author: string; text: string } }> = {
    tofu: {
      vi: { author: 'Bác sĩ thú y Lê Hoàng', text: 'Thành phần bã đậu nành 70% hữu cơ tinh chế rất an tâm, mèo con có liếm phải hạt nhỏ cũng tiêu hóa lành tính.' },
      zh: { author: 'Lê Hoàng 兽医师', text: '70%食品级纯有机大豆纤维，幼猫好奇舔食微量也能安全排出，温和无毒。' },
      en: { author: 'Dr. Le Hoang (DVM)', text: '70% food-grade organic soy fiber gives total safety; harmless even if inquisitive kittens ingest a small pellet.' },
    },
    carbon: {
      vi: { author: 'Chị Bích Trâm (Masteri)', text: '20% Than hoạt tính bẫy mùi amoniac cực nhạy, nuôi 3 mèo phòng kín mà khách tới không hề nhận ra.' },
      zh: { author: 'Trâm 女士 (公寓住户)', text: '20%活性炭对氨气吸附力极强，密闭房间养3只猫也没有任何排泄物异味。' },
      en: { author: 'Ms. Bich Tram (Apartment)', text: '20% Activated Carbon traps ammonia fast. Raising 3 cats in an enclosed space leaves zero lingering odor.' },
    },
    mineral: {
      vi: { author: 'Anh Minh Khang (Hà Nội)', text: 'Khoáng tự nhiên 10% liên kết các sợi đậu nành, vón cứng trong 3 giây và không bao giờ bết dính đáy khay.' },
      zh: { author: 'Khang 先生 (河内)', text: '10%天然矿物即刻锁水，3秒凝固成紧实硬团，彻底告别粘附砂盆底部的烦恼。' },
      en: { author: 'Mr. Minh Khang (Hanoi)', text: '10% Natural Minerals lock moisture instantly, forming rigid clumps that never stick to the box floor.' },
    },
  };

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

        {/* 3 Ingredients Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {t.ingredients.items.map((item) => {
            const isSelected = activeIngredient === item.id;
            const comment = ingredientComments[item.id]?.[language] || ingredientComments[item.id]?.vi;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIngredient(item.id)}
                className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/95 border-amber-600 shadow-xl ring-2 ring-amber-500/20 -translate-y-1'
                    : 'bg-white/75 backdrop-blur-xs border-stone-200/80 hover:border-stone-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Ratio Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-stone-900">
                      {item.ratio}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200">
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
                  <ul className="space-y-2.5 border-t border-stone-100 pt-4 mb-4">
                    {item.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Customer feedback comment on this specific ingredient */}
                  {comment && (
                    <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/70 mb-4 flex items-start gap-2 text-xs text-stone-700">
                      <MessageSquareQuote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900 block">{comment.author}:</span>
                        <span className="italic">"{comment.text}"</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Active Indicator Button */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-amber-800' : 'text-stone-400'}>
                    {isSelected ? t.ingredients.currentlyViewing : t.ingredients.viewDetails}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-800' : 'text-stone-400'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Breakdown Box for Selected Ingredient */}
        <div className="bg-white/85 backdrop-blur-xs rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5" /> {selectedData.ratio} - {t.ingredients.selectedBadge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {t.ingredients.selectedRole} <br />
                <span className="text-amber-800">{selectedData.name}</span>
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t.ingredients.selectedDesc}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedData.benefits.map((benefit, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
