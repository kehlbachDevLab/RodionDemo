// --- Demo version. Code concealed ---
import ScrollToTopButton from '@/view/components/ScrollToTopButton';
import UniverseBg from '@/view/components/UniverseBg';
import SeparatorElement from '@/view/components/SeparatorElement';
import LanguageSwitcher from '@/view/components/LanguageSwitcher';
import { Settings } from '@/model/Settings';

  const once =   Settings.viewport.once
  return (

      <section id={Dictionary.ids.scrollableContent} className={formatStylesMain.scrollable}>
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            <WebsitesBlock />


          <motion.div
            id={Dictionary.navbarTabs.contact}
          >
        </div>
        <div id="spacer" className={formatStylesComponents.spacer}></div>
        <LanguageSwitcher />
      </div>      
    </div>
// --- End of demo block ---
