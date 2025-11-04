"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";

function PortraitPlane() {
  const meshRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, "/mehedi.png");
  const [targetRot, setTargetRot] = useState({ x: 0, y: 0 });

  useFrame(() => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.y += (targetRot.x - m.rotation.y) * 0.08;
    m.rotation.x += (targetRot.y - m.rotation.x) * 0.08;
  });

  const handlePointerMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
    const y = (e.clientY / window.innerHeight - 0.5) * -0.4;
    setTargetRot({ x, y });
  };

  return (
    <group onPointerMove={handlePointerMove}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[2.6, 3.2]} />
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
}

export default function ThreePortrait() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 4, 6]} intensity={1.0} />
      <PortraitPlane />
    </Canvas>
  );
}