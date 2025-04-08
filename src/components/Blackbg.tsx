"use client";
import React from "react";
import { BackgroundBeams } from "./ui/Background-beam";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[20rem] max-sm:mt-[300px] w-full  bg-slate-900 relative  antialiased">
      <div className="max-w-screen-md absolute top-1/2 -translate-x-1/2 left-1/2 w-[80%] -translate-y-1/2  mx-auto p-4">
        <div className="w-full ">
          <div className=" flex   justify-between   ">
            <div>
              <h1 className=" text-6xl font-bold text-white">16+</h1>
              <h6 className=" text-base text-zinc-300">Years of Experience</h6>
            </div>
            <div>
              <h1 className=" text-6xl font-bold text-white">16+</h1>
              <h6 className=" text-base text-zinc-300">Years of Experience</h6>
            </div>
            <div>
              <h1 className=" text-6xl font-bold text-white">16+</h1>
              <h6 className=" text-base text-zinc-300">Years of Experience</h6>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
