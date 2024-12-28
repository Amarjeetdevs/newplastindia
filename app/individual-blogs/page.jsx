"use client";

import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import IndivisualBlogComp from "../../components/IndivisualBlogComp";
import SubHeading from "../../components/SubHeading";

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
    pageref: "Home> Blogs> PLASTINDIA 2023: Why is it was a success?",
    title: "PLASTINDIA 2023",
    descriptionFontSize: "44px",
    description: "Why it was a success?",
    content:
      "PLASTINDIA 2023 was a game-changer for the plastics industry. With thousands of global exhibitors, PLASTINDIA 2023 set new benchmarks, transforming the future of plastics.",
  };

  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <IndivisualBlogComp />
      <Footer />
    </div>
  );
};

export default Page;

