"use client";
import { memo } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// components
import Rectangle from "./Rectangle";

const RectangleTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div
          >
            <Rectangle />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default memo(RectangleTransition);