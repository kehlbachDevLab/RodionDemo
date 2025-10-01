// --- Demo version. Code concealed ---
import { Dictionary, Locale } from './Dictionary';
function isLocale(lang: string): lang is Locale {
  return allowedLocales.includes(lang as Locale);

const LanguageContext = createContext<{
  setLocale: (l: Locale) => void;

  // Автоопределение при первом рендере
  useEffect(() => {
    async function detectUserLocale(): Promise<Locale> {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (isLocale(browserLang)) {return browserLang;}

        const res = await fetch('https://ipapi.co/json/');
          DE: Dictionary.languages.de,
          US: Dictionary.languages.en,
        };
    detectUserLocale().then(setLocale);

      {children}
  );
// --- End of demo block ---
