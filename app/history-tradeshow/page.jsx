"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import bnnr from "../../assets/ABOUT/IMAGE.png";
import imgb from "../../assets/ABOUT/Frame 102.png";
import imgv from "../../assets/ABOUT/Frame 113.png";
import bulb from "../../assets/ABOUT/bulb.svg";
import leaf from "../../assets/ABOUT/leaf.svg";
import globe from "../../assets/ABOUT/globe.svg";
import unit from "../../assets/ABOUT/unit.svg";

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
    pageref: "Trade show 2026 > Overview",
    title: "TRADE SHOW 2026",
    description: "The PLASTINDIA Legacy",
    content:
      "PLASTINDIA marks a significant milestone in the <strong>   evolution of the global plastics industry. </strong> With a legacy of driving transformation, it has consistently pushed the <strong> industry towards a greener, more responsible, and technologically advanced future. </strong>",
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
      </section>

      <section className="flex lg:flex-row  flex-col-reverse items-center text-[#3C3E3D] justify-between py-8 lg:py-14 px-6 lg:px-10">
        <div className="lg:w-3/6 lg:pl-4">
          <div>
            <p className="mb-4  text-3xl lg:text-[2.65em]">
              The Foundation of Excellence
            </p>
            <p className="mb-4 text-md lg:pr-8">
              Founded in 1987, PLASTINDIA Foundation is the apex body
              representing major associations, organizations, and institutions
              in the Indian plastics industry. The mission of PLASTINDIA
              Foundation is to promote the development and global
              competitiveness of the Indian plastics industry through:
            </p>
          </div>
          <div className="flex flex-row lg:pr-16 mt-5">
            <Image src={bulb} alt="Not Found" className="mx-6" />
            <div className="flex flex-col">
              <h3 className="text-sm ">
                <strong>Advancement of Innovation: </strong>
              </h3>
              <h5 className="text-sm">
                Encouraging the development of cutting-edge technologies and
                products that push the boundaries of what is possible within the
                plastics sector.
              </h5>
            </div>
          </div>
          <div className="flex flex-row lg:pr-16 mt-5">
            <Image src={leaf} alt="Not Found" className="ml-6 mr-6" />
            <div className="flex flex-col">
              <h3 className="text-sm ">
                <strong>Advancement of Innovation: </strong>
              </h3>
              <h5 className="text-sm">
                Encouraging the development of cutting-edge technologies and
                products that push the boundaries of what is possible within the
                plastics sector.
              </h5>
            </div>
          </div>
          <div className="flex flex-row lg:pr-16 mt-5">
            <Image src={globe} alt="Not Found" className="mx-6" />
            <div className="flex flex-col">
              <h3 className="text-sm ">
                <strong>Advancement of Innovation: </strong>
              </h3>
              <h5 className="text-sm">
                Encouraging the development of cutting-edge technologies and
                products that push the boundaries of what is possible within the
                plastics sector.
              </h5>
            </div>
          </div>{" "}
          <div className="flex flex-row lg:pr-16 mt-5">
            <Image src={unit} alt="Not Found" className="mx-6" />
            <div className="flex flex-col">
              <h3 className="text-sm ">
                <strong>Advancement of Innovation: </strong>
              </h3>
              <h5 className="text-sm ">
                Encouraging the development of cutting-edge technologies and
                products that push the boundaries of what is possible within the
                plastics sector.
              </h5>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 pb-8 lg:pb-0 flex justify-end">
          <Image src={imgb} alt="Not Found" className="w-full " />
        </div>
      </section>

      <section className=" py-4 lg:py-14 relative text-white bg-[#032624]">
        <h2 className="text-3xl text-center lg:text-[2.65em]">
          Innovations and Initiatives
        </h2>
        <div className="flex flex-col lg:flex-row items-center mt-5 lg:mt-14 justify-center">
          <div className="lg:w-1/2 flex justify-center">
            <div className="m-4 lg: p-4  lg:w-3/5">
              <h2 className="text-xl font-bold text-center ">
                Proplast Pavilion
              </h2>
              <h2 className="text-md text-center">
                Introduced in 2009, the &quot;Proplast&quot; pavilion focuses on
                finished goods, showcasing advancements and finished products in
                the plastics sector.
              </h2>
            </div>
          </div>

          <hr className="h-44 border-l-2 hidden lg:block border-white" />
          <div className=" lg:w-1/2 flex justify-center">
            <div className="m-4 lg:p-4  lg:w-3/5">
              <h2 className="text-xl font-bold text-center ">
                Sustainability Focus
              </h2>
              <h2 className="text-md text-center">
                The 2015 event debuted a dedicated section for{" "}
                <strong>
                  {" "}
                  recycling and sustainability, reflecting the industry&apos;s
                  evolving priorities{" "}
                </strong>{" "}
                and PLASTINDIA&apos;s commitment to a circular economy
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-0 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center">
         

          <div className="lg:absolute top-16 right-0 w-[500px] py-14  lg:rounded-l-3xl text-center p-4 text-[#3C3E3D] bg-[#CEDCB6] ">
            <h2 className="text-xl pb-2  font-satoshi">
              <strong>International Collaboration </strong>
            </h2>
            <h4 className="text-sm  font-satoshi px-16">
            PLASTINDIA has consistently attracted a{" "}
              <strong>growing number of international participants,</strong>{" "}
              expanding its influence and fostering global business connections.
            </h4>
          </div>
          <Image
            src={imgb}
            alt="Not Found"
            className="lg:w-1/2 pr-2 lg:pr-4 py-4 lg:py-14"
          />
          <div className="lg:absolute bottom-28 left-0 w-[500px] py-14 lg:rounded-r-3xl text-center p-4 text-[#3C3E3D] bg-[#E8E6DD] ">
            <h2 className="text-xl pb-2  font-satoshi">
              <strong>Showcasing Advancements</strong>
            </h2>
            <h4 className="text-sm  font-satoshi px-16">
              The triennial event has become one of the largest global
              exhibitions for the plastics industry, showcasing advancements in{" "}
              <strong>
                {" "}
                plastic products, machinery, and technology, and fostering
                international trade and business opportunities.{" "}
              </strong>
            </h4>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 bg-[#F1F1F1] ">
        <div>
          <h2 className="text-3xl text-[#3C3E3D] text-center pt-10 pb-2 lg:text-[2.65em]">
            Leading the Future
          </h2>
          <h4 className="text-lg text-[#3C3E3D] text-center lg:mx-28 ">
            {" "}
            <strong> Pioneering Initiatives: </strong> PLASTINDIA Foundation has
            been instrumental in organizing exhibitions that serve as premier
            platforms for{" "}
            <strong>
              {" "}
              technological advancements, global collaborations,{" "}
            </strong>{" "}
            and <strong> sustainable practices. </strong> Sustainable Growth:
            With a focus on sustainability, innovation, and collaboration,
            PLASTINDIA continues to drive the industry towards{" "}
            <strong>
              {" "}
              new horizons, ensuring its members remain at the forefront of
              global competitiveness.{" "}
            </strong>{" "}
          </h4>
        </div>

        <div className="flex flex-row">
          <Image
            src={imgb}
            alt="Not Found"
            className="w-1/2 pr-2 lg:pr-4 py-4 lg:py-14"
          />
          <Image
            src={imgv}
            alt="Not Found"
            className="w-1/2 pr-2 lg:pl-4 py-4 lg:py-14"
          />
        </div>
      </section>
      <section className="px-6 lg:px-0">
        <div>
          <h2 className="text-3xl text-[#3C3E3D] text-center pt-16 pb-2 lg:text-[2.65em]">
          PLASTINDIA 2026
          </h2>
          <h4 className="text-lg text-[#3C3E3D] text-center lg:mx-28 ">
            {" "}
            Join us in our mission to{" "}
            <strong> innovate and lead the future of plastics. </strong>{" "}
            PLASTINDIA 2026 promises to be a transformative event, showcasing
            the latest advancements and fostering global collaborations to shape
            a sustainable future for the plastics industry.{" "}
            <strong>
              {" "}
              Explore the journey of PLASTINDIA and witness the legacy of
              innovation and sustainability that has positioned India as a key
              player in the global plastics market.{" "}
            </strong>{" "}
          </h4>
        </div>
      </section>

      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
