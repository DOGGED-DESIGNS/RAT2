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
        "Working with Rita Orow has completely transformed my investment strategy. Her expert guidance helped me navigate complex decisions, and my portfolio is now performing better than ever. I couldn't be more satisfied with the results!",
      name: "Sarah T",
      title: "",
    },
    {
      quote:
        "I was hesitant to invest at first, but Rita Orow made the process easy to understand and personalized for my goals. My portfolio has grown significantly, and I feel confident in my financial future. Highly recommend!",
      name: "Alex R",
      title: "",
    },
    {
      quote:
        "Thanks to Rita Orow, I've seen my portfolio grow by over 200%! The strategic planning and constant support were key in achieving these results. I now feel secure and well-prepared for the future.",
      name: "Olivia K",
      title: "",
    },
    {
      quote:
        "I’ve worked with several financial advisors, but none have been as hands-on and insightful as Rita Orow. She crafted a plan that perfectly aligns with my risk tolerance and financial goals. My portfolio is thriving!",
      name: "Michael L",
      title: "",
    },
    {
      quote:
        "The financial growth I’ve experienced under Rita Orow's management is beyond my expectations. She takes the time to truly understand my needs and creates customized strategies that work. It’s been an incredible journey.",
      name: "Emily W",
      title: "",
    },
  ];
  return (
    <>
      <Maxwidthwrapper newClass=" ">
        {/* <Navbar /> */}

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
                  src="/ritalambo.jpg"
                />
              </div>
            </div>
            <div className=" col-span-1  ">
              <div>
                <h4 className=" font-popins text-base text-purple-900 font-bold">
                  Rita Orowta
                </h4>
                <h2 className=" font-popins lg:text-4xl md:text-3xl text-lg  text-slate-900 mt-15  font-bold">
                  Licensed Investment Adviser
                </h2>
                <p className=" mt-15 font-montserrat text-sm line-clamp-[14]   text-zinc-600">
                  I am committed to building strong, long-term relationships
                  with my clients, founded on mutual respect, trust, and a
                  personalized approach to financial planning. Your financial
                  success is my priority, and I work tirelessly to deliver the
                  best solutions that align with your unique needs. I specialize
                  in partnering with private companies, non-profits, and
                  individuals to optimize their financial strategies and foster
                  long-term growth. What sets me apart is not just my knowledge
                  but my dedication to understanding the bigger picture of your
                  financial life. Whether you’re an individual securing your
                  future, a company seeking growth, or a non-profit striving for
                  sustainability, I offer actionable strategies that produce
                  real, measurable results.
                </p>

                <Button className=" font-bold text-sm  capitalize font-popins mt-30 ">
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
        <div className=" bg-purple-200 py-[107px] px-1  mt-20">
          <div className=" bg-slate-50 gap-10 p-2 mx-auto rounded-lg max-w-screen-lg grid lg:grid-cols-2 md:grid-col-1 grid-col-1 sm:grid-col-1 ">
            <div className="  col-span-1">
              <div className=" p-2">
                <h6 className="font-popins text-sm font-bold text-purple-900">
                  Get in touch
                </h6>
                <h2 className="text-3xl mt-3 font-popins text-slate-900 font-bold ">
                  Send me a Message
                </h2>
                <p className="mt-4 font-montserrat text-slate-500 tex-base ">
                  Financial Consultant | Investment Adviser
                </p>

                {/* this is the image  */}
                <div className=" mx-auto mt-6 rounded-lg overflow-hidden max-w-[250px] h-[250px]">
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

// Backed by 9 years of hands-on experience as a licensed stockbroker and investment adviser, I’ve successfully guided clients through market highs and lows—earning trust while consistently delivering results. My work with some of the most respected firms in the United States has equipped me with the insight, precision, and strategic edge needed to help clients build and protect lasting wealth.
