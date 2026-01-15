"use client";

import Lottie from "lottie-react";
import loadingAnimation from "@/components/loading/timer/timer.json";

export default function LoadingLottie() {
  return (
    <div className="flex items-center justify-center w-full">
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{ width: 160, height: 160 }}
      />
    </div>
  );
}
