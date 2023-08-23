import { ContactShadows, Edges, Environment, MeshPortalMaterial } from "@react-three/drei";
import { SectionTitle } from "../Utils/SectionTitle";
import Aobox from "./Aobox";

const Skills = ({width, height, ...props}) => {
    return (
        <>
            <group {...props}>
                <mesh>
                    <Edges />
                    <boxGeometry args={[width, height, 1]} />
                    <MeshPortalMaterial>
                        <color attach="background" args={["purple"]} />

                        <Environment preset="city" />
                        <ambientLight intensity={0.2} />

                        <Aobox
                            color="purple"
                        >
                            <SectionTitle
                                castShadow
                                receiveShadow
                                scale={2}
                                position={[-2.5, -1.5, 0]}
                                rotation={[0, Math.PI / 6, 0]}
                            >
                                Skills
                            </SectionTitle>
                        </Aobox>
                    </MeshPortalMaterial>
                </mesh>
            </group>
        </>
    );
};

export default Skills;