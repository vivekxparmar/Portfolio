import { useEffect } from "react";

export default function ParticleBackground() {
  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      const { loadSlim } = await import("@tsparticles/slim");

      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "tsparticles",
        options: {
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: {
              value: 30,
              density: { enable: true, width: 1000, height: 1000 },
            },
            color: { value: ["#6366f1", "#8b5cf6", "#a855f7", "#c084fc"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.3,
              random: true,
              animation: { enable: true, speed: 1, minimumValue: 0.1 },
            },
            size: {
              value: { min: 3, max: 8 },
              random: true,
              animation: { enable: true, speed: 2, minimumValue: 1 },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "attract" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              attract: { distance: 200, duration: 0.4, speed: 1 },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        },
      });
    };

    initParticles();
  }, []);

  return (
    <div id="tsparticles" className="fixed inset-0 z-0 pointer-events-none" />
  );
}
