import { createContext, useContext, useState, ReactNode } from "react";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";

export type Language = "pt" | "en";
export type Translations = typeof pt;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: pt,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
