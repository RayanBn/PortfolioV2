import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Html/Interface";

import config from "./config";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 1, 7], fov: 50 }}>
      <color attach="background" args={["#ececec"]} />
      <fog attach="fog" args={["#ececec", 20, 100]} />
      <ScrollControls
        pages={config.sections.length}
        damping={.1}
        maxSpeed={.2}
      >
        <Experience />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls >
    </Canvas >
  );
}

export default App;
