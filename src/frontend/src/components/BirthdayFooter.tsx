import { Heart } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";

const navLinks = ["Home", "Gallery", "Message", "Timeline", "Guestbook"];

interface FooterProps {
  onNavClick: (section: string) => void;
}

export function BirthdayFooter({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bday-footer py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Logo repeat */}
        <div>
          <div
            className="font-display font-bold uppercase gold-text"
            style={{ fontSize: "1.5rem" }}
          >
            Astha's Birthday Bash
          </div>
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-wrap justify-center gap-2 md:gap-4"
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link}
              onClick={() => onNavClick(link.toLowerCase())}
              className="text-sm font-sans font-medium transition-opacity hover:opacity-70"
              style={{ color: "rgba(255,255,255,0.85)" }}
              data-ocid="footer.link"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.85)" }}
            aria-label="Instagram"
            data-ocid="footer.link"
          >
            <SiInstagram size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.85)" }}
            aria-label="Facebook"
            data-ocid="footer.link"
          >
            <SiFacebook size={22} />
          </a>
          <Heart
            size={22}
            className="fill-current"
            style={{ color: "oklch(0.72 0.13 80)" }}
            aria-hidden="true"
          />
        </div>

        {/* Attribution */}
        <div className="space-y-1">
          <p
            className="text-sm font-sans"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Made with{" "}
            <Heart
              size={12}
              className="inline fill-current"
              style={{ color: "oklch(0.72 0.13 80)" }}
            />{" "}
            for Astha ✨
          </p>
          <p
            className="text-xs font-sans"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © {currentYear}.{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
