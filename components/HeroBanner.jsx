"use client";
/** @jsxImportSource @emotion/react */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { css } from "@emotion/react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";

import { Pagination, Navigation, Controller, Autoplay } from "swiper/modules";
import "../components/styles.css";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

const swiperFoundContainerStyles = css`
  .swiper {
    width: 100%;
    height: 100%;
    background-color: none;
  }

  .swiper-slide {
    width: 100%;
    height: 80%;
    background-color: none;
  }

  .swiper-pagination {
    margin-top: 12px;
    margin-top: 8px;
    bottom: 100px;

  }
      @media (max-width: 1920px) {
    .swiper-pagination {
    margin-top: 12px;
    margin-top: 8px;
    bottom: 180px;
    
  }
  
   
         @media (max-width: 1440px) {
    .swiper-pagination {
    margin-top: 12px;
    margin-top: 8px;
    bottom: 100px;
    
  }
  }
  @media (max-width: 750px) {
    .swiper-slide {
      height: 80vh;
      width: 100vw;
    bottom: 0px;

    }
       .swiper {
    width: 100%;
    height: 80vh;
    // background-color: red;
  }
  }

  .swiper-pagination-bullet {
    width: 25px;
    height: 6px;
    background: #afafaf;
    border-radius: 3px;
    
  }

  .swiper-pagination-bullet-active {
    background: #032624;
    width: 50px;
    
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next,
  .swiper-button-prev {
    // color: #080808;
    position: absolute;
    bottom: 100%;
    // background-color: #eeeeee;
    border-radius: 100%;
    // background-size: 25px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    width: 32px;
    height: 32px;
    content: "";
    // border: 2px solid #a3a3a3;
  }

  .swiper-button-next {
    cursor: pointer;
    right: 2%;
    top: 40%;
  }

  .swiper-button-prev {
    cursor: pointer;
    left: 2%;
    top: 40%;
  }
`;

export default function HeroBanner() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlebnnr1 = () => {
    router.push("/tradeshow");
  };

  const handlebnnr2 = () => {
    router.push("/exhibit");
  };

  const handlebnnr3 = () => {
    router.push("/foundation");
  };
  const handlebnnr4 = () => {
    router.push("#");
  };

  return (
    <div
      className="-mt-[1.3em] lg:-mb-0 -mb-6"
      // key={key}
    >
      <div css={swiperFoundContainerStyles}>
        <Swiper
          style={{ height: "100%", width: "100%" }}
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          speed={1200}
          loop={true}
          autoplay={{
            delay: 5500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Controller, Autoplay]}
          className="mySwiper  "
        >
          <div className="swiper-button-next bg-[#032624]">
            <IconButton className="w-8 h-8 bg-[#032624]">
              <EastIcon fontSize="large" className="text-[#FFFFFF]" />
            </IconButton>
          </div>
          <div className="swiper-button-prev bg-[#032624]">
            <IconButton className="w-8 h-8 border  bg-[#032624] border-r-4">
              <WestIcon className="text-[#FFFFFF]" />
            </IconButton>
          </div>

          <SwiperSlide id="hero-banner-1" onClick={handlebnnr1}>
            <div
              className="lg:block hidden"
              style={{ width: "100vw", height: "90vh" }}
            ></div>
          </SwiperSlide>

          <SwiperSlide id="hero-banner-2" onClick={handlebnnr2}>
            <div
              className="lg:block hidden"
              style={{ width: "100vw", height: "90vh" }}
              
            >
             
            </div>
          </SwiperSlide>

          <SwiperSlide id="hero-banner-3" onClick={handlebnnr3}>
            <div
              className="lg:block hidden"
              style={{ width: "100vw", height: "90vh" }}
            >
          
            </div>
          </SwiperSlide>
          <SwiperSlide id="hero-banner-4" onClick={handlebnnr4}>
            <div
              className="lg:block hidden"
              style={{ width: "100vw", height: "90vh" }}
            >
          
            </div>
          </SwiperSlide>

          <div></div>
        </Swiper>
      </div>
    </div>
  );
}
