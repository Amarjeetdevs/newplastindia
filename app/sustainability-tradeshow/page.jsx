"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import img2 from "../../assets/TRADESHOW/J IMAGE.jpg";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import bnnr from "../../assets/ABOUT/IMAGE.png";
import imgb from "../../assets/ABOUT/Frame 102.png";
import imgv from "../../assets/ABOUT/Frame 113.png";

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
    pageref: "Trade show 2026 > Sustainability",
    title: "TRADE SHOW 2026",
    description: "Plastic Industry & Sustainability Efforts",
    content:
      "Our <strong> unwavering commitment to the environment </strong> is not just a mission; it’s a journey marked by improved technologies, innovative practices, and forward-thinking policies. Discover the <strong> multifaceted initiatives that align with PLASTINDIA’s vision of fostering responsible growth and pioneering innovation. </strong>",
  };
  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <section className="px-6 lg:px-10 my-10">
        <div className="">
          <Image src={bnnr} alt="Not Found" className=" py-4 lg:py-14" />
        </div>
        <h3 className="text-md font-satoshi-light  lg:px-52 pt-5 text-[#3C3E3D] text-start lg:text-center">
          At PLASTINDIA, sustainability is embedded in every phase of our
          product lifecycle, driving a shift towards an{" "}
          <strong> eco-conscious and resource-efficient future.</strong> Our
          mission focuses <strong> on advancing a circular economy, </strong>{" "}
          where waste is reimagined as a valuable resource.
        </h3>
        <div className="flex flex-col lg:flex-row my-12 lg:gap-12">
          <div className="flex flex-col">
            <Image
              src={imgb}
              alt="Not Found"
              className="h-full  py-4 lg:py-14"
            />
            <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
            Bio-Based and Biodegradable Plastics
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
            Materials like Polylactic Acid (PLA) from renewable resources and Chitosan from shrimp shells offer sustainable alternatives, decomposing rapidly and reducing long-term environmental impact.
            </h4>
          </div>

          <div className="flex flex-col ">
            <Image
              src={imgv}
              alt="Not Found"
              className="h-full  py-4 lg:py-14"
            />
              <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
            Innovative Recycling Technologies
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
            Advanced methods like chemical recycling and depolymerization break down plastics into reusable components, significantly reducing landfill waste and enabling a closed-loop system.
            </h4>
          </div>
        </div>
        <Image
            src={img2}
            alt="Not Found"
            className="mix-blend-multiply py-10"
          />
           <div className="flex flex-col lg:flex-row my-12 lg:gap-12">
           <div className="flex flex-col flex-grow h-full w-full">
            <Image
              src={imgb}
              alt="Not Found"
              className="h-full w-full py-4 lg:py-14"
            />
            <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
            Circular Economy
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
             We emphasize closed-loop systems and product redesign, ensuring materials are recycled into new products, minimizing waste, and promoting sustainability.
            </h4>
          </div>
          <div className="flex flex-col flex-grow h-full w-full">
            <Image
              src={imgv}
              alt="Not Found"
              className="h-full w-full py-4 lg:py-14"
            />
              <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
              PLASTINDIA&apos;s Commitment
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
            PLASTINDIA champions sustainability through initiatives such as the &quot;Proplast&quot; pavilion for finished goods and dedicated sections on recycling and sustainability at its exhibitions. Our publications advocate for the 3 R’s—reduce, reuse, recycle—demonstrating our dedication to fostering a greener future. Join us in pioneering a sustainable transformation in the plastics industry.
            </h4>
          </div>
        </div>
      </section>

      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
