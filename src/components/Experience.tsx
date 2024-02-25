import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "@/components/Office";
import { Overlay } from "./Overlay";

export default () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <Office />
        </ScrollControls>
      </Canvas>
    </>
  );
};
