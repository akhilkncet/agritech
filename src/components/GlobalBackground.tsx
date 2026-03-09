import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import ParticlesBg from "./ParticlesBg";

const FloatingSpheres = () => (
  <>
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} intensity={2} color="#22c55e" />
    <pointLight position={[-5, 5, 5]} intensity={1.5} color="#84cc16" />
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere args={[1, 32, 32]} position={[-3, 1, -2]}>
        <MeshDistortMaterial color="#22c55e" transparent opacity={0.85} distort={0.4} speed={2} emissive="#22c55e" emissiveIntensity={0.3} />
      </Sphere>
    </Float>
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <Sphere args={[0.7, 32, 32]} position={[3, -1, -3]}>
        <MeshDistortMaterial color="#84cc16" transparent opacity={0.8} distort={0.5} speed={3} emissive="#84cc16" emissiveIntensity={0.3} />
      </Sphere>
    </Float>
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.8}>
      <Sphere args={[0.5, 32, 32]} position={[0, 2, -1]}>
        <MeshDistortMaterial color="#4ade80" transparent opacity={0.8} distort={0.3} speed={2.5} emissive="#4ade80" emissiveIntensity={0.3} />
      </Sphere>
    </Float>
  </>
);

const GlobalBackground = () => (
  <>
    {/* Fixed 3D Background */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FloatingSpheres />
        </Canvas>
      </Suspense>
    </div>

    {/* Fixed Particles overlay */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <ParticlesBg id="global-particles" density={60} speed={0.8} linked />
    </div>

    {/* Fixed Grid overlay */}
    <div
      className="fixed inset-0 z-0 opacity-5 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(142 71% 45% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(142 71% 45% / 0.15) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </>
);

export default GlobalBackground;
