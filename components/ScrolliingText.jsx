"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fixdimg from "../assets/ABOUT-KEY-MEMBERS/Rectangle 39.png";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationWithText = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (isReady) {
      gsap.set(containerRef.current, { visibility: "visible" });
    }
  }, [isReady]);
  return (
    <div className="flex lg:flex-row flex-col text-[#3C3E3D]  ">
      <div className=" w-full lg:w-1/3 h-full flex  flex-col items-enter   justify-between">
        <h2 className="item text-4xl lg:text-[2.7em] font-satoshi mb-12  lg:-mr-10 ">
          
        </h2>

        <div className="pb-40 mt-24 ">
          <Image
            src={fixdimg}
            alt="Fixed Image"
            className="w-[25em] h-[30em] rounded-3xl object-cover"
          />
          <h2 className="text-[1.2em] text-center mr-0 lg:mr-32 mt-8">
            Mr. Ravish Kamath, President
          </h2>
        </div>
      </div>
      <div className="-mt-52 lg:-mt-0 ml-auto w-full  lg:w-2/3 flex flex-col lg:mr-8 overflow-">
        <div className=" h-scren item flex flex-col items-start mt-28  font-satoshi text-md">
          <h3 className="item text-md font-satoshi text-start pb-2">
            Dear Industry Colleagues & Friends,
          </h3>
          <h2 className=" text-md pb-2 font-satoshi -mr-0 lg:-mr-0 ">
            It is with immense humility and a profound sense of responsibility
            that I thank the Committee Members of Plastindia  Foundation and my
            colleagues of the industry for electing me as the President of the
            organization and investing their faith in me. I remain committed to
            leading our distinguished organization towards newer heights of
            success while honouring the decades of legacy built by our
            predecessors and founding members. I am filled with pride and
            determination for the journey that lies ahead and look forward to
            your continued support.
          </h2>
          <h2 className=" text-md pb-2 italic font-satoshi -mr-0 lg:-mr-10 ">
            <strong>
              Today I am happy to communicate to you through this updated &
              world class website. This website will serve as a crucial tool for
              connecting stakeholders, providing valuable information,
              showcasing the latest advancements in the industry and news on
              upcoming PLASTINDIA 2026.
            </strong>
          </h2>
          <h2 className=" text-md pb-2  font-satoshi -mr-0 lg:-mr-10 ">
            India, as the 5th largest economy in the world today has been
            experiencing remarkable growth over the years, and the role of the
            plastics industry in this progress cannot be overstated. The plastic
            industry has been a cornerstone of our economic development,
            creating jobs, fostering innovation, and contributing significantly
            to our GDP. The Indian plastics industry&apos;s present estimated worth
            exceeds $40 billion USD and from 2023 to 2029, the industry is
            anticipated to grow at a CAGR of 6.6%. India&apos;s plastic trade
            (imports + exports) has also witnessed a huge growth in the past ten
            years, rising from US$ 19 billion in 2013-14 to US$ 37 billion in FY
            2022-23. A recent report identifies at least 556 products for import
            substitution pegged at Rs. 37,500 crores and the vast emerging
            opportunities only imply immense potential for future growth and
            sustainability.
          </h2>

          <h2 className=" text-md  pb-2 italic font-satoshi -mr-0 lg:-mr-10 ">
            <strong>
              Today, as we celebrate our achievements, it is crucial to
              acknowledge the challenges we face and work collectively towards
              sustainable solutions. Our progress should not come at the cost of
              our environment. Plastic pollution, as highlighted by
              organizations like UNEP, remains a pressing issue and we must
              embrace the principles of sustainability and a circular economy to
              mitigate the environmental impact of plastic products. Compliance
              to the PWM Rules and EPR guidelines are the bedrock of sustainable
              growth while recycling, reducing single-use plastics, and
              promoting eco-friendly alternatives are imperative steps towards a
              greener, more responsible future.
            </strong>
          </h2>
          <h2 className=" text-md pb-2 font-satoshi -mr-0 lg:-mr-10 ">
            Beyond the mere economic statistics, it is very important to
            recognize the transformative impact this sector has on the lives of
            countless young Indians. The diversity of plastics applications
            places our industry at the forefront of industrial progress.
            However, one of the critical challenges we confront is the dearth of
            skilled manpower within our industry. Recognizing this gap,
            establishing PLASTINDIA INTERNATIONAL UNIVERSITY by the organization
            is not just significant, but also most timely. This institution will
            serve as a hub for nurturing talent, providing world-class education
            and training, and bridging the skill gap that is significant to our
            industry&apos;s growth.
          </h2>

          <h2 className=" text-md  pb-2 italic font-satoshi -mr-0 lg:-mr-10 ">
            <strong>
              The synergy between collaboration and innovation is profound.
              Collaborative efforts provide a fertile ground for innovative
              ideas to flourish and in order to ensure responsible growth and
              development of our industry, it is immensely vital to invest in
              research and develop biodegradable materials, explore sustainable
              manufacturing processes, and educate consumers about responsible
              plastic usage. By showcasing our commitment to environmental
              stewardship, we can change the narrative surrounding our industry
              and build a positive perception among the public.
            </strong>
          </h2>

          <h2 className=" text-md  pb-2 italic font-satoshi -mr-0 lg:-mr-10 ">
            By working together, sharing knowledge, and fostering creativity,
            collectively, we can navigate challenges and seize opportunities,
            creating a future where plastics contribute positively to society,
            the economy, and the environment. In this endeavour, I call upon all
            stakeholders to come together on a unified platform and work towards
            the common goal of benefiting the plastic industry, thus paving the
            way for a thriving, sustainable future for the plastic industry in
            India.
          </h2>

          <h2 className=" text-md  pb-2 italic font-satoshi -mr-0 lg:-mr-10 ">
            <strong>
              Once again, I thank you all for entrusting me with the
              all-important responsibility of serving as the President of this
              apex body of Plastic Industry Associations and rest assured, I
              remain committed to our shared goals. Together, let us shape a
              future where the plastics industry in India stands as a beacon of
              innovation, sustainability, and progress.
            </strong>
          </h2>
          
        </div>
        <div>
          <h6 className="item">&nbsp;</h6>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationWithText;