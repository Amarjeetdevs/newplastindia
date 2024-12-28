"use client";
import React, { Suspense, lazy, useState, useEffect } from "react";
import Image from "next/image";

import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
const SwiperFoundationComp = lazy(() =>
  import("@/components/SwiperFoundationComp")
);
import ArrowOutward from "@mui/icons-material/ArrowOutward";

import SmallCarausalComp from "@/components/SmallCarausalComp";
import img3 from "../../assets/FOUNDATION/About.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import img2 from "../../assets/FOUNDATION/J IMAGE.jpg";
import img from "../../assets/VISITORS/J IMAGE (1).jpg";
import ScrollingBox from "@/components/ScrollingBox";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SubHeadingText = {
    pageref: "Foundation",
    title: "OUR FOUNDATION",
    description: "Inside PLASTINDIA",
    content:
      "At PLASTINDIA Foundation, we champion the <strong> plastics industry’s role in national and global progress.</strong>  Our collaborative efforts not only fuel innovation and excellence but also position India as a <strong>  premier global sourcing hub </strong>  for plastic products. Discover the impactful journey of PLASTINDIA Foundation.",
  };

  return (
    <div className="bg-[#FFFFFF] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <section>
        <div className="px-10 pt-2">
          <div className="">
            <Image
              src={img3}
              alt="Not Found"
              className="mix-blend-multiply py-14"
            />
          </div>
          <h3 className="text-md font-satoshi-light px-52 pt-5 text-[#3C3E3D] text-center">
            <strong> Established in 1987,</strong> PLASTINDIA Foundation
            continues as an eminent aegis uniting major associations,
            organizations, and institutions within the plastic industry. At
            PLASTINDIA Foundation,{" "}
            <strong>
              we dream of promoting the development of the plastics industry and
              strive for national progress through the power of plastics and
              related materials.
            </strong>
            <br />
            While driving export-led growth in India&apos;s plastic industry, we
            aim to boost both business volumes and revenues. PLASTINDIA
            Exhibition, a triumph since its inception, evolves and expands with
            each edition. From a modest beginning in 1990 with 486 exhibitors,
            it has grown into a global sensation.  The latest edition in 2023
            boasted over <strong>
              1800 exhibitors from 79 countries,
            </strong>{" "}
            attracting over <strong>360,000 visitors.</strong> The event is now
            a permanent fixture in the calendars of corporations and industry
            leaders worldwide. 
          </h3>
          <div className="flex items-center justify-center mt-10">
            <button className="ml-4 border-2 border-[#032624]  text-md text-[#042523] px-4 py-4 rounded-full  ">
              Managing Committee & Secretariat
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
              </span>
            </button>
            <button className="ml-4 border-2 border-[#032624] text-md text-[#042523] px-4 py-4 rounded-full  ">
              Organisers & Partners
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
              </span>
            </button>
          </div>
          <div className="">
            <Image
              src={img2}
              alt="Not Found"
              className="mix-blend-multiply py-10"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex lg:mt-10  bg-[#F1F1F1] pl-10 py-10 ">
          <div className="">
            <Image src={img} alt="Not Found" className="mix-blend-multiply" />
          </div>
          <div className="w-[46em] flex flex-col justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-[2.8em]">Our Vision</h2>

            <h3 className="lg:px-8 text-center text-md text-[#3C3E3D]">
            PLASTINDIA Foundation strives to be an internationally recognized
              organization devoted to <strong>promoting excellence</strong> in the field of
              plastics. The vision is to make India the preferred global hub for
              plastic products while <strong> fostering institutions that excel in
              quality and recycling.</strong> By promoting the pivotal role of plastics
              in society and the environment, the Foundation aims to elevate the
              industry&apos;s global standing.
            </h3>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between mb-12 ">
        <div className="w-1/4 ml-10   text-[#3C3E3D]">
           <h3
           style={{fontSize:37}}
           >Our Cornerstones</h3>
           <h4
           className="text-md"
           >At Plastindia Foundation, our values are the foundation of our mission and vision, reflecting our excellence and integrity in every facet of our work.</h4>
        </div>
        <div className="w-2/3 pr-5 ">
         <SmallCarausalComp/>
        </div>
      </section>
      <section
        id="vector-icon"
        className="h-scree bg-[#032624] flex items-center justify-center"
      >
        <div className="flex-col">
          <h2
            style={{ fontSize: 36.5, lineHeight: 1.3 }}
            className="text-[#FFFFFF]  opacity-85  mt-40 text-center"
          >
            Plastics make an immense contribution to environmental <br />
            sustainability through their energy-saving potential and <br />
            intrinsic recyclability and energy recovery options. Plastics <br />{" "}
            being the wonder material, solve many issues and with the <br />{" "}
            growing applications of plastics, more and more products are <br />{" "}
            being developed the world over replacing heavier materials <br />{" "}
            thus reducing consumption of many heavier materials which <br /> in
            a way, are a burden on the ecology.
          </h2>
          <h3 className="text-[#FFFFFF] opacity-70 text-lg mt-10 leading-10 text-center lg:mx-48">
            Mr. Ravish Kamath, President
          </h3>
          <h2
            style={{ fontSize: 15 }}
            class="mt-5 text-center mb-40 opacity-60 text-white  pt-2 relative"
          >
            <span className=" cursor-pointer underline underline-offset-4 text-white">
              Read more
            </span>
            <span>
              <ArrowOutward className="w-5 ml-2" />
            </span>
          </h2>
        </div>
      </section>

     <ScrollingBox/>


      <section>
        <div className="flex lg:mt-10 bg-[#F1F1F1] pr-10 py-10 ">
          <div className="w-[46em] flex flex-col justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-[2.8em]">Our Mission</h2>

            <h3 className="lg:px-8 text-center text-md text-[#3C3E3D]">
              The Foundation&apos;s mission focuses on boosting the image and
              growth of the Indian plastics industry through high-profile
              exhibitions, both domestically and abroad. It aims to promote the
              <strong>
                benefits of plastics, encourage export expansion, and drive
                improvements in quality and sustainability.
              </strong>
              By advocating for effective policy frameworks and industry
              innovation, Plastindia seeks to act as a catalyst for industry
              advancement.
            </h3>
          </div>
          <div className="">
            <Image src={img} alt="Not Found" className="mix-blend-multiply" />
          </div>
        </div>
      </section>

      <div className="pl-10">
        <Suspense fallback={<div>Loading...</div>}>
          <SwiperFoundationComp />
        </Suspense>
      </div>
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
