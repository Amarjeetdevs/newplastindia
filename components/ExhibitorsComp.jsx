import React from "react";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img2 from "../assets/EXHIBITOR/J IMAGE.jpg";
import img3 from "../assets/EXHIBITOR/ABOUT-IMAGE (4).png";
import img7 from "../assets/EXHIBITOR/Frame 581.svg";
import img8 from "../assets/EXHIBITOR/Frame 580.svg";
import img9 from "../assets/EXHIBITOR/Group.svg";
import img10 from "../assets/EXHIBITOR/Vector.svg";
import "./styles.css";
import Link from "next/link";
export default function ExhibitorsComp() {
  return (
    <div className="px-6 lg:px-10  pt-10">
      <div className="">
        <Image
          id="trde-img"
          src={img3}
          alt="TRADESHOW"
          className=" rounded-3xl  lg:rounded-lg  object-cover   w-full h-[17em] lg:w-full lg:h-full  "
        />
      </div>

      <h3
        id="text-exhibit"
        className="text-md opacity-95 px-0  lg:px-52 lg:pt-2 pt-0 text-[#3C3E3D] text-center"
      >
        Mark your calendars for a{" "}
        <strong>grand gathering of minds and makers</strong> in the world of
        plastics at{" "}
        <strong>Bharat Mandapam, New Delhi, from February 5-10, 2026.</strong>{" "}
        Here is where industry leaders and up-and-comers alike forge{" "}
        <strong>
          valuable connections and spark groundbreaking advancements.
        </strong>{" "}
        Simple registration through our official site puts you right in the
        heart of it all. Come see where the future of plastics is shaped,
        partner with pioneers, and take your place on the global stage.
      </h3>

      <div className="lg:flex lg:flex-row grid grid-cols-2 space-y-4 justify-center mt-16 text-[#3C3E3D]">
        <div className="relative flex flex-col items-center justify-end  mx-2">
          <Image src={img7} alt="Not Found" width={50} />
          <h5
           
            className="font-normal text-center mt-5 w-full"
          >
            Easy and secure <br />
            payment methods
          </h5>
        </div>
        <div className="relative flex flex-col items-center justify-end  mx-2">
          <Image src={img8} alt="Not Found" width={50} />
          <h5

            className="font-normal text-sm text-center  mt-5 w-full"
          >
            24/7 support for <br />
            all your queries
          </h5>
        </div>
        <div className="relative  flex flex-col items-center justify-end  mx-2">
          <Image src={img9} alt="Not Found" width={50} />
          <h5

            className="font-normal text-sm text-center mt-5 w-full"
          >
            All set to network with <br />
            worldwide leaders
          </h5>
        </div>
        <div className="relative flex flex-col items-center justify-end  mx-2">
          <Image src={img10} alt="Not Found" width={50} />
          <h5

            className="font-normal text-sm text-center mt-5 w-full"
          >
            Simple & streamlined <br />
            registration
          </h5>
        </div>
      </div>

      <div className="flex items-center lg:pt-0 pt-12 pb-7 lg:pb-12 justify-center">
        <Link href={"https://exhibitors.plastindia.org/"} target="_blank" rel="noopener noreferrer">
          <button
            id="exhibit-brewing"
            className="relative mb-12 lg:mb-0 bg-[#042523] text-md text-center font-light lg:mt-9 text-[#FFFFFF] px-7 py-4 rounded-full border-2 border-[#042523] 
      hover:bg-gradient-to-r from-cyan-800 to-blue-700 border-none flex items-center justify-center transition-all hover:pr-24 duration-300 group"
          >
            <span className="mr-3">Start the online application</span>
            <span className="relative flex items-center">
              <ArrowOutwardIcon className="text-white w-5 h-5 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <ArrowForwardIcon className="text-white w-5 h-5 absolute left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            </span>
          </button>
        </Link>
      </div>
      <div className="">
        <Image
          id="trde-img"
          src={img2}
          alt="TRADESHOW"
          className=" rounded-3xl  lg:rounded-lg  object-contan bg-black  w-full  lg:mt-0 mt-1 lg:w-full lg:h-full  "
        />
      </div>
    </div>
  );
}
