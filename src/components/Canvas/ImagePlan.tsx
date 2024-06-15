import React, { VFC } from "react";
import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";

export const ImagePlane: VFC = () => {
  const textures = useTexture([
    "https://raw.githubusercontent.com/nemutas/r3f-homunculus/main/public/assets/images/thum2.jpg",
    "https://raw.githubusercontent.com/nemutas/r3f-homunculus/main/public/assets/images/thum1.jpg",
    "https://raw.githubusercontent.com/nemutas/r3f-homunculus/main/public/assets/images/thum3.jpg",
    "https://raw.githubusercontent.com/NicolasMarqui/nicolasmarqui.com/master/public/images/portfolio.jpeg",
    "https://raw.githubusercontent.com/NicolasMarqui/nicolasmarqui.com/master/public/images/myself.jpeg",
  ]);

  const material = (texture: THREE.Texture) =>
    new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: texture },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

  return (
    <>
      {textures.map((texture, i) => (
        <Plane
          key={i}
          args={[1, 1 * (500 / 600)]}
          material={material(texture)}
          scale={0.98}
          position={[i - 1, 0, 0]}
          attach={undefined}
          attachArray={undefined}
          attachObject={undefined}
          onUpdate={undefined}
          up={undefined}
          rotation={undefined}
          matrix={undefined}
          quaternion={undefined}
          layers={undefined}
          dispose={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerMissed={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          visible={undefined}
          type={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          castShadow={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          clear={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          raycast={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
          geometry={undefined}
          morphTargetInfluences={undefined}
          morphTargetDictionary={undefined}
          isMesh={undefined}
          updateMorphTargets={undefined}
        />
      ))}
    </>
  );
};

// --------------------------------------------------------
const vertexShader = `
varying vec2 v_uv;
void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.9 );
}
`;

const fragmentShader = `
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
  vec4 color = texture2D(u_texture, v_uv);
  gl_FragColor = color;
}
`;
