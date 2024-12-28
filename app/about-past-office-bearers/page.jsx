"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import imgabout from "../../assets/ABOUT-PLASTINDIA/ABOUT-IMAGE-office-bearers.png";


import img1 from '../../assets/PLASTINDIA/POB/87-90/IMG_3652.JPG';
import img2 from '../../assets/PLASTINDIA/POB/87-90/IMG_3653.JPG';
import img3 from '../../assets/PLASTINDIA/POB/87-90/IMG_3654.JPG';

import img4 from '../../assets/PLASTINDIA/POB/90-94/IMG_3655.JPG';
import img5 from '../../assets/PLASTINDIA/POB/90-94/IMG_3656.JPG';
import img6 from '../../assets/PLASTINDIA/POB/90-94/IMG_3657.JPG';

import img7 from '../../assets/PLASTINDIA/POB/94-97/IMG_3658.JPG';
import img8 from '../../assets/PLASTINDIA/POB/94-97/IMG_3659.JPG';
import img9 from '../../assets/PLASTINDIA/POB/94-97/IMG_3660.JPG';

import img10 from '../../assets/PLASTINDIA/POB/97-00/IMG_3661.JPG';
import img11 from '../../assets/PLASTINDIA/POB/97-00/IMG_3662.JPG';
import img12 from '../../assets/PLASTINDIA/POB/97-00/IMG_3663.JPG';

import img13 from '../../assets/PLASTINDIA/POB/00-03/IMG_3664.JPG';
import img14 from '../../assets/PLASTINDIA/POB/00-03/IMG_3665.JPG';
import img15 from '../../assets/PLASTINDIA/POB/00-03/IMG_3666.JPG';

import img16 from '../../assets/PLASTINDIA/POB/03-06/IMG_3667.JPG';
import img17 from '../../assets/PLASTINDIA/POB/03-06/IMG_3668.JPG';
import img18 from '../../assets/PLASTINDIA/POB/03-06/IMG_3669.JPG';

import img19 from '../../assets/PLASTINDIA/POB/06-09/IMG_3670.JPG';
import img20 from '../../assets/PLASTINDIA/POB/06-09/IMG_3671.JPG';
import img21 from '../../assets/PLASTINDIA/POB/06-09/IMG_3672.JPG';

import img22 from '../../assets/PLASTINDIA/POB/09-12/IMG_3673.JPG';
import img23 from '../../assets/PLASTINDIA/POB/09-12/IMG_3674.JPG';
import img24 from '../../assets/PLASTINDIA/POB/09-12/IMG_3675.JPG';

import img25 from '../../assets/PLASTINDIA/POB/12-13/IMG_3676.JPG';
import img26 from '../../assets/PLASTINDIA/POB/12-13/IMG_3677.JPG';
import img27 from '../../assets/PLASTINDIA/POB/12-13/IMG_3678.JPG';

import img28 from '../../assets/PLASTINDIA/POB/13-15/IMG_3679.JPG';
import img29 from '../../assets/PLASTINDIA/POB/13-15/IMG_3680.JPG';
import img30 from '../../assets/PLASTINDIA/POB/13-15/IMG_3681.JPG';

import img31 from '../../assets/PLASTINDIA/POB/15-18/IMG_3682.JPG';
import img32 from '../../assets/PLASTINDIA/POB/15-18/IMG_3683.JPG';
import img33 from '../../assets/PLASTINDIA/POB/15-18/IMG_3684.JPG';

import img34 from '../../assets/PLASTINDIA/POB/18-23/IMG_3685.JPG';
import img35 from '../../assets/PLASTINDIA/POB/18-23/IMG_3686.JPG';
import img36 from '../../assets/PLASTINDIA/POB/18-23/IMG_3687.JPG';





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
    pageref: "Foundation > Managing Committee",
    title: "OUR FOUNDATION",

    description: "Honoring Our Leaders",
    content:
      "<strong> Explore the legacy </strong> of Plastindia's past office bearers, whose visionary leadership and dedication have shaped the <strong> foundation's journey since 1987. </strong> ",
  };

  const membersData1 = [
    {
      imgurl: img1,
      name: "Mr. Nirmal B. Thakkar",
      position:
        "President",
    },
    {
      imgurl: img2,
      name: "Late Mr. Raman N. Patel",
      position:
        "Vice President",
    },
    {
      imgurl: img3,
      name: "Mr. J.R. Shah",
      position: "Hon. Treasurer",
    },
  ];

  const membersData2 = [
    {
      imgurl: img4,
      name: "Late Mr. S.H. Mehta",
      position:"President",
    },
    {
      imgurl: img5,
      name: "Mr. M.L. Lahoti",
      position:
        "Vice President",
    },
    {
      imgurl: img6,
      name: "Mr. J.R. Shah",
      position: "Hon. Treasurer",
    },
  ];
 
  const membersData3 = [
    {
      imgurl: img7,
      name: "Late Mr. N.K. Patel",
      position:"President",
    },
    {
      imgurl: img8,
      name: "Late Mr. Raman N. Patel",
      position:
        "Vice President",
    },
    {
      imgurl: img9,
      name: "Mr. Vagubhai Vaghasia",
      position: "Hon. Treasurer",
    },
  ];

  const membersData4 = [
    {
      imgurl: img10,
      name: "Mr. M.L. Lahoti",
      position:
        "President",
    },
    {
      imgurl: img11,
      name: "Mr. Suresh Gandhi",
      position:
        "Vice President",
    },
    {
      imgurl: img12,
      name: "Mr. ShyaM Tibrewal",
      position: "Hon. Treasurer",
    },
  ];

  const membersData5 = [
    {
      imgurl: img13 ,
      name: "Mr. ShyaM Tibrewal",
      position:
        "President",
    },
    {
      imgurl : img14,
      name: "Mr. Mahesh K. Shah",
      position:
        "Vice President",
    },
    {
      imgurl: img15,
      name: "Mr. Arvind M. Mehta",
      position: "Hon. Treasurer",
    },
  ];

  const membersData6 = [
    {
      imgurl: img16,
      name: "Mr. Mahesh K. Shah",
      position:
        "President",
    },
    {
      imgurl: img17,
      name: "Mr. Arvind M. Mehta",
      position:
        "Vice President",
    },
    {
      imgurl: img18,
      name: "Mr.Subhash K. Kadakia",
      position: "Hon. Treasurer",
    },
  ];

  const membersData7 = [
    {
      imgurl: img19,
      name: "Mr. Arvind M. Mehta",
      position:
        "President",
    },
    {
      imgurl: img20,
      name: "Late Mr. Amar Seth",
      position:
        "Vice President",
    },
    {
      imgurl: img21,
      name: "Mr. Hasmukh Patel",
      position: "Hon. Treasurer",
    },
  ];
  const membersData8 = [
    {
      imgurl: img22,
      name: "Mr. Ashok Goel",
      position:
        "President",
    },
    {
      imgurl: img23,
      name: "Mr. Bipin M. Shah",
      position:
        "Vice President",
    },
    {
      imgurl: img24,
      name: "Mr. K. K. Seksaria",
      position: "Hon. Treasurer",
    },
  ];

  const membersData9 = [
    {
      imgurl: img25,
      name: "Mr. Nirmal B. Thakkar",
      position:
        "President",
    },
    {
      imgurl: img26,
      name: "Mr. R.A. Lohia",
      position:
        "Vice President",
    },
    {
      imgurl: img27,
      name: "Mr. Rajiv J. Rawal",
      position: "Hon. Treasurer",
    },
  ];
  const membersData10 = [
    {
      imgurl: img28,
      name: "Mr.Subhash K. Kadakia",
      position:
        "President",
    },
    {
      imgurl: img29,
      name: "Mr. Rajeev Chitalia",
      position:
        "Vice President",
    },
    {
      imgurl: img30,
      name: "Mr. Rajiv J. Rawal",
      position: "Hon. Treasurer",
    },
  ];

  const membersData11 = [
    {
      imgurl: img31,
      name: "Mr. K.K. Seksaria",
      position:
        "President",
    },
    {
      imgurl: img32,
      name: "Mr. Rajiv J. Rawal",
      position:
        "Vice President",
    },
    {
      imgurl: img33,
      name: "Mr. Raju D. Desai",
      position: "Hon. Treasurer",
    },
  ];

  const membersData12 = [
    {
      imgurl: img34,
      name: "Mr. Jigish N. Doshi",
      position:
        "President",
    },
    {
      imgurl: img35,
      name: "Mr. Ravish B. Kamath",
      position:
        "Vice President",
    },
    {
      imgurl: img36,
      name: "Mr. Jayesh K. Rambhia",
      position: "Hon. Treasurer",
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
            className="mix-blend-multiply py-0  lg:py-14"
          />
        </div>
        <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] lg:py-0 py-3 text-center" >1987-90</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData1.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
          <h2 className="text-[2.65em] text-center" >1990-94</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData2.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >1994-97</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData3.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >1997-00</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData4.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2000-03</h2>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData5.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2003-06</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData6.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2006-09</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData7.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2009-12</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData8.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2012-13</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData9.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2013-15</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData10.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2015-18</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData11.map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
        </div>   <div className="text-[#3C3E3D]">
          <h2 className="text-[2.65em] text-center" >2018-21 (2018-23)</h2>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-0 lg:px-28 lg:pb-20 md:pb-20 gap-20
       lg:mt-8"
          >
            {membersData12  .map((card, index) => (
              <div
                key={index}
                className="card bg-[#E8E6DD4D]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure className="px-14 pt-8">
                    <Image
                      className=" hover:scale-110 rounded-xl duration-300"
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
      </div>
      <Footer />
    </div>
  );
};

export default Page;
