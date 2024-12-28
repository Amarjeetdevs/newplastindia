"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import img3 from "../../assets/PUBLICATION IMAGE/ABOUT-IMAGE 3R's.png";
import imgs from "../../assets/PUBLICATION IMAGE/Component 11.png";
import Link from "next/link";

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

  const SubHeadingText = {
    pageref: "Publications > Practice the 3R’s",
    title: "PLASTIC INDUSTRY IN FOCUS",

    description: "Practice the 3 R's",
    content:
      "A comprehensive guide on reducing, reusing, and recycling plastics to foster a sustainable environment.",
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="px-10 pt-2">
        <div className="">
          <Image
            src={img3}
            alt="Not Found"
            className="mix-blend-multiply py-14"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-6 lg:px-52 pt-5 text-[#3C3E3D] text-center">
          Dive into the principles of reducing, reusing, and recycling with this
          essential guide. Learn practical strategies to minimize plastic waste,
          discover innovative reuse ideas, and explore effective recycling
          techniques. This publication empowers individuals and businesses to
          adopt eco-friendly practices, contributing to a cleaner and greener
          planet.
        </h3>
        
      </div>
      {/* <EpubViewer /> */}
      <div className="flex items-center justify-center px-10 gap-12 my-20">
      <Link href="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PIF_Environment_Book_3_Rs_Let_s_Practise_Book_540604914e.pdf" target="_blank" rel="noopener noreferrer">

        <Image
          src={imgs}
          alt="Not found"
          style={{width:400}}
          className=" hover:scale-105 duration-300"
        />
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
