"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrollingBox = () => {

  const boxdata = [
    
    {
      title: "Global Exhibition Participation",
      description:
        "Plastindia  Foundation organizes and participates in international exhibitions to highlight Indian plastics on the world stage. This effort is designed to showcase the capabilities of the Indian plastics industry and facilitate global business connections.",
      number: "01",
    },
    {
      title: "Capacity and Consumption Growth",
      description:
        "The Foundation aims to double the processing capacity and consumption of plastics in India. This ambitious goal is part of a broader strategy to strengthen the industry’s infrastructure and market presence.",
      number: "02",
    },
    {
      title: "Support for Export Growth",
      description:
        "By establishing a Knowledge Centre for training in plastics processing, design, and raw materials, PLASTINDIA supports export-led growth and enhances the industry’s competitive edge globally.",
      number: "03",
    },
    {
      title: "Skill Enhancement and Brand Promotion",
      description:
        "The Foundation is dedicated to increasing technical skills within the industry and promoting 'Brand India' as a mark of excellence. This initiative seeks to project a progressive and high-quality image of the Indian plastics sector.",
      number: "04",
    },
    {
      title: "Sustainability and Resource Conservation",
      description:
        "PLASTINDIA promotes the conservation of natural resources and the advancement of scientific recycling techniques. The Foundation encourages sustainable practices and cooperation among various organizations to support environmental consciousness and resource efficiency.",
      number: "05",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row py-12 lg:pt-16  mx-0 lg:mx-10 text-black overflow-hidden ">
      <div className="lg:w-1/3 h-full flex flex-col items-center justify-between">
        <h2 className=" text-3xl  lg:text-[2.7em] font-satoshi lg:mb-12">
          Our Aims & Objectives
        </h2>
        <Image src= {"https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/HOMMEPAGE_PT_6_52da9fe739.webp"} alt="foundation aim" width={1081} height={600} className="rounded-[42px]"/>
      </div>
      <div className=" lg:ml-auto  lg:w-[55em] w-full px-4">
        <div className="itm card item h-auto py-4 bg-[#E8EEE3] text-[#000000] rounded-[1.5em] mt-4 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="flex flex-row items-start w-full py-5 px-10 sm:w-auto">
            <ol>
              <li className="list-disc mb-2">
                To organize and participate in international exhibitions with
                the aim of showcasing Indian Plastics Industry to the world.
              </li>
              <li className="list-disc mb-2">
             
                To help generate two-fold increase in the plastics processing
                capacity and consumption.
              </li>
              <li className="list-disc mb-2">
            
                To facilitate the export-led growth of the Indian Plastics
                Industry.
              </li>
              <li className="list-disc mb-2">
              
                To help in facilitating the setting-up of a Knowledge Centre,
                dedicated to training of Plastics in processing, design, and raw
                materials.
              </li>
              <li className="list-disc mb-2">
             
                To support technical institutes, to ensure increase in the
                technically skilled man-power for the Indian Plastics Industry.
              </li>
              <li className="list-disc mb-2">
             
                Project an appropriate and progressive image of the Plastics
                Industry in India and abroad - to establish &apos;Brand India&apos;.
              </li>
              <li className="list-disc mb-2">
           
                Help conserve energy, and natural resources, and to protect the
                environment.
              </li>
              <li className="list-disc mb-2">
            
                Promote scientific recycling of plastics and polymers.</li>
                <li className="list-disc mb-2">
              
                Encourage co-operation amongst the various organizations
                connected with the Plastics Industry.
              </li>
              <li className="list-disc mb-0">
              
                To encourage the use of &apos;Plasticulture&apos; techniques for
                conservation of natural resources like water, while improving
                the yield of agricultural, horticultural and floricultural
                sectors.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBox;
