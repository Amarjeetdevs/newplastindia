"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function IndivisualPlastics({
  plasticDetails,
  relatedUpNextData,
}) {
  const parseContent = (content) => {
    const lines = content?.split("\n");
    const result = [];

    lines?.forEach((line) => {
      line = line.trim();

      // Check for headings
      if (line.startsWith("# ")) {
        result.push({ type: "h1", content: line.replace("# ", "") });
      } else if (line.startsWith("## ")) {
        result.push({ type: "h2", content: line.replace("## ", "") });
      } else if (line.startsWith("### ")) {
        result.push({ type: "h3", content: line.replace("### ", "") });
      } else if (line.startsWith("##### ")) {
        result.push({ type: "h5", content: line.replace("##### ", "") });
      } else if (line.startsWith("![") && line.includes("](")) {
        // Extract image URL and description
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, alt, url] = match;
          result.push({ type: "image", content: url, alt });
        }
      } else if (/^\d+\.\s/.test(line)) {
        // Check for numbered bullet points
        result.push({ type: "bullet", content: line });
      } else if (line.trim()) {
        // Regular paragraph
        result.push({ type: "p", content: line });
      }
    });

    return result;
  };

  const parsedContent = parseContent(plasticDetails?.attributes?.content);
  let imageRendered = false;
  
  return (

    <article>
      <Image
        src={
          plasticDetails &&
            plasticDetails?.attributes?.media?.data?.attributes?.url
            ? plasticDetails &&
            plasticDetails?.attributes?.media?.data?.attributes?.url
            : ""
        }
        alt="Not Found"
        // layout="responsive"
        height={650}
        width={900}
        className="rounded-[72px] mix-blend-multiply px-10 py-12 w-full h-[400px] md:h-[550px] lg:h-[650px] object-cover"
      />
      <div className="lg:mx-60 px-10 text-[#3C3E3D]">
        {parseContent && parseContent?.length > 0 && (
          <>
            {parsedContent.map((item, index) => {
              if (item.type === "h1") {
                return (
                  <h1
                    className="text-xl md:text-2xl lg:text-3xl lg:mt-10 font-bold mb-2 md:pb-4 lg:pb-5 italic"
                    key={index}
                  >
                    {item.content}
                  </h1>
                );
              } else if (item.type === "h2") {
                return (
                  <h2
                    className=" text-[18px] md:text-xl lg:text-2xl font-bold pb-2 md:pb-4 lg:pb-5 italic"
                    key={index}
                  >
                    {item.content}
                  </h2>
                );
              } else if (item.type === "h3") {
                return (
                  <h3
                    className="text-[18px] md:text-xl lg:text-2xl pb-2 md:pb-4 lg:pb-5 italic"
                    key={index}
                  >
                    {item.content}
                  </h3>
                );
              } else if (item.type === "h5") {
                return (
                  <h5
                    className="text-sm md:text-[16px] lg:text-[16px]  text-[#3C3E3D] leading-6 pb-2 md:pb-4 lg:pb-5 font-normal "
                    key={index}
                  >
                    {item.content}
                  </h5>
                );
              } else if (item.type === "image" && !imageRendered) {
                const imageItems = parsedContent.filter(
                  (item) => item.type === "image"
                );
                if (imageItems.length >= 3) {
                  imageRendered = true;
                  return (
                    <div key={index} className="pt-5 lg:pt-12">
                      <Image
                        src={imageItems[0].content}
                        alt={imageItems[0].alt || "Not Found"}
                        // layout="responsive"
                        className="  w-full lg:h-[550px] object-cover rounded-3xl md:rounded-[34px] lg:rounded-[72px]"
                        height={550}
                        width={900}
                      />
                      <div className="flex gap-4 lg:gap-[30px] pt-4 lg:pt-[30px] pb-5 lg:pb-12 w-full">
                        <Image
                          src={imageItems[1].content}
                          alt={imageItems[1].alt || "Not Found"}
                          className=" w-[48%] object-cover rounded-3xl md:rounded-[34px] lg:rounded-[72px]"
                          height={450}
                          width={600}
                        />
                        <Image
                          src={imageItems[2].content}
                          alt={imageItems[2].alt || "Not Found"}
                          className=" w-[48%] object-cover rounded-3xl md:rounded-[34px]  lg:rounded-[72px] "
                          height={450}
                          width={600}
                        />
                      </div>
                    </div>
                  );
                } else {
                  return <div key={index}>No sufficient images to display.</div>;
                }
              } else if (item.type === "bullet") {
                return (
                  <li key={index}>{item.content.replace(/^\d+\.\s/, "")}</li>
                );
              } else if (item.type === "p") {
                return <p key={index}>{item.content}</p>;
              }
              return null;
            })}
          </>
        )}
      </div>
      {relatedUpNextData && relatedUpNextData?.length > 0 && (
        <div className="lg:mt-[65px] mt-8 flex flex-col bg-[#EAEAEAC2] lg:py-[32px] py-5 lg:px-12 px-7 text-center items-center justify-center">
          <h1 className="lg:text-3xl text-xl font-bold font-satoshi text-[#3C3E3D] lg:leading-10 leading-6">
            Up Next
          </h1>
          <div className="flex lg:flex-row flex-col lg:mt-[50px] mt-8 lg:gap-x-5 lg:gap-y-0 gap-y-3">
            {relatedUpNextData &&
              relatedUpNextData?.sort(
                (a, b) =>
                  new Date(b.attributes.publishedDate).getTime() -
                  new Date(a.attributes.publishedDate).getTime()
              ).map((nextData, idx) => (
                <>
                  <div
                    key={idx}
                    className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  px-6 py-6 lg:gap-x-6 lg:gap-0 md:gap-0 gap-y-3 items-center"
                  >
                    <Link
                      href={`/impact-of-plastics/${nextData?.attributes?.titleSlug}`}
                      className="w-full md:pr-6 lg:pr-0 pr-0"
                    >
                      <Image
                        src={nextData?.attributes?.media?.data?.attributes?.url}
                        height={350}
                        width={350}
                        alt=""
                        className=" md:w-full md:h-[350px] w-full rounded-[20px] object-cover"
                      />
                    </Link>
                    <div className="flex flex-col text-left w-full">
                      <Link
                        href={`/impact-of-plastics/${nextData?.attributes?.titleSlug}`}
                      >
                        <h1 className="text-[16px] lg:text-[20px] leading-7 text-[#3C3E3D] pb-3 font-medium">
                          {nextData?.attributes?.title}
                        </h1>
                      </Link>
                      <p className="text-sm lg:text-[16px] leading-6 text-[#3C3C3C] pb-3 lg:pb-5 font-normal ">
                        {nextData?.attributes?.sort_desc}
                      </p>
                      <h3 className="text-sm lg:text-[16px] font-medium   pb-2 text-[#032624]">
                        <span>
                          <CalendarMonthIcon className="h-10 mb-2 mr-2" />
                        </span>
                        {new Date(
                          nextData?.attributes?.publishedDate
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h3>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      )}
    </article>


  );
}
