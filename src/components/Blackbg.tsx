"use client";
import React from "react";
import { BackgroundBeams } from "./ui/Background-beam";

export function BackgroundBeamsDemo() {
  return (
    <div
      className="lg:h-[20rem] md:h-[40rem] h-[40rem] lg:mt-2 md:mt-20  mt-[14rem]
 w-full  bg-slate-900 relative  antialiased"
    >
      <div className="max-w-screen-lg sm:h-full md:h-full h-full  absolute top-1/2 -translate-x-1/2  left-1/2 w-[100%]  -translate-y-1/2  mx-auto p-4">
        <div className="w-full h-full ">
          <div className="lg:flex-row lg:items-center flex h-full justify-around  flex-col   ">
            <div>
              <h1 className=" lg:text-6xl text-2xl font-bold text-center text-white">
                9+
              </h1>
              <h6 className=" text-base text-center mt-15 text-zinc-300">
                Years of Experience
              </h6>
            </div>
            <div>
              <h1 className=" lg:text-6xl text-2xl font-bold text-center text-white">
                14+
              </h1>
              <h6 className=" text-base text-center mt-15 text-zinc-300">
                State Licenses
              </h6>
            </div>
            <div>
              <h1 className="lg:text-6xl text-2xl font-bold text-center text-white">
                700+
              </h1>
              <h6 className="mt-15 text-base text-center text-zinc-300">
                Clients Satisfied
              </h6>
            </div>
            <div>
              <h1 className=" lg:text-6xl text-2xl font-bold text-center text-white">
                1.7k
              </h1>
              <h6 className=" text-base text-center mt-15 text-zinc-300">
                {" "}
                Handled Portfolio{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
