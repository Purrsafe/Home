import React from 'react';
import { Check, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ProductIntro: React.FC = () => {
  const { t, language } = useLanguage();

  const customerComments = [
    {
      vi: { author: 'Chị Mai (Hà Nội)', text: 'Cát đất sét trước đây bụi mù mịt làm mèo ho liên tục. Đổi sang PurrSafe không hề có bụi mịn, mũi mèo lúc nào cũng sạch bóng!' },
      zh: { author: 'Mai 女士 (河内)', text: '以前用矿砂倒砂时粉尘漫天，猫咪总是打喷嚏。换了PurrSafe完全无灰尘，猫咪鼻孔干干净净！' },
      en: { author: 'Mrs. Mai (Hanoi)', text: 'Clay litter used to create suffocating dust clouds. Switching to PurrSafe eliminated fine dust completely; my cat breathes happily!' },
    },
    {
      vi: { author: 'Anh Khang (Đống Đa)', text: 'Hàm lượng 20% than hoạt tính khử sạch mùi phân và amoniac, phòng kín máy lạnh luôn thơm thoảng mùi sữa dịu.' },
      zh: { author: 'Khang 先生 (栋多)', text: '20%活性炭强力吸附氨气，即便紧闭门窗开空调，客厅也只闻得到淡淡天然奶香。' },
      en: { author: 'Mr. Khang (Dong Da)', text: '20% activated carbon locks ammonia completely. Even in an enclosed AC room, you only smell a comforting mild milk note.' },
    },
    {
      vi: { author: 'Chị Trâm (TP. Thủ Đức)', text: 'Xúc nhẹ 3 giây là lên nguyên khối tròn khô ráo, không dính 1 vệt vào đáy chậu nhựa, dọn dẹp nhàn tênh!' },
      zh: { author: 'Trâm 女士 (守德市)', text: '结团成坚实圆球，3秒成型，一铲就完整起来，砂盆塑料底干干净净完全不沾！' },
      en: { author: 'Ms. Tram (Thu Duc)', text: 'Forms tight solid spheres within 3 seconds; scoops out effortlessly with zero sticky wet residue on the tray floor!' },
    },
    {
      vi: { author: 'Bạn Yến (Đà Nẵng)', text: 'Hạt đanh mịn kích thước 2.0mm không bị kẹt vào kẽ ngón chân mèo, không bị mang vương vãi ra thảm sàn.' },
      zh: { author: 'Yến 小姐 (岘港)', text: '2.0mm条状颗粒硬挺爽滑，不夹猫爪肉垫，猫咪跳出砂盆也不会带出碎屑到沙发。' },
      en: { author: 'Ms. Yen (Da Nang)', text: '2.0mm smooth firm pellets don’t get trapped between cat paw pads, preventing messy litter tracking onto rugs.' },
    },
  ];

  return (
    <section id="gioi-thieu" className="py-16 sm:py-24 bg-white border-b border-stone-200">
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

        {/* 4 Solutions Matrix with Real Customer Comments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.intro.painPoints.map((item, idx) => {
            const comment = customerComments[idx]?.[language] || customerComments[idx]?.vi;

            return (
              <div
                key={idx}
                className="bg-stone-50 rounded-2xl p-6 sm:p-7 border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
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

                {/* Verified Customer Comment on this point */}
                {comment && (
                  <div className="mt-4 pt-3 border-t border-amber-200/50 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60 flex items-start gap-2.5">
                    <MessageSquareQuote className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-xs text-stone-700">
                      <span className="font-bold text-amber-900 mr-1.5">{comment.author}:</span>
                      <span className="italic font-medium">"{comment.text}"</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Product Specifications Table */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-stone-200">
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
                  <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 text-center">
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
