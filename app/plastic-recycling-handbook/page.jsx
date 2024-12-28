"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import img3 from "../../assets/PUBLICATION IMAGE/ABOUT-IMAGE-recycling.png";
import imgs from "../../assets/PUBLICATION IMAGE/Component 11 (1).png";
import Link from "next/link";



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
    pageref: "Publications > Plastic Recycling Handbook",
    title: "PLASTIC INDUSTRY IN FOCUS",

    description: "Plastic Recycling Handbook",
    content:
      "A complete manual on plastic recycling processes, technologies, and best practices.",
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
            className="mix-blend-multiply py-0 lg:py-14"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-6 lg:px-52 pt-5 text-[#3C3E3D] text-center">
          Master the art of plastic recycling with this comprehensive handbook.
          Covering everything from sorting and processing techniques to advanced
          recycling technologies, this guide is designed for industry
          professionals and environmental advocates. Learn best practices,
          explore innovative solutions, and understand the economic and
          environmental benefits of effective plastic recycling.
        </h3>
      </div>
      <div className="flex items-center justify-center px-10 gap-12 my-20">
      <Link href="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Plastic_Recycling_Hand_Book_5341454c9c.pdf" target="_blank" rel="noopener noreferrer">
      <Image
          src={imgs}
          alt="Not found"
          style={{ width: 400 }}
          className=" hover:scale-105 duration-300"
        />
      </Link>
        
      </div>
      <Footer />
    </div>
  );
};

export default Page;
