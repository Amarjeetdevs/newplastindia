"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import imgabout from "../../assets/ABOUT-KEY-ASSOCATION/ABOUT-IMAGE (3).png";
import imss1 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (1).png";
import imss2 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (2).png";
import imss3 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (3).png";
import imss4 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (4).png";
import imss5 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (5).png";
import imss6 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (6).png";
import imss7 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40.png";

import imsm1 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 50.png";
import imsm2 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 51.png";
import imsm3 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 52.png";
import imsm4 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 53.png";
import imsm5 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 54.png";
import imsm6 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 55.png";
import imsm7 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 56.png";
import imsm8 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 57.png";

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
    pageref: "Foundation > Associate members",
    title: "OUR FOUNDATION",

    description: "Visionaries of PLASTINDIA",
    content:
      "PLASTINDIA Foundation, established by <strong>visionary leaders and key industry associations, </strong> has become a <strong>phenomenal platform in the plastics sector globally. </strong> Meet the esteemed founders whose dedication and foresight have been pivotal to its success.",
  };

  const membersData = [
    {
      imgurl: imss7,
      name: "AIPMA",
      position:
        "The All India Plastics Manufacturers' <br/> Association, Mumbai",
    },
    {
      imgurl: imss1,
      name: "GSPMA",
      position:
        "Gujarat State Plastic Manufacturers  <br/> Association, Ahmedabad  ",
    },
    {
      imgurl: imss2,
      name: "PLEXCONCIL",
      position: "The Plastics Export Promotion <br/> Council, Mumbai",
    },
    {
      imgurl: imss3,
      name: "CIPET",
      position:
        "Central institute of Plastics Engineering & <br/> Technology, Chennai",
    },
    {
      imgurl: imss4,
      name: "IPI",
      position: "Indian Plastics Institute,<br/> Mumbai",
    },
    {
      imgurl: imss5,
      name: "IPF",
      position: "Indian Plastics Federation, <br/> Kolkata",
    },
    {
      imgurl: imss6,
      name: "OPPI",
      position: "Organization of Plastics Processors of <br/> India, Mumbai",
    },
  ];

  const associateMembersData = [
    {
      imgurl: imsm3,
      name: "AIFTMA",
      position:"All India Flat Tape Mfrs. Association, <br/> Bangalore",
    },
    {
      imgurl: imsm4,
      name: "TAPMA",
      position: "The Tamil Nadu Plastics Manufacturers' <br/> Association, Chennai",
    },
    {
      imgurl: imsm5,
      name: "KSPA",
      position: "Karnataka State Plastics <br/> Association",
    },
    {
      imgurl: imsm6,
      name: "KPMA",
      position: "Kerala Plastics Manufacturers <br/> Association",
    },
    {
      imgurl: imsm7,
      name: "TAAPMA",
      position: "Telangana and Andhra Pradesh <br/> Plastic Manufacturers Association",
    },
    {
      imgurl: imsm8,
      name: "SPMA",
      position: "Saurashtra Plastics Mfrs. <br/> Association, Rajkot",
    },
  ];

  const constituentMembersData = [
    {
      imgurl: imsm1,
      name: "CPMA",
      position:
        "Chemicals & Petrochemicals Manufacturers' <br/> Association, India ",
    },
    {
      imgurl: imsm2,
      name: "PMMAI",
      position: "Plastics Machinery Manufacturers <br/>  Association of India",
    },
  ];

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="px-6 lg:px-10 pt-2">
        <div className="">
          <Image
            src={imgabout}
            alt="Not Found"
            className="mix-blend-multiply lg:py-14"
          />
        </div>
        <div className="text-[#3C3E3D]">
          <h2 style={{ fontSize: 42 }}>Founder Members</h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {membersData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="card-body  text-[#686868] flex items-center justify-center">
                    <h2
                      style={{ fontSize: 18 }}
                      className="card-title text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p
                      className="text-sm text-center"
                      dangerouslySetInnerHTML={{ __html: card?.position }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#3C3E3D]">
          <h2 style={{ fontSize: 42 }}>Constituent Members</h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {constituentMembersData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="card-body  text-[#686868] flex items-center justify-center">
                    <h2
                      style={{ fontSize: 18 }}
                      className="card-title -mt-3 text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p
                      className="text-sm text-center"
                      dangerouslySetInnerHTML={{ __html: card?.position }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#3C3E3D]">
          <h2 style={{ fontSize: 42 }}>Associate Members</h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {associateMembersData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="card-body  text-[#686868] flex items-center justify-center">
                    <h2
                      style={{ fontSize: 18 }}
                      className="card-title -mt-3 text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>

                    <p
                      className="text-sm text-center"
                      dangerouslySetInnerHTML={{ __html: card?.position }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
