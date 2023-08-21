import { Environment } from "@react-three/drei"

const Aobox = ({ children, ...props }) => {
    return (
        <group {...props}>
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <spotLight
                castShadow
                intensity={.5}
                position={[2.5, 1.6, 2.5]}
                angle={1}
                penumbra={1}
                shadow-normalBias={0.05}
                shadow-bias={0.0001}
            />

            {children}

            <mesh
                castShadow
                receiveShadow
                position={[0, 0, -5]}
            >
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                rotation-x={-Math.PI / 2}
                position={[0, -1.5, 0]}
            >
                <planeGeometry args={[5, 10]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                rotation-x={Math.PI / 2}
                position={[0, 1.5, 0]}
            >
                <planeGeometry args={[5, 10]} />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                rotation-y={Math.PI / 2}
                position={[-2.5, 0, 0]}
            >
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial color="white" />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                rotation-y={-Math.PI / 2}
                position={[2.5, 0, 0]}
            >
                <planeGeometry args={[10, 5]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    )
}

export default Aobox