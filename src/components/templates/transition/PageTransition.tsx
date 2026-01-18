"use client";
import { memo, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
type PageTransitionProps = {
  children: ReactNode;
};

const PageTrainsition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            delay: 1,
            duration: 1,
            ease: "easeInOut",
          },
        }}
        className="min-h-screen w-full fixed top-0 left-0 pointer-events-none"
      />
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default memo(PageTrainsition);