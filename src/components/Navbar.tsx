import React from "react";
import { Button } from "./ui/button";
import { Headset, MenuIcon, Mic } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="    max-sm:flex bg-zinc-100 items-center px-3 w-full hidden">
        <div className=" w-[200px]  px-4 py-3">
          <img className="w-full h-full" src="/ritalogo.svg" />
        </div>

        <div className=" ml-auto">
          <Button variant={"ghost"} size={"icon"}>
            <MenuIcon />
          </Button>
        </div>
      </nav>
      <nav className=" max-sm:hidden py-4 bg-zinc-100 items-center px-3 w-full items-center flex">
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
