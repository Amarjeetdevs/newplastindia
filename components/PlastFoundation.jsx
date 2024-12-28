"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";

// import {ScrollSmoother} from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/all";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

const PlastFoundation = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    panelsRef.current = gsap.utils.toArray(".item");

    gsap.registerPlugin(ScrollTrigger);

    const setScrollAnimation = () => {
      const isMobile = window.innerWidth <= 768;

      gsap.killTweensOf(panelsRef.current);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (isMobile) {
        // Vertical scrolling on mobile
        gsap.to(panelsRef.current, {
          yPercent: 0 * (panelsRef.current.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            pin: true,
            scrub: 2,
            snap: 1 / panelsRef.current.length,
            end: () => `+=${panelsRef.current.offsetHeight / 32},`,
          },
        });
      } else {
        // Horizontal scrolling on larger screens
        gsap.to(panelsRef.current, {
          xPercent: -10 * panelsRef.current.length,
          ease: "none",
          animation: "hidden",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top+=0%",
            pin: true,
            scrub: 0.5,
            // snap: 1,
            //  / (panelsRef.current.length - 1),
            end: () => `+=${containerRef.current.offsetWidth},`,
          },
        });
      }
    };
    setScrollAnimation();
    window.addEventListener("resize", setScrollAnimation);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", setScrollAnimation);
    };
  }, []);

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

  return (
    <div ref={containerRef} className="  ">
      <motion.div
        ref={ref}
        id="banner"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={{ duration: 1 }}
        className="  -mt-5  lg:mb-10 lg:mt-12 lg:px-10 "
        data-aos="fade-zoom-in"
      >
        <div className="hidden mx-2 lg:flex   justify-between">
          <div className=" md:mb-0">
            <h2
              style={{ fontSize: 42 }}
              className="text-[#3C3E3D] font-satoshi font-semibold"
            >
              The Plastindia Foundation
            </h2>
            <h3 className="text-xl text-[#3C3E3D] font-medium pb-8 font-satoshi">
              Our mission is both simple and profound:{" "}
              <strong>
                <span className="text-[#032624]">
                  Make the Indian plastic industry radiate as <br /> a symbol of
                  global sourcing base for plastic products.
                </span>
              </strong>
            </h3>
          </div>
          <div>
            <Link href={"/foundation"}>
              <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] mt-12  px-5 py-3 rounded-full border-2 border-[#042523] ">
                Learn more
                <span>
                  <ArrowOutwardIcon className="ml-12 text-white  w-4 h-4" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-4 lg:gap-10">
          <motion.div
            className="item   bg-[rgb(206,220,182)]  m-auto lg:m-0  lg:py-4 lg:flex flex-row relative"
            id="bgone"
          >
            <div className=" lg:w-96 flex mx-4 lg:mx-10 mb-4 lg:mb-12 flex-grow">
              <div className="">
                <h3 className="text-3xl text-[#3C3E3D] pt-5 lg:pt-20  font-semibold mb-2">
                  The Journey
                </h3>
                <p className="w-full  text-[#3C3E3D] md:text-lg text-md text-start pb-2">
                  Since 1987, Plastindia Foundation has been the driving force
                  <strong> uniting key players</strong> in the plastic industry,
                  fuelling
                  <strong> national progress</strong> through innovation. We
                  shape the future of plastics, where every exhibition marks a
                  new milestone in our journey of{" "}
                  <strong>growth and discovery.</strong>
                </p>
                <Link href={"/foundation"}>
                  <button className="lg:ml-3 ml-0 mt-4 lg:mt-10 bg-transparent font-satoshi text-md text-[#3C3E3D] px-8 lg:px-14 py-2 lg:py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <motion.div className="w-full lg:w-1/2 flex justify-center  items-center mt-4 lg:mt-0 p-4">
              <div className="relative w-96 h-[320px] mb-2 lg:w-[28em] lg:h-[28em] lg:right-5 mx-auto">
                <Image
                  src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/round_logo_b353399bef.webp'}
                  alt="Description of the image"
                  layout="fill"
                  // objectFit="center"
                  className="rounded-3xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="item bg-[#E8E6DD] m-auto lg:m-0  rounded-xl  lg:rounded-3xl  mb-20 py-4 lg:flex flex-row relative"
            id="bgtwo"
          >
            <div className=" lg:w-96 flex mx-4 lg:mx-10 mb-4 lg:mb-12 flex-grow">
              <div className="w-full">
                <h3 className="text-3xl text-[#3C3E3D] pt-5 lg:pt-20 font-semibold mb-2">
                  Vision & Mission
                </h3>
                <p className="w-full text-[#3C3E3D] pl-3 lg:pl-0 md:text-lg text-md text-start pb-2">
                  <ol>
                    <li className="mb-0 list-disc">
                      Plastindia Foundation will be an internationally
                      recognized organization devoted to promoting excellence in
                      the field of plastics, and making India a preferred
                      sourcing base in plastics products for the world.
                    </li>
                    <li className="mb-0 list-disc">
                      Our mission is to enhance the image and the growth of the
                      Indian Plastics Industry by holding world-class
                      exhibitions in India, at regular intervals.
                    </li>
                  </ol>
                </p>
                <Link href={"/foundation"}>
                  <button className="lg:ml-3 ml-0 mt-4 lg:mt-0 bg-transparent font-satoshi text-md text-[#3C3E3D] px-8 lg:px-14 py-2 lg:py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <motion.div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0 p-4">
              <div className="relative w-96 h-[340px]  lg:w-[28em] lg:h-[28em] lg:right-5 mx-auto">
                <Image
                  src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Mision_cd6991df9c.webp'}
                  alt="Description of the image"
                  layout="fill"
                  // objectFit="contain"
                  className="rounded-3xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="item  bg-[#E8EEE3] m-auto lg:m-0  rounded-xl  lg:rounded-3xl   py-4 lg:flex flex-row relative"
            id="bgthree"
          >
            <div className=" lg:w-96 flex mx-4 lg:mx-10 mb-4 lg:mb-12 flex-grow">
              <div className="w-full">
                <h3 className="text-3xl text-[#3C3E3D]  lg:pt-20 font-semibold mb-2">
                  Founder Members
                </h3>
                <p className="text-[#3C3E3D] md:text-lg text-md text-start pb-0">
                  We thrive through the collective heartbeat of many{" "}
                  <strong>passionate founder members.</strong> Dynamically
                  uniting organizations, associations. and agencies under one
                  umbrella, we build a <strong> community</strong> that
                  progresses plastics through{" "}
                  <strong>sustainable principles,</strong> making India a
                  preferred global sourcing base for{" "}
                  <strong>top-tier plastic products.</strong>
                </p>
                <Link href={"/about-members-association"}>
                  <button className="lg:ml-3 ml-0 lg:mb-0 mt-5  lg:mt-5 bg-transparent font-satoshi text-md text-[#3C3E3D] px-8 lg:px-14 py-2 lg:py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                    Members of PIF
                  </button>
                </Link>
              </div>
            </div>
            <motion.div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0 p-4">
              <div className="relative w-96 h-[320px]  lg:w-[28em] lg:h-[28em] lg:right-5 mx-auto">
                <Image
                  src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/founder_members_fcc35906b3.webp'}
                  alt="Description of the image"
                  layout="fill"
                  className="rounded-3xl object-cover"
                  
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlastFoundation;
