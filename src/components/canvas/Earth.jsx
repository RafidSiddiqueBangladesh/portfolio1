import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  try {
    const earth = useGLTF("./planet/scene.gltf");

    if (!earth || !earth.scene) {
      console.warn("Earth model failed to load properly");
      return null;
    }

    // Clean up geometry to prevent NaN errors
    earth.scene.traverse((child) => {
      if (child.geometry) {
        child.geometry.computeBoundingBox();
        child.geometry.computeBoundingSphere();
      }
    });

    return (
      <primitive 
        object={earth.scene} 
        scale={2.5} 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]} 
      />
    );
  } catch (error) {
    console.error("Error loading or rendering Earth model:", error);
    return null;
  }
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (isMobile) {
    return (
      <div className='w-full h-full bg-black-100 rounded-2xl flex items-center justify-center'>
        <p className='text-secondary text-sm'>3D View - Desktop Only</p>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onError={(error) => console.error("Canvas render error:", error)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;