/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import Image from "next/image";

import { css } from "@emotion/react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/United success.png";
import img2 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/Sustainable.png";
import img3 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/Positive.png";
import img4 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/Novelty.png";
import img5 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/Global Vision.png";
import img6 from "../assets/ABOUT-PLASTINDIA/VALUES-PLASTINDIA/Dynamically proactive.png";

const swiperContainerStyles = css`
  .swiper {
    width: 65vw;
    height: 115vh;
    @media (max-width: 768px) {
      width: 90vw;
      height: 108vh;
    }
  }

  .swiper-slide {
    margin-top: 5%;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65vw;
    @media (max-width: 768px) {
      width: 90vw;
    }
  }

  .swiper-pagination-bullet {
    width: 24px;
    height: 6px;
    background: #032624;
    border-radius: 5px;
  }

  .swiper-pagination-bullet-active {
    background: #032624;
    width: 30px;
    margin-top: 12px;
    height: 6px;
    border-radius: 5px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #032624;
    position: absolute;
    top: 100%;
    background-color: #ffffff;
    border-radius: 50%;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    width: 44px;
    height: 44px;
    content: "";
    transform: translateY(-50%);
    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
      
    }
  }

  .swiper-button-next {
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }
`;

export default function SmallCarausalComp() {
  
  return (
    <>
      <div css={swiperContainerStyles}>
        <Swiper
          slidesPerView={2}
          slidesPerGroup={2}
          spaceBetween={30}
          speed={1000}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            318: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            425: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            770: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          
          modules={[Pagination, Navigation]}
          className="mySwipe "
        >
          <div className="swiper-button-next">
            <IconButton className="w-12 h-12">
              <EastIcon className="text-[#032624]" />
            </IconButton>
          </div>
          <div className="swiper-button-prev">
            <IconButton className="w-12 h-12">
              <WestIcon className="text-[#032624]" />
            </IconButton>
          </div>
          <SwiperSlide>
            <div
              className="card bg-[#E8E6DD] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 700 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350, transformOrigin: "top" }}
                  className="  scale-125 group-hover:scale-100  duration-1000"
                >
                  <Image
                    src={img1}
                    alt="Not found"
                    className="object-cntain"
                  />
                </figure>
                <motion.div
                  className="text-start relative text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 1} },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">United Success</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
                  
                  variants={{
                    rest: { y: 100 },
                    hover: { y: -80, transition: { duration: 1 } },
                  }}
                >
                  By forging strong partnerships with industries, we aim to
                  cultivate exponential growth in plastics processing and
                  consumption. Together, we are building a dynamic and
                  prosperous future for the plastics industry.
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card bg-[#E8EEE3] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 500 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350 }}
                  className="  scale-150 group-hover:scale-100  duration-1000 "
                >
                  <Image
                    src={img2}
                    alt="Not found"
                    className="object-contain"
                  />
                </figure>
                <motion.div
                  className="text-start text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 1} },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">Sustainable Solutions</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
              
                  variants={{
                    rest: { y: 100 },
                    hover: { y: -80, transition: { duration: 1 } },
                  }}
                >
                  We are committed to developing effective recycling techniques
                  and promoting eco-friendly practices, contributing positively
                  to society and the environment, and resolving the challenge to
                  make plastic and sustainability harmoniously coexist. 
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card bg-[#E8E6DD] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 700 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350, transformOrigin: "top" }}
                  className="  scale-125 group-hover:scale-100  duration-500 "
                >
                  <Image
                    src={img3}
                    alt="Not found"
                    className="object-contain"
                  />
                </figure>
                <motion.div
                  className="text-start relative text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 0.5 } },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">Global Vision</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
                 
                  variants={{
                    rest: { y: 100 },
                    hover: {
                      y: -80,
                      transition: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                >
                  Our vision is to position India as a premier hub for sourcing
                  top-tier plastics, showcasing our industry&apos;s capabilities on
                  the world stage.
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card bg-[#E8EEE3] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 500 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350 }}
                  className="  scale-150 group-hover:scale-100  duration-500 "
                >
                  <Image
                    src={img4}
                    alt="Not found"
                    className="object-contain"
                  />
                </figure>
                <motion.div
                  className="text-start text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 0.5 } },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">Novelty</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
                  variants={{
                    rest: { y: 100 },
                    hover: {
                      y: -80,
                      transition: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                >
                  We champion futuristic research and education to elevate the
                  standards of plastic products, ensuring they meet the highest
                  quality and environmental benchmarks.
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card bg-[#E8E6DD] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 700 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350, transformOrigin: "top" }}
                  className="  scale-125 group-hover:scale-100  duration-500 "
                >
                  <Image
                    src={img5}
                    alt="Not found"
                    className="object-contain"
                  />
                </figure>
                <motion.div
                  className="text-start relative text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 0.5 } },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">Positive Advocacy</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
          
                  variants={{
                    rest: { y: 100 },
                    hover: {
                      y: -80,
                      transition: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                >
                  We strive to build awareness of the vital role plastics play
                  in modern life, advocating for their benefits and encouraging
                  scientific advancements in plasticulture to conserve resources
                  and boost agricultural productivity.
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card bg-[#E8EEE3] overflow-hidden shadow-sm group"
              style={{ height: 550, width: 500 }}
            >
              <motion.div
                className="  transition-transform duration-300"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <figure
                  style={{ height: 350 }}
                  className="  scale-150 group-hover:scale-100  duration-500 "
                >
                  <Image
                    src={img6}
                    alt="Not found"
                    className="object-contain"
                  />
                </figure>
                <motion.div
                  className="text-start text-[#3C3E3D] ml-5 pt-16"
                  variants={{
                    rest: { y: 10 },
                    hover: { y: -90, transition: { duration: 0.5 } },
                  }}
                >
                  <h5 className="text-xs pt-4 relative -bottom-6 ">VALUES</h5>
                  <br />
                  <h2 className="text-3xl font-bold ">Dynamically Proactive</h2>
                </motion.div>
                <motion.p
                  className="text-sm text-start px-5 text-[#3C3E3D]"
                
                  variants={{
                    rest: { y: 100 },
                    hover: {
                      y: -80,
                      transition: { duration: 0.3, delay: 0.1 },
                    },
                  }}
                >
                  As a flexible and vibrant foundation, we adapt to the evolving
                  needs of the industry, creating a conducive policy framework
                  that promotes growth, innovation, and sustainability.
                </motion.p>
                <div className="card-actions justify-end"></div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
