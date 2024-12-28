"use client";

import React, { useState, useEffect } from "react";
import TopNavigation from "../../../components/TopNavigation";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import SubHeading from "../../../components/SubHeading";
import { fetchImpactOfPlastics, fetchPlasticDataBySlug } from "@/utils/api/api";
import { useParams } from "next/navigation";
import IndivisualPlastics from "../../../components/IndivisualPlastics";
import BrewingSoon from "../../../app/brewing-soon/page";
const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [detailedPlastics, setDetailedPlastics] = useState(null);
  const [relatedUpNextData, setUpNextData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
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

  const pathname = useParams();
  const titleSlug = pathname?.plastics;


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await fetchPlasticDataBySlug(titleSlug);
      const fPlasticData = result?.data[0];
      setDetailedPlastics(fPlasticData);

      const relatedPlasticData = await fetchImpactOfPlastics();
      if (relatedPlasticData?.data && fPlasticData?.attributes?.publishedDate) {
        const filteredPlasticNews = relatedPlasticData.data
          .filter(news => new Date(news.attributes.publishedDate) > new Date(fPlasticData.attributes.publishedDate))
          .sort((a, b) => new Date(a.attributes.publishedDate) - new Date(b.attributes.publishedDate))
          .slice(0, 2);

        setUpNextData(filteredPlasticNews)
      }
      setIsLoading(false)
    };

    fetchData();
  }, []);
  const SubHeadingText = {
    pageref: `Home> Impact of plastic> ${detailedPlastics && detailedPlastics?.attributes?.title} `,
    title: `${detailedPlastics && detailedPlastics?.attributes?.topicName}`,
    descriptionFontSize: "44px",
    description: `${detailedPlastics && detailedPlastics?.attributes?.title}`,
    content:
      `${detailedPlastics && detailedPlastics?.attributes?.sort_desc}`,
  };
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      {detailedPlastics && detailedPlastics?.attributes?.content ? (
        <div className="bg-[#F7F7F7] font-satoshi">
          <TopNavigation />
          <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
            <Navigation />
          </div>
          <SubHeading subHeadingText={SubHeadingText} />
          <IndivisualPlastics plasticDetails={detailedPlastics} relatedUpNextData={relatedUpNextData} />
          <Footer />
        </div>
      ) : (
        <BrewingSoon />
      )}
    </>

  );
};

export default Page;
