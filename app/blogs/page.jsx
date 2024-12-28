"use client";
import React, { useState, useEffect } from "react";
import BlogComp from "../../components/BlogComp";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import TopNavigation from "../../components/TopNavigation";
import BlogBtn from "../../components/BlogBtn";
import SubHeading from "../../components/SubHeading";
import { fetchBlogCategories, fetchBlogList } from "@/utils/api/api";
import Page from "../brewing-soon/page";

export default function Blog() {
  const [activeButton, setActiveButton] = useState("all");
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState(null);
  const [blogList, setBlogList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const SubHeadingText = {
    pageref: "Home > Blogs ",
    title: "INDUSTRY INSIGHTS",
    descriptionFontSize: "44px",
    description: "What's New",
    content:
      "Welcome to the Blogs section, get the latest updates and <strong>in-depth analyses </strong> of the plastics industry. Stay informed about the <strong>emerging trends, and gain valuable insights </strong> into innovations that are shaping the future of plastics.",
  };

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
      setIsLoading(true)
      const categoryResult = await fetchBlogCategories();
      setCategories(categoryResult?.data);
      const result = await fetchBlogList();
      setBlogList(result?.data);
      setIsLoading(false)
    };

    fetchData();
  }, []);

  const handleClick = async (categorySlug) => {
    setActiveButton(categorySlug);
    if (categorySlug === "all") {
      const result = await fetchBlogList();
      setBlogList(result?.data);
    } else {
      const result = await fetchBlogList(categorySlug);
      setBlogList(result?.data);
    }
  };

  if (isLoading) {
    return (
      <div>Loading......</div>
    )
  }
  return (
    <>
      {blogList && blogList?.length ? (
        <div className="bg-[#F7F7F7] font-satoshi">
          <TopNavigation />
          <div className={isSticky ? "sticky top-0  z-50 bg-white shadow-md" : ""}>
            <Navigation />
          </div>

          <SubHeading subHeadingText={SubHeadingText} />
          <div className="flex lg:flex-wrap md:flex-wrap flex-row py-5 px-6">
            {[
              { attributes: { Category: "All", CategorySlug: "all" } },
              ...(Array.isArray(categories) ? categories : []),
            ]?.map((text, index) => (
              <BlogBtn
                key={index}
                text={text?.attributes?.Category}
                active={activeButton === text?.attributes?.CategorySlug}
                categorySlug={text?.attributes?.CategorySlug}
                onClick={handleClick}
              />
            ))}
          </div>
          <BlogComp blogsList={blogList} active={activeButton} />
          <Footer />
        </div>

      ) : (

        <Page />

      )}
    </>
  );
}
