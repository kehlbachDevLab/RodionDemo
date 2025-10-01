// --- Demo version. Code concealed ---
import { AnimatePresence, motion } from "framer-motion"

type LightboxImage = {
  src: string
  initialIndex?: number
  iconStyle = "w-40 h-40 object-contain rounded-lg cursor-zoom-in",
  showThumbCaptions = true,
  showModalCaption = true,
  loop = true,
  const [open, setOpen] = useState(false)
  const [dir, setDir] = useState<1 | -1>(1)
  const prevActive = useRef<HTMLElement | null>(null)
  const count = images.length
    if (!openGallery) return
    setIndex(i)

    setTimeout(() => prevActive.current?.focus?.(), 0)

  function goNext() {
    if (count <= 1) return
    if (count <= 1) return
  useEffect(() => {
      if (!open) return
      if (count > 1 && e.key === "ArrowLeft") goPrev()
    return () => document.removeEventListener("keydown", onKey)
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
  const slideVariants = {
  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {

              src={img.src}
              onClick={() => openAt(i)}
            )}
        ))}

        typeof window !== "undefined" &&
            createPortal(
                className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
                animate={{ opacity: 1 }}
              >
                      <motion.div
                        animate="center"
                        transition={{ type: "tween", ease: "easeInOut", duration: 0.28 }}
                        dragElastic={0.7}
                          if (count <= 1) return
                          const swipe = swipePower(offset.x, velocity.x)
                      >
                        <div className="inline-flex items-center pointer-events-auto">
                          {count > 1 && (
                              aria-label="Назад"
                            >
                          )}
                              className="ml-1 md:ml-2 p-3 md:p-4 rounded-full bg-white/90 text-black shadow transition focus:outline-none"
                          )}
                      </motion.div>
                  </div>
                  )}
                        <button
                          onClick={() => {
                      ))}
                    onClick={close}
                    className="absolute top-3 right-3 md:top-6 md:right-6 p-3 rounded-full bg-white text-black shadow focus:outline-none pointer-events-auto"
                  >
                    ✕
              </motion.div>
            )}
// --- End of demo block ---
