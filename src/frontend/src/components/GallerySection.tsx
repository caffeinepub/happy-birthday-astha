import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const photos = [
  { src: "/assets/photos/photo1.jpg", label: "Memory 01" },
  { src: "/assets/photos/photo2.jpg", label: "Memory 02" },
  { src: "/assets/photos/photo3.jpg", label: "Memory 03" },
  { src: "/assets/photos/photo4.jpg", label: "Memory 04" },
  { src: "/assets/photos/photo5.jpg", label: "Memory 05" },
  { src: "/assets/photos/photo6.jpg", label: "Memory 06" },
];

const quotes = [
  "Some people make the world more special just by being in it. You are one of those people.",
  "You're not just a year older — you're a year more wonderful, more loved, and more you.",
  "Every memory with you is a treasure I keep close to my heart.",
  "Today is YOUR day — shine as brightly as you always do!",
  "Friends like you are rare gifts that make life infinitely more beautiful.",
  "Here's to the girl who makes every ordinary moment extraordinary.",
];

// Distinct warm accent colors for each card (OKLCH hue variety: pink, purple, gold, rose, amber, coral)
const cardAccents = [
  { hue: 350, chroma: 0.18, label: "pink" }, // soft pink
  { hue: 300, chroma: 0.16, label: "purple" }, // gentle purple
  { hue: 70, chroma: 0.18, label: "gold" }, // warm gold
  { hue: 15, chroma: 0.18, label: "rose" }, // rose
  { hue: 45, chroma: 0.18, label: "amber" }, // amber
  { hue: 330, chroma: 0.16, label: "coral" }, // coral
];

const sparkleEmojis = ["✨", "🌟", "💫", "⭐", "🎀", "💝"];

interface SurpriseCardProps {
  src: string;
  label: string;
  cardIndex: number;
  onOpenLightbox: () => void;
}

function SurpriseCard({
  src,
  label,
  cardIndex,
  onOpenLightbox,
}: SurpriseCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [quoteVisible, setQuoteVisible] = useState(false);

  const accent = cardAccents[cardIndex % cardAccents.length];
  const sparkle = sparkleEmojis[cardIndex % sparkleEmojis.length];
  const quote = quotes[cardIndex];

  const accentColor = `oklch(0.60 ${accent.chroma} ${accent.hue})`;
  const accentBg = `oklch(0.95 ${accent.chroma * 0.35} ${accent.hue} / 0.35)`;
  const accentBorder = `oklch(0.78 ${accent.chroma * 0.7} ${accent.hue} / 0.6)`;
  const accentGlow = `oklch(0.60 ${accent.chroma} ${accent.hue} / 0.25)`;

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      // Quote fades in after photo appears
      setTimeout(() => setQuoteVisible(true), 500);
    } else {
      onOpenLightbox();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        revealed ? `View ${label} full size` : `Tap to reveal ${label}`
      }
      data-ocid={`gallery.item.${cardIndex + 1}`}
      style={{
        cursor: "pointer",
        borderRadius: "16px",
        overflow: "hidden",
        border: `2px solid ${accentBorder}`,
        background: accentBg,
        backdropFilter: "blur(12px)",
        boxShadow: `0 4px 24px ${accentGlow}, 0 1px 4px rgba(0,0,0,0.08)`,
        userSelect: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        textAlign: "left",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform =
          "translateY(-3px) scale(1.02)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          `0 10px 32px ${accentGlow}, 0 2px 8px rgba(0,0,0,0.12)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "none";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          `0 4px 24px ${accentGlow}, 0 1px 4px rgba(0,0,0,0.08)`;
      }}
    >
      {/* Card face area */}
      <div
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Hidden gift face */}
        <AnimatePresence initial={false}>
          {!revealed && (
            <motion.div
              key="gift"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.35, ease: "easeIn" }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: `linear-gradient(135deg, ${accentBg} 0%, oklch(0.92 ${accent.chroma * 0.25} ${(accent.hue + 20) % 360} / 0.5) 100%)`,
                padding: "12px",
              }}
            >
              {/* Decorative corner sparkles */}
              <span
                style={{
                  position: "absolute",
                  top: "8px",
                  left: "10px",
                  fontSize: "0.75rem",
                  opacity: 0.7,
                  animation: "pulse 2.2s ease-in-out infinite",
                }}
              >
                ✨
              </span>
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "8px",
                  fontSize: "0.65rem",
                  opacity: 0.6,
                  animation: "pulse 1.8s ease-in-out infinite 0.4s",
                }}
              >
                💫
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "6px",
                  fontSize: "0.6rem",
                  opacity: 0.55,
                  animation: "pulse 2.5s ease-in-out infinite 0.8s",
                }}
              >
                ⭐
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: "24px",
                  right: "10px",
                  fontSize: "0.7rem",
                  opacity: 0.65,
                  animation: "pulse 2s ease-in-out infinite 1.1s",
                }}
              >
                ✨
              </span>

              {/* Gift box emoji */}
              <motion.span
                animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{
                  fontSize: "clamp(2rem, 6vw, 2.8rem)",
                  display: "block",
                  lineHeight: 1,
                }}
              >
                🎁
              </motion.span>

              <div style={{ textAlign: "center" }}>
                <p
                  className="font-sans font-bold uppercase tracking-widest"
                  style={{
                    fontSize: "clamp(0.5rem, 1.5vw, 0.65rem)",
                    color: accentColor,
                    marginBottom: "2px",
                  }}
                >
                  A Surprise for You
                </p>
                <p
                  className="font-sans"
                  style={{
                    fontSize: "clamp(0.62rem, 1.8vw, 0.75rem)",
                    color: `oklch(0.38 ${accent.chroma * 0.6} ${accent.hue})`,
                    fontWeight: 600,
                  }}
                >
                  Tap to reveal {sparkle}
                </p>
              </div>

              {/* Decorative ribbon lines */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                  opacity: 0.5,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Revealed photo */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="photo"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.55,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{ position: "absolute", inset: 0 }}
            >
              <img
                src={src}
                alt={label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Subtle overlay gradient at bottom for quote readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quote + hint bar — only shown after reveal */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: quoteVisible ? 1 : 0, y: quoteVisible ? 0 : 8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              padding: "10px 12px 8px",
              background: `oklch(0.97 ${accent.chroma * 0.2} ${accent.hue} / 0.85)`,
              backdropFilter: "blur(6px)",
              borderTop: `1px solid ${accentBorder}`,
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <p
              className="font-sans"
              style={{
                fontSize: "clamp(0.62rem, 1.6vw, 0.72rem)",
                fontStyle: "italic",
                color: `oklch(0.42 ${accent.chroma * 0.8} ${accent.hue})`,
                lineHeight: 1.45,
                textAlign: "center",
              }}
            >
              &ldquo;{quote}&rdquo;
            </p>
            <p
              className="font-sans"
              style={{
                fontSize: "0.6rem",
                color: `oklch(0.55 ${accent.chroma * 0.5} ${accent.hue} / 0.75)`,
                textAlign: "center",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              👆 Tap to view full size
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="bday-card p-6 md:p-8">
      <h3
        className="font-display font-bold uppercase tracking-wider text-center mb-2"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "oklch(0.45 0.12 285)",
        }}
      >
        A Collection of Memories
      </h3>
      <p
        className="font-sans text-center text-xs mb-5 uppercase tracking-widest"
        style={{ color: "oklch(0.55 0.08 285 / 0.8)" }}
      >
        Six surprises await — tap each gift to reveal a memory &#127873;
      </p>

      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))" }}
        data-ocid="gallery.list"
      >
        {photos.map((photo, index) => (
          <SurpriseCard
            key={photo.src}
            src={photo.src}
            label={photo.label}
            cardIndex={index}
            onOpenLightbox={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={closeLightbox}
            data-ocid="gallery.modal"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].label}
                className="w-full h-auto rounded-2xl shadow-2xl max-h-[80vh] object-contain"
              />

              {/* Quote in lightbox */}
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-center mt-4 font-sans"
                style={{
                  fontSize: "clamp(0.8rem, 2vw, 1rem)",
                  fontStyle: "italic",
                  color: "oklch(0.88 0.08 60)",
                  maxWidth: "520px",
                  margin: "16px auto 0",
                  lineHeight: 1.6,
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                &ldquo;{quotes[lightboxIndex]}&rdquo;
              </motion.p>

              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 rounded-full p-2 flex items-center justify-center shadow-lg"
                style={{
                  background: "oklch(0.72 0.13 80)",
                  color: "oklch(0.15 0.02 20)",
                  width: "40px",
                  height: "40px",
                }}
                aria-label="Close lightbox"
                data-ocid="gallery.close_button"
              >
                <X size={18} />
              </button>
              <p
                className="text-center mt-3 font-sans text-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Click outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
