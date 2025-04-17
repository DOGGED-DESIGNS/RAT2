"use client";
import React from "react";
import Maxwidthwrapper from "./Maxwidthwrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Watsapp() {
  return (
    <motion.a
      initial={{
        top: "80%",
        right: "5%",

        position: "fixed",
      }}
      whileHover={{
        top: "80%",
      }}
      animate={{
        top: ["83%", "80%"],
      }}
      transition={{
        repeat: Infinity,
        duration: 300,
        type: "spring",
        stiffness: 200,
      }}
      href={"https://wa.me/17815883442"}
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
          src={"/whatsapp.svg"}
        />
      </div>
    </motion.a>
  );
}
