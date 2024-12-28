"use client";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import EbooksViewer from "../../components/EbooksViewer";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [ebookSrc, setEbookSrc] = useState("");
  const [createdOn, setCreatedOn] = useState("");

useEffect(() => {
    const storedSrc = sessionStorage.getItem("ebookSrc");
    const storedCreatedOn = sessionStorage.getItem("ebooksCreatedOn");
    if (storedSrc) {
      setEbookSrc(storedSrc); 
      setCreatedOn(storedCreatedOn);
    } else {
      window.location.href = "/";
    }
  }, []);

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
    pageref: "Publications > Insights",
    title: "",

    description: createdOn,
    content: "",
  };

  console.log(createdOn)
  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={subHeadingText} />

      {ebookSrc ? (
        <EbooksViewer src={ebookSrc} />
      ) : (
        <p className="text-center text-2xl">Loading eBook...</p>
      )}


      <Footer />
    </div>
  );
};

export default Page;
