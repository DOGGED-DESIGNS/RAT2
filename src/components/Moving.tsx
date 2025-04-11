"use client";
import React from "react";
// import { Button } from "./ui/moving-border";
import { Button } from "./ui/Movingborder";

export function MovingBorderDemo() {
  return (
    <div className=" mt-6 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 max-w-screen-lg m-auto ">
      <Button
        borderRadius="0.75rem"
        duration={Math.floor(Math.random() * 10000 + 10000)}
        classNames="    dark:border-slate-800"
      >
        <div className="   p-5 ">
          <h3 className=" text-left text-lg text-zinc-600">
            From 01/2018 - present
          </h3>
          <h2 className="   text-left text-zinc-100 mt-3 font-medium text-lg">
            Check Pdf for more details
          </h2>
          <h1 className="text-left text-lg mt-3 font-medium capitalize text-purple-800">
            Financial Adviser
          </h1>
        </div>
      </Button>
      <Button
        borderRadius="0.75rem"
        duration={Math.floor(Math.random() * 10000 + 10000)}
        classNames="    dark:border-slate-800"
      >
        <div className="   p-5 ">
          <h3 className=" text-left text-lg text-zinc-600">
            From 01/2018 - present
          </h3>
          <h2 className="   text-left text-zinc-100 mt-3 font-medium text-lg">
            Check Pdf for more details
          </h2>
          <h1 className="text-left text-lg mt-3 font-medium capitalize text-purple-800">
            Financial Adviser
          </h1>
        </div>
      </Button>
      <Button
        borderRadius="0.75rem"
        duration={Math.floor(Math.random() * 10000 + 10000)}
        classNames="    dark:border-slate-800"
      >
        <div className="   p-5 ">
          <h3 className=" text-left text-lg text-zinc-600">
            From 01/2018 - present
          </h3>
          <h2 className="   text-left text-zinc-100 mt-3 font-medium text-lg">
            Check Pdf for more details
          </h2>
          <h1 className="text-left text-lg mt-3 font-medium capitalize text-purple-800">
            Financial Adviser
          </h1>
        </div>
      </Button>
      <Button
        borderRadius="0.75rem"
        duration={Math.floor(Math.random() * 10000 + 10000)}
        classNames="    dark:border-slate-800"
      >
        <div className="   p-5 ">
          <h3 className=" text-left text-lg text-zinc-600">
            From 01/2018 - present
          </h3>
          <h2 className="   text-left text-zinc-100 mt-3 font-medium text-lg">
            Check Pdf for more details
          </h2>
          <h1 className="text-left text-lg mt-3 font-medium capitalize text-purple-800">
            Financial Adviser
          </h1>
        </div>
      </Button>
    </div>
  );
}
