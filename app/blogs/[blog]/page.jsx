"use client";

import React, { useState, useEffect } from "react";
import TopNavigation from "../../../components/TopNavigation";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import IndivisualBlogComp from "../../../components/IndivisualBlogComp";
import SubHeading from "../../../components/SubHeading";
import { fetchBlogList, fetchIndividualBlog } from "@/utils/api/api";
import { useParams } from "next/navigation";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [detailedBlog, setDetailedBlog] = useState(null);
  const [relatedUpNextData, setUpNextData] = useState(null)
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
  const blogslug = pathname?.blog;

  useEffect(() => {
    
    const fetchData = async () => {

      const result = await fetchIndividualBlog(blogslug);
      const fBlogData = result?.data[0];
      setDetailedBlog(fBlogData);

      const relatedBlogData = await fetchBlogList();
      if (relatedBlogData?.data && fBlogData?.attributes?.publishedDate) {
        const filteredPlasticNews = relatedBlogData.data
          .filter(news => new Date(news.attributes.publishedDate) > new Date(fBlogData.attributes.publishedDate))
          .sort((a, b) => new Date(a.attributes.publishedDate) - new Date(b.attributes.publishedDate))
          .slice(0, 2);

        setUpNextData(filteredPlasticNews)
      }
    };
    fetchData();
  }, [blogslug]);
 
  const SubHeadingText = {
    pageref: `Home> Blogs> ${detailedBlog?.attributes?.blogTItle}`,
    title: "PLASTINDIA 2023",
    descriptionFontSize: "44px",
    description: detailedBlog?.attributes?.blogTItle,
    content: detailedBlog?.attributes?.blogDescription,
  };

  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <IndivisualBlogComp detailedBlog={detailedBlog} relatedUpNextData={relatedUpNextData}/>
      <Footer />
    </div>
  );
};

export default Page;
