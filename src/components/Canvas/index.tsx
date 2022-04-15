import React, { Suspense, VFC } from "react";
import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Effect } from "./Effect";
import { ImagePlane } from "./ImagePlan";
import useWindowSize from "@utils/useWindowSize";

export const TCanvas: VFC = () => {
  const { width } = useWindowSize();

  return (
    <Canvas
      style={{
        opacity: 0.7,
      }}
      camera={{
        position: [0, 0, 2],
        fov: 50,
        aspect:
          typeof window !== "undefined"
            ? window.innerWidth / window.innerHeight
            : 0,
        near: 0.1,
        far: 2000,
      }}
      frameloop={width < 768 ? "demand" : "always"}
      dpr={typeof window !== "undefined" ? window.devicePixelRatio : 0}
    >
      <color attach="background" args={["#000"]} />
      {/* <Stats /> */}
      <Suspense fallback={null}>
        <ImagePlane />
      </Suspense>
      <Effect />
    </Canvas>
  );
};
