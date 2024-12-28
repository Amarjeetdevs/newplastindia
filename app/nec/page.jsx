"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import img from "../../assets/NEC/1.png";
import img1 from "../../assets/NEC/2.png";
import img2 from "../../assets/NEC/3.png";
import img3 from "../../assets/NEC/4.png";
import Countdown from "../../components/Countdown";

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
    pageref: "Trade show 2026 > National Executive Council",
    title: "TRADE SHOW 2026",
    description: "The National Executive Council (NEC)",
    content:
      "Meet the National Executive Council (NEC), the driving force behind PLASTINDIA 2026",
  };

  const membersData = [
    {
      imgurl: img,
      name: "Alok Tibrewala",
      position: "Chairman",
    },
  ];

  const membersData2 = [
    {
      imgurl: img2,
      name: "Kailash Murarka",
      position: "Vice Chairman",
    },
    {
      imgurl: img1,
      name: "Vikram Bhaduria",
      position: "Co-Chairman",
    },
   
    {
      imgurl: img3,
      name: "Ashok Jajodia",
      position: "Co-Chairman",
    },
  ];
  const membersData3 = [
    {
      name: "Mr. Hemant Minocha",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Arvind Goenka",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Darshan Shah",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Dhruv Sayani",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Manoj Shah",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr. Sunil J. Shah",
      position: "Member - NEC 2023-26",
      date: "",
    },
    {
      name: "Mr. Bipin Desai",
      position: "Member - NEC 2023-26",
      date: "( 16.08.2024 - till date)",
    },
    {
      name: "Mr. Jagat Killawala",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Rohit Kanuga",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Satish Godase",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Rakesh Patkar",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Abhijit Deshmukh",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr.  Amit Kumar Agarwal",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr. Shyam Lal Agarwal",
      position: "Member - NEC 2023-26",
      date: "",
    },
    {
      name: "Mr. Saurabh Garodia",
      position: "Member - NEC 2023-26",
      date: "( 16.08.2024 - till date)",
    },
    {
      name: "Mr.  Sudarshan Kumar Tawri",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr.  Manish G. Bhaia",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr.  Achal Thakkar",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr.Mahendra Sanghvi",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Haresh Pillay",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Rajesh Pathak",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr.  Gaurang Shah",
      position: "Member - NEC 2023-26",
      date: "",
    },
    {
      name: "Mr.  Vijay Goyal",
      position: "Member - NEC 2023-26",
      date: "( 16.08.2024 - till date)",
    },
    {
      name: "Mr.  Chetan Shah",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Vineet Gupta",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Bharat Patel",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr. Ramesh Thummar:",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr.  Pankaj Jain",
      position: "Member - NEC 2023-26",
    },
    {
      name: "Mr.  Kaumil Patel",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr.  Chetan Khakharia",
      position: "Member - NEC 2023-26",
      date: "",
    },
    {
      name: "Mr. Surender Choudhary",
      position: "Member - NEC 2023-26",
      date: "( 16.08.2024 - till date)",
    },
    {
      name: "Mr. Tushar Parikh",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr. Anish Y. Patel",
      position: "Member - NEC 2023-26",
    },

    {
      name: "Mr. Sarika Baheti",
      position: "Member - NEC 2023-26",
      date: "",
    },
    {
      name: "Mr. Rajesh Mohta",
      position: "Member - NEC 2023-26",
      date: "( 16.08.2024 - till date)",
    },
    {
      name: "Mr.  K. Padmaja Reddy",
      position: "Member - NEC 2023-26",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />

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
              {/* {index === 2 && <div className="w-full h-2 my-4"></div>} */}
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
        <div className="px-10 grid lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 pb-5 lg:pb-5 md:pb-20 gap-5 lg:mt-0 justify-center items-center">
          {membersData3.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-center">
                <div className="card bg-[#E8E6DD4D]  lg:w-96 md:w-auto shadow-xs rounded-xl">
                  <div className="">
                    {/* <figure className="flex justify-center">
                      <Image
                        className="px-5 pt-8 w-80 hover:scale-110  duration-300"
                        src={card?.imgurl}
                        alt="Not Found"
                      />
                    </figure> */}
                    <div className="card-body text-[#686868] flex items-center justify-center">
                      <h2
                        style={{ fontSize: 18 }}
                        className="card-title text-[#3C3E3D]"
                      >
                        {card?.name}
                      </h2>
                      <p className="text-sm">{card?.position}</p>
                      {/* <p className="text-sm -mt-1">{card?.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
