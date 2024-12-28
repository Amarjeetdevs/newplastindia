"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
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
    description: "Committees",
    content:
      "The foundation of Plastindia  is built on the <strong> pillars of excellence, innovation, and sustainability. </strong> Our dedicated committees drive forward our mission, ensuring the highest standards in the plastic industry.",
  };

  return (
    <div className="bg-[#FFFFFF] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <div className="">
  

      <SubHeading subHeadingText={SubHeadingText} />
      </div>
      <section>
        <div className="px-6 lg:px-10 pt-20">
          <div className="">
            <Image src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/62_Committies_2_9091d7e2fa.webp'} height={1200} width={1000} alt="Not Found" className="lg:w-full lg:h-full  h-[12em] object-cover rounded-2xl lg:rounded-[50px]" />
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row items-start justify-center mt-20 gap-4 mb-4 h-auto mx-6 lg:mx-10">

 <Link href={'https://plastindia.edu.in'} target="_blank" rel="noopener noreferrer">
 <div className="card cursor-pointer bg-[#E8EEE3] w-full  lg:w-[30em] h-[17em] flex items-center justify-center text-[#3C3E3D] font-satoshi shadow-xs">
    <div className=" px-4 lg:px-6">
      <h2 className="card-title text-[1.6em] font-satoshi pb-4">
      PLASTINDIA International University (PIU)
      </h2>
      <p className=" text-md lg:text-[1.3em] font-satoshi">Mr. M P Taparia – President</p>
    </div>
  </div>
 </Link>

  <div className="card w-full lg:w-[30em]  bg-[#E8EEE3] h-[17em] flex items-start justify-center text-[#3C3E3D] font-satoshi shadow-xs">
  <div className=" px-4 lg:px-6">
      <h2 className="card-title text-[1.6em] font-satoshi pb-4">
        PR & Coordination Committee
      </h2>
      <p className="text-[1.3em] font-satoshi">Mr. Surender Choudhary – Chairman</p>
    </div>
  </div>
</div>

<div className="flex flex-col lg:flex-row mt-4  lg:mt-0  justify-center mb-20 gap-4 h-auto mx-6 lg:mx-10">
  <div className="card bg-[#E8EEE3] w-full lg:w-[30em]  h-[17em] flex items-start justify-center text-[#3C3E3D] font-satoshi shadow-xs">
  <div className=" px-4 lg:px-6">
   
      <h2 className="card-title text-[1.6em] font-satoshi pb-4">
        Quality & Standardisation of Plastic Products
      </h2>
      <div className="text-[1.3em] font-satoshi">
        <p>Mr. Hemant Minocha – Chairman</p>
        <p>Mr. Mihir Banerji – Co Chairman</p>
      </div>
    </div>
  </div>
  <Link href={'/publications-insights'}>

  <div className="card w-full lg:w-[30em] cursor-pointer bg-[#E8EEE3] h-[17em] flex items-start justify-center text-[#3C3E3D] font-satoshi shadow-xs">
  <div className=" px-4 lg:px-6">
    
      <h2 className="card-title text-[1.6em] font-satoshi pb-4">
        Publication Committee for Magazine INSIGHTS
      </h2>
      <div className="text-[1.3em] font-satoshi">
        <p>Mr. Ramesh Parasuraman  – Chairman</p>
      </div>
    </div>
  </div>
  </Link>
</div>


      <section></section>

      <Footer />
    </div>
  );
};

export default Page;
