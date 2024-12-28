import React from "react";
import textimg from "../assets/TRADESHOW/SPOTLIGHT.png";
import plntimg from "../assets/TRADESHOW/sustainability .JPG";
import Image from "next/image";
import "./styles.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";

export default function TradeMapComp() {
  return (
    <div
      id="bgmap2"
      className="px-6 lg:px-10 lg:mt-20 bg-[#032624] pt-16 pb-24 text-[#3C3E3D]"
    >
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 pt-10 lg:pr-10 ">
          <Image
            src={plntimg}
            alt="SUSTAINABILITY"
            id="trade-imges"
            className="rounded-xl "
          />
          <div
            className="relative hidden lg:block bottom-1"
            id="trade-rotating-imgg"
          >
            <Image src={textimg} alt="TEXT IMAGE" width={200} height={200} />
          </div>
        </div>
        <div className="lg:w-1/2 text-[#FFFFFF] opacity-90  lg:pt-20 pl-4">
          <h2 className="text-lg font-satoshi-medium  mb-1">
            SUSTAINABILITY SPOTLIGHT
          </h2>
          <h2 className="leading-10 text-3xl lg:text-[2.65em] font-satoshi-medium  mb-4">
            PLASTINDIA&apos;s Mission: Greening Plastics
          </h2>

          <p className="font-satoshi-medium    text-md mb-4">
            PLASTINDIA 2026 envisions creating the world’s largest and most
            impactful plastics exhibition, driving innovation, sustainability,
            and global collaboration to elevate the Indian plastics industry on
            the world stage. Our mission is to foster a transformative platform
            where innovation, sustainability, and international partnerships
            converge to shape the future of the plastics sector.
          </p>
          <p className="font-satoshi-bold text-md mb-4">
            <strong>Through this event, we aim to:</strong>
          </p>
          <ul className="text-md mb-6 list-disc pl-5">
            <li>Drive Innovation </li>
            <li>Promote Sustainability</li>
            <li>Expand Global Collaboration</li>
            <li>Empower Industry Growth</li>
            <li>Enhance Visitor and Exhibitor Experience</li>
          </ul>
          <Link href={"/brewing-soon"}>
            <button className=" border-2 border-white text-md text-white px-5 py-4 rounded-full  ">
              Read more
              <span>
                <ArrowOutwardIcon className="ml-2 text-white  w-5 h-5" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
