import React, { useState } from 'react';
import { Sparkles, Phone, Shield, Leaf, Droplets, Star, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [activeHighlight, setActiveHighlight] = useState<number>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<'studio' | 'outdoor'>('studio');

  const photos = {
    studio: {
      src: '/images/1ddebf6f2c31ac6ff520.jpg',
      label: 'Studio Bao Bì',
      alt: 'PurrSafe Mixed Cat Litter MILK 2.8KG Hình ảnh thực tế studio',
      aspect: 'max-h-[640px] object-contain',
      tag: 'Chụp Thực Tế 100%',
    },
    outdoor: {
      src: '/images/d34730b9d5e755b90cf6.jpg',
      label: 'Chụp Ngoài Trời',
      alt: 'PurrSafe Mixed Cat Litter MILK 2.8KG Chụp ngoại cảnh thực tế',
      aspect: 'max-h-[640px] aspect-[4/3] object-cover',
      tag: 'Ảnh Ngoại Cảnh',
    },
  };

  const currentPhoto = photos[selectedPhoto];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#F8F4EE] to-[#FAF8F5] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-stone-200">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Product Banner */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-xs mb-4">
            <span className="text-base">🐾</span> {t.brand.subSlogan}
          </div>

          {/* Prominent Product Name & Brand */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 leading-tight mb-3">
            <span className="text-amber-700 mr-3">{t.brand.name}</span>
            <span>{t.brand.productName.replace('PurrSafe ', '')}</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-stone-600 text-sm sm:text-base font-semibold mb-3">
            <span className="text-stone-800">{t.brand.scent}</span>
            <span>·</span>
            <span className="text-stone-800">{t.brand.weight}</span>
            <span>·</span>
            <span className="text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded border border-amber-300 font-bold">
              {t.brand.ratioBadge}
            </span>
          </div>

          <p className="text-lg sm:text-2xl text-stone-700 max-w-2xl mx-auto font-bold">
            "{t.brand.slogan}"
          </p>
        </div>

        {/* 2-Column Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Product Value, Selling Points & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Summary Card */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <p className="text-stone-700 leading-relaxed text-base sm:text-lg">
                {t.hero.desc}
              </p>

              {/* 4 Pillars Direct from User's Poster */}
              <div id="uu-diem" className="grid grid-cols-2 gap-3 pt-2">
                {t.features.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveHighlight(idx)}
                    className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                      activeHighlight === idx
                        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-600" />
                      <span className="text-sm font-bold text-stone-900">{item.title}</span>
                    </div>
                    <span className="text-xs text-stone-600 mt-1 block">
                      {item.subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges: An toàn - Thân thiện - Thấm hút tốt */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-amber-900/5 rounded-xl border border-amber-900/10 text-xs sm:text-sm font-semibold text-stone-800">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.badges[0]?.label}</span>
              </div>
              <span className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.badges[1]?.label}</span>
              </div>
              <span className="text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-blue-600" />
                <span>{t.hero.badges[2]?.label}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#dai-ly"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-base shadow-lg shadow-amber-800/20 hover:shadow-xl hover:shadow-amber-800/30 transition-all text-center"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>{t.hero.ctaDistributor}</span>
              </a>

              <a
                href={`tel:${t.brand.hotline}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-300 font-bold text-base shadow-xs hover:border-amber-700 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>{t.hero.ctaHotline}</span>
              </a>
            </div>

            {/* Trust and Social Proof Bar */}
            <div className="flex items-center gap-4 text-xs text-stone-600 pt-1">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <span className="font-bold text-stone-800">{t.hero.ratingText}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Packaging Showcase 100% Matching Uploaded Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Actual Product Photo from 1ddebf6f2c31ac6ff520.jpg */}
              <div className="relative rounded-3xl overflow-hidden bg-stone-900 p-2 shadow-2xl border-4 border-stone-800/80 ring-1 ring-stone-900/10 group">
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  className={`w-full h-auto ${currentPhoto.aspect} object-center rounded-2xl group-hover:scale-[1.01] transition-transform duration-500`}
                />

                {/* Floating Tag */}
                <div className="absolute top-5 left-5 bg-stone-900/90 backdrop-blur-md text-white p-3 rounded-2xl shadow-lg border border-white/10 max-w-[200px]">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-amber-400 flex items-center gap-1">
                    <Camera className="w-3 h-3 text-amber-400" />
                    <span>{currentPhoto.tag}</span>
                  </div>
                  <div className="text-sm font-extrabold mt-0.5">{t.hero.realPhotoBadge}</div>
                  <div className="text-[11px] text-stone-300 mt-0.5 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                    {t.hero.scentBadge}
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md text-stone-900 p-3.5 rounded-2xl shadow-xl border border-stone-200/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                    3s
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-stone-900">{t.hero.clumpBadge}</div>
                    <div className="text-[11px] text-stone-500">{t.hero.nonStickSub}</div>
                  </div>
                </div>
              </div>

              {/* Photo Switcher Thumbnails */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('studio')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    selectedPhoto === 'studio'
                      ? 'bg-amber-800 text-white shadow-xs ring-2 ring-amber-500/30'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span>📸</span>
                  <span>{photos.studio.label}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto('outdoor')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    selectedPhoto === 'outdoor'
                      ? 'bg-amber-800 text-white shadow-xs ring-2 ring-amber-500/30'
                      : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <span>🌿</span>
                  <span>{photos.outdoor.label}</span>
                </button>
              </div>

              {/* Ambient Info */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-stone-500 font-medium">
                {t.hero.footprints.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span>✓ {item}</span>
                    {idx < t.hero.footprints.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
