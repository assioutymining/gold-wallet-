import React from "react";
import { useFrame } from "@react-three/fiber";

const GoldCoin = () => {
  return (
    <mesh rotation={[90, 0, 20]}>
      <cylinderGeometry args={[1, 1, 0.2, 32]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  );
};

export default GoldCoin;
