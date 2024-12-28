import React, { useState, useRef } from "react";

import Image from "next/image";

import {  useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import "aos/dist/aos.css";
import Link from "next/link";

export default function BlogComp({ blogsList, active }) {
  const [isHovered, setIsHovered] = useState(true);
  const [isHoveredRb, setIsHoveredRb] = useState(true);
  const [isHoveredRt, setIsHoveredRt] = useState(true);

  const textHoverRef = useRef(null);
  const textHoverRefRb = useRef(null);
  const textHoverRefRt = useRef(null);

  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseEnterRb = () => {
    setIsHoveredRb(true);
  };
  const handleMouseEnterRt = () => {
    setIsHoveredRt(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveRb = () => {
    setIsHoveredRb(true);
  };
  const handleMouseLeaveRt = () => {
    setIsHoveredRt(true);
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <div className="mt-5 pb-20">
      <div className="px-6 lg:px-10 text-[#3C3C3C] ">
        <div className="flex md:flex-row lg:flex-row flex-col lg:gap-6 gap-4">
          {blogsList&& blogsList?.length>0? (
            blogsList &&
            blogsList
              ?.sort((a, b) => {
                const dateA = new Date(a?.attributes?.createdAt);
                const dateB = new Date(b?.attributes?.createdAt);
                return dateB - dateA;
              })
              .slice(0, 2)
              ?.map((data, id) => {
                return (
                  <div key={id} className="lg:w-[48.5%]">
                    <div
                      id="bigdiv"
                      className="w-full bg-[#EAEAEA] rounded-2xl  overflow-hidden"
                    >
                      <Link href={`/blogs/${data?.attributes?.slug}`}>
                        <Image
                          src={
                            data?.attributes?.thumbnail?.image?.data?.attributes
                              ?.url
                              ? data?.attributes?.thumbnail?.image?.data
                                  ?.attributes?.url
                              : "null"
                          }
                          width={710}
                          height={500}
                          alt="Not found"
                          className="p-5 lg:p-7 object-cover rounded-2xl lg:rounded-3xl h-[280px] md:h-[350px] lg:h-[480px] w-full"
                        />
                      </Link>
                      <div
                        className={`flex flex-col justify-center items-start  text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000  ${
                          isHovered ? "text-[#3C3C3C]" : "text-gray-100"
                        }`}
                        ref={textHoverRef}
                      >
                        <Link href={`/blogs/${data?.attributes?.slug}`}>
                          <h3 className="text-md lg:text-[20px] lg:mb-3 mb-2 lg:mx-7 mx-5 font-semibold">
                            {data?.attributes?.blogTItle}
                          </h3>
                        </Link>
                      </div>
                      <h3 className="text-start text-[#3C3C3C] text-sm lg:text-md lg:px-7 px-5">
                        {data?.attributes?.blogDescription}
                      </h3>
                      <h3 className="text-md lg:text-[20px] font-semibold mt-4 lg:pb-5 pb-2 lg:px-7 px-5">
                        <span>
                          <CalendarMonthIcon className="h-12 mb-2 mr-2" />
                        </span>
                        {new Date(
                          data?.attributes?.createdAt
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h3>
                    </div>
                  </div>
                )
              })):("No Blog Found")}
        </div>
      </div>

      <div className="px-6 lg:px-10 mt-4 lg:mt-6 flex lg:flex-row md:flex-row flex-col text-[#3C3C3C] ">
        <div className="w-full lg:gap-6  gap-4 grid lg:grid-cols-2 grid-cols-1 ">
          {blogsList &&
            blogsList
              ?.sort((a, b) => {
                const dateA = new Date(a?.attributes?.createdAt);
                const dateB = new Date(b?.attributes?.createdAt);
                return dateB - dateA;
              })
              .slice(2)
              ?.map((data, idx) => {
                return (
                  <div className=" bg-[#EAEAEA]  rounded-2xl " key={idx}>
                    <div className="flex justify-between items-center">
                      <div
                        className={`flex lg:flex-row md:flex-row flex-col justify-start items-center text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 
                }`}
                      >
                        <div className="flex-grow w-full md:w-[48%] lg:w-[48%]">
                          <Link href={`/blogs/${data?.attributes?.slug}`}>
                            <Image
                              src={
                                data?.attributes?.thumbnail?.image?.data
                                  ?.attributes?.url
                                  ? data?.attributes?.thumbnail?.image?.data
                                      ?.attributes?.url
                                  : "null"
                              }
                              alt="Not found"
                              className="object-cover p-5 lg:p-7 mix-blend-multiply w-full"
                              style={{ borderRadius: 30 }}
                              width={400}
                              height={350}
                            />
                          </Link>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[48%]">
                          <Link href={`/blogs/${data?.attributes?.slug}`}>
                            <h3
                              className={`flex px-5 lg:pr-7 lg:pl-0 justify-start lg:text-[20px] text-md items-center  mb-5 font-semibold text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 ${
                                isHoveredRt ? "text-gray-800" : "text-gray-100"
                              }`}
                              ref={textHoverRefRt}
                            >
                              {data?.attributes?.blogTItle}
                            </h3>
                          </Link>
                          <h3 className="text-sm lg:text-md px-5 lg:pr-7 lg:pl-0">
                            {data?.attributes?.blogDescription}
                          </h3>
                          <h3 className=" px-5 lg:pr-7 lg:pl-0 text-md lg:text-[20px] font-semibold text-start  lg:pb-0 pb-2 ">
                            <span>
                              <CalendarMonthIcon className="h-12 mb-2 mr-2 " />
                            </span>
                            {new Date(
                              data?.attributes?.createdAt
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
