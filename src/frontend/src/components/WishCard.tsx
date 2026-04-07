import { motion } from "motion/react";

export function WishCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bday-card p-6 md:p-8 text-center relative overflow-hidden"
    >
      {/* Decorative balloon illustrations */}
      <div
        aria-hidden="true"
        className="absolute top-2 left-3 text-3xl opacity-30 select-none"
      >
        🎈
      </div>
      <div
        aria-hidden="true"
        className="absolute top-2 right-3 text-3xl opacity-30 select-none"
      >
        🎈
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-5 text-2xl opacity-20 select-none"
      >
        ⭐
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-2 right-5 text-2xl opacity-20 select-none"
      >
        ⭐
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-2 text-xl opacity-15 select-none"
      >
        ✨
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-2 text-xl opacity-15 select-none"
      >
        ✨
      </div>

      <h3
        className="font-display font-bold uppercase tracking-wider mb-4"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          color: "oklch(0.45 0.12 285)",
        }}
      >
        A Heartfelt Wish for Astha
      </h3>

      <div
        className="space-y-3 font-sans"
        style={{ color: "oklch(0.3 0.04 20)", lineHeight: 1.7 }}
      >
        <p>
          On this beautiful day that the world gained one of its most radiant
          souls, we celebrate <em>you</em> — the incredible Astha!
        </p>
        <p>
          Your laughter lights up every room, your kindness touches every heart,
          and your spirit makes every moment more magical. You are truly one in
          a million.
        </p>
        <p>
          May this year bring you adventures worth telling, joy beyond measure,
          dreams turned into beautiful realities, and love that grows deeper
          with each passing day.
        </p>
        <p
          className="font-display italic"
          style={{ color: "oklch(0.52 0.14 290)" }}
        >
          Here's to you, Astha — keep shining, keep sparkling, keep being
          magnificently <strong>you</strong>. 🎂✨
        </p>
      </div>
    </motion.div>
  );
}
