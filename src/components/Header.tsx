import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.intro, href: '#gioi-thieu' },
    { label: t.nav.video, href: '#hinh-anh-thuc-te' },
    { label: t.nav.features, href: '#uu-diem' },
    { label: t.nav.ingredients, href: '#thanh-phan' },
    { label: t.nav.reviews, href: '#danh-gia' },
    { label: t.nav.distributor, href: '#dai-ly' },
    { label: t.nav.contact, href: '#lien-he' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
      {/* HÀNG 1: LOGO VÀ TÊN SẢN PHẨM RIÊNG BIỆT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 border-b border-stone-100">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Product Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center shadow-md shadow-amber-800/15 group-hover:scale-105 transition-transform text-2xl shrink-0">
              🐾
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-2xl sm:text-3xl font-black text-stone-900 group-hover:text-amber-800 transition-colors">
                  Purr<span className="text-amber-700">Safe</span>
                </span>
                <span className="text-xs uppercase font-bold text-amber-800 bg-amber-50 border border-amber-300 px-2.5 py-0.5 rounded-md">
                  {t.brand.productName}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {t.brand.slogan}
              </p>
            </div>
          </a>

          {/* Action controls with single LanguageSelector */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Single Language Selector */}
            <LanguageSelector variant="header" />

            {/* Hotline & Zalo on tablet & desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={`tel:${t.brand.hotline}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-800/15 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-200" />
                <span>{t.nav.hotlinePrefix} {t.brand.hotlineFormatted}</span>
              </a>

              <a
                href={t.brand.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.nav.zaloOrChat}</span>
              </a>
            </div>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* HÀNG 2: DASHBOARD / THANH ĐIỀU HƯỚNG RIÊNG BIỆT TRÊN MỘT HÀNG */}
      <div className="hidden lg:block bg-stone-50/80 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-8 py-2.5 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-800 transition-colors py-1 hover:border-b-2 hover:border-amber-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl space-y-3">
          <LanguageSelector variant="mobile" />

          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200">
            <div className="text-xs uppercase font-bold text-amber-800">
              {t.nav.officialProduct}
            </div>
            <div className="text-base font-extrabold text-stone-900">
              {t.brand.productName}
            </div>
            <div className="text-xs text-stone-600 mt-0.5">
              {t.nav.ratioSubtitle}
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y divide-stone-100 text-stone-700 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-2 flex items-center justify-between hover:text-amber-800 hover:bg-stone-50 rounded-lg"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200">
            <a
              href={`tel:${t.brand.hotline}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-amber-700 text-white font-bold rounded-xl text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-200" />
              <span>{t.nav.hotlinePrefix} {t.brand.hotlineFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
