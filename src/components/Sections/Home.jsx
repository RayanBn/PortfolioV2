import { ContactShadows, Edges, Environment, MeshPortalMaterial, OrbitControls, Wireframe, useGLTF } from "@react-three/drei";
import { SectionTitle } from "../Utils/SectionTitle";
// import * as THREE from "three";
import { DoubleSide } from "three";
import Aobox from "./Aobox";

const Home = ({ width, height, ...props }) => {
    return (
        <>
            <group {...props}>
                <mesh>
                    <Edges />
                    <boxGeometry args={[width, height, 1]} />
                    <MeshPortalMaterial>
                        <Aobox>
                            <SectionTitle
                                castShadow
                                receiveShadow
                                scale={2}
                                position={[-2.5, -1.5, 0]}
                                rotation={[0, Math.PI / 6, 0]}
                            >
                                Home
                            </SectionTitle>
                        </Aobox>
                    </MeshPortalMaterial>
                </mesh>
            </group>
        </>
    );
};

export default Home;