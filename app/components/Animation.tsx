"use client";

import { motion } from "framer-motion";
export const AnimationDiv = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <h1 className="title text-5xl text-lightContent">Wubba Lubba Dub Dub!</h1>
      </motion.div>
    </>
  );
};
