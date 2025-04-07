import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";
import { BackgroundBeamsDemo } from "@/components/Blackbg";
import { Button } from "@/components/ui/button";
import { CardHoverEffectDemo } from "@/components/Cards";

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

        {/* licensed investment adviser */}

        <div className=" bg-purple-200">
          <div className=" py-8 grid max-w-screen-md  w-full m-auto gap-10 grid-cols-2">
            <div className=" ">
              <div className=" rounded-lg bg-zinc-500  max-w-lg  h-[500px]">
                <img />
              </div>
            </div>
            <div>
              <div>
                <h4 className=" text-base text-purple-900 font-bold">
                  Rita orowota
                </h4>
                <h2 className=" text-2xl text-zinc-600 mt-5  font-bold">
                  Licensed Investment Adviser
                </h2>
                <p className=" mt-5 line-clamp-6 text-zinc-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem aliquam necessitatibus dolor, quia vero
                  excepturi sit qui doloremque, quas atque tempore ullam
                  voluptates dolorum optio. Perferendis eligendi reiciendis
                  voluptatem fugit optio inventore rerum doloremque quae animi
                  corrupti sunt hic aliquam fugiat, autem molestias
                  necessitatibus? Rerum iste, eius magni veritatis cupiditate ab
                  aut minima asperiores totam deserunt possimus est libero
                  nostrum sint non molestias, impedit incidunt porro tempora?
                  Optio nulla tempora consequatur neque ut iusto velit, at
                  ipsum! Laudantium earum quas totam cum obcaecati illum optio
                  odio, perspiciatis explicabo doloribus adipisci laboriosam
                  minima aliquid mollitia officiis beatae tenetur accusantium
                  ratione fuga?
                </p>

                <Button className=" mt-5"> Send me a message</Button>
              </div>
            </div>
          </div>
        </div>

        {/* financial services */}

        <div className=" mt-8">
          <h6 className=" text-sm font-bold text-purple-900 text-center">
            Ritat oraoto
          </h6>
          <h2 className=" text-4xl font-bold mt-3 text-center">
            {" "}
            Financial Services
          </h2>

          <div className=" mt-10"></div>
        </div>

        {/* this is the card section */}

        <CardHoverEffectDemo />
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
