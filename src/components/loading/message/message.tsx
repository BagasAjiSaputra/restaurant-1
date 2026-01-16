"use client";

import Lottie from "lottie-react";
import message from "@/components/loading/message/message.json";

export default function MessageLottie() {
  return (
    <div className="flex items-center justify-end ">
      <Lottie
        animationData={message}
        loop
        style={{ width: 250, height: 250 }}
      />
    </div>
  );
}
