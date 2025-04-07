"use client";
import React from "react";
import { AuroraBackground } from "./ui/Arorabg";
import { motion } from "framer-motion";

export default function Movinbg() {
  return (
    <div>
      <AuroraBackground className="relative" showRadialGradient={true}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>

        <div className=" absolute top-5 left-5 bg-red-500">
          {" "}
          this is where the image of the woman would be i wouldv move it
        </div>
      </AuroraBackground>
    </div>
  );
}
