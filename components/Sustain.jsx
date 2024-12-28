"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import plntimg from "../assets/SUSTAINABILITY/IMAGE.png";
import textimg from "../assets/SUSTAINABILITY/SPOTLIGHT.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";
export default function Sustain() {
  const controls = useAnimation();


  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
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
      offset: 100,
      duration: 500,
      easing: "zoom-out-up",
      once: true,
    });
  }, []);
  return (
    <motion.div
      className=" -inset-0  h-screen flex lg:pb-16  bg-[#FBFBFB] "
      initial="hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      ref={ref}
      id="bgmap"
    >
      <div className="px-6 mt-12 lg:mt-0 lg:-mb-0 -mb-20 lg:px-16 pt-10 pb-12">
        <div className="flex flex-col  lg:flex-row">
          
          <div className="  lg:w-1/2 ">
          <h2 className="block  lg:hidden text-lg font-satoshi-medium  mb-1">
              SUSTAINABILITY SPOTLIGHT
            </h2>

            <h2
              // style={{ fontSize: 40 }}
              className="leading-10 block text-2xl lg:hidden  font-satoshi-medium  mb-4"
            >
              Redefining Plastics: Problem to <br />
              Potential
            </h2>
            <Image
              src={plntimg}
              alt="SUSTAINABILITY"
              // style={{ width: 800, height: 670 }}
              className="rounded-3xl lg:w-[40em] lg:h-[42em]  "
            />
            <div id="sustain-rotating-img">
              <Image src={textimg} alt="TEXT IMAGE" width={200} height={200} />
            </div>
          </div>

          <div className="lg:w-1/2  lg:mt-10 mt-0 -ml-4 lg:pt-32 px-4 pt-5 lg:pl-12">
            <h2 className="hidden lg:block text-lg font-satoshi-medium  mb-2">
              SUSTAINABILITY SPOTLIGHT
            </h2>

            <h2
              // style={{ fontSize: 40 }}
              className="leading-10 hidden lg:text-3xl lg:block font-satoshi-medium  mb-4"
            >
              Redefining Plastics: Problem to 
              Potential
            </h2>

            <p className="font-satoshi-medium   text-md mb-4">
              Plastic is a material of{" "}
              <strong>immense utility and potential</strong> but also poses
              significant environmental challenges. The Plastindia Foundation is
              committed to{" "}
              <strong>
                transforming its impact through sustainable practices.
              </strong>{" "}
              <br />
              <br />
              We envision a future where plastic stands for progress and
              possibilities without compromising our planet&apos;s health. By
              investing in innovative recycling technologies, conducting{" "}
              <strong>
                educational programs, advocating for supportive policies
              </strong>
              , and fostering research and development, we aim to harmonize
              plastic use with sustainability.
              <br />
              <br />
              {/* At Plastindia,{" "}
              <strong>
                we turn plastic from a problem into a powerful potential for a
                sustainable world.
              </strong> */}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
