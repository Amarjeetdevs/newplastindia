import React, { useState, useRef } from "react";

const TradeshowVideoSlider = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  const videos = [
    {
      src: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy_of_Plast_India_Main_Film_with_VO_15826a850c.mp4",
      poster:
        "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/HP_PT_2_a1d86cd520.webp",
    },
    {
      src: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy_of_Plast_India_Main_Film_with_VO_15826a850c.mp4",
      poster:
        "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/plastindia_thumbnail_4e3308544c.png",
    },
  ];
  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };
   
  return (
    <div className="relative py-4 lg:py-14">
      <div className="relative w-full">
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          controls
          playsInline
          poster={videos[currentVideo].poster}
        >
          <source src={videos[currentVideo].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default TradeshowVideoSlider;
