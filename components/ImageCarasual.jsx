"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import banner from "../assets/BANNER/Banner 1.jpg";
import banner2 from "../assets/BANNER/Banner 2.jpg";
import banner3 from "../assets/BANNER/Banner 3.jpg";
import banner4 from "../assets/BANNER/Banner 4.jpg";
import banner5 from "../assets/BANNER/Banner 5.jpg";
import banner6 from "../assets/BANNER/Banner 6.jpg";

export default function ImageCarousel() {
  const images = [
    { src: banner, width: 650, height: 650 },
    { src: banner2, width: 650, height: 650 },
    { src: banner6, width: 650, height: 650 },
    { src: banner3, width: 650, height: 650 },
    { src: banner4, width: 650, height: 650 },
    { src: banner5, width: 650, height: 650 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
         
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container px-4 lg:px-0 lg:w-3/4 mx-auto relative overflow-hidden">
      <div className="carousel-track flex" style={{ transform: `translateX(-${currentIndex * 85}%)`, transition: "transform 0.5s ease-out" }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide flex-none pr-2">
            <Image
              src={image.src}
              alt="Image not found"
              className="object-cover lg:w-[39.01em] lg:h-[40em] h-[20em] w-[20em] mb-5 lg:mb-0 mr-5 rounded-lg lg:rounded-3xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
