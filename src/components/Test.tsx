import { Plane } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

const Test = () => {
  const dollar = useTexture("./textures/US_one_dollar.jpg");

  return (
    <>
      <Plane args={[4, 2]}>
        <meshStandardMaterial map={dollar} />
      </Plane>
      <Plane
        args={[4, 2]}
        rotation-z={-Math.PI / 8}
        position={[0.5, 0.75, -0.1]}
      >
        <meshStandardMaterial map={dollar} />
      </Plane>
    </>
  );
};

export default Test;
