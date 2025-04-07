"use client";
import React from "react";
import { AuroraBackground } from "./ui/Arorabg";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

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

        <div className=" max-w-screen-lg items-center grid-cols-2 h-lvh gap-5 grid absolute top-5 left-5 ">
          <div className=" ">
            <div className=" p-4 bg-purple-300 border border-zinc-100 rounded-lg font-bold">
              Licencesed investment Banker
            </div>

            <h2 className=" mt-5 text-base line-clamp-2 text-zinc-600">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore officia illo eveniet autem temporibus ullam incidunt rem
              id tempora tempore accusamus voluptatum quisquam aliquid
              voluptatem non animi, ducimus ratione labore.{" "}
            </h2>

            <div className=" flext gap-10">
              <Button variant={"default"} size={"lg"}>
                {" "}
                Get Stated
              </Button>
              <Button variant={"default"} size={"lg"}>
                {" "}
                Detailed Report
              </Button>
            </div>
          </div>
          <div className=" justify-self-end self-start ">
            <div className=" bg-zinc-600 h-[300px] w-[300px]">
              <img />
            </div>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}
