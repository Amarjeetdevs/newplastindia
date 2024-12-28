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
import img101 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 101.png";
import img102 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 102.png";
import img103 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 103.png";
import img104 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 104.png";
import img105 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 105.png";
import img106 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 106.png";
import img109 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 109.png";
import img110 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 110.png";
import img111 from "../../assets/ABOUT-KEY-MEMBERS/Rectangle 111.png";

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

    description: "Secretariat",
    content:
      "The Secretariat is the backbone of Plastindia Foundation, making sure everything runs smoothly. Led by <strong> industry experts, they manage daily operations, drive growth, and keep communication strong </strong>  across all departments to achieve the foundation's goals.",
  };

  const secretariatData = [
    {
      imgurl: img1,
      name: "Ravish Kamath",
      position: "President",
    },
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


  ];

  const secretariatData2 = [
    {
      imgurl: img101,
      name: "Tarun Marwah",
      position: "CEO & Sec General",
      email: "ceo@plastindia.org",
    },
   
  ];

  const secretariatData3 = [
    {
      imgurl: img102,
      name: "Mamta Oza",
      position: "Chief Business Development Manager",
      email: "mamtakoza@plastindia.org",
    },
    {
      imgurl: img103,
      name: "Venkatesh Naidu",
      position: "Secretary",
      email: "secretary@plastindia.org",
    },
    {
      imgurl: img104,
      name: "Shital Patel",
      position: "Sr. PR & Communication Manager",
      email: "pr.shital@plastindia.org",
    },
    {
      imgurl: img105,
      name: "Nipa Champaneri",
      position: "Chief Finance Manager",
      email: "accounts@plastindia.org",
    },
    {
      imgurl: img106,
      name: "Ms. Shilpa Jathar",
      position: "Manager – Directory & Database",
      email: "shilpaj@plastindia.org, directory@plastindia.org",
    },
    {
      imgurl: img109,
      name: "Leena Hate",
      position: "Assistant Manager Business Development",
      email: "leena@plastindia.org",
    },
    {
      imgurl: img110,
      name: "Sulabha Mane",
      position: "Senior Executive – Business Development",
      email: "sulbha@plastindia.org",
    },
    {
      imgurl: img111,
      name: "Sanchita Dalvi",
      position: "Executive-Business Development",
      email: "sanchita@plastindia.org",
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
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:pb-0 pb-5  lg:px-44 gap-5
       lg:mt-8"
          >
            {secretariatData.map((card, index) => (
                 <React.Fragment key={index}>
      <div className="flex justify-center">
               
               <div className="card bg-[#E8E6DD4D] flex items-center  w-full lg:w-[350px] md:w-auto shadow-xs rounded-xl"
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
                      //   style={{ fontSize: 18 }}
                      className="card-title text-[20px] -mt-3 text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p className="text-center text-[18px]">{card?.position}</p>
                    <p className="text-[18px] text-center -mx-6">
                      {card?.email}
                    </p>
                  </div>
                </div>
            
              </div>
              </div>
              </React.Fragment >
              
            ))}
          </div>
          <div
            className="grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:pb-0 pb-5  gap-5
       lg:mt-8"
          >
            {secretariatData2.map((card, index) => (
                 <React.Fragment key={index}>
      <div className="flex justify-center">
               
               <div className="card bg-[#E8E6DD4D] flex items-center w-full  lg:w-[350px] md:w-auto shadow-xs rounded-xl"
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
                      //   style={{ fontSize: 18 }}
                      className="card-title text-[20px] -mt-3 text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p className="text-center text-[18px]">{card?.position}</p>
                    <p className="text-[18px] text-center -mx-6">
                      {card?.email}
                    </p>
                  </div>
                </div>
            
              </div>
              </div>
              </React.Fragment >
              
            ))}
          </div>
         
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5
       lg:mt-8"
          >
            {secretariatData3.map((card, index) => (
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
                      //   style={{ fontSize: 18 }}
                      className="card-title text-[20px] -mt-3 text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p className="text-center text-[18px]">{card?.position}</p>
                    <p className="text-[18px] text-center -mx-6">
                      {card?.email}
                    </p>
                  </div>
                </div>
                {index === 2 && <div className="w-full h-0 my-4"></div>}
              </div>
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
