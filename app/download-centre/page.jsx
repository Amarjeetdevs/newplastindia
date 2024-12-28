"use client";
import React, { useState, useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import Link from "next/link";
import { fetchDownloadCentreCard } from "../../utils/api/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [downloadData, setDownloadData] = useState(null);
  const [loading, setLoading] = useState(true);
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
    pageref: "Resources > Download Centre",
    title: "RESOURCES",

    description: "Download Centre",
    content:
      " Welcome to the Download Centre, your go-to resource for all official documents and materials related to PlastIndia 2026. Access brochures, exhibitor guides, floor plans, and more. Stay updated with the latest information to ensure your participation in PlastIndia is well-prepared and seamless.",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchDownloadCentreCard();
        setDownloadData(result?.data?.attributes?.downloadCentreCard);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();

    const files = ["/PI Logo Final (1).png", "/PI Logo Final (2).png"];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />

      <div className="w-full px-6 lg:px-10 py-14 grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 pb-5  md:pb-20 gap-[22px] lg:mt-0 justify-center items-center">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#E8EEE3] w-full h-[279px]  p-5 lg:p-8 rounded-md "
              >
                <Skeleton
                  height={32}
                  className="mb-6"
                  containerClassName="flex justify-center"
                />
                <Skeleton
                  height={50}
                  className="mt-4"
                  containerClassName="flex justify-center"
                />
              </div>
            ))
          : downloadData &&
            downloadData?.map((card, index) => (
              <React.Fragment key={index}>
                <div  className={`card bg-[#E8EEE3] w-full h-[279px] lg:py-[20px] px-5 opacity-0 animate-fade-in animate-fadeIn  transition-opacity duration-500 delay-[${index * 100}ms]`}
                 style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="card-body text-[#686868] flex items-center justify-center">
                    <h2 className="card-title text-[#3C3E3D] lg:mb-6 px-7 text-center lg:text-[32px] font-bold lg:leading-10">
                      {card?.title}
                    </h2>
                    {card?.buttonLabel !== "Download" ? (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center text-[20px] border-2 border-[#032624] text-md text-[#042523] px-4 py-[18px] rounded-full  "
                        href={card?.media?.data?.attributes?.url}
                      >
                        View/Download
                        <span>
                          <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
                        </span>
                      </Link>
                    ) : (
                      <button
                        className="w-full text-[20px] border-2 border-[#032624] text-md text-[#042523] px-4 py-[18px] rounded-full  "
                        onClick={handleDownload}
                      >
                        View/Download
                        <span>
                          <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
