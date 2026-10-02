import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';
import { ChevronDown, Check } from 'lucide-react';
import { VietnamFlag, ChinaFlag, UKFlag } from './Flags';

export const LanguageSelector: React.FC<{ variant?: 'header' | 'mobile' }> = ({ variant = 'header' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: {
    code: Language;
    label: string;
    subLabel: string;
    FlagComponent: React.FC<{ className?: string }>;
  }[] = [
    { code: 'vi', label: 'Tiếng Việt', subLabel: 'Việt Nam', FlagComponent: VietnamFlag },
    { code: 'zh', label: '中文', subLabel: '中国 (China)', FlagComponent: ChinaFlag },
    { code: 'en', label: 'English', subLabel: 'Global / UK', FlagComponent: UKFlag },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (variant === 'mobile') {
    return (
      <div className="p-3 bg-stone-100/90 rounded-2xl border border-stone-200">
        <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-800">🌐</span>
            <span>Chọn ngôn ngữ / 语言 / Language</span>
          </div>
          <span className="text-[10px] text-stone-400 font-normal">Quốc kỳ hiển thị</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((l) => {
            const Flag = l.FlagComponent;
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={`py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all ${
                  isSelected
                    ? 'bg-amber-700 text-white shadow-sm ring-2 ring-amber-700/30'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                <Flag className="w-6 h-4 shadow-2xs" />
                <span className="text-[11px] font-semibold truncate max-w-full">{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const CurrentFlag = current.FlagComponent;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs border border-stone-200 shadow-2xs hover:border-amber-400 transition-all cursor-pointer"
        aria-label="Chọn ngôn ngữ / Quốc kỳ"
        title={`Ngôn ngữ hiện tại: ${current.label}`}
      >
        <CurrentFlag className="w-5 h-3.5 shadow-2xs" />
        <span className="text-xs font-bold text-stone-800">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-stone-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1">
          <div className="px-3.5 py-1.5 text-[10px] uppercase font-extrabold text-stone-400 tracking-wider border-b border-stone-100 flex items-center justify-between">
            <span>Ngôn ngữ / 国旗语言</span>
            <span>Quốc kỳ</span>
          </div>
          {languages.map((l) => {
            const Flag = l.FlagComponent;
            const isSelected = language === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLanguage(l.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-amber-50 hover:text-amber-900 transition-colors cursor-pointer ${
                  isSelected ? 'text-amber-800 font-extrabold bg-amber-50/70' : 'text-stone-700 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Flag className="w-5 h-3.5 shadow-2xs shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-900 text-xs">{l.label}</span>
                    <span className="text-[10px] text-stone-500 font-normal">{l.subLabel}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-amber-700 stroke-[3] shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
