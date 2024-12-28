"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const TopNavigation = dynamic(() => import("../../components/TopNavigation"), { ssr: false });
const Navigation = dynamic(() => import("../../components/Navigation"), { ssr: false });
const Footer = dynamic(() => import("../../components/Footer"), { ssr: false });
const SubHeading = dynamic(() => import("../../components/SubHeading"), { ssr: false });
const MediaViewer = dynamic(() => import("../../components/MediaViewer"), { ssr: false });
import axios from "axios";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaCenters = async () => {
      try {
        const response = await axios.get(
          "https://admin.plastindia.org/api/media-centers?populate[images]=*&pagination[limit]=5&populate[videos]=*&filters[Year][$eq]=2018"
        );
        const imagesArray = response.data.data.flatMap((entry) =>
          entry.attributes.images?.data.map((image) => ({
            id: image.id,
            url: image.attributes.url,
            alternativeText: image.attributes.alternativeText,
          }))
        );
        setSlides(imagesArray);
        console.log("Images Array:", imagesArray);
      } catch (error) {
        console.error("Error fetching media centers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMediaCenters();
  }, []);

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

  const handleViewAllClick = () => {
    const year = 2023;
    // router.push(/photos&videos);
  };


  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const SubHeadingText = {
    pageref: "Photos & Videos",
    title: "SNAPSHOTS",
    descriptionFontSize: "44px",
    description: "PLASTINDIA Through the Lens",
    content:
      " Witness the dynamic atmosphere, <strong>innovative displays,</strong> and engaging moments that define each edition through our extensive collection of photos and videos. Explore the <strong>rich archive of PLASTINDIA snapshots</strong> to experience the evolution and impact of one of the most significant events in the global plastics industry.",
  };

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />

      <div>
        <h2
          style={{ fontSize: 42, color: "#032624" }}
          className="font-satoshi font-semibold px-10"
        >
          2023
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5 lg:mt-8 lg:px-10">
          {slides.map((slide, index) => (
            <div key={index} className="relative">
              <Image
                src={slide.url}
                alt="Not found"
                width={6000}
                height={6000}
                className="cursor-pointer object-cover mx-6 lg:mx-0 w-[90vw] h-[40vh] lg:w-full lg:h-[21vw] rounded-2xl"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>

        {selectedImage !== null && (
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
