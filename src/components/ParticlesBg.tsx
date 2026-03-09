import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesBgProps {
  id: string;
  density?: number;
  speed?: number;
  color?: string;
  linked?: boolean;
}

const ParticlesBg = ({ id, density = 40, speed = 0.6, color = "#22c55e", linked = true }: ParticlesBgProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      className="absolute inset-0 z-[1]"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: density, density: { enable: true } },
          color: { value: color },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.5, max: 0.9 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: { value: { min: 2, max: 5 } },
          links: linked
            ? { enable: true, distance: 150, color, opacity: 0.6, width: 2 }
            : { enable: false },
          move: {
            enable: true,
            speed,
            direction: "none" as const,
            outModes: { default: "bounce" as const },
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 140, links: { opacity: 0.3 } } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
