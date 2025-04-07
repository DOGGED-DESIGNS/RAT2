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

        <motion.div
          initial={{
            opacity: 0.0,
            right: "50%",
            top: "20%",
            position: "absolute",
            translateX: "-50%",
          }}
          whileInView={{ opacity: 1, top: "5%" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" w-[80%]  z-30 items-center grid-cols-2 h-lvh gap-5 grid absolute top-5 left-1/2 -translate-x-1/2 "
        >
          <div className=" ">
            <div className="flex">
              <div className="  p-2 mr-auto bg-purple-100 border border-zinc-100 rounded-sm ">
                <h4 className="text-sm font-bold capitalize text-zinc-700 ">
                  LICENSED INVESTMENT ADVISER
                </h4>
              </div>
            </div>

            <h1 className=" text-7xl font-bold my-3 ">
              Rita orota <br /> oroto
            </h1>

            <h2 className=" mt-5 text-base line-clamp-2 text-zinc-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia illo eveniet autem temporibus ullam incidunt rem
              id tempora tempore accusamus voluptatum quisquam aliquid
              voluptatem non animi, ducimus ratione labore.{" "}
            </h2>

            <div className=" mt-6 flex gap-10">
              <Button variant={"default"} size={"lg"}>
                {" "}
                Get Stated
              </Button>
              <Button variant={"outline"} size={"lg"}>
                {" "}
                Detailed Report
              </Button>
            </div>
          </div>
          <div className=" justify-self-start self-start ">
            <div className=" bg-zinc-600 round-md h-[300px] w-[300px]">
              <img />
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
