import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Trashcan = (props) => {
  const { nodes, materials } = useGLTF("/models/Trashcan.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trashcan_Small1_1.geometry}
          material={materials.LightMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Trashcan_Small1_2.geometry}
          material={materials.Black}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Trashcan.glb");

export default Trashcan;