// --- Demo version. Code concealed ---
import Image from 'next/image';
import { useLanguage } from '@/model/LanguageContext';
import { Dictionary, Locale } from '@/model/Dictionary';
  const flags: { code: Locale; src: string; alt: string }[] = [
    { code: Dictionary.languages.ru, src: '/flags/ru.png', alt: 'Russian' },
    { code: Dictionary.languages.de, src: '/flags/de.png', alt: 'German' }
  const formatStyles = useFormatController().header.languageSwitcher;  
  const [open, setOpen] = useState(false);
    >
      {/* Активный флаг */}
      {/* Выпадающий список */}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
              .filter(flag => flag.code !== locale)
              .map(flag => (
                <button
                  key={flag.code}
                  onClick={() => {
}
// --- End of demo block ---
