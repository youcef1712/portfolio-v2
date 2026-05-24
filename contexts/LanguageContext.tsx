"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Locale } from "@/lib/i18n";

const LanguageContext = createContext<{
  locale: Locale;
  t: typeof translations.fr;
  toggleLocale: () => void;
}>({
  locale: "fr",
  t: translations.fr,
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "fr" || stored === "en") setLocale(stored);
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem("locale", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as typeof translations.fr, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
