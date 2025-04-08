import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";

import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";
import { BackgroundBeamsDemo } from "@/components/Blackbg";
import { Button } from "@/components/ui/button";
import { CardHoverEffectDemo } from "@/components/Cards";
import { MovingBorderDemo } from "@/components/Moving";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/Wobble-card";

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

        <div className=" bg-purple-100">
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

        {/* this is another section */}
        <div className="   px-5 py-5  m-auto bg-slate-900   mt-9">
          <div className=" mx-auto max-w-screen-lg">
            <div>
              <div className=" mt-5 mb-12">
                <h6 className="  text-purple-500 text-sm font-bold">
                  My Experience
                </h6>
                <h1 className=" mt-3 text-white font-bold text-4xl ">
                  My Work Experience
                </h1>
              </div>

              <div>
                <MovingBorderDemo />
              </div>
            </div>{" "}
          </div>
        </div>

        {/* this is the infinit movin card */}
        <div className="  mx-auto h-[30rem] rounded-md flex flex-col antialiased bg-slate-200 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <Spotlight />
          <div className=" max-w-screen-lg  mx-auto ">
            <div className=" mb-10">
              <h6 className=" text-sm font-bold text-purple-950">Rita oroto</h6>
              <h2 className=" text-4xl font-bold ">Client Review</h2>
            </div>
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>

        {/* brokage examination */}

        <div className=" mt-10 py-6  ">
          <div className=" max-w-screen-lg mx-auto ">
            <h2 className=" text-sm text-center font-bold text-purple-900">
              Rita oroto
            </h2>
            <h1 className=" text-4xl text-center font-bold mt-4">
              Brokage Examination
            </h1>
            <div className="w-full mt-10 gap-10 grid grid-cols-3">
              <WobbleCard containerClassName=" col-span-1 bg-slate-200  ">
                <div>
                  <h2 className=" font-bold text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className=" text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-pink-200  ">
                <div>
                  <h2 className=" font-bold text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className=" text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-purple-200  ">
                <div>
                  <h2 className=" font-bold text-lg  capitalize">
                    Security Entrance Examination
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />

                  <h2 className=" text-slate-600 font-bold text-base mt=5">
                    General Industry/ Product Examination
                  </h2>
                </div>
              </WobbleCard>
            </div>
          </div>
        </div>

        {/* form section */}
        <div> contact section </div>

        {/* fotter section */}
        <div> this is the footer section </div>
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
