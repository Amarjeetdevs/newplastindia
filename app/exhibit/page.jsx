"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Card from "../../components/Card";
import ReachOut from "../../components/ReachOut";
import ExhibitorsComp from "../../components/ExhibitorsComp";
import imga from "../../assets/EXHIBITOR/Frame 551 (2).jpg";
import imgb from "../../assets/EXHIBITOR/Frame 551.jpg";
import imgc from "../../assets/EXHIBITOR/Frame 551 (3).jpg";
import imgd from "../../assets/EXHIBITOR/Frame 551 (4).jpg";
import img2 from "../../assets/PLASTINDIA_NewContent/PLASTINDIA/EXHIBITOR/main.png";

import TabComp from "../../components/TabComp";
import Countdown from "../../components/Countdown";
import FAQ from "../../components/Faq";
import imgn1 from "../../assets/EXHIBITOR/1501.jpg";

import imtt1 from "../../assets/EXHIBITOR/Exhibit/Exhibit/Before/1.png";
import imtt2 from "../../assets/EXHIBITOR/Exhibit/Exhibit/Before/2.png";
import imtt3 from "../../assets/EXHIBITOR/Exhibit/Exhibit/Before/3.png";

import imtt4 from "../../assets/EXHIBITOR/Exhibit/Exhibit/During/1.png";
import imtt5 from "../../assets/EXHIBITOR/Exhibit/Exhibit/During/2.png";
import imtt6 from "../../assets/EXHIBITOR/Exhibit/Exhibit/During/3.png";
import imtt7 from "../../assets/EXHIBITOR/Exhibit/Exhibit/During/4.png";

import imtt8 from "../../assets/EXHIBITOR/Exhibit/Exhibit/After/1.png";
import imtt9 from "../../assets/EXHIBITOR/Exhibit/Exhibit/After/2.png";
import imtt10 from "../../assets/EXHIBITOR/Exhibit/Exhibit/After/3.png";

import Link from "next/link";
import logo1 from "../../assets/EXHIBITOR/1.svg";
import logo2 from "../../assets/EXHIBITOR/2.svg";
import logo3 from "../../assets/EXHIBITOR/3.svg";
import logo4 from "../../assets/EXHIBITOR/4.svg";
import logo5 from "../../assets/EXHIBITOR/5.svg";
import logo6 from "../../assets/EXHIBITOR/6.svg";
import logo7 from "../../assets/EXHIBITOR/7.svg";
import logo8 from "../../assets/EXHIBITOR/8.svg";


const imagescomp = [
  {
    src: logo1,
    title: "Raw Materials",
    content:
      "Polymers & Resins, Intermediates, Blends & Alloys, Composites, Specialty Chemicals, Master Batches, Additives, Fillers and Reinforcements",
  },
  {
    src: logo2,
    title: "Processing Machineries / Moulds & Dies",
    content: "Injection / Extrusion / Ancillary Equipment / Instrumentation",
  },
  {
    src: logo3,
    title:
      "Post Processing Equipments, Machineries & Plants for Printing, Plating, Lamination, Surface Enhancement and Decoration",
    content: "",
  },
  {
    src: logo4,
    title:
      "Trade Promotion Bodies, Professional Associations and Technical Publishers",
    content: "",
  },
  {
    src: logo5,
    title: "Quality Control & Testing Equipments",
    content: "",
  },
  {
    src: logo6,
    title: "Recycling",
    content: "",
  },
  {
    src: logo7,
    title: "R&D, Education & Training Institutes",
    content: "",
  },
  {
    src: logo8,
    title: "Finished Products",
    content: "Plastic Products & Processing",
  },
];

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
  const images = [imgn1, imgn1, imgn1];

  const SubHeadingText = {
    pageref: "Exhibit",
    title: "DISCOVER PLASTINDIA 2026",

    description: "Hello, Exhibitors!",
    content:
      "Ready to showcase your innovations to the world? Start your journey here by <strong> registering online. </strong>Join us to unlock <strong> unparalleled business opportunities </strong> and be a part of shaping the future of the plastics industry.",
  };

  const cards = [
    {
      imgSrc: imga,
      title: "Global Networking",
      description:
        "Forge valuable connections with industry giants from across the globe.",
    },
    {
      imgSrc: imgb,
      title: "Latest Innovations",
      description:
        "Stay ahead by experiencing the newest trends and technologies first-hand.",
    },
    {
      imgSrc: imgc,
      title: "Market Expansion",
      description:
        "Explore new markets and seize opportunities for substantial growth.",
    },
    {
      imgSrc: imgd,
      title: "Expert Insights",
      description:
        "Gain invaluable knowledge from world-renowned experts and thought leaders.",
    },
  ];

  const reachData = {
    title: "Exhibitors Central:",
    description: "All the actions you need to take, at one place.",
  };
  const faqData = [
    {
      question: "How do I register as an exhibitor for  PLASTINDIA 2026?",
      answer: (
        <>
          You can register online by clicking here through the official
          PLASTINDIA website. Early registration is recommended to secure your
          spot. You can register online through the official{" "}
        </>
      ),
    },
    {
      question: "How can I access technical support during the event?",
      answer: (
        <>
          Technical support will be available on-site throughout the event and
          through our WhatsApp number +918051305305. <br /> You can contact the
          support team at the designated help desks or call us at +918051305305
        </>
      ),
    },
    {
      question: "How can I book a stall at  PLASTINDIA 2026?",
      answer: (
        <>
          For new exhibitors, visit{" "}
          <a href="https://www.plastindia.org" target="_blank">
            www.plastindia.org
          </a>{" "}
          for space booking details. If you were an exhibitor at PI2023, log in
          using your existing username or generate a new password. If you need
          assistance, please email{" "}
          <a href="mailto:info@plastindia.org">info@plastindia.org</a>.
        </>
      ),
    },
    {
      question:
        " What are the charges for booking a stall, and are there any discounts available? ",
      answer: (
        <>
          Stall charges are detailed in the Space Rent Tariff chart available on
          the PLASTINDIA website. Early Bird Discounts of Rs. 800 per sqm are
          available for those who confirm their space before the deadline. For
          more information, visit the tariff section on our website.
        </>
      ),
    },
    {
      question:
        "What should I do if I forget my login details for the exhibitor portal? ",
      answer: (
        <>
          If you have forgotten your username or password, you can request a
          reset by emailing our Business Development Team at
          info@plastindia.org. For first-time exhibitors, follow the
          registration process on our website to create new login credentials.
        </>
      ),
    },
    {
      question:
        "Are there any networking events or opportunities for exhibitors?",
      answer: (
        <>
          Yes, there will be several networking events, including the CEO
          Conclave and RBSM meetings.
        </>
      ),
    },
  ];

  const buttonsArray = ["Before the show", "During the show", "After the show"];

  const subtitle = {
    title: "Why Participate?",
    description:
      "Discover <strong> unparalleled opportunities </strong> to innovate and network at our premier plastics exhibition. Engage with industry leaders, <strong> explore cutting-edge advancements, </strong> and <strong> expand your global footprint </strong> with every interaction.",
  };
  const tabtitle = {
    title: "Exhibiting Sustainability",
    description:
      "Plastindia 2026 is committed to reducing its environmental impact by embracing sustainable practices. Key initiatives include digital ticketing, energy-efficient lighting, and comprehensive waste reduction programs. The event will prioritize zero-waste goals, promoting solutions that minimize waste generation and maximize resource efficiency. By encouraging exhibitors and attendees to adopt greener approaches, Plastindia aims to lead the plastics industry towards a more sustainable future and promote circular economy.",
  };

  const tabdata = {
    content: [
      {
        subtitle: "Digital Ticketing and Online Meetings:",
        content:
          "We encourage the use of digital ticketing to reduce paper waste and promote online meetings to minimize travel-related carbon emissions.",
        images: imtt1,
      },
      {
        subtitle: "Sustainable Service Providers:",
        content:
          "Collaborate with partners who prioritize sustainability. This includes selecting local providers to reduce transportation emissions and working with eco-friendly companies.",
        images: imtt2,
      },
      {
        subtitle: "Modular Stand Constructions:",
        content:
          "Opt for modular and reusable stand constructions that can be easily assembled and disassembled without damage. Choose materials that are recyclable or biodegradable.",
        images: imtt3,
      },
    ],
    content1: [
      {
        subtitle: "Minimalist Approach: ",
        content:
          "We adopt a minimalist approach in our trade fair stands, using fewer materials and eco-friendly promotional materials.",
        images: imtt4,
      },
      {
        subtitle: "Energy and Equipment: ",
        content:
          "Our venue is powered by energy-efficient lighting and green energy sources, and we utilize energy-efficient equipment throughout the event.",
        images: imtt5,
      },
      {
        subtitle: "Waste Management:",
        content:
          "We implement recycling stations, use reusable packaging, and follow the principles of avoid, reduce, and recycle for proper waste management.",
        images: imtt6,
      },
      {
        subtitle: "Mobility and Accommodation:",
        content:
          "We encourage public transportation and low-emission travel options, and recommend eco- friendly hotels for attendees.",
        images: imtt7,
      },
    ],
    content2: [
      {
        subtitle: "Proper Dismantling Practices:",
        content:
          "Ensure that reusable components are carefully packed for future use and that any leftover materials are donated or recycled. This reduces waste and supports sustainable practices.",
        images: imtt8,
      },
      {
        subtitle: "Donation of Leftover Materials and Food:",
        content:
          "Claborate with local charities to donate any leftover materials or food from the event. This helps in reducing waste and supports the local community.",
        images: imtt9,
      },
      {
        subtitle: "Evaluation of Carbon Footprint:",
        content:
          "Conduct a thorough evaluation of the event's carbon footprint to identify areas for improvement. Use this data to implement better practices in future events.",
        images: imtt10,
      },
    ],
  };
  const url = "https://exhibitors.plastindia.org";
  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <ExhibitorsComp />
      <Card cards={cards} subtitle={subtitle} />
      <ReachOut data={reachData} value={"Exhibitor"} url={url} />
      <section className="px-6  pt-16 ">
        <Image
          id="trde-img"
          src={img2}
          alt="TRADESHOW"
          className=" rounded-3xl   lg:rounded-[50px]  object-cover    w-full   lg:mt-0 mt-5 lg:w-full lg:h-[27em]  "
        />
      </section>
      <section className="flex  flex-col lg:flex-row  px-10 mt-10 py-3 text-[#3C3E3D]">
        <div className="lg:w-1/2">
          <h4 className="text-md lg:text-lg font-satoshi">EXHIBITOR PROFILE</h4>
          <h2 className=" text-3xl my-3 lg:text-[2.65em] font-light lg:font-semibold font-satoshi">
            Showcase of Global <br className="hidden lg:block" /> Innovators:
          </h2>
        </div>
        <div className="lg:w-1/2 ml-0  lg:ml-16 ">
          <h4 className="text-md lg:mb-0 mb-8 font-satoshi">
            Discover the diverse range of exhibitors at PLASTINDIA 2026,
            representing cutting-edge innovations and sustainable solutions in
            the plastics industry. Explore their profiles and learn how they&apos;re
            shaping the future of manufacturing and technology.
          </h4>

          <Link href="/brewing-soon" passHref>
            <button className="bg-[#042523] w-full mb-20  lg:mb-0 mt-4 text-md lg:text-lg font-satoshi text-white px-3 lg:px-4 py-3 lg:py-5 rounded-full border-2 flex items-center justify-center">
            Exhibitor List
              <span className="ml-2">
                <ArrowOutwardIcon className="text-white w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </section>
      {/* <section>
        <div className="-mt-8 mx-1 lg:mx-0 lg:-mt-5 mb-20">
          <Carausal />
        </div>
      </section> */}
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:mb-0 mb-16 lg:mt-16 lg:px-10">
        {imagescomp.map((image, index) => (
          <div
            key={index}
            className=" bg-[#E9EFDF] rounded-lg  overflow-hidden h-56 flex flex-col"
          >
            <div className="flex flex-col justify-center items-start p-4">
              <div className="">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={75}
                  height={75}
                  className=" w-16 h-16 object-contain scale-125 rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg text-[#3C3E3D] pt-5 font-bold">
                  {image.title}
                </h3>
                <p className="text-sm text-[#3C3E3D]">{image.content}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <TabComp
        tabtitle={tabtitle}
        tabdata={tabdata}
        buttonsArray={buttonsArray}
        images={images}
      />
      <section className="px-6 lg:px-10 text-[#000000]">
        <div className="flex flex-col lg:flex-row mt-10 lg:mt-24 lg:items-center justify-between  mb-8">
          <h2 className=" text-3xl lg:text-[2.65em] mb-5 lg:mb-0 ">Have questions?</h2>
          <Link href={"/faq"}>
            <button
              id="visit-brewing"
              className="relative bg-[#042523] text-md text-center font-light  text-[#FFFFFF] text-nowrap lg:px-16 px-4 py-4 rounded-full border-2 border-[#042523] 
       border-none flex items-center justify-center transition-all  duration-300 "
            >
              <span className="mr-3 ">View All</span>
              <span className="relative flex items-center">
                <ArrowOutwardIcon className="text-white w-5 h-5 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              </span>
            </button>
          </Link>
        </div>
        <FAQ data={faqData} />
      </section>
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
