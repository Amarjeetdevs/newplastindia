"use client";
import React, { useState, useEffect, useRef } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import ScrollAnimationWithText from "../../components/ScrolliingText";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SubHeadingText = {
    pageref: "Foundation > President’s desk",
    title: "OUR FOUNDATION",

    description: "From the President’s Desk",
    content:
      "  Coming from the desk of <strong>  The President of Plastindia  Foundation,</strong>  the address expresses gratitude for the industry's trust and outlines a visionary roadmap. He calls for <strong>  collective efforts to advance the plastics industry, aiming for progress and sustainability.</strong>  ",
  };

  return (
    <main className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="px-6 lg:px-10 pt-2 ">
        
        <ScrollAnimationWithText />
      </div>
      <Countdown />

      <Footer />
    </main>
  );
};

export default Page;
