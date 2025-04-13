"use client";
import React from "react";
import { AuroraBackground } from "./ui/Arorabg";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Movinbg() {
  return (
    <div>
      <AuroraBackground className="relative" showRadialGradient={true}>
        {/* <motion.div
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
        </motion.div> */}

        <div className=" w-[100%] p-2 lg:w-[80%]  z-30 items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-lvh gap-5 grid absolute top-5 left-1/2 -translate-x-1/2 ">
          <div className=" ">
            <div className="flex">
              <div className="  p-2 mr-auto bg-purple-100 border border-zinc-100 rounded-sm ">
                <h4 className=" font-popins lg:text-sm md:text-sm sm:text-sm text-[10px] font-semibold   capitalize text-purple-500  tracking-wide ">
                  LICENSED INVESTMENT ADVISER
                </h4>
              </div>
            </div>

            <h1 className="font-popins text-slate-950 md:4xl text-2xl tracking-widest  lg:text-7xl font-bold my-3 ">
              Rita Orow
            </h1>

            <h2 className="font-montserrat mt-15 text-sm line-clamp-6 text-zinc-500">
              I can help you build and manage an investment portfolio that’s
              designed to work for you. With the right strategies, you could see
              your earnings grow by over 200%!
            </h2>

            <div className=" mb-60 mt-30   gap-3 lg:flex lg:gap-10">
              <div className=" my-4 ">
                <Button
                  className=" text-sm  w-full  h-11 lg:h-[60px] md:h-16"
                  variant={"default"}
                  size={"lg"}
                >
                  {" "}
                  Get Stated
                </Button>
              </div>
              <div className=" my-4">
                <Button
                  className=" text-sm w-full  h-11 lg:h-[60px] md:h-16"
                  variant={"outline"}
                  size={"lg"}
                >
                  {" "}
                  Detailed Report
                </Button>
              </div>
            </div>
          </div>
          <div className="  lg:justify-self-start lg:self-start ">
            <div className=" rounded-lg overflow-hidden bg-zinc-600 h-[400px] w-full round-md lg:h-[500px] lg:max-w-[400px]">
              <img
                src="/ritalaptop.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
