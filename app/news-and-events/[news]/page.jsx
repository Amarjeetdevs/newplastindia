"use client";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../../components/TopNavigation";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import {
  fetchIndividualNewsAndEvents,
  fetchNewsAndEventsList,
} from "../../../utils/api/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [newsData, setNewsData] = useState(null);
  const pathname = useParams();
  const newsSlug = pathname?.news;
  const [relatedNews, setRelatedNews] = useState([]);
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
    const fetchData = async () => {
      const result = await fetchIndividualNewsAndEvents(newsSlug);
      const fNewsData = result?.data[0];
      setNewsData(fNewsData);

      const relatedNewsData = await fetchNewsAndEventsList();

      if (relatedNewsData?.data && fNewsData?.attributes?.publishedDate) {
        const filteredAndSortedNews = relatedNewsData.data
          .filter(news => new Date(news.attributes.publishedDate) > new Date(fNewsData.attributes.publishedDate))
          .sort((a, b) => new Date(a.attributes.publishedDate) - new Date(b.attributes.publishedDate))
          .slice(0, 2);

        setRelatedNews(filteredAndSortedNews)
      }
    };

    fetchData();
  }, []);


  const SubHeadingText = {
    pageref: "Resources > News And Events",
    title: "News And Events",
    description: `${newsData && typeof newsData?.attributes?.title === "string"
      ? newsData?.attributes?.title
      : ""
      }`,
    content: `Published Date: ${newsData?.attributes?.publishedDate
      ? new Date(newsData?.attributes?.publishedDate)
        .toLocaleDateString("en-GB", {
          day: "numeric",
          year: "numeric",
          month: "short",
        })
        .replace(",", "")
      : "N/A"
      }`,
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>

      <div className="-z-50" data-aos="fade-up" data-aos-duration="230">
        <h3 className="text-start  hidden lg:block font-satoshi font-semibold text-[#8F9290] text-md pb-4 px-10 pt-4">
          {SubHeadingText?.pageref}
        </h3>
        <div className="lg:px-10 font-satoshi flex flex-col px-6 py-5">
          <div className=" flex flex-col">
            <h2 className="text-start  text-md font-bold text-[#029D3F]">
              {SubHeadingText?.title}
            </h2>
            <h2 className="text-start  font-satoshi text-3xl lg:text-[52px]  text-[#3C379C]">
              {SubHeadingText?.description}
            </h2>
            <h3 className="lg:mt-2 lg:text-2xl  leading-8 text-[#3C3E3D]">
              {SubHeadingText?.content}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full px-6 lg:px-10 py-14  pb-5 flex md:pb-20  lg:mt-0 justify-center items-center">
        <Image
          src={
            newsData && newsData?.attributes?.media?.data?.attributes?.url
              ? newsData?.attributes?.media?.data?.attributes?.url
              : "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PI_15_0408_c7f653fab8.webp"
          }
          width={800}
          height={400}
          alt=""
          className="w-full lg:h-[514px] md:h-[500px] h-[350px] rounded-[30px] lg:rounded-[72px]  md:rounded-[60px] object-cover"
        />
      </div>
      <div className="text-[#3C3E3D] w-full px-6 lg:px-10 pb-5 flex flex-col  lg:pb-0 lg:mt-0 ">
        <div className="text-sm lg:text-[20px] lg:leading-7 leading-5 font-satoshi font-normal lg:mb-5 mb-3">
          {newsData && typeof newsData?.attributes?.description === "string"
            ? newsData?.attributes?.description
            : ""}
        </div>
        {newsData?.attributes?.heading1 && (
          <h1 className="lg:text-2xl text-[20px] leading-5 :leading-6 font-bold italic font-satoshi lg:mb-4 mb-2">
            {newsData?.attributes?.heading1}
          </h1>
        )}
        {newsData &&
          newsData?.attributes?.details_desc1 &&
          newsData &&
          newsData?.attributes?.details_desc1[0]?.children &&
          newsData &&
          newsData?.attributes?.details_desc1[0]?.children[0]?.text && (
            <p className="text-sm lg:text-[20px] lg:leading-7 leading-5 font-satoshi font-normal lg:mb-5 mb-3">
              {newsData &&
                newsData?.attributes?.details_desc1 &&
                newsData &&
                newsData?.attributes?.details_desc1[0]?.children &&
                newsData &&
                newsData?.attributes?.details_desc1[0]?.children[0]?.text}
            </p>
          )}
        {newsData?.attributes?.heading2 && (
          <h1 className="lg:text-2xl text-[20px] leading-5 :leading-6 font-bold italic font-satoshi lg:mb-4 mb-2">
            {newsData?.attributes?.heading2}
          </h1>
        )}
        {newsData &&
          newsData?.attributes?.details_desc2 &&
          newsData &&
          newsData?.attributes?.details_desc2[0]?.children &&
          newsData &&
          newsData?.attributes?.details_desc2[0]?.children[0]?.text && (
            <p className="text-sm lg:text-[20px] lg:leading-7 leading-5 font-satoshi font-normal lg:mb-5 mb-3">
              {newsData &&
                newsData?.attributes?.details_desc2 &&
                newsData &&
                newsData?.attributes?.details_desc2[0]?.children &&
                newsData &&
                newsData?.attributes?.details_desc2[0]?.children[0]?.text}
            </p>
          )}
        <div className="mb-1 lg:mb-[9px] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 capitalize text-[#3C3E3D]">
          {"Source: "}
          <Link
            href={
              newsData && newsData?.attributes?.sourceLink
                ? newsData && newsData?.attributes?.sourceLink
                : "/null"
            }
            target="_blank"
            className="capitalize text-[#C80F0F] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 "
          >
            {newsData && newsData?.attributes?.source}
          </Link>
        </div>
      </div>

      {relatedNews && relatedNews?.length > 0 && (
        <div className="lg:mt-[65px] mt-8 flex flex-col bg-[#EAEAEAC2] lg:py-[32px] py-5 lg:px-12 px-7 text-center items-center justify-center">
          <h1 className="lg:text-3xl text-xl font-bold font-satoshi text-[#3C3E3D] lg:leading-10 leading-6">
            Up Next
          </h1>
          <div className="flex lg:flex-row flex-col lg:mt-[50px] mt-8 lg:gap-x-5 lg:gap-y-0 gap-y-3">
            {relatedNews &&
              relatedNews?.map((nextData, idx) => (
                <>
                  <div
                    key={idx}
                    className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  px-6 py-6 lg:gap-x-6 lg:gap-y-0 gap-y-3 items-center"
                  >
                    <Link
                  href={`/news-and-events/${nextData?.attributes?.slug}`}
                   className="w-full md:pr-6 lg:pr-0 pr-0"
                  >
                    <Image
                      src={nextData?.attributes?.media?.data?.attributes?.url}
                      height={350}
                      width={350}
                      alt=""
                     className=" md:w-full md:h-[350px] w-full rounded-[20px] object-cover"
                    />
                    </Link>
                    <div className="flex flex-col text-left  w-full">
                    <Link
                  href={`/news-and-events/${nextData?.attributes?.slug}`}
                  >
                      <h1 className="text-[16px] lg:text-[20px] leading-7 text-[#3C3E3D] pb-3 font-medium">
                        {nextData?.attributes?.title}
                      </h1>
                      </Link>
                      <p className="text-sm lg:text-[16px] leading-6 text-[#3C3C3C] pb-3 lg:pb-5 font-normal ">
                        {nextData?.attributes?.description}
                      </p>
                      <h3 className="text-sm lg:text-[16px] font-medium   pb-2 text-[#032624]">
                        <span>
                          <CalendarMonthIcon className="h-10 mb-2 mr-2" />
                        </span>
                        {new Date(
                          nextData?.attributes?.publishedDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h3>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Page;
