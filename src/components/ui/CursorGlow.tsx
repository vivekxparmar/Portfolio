import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed z-10 pointer-events-none"
      style={{
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        transition: "left 0.08s ease, top 0.08s ease",
      }}
    />
  );
}
