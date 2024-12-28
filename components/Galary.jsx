"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
export default function Gallery() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
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
      offset: 300,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);
  return (
    <motion.div
      className=" inset-0 px-6 lg:h-screen lg:mb-44 lg:px-10 lg:flex  flex-col "
      initial="hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="lg:pb-12">
        <div className="lg:my-0  ">
          <div className="lg:mt-4 md:mt-0">
            <div className="flex lg:flex-row flex-col items-center justify-between">
              <div>
                <h2 className=" text-nowrap text-3xl lg:text-[42px] font-satoshi-medium mb-1 pt-5">
                  Legacy in Focus
                </h2>
                <h3 className="text-md  pt-2 text-[#3C3E3D] lg:mb-8">
                  Relive the milestones of past expos through{" "}
                  <strong>a lens of innovation </strong>and industry. See how
                  each event sets <br /> the stage for the next big{" "}
                  <strong>breakthrough in plastics.</strong>
                </h3>
              </div>
              <Link href={"/photos-and-videos"}>
                <button className="bg-[#042523]  text-md mb-5 lg:mb-0 mt-5 font-semibold text-[#FFFFFF]  px-7 py-4  rounded-full ">
                  View all
                  <span>
                    <ArrowOutwardIcon className="lg:ml-24 text-white  w-5 h-5" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div
          // id="galary-grid"
          className="flex lg:grid lg:grid-rows-3  items-center  flex-row  w-full h-full   lg:px-0 gap-0 whitespace-nowrap"
        >
          <div className="flex   flex-col lg:flex-row lg:w-full  gap-5">
            <div className="flex flex-row lg:flex-col h-[14em] w-full lg:h-full gap-5 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden scrollbar-hide">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_102_2_d22487ea67.png"
                }
                alt="Not found"
                width={500}
                height={500}
                className="w-full object-contain "
              />
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/2012_8f8c8e4b2c.JPG"
                }
                alt="Not found"
                width={500}
                height={500}
                className="w-full object-contain "
              />
            </div>

            <div className="w-full h-full scale-y-105 lg:mt-2">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_111_b498fdec08.png"
                }
                alt="Not found"
                width={500}
                height={500}
                className="w-full object-contain lg:h-full  "
              />
            </div>

            <div className="flex flex-row lg:flex-col h-[14em] lg:w-full lg:h-full gap-5 overflow-x-auto overflow-y-hidden lg:overflow-x-hidden scrollbar-hide">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/2018_fba8c4460a.JPG"
                }
                alt="Not found"
                width={500}
                height={500}
                className="w-full object-contain "
              />
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/2015_0cd28f5ab3.jpg"
                }
                alt="Not found"
                width={500}
                height={500}
                className="w-full object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
