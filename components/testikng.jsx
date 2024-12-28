"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import plstf2 from "../assets/PLASTINDIA FOUNDATION/Journey.jpg";
import plstf3 from "../assets/PLASTINDIA FOUNDATION/Values.jpg"

const PlastFoundationSlider = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    panelsRef.current = gsap.utils.toArray(".panel");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(panelsRef.current, {
      xPercent: -100 * (panelsRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panelsRef.current.length - 1),
        end: () => `+=${containerRef.current.offsetWidth}`,
      },
    });

    // Cleanup function to ensure ScrollTrigger is properly killed
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      className=" w-screen h-screen flex overflow-hidden"
      ref={containerRef}
    >

      <section className="panel gap-8 flex">
      
        <div
        
        id="bgtwo"
        style={{ borderRadius: 50, height: 560 }}
          className=" orange bg-[#E8EEE3] w-f rounded-3xl  py-4 flex relative"
         
        >
          <div className="w-96 mx-10 mb-12 flex-grow">
            <div className="w-96">
              <h3 className="text-3xl text-[#3C3E3D] pt-20  font-semibold mb-2">Our Values</h3>
              <p className="text-[#3C3E3D] text-lg text-start pb-2">
                At PLASTINDIA Foundation, we push boundaries. mould ideas into
                solutions & meld innovations. We push India ahead towards
                international supremacy in the plastics industry. Our values
                aren&apos;t just words they&apos;re our promises, leading the way to a
                progressive future.
              </p>
              <button className="ml-3 mt-10 bg-transparent font-satoshi text-md text-[#3C3E3D] px-14 py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                Learn more
              </button>
            </div>
          </div>
          <div
           style={{width:500}}
            className="relative w-96"
            initial="hidden"
            animate="visible"
         
            data-aos-delay="500"
          >
            <Image
              src={plstf3}
              alt="The Journy"
              width={400}
              height={300}
              layout="responsive"
              className="object-cover rounded-3xl mix-blend-multiply  min-w-64 p-6"
            />
          </div>
        </div>
       
      </section>
      <section className="panel  bg-blue-900">

      <div
          style={{ borderRadius: 50, height: 560 }}
          className=" red bg-[#E8E6DD]  rounded-3xl  py-4 flex relative"
          id="bgone"
        >
          <div className="w-96 flex mx-10 mb-12 flex-grow">
            <div className="w-full">
              <h3 className="text-3xl text-[#3C3E3D] pt-20  font-semibold mb-2">
                The Journey
              </h3>
              <p className="text-[#3C3E3D] text-lg text-start pb-2">
                Since 1987, PLASTINDIA Foundation has been the driving force
                uniting key players in the plastic industry, fuelling national
                progress through innovation. We shape the future of plastics,
                where every exhibition marks a new milestone in our journey of
                growth and discovery
              </p>
              <button className="ml-3 mt-10 bg-transparent font-satoshi text-md text-[#3C3E3D] px-14 py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                Learn more
              </button>
            </div>
          </div>
          <div style={{ width: 500 }} className="relative w-full">
            <Image
              src={plstf2}
              alt="The Journy"
              style={{ width: 500 }}
              className="object-cover rounded-3xl mix-blend-multiply min-w-96 p-6"
            />
          </div>
        </div>

      </section>
      <section className="panel bg-purple-700 ">
      <div
          style={{ borderRadius: 50, height: 560 }}
          className=" red bg-[#E8E6DD]  rounded-3xl  py-4 flex relative"
          id="bgone"
        >
          <div className="w-96 flex mx-10 mb-12 flex-grow">
            <div className="w-full">
              <h3 className="text-3xl text-[#3C3E3D] pt-20  font-semibold mb-2">
                The Journey
              </h3>
              <p className="text-[#3C3E3D] text-lg text-start pb-2">
                Since 1987, PLASTINDIA Foundation has been the driving force
                uniting key players in the plastic industry, fuelling national
                progress through innovation. We shape the future of plastics,
                where every exhibition marks a new milestone in our journey of
                growth and discovery
              </p>
              <button className="ml-3 mt-10 bg-transparent font-satoshi text-md text-[#3C3E3D] px-14 py-3 rounded-full font-semibold border-2  border-[#3C3E3D] hover:bg-[#3C3E3D] duration-700 hover:text-white">
                Learn more
              </button>
            </div>
          </div>
          <div style={{ width: 500 }} className="relative w-full">
            <Image
              src={plstf2}
              alt="The Journy"
              style={{ width: 500 }}
              className="object-cover rounded-3xl mix-blend-multiply min-w-96 p-6"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlastFoundationSlider;
