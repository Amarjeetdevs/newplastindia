"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fixdimg from "../assets/NEC/1.png";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const ScrollingTextNec = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      gsap.set(containerRef.current, { visibility: "visible" });
    }
  }, [isReady]);
  return (
<div className="text-[#3C3E3D] px-6 lg:px-10">
<h2 className="item text-4xl  lg:text-[2.65em] font-satoshi my-12  ">
    Mr. Alok Tibrewala- Chairman NEC
  </h2>
    <div className="flex lg:flex-row  flex-col  ">
     
      <div className="w-full lg:w-1/3 h-full flex flex-col items-enter   justify-between">
        

        <div className="pb-40">
          <Image
            src={fixdimg}
            alt="Fixed Image"
            className="w-[25em] h-[30em] rounded-3xl object-cover"
          />
          <h2 className="text-[1.2em] text-center lg:mr-20  mt-8">
            Mr. Alok Tibrewala, Chairman
          </h2>
        </div>
      </div>
      <div className=" lg:ml-auto w-full -mt-32 lg:-mt-1 lg:w-2/3 lg:mr-12 ">
        <div className=" h-scren item flex flex-col items-start mt-10 mr font-satoshi text-md">
          <h3 className="item text-md font-satoshi text-start pb-2">
            <strong>Background and Education</strong>
          </h3>
          <h2 className=" text-md pb-2 font-satoshi -mr-10 ">
            Mr. Alok Tibrewala, after graduating in commerce from St.
            Xavier&apos;s, Kolkata, qualified as a chartered accountant in 1992.
            With over two decades of experience in the plastics industry, he is
            the Managing Director of Swastik Plastalloys Pvt. Ltd. and now
            serves as the Chairman of the National Executive Council (NEC) for
            PLASTINDIA.
          </h2>
          <h3 className="item text-md font-satoshi text-start pb-2">
            <strong>Professional Journey</strong>
          </h3>
          <h2 className=" text-md pb-2  font-satoshi -mr-10 ">
            Throughout his career, Mr. Tibrewala has been actively involved in
            both social and business spheres. He has served as the charter
            president of the Rotary Club and past president of the Indian
            Plastic Federation. He also held a position on the Managing
            Committee of PLASTINDIA and has represented various associations and
            trade bodies, including the West Bengal MSME Felicitation Council
            and the Minimum Wages Board.
          </h2>
          <h3 className="item text-md font-satoshi text-start pb-2">
           <strong> Professional Journey</strong>
          </h3>
          <h2 className=" text-md pb-2  font-satoshi -mr-10 ">
            Leadership and Vision Known for his excellent writing, poetic, and
            oratory skills, Mr. Tibrewala has been a prominent figure in the
            plastic industry, especially in Eastern India. Under his leadership,
            PLASTINDIA aims to explore new horizons and achieve greater heights,
            particularly as the industry gears up for PLASTINDIA 2026. His
            vision is to propel PLASTINDIA into new and higher frontiers,
            ensuring the event remains a cornerstone for innovation and
            development in the plastics sector.
          </h2>
        </div>
        <div>
          <h6 className="item">&nbsp;</h6>
        </div>
      </div>
    </div>
</div>
  );
};

export default ScrollingTextNec;
