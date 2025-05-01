import Maxwidthwrapper from "@/components/Maxwidthwrapper";
import Movinbg from "@/components/Movinbg";
import Navbar from "@/components/Navbar";
// import { Image } from "next/image";

import { AuroraBackground } from "@/components/ui/Arorabg";
import { motion } from "framer-motion";

import Image from "next/image";
import { BackgroundBeamsDemo } from "@/components/Blackbg";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardHoverEffectDemo } from "@/components/Cards";
// import { MovingBorderDemo } from "@/components/Moving";
import { InfiniteMovingCards } from "@/components/ui/Infinite-moving";
import { Spotlight } from "@/components/ui/Spotlight";
import { WobbleCard } from "@/components/ui/Wobble-card";
import Link from "next/link";
import {
  FacebookIcon,
  Instagram,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/Background-box";
import { image } from "framer-motion/client";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Working with Rita Orow has completely transformed my investment strategy. Her expert guidance helped me navigate complex decisions, and my portfolio is now performing better than ever. I couldn't be more satisfied with the results!",
      name: "Sarah T",
      title: "",
      image: "/textimage/femaletwo.jpg",
    },
    {
      quote:
        "I was hesitant to invest at first, but Rita Orow made the process easy to understand and personalized for my goals. My portfolio has grown significantly, and I feel confident in my financial future. Highly recommend!",
      name: "Alex R",
      title: "",
      image: "/textimage/maletwo.jpg",
    },
    {
      quote:
        "Thanks to Rita Orow, I've seen my portfolio grow by over 200%! The strategic planning and constant support were key in achieving these results. I now feel secure and well-prepared for the future.",
      name: "Bella Josh",
      iconz: <FacebookIcon className=" h-4 w-4  font-bold text-blue-600" />,
      title: "",
      image: "/textimage/josh.jpg",
    },
    {
      quote:
        "I’ve worked with several financial advisors, but none have been as hands-on and insightful as Rita Orow. She crafted a plan that perfectly aligns with my risk tolerance and financial goals. My portfolio is thriving!",
      name: "Michael L",
      title: "",
      image: "/textimage/maletwo.jpg",
    },
    {
      quote:
        "The financial growth I’ve experienced under Rita Orow's management is beyond my expectations. She takes the time to truly understand my needs and creates customized strategies that work. It’s been an incredible journey.",
      name: "Emily W",
      title: "",
      image: "/textimage/femaleone.jpg",
    },
  ];
  return (
    <>
      <Maxwidthwrapper newClass=" ">
        {/* <Navbar /> */}

        <div className=" ">
          <Movinbg />
        </div>
        <div id="experience">
          <BackgroundBeamsDemo />
        </div>

        <div id="about" className=" bg-purple-100 ">
          <div className=" py-[107px] grid max-w-screen-md grid-cols-1 px-2  w-full m-auto gap-30 lg:grid-cols-2">
            <div className=" col-span-1 ">
              <div className="relative overflow-hidden rounded-lg bg-zinc-500  max-w-lg  min-h-[400px] md:min-h-full">
                <Image
                  alt="image"
                  fill
                  className="object-cover"
                  src="/ritabtc.jpg"
                />
              </div>
            </div>
            <div className=" col-span-1  ">
              <div>
                <h4 className=" font-popins text-base text-purple-900 font-bold">
                  Rita Orow
                </h4>
                <h2 className=" font-popins lg:text-4xl md:text-3xl text-lg  text-slate-900 mt-15  font-bold">
                  Licensed Investment Adviser
                </h2>
                <p className=" mt-15 font-montserrat text-sm   text-zinc-600">
                  As a LICENSED INVESTMENT ADVISER AND STOCK BROKER, I am
                  unwavering in my commitment to building long-term client
                  relationships rooted in trust, respect, and personalized
                  financial strategies. Your financial success is not just a
                  goal—it&apos;s my mission. I bring deep expertise and a
                  strategic mindset to every engagement, partnering with private
                  companies, non-profits, and individuals to drive meaningful
                  growth. What sets me apart is a relentless focus on the bigger
                  picture of your financial life—delivering clear,
                  results-driven solutions tailored to your unique goals.
                  Whether you&apos;re securing your future or scaling your
                  organization, I provide insight and action that deliver
                  measurable impact.
                </p>

                <Link
                  className={buttonVariants({
                    variant: "default",
                    className:
                      "font-bold text-sm  capitalize font-popins mt-30",
                  })}
                  href={"https://wa.me/17815883442"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send me a message
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* financial services */}

        <div id="service" className=" mt-8">
          <h6 className="capitalize text-sm font-popins font-bold text-purple-900 text-center">
            Ritat orow
          </h6>
          <h2 className=" lg:text-4xl md:text-3xl text-lg  text-slate-900 font-popins font-bold mt-15 text-center">
            {" "}
            Financial Services
          </h2>

          <div className=" mt-10"></div>
          <CardHoverEffectDemo />
        </div>

        {/* this is the card section */}

        {/* this is another section */}
        {/* <div className="   px-5 py-10  m-auto bg-slate-900   mt-9">
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
        </div> */}

        {/* this is the infinit movin card */}
        <div
          id="client"
          className=" p-5 mx-auto h-[30rem] rounded-md flex flex-col antialiased bg-slate-200 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
        >
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
              speed="normal"
            />
          </div>
        </div>

        {/* brokage examination */}

        <div className=" mt-10 py-6 px-2  ">
          <div className=" max-w-screen-lg mx-auto ">
            <h2 className=" capitalize font-popins text-sm text-center font-bold text-purple-900">
              Rita orow
            </h2>
            <h1 className="font-popins lg:text-3xl md:text-2xl text-lg  text-center font-bold mt-15 ">
              Brokage Examination
            </h1>
            <div className="w-full mt-10 gap-10 grid-col-1 md:grid-col-2 grid lg:grid-cols-3">
              <WobbleCard containerClassName=" col-span-1 bg-slate-200  ">
                <div>
                  <h2 className="font-popins font-bold  lg:text-lg md:text-base text-sm  capitalize">
                    Principal/Supervisory Exams
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-pink-200  ">
                <div>
                  <h2 className="font-popins font-bold lg:text-lg text-sm md:text-lg  capitalize">
                    General Industry/Product Exams
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />
                </div>
              </WobbleCard>
              <WobbleCard containerClassName=" col-span-1 bg-purple-200  ">
                <div>
                  <h2 className="font-popins font-bold lg:text-lg md:text-base text-sm  capitalize">
                    3 State Securities Law Exams
                  </h2>
                  <div className=" h-[2px] my-2 w-full bg-slate-300 " />
                </div>
              </WobbleCard>
            </div>
          </div>
        </div>

        {/* form section */}
        <div id="contact" className=" bg-purple-200 py-[107px] px-1  mt-20">
          <div className=" bg-slate-50 gap-10 p-2 mx-auto rounded-lg max-w-screen-lg grid lg:grid-cols-2 md:grid-col-1 grid-col-1 sm:grid-col-1 ">
            <div className="  col-span-1">
              <div className=" p-2  ">
                <h6 className="font-popins text-sm font-bold text-purple-900">
                  Get in touch
                </h6>
                <h2 className=" text-base md:text-2xl  lg:text-3xl mt-3 font-popins text-slate-900 font-bold ">
                  Send me a Message
                </h2>
                <p className="lg:text-base md:text-base text-sm mt-4 font-montserrat text-slate-500 tex-base ">
                  Financial Consultant | Investment Adviser | broker
                </p>

                {/* this is the image  */}
                <div className=" mx-auto mt-6 rounded-lg overflow-hidden max-w-[250px] h-[390px]">
                  <img
                    src="/Ritapagent.jpg"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* this is where the socials are */}

                <div className=" space-y-4 mt-6    flex flex-col    ">
                  {/* <Link
                    href={"#"}
                    className=" hover:underline items-center flex gap-1"
                  >
                    <div className=" shrink-0 relative  h-6 w-6">
                      <Image
                        fill
                        className="object-contain"
                        src={"/facebook.svg"}
                        alt="facebook"
                      />
                    </div>
                    <div>
                      <p className=" text-sm font-medium font-popins text-slate-800">
                        Rita Orow
                      </p>
                    </div>
                  </Link> */}
                  {/* <Link
                    href={"#"}
                    className=" hover:underline items-center flex gap-1"
                  >
                    <div className=" shrink-0 relative  h-6 w-6">
                      <Image
                        fill
                        className="object-contain"
                        src={"/instagram.svg"}
                        alt="facebook"
                      />
                    </div>
                    <div>
                      <p className=" text-sm font-medium font-popins text-slate-800">
                        Rita Orow
                      </p>
                    </div>
                  </Link> */}
                  <Link
                    href={"https://t.me/Ritaorow"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline items-center flex justify-center gap-1"
                  >
                    <div className=" shrink-0 relative  h-6 w-6">
                      <Image
                        fill
                        className="object-contain"
                        src={"/telegram.svg"}
                        alt="telgram"
                      />
                    </div>
                    <div className="relative">
                      <p className=" text-sm font-medium font-popins text-slate-800">
                        @RitaOrow
                      </p>
                    </div>
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
                    <Link
                      className={buttonVariants({
                        variant: "default",
                        className: "font-popins w-full",
                        size: "lg",
                      })}
                      href={"https://wa.me/17815883442"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Send /> Send Now{" "}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* fotter section */}
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
          <div className="absolute px-2 inset-0 w-full h-full bg-slate-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          {/* <Boxes />a */}
          <div className="relative h-[80px] w-[130px] md:w-[200px]  ">
            <Image
              alt="logo"
              fill
              className="object-contain  "
              src="/ritalogo.svg"
            />
          </div>
          <p className="text-center text-[10px] lg:text-base md:text-base max-w-prose font-montserrat   mt-30 text-neutral-400 relative z-20">
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

// Backed by 9 years of hands-on experience as a licensed stockbroker and investment adviser, I’ve successfully guided clients through market highs and lows—earning trust while consistently delivering results. My work with some of the most respected firms in the United States has equipped me with the insight, precision, and strategic edge needed to help clients build and protect lasting wealth.
