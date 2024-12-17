import { Canvas } from "@react-three/fiber";
import Test from "./components/Test";
import Lights from "./components/Lights";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <Lights />
        <Test />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
}

export default App;
