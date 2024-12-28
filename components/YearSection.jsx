import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

const YearSection = memo(({ year, media, onImageClick, onViewAllClick }) => (
  <div key={year}>
    <h2
      style={{ fontSize: 42, color: "#032624" }}
      className="font-satoshi font-semibold px-10"
    >
      {year}
    </h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 md:pb-20 gap-5 lg:mt-8 lg:px-10">
      {media.slice(0, 8).map((slide, index) => (
        <div key={index} className="relative">
          {index === 7 && (
            <Link href={`/photos&videos/${year}`}>
              <div
                className="absolute inset-0 flex mx-6 lg:w-full w-[90vw] lg:h-full h-[40vh] items-center lg:mx-0 justify-center bg-black bg-opacity-70 rounded-2xl cursor-pointer"
                onClick={onViewAllClick}
              >
                <span
                  className="text-white text-lg font-satoshi font-semibold opacity-100"
                  style={{ zIndex: 10 }}
                >
                  View All
                </span>
              </div>
            </Link>
          )}
          <Image
            src={slide.url}
            alt={slide.alternativeText || `Image ${index + 1}`}
            width={6000}
            height={6000}
            className="cursor-pointer object-cover mx-6 lg:mx-0 w-[90vw] h-[40vh] lg:w-full lg:h-[21vw] rounded-2xl"
            onClick={() => onImageClick(index, year)}
          />
        </div>
      ))}
    </div>
  </div>
));

YearSection.displayName = "YearSection";

export default YearSection;
