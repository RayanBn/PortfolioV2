import { Edges, MeshPortalMaterial } from "@react-three/drei";
import { SectionTitle } from "../Utils/SectionTitle";
// import * as THREE from "three";
import Aobox from "./Aobox";
import Desk from "../Models/Desk";
import Couch from "../Models/Couch";
import Doorway from "../Models/Doorway";
import Lamp from "../Models/Lamp";
import Plant from "../Models/Plant";
import Trashcan from "../Models/Trashcan";

const Home = ({ width, height, ...props }) => {
    return (
        <>
            <group {...props}>
                <mesh>
                    <Edges />
                    <boxGeometry args={[width, height, 1]} />
                    <MeshPortalMaterial>
                        <Aobox
                            color="white"
                        >
                            <SectionTitle
                                castShadow
                                receiveShadow
                                scale={2}
                                position={[-2.5, -1.5, 0]}
                                rotation={[0, Math.PI / 6, 0]}
                            >
                                Home
                            </SectionTitle>
                            <Desk
                                rotation={[0, -Math.PI / 2, 0]}
                                position={[1.5, -1.5, -4.5]}
                            />
                            <Couch
                                scale={[.5, .5, .5]}
                                rotation={[0, Math.PI / 2, 0]}
                                position={[-1.8, -1.5, -2]}
                            />
                            <Doorway
                                position={[-.4, -1.5, -5.1]}
                                scale={[2.2, 2.2, 2.2]}
                            />
                            <Lamp
                                position={[1.5, -2.5, -.1]}
                                rotation={[0, -Math.PI / 3, 0]}
                                scale={1.2}
                            />
                            <Plant
                                position={[2.35, -.4, -4.7]}
                                scale={[.15, .15, .15]}
                            />
                            <Trashcan
                                position={[1, -1.5, -4.8]}
                                scale={[.7, .7, .7]}
                            />
                        </Aobox>
                    </MeshPortalMaterial>
                </mesh>
            </group>
        </>
    );
};

export default Home;