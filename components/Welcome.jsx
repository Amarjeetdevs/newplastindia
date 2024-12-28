"use client";
import React, { useEffect,useState ,useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import png1 from "../assets/WELCOME/1.png";
import png2 from "../assets/WELCOME/2.png";
import png3 from "../assets/WELCOME/3.png";
import png4 from "../assets/WELCOME/4.png";
import png5 from "../assets/WELCOME/5.png";
import png6 from "../assets/WELCOME/6.png";
import png7 from "../assets/WELCOME/7.png";
import png8 from "../assets/WELCOME/8.png";
import png9 from "../assets/WELCOME/9.png";
import png10 from "../assets/WELCOME/10.png";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "../Fonts/WEB/css/satoshi.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
const Welcome = () => {
  const [imageUrl, setImageUrl] = useState('');
  const containerRef = useRef(null);
  const controls = useAnimation();
  const cardRef = useRef(null);
  const textBgRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const fadeInUp = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
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
      offset: 100,
      duration: 100,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);


  const updateImageUrl = () => {
    const isMobile = window.innerWidth <= 768; 
    const url = isMobile 
      ? 'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/welcome_to_bharat_mobile_6e5b81e2e3.png'
      : 'https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/1_358c08c40a.png';
    setImageUrl(url);
  };

  useEffect(() => {
    updateImageUrl();

    window.addEventListener('resize', updateImageUrl);
    
    return () => {
      window.removeEventListener('resize', updateImageUrl);
    };
  }, []);



  useEffect(() => {
    const applyGsapAnimation = () => {
      if (window.innerWidth > 768) {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top+=0%",
            scrub: 2,
            snap: 1,
            end: `+=${containerRef.current.offsetHeight * 1.5}`,
          },
        });

        tl.fromTo(
          cardRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: -60, duration: 2, ease: "none" }
        ).fromTo(
          textBgRef.current,
          { opacity: 1, x: 0, backgroundColor: "#CFDDB7", width: "0%" },
          {
            opacity: 1,
            x: 0,
            backgroundColor: "#CFDDB7",
            width: "100%",
            duration: 2,
            ease: "none",
          },
          "-=2"
        );
      }
    };

    applyGsapAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className="lg:h-screen   " ref={containerRef}>
        <div className="z-10 flex  flex-col justify-center items-center">
          <div className=" lg:px-10 ">
            <h2 className="text-3xl  px-4 lg:px-0 mt-5 lg:mt-0  lg:text-6xl  text-[#3C3E3D] font-satoshi">
              Trailblazing Technologies in Plastics:
            </h2>

            <div className="flex items-center">
              <h2 className="text-3xl px-4 lg:px-4  lg:text-6xl text-[#3C3E3D] font-satoshi relative lg:left-0 left-0">
                <div
                  ref={textBgRef}
                  className="absolute inset-0  rounded-full -z-10 "
                />
                Welcome to Bharat
              </h2>
              <div className="hidden sm:block  ml-auto   bg-[#CFDDB7] py-1 pt-2 px-4 rounded-full">
                <div className="relative -space-x-3 rtl:space-x-reverse">
                  {[
                    png1,
                    png2,
                    png3,
                    png4,
                    png5,
                    png6,
                    png7,
                    png8,
                    png9,
                    png10,
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="avatar ring-1 rounded-full ring-[#CFDDB7]"
                    >
                      <div className="w-9 h-9">
                        <Image src={image} alt={`image-${index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10 mt-0 px-5 lg:px-0 lg:mt-0   ">
            <Image
      src={imageUrl}
      alt="FLAG"
      width={2000}
      height={2000}
      className="object-center object-cover bg-black -z-50 rounded-xl w-full h-56 mb-5 lg:w-screen lg:h-[380px]"
    />

              <div className=" lg:hidden sm:block mx-5 ">
                <div className="card lg:bg-white w-full pt-2 pb-3 lg:-pt-5 shadow-xs">
                  <p className="text-sm  font-medium lg:text-lg w-full  leading-6 text-[#3C3E3D]">
                    India is set to host the PLASTINDIA 2026 , a premier event
                    that highlights the nation&apos;s leadership in trailblazing
                    technology and solutions within the plastics industry. Be
                    amazed by the future of plastics at PLASTINDIA 2026.
                  </p>
                </div>
              </div>

              <div
                ref={cardRef}
                className="ml-24 hidden
           lg:block absolute  -z-0  -bottom-10  "
              >
                <div className="card bg-white w-96 shadow-xs rounded-t-3xl">
                  <div className="card-body">
                    <p className="text-lg font-medium leading-6 text-[#3C3E3D]">
                      India is set to host the PLASTINDIA 2026 , a premier event
                      that highlights the nation&apos;s leadership in
                      trailblazing technology and solutions within the plastics
                      industry. Be amazed by the future of plastics at
                      PLASTINDIA 2026 .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  relative justify-center  lg:justify-end">
              <div className="text-center px-5 ">
                <div className="  rounded-full text-center py-3 pr-4 lg:pr-0 px-5 mb-4 mr-1 mt-3 bg-[#E8E6DD]">
                  <h3 className="text-md lg:text-lg font-satoshi font-semibold text-gray-800">
                    Join us: 5th-10th February, 2026
                  </h3>
                  <h3 className="text-xs lg:text-sm font-satoshi text-gray-800">
                    Bharat Mandapam, New Delhi, India
                  </h3>
                </div>
                <div className="text-right gap-4 flex pb-12 mt-3">
                  <Link href={"/visit"}>
                    <button className="mr-0 text-sm text-nowrap lg:text-md lg:text-lg  border-2 border-blue-950 text-[#042523] px-6 py-3 rounded-full font-semibold">
                      Register as Visitor
                      <div className="hidden lg:inline">
                        <ArrowOutwardIcon className=" hidden lg:inline lg:ml-2 text-[#042523] w-5 h-5" />
                      </div>
                    </button>
                  </Link>
                  <Link
                    href={"http://exhibitors.plastindia.org/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-[#042523] text-nowrap text-sm lg:text-lg text-white px-5 py-3 rounded-full border-2 border-[#042523]">
                      Register as Exhibitor
                      <div className="hidden lg:inline">
                        <ArrowOutwardIcon className=" hidden ml-2 text-white w-5 h-5" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
