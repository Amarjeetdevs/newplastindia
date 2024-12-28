"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Timer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("February 5, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section
        id="vector-icon"
        className="hidden lg:flex lg:mt-10 bg-[#032624] items-center justify-center"
      >
        <div className="pb-2 px-12 flex">
          <div className="my-20 bg-contain bg-no-repeat">
            <div className="flex items-center justify-center text-white pb-10 bg-opacity-0">
              <div className="text-center">
                <h1 className="text-6xl font-satoshi font-semibold pt-20">
                  We are coming back soon
                </h1>
                <h1 className="pb-12 text-xl">
                  5th-10th February 2026&nbsp;&nbsp; Bharat Mandapam, New Delhi India
                </h1>

                <div className="grid grid-flow-col gap-5 text-center">
                  <div className="flex flex-col">
                    <span className="down font-bold text-8xl">{timeLeft.days}</span>
                    <span className="text-2xl pt-2">Days</span>
                  </div>
                  <span className="border-2 border-white mx-20 h-32"></span>

                  <div className="flex flex-col">
                    <span className="countdown font-satoshi font-bold text-8xl">
                      {timeLeft.hours}
                    </span>
                    <span className="text-2xl pt-2">Hours</span>
                  </div>
                  <span className="border-2 border-white mx-20 h-32"></span>

                  <div className="flex flex-col">
                    <span className="countdown font-bold text-8xl">{timeLeft.minutes}</span>
                    <span className="pt-2 text-xl">Minutes</span>
                  </div>
                  <span className="border-2 border-white mx-20 h-32"></span>

                  <div className="flex flex-col">
                    <span className="countdown font-bold w-12 text-8xl">{timeLeft.seconds}</span>
                    <span className="text-2xl pt-2">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
