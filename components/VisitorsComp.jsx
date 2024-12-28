import React from "react";
import Image from "next/image";
import img from "../assets/VISITORS/J IMAGE (1).png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function VisitorsComp() {
  return (
    <div className="px-6 lg:px-10 font-satoshi pt-2">
      <div className="relative">
        <Image
          id="trde-img"
          // src={img3}
          src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Internal_Hall_ee667f9e31.webp'}
          alt="TRADESHOW"
          width={1200}
          height={1000}
          className=" rounded-3xl  w-full mt-10 lg:rounded-[50px]"
        />
        <div className="hidden lg:flex rounded-tl-[48px] rounded-bl-[48px] absolute  lg:top-[230px] right-0  lg:w-[600px] lg:h-auto  flex-col bg-[#E9EFDF] lg:px-10 lg:py-20">
          <p className="font-normal font-satoshi text-md  text-[#3C3E3D] ">
            India is poised to become the 3rd largest global economy in the current decade. At the heart of this transformation lies a dynamic plastics industry that is fueling innovation, sustainability, and industrial growth. With a very conducive business environment and the vision of ‘Bharat Next,’ India presents endless opportunities for global investors and promoters to collaborate and prosper.
          </p>
          <p className="font-normal font-satoshi text-md  text-[#3C3E3D] mt-7">
            Fill out the form below to connect with Plastindia Foundation and discover how you can be part of India’s transformative journey.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-550px] -z-50 overflow-hidden" id="visit-brewing"><h2>
        &nbsp;
      </h2></div>

      <div className="flex lg:hidden mt-6 rounded-[48px]  h-auto  flex-col bg-[#E9EFDF] px-6  py-14">

        <p className="font-normal font-satoshi text-md  text-[#3C3E3D] ">
          India is poised to become the 3rd largest global economy in the current decade. At the heart of this transformation lies a dynamic plastics industry that is fueling innovation, sustainability, and industrial growth. With a very conducive business environment and the vision of ‘Bharat Next,’ India presents endless opportunities for global investors and promoters to collaborate and prosper.
        </p>
        <p className="font-normal font-satoshi text-md  text-[#3C3E3D] mt-7">Fill out the form below to connect with Plastindia Foundation and discover how you can be part of India’s transformative journey.</p>
      </div>


      <h3 id="visit-brewing" className="text-md font-satoshi-light px-6 lg:px-52 lg:pt-10 pt-5 text-[#3C3E3D] text-center">
        Be part of an unparalleled gathering of industry leaders and pioneers at
        PLASTINDIA 2026. Register now to access cutting-edge innovations,
        exclusive networking events, and expert-led seminars. Don&apos;t miss
        your chance.
      </h3>

      <div className="flex pt-6 lg:pt-0 justify-center">
        <Link href={"/lead-generation-form"}>
          <button
            // id="visit-brewing"
            className="relative bg-[#042523] text-md text-center font-light lg:mt-9 text-[#FFFFFF] px-5 py-4 rounded-full border-2 border-[#042523] 
      hover:bg-gradient-to-r from-cyan-800 to-blue-700 border-none flex items-center justify-center transition-all hover:pr-24 duration-300 group"
          >
            <span className="mr-3">Register as Visitor </span>
            <span className="relative flex items-center">
              <ArrowOutwardIcon className="text-white w-5 h-5 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
              <ArrowForwardIcon className="text-white w-5 h-5 absolute left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
            </span>
          </button>
        </Link>
      </div>
      <div>
        <div className="py-10">
          <Image
            // src={img2}
            src={'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Visitor_Crowd_09ca86389b.webp'}
            width={1200}
            height={800}
            alt="Not Found"
            className="mix-blend-multiply w-full h-[500px] rounded-[50px] object-cover  "
          />
        </div>
      </div>

      <div className=" lg:mt-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 flex items-center">
          <h3 className=" lg:pb-0 pb-10 lg:px-16 font-satoshi text-center text-md text-[#3C3E3D]">
            PLASTINDIA 2023 saw a{" "}
            <strong>record-breaking 360,000 visitors</strong> and featured over{" "}
            <strong> 1800 exhibitors</strong> showcasing cutting-edge machinery,
            raw materials, recycling technology, and automation solutions. A key
            highlight was the CEO Conclave with over{" "}
            <strong>90 industry leaders,</strong> emphasizing collaboration
            between industry and policymakers. Additionally, RBSM meetings in
            partnership with PLEXCONCIL attracted over 300 buyers from 30
            countries, reinforcing India&apos;s status as a global plastics
            sourcing hub.
          </h3>
        </div>
        <div className="">
          <Image src={img} alt="Not Found" className="mix-blend-multiply" />
        </div>
      </div>
    </div>
  );
}
