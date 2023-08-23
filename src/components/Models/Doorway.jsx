import React from "react";
import { useGLTF } from "@react-three/drei";

const Doorway = (props) => {
  const { nodes, materials } = useGLTF("/models/Doorway.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorway.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorway_1.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door_1.geometry}
        material={materials.wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door_1_1.geometry}
        material={materials.metal}
      />
    </group>
  );
}

useGLTF.preload("/models/Doorway.glb");

export default Doorway;