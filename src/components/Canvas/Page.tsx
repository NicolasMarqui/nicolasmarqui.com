import * as THREE from "three";
import { useCallback, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useAspect } from "@react-three/drei";
import state from "@utils/state";
import { Flex, Box } from "@react-three/flex";

const Page = ({ onChangePages, projects }) => {
  const group = useRef<THREE.Group>();
  const { size } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  const vec = new THREE.Vector3();
  useFrame(() =>
    group.current.position.lerp(vec.set(0, state.top / 100, 0), 0.1)
  );
  const handleReflow = useCallback(
    (w: number, h: number) => {
      onChangePages(h / vpHeight);
      // console.log({ h, vpHeight, pages: h / vpHeight });
    },
    [onChangePages, vpHeight]
  );

  return (
    <group ref={group}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        size={[vpWidth, vpHeight, 0]}
        onReflow={handleReflow}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          width="100%"
          // width="70%"
        >
          {new Array(8 * 4).fill(0).map((k, i) => (
            <Box margin={0.05} key={i}>
              <Html>
                <p className="w-72 h-72">Hello</p>
              </Html>
            </Box>
          ))}
        </Box>
      </Flex>
    </group>
  );
};

export default Page;
