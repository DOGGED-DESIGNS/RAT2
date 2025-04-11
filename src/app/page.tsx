import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";

import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";
import { BackgroundBeamsDemo } from "@/components/Blackbg";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardHoverEffectDemo } from "@/components/Cards";
import { MovingBorderDemo } from "@/components/Moving";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/Wobble-card";
import Link from "next/link";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/Background-box";

export default function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
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

        <div className=" bg-purple-100 p-30">
          <div className=" py-[107px] grid max-w-screen-md sm:grid-cols-1  w-full m-auto gap-30 lg:grid-cols-2">
            <div className=" col-span-1 ">
              <div className=" overflow-hidden rounded-lg bg-zinc-500  max-w-lg  h-full">
                <img
                  className="w-full h-full object-cover"
                  src="/ritalaptop.jpg"
                />
              </div>
            </div>
            <div className=" col-span-1  ">
              <div>
                <h4 className=" font-popins text-base text-purple-900 font-bold">
                  Rita orowota
                </h4>
                <h2 className=" font-popins lg:text-4xl md:text-3xl text-xl  text-slate-900 mt-15  font-bold">
                  Licensed Investment Adviser
                </h2>
                <p className=" mt-15 font-montserrat text-base  line-clamp-6 text-zinc-600">
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

                <Button className=" font-popins mt-30 ">
                  Send me a message
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* financial services */}

        <div className=" mt-8">
          <h6 className=" text-sm font-popins font-bold text-purple-900 text-center">
            Ritat oraoto
          </h6>
          <h2 className=" lg:text-4xl md:text-3xl text-xl  text-slate-900 font-popins font-bold mt-15 text-center">
            {" "}
            Financial Services
          </h2>

          <div className=" mt-10"></div>
        </div>

        {/* this is the card section */}

        <CardHoverEffectDemo />

        {/* this is another section */}
        <div className="   px-5 py-10  m-auto bg-slate-900   mt-9">
          <div className=" mx-auto max-w-screen-lg">
            <div>
              <div className=" mt-5 mb-12">
                <h6 className=" font-popins text-purple-500 text-sm font-bold">
                  My Experience
                </h6>
                <h1 className=" mt-3 font-popins text-white font-bold lg:text-4xl md:text-3xl text-xl  ">
                  My Work Experience
                </h1>
              </div>

              <div className="mt-60">
                <MovingBorderDemo />
              </div>
            </div>{" "}
          </div>
        </div>

        {/* this is the infinit movin card */}
        <div className=" p-5 mx-auto h-[30rem] rounded-md flex flex-col antialiased bg-slate-200 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <Spotlight />
          <div className=" max-w-screen-lg  mx-auto ">
            <div className=" mb-60">
              <h6 className=" text-sm font-bold text-purple-950">Rita oroto</h6>
              <h2 className=" lg:text-4xl md:text-3xl text-xl mt-12 font-bold ">
                Client Review
              </h2>
            </div>
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        {/* brokage examination */}

        <div className=" mt-10 py-6 px-5  ">
          <div className=" max-w-screen-lg mx-auto ">
            <h2 className="font-popins text-sm text-center font-bold text-purple-900">
              Rita oroto
            </h2>
            <h1 className="font-popins lg:text-4xl md:text-3xl text-xl  text-center font-bold mt-15 ">
              Brokage Examination
            </h1>
            <div className="w-full mt-10 gap-10 grid-col-1 md:grid-col-2 grid lg:grid-cols-3">
              <WobbleCard containerClassName=" col-span-1 bg-slate-200  ">
                <div>
                  <h2 className="font-popins font-bold text-base lg:text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className="font-montserrat text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-pink-200  ">
                <div>
                  <h2 className="font-popins font-bold text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className=" font-montserrat text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-purple-200  ">
                <div>
                  <h2 className="font-popins font-bold text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className="font-montserrat text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
            </div>
          </div>
        </div>

        {/* form section */}
        <div className=" bg-purple-200 py-[107px] px-5  mt-20">
          <div className=" bg-slate-50 gap-10 p-10 mx-auto rounded-lg max-w-screen-lg grid lg:grid-cols-2 md:grid-col-1 grid-col-1 sm:grid-col-1 ">
            <div className="  col-span-1">
              <div className=" p-8">
                <h6 className="font-popins text-sm font-bold text-purple-900">
                  Get in touch
                </h6>
                <h2 className="text-3xl mt-3 font-popins text-slate-900 font-bold ">
                  Send me a Message
                </h2>
                <p className="mt-4 font-montserrat text-slate-500 tex-base ">
                  {" "}
                  Lorem ipsum dolor sit amet.{" "}
                </p>

                {/* this is the image  */}
                <div className=" mx-auto mt-6 rounded-lg overflow-hidden w-[250px] h-[250px]">
                  <img
                    src="/ritabtc.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* this is where the socials are */}

                <div className="mt-6 flex gap-5  ">
                  <Link
                    href={"#"}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "border border-slate-800",
                    })}
                  >
                    {" "}
                    <Instagram />{" "}
                  </Link>
                  <Link
                    href={"#"}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                      className: "border border-slate-800",
                    })}
                  >
                    {" "}
                    <MessageCircle />{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="  col-span-1">
              <form className=" h-full flex flex-col  w-full">
                {/* this is the name */}
                <div className=" my-auto ">
                  <div className="my-5  w-full">
                    <Input placeholder="full name" />
                  </div>
                  <div className="my-5 w-full">
                    <Input placeholder="Email" type="email" />
                  </div>
                  <div className="my-5 h-[60px] w-full">
                    <Input
                      placeholder="Subject"
                      className="h-full"
                      type="email"
                    />
                  </div>
                  <div className="my-5 w-full">
                    <Textarea
                      className="h-[250px]"
                      placeholder="Message"
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <Button
                      className=" font-popins w-full"
                      variant={"default"}
                      size={"lg"}
                    >
                      {" "}
                      <Send /> Send Now{" "}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* fotter section */}
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
          <div className="absolute inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <div className="  ">
            <img className="w-full h-full" src="/ritalogo.svg" />
          </div>
          <p className="text-center text-base max-w-prose font-montserrat   mt-30 text-neutral-300 relative z-20">
            I can help you build and manage a solid investment portfolio,
            significantly increasing your earning potential to over 200%.
          </p>

          <p className="font-montserrat text-sm text-slate-500 mt-10">
            Copyright &copy; 2018 Rita Rowo{" "}
          </p>
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

// infinit moving card

{
  /* <motion.div
  animate={{
    y: [0, -20, 0], // Moves up by 20px and back
  }}
  transition={{
    duration: 2,     // 2 seconds for a full up and down
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    width: "100px",
    height: "100px",
    backgroundColor: "#00FFFF", // A color that pops on black
  }}
>
  {/* Content here */
}
// </motion.div> */}
