import React from "react";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import './styles.css';
import img3 from "../assets/FOUNDATION/About.jpg";
import img2 from "../assets/FOUNDATION/J IMAGE.jpg";
import SmallCarausalComp from "./SmallCarausalComp";


export default function FoundationComp() {
  return (
    <>
      <div className="px-10 pt-2">
        <div className="">
          <Image
            src={img3}
            alt="Not Found"
            className="mix-blend-multiply py-14"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-52 pt-5 text-[#3C3E3D] text-center">
          <strong> Established in 1987,</strong> PLASTINDIA Foundation continues
          as an eminent aegis uniting major associations, organizations, and
          institutions within the plastic industry. At PLASTINDIA Foundation,{" "}
          <strong>
            we dream of promoting the development of the plastics industry and
            strive for national progress through the power of plastics and
            related materials.
          </strong>
          <br />
          While driving export-led growth in India&apos;s plastic industry, we
          aim to boost both business volumes and revenues. PLASTINDIA
          Exhibition, a triumph since its inception, evolves and expands with
          each edition. From a modest beginning in 1990 with 486 exhibitors, it
          has grown into a global sensation. The latest edition in 2023 boasted
          over <strong>1800 exhibitors from 79 countries,</strong> attracting
          over <strong>360,000 visitors.</strong> The event is now a permanent
          fixture in the calendars of corporations and industry leaders
          worldwide. 
        </h3>
        <div className="flex items-center justify-center mt-10">
          <button className="ml-4 border-2 border-[#032624]  text-md text-[#042523] px-4 py-4 rounded-full  ">
            Core Team
            <span>
              <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
            </span>
          </button>
          <button className="ml-4 border-2 border-[#032624] text-md text-[#042523] px-4 py-4 rounded-full  ">
            Key Members
            <span>
              <ArrowOutwardIcon className="ml-2 text-[#042523]  w-5 h-5" />
            </span>
          </button>
        </div>
        <div className="">
          <Image
            src={img2}
            alt="Not Found"
            className="mix-blend-multiply py-10"
          />
        </div>
      </div>
      <section className="flex items-center justify-between mb-12 ">
        <div className="w-1/4 ml-10   text-[#3C3E3D]">
           <h3
           style={{fontSize:37}}
           >Our Cornerstones</h3>
           <h4
           className="text-md"
           >At PLASTINDIA Foundation, our values are the foundation of our mission and vision, reflecting our excellence and integrity in every facet of our work.</h4>
        </div>
        <div className="w-2/3 pr-5 ">
         <SmallCarausalComp/>
        </div>
      </section>
      
      
      
        <section
        id="vector-icon"
        className="h-screen bg-[#032624] flex items-center justify-center">
         
       <div className="flex-col">
       <h2 style={{ fontSize: 36.5,lineHeight:1.3 }} 
          className="text-[#FFFFFF]  opacity-85  mt-48 text-center"> 
            &quot;By working together and sharing knowledge, we can solve <br/> challenges
            and seize opportunities, creating a future where <br/> plastics contribute
            positively to society, the economy, and the <br/> environment. Let us make
            India stand as a beacon of <br/> innovation, sustainability, and progress in
            the plastics <br/> industry.&quot;
          </h2>
          <h3
          className="text-[#FFFFFF] opacity-70 text-lg mt-10 leading-10 text-center lg:mx-48"> 
          Mr. Ravish Kamath, President          
          </h3>
          <h2
          style={{fontSize:15}}
          class="mt-5 text-center mb-52 opacity-60 text-white  pt-2 relative">
                    <span className=" cursor-pointer underline underline-offset-4 text-white">
                    Read more</span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
       </div>
        </section>
    </>
  );
}
