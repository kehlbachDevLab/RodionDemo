// --- Demo version. Code concealed ---
import { AnimatePresence, motion } from 'framer-motion';
  const { locale } = useLanguage();
    <AnimatePresence mode="wait">
        key={locale}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
  );

    <html className="overflow-x-hidden">
      <body className={`${Settings.globalLayoutStyle}`}>

            <AnimatedContent key="animated">{children}</AnimatedContent>
      </body>
// --- End of demo block ---
