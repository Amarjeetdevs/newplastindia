"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import icon1 from "../assets/IMPACT/arrow.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const sections = [
  {
    id: 1,
    title: "Employment generator",
    description: `Imagine plastics fueling economic growth and job creation! Known for their <strong>versatility, plastics transform economies and create diverse jobs. </strong> Explore the surprising impact of plastics on the global job market, from innovative manufacturing to green recycling.`,
    img1: require("../assets/IMPACT/EG 2.png"),
    img2: require("../assets/IMPACT/EG 1.png"),
    titleSlug:"/impact-of-plastics/the-plastic-advantage"
  },
  {
    id: 2,
    title: "Critical Healthcare",
    description: `Explore how plastics are revolutionizing critical healthcare, from <strong>life-saving devices to eco-friendly solutions.</strong> Read on to find the surprising impact of these materials on modern medicine and patient care.`,
    img1: require("../assets/IMPACT/HI 2.png"),
    img2: require("../assets/IMPACT/HI 1.png"),
    titleSlug:"/impact-of-plastics/plastics-in-critical-healthcare",
  },
  {
    id: 3,
    title: "Innovation",
    description: `Explore how plastics are pushing the boundaries of innovation, <strong>from ultra-light car parts to groundbreaking medical implants. </strong> Read on to find the latest in sustainable materials and design marvels that are revolutionizing our world.`,
    img1: require("../assets/IMPACT/RC 2.png"),
    img2: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Innovation_d48765ef29.png",
    titleSlug:"/impact-of-plastics/plastics-in-Innovation",
  },
  {
    id: 4,
    title: "Transportation",
    description: `Discover how plastics are revolutionizing transportation, <strong> making vehicles lighter, safer, and more fuel-efficient. </strong> Read on to find the surprising ways plastics are driving innovation and sustainability in the industry.`,
    img1: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/TRANSPORTATION_2_1c472f7fc5.webp",
    img2: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/TRANSPORTATION_1_26c2cabe27.webp",
    titleSlug:"/impact-of-plastics/plastics-in-transportation",
  },
  {
    id: 5,
    title: "Packaging",
    description: `Explore the world of <strong>cutting-edge plastic packaging, where innovation meets sustainability. </strong> Read on to discover the fascinating advancements making packaging smarter, greener, and more interactive than ever before.`,
    img1: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PACKAGING_2_4fa03a1850.webp",
    img2: "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PACKAGING_1_a98ebddf28.webp",
    titleSlug:"/impact-of-plastics/plastics-in-packaging"
  },
];

export default function Impact() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <motion.div
      className=" lg:px-0 lg:pt-1 -mt-14 lg:-mt-0 mb-32 lg:mb-16 flex flex-col justify-center items-center"
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      ref={ref}
    >
      <div className="px-6 lg:px-10">
  <div className='flex flex-col lg:flex-row justify-between items-center'>
  <div className="mb-6 lg:w-3/5 ">
          <h2
          //  id="title-height"
           className="py-4   text-4xl lg:text-[2.65em] lg:mt-5 font-satoshi font-semibold">
            Impact of Plastics and Industries
          </h2>
          <h3
            
            className="font-satoshi text-[1.03em] text-[#032624] lg:pb-10 "
          >
            Plastics do more than make life easier-they&apos;re the{" "}
            <strong>backbone of essential industries</strong>, from healthcare
            to packaging. By protecting what matters and{" "}
            <strong>fueling job creation</strong>, they&apos;re crucial for the{" "}
            <strong>global economy.</strong>
          </h3>
        </div>

        <div className=" mb-7 lg:mb-2 text-right">
        <Link href={"/impact-of-plastics"}>
        <button className="bg-[#042523]  text-md font-semibold text-[#FFFFFF] px-16 lg:px-16 py-4  rounded-full ">
            View all
            <span>
              <ArrowOutwardIcon className="ml-4 text-white  w-5 h-5" />
            </span>
          </button>
          </Link>
        </div>

  </div>
        <div className="lg:hidden ">
          {sections.map((section) => (
            <React.Fragment key={section.id}>
              <div className="flex items-center justify-between w-full my-4">
                <div>
                  <h2 className="text-3xl leading-10 w-1/2 text-gray-600 ">
                    {section.title}
                  </h2>
                </div>
                <Link href={"/impact-of-plastics"}>
                <div className="p-5 rounded-full ml-auto bg-[#8F8F8F] h-16 w-16 hover:bg-[#032624] bg-blck">
                  <Image src={icon1} alt="Not found" />
                </div>
                </Link>
              </div>
              <hr className="border-t-1 rounded-lg font-satoshi border-gray-400" />
            </React.Fragment>
          ))}
        </div>

        {sections.map((section, index) => (
          <div key={section.id}>
            <div className="lg:flex hidden  ">
              <div className="w-2/5">
                <div className="flex items-center ml-8 mr-28 justfy-between">
                  <h2 className="text-xl text-[#3C3C3C99]">({`0${index + 1}`})</h2>
                  <h2 className="text-3xl text-start  ml-16 flex  leading-10 text-[#3C3E3D]">
                    {section.title.split(" ")[0]} <br /> {section.title.split(" ").slice(1).join(" ")}
                  </h2>
                  <div className="relative ml-auto -right-10">
                    <Image
                      src={section.img1}
                      alt="not found"
                      width={50}
                      height={50}
                      className="rounded-full w-16 h-16 absolute left-12 ring-2 ring-gray-100 top-0 z-10"
                    />
                    <Image
                      src={section.img2}
                      alt="not found"
                      width={50}
                      height={50}
                      className="rounded-full w-16 h-16 relative"
                    />
                  </div>
                </div>
              </div>

              <div className="w-2/3 flex ml-auto">
                <h3
                  className="text-md  px-14 text-[#3C3E3D]"
                  dangerouslySetInnerHTML={{ __html: section.description }}
                />
                <div> 
                <Link href={section?.titleSlug}>
                <div className="p-5 rounded-full ml-auto bg-[#8F8F8F] h-16 w-16 hover:bg-[#032624] bg-blck">
                  <Image src={icon1} alt="Not found" />
                </div>
                </Link>
                </div>
                
              </div>
            </div>
            {index < sections.length - 1 && (
              <hr className="hidden lg:flex lg:flex-1 border-t-1 my-4 rounded-lg font-satoshi border-gray-400" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
