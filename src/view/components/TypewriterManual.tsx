// --- Demo version. Code concealed ---
'use client'
import { useFormatController } from '@/controller/FormatController';
  caretBlinkSize?: string   // задается в пикселях
  hideCaretOnFinish?: boolean;

  const formatStyles = useFormatController().components.typeWriter;
  const full = useMemo(() => textLines.join("\n"), [textLines]);
  const [idx, setIdx] = useState(0);

      setStarted(true); // мигалка включится в этот момент
          const next = i + 1;
          }
          return Math.min(next, full.length);
      if (timerRef.current) window.clearInterval(timerRef.current);

  return (
      {full.slice(0, idx)}
        <span className={formatStyles.caretBlinkStyle}
          style={{ width: `${caretBlinkSize}px` }}></span>
// --- End of demo block ---
