import { ContactShadows, Environment, OrbitControls, Scroll, useScroll } from "@react-three/drei";
import { useControls } from "leva";
import Avatar from "./Models/Avatar";
import { useRef } from "react";

import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import { useFrame } from "@react-three/fiber";

const SECTIONS_DISTANCE = 5;
const SECTIONS_WIDTH = 5;
const SECTIONS_HEIGHT = 3;

export const Experience = () => {
  const sceneContainer = useRef();
  const scrollData = useScroll();

  const { controls } = useControls({
    controls: false
  })

  useFrame(() => {
    sceneContainer.current.position.x =
      -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1);
  });

  return (
    <>
      {controls && <OrbitControls />}

      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <ContactShadows opacity={1} scale={[30, 30]} position={[0, -.49, 0]} />

      <mesh position-y={-.5} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#f5f3ee" />
      </mesh>

      <Avatar position={[-2.5, -.5, 3.5]} scale={.85} />
      <group ref={sceneContainer} position-y={(SECTIONS_HEIGHT / 2) - .499} position-z={1}>
        <Home width={SECTIONS_WIDTH} height={SECTIONS_HEIGHT} />
        <Skills width={SECTIONS_WIDTH} height={SECTIONS_HEIGHT} position-x={SECTIONS_DISTANCE} />
        <Projects width={SECTIONS_WIDTH} height={SECTIONS_HEIGHT} position-x={SECTIONS_DISTANCE * 2} />
        <Contact width={SECTIONS_WIDTH} height={SECTIONS_HEIGHT} position-x={SECTIONS_DISTANCE * 3} />
      </group>
    </>
  );
};
