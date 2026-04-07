import { useMemo } from "react";

interface ConfettiPiece {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
  size: string;
  shape: string;
}

export function ConfettiOverlay() {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    const colors = [
      "#C9A24A",
      "#E3C77A",
      "#D07A9B",
      "#7B5AA6",
      "#F6D6C8",
      "#E8A7B5",
      "#FFFFFF",
      "#FFD700",
    ];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
      duration: `${3 + Math.random() * 4}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: `${6 + Math.random() * 8}px`,
      shape: Math.random() > 0.5 ? "circle" : "square",
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            top: "-20px",
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: piece.shape === "circle" ? "50%" : "2px",
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}
