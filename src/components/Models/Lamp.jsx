import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Lamp = (props) => {
  const { nodes, materials } = useGLTF("/models/Lamp.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.326, 0.78, -0.505]} rotation={[-1.419, 0.087, 2.088]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder398_1.geometry}
          material={materials.brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder398_2.geometry}
          material={materials.black}
        />
      </group>
      <group position={[0.44, 2.164, -0.331]} rotation={[0, 0, Math.PI / 6]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder400_1.geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder400_2.geometry}
          material={materials.white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder400_3.geometry}
          material={materials.L_yellow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Lamp.glb");

export default Lamp;