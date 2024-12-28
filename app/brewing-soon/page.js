"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Countdown from "../../components/Countdown";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);

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
    pageref: "",
    title: "",

    description: "",
    content:
      "   ",
  };
const banner= "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/EXHIBIT_PT_3_eeeeb611fe.webp"
  return (
    <main className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
  
       <div className="flex items-center justify-center bg-[#032523]">
       <div className="">
            <Image src={"https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/EXHIBIT_PT_3_eeeeb611fe.webp"} height={"600"} width={"600"} alt="Not Found" className="object-contain h-[40em] w-[40em]" />
          </div>
       </div>
      <Countdown />

      <Footer />
    </main>
  );
};

export default Page;
