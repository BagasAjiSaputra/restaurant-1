"use client";

import Lottie from "lottie-react";
import potato from "@/components/loading/potato/potato.json";

export default function PotatoLottie() {
  return (
    <div className="flex items-center justify-center ">
      <Lottie
        animationData={potato}
        loop
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}
