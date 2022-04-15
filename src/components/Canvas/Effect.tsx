import React, { useEffect, useRef, VFC } from "react";
import { EffectComposer, RenderPass, ShaderPass } from "three-stdlib";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { DistortionPass } from "../postprocessing/DistortionPass";
import { RipplePass } from "../postprocessing/RipplePass";

extend({ EffectComposer, RenderPass, ShaderPass });

export const Effect: VFC = () => {
  const composerRef = useRef<EffectComposer>(null);
  const { gl, scene, camera, size } = useThree();

  useEffect(() => {
    composerRef.current!.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    composerRef.current!.render();
  }, 1);

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <DistortionPass />
      <RipplePass />
    </effectComposer>
  );
};
