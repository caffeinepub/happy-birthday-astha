import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = ["Home", "Gallery", "Message", "Timeline", "Guestbook"];

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export function BirthdayHeader({ onNavClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bday-header sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div
            className="font-display font-bold uppercase leading-none"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "oklch(0.45 0.12 285)",
            }}
          >
            <span className="gold-text">Astha's</span>
          </div>
          <div
            className="font-sans uppercase tracking-[0.15em] font-medium"
            style={{ fontSize: "0.55rem", color: "oklch(0.45 0.12 285)" }}
          >
            Birthday Bash
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link}
              onClick={() => onNavClick(link.toLowerCase())}
              className="px-3 py-1.5 rounded-lg text-sm font-sans font-medium transition-colors"
              style={{ color: "oklch(0.35 0.05 20)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.52 0.14 290)";
                (e.target as HTMLElement).style.backgroundColor =
                  "oklch(0.52 0.14 290 / 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "oklch(0.35 0.05 20)";
                (e.target as HTMLElement).style.backgroundColor = "transparent";
              }}
              data-ocid="nav.link"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          type="button"
          className="bday-cta hidden md:flex items-center gap-2 text-sm"
          data-ocid="nav.primary_button"
          onClick={() => onNavClick("home")}
        >
          <Sparkles size={14} />
          Celebrate Astha!
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg"
          style={{ color: "oklch(0.45 0.12 285)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "oklch(0.85 0.07 350 / 0.5)" }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link}
                  onClick={() => {
                    onNavClick(link.toLowerCase());
                    setMobileOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-sans font-medium text-left"
                  style={{ color: "oklch(0.35 0.05 20)" }}
                  data-ocid="nav.link"
                >
                  {link}
                </button>
              ))}
              <button
                type="button"
                className="bday-cta mt-2 text-sm"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.primary_button"
              >
                🎉 Celebrate Astha!
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
