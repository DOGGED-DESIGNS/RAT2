"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Telegram() {
  return (
    <motion.a
      initial={{
        top: "90%",
        right: "5%",

        position: "fixed",
      }}
      href={"https://t.me/Ritaorow"}
      target="_blank"
      rel="noopener noreferrer"
      className=" fixed  z-[2000]    
   "
    >
      <div className="  h-[50px] w-[50px] relative">
        <Image
          fill
          className=" object-contain"
          alt="logo"
          src={"/telegram.svg"}
        />
      </div>
    </motion.a>
  );
}
