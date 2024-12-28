"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";


const EpubViewer = dynamic(() => import("../../components/EpubViewer"), {
  ssr: false,
});
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

  const subHeadingText = {
    pageref: "Publications > Industry Status",
    title: "Industry Status",

    description: "Plastic Industry Status Report",
    content: "",
  };
  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      
       <SubHeading subHeadingText={subHeadingText} />
  
        <EpubViewer />
      
      <Footer />
    </div>
  );
};

export default Page;
