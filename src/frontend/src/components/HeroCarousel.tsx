import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ConfettiOverlay } from "./ConfettiOverlay";

const photos = [
  { src: "/assets/photos/photo1.jpg", alt: "Astha - A beautiful memory" },
  { src: "/assets/photos/photo2.jpg", alt: "Astha - Cherished moments" },
  { src: "/assets/photos/photo3.jpg", alt: "Astha - Special times" },
  { src: "/assets/photos/photo4.jpg", alt: "Astha - Joy and laughter" },
  { src: "/assets/photos/photo5.jpg", alt: "Astha - Wonderful memories" },
  { src: "/assets/photos/photo6.jpg", alt: "Astha - Amazing moments" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % photos.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className="carousel-container relative"
      style={{ aspectRatio: "16/10" }}
    >
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={photos[current].src}
            alt={photos[current].alt}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Confetti */}
      <ConfettiOverlay />

      {/* Script headline */}
      <div className="absolute bottom-16 left-0 right-0 text-center px-4 z-10">
        <h2
          className="font-script gold-text drop-shadow-2xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.2 }}
        >
          Happy Birthday Astha!
        </h2>
        <p className="text-white/90 uppercase tracking-widest text-xs md:text-sm mt-2 font-sans font-medium drop-shadow">
          Wishing You A Fantastic Day!
        </p>
      </div>

      {/* Prev button */}
      <button
        type="button"
        className="carousel-nav-btn absolute left-3 top-1/2 -translate-y-1/2 z-20"
        onClick={prev}
        aria-label="Previous photo"
        data-ocid="carousel.pagination_prev"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next button */}
      <button
        type="button"
        className="carousel-nav-btn absolute right-3 top-1/2 -translate-y-1/2 z-20"
        onClick={next}
        aria-label="Next photo"
        data-ocid="carousel.pagination_next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators + counter */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 z-20">
        <div className="flex gap-2">
          {photos.map((photo, i) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
              data-ocid="carousel.tab"
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === current
                    ? "oklch(0.72 0.13 80)"
                    : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </div>
        <span className="text-white/70 text-xs font-sans ml-2">
          {current + 1} of {photos.length}
        </span>
      </div>
    </div>
  );
}
