"use client";
import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { EyeClosed, Headphones, Headset, MenuIcon, Mic, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [tog, setTog] = useState<boolean>(false);
  return (
    <>
      <motion.nav
        className="z-[1000] bg-slate-100/75
    backdrop-blur-lg overflow-hidden  top-[0px] sticky hidden max-sm:block "
        initial={{
          height: "50px",
        }}
        transition={{
          stiffness: 50,
          delay: 0.2,
          type: "spring",
        }}
        animate={
          tog
            ? {
                height: "auto",
              }
            : {
                height: "50px",
              }
        }
      >
        <div
          className="     max-sm:flex 
     items-center  w-full hidden"
        >
          <div className=" w-[130px]  px-4 py-3">
            <img className="w-full h-full" src="/ritalogo.svg" />
          </div>

          <div onClick={() => setTog(!tog)} className="ml-auto mr-3">
            <Button variant={"outline"} size={"icon"}>
              {tog ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        <div className=" flex flex-col space-y-4 font-popins font-medium text-sm p-2 mt-5">
          <Link className=" hover:text-purple-900 " href={"#"}>
            Home
          </Link>
          <Link className=" hover:text-purple-900 " href={"#"}>
            About
          </Link>
          <Link className=" hover:text-purple-900 " href={"#"}>
            contact us
          </Link>
          <Link
            className={buttonVariants({
              variant: "destructive",
              className: "",
            })}
            href={"#"}
          >
            {" "}
            <Headphones /> send us a message{" "}
          </Link>
        </div>
      </motion.nav>
      <nav
        className=" sticky z-[1000] top-[0px] bg-slate-100/75
    backdrop-blur-lg max-sm:hidden py-4 bg-zinc-100  px-3 w-full items-center flex"
      >
        <div className=" w-[200px] px-4">
          <img className="w-full h-full" src="/ritalogo.svg" />
        </div>

        <div className=" ml-auto   flex space-x-10">
          <Link href={"#"}> Home </Link>
          <Link href={"#"}> About Me </Link>
          <Link href={"#"}> Service </Link>
          <Link href={"#"}> Work Experience </Link>
          <Link href={"#"}> Client Review </Link>
          <Link href={"#"}> Contact Me </Link>
        </div>

        <div className=" ml-auto flex gap-3 ">
          <Button variant={"destructive"} className=" font-bold " size={"lg"}>
            <Headset /> Send me a message
          </Button>
        </div>
      </nav>
    </>
  );
}
