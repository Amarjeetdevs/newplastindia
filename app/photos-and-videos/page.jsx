"use client"
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import YearSection from "../../components/YearSection"; 

const MediaViewer = dynamic(() => import("../../components/MediaViewer"), {
  ssr: false,
});

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [mediaByYear, setMediaByYear] = useState({});
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const mediaCache = useRef({});

  useEffect(() => {
    const fetchAvailableYears = async () => {
      if (Object.keys(mediaCache.current).length > 0) {
        setMediaByYear(mediaCache.current);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "https://admin.plastindia.org/api/media-centers?fields=Year"
        );
        const uniqueYears = Array.from(
          new Set(response.data.data.map((entry) => entry.attributes.Year))
        ).sort((a, b) => b - a);

        setYears(uniqueYears);

        const mediaRequests = uniqueYears.map((year) =>
          axios.get(
            `https://admin.plastindia.org/api/media-centers?populate[images]=*&pagination[limit]=5&populate[videos]=*&filters[Year][$eq]=${year}`
          )
        );

        const mediaResponses = await Promise.all(mediaRequests);
        
        const mediaData = {};
        mediaResponses.forEach((response, index) => {
          const year = uniqueYears[index];
          mediaData[year] = response.data.data.flatMap((entry) =>
            entry.attributes.images?.data.map((image) => ({
              id: image.id,
              url: image.attributes.url,
              alternativeText: image.attributes.alternativeText,
            }))
          );
        });

        mediaCache.current = mediaData;
        setMediaByYear(mediaData);
      } catch (error) {
        console.error("Error fetching media centers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableYears();
  }, []);

  useEffect(() => {

    if (selectedImage !==null) {

      document.body.style.overflow = "hidden";
  
    } else {
      document.body.style.overflow = "auto";

      
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);


  const handleImageClick = (index, year) => {
    setSelectedImage(index);
    setSelectedYear(year);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setSelectedYear(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
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

      {loading && mediaByYear ? (
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        years.map((year) => (
          <YearSection
            key={year}
            year={year}
            media={mediaByYear[year]}
            onImageClick={handleImageClick}
          />
        )
      )
      )}

    
     {selectedImage !== null && (
       <div 
       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
       onClick={handleOverlayClick}
    >
        <MediaViewer
          isOpen={selectedImage !== null}
          onClose={handleClose}
          initialIndex={selectedImage}
          slides={mediaByYear[selectedYear]}
        />
     </div>

      )}

      <Footer />
    </div>
  );
};

export default Page;
