"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import imgr from "../../assets/TRADESHOW/PI_GRAPH/1.png";
import imgs from "../../assets/TRADESHOW/PI_GRAPH/2.png";
import imgt from "../../assets/TRADESHOW/PI_GRAPH/3.png";
import img from "../../assets/TRADESHOW/NEC_Final.png";
import eg from "../../assets/IMPACT/1.png";
import bnnr from "../../assets/ABOUT/IMAGE.png";
import imgb from "../../assets/ABOUT/Frame 102.png";
import imgv from "../../assets/ABOUT/Frame 113.png";
import bulb from "../../assets/ABOUT/bulb.svg";
import globe from "../../assets/ABOUT/globe.svg";
import factory from "../../assets/ABOUT/factory.svg";
import milestone from "../../assets/ABOUT/milestone.svg";
import earth from "../../assets/ABOUT/earth.svg";
import hifi from "../../assets/ABOUT/hifi.png";

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
    description: "PLASTINDIA: Leading the Plastics Revolution",
    content:
      "PLASTINDIA 2026 will be a transformative event, showcasing a <strong> plethora of innovations and hosting over 2,000 exhibitors. </strong> It is the definitive platform for discovering <strong> new industry trends, engaging with global leaders, </strong> and securing future business opportunities.",
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
        PLASTINDIA 2026 is the premier global event for the plastics industry,
          set to take place from{" "}
          <strong>
            February 1-5, 2026, at Bharat Mandapam, Pragati Maidan, New Delhi,
            India.
          </strong>{" "}
          This five-day extravaganza,{" "}
          <strong>running from 10:00 AM to 6:00 PM daily,</strong> will bring
          together the brightest minds, leading innovators, and top
          professionals in the plastics sector. Hosted by the PLASTINDIA
          Foundation, this event promises to showcase the latest advancements,
          cutting-edge technologies, <br /> and sustainable practices that are
          shaping the future of plastics. PLASTINDIA 2026 is more than just an
          exhibition; it is a celebration of the remarkable journey of the
          PLASTINDIA Foundation, which has successfully completed
          <strong> 11 editions since its inception in 1990.</strong> The event
          has evolved from a modest gathering of 486 exhibitors to a global
          platform featuring over
          <strong>
            {" "}
            1,800 exhibitors from 79 countries, drawing more than 360,000
            visitors.
          </strong>{" "}
          This remarkable growth underscores PLASTINDIA&apos;s influence and
          commitment to driving innovation and excellence in the plastics
          industry.
        </h3>
        <div className="flex flex-row  ">
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

      <section className="bg-[#F1F1F1] text-[#3C3E3D] lg:px-0 px-6">
        <h2 className="text-center text-3xl pt-12 lg:text-[2.65em]">
          Vision for PLASTINDIA 2026
        </h2>
        <h5 className="text-center text-md lg:mx-96">
          Our vision for PLASTINDIA 2026 is to establish a{" "}
          <strong>
            {" "}
            transformative global platform that drives innovation,
            sustainability, and collaboration within the plastics industry. We
            aim to set new standards for excellence by:{" "}
          </strong>
        </h5>

        <div className="flex flex-col lg:flex-row  pt-5 lg:px-12">
          <div className="flex flex-row items-start  py-10 lg:p-4 lg:border-r-2 lg:px-2 border-[#AFAFAF33] ">
            <Image src={earth} alt="Not found" width={45} height={45} className="mt-10 mr-4 lg:mr-0 lg:mt-5"/>
            <div className="flex flex-col lg:ml-4">
              <h3 className="text-lg font-bold">
                Promoting Sustainable Practices
              </h3>
              <h3 className="text-lg">
                Advancing the use of eco-friendly materials and technologies to
                reduce environmental impact.
              </h3>
            </div>
          </div>

          <div className="flex flex-row items-start lg:mx-5 py-0  lg:py-10 lg:p-4 lg:border-r-2 lg:px-2 border-[#AFAFAF33]">
                
            <Image src={bulb} alt="Not found" width={60} height={60} className=" mt-14 lg:mt-5 mr-4 lg:mr-0 " />

                
            <div className="flex flex-col -ml-3 lg:ml-4">
              <h3 className="text-lg font-bold">Fostering Innovation</h3>
              <h3 className="text-lg">
                Encouraging the development of groundbreaking technologie and
                products that redefine the possibilities within the plastics
                sector.
              </h3>
            </div>
          </div>

          <div className="flex flex-row items-start py-10 px-0  p-4">
            <Image src={globe} alt="Not found" width={55} height={55} className="mt-5 mr-4 lg:mr-0 "/>
            <div className="flex flex-col lg:ml-4">
              <h3 className="text-lg font-bold">
                Enhancing Global Collaboration
              </h3>
              <h3 className="text-lg">
                Building strong international partnerships to facilitate the
                exchange of ideas, and technological advancements.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row pb-16 lg:px-10 ">

       <div className=" p-4 lg:border-r-2 lg:border-t-2  border-[#AFAFAF33] ">
       <div className="lg:ml-44  lg:mr-12 flex flex-row py-5 items-start">
       <Image src={factory} alt="Not found" width={52} height={52} className= "mr-2 lg:mr-0  mt-16 lg:mt-10"/>
            <div className="flex flex-col lg:ml-4">
              <h3 className="text-lg font-bold">Empowering the Industry</h3>
              <h3 className="text-lg">
                Providing a robust platform for knowledge sharing, networking,
                and professional growth to ensure the continuous advancement of
                the plastics industry.
              </h3>
            
          </div>
       </div>
       </div>
          <div className="flex flex-row items-start p-4 lg:border-t-2 border-[#AFAFAF33] ">
          <div className="lg:mr-32 lg:ml-12 flex flex-row py-5 items-start">

<Image src={milestone} alt="Not found" width={48} height={48} className="mr-2 lg:mr-0  mt-16 lg:mt-10" />
            <div className="flex flex-col lg:ml-4">
              <h3 className="text-lg font-bold">Championing Excellence</h3>
              <h3 className="text-lg">
                Celebrating the achievements and contributions of industry
                leaders and pioneers who are setting benchmarks in innovation
                and sustainability.
              </h3>
            </div>
          </div>
          </div>

        </div>
      </section>

      <section className=" flex flex-row gap-5 py-20 lg:px-10">
        <div className="lg:w-4/5 h-full bg-[#032624] lg:rounded-[50px] py-8 px-6 lg:p-20">
          <h2 className="text-white font-bold text-3xl lg:-mt-4 lg:text-[56px]">
            Why you should join us at <br className="lg:inline hidden" />
            PLASTINDIA 2026:
          </h2>
         <div className="my-5 mb-10 flex  flex-col lg:flex-row items-center lg:gap-0 gap-5">
         <Link
            href={"http://exhibitors.plastindia.org/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-white text-lg  text-[#042523] px-10 py-5 rounded-full ">
              Register as Exhibitor
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523] w-5 h-5" />
              </span>
            </button>
          </Link>
          <Link href={"/visit#visit-brewing"}>
            <button className="lg:ml-5 bg-[#042523] text-lg text-white px-12 py-5 rounded-full border-2">
              Register as Visitor
              <span>
                <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
              </span>
            </button>
          </Link>
         </div>

          <hr className="text-[#254140] h-0.5 opacity-60" />
          <div className="flex text-white  py-8 flex-col lg:flex-row">
            <div className="flex flex-col lg:pr-5">
              <h2 className="text-lg">
                {" "}
                <strong> Innovation:</strong>{" "}
              </h2>
              <h2 className="text-lg">
                Discover groundbreaking technologies and products that push the
                boundaries of the plastics industry.
              </h2>
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 lg:pr-5">
              <h2 className="text-lg">
                {" "}
                <strong> Networking:</strong>{" "}
              </h2>
              <h2 className="text-lg">
                Connect with global industry leaders, innovators, and
                professionals, building valuable relationships.
              </h2>
            </div>
          </div>

          <div className="flex text-white  pt-2 flex-col lg:flex-row">
            <div className="flex flex-col">
              <h2 className="text-lg">
                {" "}
                <strong>Knowledge</strong>{" "}
              </h2>
              <h2 className="text-lg">
                Gain insights from expert panels, technical workshops, and
                thought-provoking conferences.
              </h2>
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 lg:-mr-20 lg:pl-6 lg:pr-10">
              <h2 className="text-lg">
                {" "}
                <strong> Opportunities:</strong>{" "}
              </h2>
              <h2 className="text-lg">
                Explore new business opportunities, partnerships, and market
                trends that can propel your business forward.
              </h2>
            </div>
          </div>
        </div>

        <div className="hidden lg:inline">
          <Image src={hifi} alt="Not found" className="h-screen" />
        </div>
      </section>

      <section className="px-6 lg:px-16 bg-[#CEDCB666] py-10  lg:py-20">
        <h3 className="text-[#3C3E3D] text-xl text-center lg:text-start lg:text-3xl">
        PLASTINDIA 2026 promises an unparalleled experience in the plastics
          industry, featuring over{" "}
          <strong>2,000 exhibitors from 80 countries,</strong> and showcasing
          cutting-edge products and technologies. Held at
          <strong>Bharat Mandapam, New Delhi, from February 5-10, 2026,</strong>
          the event spans 1,50,000 sq meters across 20 halls. With expected
          <strong>footfalls of 600,000,</strong>
          it&apos;s the ideal platform for industry professionals, innovators,
          decision-makers, and investors.
        </h3>
      </section>

      <section className="lg:px-0  py-14 lg:my-0 px-6">
        <div className=" flex flex-col   lg:-mt-0 overflow-hidden  lg:flex-row-reverse ">
          <div className=" lg:w-1/2  lg:pl-5 ">
            <Image
              alt="Not found"
              src={eg}
              className="relative z-10  rounded-[20px] lg:rounded-[50px]"
            />
          </div>
          <div className="lg:w-1/2  justify-center lg:pl-10   ">
            <h2 className="text-3xl lg:text-[2.65em] py-3  font-satoshi  text-[#3C3E3D]">
              Concurrent Events:
            </h2>
            <h5 className="text-md text-[#3C3E3D] font-satoshi pb-2 lg:pr-12 ">
              <strong>
                Reverse Buyer-Seller Meet (RBSM) <br />
              </strong>
              Facilitate impactful trade relationships at the Reverse
              Buyer-Seller Meet, where global buyers and sellers converge to
              explore new business opportunities.
            </h5>
            <h5 className="text-md text-[#3C3E3D] font-satoshi  pb-2  lg:pr-12 ">
              <strong>
                International Conferences <br />
              </strong>
              Participate in expert-led panels and sessions that delve into the
              latest innovations and trends shaping the plastics industry. 
            </h5>
            <h5 className="text-md text-[#3C3E3D] font-satoshi  pb-2  lg:pr-12 ">
              <strong>
                CEO Meet <br />
              </strong>
              Exclusive gatherings for industry leaders to forge strategic
              alliances and discuss future industry directions. 
            </h5>
            <h5 className="text-md text-[#3C3E3D] font-satoshi  pb-2  lg:pr-12 ">
              <strong>
                Cultural Celebrations <br />
              </strong>
              Enjoy an array of cultural performances and networking receptions
              that blend entertainment with professional engagement.
            </h5>
            <Link href={"/brewing-soon"}>
              <div className="text-start lg:mr-10">
                <button className="bg-[#042523] w-full lg:-mr-10 text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                  Learn more
                  <span>
                    <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-6 hidden bg:inline lg:px-10">
        <div className="flex flex-row">
          <div className="w-3/4">
            <Image src={imgb} alt="Not found" />
          </div>
          <div className="flex text-[#3C3E3D] flex-col">
            <div className="p-10 bg-[#CEDCB6] rounded-[50px]">
              <h3 className=" text-xl font-semibold pb-3">Global Recognition</h3>
              <h4 className="text-md">
                Participation from 79 countries in the 2023 edition, attracting
                over 360,000 visitors.
              </h4>
            </div>
            <div className="p-10 bg-[#E8E6DD] rounded-[50px]">
              <h3 className="text-xl font-semibold pb-3">Industry Leadership</h3>
              <h4 className="text-md">
                {" "}
                Backed by key industry associations and leaders, ensuring a high
                standard of quality and innovation.
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-0 px-6">
        <h2 className="text-center lg:text-[2.65em] text-3xl text-[#3C3E3D] ">
          Opportunities for Visitors and Exhibitors
        </h2>
        <div className="  flex overflow-hidden  pb-36  flex-col lg:flex-row  h-full">
          <div className="relative  lg:w-1/2 top-10 lg:top-32  items-center">
            <div className="absolute inset-0 top-[-50px] left-[-180px] w-full hidden lg:block h-full bg-[#CEDCB6] rounded-[50px] z-0"></div>
            <Image
              alt="Not found"
              src={eg}
              className=" relative z-10 rounded-[20px] lg:rounded-[50px]"
            />
          </div>

          <div className=" justify-center   lg:w-1/2 lg:pl-10 mt-16 lg:mt-52 ">
            <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
              Visitors:
            </h2>
            <h5 className="text-md text-[#3C3E3D] lg:pr-12 font-satoshi ">
              <ul className="list-disc list-inside">
                <li>
                  Access to the latest industry trends and innovations through
                  interactive exhibits and live demonstrations.
                </li>
                <li>
                  Networking opportunities with global leaders, experts, and
                  potential business partners.
                </li>
                <li>
                  Participation in interactive sessions, technical workshops,
                  and knowledge-sharing forums.
                </li>
              </ul>
            </h5>
            <Link href={"/brewing-soon"}>
              <div className="text-start ">
                <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                  Learn more
                  <span>
                    <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className=" h-full">
          <div className=" flex flex-col lg:pb-52 -mt-12 lg:-mt-24 overflow-hidden  lg:flex-row-reverse ">
            <div className="relative   lg:top-32  lg:w-1/2 items-center">
              <div className="absolute inset-0 top-14 left-12 right-44 w-full h-full hidden lg:block bg-[#596A3C] rounded-l-[50px] z-0"></div>
              <Image
                alt="Not found"
                src={eg}
                className="relative z-10  rounded-[20px] lg:rounded-[50px]"
              />
            </div>
            <div className="lg:w-1/2  justify-center lg:pl-10 mt-10 lg:mt-52 ">
              <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                Exhibitors:
              </h2>
              <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12 ">
                <ul className="list-disc list-inside">
                  <li>
                    Showcase your products and innovations to a global audience
                    of potential clients and partners.
                  </li>
                  <li>
                    Engage with industry leaders, decision-makers, and investors
                    to forge valuable business relationships.
                  </li>
                  <li>
                    Highlight your technological advancements and sustainability
                    initiatives, gaining international exposure and credibility.
                  </li>
                </ul>
              </h5>
              <Link href={"/brewing-soon"}>
                <div className="text-start ">
                  <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                    Learn more
                    <span>
                      <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-10 px-6">
        <div className="px-6 lg:px-10  pt-16 text-[#3C3E3D]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-3xl lg:text-[2.65em]  md:text-4xl   mb-1">
              History and Legacy
            </h2>
            <h3
              style={{ fontSize: 16 }}
              className="text-lg py-5 lg:py-0 md:text-lg opacity-90 lg:px-44 mb-8"
            >
              <p>
                Since its inception in 1990, PLASTINDIA has grown into a{" "}
                <strong>
                  beacon of innovation and sustainability in the global plastics
                  industry.
                </strong>{" "}
                The event has consistently showcased advancements in plastic
                products, machinery, and technology,
                <strong>
                  driving industry growth and fostering international
                  collaboration.
                </strong>{" "}
                Key features include the{" "}
                <strong>
                  &quot;Proplast&quot; pavilion, dedicated to finished goods,
                  and sections focused on recycling and sustainability,
                </strong>{" "}
                reflecting the industry&apos;s evolving priorities. Through
                these initiatives, PLASTINDIA positions India as a leader in the
                global plastics market, championing a circular economy and
                sustainable practices.
              </p>
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-16 gap-6">
            <Image src={imgr} alt="Not found" />

            <Image src={imgs} alt="Not found" />

            <Image src={imgt} alt="Not found" />
          </div>
          <div className="flex items-center justify-center">
            <Link href={"/foundation#history"}>
              <button className="bg-[#042523] my-5 mt-8 lg:mt-10 lg:my-10  lg:-mb-0  text-md text-white px-14 py-3 rounded-full border-2">
                Learn more
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-6 bg-[#F1F1F1]  ">
        <div className="flex   lg:flex-row flex-col lg:mt-10   lg:pl-10 py-10 ">
          <div className=" w-full lg:w-3/5">
            <Image
              src={img}
              alt="Not Found"
              className="mix-blend-multiply rounded-[20px] lg:rounded-[50px]"
            />
          </div>
          <div className="w-full lg:py-0 py-6 lg:w-[46em]  flex flex-col  justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-center text-3xl lg:text-[2.65em]">
              National Executive Council <br /> (NEC)
            </h2>

            <h3 className="lg:px-8 text-center py-3 text-md text-[#3C3E3D]">
              <strong>
                The driving force behind PLASTINDIA 2026 is the National
                Executive Committee (NEC),
              </strong>{" "}
              a distinguished group nominated by the Office Bearers of the
              PLASTINDIA Foundation. This dedicated team ensures the seamless
              execution and visionary direction of the event. At the helm is
              Alok Tibrewala, whose leadership and innovative strategies have
              been pivotal in PLASTINDIA&apos;s journey. 
            </h3>
            <Link href={"/brewing-soon"}>
              <button className="bg-[#042523] mt-10  text-md text-white px-4 py-3 rounded-full border-2">
                Take a look at our Committees
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
