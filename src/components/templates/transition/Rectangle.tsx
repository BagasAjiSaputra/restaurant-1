"use client";
import { memo } from "react";
import { animate, delay, motion } from "framer-motion";
import Image from "next/image";
// import maskotImage from "@/public/assets/maskot.png";

const rectangleVariants = {
  initial: (custom: any) => ({
    y: custom.initialY || "-100%",
    height: custom.initialHeight || "100%",
  }),
  animate: (custom: any) => ({
    y: custom.animateY || "0%",
    height: custom.animateHeight || "100%",
  }),
  exit: (custom: any) => ({
    y: custom.exitY || ["0%", "-100%"],
    height: ["0%", "100%"],
  }),
};

const Rectangle = () => {
  return (
    <div className="z-50">
      {/* Layer 1 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0,
          duration: 0.6,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-30 bg-stone-500"
      >
        {/* CONTENT STATIS - CENTER SCREEN */}
        <div className="flex flex-col items-center justify-center h-full">
          {/* <Image
            src={maskotImage}
            alt="Maskot Pisangku"
            width={120}
            height={120}
            priority
          /> */}
          {/* <h1 className="mt-4 text-white text-5xl tracking-wide  ">
            FjordsMaken
          </h1> */}
          {/* <p className="text-white text-xl mt-2">Hello</p> */}
        </div>
      </motion.div>

      {/* Layer 2 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.45,
          duration: 0.8,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-20 bg-stone-300"
      />

      {/* Layer 3 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.55,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-stone-200"
      />

      {/* Layer 4 */}
      <motion.div
        custom={{}}
        variants={rectangleVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.65,
          duration: 1,
          ease: [0.63, 0, 0.17, 1],
        }}
        className="fixed top-full w-screen h-screen z-10 bg-stone-100"
      ></motion.div>
    </div>
  );
};

export default memo(Rectangle);