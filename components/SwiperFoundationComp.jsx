/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Controller } from "swiper/modules";

import { css } from "@emotion/react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";

import { Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/IMPACT/HISTORY-PLASTINDIA/1987.png";
import img2 from "../assets/IMPACT/HISTORY-PLASTINDIA/1990.png";
import img3 from "../assets/IMPACT/HISTORY-PLASTINDIA/2000.png";
import img4 from "../assets/IMPACT/HISTORY-PLASTINDIA/2012.png";
import img5 from "../assets/IMPACT/HISTORY-PLASTINDIA/2015.png";
import img6 from "../assets/IMPACT/HISTORY-PLASTINDIA/2018.png";
import img7 from "../assets/IMPACT/HISTORY-PLASTINDIA/2023.png";
import img8 from "../assets/IMPACT/HISTORY-PLASTINDIA/2026.png";

const swiperFoundContainerStyles = css`
  .swiper {
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
 
  }

  .swiper-slide {
    margin-top: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73%;
    height: 68%;
    margin-bottom: 2%;
    background-color: #F7F7F7;

  }

  @media screen and (max-width: 725px) {
    .swiper-slide {
      margin-top: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    background-color: #F7F7F7;

      margin-bottom: 2%;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    margin-top: 200px;
    width: 172px;
    height: 5px;
    background: none;
    color: #231a02;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    margin-left: 20px;
    margin-right: 20;
    bottom: -20px;
    border-radius: 3px;
    cursor: default;
  }
  .bullet-line {
    width: 100px;
    height: 5px;
    background-color: #bbbbbb8a;
    border: navy;
    margin: 0;
    position: relative;
    bottom: 25px;
    left: 80px;
    cursor: default;
    pointer-events: none;
  }

  @media screen and (max-width: 1530px) {
    .swiper-pagination-bullet {
      width: 130px;
      font-size: 28px;
      padding: 15px;
    }

    .bullet-line {
      width: 40px;
    }
  }

  @media screen and (max-width: 725px) {
    .swiper-pagination-bullet {
      width: 30px;
      font-size: 15px;
      padding: 0px;
    }

    .bullet-line {
      width: 5px;
    }
  }

  .number {
    margin-bottom: 0;
    margin-right: 50%;
    margin-top: 50px;
    font-size: 40px;
  }

  @media (max-width: 750px) {
    .number {
      font-size: 15px;
      margin-right: 0;
      margin-top: 0px;
    }
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #080808;
    position: absolute;
    bottom: 100%;
    background-color: none;
    border-radius: 50%;
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    width: 44px;
    height: 44px;
    content: "";
    border: 2px solid #a3a3a3;
    @media screen and (max-width: 1530px) {
      width: 36px;
      height: 36px;
    }
  }

  // .swiper-button-next {
  //   cursor: pointer;
  //   right: 5%;
  //   top: 70px;
  // }

  // .swiper-button-prev {
  //   cursor: pointer;
  //   left: 88%;
  //   top: 70px;
  // }

  @media screen and (max-width: 2000px) {
    .swiper-button-prev {
      cursor: pointer;
      left: 90%;
      top: 12%;
    }
    .swiper-button-next {
      cursor: pointer;
      right: 40px;
      top: 12%;
    }
  }
    
  @media screen and (max-width: 725px) {
    .swiper-button-prev {
      cursor: pointer;
      left: 70%;
      top: 12%;
    }
    .swiper-button-next {
      cursor: pointer;
      right: 20px;
      top: 12%;
    }
  }

`;

export default function SwiperFoundationComp() {
  
  const numbers = [1987, 1990, 2000, 2012, 2015, 2018, 2023, 2026];
  return (
    <div
    id="history"
    className=" lg:h-[740px]">
      <h2 className="text-[#3C3E3D] text-4xl lg:text-[2.65em] -mb-28 mt-14 ">
        Our History
      </h2>
     
      <div css={swiperFoundContainerStyles}>
        <Swiper
          id="ss"
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1200}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                <span class="${className}">
                    <span class="number">${numbers[index]}</span>
                </span>
            `;
            },
          }}
          modules={[Pagination, Navigation, Controller]}
          className="mySwiper  mb-20 "
        >
          <div className="swiper-button-next">
            <IconButton className="w-12 h-12">
              <EastIcon fontSize="large" className="text-[#032624]" />
            </IconButton>
          </div>
          <div className="swiper-button-prev">
            <IconButton className="w-12 h-12 border border-r-4">
              <WestIcon className="text-[#032624]" />
            </IconButton>
          </div>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card flex flex-col lg:flex-row  card-side mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img1}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>

              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>1987 </strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>Origins and Inception</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                    PLASTINDIA, a vision brought to life in 1987, was
                      conceived as a premier platform to{" "}
                      <strong>
                        showcase advancements and innovations in the plastics
                        industry
                      </strong>{" "}
                      in India.
                      The Plastindia Foundation aims to promote the development and growth
                      of the plastics sector.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img2}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
              
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>1990</strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>Start of a Phenomenon</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      The inaugural PLASTINDIA exhibition, with 486 exhibitors,
                      is held, marking the beginning of a landmark event in the
                      plastics industry. The events provided a platform for
                      showcasing innovations, fostering international
                      collaborations, and driving industry growth, PLASTINDIA
                      has significantly boosted export business volumes and
                      revenues.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img3}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
              
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2000</strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>Establishing Global Prominence</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      By the new millennium, PLASTINDIA has established itself
                      as a major international exhibition, attracting over 1055
                      exhibitors from 225 countries.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img4}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
             
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2012 </strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>Expanding Global Reach</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      Held every three years, The PLASTINDIA Exhibition of 2012
                      witnessed a significant increase in international
                      exhibitors, underscoring the event&apos;s growing global
                      influence.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img5}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
           
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2015 </strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>A New Era in Gandhinagar</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      The event moves to a new venue at Gandhinagar, Gujarat,
                      offering larger exhibition space to accommodate the
                      increasing number of exhibitors and visitors.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img6}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
              
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2018 </strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>A Global Confluence</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                    PLASTINDIA 2018 sees participation from over 40 countries,
                      reaffirming its status as a leading global event in the
                      plastics industry. PLASTINDIA continued boosting export
                      business volumes and revenues.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img7}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
             
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2023</strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>PLASTINDIA 2023: Monumental Success</strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      The most recent edition featured record-breaking
                      participation from exhibitors and visitors. It showcased
                      cutting-edge innovations in machinery, raw materials, and
                      technology. The event emphasized sustainability and
                      growth, moving towards a greener future.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide id="ss">
            <div
              // style={{ height: 558, width: 1200 }}
              className="card card-side flex lg:flex-row flex-col mb-12 bg-[#E8E6DD] shadow-sm"
            >
              <figure className="w-full lg:w-1/2  h-64 md:h-[400px] lg:h-[558px]">
                <Image
                  src={img8}
                  alt="Movie"
                  className="object-cover lg:rounded-none rounded-t-2xl w-full h-full"
                />
              </figure>
              <div className="lg:lg:w-1/2 card-body h-96 md:h-[400px] lg:h-[558px]">
         
                <div className="text-start flex justify-center items-center text-[#3C3E3D]  h-96 px-2">
                  <div>
                    <h5 className="text-xl font-satoshi lg:mt-16">
                      <strong>2026 </strong>
                    </h5>
                    <h2 className="text-xl lg:text-3xl  mb-4 ">
                      <strong>An Awaited Global Triumph </strong>
                    </h2>
                    <h3 style={{ fontSize: 15 }}>
                      As PLASTINDIA continues to evolve, it remains committed to
                      promoting sustainable practices, encouraging technological
                      advancements, and facilitating global trade. Join us at PLASTINDIA
                       2026 as we look forward to shaping the next chapter in the future of plastics.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div></div>
        </Swiper>
      </div>
    </div>
  );
}
