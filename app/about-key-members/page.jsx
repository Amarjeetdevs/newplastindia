"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import img1 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 39.png";
import img2 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 40.png";
import img3 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 41.png";
import img4 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 42.png";
import img5 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 43.jpg";
import img6 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 44.jpg";
import img7 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 45.png";
import img8 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 46.png";
import img9 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 47.png";
import img10 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 48.png";
import img11 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 49.png";
import img12 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 50.png";
import img13 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 51.png";
import img14 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 52.png";
import img16 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 54.png";
import img1122 from "../../assets/ABOUT-KEY-MEMBERS/Vishal_Verma.png";

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
    pageref: "Foundation > Key Members",
    title: "OUR FOUNDATION",

    description: "Managing Committee",
    content:
      "<strong>Meet the hearts </strong> that keep the Plastindia Foundation beating. Our <strong>Managing Committee </strong> drives success, innovation, and excellence in plastics towards universal superiority.",
  };

  const membersData = [
    {
      imgurl: img1,
      name: "Ravish Kamath",
      position: "President",
    },
  ];

  const membersData2 = [
    {
      imgurl: img2,
      name: "Dr. Raju D. Desai",
      position: "Vice President",
    },
    {
      imgurl: img3,
      name: "Mr. Dharmendra Gandhi",
      position: "Hon. Treasurer",
    },
    {
      imgurl: img4,
      name: "Mr. Jigish Doshi",
      position: "Imm. Past President",
    },
  ];
  const membersData3 = [
    {
      imgurl: img5,
      name: "Mr. Hemant Minocha",
      position: "Member",
    },
    {
      imgurl: img6,
      name: "Mr. Jayesh K.Rambhia",
      position: "Member",
    },
    {
      imgurl: img7,
      name: "Mr. V. K. Taparia",
      position: "Member",
    },
    {
      imgurl: img8,
      name: "Mr. Alpesh Bipinchandra Patel",
      position: "Member",
    },
    {
      imgurl: img9,
      name: "Mr. Rashmikant Kishorchandra Mehta",
      position: "Member",
    },

    {
      imgurl: img11,
      name: "Mr. Sisir Jalan",
      position: "Member",
      date: "",
    },
    {
      imgurl: img10,
      name: "Mr. Lalit Agrawal",
      position: "Member",
      date: "( 16.08.2024 - till date)",
    },
    {
      imgurl: img12,
      name: "Mr. Abhay Upadhye",
      position: "Member",
    },
  ];

  const membersData4 = [
    {
      imgurl: img13,
      name: "Mr. Anil Reddy Vennam",
      position: "Member",
    },
    {
      imgurl: img14,
      name: "Prof. (Dr.) Shishir Sinha",
      position: "Member",
    },
    {
      imgurl: img1122,
      name: "Dr. Vishal Verma",
      position: "Member",
    },
  ];

  const membersData5 = [
    {
      imgurl:
        "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Rectangle_39_9883424c64.png",
      name: "Mr. Sunil Jain",
      position: "Member",
    },
    {
      imgurl: img16,
      name: "Mr. Kamal P. Nanavaty",
      position: "Member",
    },
  ];

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="px-10 pt-2 ">
        
        <div className="text-[#3C3E3D]">
          <div className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 pb-5  lg:pb-5 md:pb-20 gap-5 lg:mt-8 justify-center items-center">
            {membersData.map((card, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="card bg-[#E8E6DD4D] lg:w-[350px] md:w-auto shadow-xs rounded-xl">
                    <div className="">
                      <figure className="flex justify-center">
                        <Image
                          className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                          src={card?.imgurl}
                          alt="Not Found"
                        />
                      </figure>
                      <div className="card-body text-[#686868] flex items-center justify-center">
                        <h2
                          style={{ fontSize: 18 }}
                          className="card-title text-[#3C3E3D]"
                        >
                          {card?.name}
                        </h2>
                        <p className="text-sm">{card?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:mx-44 sm:grid-cols-1 pb-5  lg:pb-5 md:pb-0 gap-5 lg:mt-0 justify-center items-center">
            {membersData2.map((card, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="card bg-[#E8E6DD4D] lg:w-[350px] md:w-auto shadow-xs rounded-xl">
                    <div className="">
                      <figure className="flex justify-center">
                        <Image
                          className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                          src={card?.imgurl}
                          alt="Not Found"
                        />
                      </figure>
                      <div className="card-body text-[#686868] flex text-center items-center justify-center">
                        <h2
                          style={{ fontSize: 18 }}
                          className="card-title text-[#3C3E3D]"
                        >
                          {card?.name}
                        </h2>
                        <p className="text-sm">{card?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 pb-5 lg:pb-5 md:pb-20 gap-5 lg:mt-0 justify-center items-center">
            {membersData3.map((card, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="card bg-[#E8E6DD4D]  lg:w-96 md:w-auto shadow-xs rounded-xl">
                    <div className="">
                      <figure className="flex justify-center">
                        <Image
                          className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                          src={card?.imgurl}
                          alt="Not Found"
                        />
                      </figure>
                      <div className="card-body text-[#686868] flex items-center justify-center">
                        <h2
                          style={{ fontSize: 18 }}
                          className="card-title text-[#3C3E3D]"
                        >
                          {card?.name}
                        </h2>
                        <p className="text-sm">{card?.position}</p>
                        <p className="text-sm -mt-1">{card?.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 lg:px-44 md:grid-cols-2 sm:grid-cols-1 lg:pb-0 md:pb-20 gap-5 lg:mt-0 justify-center items-center">
            {membersData4.map((card, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="card bg-[#E8E6DD4D] lg:w-[350px] md:w-auto shadow-xs rounded-xl">
                    <div className="">
                      <figure className="flex justify-center">
                        <Image
                          className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                          src={card?.imgurl}
                          alt="Not Found"
                        />
                      </figure>
                      <div className="card-body text-[#686868] flex items-center justify-center">
                        <h2
                          style={{ fontSize: 18 }}
                          className="card-title text-[#3C3E3D]"
                        >
                          {card?.name}
                        </h2>
                        <p className="text-sm">{card?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="grid lg:flex lg:mt-5 md:grid-cols-2 sm:grid-cols-1 lg:pb-0 md:pb-20 gap-5  justify-center items-center">
            {membersData5.map((card, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-center">
                  <div className="card bg-[#E8E6DD4D] lg:w-[350px] md:w-auto shadow-xs rounded-xl">
                    <div className="">
                      <figure className="flex justify-center">
                        <Image
                          className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                          src={card?.imgurl}
                          alt="Not Found"
                          width={500}
                          height={500}
                        />
                      </figure>
                      <div className="card-body text-[#686868] flex items-center justify-center">
                        <h2
                          style={{ fontSize: 18 }}
                          className="card-title text-[#3C3E3D]"
                        >
                          {card?.name}
                        </h2>
                        <p className="text-sm">{card?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Countdown />

      <Footer />
    </div>
  );
};

export default Page;
