"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import Image from "next/image";
import img3 from "../../assets/TRADESHOW/overview-about.jpg";
import img2 from "../../assets/TRADESHOW/J IMAGE.jpg";
import icon1 from "../../assets/TRADESHOW/iconamoon_arrow-up-1 (1).png";
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
    pageref: "Trade show 2026 > Exhibition Details",
    title: "TRADE SHOW 2026",
    description: "All you need to know",
    content:
      "PLASTINDIA 2026 is set to be a landmark event in the plastic industry. This premier trade fair will highlight the latest in plastic industry innovations, providing exceptional networking and business opportunities.",
  };
  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />

      <section className="px-6 lg:px-10">
        <div className="">
          <Image
            src={img3}
            alt="Not Found"
            className="mix-blend-multiply py-4 lg:py-14"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-6 lg:px-52 pt-5 text-[#3C3E3D] text-center">
          <strong>
          PLASTINDIA 2026 will take place from 5th to 10th February 2026, from
            10:00 am to 06:00 pm, at Bharat Mandapam, New Delhi.
          </strong>
          This modern convention center boasts a total built-up area of{" "}
          <strong>390,000 sq. metres,</strong> featuring an expansive main hall
          with a capacity of <strong>
          7,000 people and six exhibition halls covering
          150,000 sq. metres.
            </strong> The program will be detailed in the official
          brochure, which will be available for download soon. The schedule will
          include various sessions, showcases, and networking opportunities
          designed to highlight the latest advancements and innovations in the
          plastics industry PLASTINDIA is a major international trade fair for
          the plastic industry, <strong>
          showcasing the latest technologies, products,
          and innovations. It serves as a significant platform for networking
          and business opportunities, connecting professionals,
            </strong> manufacturers,
          and suppliers from across the globe. The brochure for the event will
          be updated and available soon.
        </h3>

        <div className="">
          <Image
            src={img2}
            alt="Not Found"
            className="mix-blend-multiply py-10"
          />
        </div>
        <div
          id="trde-box2"
          className="flex  lg:flex-row flex-col mt-5  overflow-hidden gap-8 "
        >
          <div
            id="trde-crd2"
            className="card slider text-[#3C3E3D] bg-[#E8E6DD]  "
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Exhibitors
              </h2>

              <p className="text-md   lg:pl-0 lg:text-md leading-6  mt-4   text-start">
                PLASTINDIA 2026 will host over <strong>2000 exhibitors</strong>{" "}
                representing <strong>80 countries.</strong> Each exhibitor – a
                master of their craft in the plastics industry, bringing their
                best to the forefront. Gear up to{" "}
                <strong>experience the brilliance</strong> and expertise of
                these <strong>international leaders</strong> as they drive the
                future of plastics.
              </p>
              <div className="card-actions justify-end ">
                <Link href={"/exhibit"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72   lg:-mt-10 object-contain "
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            id="trde-crd2"
            className="card  slider bg-[#CEDCB6] text-[#3C3E3D] "
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Visitors
              </h2>

              <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                Be a part of the phenomenal PLASTINDIA 2026! Witness
                <strong>
                  {" "}
                  groundbreaking innovations, connect with global leaders,
                </strong>{" "}
                and <strong>explore cutting-edge technologies</strong> that are
                shaping the future of plastics. Join lakhs of{" "}
                <strong>visitors from around the world</strong> and experience
                the progress of the plastics industry.
              </p>
              <div className="card-actions justify-end">
                <Link href={"/visit"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72 ml-52  lg:-mt-10 object-contain "
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            id="trde-crd2"
            className="card slider bg-[#E8EEE3] text-[#3C3E3D]"
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Concurrent Events
              </h2>

              <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                At PLASTINDIA 2026,{" "}
                <strong>engage in dynamic Concurrent Events</strong> like the{" "}
                <strong>Reverse Buyer-Seller Meet</strong> for strategic
                international connections, insightful <strong>International Conferences</strong>
                with expert discussions, and the <strong>CEO Meet</strong> for
                top executives to exchange ideas and explore opportunities.
              </p>
              <div className="card-actions justify-end">
                <Link href={"/brewing-soon"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72 ml-52  lg:-mt-10 object-contain "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        
<div>
     <h2 className= " text-3xl text-center font-satoshi text-[#3C3E3D] lg:text-[2.65em] mt-20 pb-3 lg:mx-72 ">PLASTINDIA 2023: Breaking Records, Building Futures</h2>
   <h5 className="lg:mx-24 text-md text-[#3C3E3D] font-satoshi pb-2"><strong> The 11th edition,   </strong> held from February 1st to 5th, 2023, saw <strong>  360,000 visitors and over 1,800 exhibitors from 79 countries. </strong> It featured cutting-edge technology, a CEO Conclave with <strong> 90+ industry leaders, and international RBSM meetings with 300+ buyers from 30 countries. </strong> </h5>
<Image
            src={img2}
            alt="Not Found"
            className="mix-blend-multiply py-10"
          />
</div>

           <div className="flex flex-col lg:flex-row my-12 lg:gap-12">
           <div className="flex flex-col flex-grow h-full w-full">
            <Image
              src={imgb}
              alt="Not Found"
              className="h-full w-full py-4 lg:py-14"
            />
            <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
            Growth of PLASTINDIA
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
            Since 1990, PLASTINDIA has <strong>  grown from 486 exhibitors to over 1,800 in 2023, becoming a global platform for the plastics industry, </strong> and empowering businesses even in challenging times.
            </h4>
          </div>
          <div className="flex flex-col flex-grow h-full w-full">
            <Image
              src={imgv}
              alt="Not Found"
              className="h-full w-full py-4 lg:py-14"
            />
              <h3 className="text-center font-satoshi text-[#3C3E3D] text-3xl">
              Looking Ahead to PLASTINDIA 2026
            </h3>
            <h4 className="text-center font-satoshi text-[#3C3E3D] text-md">
            Scheduled for <strong> February 2026 at Bharat Mandapam, New Delhi, </strong>  the next edition aims to feature over <strong>  1,800 exhibitors from 50+ countries, </strong>  focusing on innovation, sustainability, and global collaboration.
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
