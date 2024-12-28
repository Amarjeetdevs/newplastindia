"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchInstagramList } from "../utils/api/api";
import Image from "next/image";

const InstagramFeed = () => {
  const [listData, setListData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchInstagramList();
      setListData(result?.data);
    };

    fetchData();
  }, []);
  // console.log(listData);
  return (
    <>
      {listData && listData?.length != 0 && (
        <div className=" lg:mb-10 lg:mt-12 px-6 flex  flex-col lg:px-10  ">
          <h2 className="text-[#3C3E3D]  text-3xl lg:text-[42px] font-satoshi-medium pt-5 text-center">
            Stay updated with news and updates
          </h2>
          <p className="text-[#3C3E3D] text-nowrap lg:text-[20px] font-satoshi-medium pt-3 text-center">
            Follow us{" "}
            <Link
              href="https://www.instagram.com/plastindiafoundation"
              target="_blank"
            >
              @plastindiafoundation
            </Link>
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-7 mt-4 gap-x-[12px] gap-y-[18px] ">
            {listData &&
              listData?.map(
                (feed, index) =>
                  index < 6 && (
                    <div className="justify-center flex h-auto " key={index}>
                      <Link
                        href={feed?.permalink}
                        target="_blank"
                        className="rounded-[20px] h-[350px] md:h-[400px] lg:h-[450px] "
                      >
                        {feed?.media_type === "VIDEO" ? (
                          <Image
                            src={feed?.thumbnail_url}
                            className="object-cover h-full w-full "
                            height={445}
                            width={450}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={feed?.media_url}
                            alt=""
                            height={445}
                            width={450}
                            className="object-cover h-full w-full "
                          />
                        )}
                      </Link>
                    </div>
                  )
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default InstagramFeed;
