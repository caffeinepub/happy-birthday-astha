import { useMemo } from "react";

interface Decoration {
  id: number;
  type: "balloon" | "sparkle" | "star";
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
}

export function BackgroundDecorations() {
  const decorations = useMemo<Decoration[]>(() => {
    const balloonEmojis = ["🎈", "🎀", "🎊"];
    const sparkleEmojis = ["✨", "⭐", "💫", "🌟"];
    const items: Decoration[] = [];

    // Left column balloons
    ["10%", "35%", "60%", "80%"].forEach((top, i) => {
      items.push({
        id: i,
        type: "balloon",
        emoji: balloonEmojis[i % balloonEmojis.length],
        top,
        left: `${1 + Math.random() * 4}%`,
        delay: `${i * 0.8}s`,
        duration: `${3 + i * 0.5}s`,
        size: `${2 + Math.random()}rem`,
        opacity: 0.5,
      });
    });

    // Right column balloons
    ["15%", "40%", "65%", "85%"].forEach((top, i) => {
      items.push({
        id: i + 10,
        type: "balloon",
        emoji: balloonEmojis[(i + 1) % balloonEmojis.length],
        top,
        right: `${1 + Math.random() * 4}%`,
        delay: `${i * 0.6}s`,
        duration: `${3.5 + i * 0.4}s`,
        size: `${2 + Math.random()}rem`,
        opacity: 0.4,
      });
    });

    // Sparkles scattered
    ["5%", "25%", "50%", "70%", "90%"].forEach((top, i) => {
      items.push({
        id: i + 20,
        type: "sparkle",
        emoji: sparkleEmojis[i % sparkleEmojis.length],
        top,
        left: `${Math.random() * 8}%`,
        delay: `${i * 0.5}s`,
        duration: `${2 + i * 0.3}s`,
        size: "1.2rem",
        opacity: 0.6,
      });

      items.push({
        id: i + 30,
        type: "sparkle",
        emoji: sparkleEmojis[(i + 2) % sparkleEmojis.length],
        top,
        right: `${Math.random() * 8}%`,
        delay: `${i * 0.7}s`,
        duration: `${2.5 + i * 0.3}s`,
        size: "1.2rem",
        opacity: 0.5,
      });
    });

    return items;
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {decorations.map((dec) => (
        <div
          key={dec.id}
          className={dec.type === "balloon" ? "balloon" : "sparkle"}
          style={{
            top: dec.top,
            left: dec.left,
            right: dec.right,
            animationDelay: dec.delay,
            animationDuration: dec.duration,
            fontSize: dec.size,
            opacity: dec.opacity,
          }}
        >
          {dec.emoji}
        </div>
      ))}
    </div>
  );
}
