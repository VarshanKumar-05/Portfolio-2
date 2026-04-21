import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

interface ParticlesBackgroundProps {
  id: string;
  type?: "neural" | "grid" | "stars" | "sparks" | "waves";
}

export default function ParticlesBackground({ id, type = "neural" }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const getOptions = () => {
    switch (type) {
      case "neural":
        return {
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#00ffff", "#7c3aed"] },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none" as const, random: false, straight: false, outModes: { default: "out" as const } },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: { min: 0.1, max: 0.5 } },
          },
          interactivity: {
            events: { 
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" }
            },
            modes: { 
              grab: { distance: 140, links: { opacity: 0.5 } },
              push: { quantity: 4 }
            },
          },
        };
      case "stars":
        return {
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 0.5, direction: "none" as const, random: true, straight: false, outModes: { default: "out" as const } },
            size: { value: { min: 0.5, max: 2 } },
            opacity: { value: { min: 0.1, max: 0.8 }, animation: { enable: true, speed: 1, minimumValue: 0.1 } },
          },
        };
      case "sparks":
        return {
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: { value: 50 },
            color: { value: ["#00ffff", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
            move: { enable: true, speed: 3, direction: "top" as const, random: true, straight: false, outModes: { default: "out" as const } },
          },
        };
      case "grid":
      default:
        return {
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: { value: 30, density: { enable: true, value_area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "square" },
            opacity: { value: 0.1 },
            size: { value: 4 },
            move: { enable: true, speed: 0.5, direction: "none" as const, random: false, straight: false, outModes: { default: "out" as const } },
          },
        };
    }
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id={id}
      options={getOptions()}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
