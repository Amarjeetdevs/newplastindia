"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";

import bnnr from "../../assets/ABOUT/IMAGE.png";
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
    pageref: "Trade show 2026 > Concurrent Events",
    title: "TRADE SHOW 2026",
    description: "Concurrent Events",
    content:
      "From strategic <strong> buyer-seller meets </strong> and insightful conferences to exclusive <strong> CEO gatherings and vibrant evening entertainments, </strong> these events are designed to <strong> foster innovation, build valuable connections, </strong> and create unforgettable memories.",
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

      <section className="text-[#3C3E3D] px-6 py-10 lg:py-0 lg:px-10 ">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="lg:w-1/2 flex flex-col ">
            <h2 className="text-xl  lg:text-[2.65em] pb-3">CEO Meet</h2>
            <h4>
              <strong>Leadership and Strategy Exchange:</strong> The CEO Meet
              provides a distinct opportunity for top executives to come
              together in a dedicated setting. This platform is ideal for{" "}
              <strong>
                {" "}
                leaders seeking to exchange ideas, discuss strategic
                opportunities, and shape the future of their industries{" "}
              </strong>{" "}
              through high-level collaboration.
            </h4>
            <Image
              src={imgv}
              alt="Not Found"
              className="h-full  py-4 lg:py-14"
            />
          </div>
          <div className="lg:w-1/2 flex  flex-col ">
            <Image
              src={imgv}
              alt="Not Found"
              className="lg:h-[550px] lg:pl-6  py-4 lg:py-0"
            />
            <div className="bg-[#CEDCB6] py-10 lg:py-16 lg:px-24 lg:-ml-52 lg:-mr-10 lg:mt-16 p-8 rounded-3xl lg:rounded-l-3xl ">
              <h2 className="text-3xl lg:text-[2.65em] pb-4">
                Reverse Buyer-Seller Meet (RBSM){" "}
              </h2>
              <h4 className="text-md">
                <strong>Engage in Strategic Interactions:</strong> Participate
                in the Reverse Buyer-Seller Meet, a dynamic platform where
                international buyers and sellers come together. This event is
                designed to{" "}
                <strong>
                  {" "}
                  foster valuable business connections, allowing participants to
                  explore new opportunities and expand their market reach.{" "}
                </strong>
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row my-12 lg:gap-4  text-white  bg-[#032624]">
          <div className="lg:w-1/2 flex flex-col space-y-4">
            <div className="flex flex-col mt-14 lg:mt-28 items-center mx-6 lg:mx-10 justify-around">
              <div className="bg-[#0E2D2B] lg:py-16  p-8 rounded-3xl shadow-md">
                <h2 className="text-4xl pb-4">International Conferences </h2>
                <h4 className="text-md">
                  <strong>Expand Your Knowledge:</strong> Our International
                  Conferences offer attendees the opportunity to engage with
                  expert panels. These sessions are focused on discussing{" "}
                  <strong>
                    {" "}
                    the latest trends and innovations within the plastics
                    industry, providing insights that are crucial for staying
                    ahead in the market.{" "}
                  </strong>
                </h4>
              </div>
              <Image
              src={imgv}
              alt="Not Found"
              className="h-full lg:hidden  py-6 lg:py-14"
            />
              <div className="bg-[#0E2D2B] mb-16 lg:mt-14 lg:py-16 p-8 rounded-3xl shadow-md">
                <h2 className="text-4xl pb-4">Evening Entertainments </h2>
                <h4 className="text-md ">
                  <strong>Cultural Connections and Networking:</strong> Enjoy an
                  evening filled with cultural performances and informal
                  networking receptions. These gatherings are designed to
                  provide a{" "}
                  <strong>
                    {" "}
                    relaxed atmosphere where attendees can forge new
                    relationships and engage in meaningful conversations,{" "}
                  </strong>{" "}
                  all while enjoying a rich blend of business and cultural
                  experiences.
                </h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col ">
            <Image
              src={imgv}
              alt="Not Found"
              className="h-full  lg:inline-block hidden py-4 lg:py-14"
            />
          </div>
        </div>
      </section>
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
