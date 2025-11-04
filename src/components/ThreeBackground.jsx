"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FloatingIco({ position = [0, 0, 0], color = "#6b8cff", speed = 0.6 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
    ref.current.position.y = position[1] + Math.sin(t) * 0.1;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.6, 1]} />
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.2} />
    </mesh>
  );
}

function FloatingSphere({ position = [0, 0, 0], color = "#9b59b6", speed = 0.5 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.rotation.y = t * 0.25;
    ref.current.position.x = position[0] + Math.cos(t) * 0.08;
    ref.current.position.z = position[2] + Math.sin(t) * 0.08;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.1} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 3]} intensity={0.6} />
        <pointLight position={[-2, -2, -2]} intensity={0.3} />

        <FloatingIco position={[-1.4, 0.6, -1.5]} color="#60a5fa" speed={0.7} />
        <FloatingSphere position={[1.2, -0.4, -1.2]} color="#a78bfa" speed={0.55} />
        <FloatingIco position={[0.2, 0.9, -1.8]} color="#f472b6" speed={0.8} />
      </Canvas>
    </div>
  );
}