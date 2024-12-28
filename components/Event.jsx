"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import png1 from "../assets/WELCOME/1.png";
import png3 from "../assets/WELCOME/3.png";
import png4 from "../assets/WELCOME/4.png";
import png5 from "../assets/WELCOME/5.png";
import png6 from "../assets/WELCOME/6.png";
import png7 from "../assets/WELCOME/7.png";
import png8 from "../assets/WELCOME/8.png";
import png9 from "../assets/WELCOME/9.png";
import png10 from "../assets/WELCOME/10.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import imgicon from "../assets/TRADESHOW/Vector.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Event() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const hrRef1 = useRef(null);
  const textRef1 = useRef(null);
  const hrRef2 = useRef(null);
  const textRef2 = useRef(null);
  const [hrbg1, setHrbg1] = useState("#B0B0B0");
  const [hrbg2, setHrbg2] = useState("#3C3E3D");
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 0,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    panelsRef.current = gsap.utils.toArray(".boxes");
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const onUpdate = (self) => {
      const progress = self.progress;
      const maxColorValue = 150;

      const lightToDarkColor = `rgb(${210 + 8 * (1 - progress)},
     ${210 + 8 * (1 - progress)},
     ${210 + 8 * (1 - progress)})`;

      const darkToLightColor = `rgb(${100 + maxColorValue * (1 - progress)}, 
     ${100 + maxColorValue * (1 - progress)}, 
     ${100 + maxColorValue * (1 - progress)})`;

      // Update the state variables to change the colors dynamically
      setHrbg1(lightToDarkColor);
      setHrbg2(darkToLightColor);
    };

    if (!isMobile) {
      // Horizontal scrolling for desktop
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=1%",
          pin: true,
          scrub: 1,
          snap: 1 / (panelsRef.current.length - 1),
          end: () => `+=${containerRef.current.offsetWidth * 1.2}`,
          onUpdate,
        },
      });

      tl.to(panelsRef.current, {
        xPercent: -100 * (panelsRef.current.length - 1),
        ease: "none",
      }).addPause("+=0.1"); // Add a pause after the animation
      // .call(() => {
      //   setTimeout(() => {
      //     tl.play();
      //   }, 50); // Resume the timeline after 0.25 seconds
      // });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      className=" lg:mb-2 px-2 lg:px-0  mt-10 mb-10   lg:mt-10 "
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div
        ref={containerRef}
        className="px-0 lg:px-8 lg:mt-0 lg:-mb-0 -mb-5 gap-8  lg:flex"
      >
        <div className="w-full pt-4  lg:w-1/2 ">
          <h2
            // style={{ fontSize: 40 }}
            className="relative ml-3 top-5 lg:ml-0 text-xl sm:text-xl  lg:text-7xl xl:text-5xl 2xl:text-5xl  leading-tight font-satoshi text-[#3C3E3D]"
          >
            Event Highlights & <br /> Engagements 2023
            <span>
              <Image
                src={imgicon}
                alt="Not Found"
                className="lg:w-6 w-3 h-3 lg:h-6 relative -right-[9em] -top-5 lg:-right-[9.2em] lg:-top-8"
              />
              {/* <ArrowOutwardIcon className="rotate-90 ml-5 font-thin bg-slate-700 m-3 w-[20em] h-[20em]" /> */}
            </span>
          </h2>
          <div className="">
            <div className="lg:hidden flex flex-col  mt-3 gap-2 p-2">
              <div className="flex-1 h-96 w-full rounded-3xl bg-[#CEDCB6]">
                <div className="py-2 px-5">
                  <h3 className="text-3xl text-[#3C3E3D] font-satoshi-bold font-bold">
                    +300
                  </h3>
                  <h3
                    style={{ fontWeight: 8 }}
                    className="text-xl  text-[#3C3E3D] font-satoshi"
                  >
                    Buyer-Seller <br /> Meeting
                  </h3>
                </div>
                <h4 className="text-sm w-full text-[#686868]  px-5 py-4">
                  Buyer-seller meetings at PlASTINDIA 2023 were fruitful,
                  driving impactful partnerships in plastics.
                </h4>
              </div>

              <div className="flex-1 h-[400px] w-full rounded-3xl bg-[#E8E6DD]">
                <div className="py-2 px-5">
                  <h3 className="text-3xl text-[#3C3E3D] font-satoshi-bold font-bold">
                    +3.6 Lakhs
                  </h3>
                  <h3
                    style={{ fontWeight: 8 }}
                    className="text-xl  text-[#3C3E3D] font-satoshi"
                  >
                    Footfall
                  </h3>
                </div>
                <h4 className="text-sm w-full text-[#686868]  px-5 pb-6 py-10">
                  PlASTINDIA 2023 saw a large number of diverse exhibitors &
                  visitors, driving growth & business.
                </h4>
              </div>

              <div className="flex-1 h-72 rounded-3xl bg-[#CECECE]">
                <div className="py-2 px-5">
                  <h3 className="text-3xl text-[#3C3E3D] font-satoshi-bold font-bold">
                    +30
                  </h3>
                  <h3
                    style={{ fontWeight: 10 }}
                    className="text-xl text-[#3C3E3D] font-satoshi"
                  >
                    Participating <br />
                    Countries
                  </h3>
                </div>
                <h4 className="text-sm w-full text-[#686868] px-5 py-6">
                  Global participation soared at PLASTINDIA 2023, showcasing a
                  diverse array of countries.
                </h4>
              </div>
              <div className="flex-1 h-72 rounded-3xl bg-[#032624]">
                <div className="py-2 px-5">
                  <h3 className="text-3xl mt-2 text-white font-satoshi-bold font-bold">
                    +1800
                  </h3>
                  <h3
                    style={{ fontWeight: 10 }}
                    className="text-xl text-white font-satoshi"
                  >
                    Exhibitors
                  </h3>
                </div>
                <h4 className="text-sm w-full text-white px-5 py-10">
                  Exhibitors at PLASTINDIA 2023 showcased industry-leading
                  innovations.
                </h4>
              </div>
            </div>
          </div>

          <Image
            src={
              'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Subtract_3a0aca0323.png'
            }
            alt="Event Image"
            height={1000}
            width={1000}
            style={{ width: 650 }}
            className="w-full h-auto relative hidden lg:block left-0 bottom-14"
          />
        </div>
        <div className="w-1/2 pt-24">
          <div className="hidden lg:flex md:mr-2 lg:mr-6 items-center">
            <hr
              ref={hrRef1}
              style={{ backgroundColor: hrbg1 }}
              className="flex-1  py-1 rounded-md "
            />
            <span
              ref={textRef1}
              className="mx-8 text-3xl font-satoshi font-semibold text-gra-600"
            >
              01
            </span>
            <hr
              ref={hrRef2}
              // style={{ backgroundColor: hrbg1  }}
              style={{ backgroundColor: hrbg2 }}
              className="flex-1 py-1  mr-1 rounded-md "
            />
            <span
              ref={textRef2}
              className="ml-4 mr-4 text-3xl font-satoshi font-semibold text-gray-400"
            >
              02
            </span>
          </div>
          <div className="hidden  lg:flex lg:justify-between pr-20 mt-4 gap-2">
            <Image
              // src={imge2}
              src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Inaugaration_2_a8e933bf73.webp'}
              alt="Event Image"
              height={100}
              width={500}
              className="mr-1 h-36 w-full rounded-[30px] object-cover"
            />
            <Image
              // src={imge3}
              src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Inaugration_3_610b076fcc.webp'}
              alt="Event Image"
              height={300}
              width={1000}
              id=""
              className="ml-6 h-36 scale-x-110   bg-black rounded-[30px] object-cover"

            />
          </div>
          <div
            style={{
              width: 1400,
              height: 480,
              backgroundImage: "none",
            }}
            className="hidden lg:flex  overflow-hidden  gap-10"
          >
            <div
              className="boxes flex w-full  mb-8 justify-center gap-4"
              style={{
                flex: "0 0 auto",
                maxWidth: "710px",
                zIndex: 2,
              }}
            >
              <div
                id="boxbgsamll"
                className="flex-1 mt-8 rounded-2xl bg-[#CEDCB6]"
              >
                <div className="py-2 px-5">
                  <h3 className="text-5xl text-[#3C3E3D] font-satoshi-bold font-bold">
                    +1800
                  </h3>
                  <h3
                    style={{ fontWeight: 12 }}
                    className="text-2xl text-[#3C3E3D] font-satoshi"
                  >
                    Exhibitors
                  </h3>
                </div>
                <h4 className="text-lg w-full text-[#686868] px-5 pt-48">
                  Exhibitors at PLASTINDIA 2023 showcased industry-leading
                  innovations.
                </h4>
              </div>
              <div className="flex-1  rounded-b-xl mb-1 mt-8 mr-8">
                <div
                  style={{
                    clipPath: "ellipse(65% 110% at 50% 0%)",
                  }}
                  className="h-1/2 rounded-t-2xl  z-50 bg-[#E8E6DD]"
                >
                  <div className="relative left-8 opacity-75 top-8 -space-x-3 rtl:space-x-reverse">
                    {[
                      png1,
                      png3,
                      png4,
                      png5,
                      png6,
                      png7,
                      png8,
                      png9,
                      png10,
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="avatar ring-2 ring-white rounded-full "
                      >
                        <div className="w-10 h-10">
                          <Image src={image} alt={`image-${index}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-4xl font-satoshi-bold  text-[#3C3E3D] pt-8 pl-6 font-bold">
                    +3,60,000
                  </h3>
                  <h3 className="font-satoshi-medium pl-12  text-[#3C3E3D] text-2xl">
                    Footfalls
                  </h3>
                </div>
                <div
                  style={{
                    clipPath: "ellipse(65% 110% at 50% 100%)",
                  }}
                  className=" rounded-b-3xl -z-50  bg-[#E8E6DD]"
                >
                  <h3
                    style={{}}
                    className="text-[#3C3E3D] font-satoshi text-lg pt-[88px] pb-10 -mt-[2px]  px-5"
                  >
                    PLASTINDIA 2023 saw a large number of diverse exhibitors &
                    visitors, driving growth & business.
                  </h3>
                </div>
              </div>
            </div>
            <div
              className="boxes flex w-full  mb-8 -ml-9 justify-center gap-4"
              style={{
                flex: "0 0 auto",
                maxWidth: "710px",
                zIndex: 2,
              }}
            >
              <div
                id="boxbgsamllempty"
                className="flex-1 mt-8 rounded-2xl bg-[#CECECE]"
              >
                <div className="py-8  px-5">
                  <h3 className="text-5xl text-[rgb(60,62,61)] font-satoshi-bold font-bold">
                    +79
                  </h3>
                  <h3
                    style={{ fontWeight: 12 }}
                    className="text-2xl text-[#3C3E3D] font-satoshi"
                  >
                    Participating <br />
                    Countries
                  </h3>
                </div>
                <h4 className="text-lg w-full text-[#686868] px-6 pb-10 pt-24">
                  Global participation soared at PLASTINDIA 2023, showcasing a
                  diverse array of countries.
                </h4>
              </div>
              <div className="flex-1  mt-8 mr-8">
                <div
                  style={{
                    clipPath: "ellipse(65% 110% at 50% 0%)",
                  }}
                  id="boxbgsamlltop"
                  className="h-1/2 rounded-b-3xl rounded-t-2xl bg-[#032624]"
                >
                  <h3 className="text-5xl font-satoshi text-[#FFFFFF] bold pt-5 pl-8 font-bold">
                    +300
                  </h3>
                  <h3 className="font-satoshi-medium pl-14 text-[#FFFFFF] text-2xl">
                    Buyer-Seller <br /> meeting
                  </h3>
                </div>
                <div
                  style={{
                    clipPath: "ellipse(65% 110% at 50% 100%)",
                  }}
                  className="h-1/2 rounded-b-3xl -mt-[2px]  bg-[#032624]"
                >
                  <h3 className="text-[#686868]  font-satoshi  text-lg pt-16 pb-10 pl-10">
                    Buyer-seller meetings at PLASTINDIA 2023 were fruitful,
                    driving impactful partnerships in plastics.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
