"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Countdown from "../../components/Countdown";
import Link from "next/link";
import eg from "../../assets/IMPACT/1.png";
import ch from "../../assets/IMPACT/2.png";
import invo from "../../assets/IMPACT/3.png";
import pck from "../../assets/IMPACT/4.png";
import rs from "../../assets/IMPACT/6.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

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
    pageref: "Impact of plastic",
    title: "INDUSTRY INSIGHTS",
    description: "Impact of Plastics & Plastic Industry",
    content:
      "Plastics play a crucial role in modern life, <strong> driving innovation and economic growth, </strong> while the industry emphasizes its commitment to sustainability through recycling and eco-friendly practice",
  };
  return (
    <div className="bg-[#F7F7F7]  font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />

      <section className="px-6 lg:px-0">
        <div className="  ">
          <div className="  flex overflow-hidden  pb-36  flex-col lg:flex-row  h-full">
            <div className="relative  lg:w-1/2 top-10 lg:top-32  items-center">
              <div className="absolute inset-0 top-[-50px] left-[-180px] w-full hidden lg:block h-full bg-[#CEDCB6] rounded-[50px] z-0"></div>
              <Image
                alt="Not found"
                src={ch}
                className=" relative z-10 rounded-[20px] lg:rounded-[50px]"
              />
            </div>

            <div className=" justify-center   lg:w-1/2 lg:pl-10 mt-16 lg:mt-52 ">
              <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                Critical Healthcare
              </h4>
              <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                Plastics in Critical Healthcare
              </h2>
              <h5 className="text-md text-[#3C3E3D] lg:pr-12 font-satoshi ">
                Explore how plastics are revolutionizing critical healthcare,
                from life-saving devices to eco-friendly solutions. Read on to
                find the surprising impact of these materials on modern medicine
                and patient care.
              </h5>
              <Link href={"/impact-of-plastics/plastics-in-critical-healthcare"}>
                <div className="text-start ">
                  <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                    Learn more
                    <span>
                      <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section>
          <div className="  h-full">
            <div className=" flex flex-col pb-52 -mt-12 lg:-mt-24 overflow-hidden  lg:flex-row-reverse ">
              <div className="relative   lg:top-32  lg:w-1/2 items-center">
                <div className="absolute inset-0 top-14 left-12 right-44 w-full h-full hidden lg:block bg-[#596A3C] rounded-l-[50px] z-0"></div>
                <Image
                  alt="Not found"
                  src={eg}
                  className="relative z-10  rounded-[20px] lg:rounded-[50px]"
                />
              </div>
              <div className="lg:w-1/2  justify-center lg:pl-10 mt-10 lg:mt-52 ">
                <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                  Employment Generator
                </h4>
                <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                  The Plastic Advantage
                </h2>
                <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12 ">
                  <strong>
                    Imagine plastics fueling economic growth and job creation! {" "}
                    <br />
                  </strong>
                  Known for their versatility, plastics transform economies and
                  create diverse jobs. Explore the surprising impact of plastics
                  on the global job market, from innovative manufacturing to
                  green recycling.
                </h5>
                <Link href={"/impact-of-plastics/the-plastic-advantage"}>
                  <div className="text-start ">
                    <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                      Learn more
                      <span>
                        <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="  flex flex-col lg:flex-row   h-full">
              <div className="relative -top-24  lg:top-32  items-center">
                <div className="absolute inset-0 top-[-50px] left-[-180px] w-full h-full hidden lg:block bg-[#CEDCB6] rounded-[50px] z-0"></div>
                <Image
                  alt="Not found"
                  width={700}
                  height={500}
                  src={"https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/HOMEPAGE_PT_8_f2c608cfd9.webp"}
                  className="relative z-10  rounded-[20px] lg:rounded-[50px]"
                />
              </div>

              <div className=" lg:w-1/2 -mt-16  lg:pl-10 lg:mt-52 ">
                <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                   Transportation
                </h4>
                <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                  Plastics in Transportation
                </h2>
                <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12">
                  Discover how plastics are revolutionizing transportation,
                  making vehicles lighter, safer, and more fuel-efficient. Read
                  on to find the surprising ways plastics are driving innovation
                  and sustainability in the industry.
                </h5>
                <Link href={"/impact-of-plastics/plastics-in-transportation"}>
                  <div className="text-start ">
                    <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                      Learn more
                      <span>
                        <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="   ">
              <div className="flex flex-col-reverse pb-52  lg:flex-row ">
                <div className="lg:w-1/2 lg:pl-10 mt-40 lg:mt-52 ">
                  <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                    Innovation
                  </h4>
                  <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                    Plastics in Innovation
                  </h2>
                  <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12">
                    Explore how plastics are pushing the boundaries of
                    innovation, from ultra-light car parts to groundbreaking
                    medical implants. Read on to find the latest in sustainable
                    materials and design marvels that are revolutionizing our
                    world.
                  </h5>
                  <Link href={"/impact-of-plastics/plastics-in-Innovation"}>
                    <div className="text-start ">
                      <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                        Learn more
                        <span>
                          <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="relative top-32   items-center">
                  <div className="absolute inset-0 top-14 left-12 right-44 w-full h-full hidden lg:block bg-[#596A3C] rounded-l-[50px] z-0"></div>
                  <Image
                    alt="Not found"
                    src={invo}
                    className="relative z-10  rounded-[20px] lg:rounded-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className=" ">
            <div className="  flex flex-col lg:flex-row  h-full">
              <div className="relative -top-32 lg:top-32  items-center">
                <div className="absolute inset-0 top-[-50px] left-[-180px] w-full h-full hidden lg:block bg-[#CEDCB6] rounded-[50px] z-0"></div>
                <Image
                  alt="Not found"
                  src={rs}
                  className="relative z-10   rounded-[20px] lg:rounded-[50px] "
                />
              </div>

              <div className="lg:w-1/2 justify-center lg:pl-10 -mt-24 lg:mt-52 ">
                <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                  Recycling Plastics
                </h4>
                <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                  Recycling Plastics
                </h2>
                <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12">
                  Discover the brand new innovations transforming plastic
                  recycling and how they are shaping a more sustainable future.
                  Read on to uncover how we handle plastic waste- creatively and
                  consciously.
                </h5>
                <Link href={"/impact-of-plastics/recycling-plastics"}>
                  <div className="text-start ">
                    <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                      Learn more
                      <span>
                        <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                      </span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" lg:-mb-0 -mb-40 ">
              <div className="flex flex-col-reverse pb-52 overflow-hidden lg:flex-row ">
                <div className="lg:w-1/2 justify-center lg:pl-10 mt-28 lg:mt-52 ">
                  <h4 className="text-2xl text-[#3C3E3D] font-satoshi  ">
                    Packaging
                  </h4>
                  <h2 className="text-3xl lg:text-[2.65em] py-3 font-satoshi  text-[#3C3E3D]">
                    Plastics in Packaging
                  </h2>
                  <h5 className="text-md text-[#3C3E3D] font-satoshi lg:pr-12 ">
                    Explore the world of cutting-edge plastic packaging, where
                    innovation meets sustainability. Read on to discover the
                    fascinating advancements making packaging smarter, greener,
                    and more interactive than ever before.
                  </h5>
                  <Link href={"/impact-of-plastics/plastics-in-packaging"}>
                    <div className="text-start ">
                      <button className="bg-[#042523] text-md font-semibold text-[#FFFFFF] px-8 lg:px-32 py-3 lg:py-[20px] rounded-full mt-10">
                        Learn more
                        <span>
                          <ArrowOutwardIcon className="ml-4 text-white hidden lg:inline w-5 h-5" />
                        </span>
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="relative top-20 lg:top-32  ">
                  <div className="absolute inset-0 top-14 left-12 right-44 w-full h-full hidden lg:block bg-[#596A3C] rounded-l-[50px] z-0"></div>
                  <Image
                    alt="Not found"
                    src={pck}
                    className="relative z-10  rounded-[20px] lg:rounded-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Countdown />
      <Footer />
    </div>
  );
};

export default Page;
