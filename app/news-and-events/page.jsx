"use client";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import { fetchNewsAndEventsList } from "../../utils/api/api";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const category = [
  { title: "Plastindia News", catSlug: "plastindia" },
  {
    title: "Live News",
    catSlug: "live-news",
  },
];
const Page = () => {
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [newsListData, setNewsListData] = useState(null);
  const [activeButton, setActiveButton] = useState("plastindia");
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
    pageref: "Resources >News And Events",
    title: "RESOURCES",

    description: "News And Events",
    content:
      "Welcome to the News and Events section, where you can stay up-to-date with all the news and key announcements related to PlastIndia 2026. Explore news on industry trends, event highlights, and important updates to ensure you don't miss a thing. ",
  };

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchNewsAndEventsList();
        setNewsListData(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleClick = async (catSlug) => {
    setActiveButton(catSlug);

    if (catSlug === "plastindia") {
      setLoading(true);
      try {
        const result = await fetchNewsAndEventsList();
        setNewsListData(result?.data);
      } catch (error) {
        console.error("Error Fetching data", error);
      } finally { setLoading(false) }
    }
  };
  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <div className="flex lg:flex-wrap md:flex-wrap flex-row pt-12 px-6">
        {category &&
          category?.map((text, index) => (
            <button
              key={index}
              className={`px-7  py-3 rounded-full font-satoshi-medium md:text-md lg:text-lg focus:outline-none mx-3  ${activeButton === text?.catSlug
                ? "bg-[#032624] text-white"
                : "bg-[#EAEAEA] text-[#959595]"
                }`}
              onClick={() => handleClick(text?.catSlug)}
            >
              {text?.title}
            </button>
          ))}
      </div>
      <div className="w-full px-6 lg:px-10 pt-12 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 pb-5  md:pb-20 gap-x-[18px] gap-y-[24px] lg:mt-0 justify-center items-center">
        {activeButton && activeButton === "plastindia" ? (
          loading
            ? Array.from({ length: 3 }).map((_, index) => (
              <div className="flex flex-col h-auto " key={index}>
              <Skeleton
                key={index}
                width={400}
                className="bg-[#E8EEE3] h-[279px] p-5 lg:p-8 rounded-md"
              />
            </div>
            ))
            :
            newsListData &&
            newsListData?.map((newsList, index) => {
              return (
                <div className={`flex flex-col h-auto animate-fadeIn opacity-0 transition-opacity duration-500 `} key={index}
                style={{ animationDelay: `${index * 0.5}s` }}>
                  <Link
                    href={`/news-and-events/${newsList?.attributes?.slug}`}
                    className="rounded-[20px] h-[200px] md:h-[350px] lg:h-[400px] mb-3 lg:mb-7 md:mb-5"
                  >
                    <Image
                      src={newsList?.attributes?.media?.data?.attributes?.url}
                      alt=""
                      height={400}
                      width={600}
                      className="object-fill h-full w-full rounded-[20px]"
                    />
                  </Link>

                  <p className="mb-1 lg:mb-[9px] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 capitalize text-[#3C3E3D]">
                    {"Source: "}
                    <Link
                      href={
                        newsList?.attributes?.sourceLink
                          ? newsList?.attributes?.sourceLink
                          : "#"
                      }
                      target="_blank"
                      className="capitalize text-[#C80F0F] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 "
                    >
                      {newsList?.attributes?.source}
                    </Link>
                  </p>
                  <Link href={`/news-and-events/${newsList?.attributes?.slug}`}>
                    <h2 className="mb-1 lg:mb-[9px] text-[16px] leading-5 md:text-2xl md:leading-7 lg:text-[28px] lg:leading-9 text-[#3C3E3D] font-bold">
                      {newsList?.attributes?.title}
                    </h2>
                  </Link>
                  <p className="mb-6 lg:mb-8 text-sm lg:text-[18px] leading-5 lg:leading-6 text-[#3C3E3D]">
                    {newsList?.attributes?.description}
                  </p>
                </div>
              );
            })
        ) : (
          "Live News Not Found"
        )}

      </div>
      <Footer />
    </div>
  );
};

export default Page;
