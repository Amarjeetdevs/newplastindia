"use client";
import React, {   useState, useEffect } from "react";
import Image from "next/image";

import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import subbnnr from "../../assets/ABOUT-PLASTINDIA/J IMAGE.png";
import bnnr from "../../assets/ABOUT-PLASTINDIA/ABOUT-IMAGE.png";

import Link from "next/link";

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
    pageref: "Foundation > Key Members",
    title: "OUR FOUNDATION",
    description: "PLASTINDIA 2023: A Success Story",
    content:
      "PLASTINDIA 2023 was a major event, featuring thousands of visitors and exhibitors, showcasing the latest in plastics innovation. Key highlights included a <strong> CEO Conclave and international RBSM meetings, </strong> strengthening India's role in the global plastics industry.",
  };

  return (
    <div className="bg-[#FFFFFF] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <section>
        <div className="px-6 lg:px-10 pt-2">
          <div className="">
            <Image src={bnnr} alt="Not Found" className=" py-14" />
          </div>
          <h3 className="text-md font-satoshi-light lg:px-[10em] mb-5 pt-5 text-[#3C3E3D] text-center">
            The <strong>11th edition of PLASTINDIA,</strong> held from February
            1st to 5th, 2023, set a new benchmark in the global plastics
            industry. With an astonishing turnout of{" "}
            <strong>360,000 visitors,</strong> this premier international
            exhibition showcased the future of plastics. Over{" "} <strong>1,800 exhibitors</strong> displayed the latest in processing machinery, raw materials,
            recycling technologies, and automation solutions. This vibrant event
            was not just a showcase but a catalyst for significant business
            transactions,{" "}
            <strong>paving the way for future industry advancements.</strong>
          </h3>

          <div className="">
            <Image
              src={subbnnr}
              alt="Not Found"
              className="mix-blend-multiply lg:py-10"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-6 lg:px-10 lg:pb-16  lg:py-10 mt-8 bg-[#F1F1F1] gap-16">
        <div className="flex flex-col w-full lg:w-1/2    py-10 ">
          <div className="">
            <Image src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/RBSM_cb79f4d7d9.webp'} width={500} height={500}  alt="Not Found" className="w-full lg:rounded-[50px] rounded-[30px] mix-blend-multiply" />
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-center mt-10  text-4xl lg:text-[2.5em]">
              International Sourcing at RBSM Meetings
            </h2>

            <h3 className=" text-center mx-0 text-md pt-4 text-[#3C3E3D]">
            PLASTINDIA 2023 expanded its horizons by focusing on global
              connections. The exhibition featured{" "}
              <strong>
                RBSM (Reverse Buyer Seller Meet) meetings, organized in
                collaboration with PLEXCONCIL. These meetings attracted over 300
                international buyers from 30 countries,
              </strong>
              all eager to explore India&apos;s opportunities in plastic
              products, machinery, and molds. The RBSM meetings were a
              resounding success, effectively linking global buyers with
              India&apos;s burgeoning plastics industry and reinforcing
              India&apos;s role as a preferred sourcing hub.
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col-reverse w-full lg:w-1/2 lg:mt-10  bg-[#F1F1F1]   ">
          <div className="">
            <Image src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/CEO_conclave_3fbcffee95.webp'} width={500} height={500} alt="Not Found" className="object-cover mt-0  lg:mt-8 w-full rounded-[30px]  lg:rounded-[50px] mb-16  lg:h-[35em]" />
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-center -mt-5 text-4xl lg:text-[2.6em]">
              A Visionary CEO Conclave
            </h2>

            <h3 className=" text-center text-md pt-4 mb-8 text-[#3C3E3D]">
              A highlight of PLASTINDIA 2023 was the visionary CEO Conclave,
              <strong>
                {" "}
                graced by the Hon&apos;ble Minister of Chemical & Fertilizers
                and Health & Family Welfare, Shri Mansukh Bhai Mandaviya.
              </strong>{" "}
              The conclave brought together more than{" "}
              <strong>90 industry leaders</strong> and CEOs, who engaged in
              forward-thinking discussions about maximizing the potential of the
              Indian plastics sector. With the presence of{" "}
              <strong>
                Shri Arun Baroka, Joint Secretary, Dept. of Chemicals,
              </strong>{" "}
              the conclave emphasized the need for a collaborative approach
              between industry and policymakers, setting a hopeful course for
              future development.
            </h3>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-[#3C3E3D] text-center pt-20 text-4xl  lg:text-[2.6em]">
          PLASTINDIA 2026: Paving the Way for the Future
        </h2>
        <h3 className=" text-center text-md pt-4 mb-8 mx-6 lg:mx-44 text-[#3C3E3D]">
          As PLASTINDIA 2023 came to a close, it set new standards for the
          industry with its record-breaking attendance, visionary discussions,
          and robust international networking. The event has firmly established
          itself as a{" "}
          <strong>leader in the global plastics exhibition landscape.</strong>
          Looking ahead, PLASTINDIA is committed to driving innovation,
          fostering valuable partnerships, and advancing the industry towards a
          sustainable and prosperous future.{" "}
          <strong>
            Join us at Bharat Mandapam from February 5-10, 2026, for the next
            chapter in the evolution of plastics.
          </strong>
        </h3>
        <div className="text-center">
          <Link href={"/tradeshow"}>
            <button className="bg-[#042523]  text-white px-4 py-3 rounded-full border-2">
               PLASTINDIA 2026
              <span>
                <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>

      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
