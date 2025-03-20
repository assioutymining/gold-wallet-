import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import GoldCoin from "./GoldCoin";

const GoldWallet = () => {
  const [goldBalance, setGoldBalance] = useState(10.5);

  const buyGold = () => setGoldBalance(goldBalance + 0.5);
  const sellGold = () => {
    if (goldBalance > 0.5) setGoldBalance(goldBalance - 0.5);
  };

  return (
    <div>
      <h2>رصيد الذهب: {goldBalance.toFixed(2)} جرام</h2>
      <Canvas>
        <GoldCoin />
      </Canvas>
      <button onClick={buyGold}>شراء</button>
      <button onClick={sellGold}>بيع</button>
    </div>
  );
};

export default GoldWallet;
