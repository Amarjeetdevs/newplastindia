"use client";
import React, {useState, useEffect } from "react";
import Image from "next/image";

import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import imgceo from "../../assets/FOUNDATION/image 27.png";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import SmallCarausalComp from "../../components/SmallCarausalComp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


import ScrollingBox from "../../components/ScrollingBox";
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
    pageref: "Foundation",
    title: "OUR FOUNDATION",
    description: "Inside Plastindia",
    content:
      "At Plastindia Foundation, we champion the <strong> plastics industry’s role in national and global progress.</strong>  Our collaborative efforts not only fuel innovation and excellence but also position India as a <strong>  premier global sourcing hub </strong>  for plastic products. Discover the impactful journey of Plastindia Foundation.",
  };

  return (
    <div className="bg-[#FFFFFF] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <section>
        <div className=" px-6 lg:px-10 pt-2">
          <div className="lg:py-14">
            <Image
              src={
                "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/FOUNDATION_3bd68867dc.png"
              }
              height={3000}
              width={1000}
              alt="Not Found"
              className=" w-full lg:rounded-[50px]   lg:h-full"
            />
          </div>
          <h3 className="text-md font-satoshi-light  lg:px-40 pt-5 text-[#3C3E3D] text-center">
            
            Established in 1987, Plastindia Foundation is the apex body of major
            associations, organizations, and institutions connected with
            plastics, with common objectives to promote the development of the
            plastics industry and to assist the growth of plastics and related
            materials. The Foundation is dedicated towards national progress
            through plastics. <br />
            The key focus of the Foundation is to facilitate export led growth
            of the Indian plastic industry and help boost export business
            volumes and revenues. In line with that, the Foundation also focuses
            on helping India to become the preferred sourcing base of plastic
            products around the world. As part of this exercise, the Foundation
            creates opportunities to showcase Indian capabilities in processing
            and converting, at various industry trade shows across the world.{" "}
            <br />
          </h3>

          <div className="flex flex-col lg:flex-row  items-center space-y-5 lg:space-y-0  justify-center lg:-mx-4 mt-10">
            <button className="text-nowrap border-2 border-[#032624] lg:w-72 w-full text-sm lg:text-lg text-[#042523] px-4 py-4 rounded-full  ">
              <Link href={"/about-key-members"}>
                <h3>
                  Managing Committee
                  <span>
                    <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
                  </span>
                </h3>
              </Link>
            </button>
            {/* <div className="flex  w-full  lg:my-0 my-4   flex-row"> */}
            <button className="lg:ml-4 text-nowrap border-2 border-[#032624] w-full lg:w-96 text-sm lg:text-lg text-[#042523] px-4 py-4 lg:py-4 rounded-full  ">
              <Link href={"/about-members-association"}>
                <h3>
                  {" "}
                  Members of Plastindia Foundation
                  <span>
                    <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
                  </span>
                </h3>
              </Link>
            </button>

            <button className="lg:ml-4 border-2 border-[#032624] w-full lg:w-56 text-sm lg:text-lg text-[#042523] px-4 py-4 rounded-full  ">
              <Link href={"/secretariat"}>
                <h3>
                  Secretariat
                  <span>
                    <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
                  </span>
                </h3>
              </Link>
            </button>
            {/* </div> */}
          </div>

         
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-16  bg-[#F1F1F1] px-6 lg:pl-10  py-10 ">
          <div className="relative w-full lg:w-2/3   h-[30vh]  lg:h-[65vh]">
            <div className="absolute inset-0">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/VISION_35793e173d.png"
                }
                alt="Not Found"
                layout="fill"
                objectFit="cover"
                className="rounded-[30px] lg:rounded-[50px]"
              />
            </div>
          </div>
          <div className="flex lg:w-1/2 flex-col  lg:mt-10 bg-[#F1F1F1] px-6 lg:px-10 lg:pr-10  lg:py-10 ">
            <h2 className="text-[#3C3E3D] text-4xl text-center lg:text-[2.8em]">
              Our Vision
            </h2>

            <h3 className="lg:px-8 text-center text-md text-[#3C3E3D]">
              Plastindia Foundation will be an internationally recognized
              organization devoted to promoting excellence in the field of
              plastics, and making India a preferred sourcing base in plastics
              products for the world. It will support and encourage development
              of outstanding institutions committed to education and research,
              with emphasis on achieving the highest standards of quality in
              plastics products, and developing effective techniques for their
              recycling. It will build an awareness of the significant
              contribution made by plastics to society and to the environment.
            </h3>
          </div>
        </div>
      </section>
      <section className="flex lg:px-0 px-0 flex-col lg:flex-row  items-center justify-between mb-12 ">
        <div className="lg:w-[26vw] -mb-10 lg:mb-0 flex lg:px-0 px-6  items-start  flex-col text-justify mt-14 lg:mt-0 ml-0  lg:ml-10   text-[#3C3E3D]">
          <h3 className="text-3xl   lg:text-[2.5em]">Our Cornerstones</h3>
          <h4 className="text-md lg:px-2 ">
            At Plastindia Foundation, our values are the foundation of our
            mission and vision, reflecting our excellence and integrity in every
            facet of our work.
          </h4>
        </div>
        <div className="lg:w-[75vw]  lg:-mt-16 -mt-14 ">
          <SmallCarausalComp />
        </div>
      </section>
      <section
        id="vector-icon"
        className=" bg-[#032624] flex lg:flex-row flex-col px-6  lg:px-10 pb-20 items-center justify-center"
      >
        {" "}
        <div>
        <h3 className="text-[#FFFFFF] text-5xl lg:text-[2em] mt-10 lg:mt-20 leading-10 text-start ">
        President’s Message
          </h3>
          <div className="flex flex-col  lg:w-80 lg:pt-0 pt-10 items-center ">
            <Image
              src={imgceo}
              alt="Not found"
              height={800}
              width={800}
              className="w-72 lg:mt-10  "
            />

            <div>
              <h3 className="text-[#FFFFFF] opacity-70 text-lg mt-5 lg:mt-10 leading-10 text-center ">
                Mr. Ravish Kamath, President
              </h3>
              <Link href={"/about-president"}>
                <h2
                  style={{ fontSize: 15 }}
                  class="mt-5 text-center lg:mb-40 opacity-60 text-white  pt-2 relative"
                >
                  <span className="  cursor-pointer underline underline-offset-4 text-white">
                    Read more
                  </span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-col items-start  lg:mx-6 ">
          <h3 className="text-[#FFFFFF] text-xl lg:text-[1.5em] mt-14 lg:mt-20 mb-5 leading-10 text-start ">
            Dear Industry Colleagues & Friends,
          </h3>
          <h2 className="text-[#FFFFFF]  opacity-85 text-sm lg:text-[18px] mt-1 text-start ">
            Plastics industry plays a pivotal role in creating employment
            opportunities and driving economic growth in India. Through
            manufacturing expansion, skill development initiatives, employment
            diversity, and entrepreneurial avenues, the industry has become a
            significant contributor to the nation&apos;s workforce.
            <br />
            Equally we, at Plastindia Foundation, are aware it is essential to
            balance this growth with environmental sustainability and social
            responsibility. Efforts towards waste management, recycling
            infrastructure, and eco-friendly alternatives are crucial for
            mitigating the environmental impact of plastic production while
            ensuring long-term socio-economic benefits for the country.
            <br />
            Plastindia Foundation has been consistent to deliver equally on
            environment front as well. I would like to mention here that with
            our deliberate consistent efforts the Plastindia Foundation being
            the permanent member of Asia Plastic Forum has now bagged seat in
            one of the elite group recently and has been awarded membership at
            Global Plastic Alliance;- a multi stakeholder platform to accelerate
            the transition to a circular economy for plastics.
            <br />
            Plastindia Foundation has given its inputs to Department of
            Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers who
            represented India at INC 3 and INC 4. India stated that it supports
            an international legally binding agreement on plastic pollution only
            if reached through full consensus, rather than one made through a
            two-thirds majority. During the recent plenary session, the Indian
            delegation reiterated its position with New Delhi&apos;s backing for
            full consensus. The Indian delegation also emphasized the
            incorporation of principles such as equity, sustainable development,
            and common but differentiated responsibilities, along with a
            comprehensive list of 30 items.
            <br />
            Plastics make an immense contribution to the environmental
            sustainability through their energy saving potential and intrinsic
            recyclability and energy recovery options. Plastics being the wonder
            material, it solves many issues and with the growing applications of
            plastics, more and more products are being developed world over
            replacing heavier materials thus reducing consumption of many
            heavier material which in a way, are burden on the ecology.
            <br />
            Recycled and Sustainable Plastics are our requirement, the need of
            the hour, and everyone across the country is working to improve and
            increase their usage. I am sure with active participation of all the
            stakeholders, the perception of certain section who believe that
            plastics adds to pollution will be cleared for, the fact remains
            littering adds to pollution, and not Plastics!
          </h2>
        </div>
      </section>

      <ScrollingBox />

      <section>
        <div className="flex flex-col lg:flex-row  lg:mt-10 bg-[#F1F1F1] px-6 lg:px-10 lg:pr-10  py-10 ">
          <div className="lg:w-[60em]  flex flex-col justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-4xl lg:text-[2.8em]">
              Our Mission
            </h2>

            <h3 className="lg:px-8 text-center py-5 text-md text-[#3C3E3D]">
              <div className="flex flex-row items-start w-full py-0  px-6 lg:px-10 sm:w-auto">
                <ol>
                  <li className="list-disc text-start mb-2">
                    To enhance the image and the growth of the Indian Plastics
                    Industry by holding world-class exhibitions in India, at
                    regular intervals.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To encourage theme-based exhibitions in India.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To provide opportunities to demonstrate the industry&apos;s
                    capabilities, and to participate in international
                    exhibitions.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To educate the benefits of plastics to all segments of
                    society, either directly or through associations.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To act as a catalyst of growth for the plastics industry and
                    prepare plans and actions for up-gradation of quality,
                    environment-friendliness, and recycling within the plastics
                    industry.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To create a positive policy framework with all the statutory
                    entities, increase per capita consumption of plastics,
                    encourage exports, thereby significantly contributing to
                    national growth.
                  </li>
                  <li className="list-disc text-start mb-2">
                    To be a flexible, vibrant, and proactive foundation.
                  </li>
                </ol>
              </div>
            </h3>
          </div>
          <div className="relative w-full mt-4 h-[30vh] lg:h-[75vh]">
            <div className="absolute inset-0">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/MISION_b4652041a7.png"
                }
                alt="Not Found"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl  lg:rounded-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
