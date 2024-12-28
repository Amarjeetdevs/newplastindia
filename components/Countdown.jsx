"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import logo from '../assets/EXHIBITOR/PI Logo Final (2) (1) 1.png'
export default function Countdown() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2026-02-05T00:00:00");
      const currentDate = new Date();
      const difference = eventDate - currentDate;

      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [inView]);

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  if (!timeLeft) {
    return null; 
  }

  return (
    <motion.div>
      <div
        className="pb-2 -mt-2 lg:-mt-0  px-6 font-satoshi lg:px-12 flex"
        ref={ref}
      >
        <div
         id="countid" 
        
        className="my-20 bg-black bg-cover bg-no-repeat ">
          <div className="flex items-center justify-center text-white bg-black pb-10 bg-opacity-0">
            <div className="text-center">
            
            <div className="flex items-center justify-center ">
            <Image  src={logo} alt="Not found"  className="pt-20 lg:w-[550px] w-72"/>
            </div>

              <h1 className="text-3xl lg:text-6xl font-satoshi font-semibold ">
                We are coming back <br className="lg:hidden inline" /> soon <span className="inline lg:hidden">!</span>
              </h1>
              <h1 className="pb-12 text-sm lg:text-xl">
                5th-10th February 2026&nbsp;&nbsp; <br className="block lg:hidden" /> Bharat Mandapam, New Delhi,
                India
              </h1>

              <div className="grid grid-flow-col  gap-0 lg:gap-5 text-center">
                <div className="flex items-center flex-col pb-16">
                  <span className="countdown font-satoshi font-bold text-5xl lg:text-8xl">
                    {formatTime(timeLeft.days)}
                  </span>
                  <span className="text-sm lg:text-2xl pt-2">Days</span>
                </div>
                <span className="border-2 hidden lg:block border-white mx-1 lg:mx-20 h-32"></span>
                <hr className="w-px h-16 lg:h-20 block lg:hidden bg-white" />

                <div className="flex items-center flex-col">
                  <span className="countdown font-satoshi font-bold text-5xl lg:text-8xl">
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className="text-sm lg:text-2xl pt-2">Hours</span>
                </div>
                <span className="border-2 hidden lg:block border-white mx-1 lg:mx-20 h-32"></span>
                <hr className="w-px h-16 lg:h-20  block  lg:hidden bg-white" />

                <div className="flex items-center flex-col">
                  <span className="countdown font-bold text-4xl lg:text-8xl">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="pt-3 text-sm lg:text-2xl">Minutes</span>
                </div>

                <span className="border-2 hidden lg:block border-white  mx-1 lg:mx-20 h-20 lg:h-32"></span>
                <hr className="w-px h-16 lg:h-20  block lg:hidden bg-white" />

                <div className="flex items-center  flex-col">
                  <span className="countdown w-1/2 lg:w-20   font-bold text-4xl lg:text-8xl">
                    {formatTime(timeLeft.seconds)}
                  </span>
                  <span className="text-sm lg:text-2xl pt-3">Seconds</span>
                </div>
              </div>
              {/* <button className="my-4 lg:-mt-20 font-satoshi hidden lg:inline bg-white text-lg text-[#042523] px-16 py-4 rounded-full font-semibold">
                Notify Me
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
