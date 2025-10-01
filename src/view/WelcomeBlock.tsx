// --- Demo version. Code concealed ---
import TypewriterManual from '@/view/components/TypewriterManual'

import { Settings } from '@/model/Settings';
import toast from 'react-hot-toast';
export default function WelcomeBlock() {

  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const formatStyles = useFormatController().welcome;  
  }, []);  

  const textWaitingFor = t.Welcome.intro.toString() + t.Welcome.intro2.toString();
  const duration_1 = calculateTypingDuration(t.Welcome.intro.toString(), Settings.typing.speed, 0)
    <div id="wl_containerMain" className={formatStyles.wl_containerMain}>
      <div id="wl_twContainer" className={formatStyles.wl_twContainer}>
          {isInView && (
            <TypewriterManual
              textLines={t.Welcome.intro}

            <TypewriterManual
            />
      </div>

          <DelayedBlock displayText={t?.Welcome?.introA} textWaitingFor={textWaitingFor} 
            classname={formatStyles.wl_delayedBlock.style[0]} />
            leftOffset={formatStyles.wl_delayedBlock.offsets[1]} 

        <div id="wl_containerARight" className={formatStyles.wl_containerARight}>
        </div>
          <div id="wl_containerBLeft" className={formatStyles.wl_containerBLeft}>

          <div id="wl_containerBRight" className={formatStyles.wl_containerBRight}>
          </div>


  )
// --- End of demo block ---
