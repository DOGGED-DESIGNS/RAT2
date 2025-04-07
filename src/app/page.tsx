import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";
import { BackgroundBeamsDemo } from "@/components/Blackbg";

export default function Home() {
  return (
    <>
      <Maxwidthwrapper newClass=" ">
        <Navbar />

        <div className=" ">
          <Movinbg />
        </div>

        {/* this is the ther one */}
        <BackgroundBeamsDemo />
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
