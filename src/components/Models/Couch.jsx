import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Couch = (props) => {
  const { nodes, materials } = useGLTF("/models/Couch.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Couch_Medium1_1.geometry}
          material={materials.Couch_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Couch_Medium1_2.geometry}
          material={materials.Black}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Couch.glb");

export default Couch;
