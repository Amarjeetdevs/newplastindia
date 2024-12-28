"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import img2 from "../assets/BLOGS/Rectangle 9-1.png";
import img1 from "../assets/BLOGS/Rectangle 9-2.png";
import img3 from "../assets/BLOGS/Rectangle 9.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function IndustryInsight() {
  const [isHovered, setIsHovered] = useState(true);
  const [isHoveredRb, setIsHoveredRb] = useState(true);
  const [isHoveredRt, setIsHoveredRt] = useState(true);

  const textHoverRef = useRef(null);
  const textHoverRefRb = useRef(null);
  const textHoverRefRt = useRef(null);
  const firstBoxRef = useRef(null);
  const  containerRef = useRef(null)
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnterRb = () => {
    setIsHoveredRb(true);
  };
  const handleMouseEnterRt = () => {
    setIsHoveredRt(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveRb = () => {
    setIsHoveredRb(true);
  };
  const handleMouseLeaveRt = () => {
    setIsHoveredRt(true);
  };

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

  useEffect(() => {
    const container = containerRef.current;
    const firstBox = firstBoxRef.current; 
  
    gsap.set(firstBox, { y: '50%' });
  
    gsap.to(firstBox, {
      y: 0,
      ease: "power3.out",
      duration: 5, 
      scrollTrigger: {
        trigger: firstBox,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  }, []);
  

  return (
    <motion.div
      className="px-4 lg:px-12 mt-2  justify-center "
      initial="hidden"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div 
      ref={containerRef}
      className=" ">
        <div className="my-5 hidden  pb-6 lg:flex items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2
              style={{ fontSize: 40 }}
              className="font-satoshi-medium text-right "
            >
              Industry Insight
            </h2>
          </div>
          <button className="bg-[#042523]  text-md font-semibold text-[#FFFFFF]  px-16 py-4  rounded-full ">
            View all
            <span>
              <ArrowOutwardIcon className="ml-4 text-white  w-5 h-5" />
            </span>
          </button>
        </div>

        <div className="flex  flex-col lg:flex-row gap-4">
          <div
  ref={firstBoxRef}

            // id="bigdiv"
            className="lg:w-1/2 hidden   bg-[#EAEAEA] rounded-2xl lg:flex lg:flex-col flex-row-reverse sm:hidden  overflow-hidden"
          >
            <Image
              src={img1}
              width={700}
              alt="Not found"
              className="p-5 "
            />
            <div
              className={`  flex flex-col lg:flex-col justify-center items-start  text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000  ${
                isHovered ? "text-[#3C3C3C]" : "text-[#EAEAEA]"
              }`}
              ref={textHoverRef}
            >
             <div>
             <h3 className="text-md ml-5 mt-2 font-semibold">
                PLASTINDIA 2023: Why it was a success?
              </h3>
            </div>
            <h3 className="hidden lg:block text-start text-[#3C3C3C] text-sm lg:pl-5 ">
              PLASTINDIA 2023 was a game-changer for the plastics industry. With
              thousands of global exhibitors,
              <br />
              PLASTINDIA 2023 set new benchmarks, transforming the future of
              plastics.
            </h3>
            <h3 className="text-md font-semibold mt-4">
              <span>
                <CalendarMonthIcon className="h-12 mb-2 mr-2 ml-5" />
              </span>
              April 25, 2024
            </h3>
             </div>
          </div>

          <div className="lg:w-1/2  mt-10 lg:mt-0 gap-y-4 flex flex-col">
        
         
            <div className="flex-1  bg-[#EAEAEA] m-1  rounded-2xl">
              <div className="flex justify-between items-center">
                <div
                  className={`flex justify-start items-center text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 
                }`}
                >
                  <div className="flex-grow">
                    {" "}
                    <Image
                      src={img2}
                      alt="Not found"
                      width={350}
                      className="p-4 sm:w-[20.5em]"
                    />
                  </div>
                  <div>
                    <h3
                      className={`flex justify-start items-center mt-5 mb-5 font-satoshi font-semibold text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 ${
                        isHoveredRt ? "text-gray-800" : "text-gray-100"
                      }`}
                      ref={textHoverRefRt}
                    >
                      Smart Plastics: Polymers meet <br /> &quot;Iot&quot;
                    </h3>{" "}
                    <h3 className="hidden lg:block text-sm">
                      In today&apos;s tech-driven world, the fusion of smart{" "}
                      <br /> plastics and IoT is sparking groundbreaking <br />{" "}
                      innovations. Curious to know more? Keep reading!
                    </h3>
                    <h3 className=" text-md font-semibold text-start   ">
                      <span>
                        <CalendarMonthIcon className="h-12 mb-2 mr-2 " />
                      </span>
                      April 25, 2024
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-[#EAEAEA]  rounded-2xl">
              <div className="flex justify-between items-center">
                <div
                  className={`flex justify-start items-center text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 
                }`}
                >
                  <div className="flex-grow">
                    {" "}
                    <Image
                      src={img3}
                      alt="Not found"
                      width={335}
                      className="p-4  "
                     
                    />
                  </div>
                  <div>
                    <h3
                      className={`flex justify-start text-md font-semibold mb-5 mt-4  items-center text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 ${
                        isHoveredRb ? "text-gray-800" : "text-[#EAEAEA] "
                      }`}
                      ref={textHoverRefRb}
                    >
                      Plastic in sustainability: A <br /> chalanging possibility
                    </h3>{" "}
                    <h3 className="text-sm hidden lg:block">
                      Discover how plastics are not just part of the <br />{" "}
                      problem, but a significant part of the solution in our{" "}
                      <br /> sustainable energy journey.
                    </h3>
                    <h3 className="text-sm font-semibold text-start  ">
                      <span>
                        <CalendarMonthIcon className="h-12 mb-2 mr-2 " />
                      </span>
                      April 25, 2024
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#042523] lg:hidden block text-md text-white px-4 py-4 my-4 rounded-full  border-2">
          Read More
          <span>
            <ArrowOutwardIcon className="ml-2 text-white  w-5 h-5" />
          </span>
        </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
