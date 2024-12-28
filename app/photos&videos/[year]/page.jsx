"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import TopNavigation from "../../../components/TopNavigation";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import SubHeading from "../../../components/SubHeading";
import MediaViewer from "../../../components/MediaViewer";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState(null);

  const router = useRouter();

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const pathParts = pathname.split("/");
    const extractedYear = pathParts[pathParts.length - 1];
    setYear(extractedYear);
  }, []);

  useEffect(() => {
    const fetchMediaCenters = async () => {
      if (!year) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `https://admin.plastindia.org/api/media-centers?populate[images]=*&pagination[limit]=5&populate[videos]=*&filters[Year][$eq]=${year}`
        );
        const imagesArray = response.data.data.flatMap((entry) =>
          entry.attributes.images?.data.map((image) => ({
            id: image.id,
            url: image.attributes.url,
            alternativeText: image.attributes.alternativeText,
          }))
        );
        setSlides(imagesArray);
        console.log(`Images for year ${year}:`, imagesArray);
      } catch (error) {
        console.error("Error fetching media centers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMediaCenters();
  }, [year]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SubHeadingText = {
    pageref: `Photos & Videos > ${year || ''}`,
    title: "",
    descriptionFontSize: "44px",
    description: `${year || ''}`,
    content: "",
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <div className="bg-[#E8EEE3] mb-20">
        <SubHeading subHeadingText={SubHeadingText} />
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : slides.length > 0 ? (
          <div className="grid lg:grid-cols-4 mt-20 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5 lg:mt-8 lg:px-10">
            {slides.map((slide, index) => (
              <div key={index} className="relative">
                <Image
                  src={slide.url}
                  alt={`Image ${index + 1}`}
                  width={6000}
                  height={6000}
                  className="cursor-pointer object-cover mx-6 lg:mx-0 w-[90vw] h-[40vh] lg:w-full lg:h-[21vw] rounded-2xl"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p>No media found for the year {year}.</p>
          </div>
        )}

        {selectedImage !== null && slides.length > 0 && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleOverlayClick}
          >
            <MediaViewer
              isOpen={selectedImage !== null}
              onClose={handleClose}
              initialIndex={selectedImage}
              slides={slides}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
