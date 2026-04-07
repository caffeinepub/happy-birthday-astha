import { motion } from "motion/react";
import { useRef } from "react";
import { BackgroundDecorations } from "./components/BackgroundDecorations";
import { BirthdayFooter } from "./components/BirthdayFooter";
import { BirthdayHeader } from "./components/BirthdayHeader";
import { GallerySection } from "./components/GallerySection";
import { HeroCarousel } from "./components/HeroCarousel";
import { WishCard } from "./components/WishCard";

const starEmojis = [
  { emoji: "⭐", key: "star-1" },
  { emoji: "✨", key: "sparkle-1" },
  { emoji: "🌟", key: "glowing-star" },
  { emoji: "✨", key: "sparkle-2" },
  { emoji: "⭐", key: "star-2" },
];

export default function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (section: string) => {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
    };
    switch (section) {
      case "home":
        homeRef.current?.scrollIntoView(scrollOptions);
        break;
      case "gallery":
        galleryRef.current?.scrollIntoView(scrollOptions);
        break;
      case "message":
        messageRef.current?.scrollIntoView(scrollOptions);
        break;
      default:
        homeRef.current?.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div className="bday-bg relative">
      <BackgroundDecorations />

      {/* Header */}
      <BirthdayHeader onNavClick={handleNavClick} />

      {/* Main */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div ref={homeRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-6"
          >
            <h1
              className="font-display font-bold uppercase tracking-wider"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              🎂 Surprise, Astha! 🎂
            </h1>
            <p
              className="font-sans mt-2 uppercase tracking-widest text-sm"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              This magical day belongs to you!
            </p>
          </motion.div>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* Hero Carousel */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <HeroCarousel />
              </motion.div>

              {/* Wish Card on left (desktop) */}
              <div className="hidden lg:block" ref={messageRef}>
                <WishCard />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-6">
              {/* Wish Card on right (mobile shows here) */}
              <div className="lg:hidden" ref={messageRef}>
                <WishCard />
              </div>

              {/* Second wish / highlight card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bday-card p-6 md:p-8 text-center relative overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-2 left-3 text-3xl opacity-25 select-none"
                >
                  🎉
                </div>
                <div
                  aria-hidden="true"
                  className="absolute top-2 right-3 text-3xl opacity-25 select-none"
                >
                  🎉
                </div>

                <h3
                  className="font-display font-bold uppercase tracking-wider mb-3"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.3rem)",
                    color: "oklch(0.45 0.12 285)",
                  }}
                >
                  You Are Loved!
                </h3>
                <p
                  className="font-script text-center"
                  style={{
                    fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                    color: "oklch(0.52 0.14 290)",
                  }}
                >
                  "The best is yet to come"
                </p>
                <div
                  className="mt-4 space-y-2 font-sans text-sm"
                  style={{ color: "oklch(0.35 0.04 20)", lineHeight: 1.6 }}
                >
                  <p>
                    Every photo tells a story, and yours is one of joy, courage,
                    and beautiful moments worth celebrating.
                  </p>
                  <p>
                    Today the world is brighter because you were born into it.
                    🌸
                  </p>
                </div>

                {/* Star decorations */}
                <div className="flex justify-center gap-3 mt-5">
                  {starEmojis.map((item, i) => (
                    <span
                      key={item.key}
                      aria-hidden="true"
                      className="text-xl sparkle"
                      style={{
                        position: "relative",
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: "2.5s",
                      }}
                    >
                      {item.emoji}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.section
                ref={galleryRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <GallerySection />
              </motion.section>
            </div>
          </div>
        </div>

        {/* Full-width timeline/message band */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 pb-10"
        >
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "oklch(0.97 0.02 60 / 0.15)",
              border: "1px solid oklch(0.85 0.07 350 / 0.4)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h2
              className="font-script mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "rgba(255,255,255,0.95)",
                textShadow: "0 2px 12px rgba(0,0,0,0.3)",
              }}
            >
              Happy Birthday, Astha!
            </h2>
            <p
              className="font-sans text-center max-w-xl mx-auto"
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                fontSize: "1.05rem",
              }}
            >
              May your birthday and every day that follows be filled with the
              most wonderful surprises, warmest hugs, and all the love you so
              generously give to others. You deserve every happiness, every
              dream, and every star in the sky. 🌟🎂💖
            </p>
            <div className="mt-6 text-4xl space-x-4">
              <span aria-hidden="true">🎂</span>
              <span aria-hidden="true">🎈</span>
              <span aria-hidden="true">🎉</span>
              <span aria-hidden="true">🎊</span>
              <span aria-hidden="true">🌸</span>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <BirthdayFooter onNavClick={handleNavClick} />
    </div>
  );
}
