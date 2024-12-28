"use client";
import Image from "next/image";
import React, { Suspense, lazy, useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import VisitorsComp from "../../components/VisitorsComp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import imga from "../../assets/VISITORS/Frame 551.jpg";
import imgb from "../../assets/VISITORS/Frame 551 (1).jpg";
import imgc from "../../assets/VISITORS/Frame 551 (2).jpg";
import imgd from "../../assets/VISITORS/Frame 551 (3).jpg";
import Countdown from "../../components/Countdown";
import FAQ from "../../components/Faq";
import TabComp from "../../components/TabComp";
import Carausal from "../../components/Carausal";
import imgn1 from "../../assets/VISITORS/1.png";
import imgn2 from "../../assets/VISITORS/2.png";
import imgn3 from "../../assets/VISITORS/3.png";
import imgt1 from "../../assets/VISITORS/TRAVEL INFORMATION/GETTING TO DELHI/1.png";
import imgt2 from "../../assets/VISITORS/TRAVEL INFORMATION/GETTING TO DELHI/2.png";
import imgt3 from "../../assets/VISITORS/TRAVEL INFORMATION/GETTING TO DELHI/3.png";
import imgt4 from "../../assets/VISITORS/TRAVEL INFORMATION/LOCAL TRANSPORT/4.png";
import imgt5 from "../../assets/VISITORS/TRAVEL INFORMATION/LOCAL TRANSPORT/5.png";
import imgt6 from "../../assets/VISITORS/TRAVEL INFORMATION/LOCAL TRANSPORT/6.png";
import imgt7 from "../../assets/VISITORS/TRAVEL INFORMATION/TIPS & INFORMATION/7.png";
import imgt8 from "../../assets/VISITORS/TRAVEL INFORMATION/TIPS & INFORMATION/8.png";
import imgt9 from "../../assets/VISITORS/TRAVEL INFORMATION/TIPS & INFORMATION/9.png";
import imgt10 from "../../assets/VISITORS/TRAVEL INFORMATION/TIPS & INFORMATION/10.png";
import ReachoutVisit from "../../components/ReachoutVisit";
import logo1 from "../../assets/VISITORS/1.svg";
import logo2 from "../../assets/VISITORS/2.svg";
import logo3 from "../../assets/VISITORS/3.svg";
import logo4 from "../../assets/VISITORS/4.svg";
import logo5 from "../../assets/VISITORS/5.svg";
import logo6 from "../../assets/VISITORS/6.svg";
import logo7 from "../../assets/VISITORS/7.svg";
import logo8 from "../../assets/VISITORS/8.svg";

const HistoricalMonumentsCarausalComp = lazy(() =>
  import("@/components/HistoricalMonumentsCarausal")
);

const imagescomp = [
  {
    src: logo1,
    title: "The Plastics Industry",
    content: "Raw Material Users, Manufacturers, Processors",
  },
  {
    src: logo2,
    title: "CEOs, Directors, Owners & Startups",
    content: "Business Opportunity Seekers",
  },
  {
    src: logo3,
    title: "Recycling & Sustainability",
    content: "Industry",
  },
  {
    src: logo4,
    title: "Financers & Investors",
    content: "Policy Makers",
  },
  {
    src: logo5,
    title: "Regulators, Law Makers, Govt. Officials",
    content: "Facilitators",
  },
  {
    src: logo6,
    title: "Educationists, Academic Institutes",
    content: "Ecosystem Creators, Researchers",
  },
  {
    src: logo7,
    title: "Traders, Wholesalers Imports & Exports",
    content: "",
  },
  {
    src: logo8,
    title: "Users Industries",
    content:
      "Agriculture, Automotive, Infrastructure, Chemical, Food, Medical, Consumer Products, Textiles, Logistics, Packaging, Printing, Information Tech.",
  },
];

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
    
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwiper(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);



  

  const SubHeadingText = {
    pageref: "Visit",
    title: "DISCOVER PLASTINDIA 2026",
    description: "Hello, Visitors!",
    content:
      "Explore the latest in plastics technology and connect with <strong>top industry professionals</strong>  at  PLASTINDIA 2026. Join us for a dynamic experience filled with <strong>opportunities to gain insights,</strong> discover new products, and forge valuable partnerships that could shape the future of your business.",
  };
  const reachData = {
    title: "Visitors Central:",
    description: "All the actions you need to take, at one place.",
  };

  const cards = [
    {
      imgSrc: imga,
      title: "Raw Materials and Auxiliaries",
      description:
        "Dive into the building blocks of all plastic products with a comprehensive showcase of raw materials and auxiliary agents.",
    },
    {
      imgSrc: imgb,
      title: "Machinery and Equipment",
      description:
        "See the latest advancements in plastics machinery and equipment, essential for modern manufacturing and processing.",
    },
    {
      imgSrc: imgc,
      title: "Semi-Finished Products",
      description:
        "Explore a vast array of semi-finished plastics goods, ready for further processing and integration into varied applications.",
    },
    {
      imgSrc: imgd,
      title: "Finished Products",
      description:
        "Discover a diverse collection of finished plastics items, demonstrating the versatility and innovation in end-use applications.",
    },
  ];
  const faqData = [
    {
      question: "Dates & Time for PLASTINDIA 2026 Exhibition?",
      answer: (
        <>
          PLASTINDIA 2026 – 12th International Plastic Exhibition, Conference &
          Convention will be held from 5th February to 10th February 2026.
        </>
      ),
    },
    {
      question: "What are the timings of the Exhibition?",
      answer: (
        <>
          From 5th Feb to 9th Feb - 10.00 am to 06.00 pm & 10th Feb 10 .00 am to
          5.00 pm.
        </>
      ),
    },
    {
      question: "What is the discount available and till when?",
      answer: (
        <>
          There are no discounts being offered, however if you book on line, the
          passes are available at discounted rates.
        </>
      ),
    },
    {
      question:
        "Are the prices for online & onsite purchase of Visitor Pass different?",
      answer: (
        <>
          Yes, there&apos;s a notable difference in prices between online and
          offline purchases. Online purchases come with substantial discounts.
        </>
      ),
    },
    {
      question: "How many times entry/re-entry on Single day pass?",
      answer: (
        <>The one-day pass allows for multiple entries on the same day.</>
      ),
    },
    {
      question: "Is there any parking Facility for visitors?",
      answer: (
        <>
          You can park your vehicle at the pay and park facility located at
          Bhairon Mandir Parking.
        </>
      ),
    },
  ];

  const tabtitle = {
    title: "Travel Information",
    description:
      "Welcome to the Travel Information section for  PLASTINDIA 2026! As we prepare to host this prestigious event in New Delhi, we aim to ensure that your journey to the heart of India is as seamless and enjoyable as possible. ",
  };

  const images = [imgn1, imgn2, imgn3];

  const buttonsArray = [
    "Getting to Delhi",
    "Local Transport",
    "Tips & Information",
  ];

  const tabdata = {
    content: [
      {
        subtitle: "By Air",
        content:
          "<strong> Indira Gandhi International Airport (IGI) </strong> is the primary airport serving New Delhi, and it is well-connected with major cities around the world. The airport has three terminals: Terminal 1 (Domestic), Terminal 2 (Low-Cost Domestic), and Terminal 3 (International and Domestic). Major international airlines such as <strong> Emirates, Lufthansa, British Airways, and Air India operate frequent flights to and from IGI Airport. </strong> ",
        images: imgt1,
      },

      {
        subtitle: "By Train",
        content:
          "<strong> New Delhi Railway Station (NDLS) </strong> is a major hub in the Indian Railways network, connecting the city to various parts of India. Other key railway stations include <strong> Hazrat Nizamuddin (NZM) and Anand Vihar Terminal (ANVT). </strong> For visitors coming from neighboring states, <strong> the Gatimaan Express, Shatabdi Express, and Rajdhani Express </strong> trains offer quick and comfortable travel.",
        images: imgt2,
      },
      {
        subtitle: "By Road",
        content:
          "New Delhi is accessible via an extensive network of highways and expressways.<strong> Interstate buses </strong> operated by state transport corporations and private operators provide reliable services. <strong> The Delhi Transport Corporation (DTC) </strong> offers regular bus services from neighboring states such as <strong> Haryana, Punjab, Rajasthan, and Uttar Pradesh. </strong>",
        images: imgt3,
      },
    ],

    content1: [
      {
        subtitle: "Metro",
        content:
          "The Delhi Metro is a modern and efficient way to travel around the city. It covers most major areas, <strong> including the venue for  PLASTINDIA 2026. </strong> The metro system is known for its <strong> cleanliness, safety, and punctuality. </strong> You can purchase tokens for single journeys or get a smart card for multiple trips.",
        images: imgt4,
      },
      {
        subtitle: "Taxis and Ride-Sharing",
        content:
          "For ease of travel, taxis are readily available, and apps like <strong> Uber and Ola </strong> provide efficient services. Utilize <strong> prepaid taxi </strong> options at airports and stations for secure travel to your destination.",
        images: imgt5,
      },

      {
        subtitle: "Auto-Rickshaws",
        content:
          "Auto-rickshaws are a popular mode of transport for short distances. Ensure to <strong> negotiate the fare before starting your journey </strong> or ask the driver to use the meter, Auto-rickshaws can be a <strong> quick and cost-effective </strong> way to navigate through the bustling streets of Delhi.",
        images: imgt6,
      },
    ],

    content2: [
      {
        subtitle: "Language",
        content:
          "<strong> Hindi and English </strong> are widely spoken in New Delhi.<strong> Most signs, menus, and information boards are bilingual,</strong> making it easy for international visitors to navigate the city.",
        images: imgt7,
      },
      {
        subtitle: "Currency",
        content:
          " The local currency is the <strong> Indian Rupee (INR). </strong> ATMs are widely available,<strong> and credit/debit cards are accepted at most hotels, restaurants, and shops. </strong> It's advisable to carry some cash for smaller vendors and auto-rickshaw rides.",
        images: imgt8,
      },
      {
        subtitle: "Climate",
        content:
          "New Delhi experiences a <strong> diverse climate. </strong> January and February are typically cooler months, with temperatures ranging between 10°C to 20°C (50°F to 68°F). It's advisable to <strong> carry a light jacket or sweater for the evenings. </strong>",
        images: imgt9,
      },
      {
        subtitle: "Safety",
        content:
          " New Delhi is generally safe for tourists, but it's always best to stay vigilant, Keep your <strong> belongings secure, avoid isolated areas after dark, and use registered taxis or ride- sharing services. </strong> In case of emergencies, <strong> dial 112 for immediate assistance. </strong>",
        images: imgt10,
      },
    ],
  };
const leadTitle=`Share your details, and we'll reach out to you once the registration process begins.`
  const subtitle = {
    title: "Discover the Spectrum of Plastics Innovation",
    description:
      "Experience the <strong> full breadth of the plastics industry </strong> under one roof at  PLASTINDIA 2026. From raw materials to the latest finished products, explore how every segment drives the future of plastics.",
  };
  const url = "/brewing-soon";
  return (
    <div className="bg-[#F7F7F7] font-satoshi ">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <VisitorsComp />
      {/* <Card cards={cards} subtitle={subtitle} /> */}

      <div className="mt-20">
        <ReachoutVisit data={reachData} url={url} />
      </div>
      <section className="lg:px-10 lg:mt-0 mt-12 text-[#3C3E3D] px-6">
        <h2 className="lg:mt-14 text-3xl lg:text-[2.4em]">
          Discover the Spectrum of Plastics Innovation
        </h2>
        <h3 className="text-md lg:pb-0 pb-4 ">
          Experience the full breadth of the plastics industry under one roof at
          PLASTINDIA 2026. From raw materials to the <br /> latest finished
          products, explore how every segment drives the future of plastics.
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-8 ">
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
        </div>
      </section>

      <section className="relative lg:my-[80px]  mt-12 bg-[#032624] text-[#FFFFFF] ">
        <div className="flex lg:px-20 md:px-10 px-5 md:py-10 lg:py-20 py-6 md:justify-between lg:justify-between items-center flex-col md:flex-row lg:flex-row lg:gap-x-16 md:gap-x-16">
          <h1 className="lg:w-[40%] md:w-[40%] text-center md:text-start lg:mb-0 md:mb-0 mb-5 lg:text-start text-[20px] lg:text-4xl lg:leading-[58px] leading-6 font-satoshi font-bold ">
            Planning to Visit PlastIndia 2026?
          </h1>
          <div className="lg:w-[48%] md:w-[48%] flex flex-col items-center md:items-start lg:items-start">
            <h2 className="lg:mb-7 md:mb-7 mb-5 font-normal text-md lg:text-2xl leading-5 lg:leading-8">
          {leadTitle}
            </h2>
            <Link href={"/lead-generation-form"}>
              <button
                id="visit-brewing"
                className="relative text-[#042523] text-md text-center font-light  bg-[#FFFFFF] text-nowrap lg:px-16 px-5 py-4 rounded-full border-2 border-[#042523] 
       border-none flex items-center justify-center transition-all  duration-300 "
              >
                <span className="mr-3 ">Fill out the Form</span>
                <span className="relative flex items-center">
                  <ArrowOutwardIcon className="text-[#042523] w-5 h-5 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="lg:mt-0 mt-10">
        <TabComp
          tabtitle={tabtitle}
          tabdata={tabdata}
          buttonsArray={buttonsArray}
          images={images}
        />
      </div>
      <div>
        {showSwiper ? (
          <Suspense fallback={<div>Loading...</div>}>
            <HistoricalMonumentsCarausalComp />
          </Suspense>
        ) : (
          <div>Loading Swiper...</div>
        )}
      </div>

      <div className=" -mt-8 mx-1 lg:mx-0 lg:-mt-5 mb-20">
        <Carausal />
      </div>

      <section className="font-satoshi px-10  text-[#000000]">
        <div className="flex flex-col lg:flex-row -mt-16 lg:mt-24 lg:items-center justify-between  mb-8">
          <h2 className=" text-3xl lg:text-[2.65em] mb-5 lg:mb-0 ">
            Have questions?
          </h2>
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
