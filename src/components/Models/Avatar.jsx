import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useFBX, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Avatar = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/avatar.glb");
    const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
    const { animations: walkingAnimation } = useFBX("/animations/Walking.fbx");
    const scrollData = useScroll();
    const lastScroll = useRef(0);
    idleAnimation[0].name = "Idle";
    walkingAnimation[0].name = "Walking";

    const { actions } = useAnimations(
        [idleAnimation[0], walkingAnimation[0]],
        group
    );

    const [animation, setAnimation] = useState("Idle");

    useEffect(() => {
        actions[animation].reset().fadeIn(0.5).play();
        return () => actions[animation].fadeOut(0.5);
    }, [animation]);

    useFrame(() => {
        const scrollDelta = scrollData.offset - lastScroll.current;
        let rotationTarget = Math.PI / 6;
        if (Math.abs(scrollDelta) > 0.00001) {
            setAnimation("Walking");
            if (scrollDelta > 0) {
                rotationTarget = Math.PI / 2;
            } else {
                rotationTarget = -Math.PI / 2;
            }
        } else {
            setAnimation("Idle");
        }
        group.current.rotation.y = THREE.MathUtils.lerp(
            group.current.rotation.y,
            rotationTarget,
            0.1
        );
        lastScroll.current = scrollData.offset;
    });

    return (
        <group {...props} dispose={null} ref={group}>
            <primitive object={nodes.Hips} />
            <skinnedMesh
                name="EyeLeft"
                geometry={nodes.EyeLeft.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeLeft.skeleton}
                morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            />
            <skinnedMesh
                name="EyeRight"
                geometry={nodes.EyeRight.geometry}
                material={materials.Wolf3D_Eye}
                skeleton={nodes.EyeRight.skeleton}
                morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
                morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Head"
                geometry={nodes.Wolf3D_Head.geometry}
                material={materials.Wolf3D_Skin}
                skeleton={nodes.Wolf3D_Head.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            />
            <skinnedMesh
                name="Wolf3D_Teeth"
                geometry={nodes.Wolf3D_Teeth.geometry}
                material={materials.Wolf3D_Teeth}
                skeleton={nodes.Wolf3D_Teeth.skeleton}
                morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
                morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Body.geometry}
                material={materials.Wolf3D_Body}
                skeleton={nodes.Wolf3D_Body.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
                material={materials.Wolf3D_Outfit_Bottom}
                skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
                material={materials.Wolf3D_Outfit_Footwear}
                skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Outfit_Top.geometry}
                material={materials.Wolf3D_Outfit_Top}
                skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Wolf3D_Hair.geometry}
                material={materials.Wolf3D_Hair}
                skeleton={nodes.Wolf3D_Hair.skeleton}
            />
        </group>
    );
}

useGLTF.preload("/models/avatar.glb");
useFBX.preload("/animations/Idle.fbx");
useFBX.preload("/animations/Walking.fbx");

export default Avatar;