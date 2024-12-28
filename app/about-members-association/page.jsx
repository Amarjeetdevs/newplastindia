"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import imss1 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (1).png";
import imss2 from "../../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (2).png";
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
    pageref: "Foundation >  Members of Plastindia Foundation",
    title: "OUR FOUNDATION",

    description: "Members of Plastindia Foundation",
    content:
      "Plastindia  Foundation, established by <strong>visionary leaders and key industry associations,</strong> has become a <strong>phenomenal platform in the plastics sector globally. </strong> Meet the esteemed founders whose dedication and foresight have been pivotal to its success.",
  };

  const membersData = [
    {
      imgurl: imss7,
      name: "AIPMA",
      position:
        "The All India Plastics Manufacturers' <br/> Association, Mumbai",
      href: "https://www.aipma.net",
    },
    {
      imgurl: imss1,
      href: "https://www.gspma.in",
      name: "GSPMA",
      position:
        "Gujarat State Plastic Manufacturers  <br/> Association, Ahmedabad  ",
    },
    {
      imgurl: imss2,
      href: " https://www.ipiindia.org",
      name: "PLEXCONCIL",
      position: "The Plastics Export Promotion <br/> Council, Mumbai",
    },
    {
      imgurl: 'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Rectangle_40_9d85843770.png',
      name: "CIPET",
      position:
        "Central institute of Plastics Engineering & <br/> Technology, Chennai",
    },
    {
      imgurl: imss4,
      href: "https://www.ipiindia.org",
      name: "IPI",
      position: "Indian Plastics Institute,<br/> Mumbai",
    },
    {
      imgurl: imss5,
      href: "https://ipfindia.org",
      name: "IPF",
      position: "Indian Plastics Federation, <br/> Kolkata",
    },
    {
      imgurl: imss6,
      href: "https://oppindia.org",
      name: "OPPI",
      position: "Organization of Plastics Processors of <br/> India, Mumbai",
    },
  ];

  const associateMembersData = [
    {
      imgurl: imsm3,
      href: "https://aiftma.com",
      name: "AIFTMA",
      position: "All India Flat Tape Mfrs. Association, <br/> Bangalore",
    },
    {
      imgurl: imsm4,

      name: "TAPMA",
      position:
        "The Tamil Nadu Plastics Manufacturers' <br/> Association, Chennai",
    },
    {
      imgurl: imsm5,
    
      name: "KSPA",
      position: "Karnataka State Plastics <br/> Association",
    },
    {
      imgurl: imsm6,
      href: "https://kpma.in",
      name: "KPMA",
      position: "Kerala Plastics Manufacturers <br/> Association",
    },
    {
      imgurl: imsm7,
      href: "https://taapma.com",
      name: "TAAPMA",
      position:
        "Telangana and Andhra Pradesh <br/> Plastic Manufacturers Association",
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
      href: "https://cpmaindia.com",
      name: "CPMA",
      position:
        "Chemicals & Petrochemicals Manufacturers' <br/> Association, India ",
    },
    {
      imgurl: imsm2,
      href: "https://www.pmmai.org",
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
      <div className="px-10 pt-2">
        <div className="py-8 lg:py-14">
          <Image
            src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/plastindia_1_43235eacc2.png'}
            width={1000}
            height={1000}
            alt="Not Found"
            className="mix-blend-multiply w-full rounded-[50px] h-[20em] lg:h-full  "
          />
        </div>
        <div className="text-[#3C3E3D]">
          <h2 className="text-3xl lg:text-[2.65em]  my-10">Founder Members</h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {membersData.map((card, index) => (
              <a
                key={index}
                href={card?.href}
                className="card bg-[#E8E6DD4D] lg:w-auto md:w-auto shadow-xs rounded-xl block" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-105 duration-300"
                      src={card?.imgurl}
                      width={500}
                      height={500}
                      alt="Not Found "
                    />
                  </figure>
                  <div className="card-body text-[#686868] flex items-center justify-center">
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
              </a>
            ))}
          </div>
        </div>

        <div className="text-[#3C3E3D]">
          <h2 className="text-3xl lg:text-[2.65em] py-10">
            Constituent Members
          </h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {constituentMembersData.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="card bg-[#E8E6DD4D] lg:w-auto md:w-auto shadow-xs rounded-xl block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="card-body text-[#686868] flex items-center justify-center">
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
              </a>
            ))}
          </div>
        </div>

        <div className="text-[#3C3E3D]">
          <h2 className="text-3xl lg:text-[2.65em] py-10">Associate Members</h2>

          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mb-20 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {associateMembersData.map((card, index) => (
              <a
                key={index}
                href={card.href}
                className="card bg-[#E8E6DD4D] lg:w-auto md:w-auto shadow-xs rounded-xl block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8 hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="card-body text-[#686868] flex items-center justify-center">
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
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
