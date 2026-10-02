import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS, TranslationContent } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('purrsafe_lang') as Language;
      if (saved === 'vi' || saved === 'zh' || saved === 'en') {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('purrsafe_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.vi;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
