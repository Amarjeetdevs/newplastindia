"use client";
import React from "react";

export default function SubHeading({ subHeadingText }) {
  return (
    <>
      <div className="-z-50">
        <h3 className="text-start  hidden lg:block font-satoshi font-semibold text-[#8F9290] text-md pb-4 px-10 pt-4">
          {subHeadingText?.pageref}
        </h3>
        <div className="lg:px-10 font-satoshi flex lg:flex-row flex-col px-6 py-5">
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-start  text-md font-bold text-[#029D3F] uppercase">
              {subHeadingText?.title}
            </h2>
            <h2
              // style={{ fontSize: subHeadingText?.descriptionFontSize || 58 }}
              className="text-start  font-satoshi text-3xl lg:text-[52px]  text-[#3C379C]"
            >
              {subHeadingText?.description}
            </h2>
          </div>
          <div className="lg:w-1/2 flex  text-lg  lg:mt-8 text-[#3C3E3D]  lg:pl-36">
            <h2
              className="text-start text-sm lg:text-[18px] lg:pt-0  pt-5 font-satoshi"
              dangerouslySetInnerHTML={{ __html: subHeadingText?.content }}
            ></h2>
          </div>
        </div>
      </div>
    </>
  );
}
