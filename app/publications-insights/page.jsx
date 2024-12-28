"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Link from "next/link";
import { insightsBooksData } from "../data/insightsBooksData";

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
    pageref: "Publications > Insights",
    title: "PLASTIC INDUSTRY IN FOCUS",

    description: "Insights",
    content:
      " The most widely read quarterly magazine providing in-depth coverage of the plastics industry.",
  };

  const handleBookClick = (ebookUrl, createdOn) => {
    sessionStorage.setItem("ebookSrc", ebookUrl);
    sessionStorage.setItem("ebooksCreatedOn", createdOn); 
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="px-6 lg:px-10 pt-2">
        <div className="py-14">
          <Image
            src={
              "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/58_c7d9ea5b51.webp"
            }
            alt="Not Found"
            height={1000}
            width={1000}
            className=" w-full rounded-[50px]"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-6 lg:px-52 pt-5 text-[#3C3E3D] text-center">
          Plastindia Foundation&apos;s quarterly magazine, “INSIGHTS – Plastics
          Industry in Focus,” reaches over 5,000 companies and prominent
          figures, garnering a readership of over 50,000. Celebrated for its
          comprehensive articles on new product launches, industry updates, and
          informative snippets, INSIGHTS is a crucial resource for disseminating
          information within the global plastics community. This publication has
          received enthusiastic feedback from industry professionals,
          establishing itself as the leading source of knowledge and trends in
          the plastics sector.
        </h3>
        <div className="flex lg:flex-row flex-col gap-5 items-center justify-center mt-10">
          <Link
            href={"https://forms.gle/ssjhnfrdggGg3dZT8"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 border-2 border-[#032624]  text-md text-[#042523] px-4 py-4 rounded-full  ">
              Subscribe
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
              </span>
            </button>
          </Link>

          <Link
            href={"https://forms.gle/gp1s1jbUiBj8mGxw8"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 border-2 border-[#032624] text-md text-[#042523] px-4 py-4 rounded-full  ">
              Advertise
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
              </span>
            </button>
          </Link>

          <Link
            href={
              "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/INSIGHTS_Tariff_Rate_2_5a7464cade.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 border-2 border-[#032624]  text-md text-[#042523] px-6 py-4 rounded-full  ">
              Tariff
              <span>
                <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 px-10 gap-12 my-20">
        {insightsBooksData.map((book, index) => {
          return (
            <div key={index}>
              {index < 2 ? (
                <Link
                  href={book.ebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={book.imgSrc}
                    alt={`Book ${book.index}`}
                    width={300}
                    height={468}
                    className="hover:scale-105 duration-300 cursor-pointer"
                  />
                  <div className="font-[500] text-center mt-6 mb-1 text-[32px] leading-[60px] text-[#3C3E3D]">
                    {book?.createdOn}
                  </div>
                </Link>
              ) : (
                <Link
                  href="/publications-insights-ebooks"
                  passHref
                  onClick={() =>
                    handleBookClick(book.ebookUrl, book?.createdOn)
                  }
                >
                  <Image
                    src={book?.imgSrc}
                    alt={`Book ${book.index}`}
                    width={388}
                    height={520}
                    className="hover:scale-105 duration-300 cursor-pointer "
                  />
                  <div className="font-[500] text-center mt-6 mb-1 text-[32px] leading-[60px] text-[#3C3E3D]">
                    {book?.createdOn}
                  </div>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default Page;
