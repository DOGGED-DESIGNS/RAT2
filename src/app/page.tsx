import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Maxwidthwrapper newClass=" border-2  border-zinc-100">
        <Navbar />

        <div className=" ">
          <Movinbg />
        </div>
      </Maxwidthwrapper>
    </>
  );
}

// i am using

// auora background,background beam with colosion,  background lines
// background boxes
// card hover effect
// movingbar
// spotlight new
