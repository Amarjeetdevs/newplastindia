"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import trdshow from "../assets/TRADESHOW/IMG_4403.jpg";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./tradeshowStyle.css";
import icon1 from "../assets/TRADESHOW/iconamoon_arrow-up-1 (1).png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import "./styles.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { StopRounded } from "@mui/icons-material";
import Link from "next/link";
export default function TradeShow() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
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
      offset: 300,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  useEffect(() => {
    panelsRef.current = gsap.utils.toArray(".slider");
    gsap.registerPlugin(ScrollTrigger);
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=0%",
          pin: true,
          scrub: 1,
          // snap: 1 / (panelsRef.current.length - 1),
          end: () => `+=${containerRef.current.offsetWidth}`,
        },
      });

      tl.to(panelsRef.current, {
        xPercent: -37.5 * panelsRef.current.length,
        ease: "none",
      }).addPause("+=0.01");
      // .call(() => {
      //   setTimeout(() => {
      //     tl.play();
      //   }, 100);
      // });

      gsap.to(panelsRef.current[0], {
        opacity: 0.7,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=15%",
          end: "bottom top",
          scrub: true,
        },
      });
    } else {
      // gsap.to(containerRef.current, {
      //   yPercent:  1 / (panelsRef.current.length  ),
      //   ease: "fadein",
      //   animation: "hidden",
      //   scrollTrigger: {
      //     trigger: panelsRef.current,
      //     start: "top top+=4%",
      //     pin: true,
      //     scrub: 1,
      //     snap:1,
      //     snap: 1 / (panelsRef.current.offsetWidth),
      //     end: () => `+=1000px`,
      // },
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className=" lg:mb-0 mt-0   z-10 bg-[#FBFBFB] "

      // ref={ref}
    >
      <div className="">
        <div className="flex flex-col mb-10 lg:flex-row">
          <div className="  lg:h-full lg:w-5/12   pl-0 lg:pl-9">
            <Image
              src={trdshow}
              alt="TRADESHOW"
              className=" lg:rounded-[20px] lg:object-cover object-cover  pb-2 my-0 lg:my-1 lg:pb-0  w-full h-[20em] lg:w-full lg:h-[750px]  "
            />
          </div>
          <div className="w-full lg:order-2  lg:w-7/12 px-6 lg:px-0 lg:pl-8">
            <div className=" my-7  mb-14 lg:mb-0 lg:my-0 lg:pr-14 ">
              <h2 className="font-satoshi text-[28px] py-4 lg:py-0 lg:text-[41px] font-semibold   lg:mt-3   text-[#3C3E3D]">
                PLASTINDIA 2026
              </h2> <strong>  </strong>
              <p className="text-md font-medium  mb-4 text-[#3C3E3D]">
                PLASTINDIA 2026, themed &apos;Bharat Next&apos;, provides exhibitors with
                an arena to present ground-breaking innovations in processing
                machinery, moulds and dies, auxiliary equipment, raw materials,
                finished products and more. The &apos;Bharat Next&apos; theme envisions
                growth across all sectors, driving the expansion of the plastics
                industry. This event not only shall keep attendees abreast of
                industry advancements but also create rich networking
                opportunities for valuable connections. 
                It will be held in Bharat Mandapam Convention Center,a world-class facility having a gross area of 5,40,000 Sq. Mtr.

              </p>
              {/* <p className="text-md font-medium  mb-4 text-[#3C3E3D]">
             </p> */}
            </div>
            <hr className="hidden lg:block  my-2 border-t-2 rounded-md border-gray-300" />

            <div className="hidden lg:flex lg:items-center py-4">
              <div className="flex flex-col">
                <h3 className="text-xl text-[#3C3E3D] ">
                  Date<strong> - 5th-10th Feb 2026</strong>
                </h3>
                <h3 className="text-xl text-[#3C3E3D]">
                  Location
                  <strong> - Bharat Mandapam, Delhi, India</strong>
                </h3>
              </div>

              <div className=" lg:ml-10 ">
                <Link href={"/tradeshow"}>
                  <button className="bg-[#042523] ml-4 text-md font-semibold text-[#FFFFFF]  px-5 py-4 rounded-full border-2 border-[#042523] ">
                    Learn more
                    <span>
                      <ArrowOutwardIcon className="ml-20 text-white  w-4 h-4" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div
              id="trde-box"
              className="flex  lg:flex-row flex-col mt-5 lg:-mx-64 overflow-hidden gap-8 "
            >
              <div
                id="trde-crd"
                className="card slider  text-[#3C3E3D] bg-[#E8E6DD]  "
              >
                <div className=" px-4 lg:px-8  lg:pt-10">
                  <h2 className="card-title  lg:text-2xl  mt-5">Exhibitors</h2>

                  <p className="text-md   lg:pl-0 lg:text-md leading-6  mt-4   text-start">
                    PLASTINDIA 2026 will host over{" "}
                    <strong>2000 exhibitors</strong>. {" "}Each exhibitor – a master of
                    their craft in the plastics industry, bringing their best to
                    the forefront. Gear up to{" "}
                    <strong>experience the brilliance</strong> and expertise of
                    these <strong>international leaders</strong> as they drive
                    the future of plastics.
                  </p>
                  <div className="card-actions justify-end">
                    {/* <ArrowOutwardIcon className="relative -top-5 text-[#989793] bg-red-500 w-[10em] h-[10em] h28 ml-5 lg:mb-16 " /> */}
                    <Link href={"/exhibit"}>
                      <Image
                        src={icon1}
                        alt="Not found"
                        className="  w-[8em] h-[8em] -mt-5 object-contain "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                id="trde-crd"
                className="card  slider bg-[#CEDCB6] text-[#3C3E3D] "
              >
                <div className=" px-4 lg:px-8  lg:pt-10">
                  <h2 className="card-title  lg:text-2xl  mt-5">Visitors</h2>

                  {/* <h2 className="card-title lg:text-2xl  mt-5">    </h2> */}

                  <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                    Be a part of the phenomenal PLASTINDIA 2026! Witness
                    <strong>
                      {" "}
                      groundbreaking innovations, connect with global leaders,
                    </strong>{" "}
                    and <strong>explore cutting-edge technologies</strong> that
                    are shaping the future of plastics. Join lakhs of{" "}
                    <strong>visitors from around the world</strong> and
                    experience the progress of the plastics industry. 
                  </p>
                  <div className="card-actions justify-end">
                    {/* <ArrowOutwardIcon className="relative  text-[#989793]  w-28 h-28 ml-5 lg:mb-16 " /> */}
                    <Link href={"/visit"}>
                      <Image
                        src={icon1}
                        alt="Not found"
                        className="  w-[8em] h-[8em]  object-contain "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                id="trde-crd"
                className="card slider bg-[#E8EEE3] text-[#3C3E3D]"
              >
                <div className=" px-4 lg:px-8  lg:pt-10">
                  <h2 className="card-title lg:text-2xl  mt-5">
                    Concurrent Events
                  </h2>

                  <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                    At PLASTINDIA 2026,{" "}
                    <strong>engage in dynamic Concurrent Events</strong> like
                    the <strong>Reverse Buyer-Seller Meet</strong> for strategic
                    international connections, insightful <strong>International
                    Conferences</strong> with expert discussions, and the{" "}
                    <strong>CEO Meet</strong> for top executives to exchange
                    ideas and explore opportunities.
                  </p>
                  <div className="card-actions justify-end">
                    <Link href={"/brewing-soon"}>
                      <Image
                        src={icon1}
                        alt="Not found"
                        className="  w-[8em] h-[8em]  object-contain "
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href={"/tradeshow"}>
              <button className="bg-[#042523] w-full my-10 mb-20 lg:hidden block text-md text-white px-4 py-4  rounded-full  border-2">
                Learn More
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white  w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
