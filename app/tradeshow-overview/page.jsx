"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const TopNavigation = dynamic(() => import("../../components/TopNavigation"), { ssr: false });
const Navigation = dynamic(() => import("../../components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const SubHeading = dynamic(() => import("../../components/SubHeading"), { ssr: false });
const Countdown = dynamic(() => import("../../components/Countdown"), { ssr: false });
const TradeshowOverviewcomp = dynamic(() => import("../../components/TradeshowOverviewcomp"), { ssr: false });

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const SubHeadingText = {
    pageref: "Trade show 2026 > Overview",
    title: "TRADE SHOW 2026",
    description: "Gateway to Global Plastic Innovations",
    content:
      "Discover PLASTINDIA 2026 , where the future of plastics comes alive. Explore our <strong> rich legacy, meet the team behind this landmark event, </strong> and dive into dynamic exhibitions. Celebrate <strong> decades of innovation and excellence in the plastics industry. </strong> ",
  };


  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <TradeshowOverviewcomp/>
      <Countdown />

      <Footer />
    </div>
  );
};

export default Page;
