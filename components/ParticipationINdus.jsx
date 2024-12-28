"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

import { industries, industries0 } from "../app/data/industriesData";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ParticipationINdus = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const panelsRef = useRef([]);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  const handleMouseEnter = (index) => {
    setHoveredSlide(index);
  };

  const handleMouseLeave = () => {
    setHoveredSlide(null);
  };

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
      panelsRef.current = gsap.utils.toArray(".item");

      gsap.to(panelsRef.current, {
        xPercent: -81 * panelsRef.current.length,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=0%",
          pin: true,
          scrub: 3,
          end: () => `+=${containerRef.current.offsetWidth * 7}`,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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

  const handleIconClick = () => {
    const containerBottom =
      containerRef.current.getBoundingClientRect().bottom + window.scrollY;
    gsap.to(window, { duration: 1, scrollTo: containerBottom });
  };

  return (
    <>
        <div className="flex flex-col items-start   lg:hidden bg-[#032624]">
      <div className=" flex px-6 flex-col">
        <h2 className="text-2xl pt-16   text-white font-bold py-4">
          PARTICIPATING INDUSTRIES
        </h2>
        <h3 className="text-md mb-4 flex text-start text-gray-100 font-normal md:text-sm lg:text-base max-w-4xl">
          At PLASTINDIA trade show, global industries unite to celebrate
          groundbreaking plastic innovations. Leaders from healthcare,
          automotive, aerospace, construction, renewable energy, food and
          beverage, electronics, textiles, water management, agriculture, and a
          plethora of other industries will showcase how plastics drive
          innovation, efficiency, and sustainability.
        </h3>
      </div>

      <motion.div className="w-full bg-[#032624] overflow-x-scroll scrollbar-hide">
  <div className="flex gap-4 px-6">
    {industries0.map((industry, index) => (
      <div
        key={index + 1} 
        className="flex-shrink-0"
        onMouseEnter={() => setHoveredSlide(index + 1)} 
        onMouseLeave={handleMouseLeave}
        // style={{ width: "40vw" }}
      >
        <div className="relative mt-10 w-[80vw] mr-4 h-[18em] mb-14">
          <Image
            src={industry.image}
            alt={industry.name}
            // layout="fill"
            width={400}
            height={300}
            className="object-cover mr-8 w-[400px] h-[300px]"
          />
          <div className="absolute bottom-8 flex items-center justify-center">
            <h3
              className="text-white font-extrabold text-2xl"
            >
              {industry.name}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>


    </div>
      <div ref={containerRef}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          transition={{ duration: 1 }}
          className="bg-[#032624] hidden lg:flex h-screen relative"
          data-aos="fade-zoom-in"
        >
          <div id="industryImage" className="flex gap-8">
           

            <motion.div>
              <div
                className="-ml-10 flex mt-20 lg:mt-[130px] items-center justify-center "
                style={{
                  backgroundColor: "transparent",
                  // marginTop: 130,
                }}
              >
                {industries.map((industry, index) => {
                  const isMobile = window.matchMedia("(max-width: 767px)").matches;
             

                  // Conditionally skip rendering the first slide on mobile
                  if (isMobile && index === 0) {
                    return null;
                  }
                
                  const marginLeft = !isMobile && index === 1 ? "1200px" : "0";
                
                  return (
                    <div
                      key={index}
                      className="item"
                      id="industry-prtp-img"
                      style={{
                        marginTop: 50,
                        flexShrink: 0,
                        marginRight: index === industries.length - 1 ? "800px" : "0",
                        marginLeft: marginLeft,
                        position: "relative",
                      }}
                    >
                      {index === 0 ? (
                        <motion.div
                          className="text-content lg:block sm:hidden"
                          initial={{ opacity: 0.8, scale: 0.8 }}
                          animate={{
                            opacity: inView ? 1 : 0.8,
                            scale: inView ? 1.1 : 0.8,
                          }}
                          transition={{ duration: 2 }}
                        >
                          <div className="flex w-44 h-80 lg:ml-64 lg:w-[63em] lg:h-[30em] flex-col justify-center items-center">
                            <h2 className="text-7xl text-white font-bold py-4">
                              PARTICIPATING INDUSTRIES
                            </h2>
                            <h3 className="text-xs text-gray-100 font-normal md:text-sm lg:text-md max-w-3xl px-10 text-center">
                              At PLASTINDIA 2026, global industries unite
                              to celebrate groundbreaking plastic innovations.
                              Leaders from healthcare, automotive, aerospace,
                              construction, renewable energy, food and beverage,
                              electronics, textiles, water management,
                              agriculture, and a plethora of other industries will
                              showcase how plastics drive innovation, efficiency,
                              and sustainability.
                            </h3>
                          </div>
                        </motion.div>
                      ) : (
                        <div
                          onMouseEnter={() => setHoveredSlide(index)}
                          onMouseLeave={() => setHoveredSlide(null)}
                          className="relative"
                        >
                          <div className="relative lg:w-[28em] lg:h-[28em] w-80 h-80 lg:mt-0 mt-80 ">
                            <Image
                              src={industry.image}
                              alt={industry.name}
                              // fill
                              width={348}
                              height={300}
                              className="object-contain lg:px-0 "
                            />
                          </div>
                          <div className="absolute inset-0 -bottom-36 left-6 justify-start overflow-hidden">
                            <h3
                              className={`text-white font-extrabold text-2xl lg:text-5xl absolute bottom-56 left-0 right-45 z-10 transition-transform duration-1000 ${
                                hoveredSlide === index
                                  ? "-translate-y-28"
                                  : "-translate-y-0"
                              }`}
                            >
                              <span className="uppercase pb-16">
                                {industry.name}
                              </span>
                              <div
                                className={`absolute inset-0 w-full bg-opacity-50 opacity-0 transition-opacity duration-800 ${
                                  hoveredSlide === index
                                    ? "opacity-100"
                                    : "opacity-0"
                                } flex flex-col text-center z-0 transform ${
                                  hoveredSlide === index
                                    ? "translate-y-20"
                                    : "translate-y-full"
                                }`}
                              >
                                <span
                                  style={{ width: "450px" }}
                                  className="text-white pb-4 text-xl text-start"
                                >
                                  {industry.title}
                                </span>
                                <span
                                  style={{ width: "450px" }}
                                  className="text-white text-sm text-start pb-5"
                                >
                                  {industry.description}
                                </span>
                                <span
                                  className={`${
                                    hoveredSlide === index ? "" : "panel"
                                  }`}
                                />
                              </div>
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ParticipationINdus;
