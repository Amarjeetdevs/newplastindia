"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo1 from "../assets/logo 1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageCarousel from "./ImageCarasual";

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, },
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
      once: false,
    });
  }, []);

  return (
    <motion.div
      className="inset-0  flex flex-col justify-center items-center relative"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      // transition={{ duration: 0.001 }}
      ref={ref}
    >
      <div className="absolute  top-0 left-0 right-0 h-full">
        <div className="h-24 -z-50 bg-gradient-to-b from-[#E6E6E6] to-[#FBFBFB]"></div>
      </div>
      <section className="flex   flex-col-reverse lg:flex-row  py-12 ">
        <div className="absolute z-0 -bottom-2" id="bgimghero" />
        <div className="lg:w-2/3  px-6 lg:px-0 pl-1 lg:pl-10 ">
          <Image
            src={logo1}
            alt="LOGO"
       
            className=" lg:mt-28 w-[14em] relative  mt-2 mt -left-2"
          />
          <div className=" px-2 lg:px-0 lg:relative bottom-4">
            <h1 className="text-4xl  lg:text-6xl pt-2 font-satoshi leading-tight text-[#302C7D] ">
              Progressing Plastics.
            </h1>
            <h1 className="text-4xl  lg:text-6xl font-satoshi text-[#302C7D] ">
              Exhibiting Excellence.
            </h1>

            <p className="lg:text-xl md:text-lg text-md  text-start  leading-7 pt-5  font-medium text-[#3C3C3C] ">
              Fostering a global ecosystem of quality, sustainability, and
              innovation in plastics, led by India&apos;s strategic
              advancements.
            </p>

            <button className="ml-3 mt-10 z-0 bg-none lg:bg-white font-satoshi-bold md:text-md  lg:text-lg text-[#383690] text-sm px-5 py-2 lg:px-16 lg:py-3 rounded-full font-semibold border-2  border-[#383690] hover:border-[#3C3E3D]  hover:bg-[#3C3E3D] duration-700 hover:text-white">
              Explore PLASTINDIA
            </button>
          </div>
          <div />
        </div>

        <ImageCarousel />
      </section>
    </motion.div>
  );
};

export default HeroSection;
