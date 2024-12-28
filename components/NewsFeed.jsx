"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchNewsAndEventsList } from "../utils/api/api";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const NewsFeed = () => {
  const [listData, setListData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNewsAndEventsList();
      setListData(result?.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="lg:h-[900px]">
        {listData && listData?.length != 0 && (
          <div className="lg:mb-10 lg:mt-6 px-6 flex  flex-col lg:px-10  ">
            <h2 className="text-[#3C3E3D] text-nowrap text-3xl lg:text-[42px] font-satoshi-medium mb-1 pt-5">
              News And Events
            </h2>
            <div className="flex lg:flex-row flex-col lg:justify-between lg:mt-7 mt-4 gap-[18px] lg:gap-y-0 ">
              <div className="flex flex-col lg:w-[48%] w-full slide-in slide-left">
                {listData &&
                  listData?.map(
                    (newsList, index) =>
                      index == 0 && (
                        <div className="flex flex-col h-auto " key={index}>
                          <Link
                            href={`/news-and-events/${newsList?.attributes?.slug}`}
                            className="rounded-[20px] h-[200px] md:h-[350px] lg:h-[400px] mb-3 lg:mb-7 md:mb-5"
                          >
                            <Image
                              src={
                                newsList?.attributes?.media?.data?.attributes
                                  ?.url
                              }
                              alt=""
                              height={400}
                              width={900}
                              className="object-cover h-full w-full rounded-[20px]"
                            />
                          </Link>

                          <p className="mb-1 lg:mb-[9px] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 capitalize text-[#3C3E3D]">
                            {"Source: "}
                            <Link
                              href={
                                newsList?.attributes?.sourceLink
                                  ? newsList?.attributes?.sourceLink
                                  : "#"
                              }
                              target="_blank"
                              className="capitalize text-[#C80F0F] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 "
                            >
                              {newsList?.attributes?.source}
                            </Link>
                          </p>
                          <Link
                            href={`/news-and-events/${newsList?.attributes?.slug}`}
                          >
                            <h2 className="mb-1 lg:mb-[9px] text-[16px] leading-5 md:text-2xl md:leading-7 lg:text-[28px] lg:leading-9 text-[#3C3E3D] font-bold">
                              {newsList?.attributes?.title}
                            </h2>
                          </Link>
                          <p className="mb-6 lg:mb-8 text-sm lg:text-[18px] leading-5 lg:leading-6 text-[#3C3E3D]">
                            {newsList?.attributes?.description}
                          </p>
                        </div>
                      )
                  )}
              </div>
              <div className="flex flex-col lg:w-[48%] w-full gap-y-5 slide-in slide-right">
                {listData &&
                  listData?.map(
                    (newsList, index) =>
                      index >= 1 &&
                      index <= 4 && (
                        <div
                          className="flex flex-row gap-x-5 justify-center items-center "
                          key={index}
                        >
                          <Link
                            href={`/news-and-events/${newsList?.attributes?.slug}`}
                            className="rounded-[20px] h-[150px]"
                          >
                            <Image
                              src={
                                newsList?.attributes?.media?.data?.attributes
                                  ?.url
                              }
                              alt=""
                              height={150}
                              width={150}
                              className=" h-full w-full object-cover rounded-[20px]"
                            />
                          </Link>

                          <div className="flex flex-col">
                            <Link
                              href={`/news-and-events/${newsList?.attributes?.slug}`}
                            >
                              <h2 className="mb-1 lg:mb-[9px] text-[16px] leading-5 md:text-2xl md:leading-7 lg:text-[28px] lg:leading-10 text-[#3C3E3D] font-bold">
                                {newsList?.attributes?.title}
                              </h2>
                            </Link>
                            <p className="mb-1 lg:mb-[9px] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 capitalize text-[#3C3E3D]">
                              {"Source: "}
                              <Link
                                href={`/${newsList?.attributes?.sourceLink}`}
                                target="_blank"
                                className="capitalize text-[#C80F0F] text-sm lg:text-[20px] font-satoshi font-normal leading-6 lg:leading-10 "
                              >
                                {newsList?.attributes?.source}
                              </Link>
                            </p>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
            <Link href={"/news-and-events"} className="text-center lg:mt-5 ">
              <button className=" bg-[#042523] text-md font-semibold text-[#FFFFFF] lg:px-[120px] px-7 py-4  rounded-full ">
                View all
                <span>
                  <ArrowOutwardIcon className="lg:ml-2 text-white  w-4 h-4" />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsFeed;
