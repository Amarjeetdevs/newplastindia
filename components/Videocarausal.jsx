/** @jsxImportSource @emotion/react */

import { Swiper, SwiperSlide } from "swiper/react";
;

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { css } from "@emotion/react";
import { Pagination, Navigation } from "swiper/modules";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";
import "./styles.css";



const swiperContainerStyles = css`
  .swiper {
     width:  90vw;
    height  100vh ;
    margin-top: 0%;
      @media (max-width: 768px) {
      width: 90vw;
      height: 108vh;
    }
  }
  .swiper-slide { 
    margin-top: 0%;
    margin-bottom: 5vh;
  display: flex;
    justify-content: center;
    align-items: center;
   background-color:#E9EEE1;
  //  background-color:red;

 width:  90vw;
      height: 108vh;
 
   font-family:satoshi;
    height: 100%;
    border-radius:10px;
    // display: flex;


  }



  .swiper-pagination {
    margin-top: 0px;
  }

  .swiper-pagination-bullet {
    width: 25px;
    height: 5px;
    background: #AFAFAF;
    border-radius: 3px;
    
  }

  .swiper-pagination-bullet-active {
    background: #032624;
    width: 25px;
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
    transform: translateY(-50%);
    background-color: white;
    border-radius: 50%;
    background-size: 25px;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 10;
    width: 44px;
    height: 44px;
    cursor: pointer;
      @media (max-width: 768px) {
    width: 32px;
    
    height: 32px;
    }
  }

  .swiper-button-next {
    right: 150px;
        @media (max-width: 768px) {
    right: 50px;
     
    }
  }

  .swiper-button-prev {
    left: 150px;
       @media (max-width: 768px) {
    left: 50px;
     
    }
    
  }

    .swiper-button-next .MuiIconButton-root,
  .swiper-button-prev .MuiIconButton-root {
    width: 48px; 
    height: 48px; 

  }
`;

export default function VideoCarousel() {
  return (
    <div css={swiperContainerStyles} className="bg-[#CEDCB659]   pb-1">
      <div className=" flex items-center justify-center  py-14">
        <div>
          <h4 className= " text-3xl lg:text-[2.65em]   font-satoshi text-center text-[#3C3E3D]">
            Experience it firsthand through the voices <br />
            of our Exhibitors
          </h4>

          <h4 className="text-sm px-6  py-2 lg:text-lg   font-satoshi text-center text-[#3C3E3D]">
            Listen to the success stories from our exhibitors at Plastindia.
            Discover how this premier trade show <br />
            has propelled their innovations and expanded their reach in the
            plastics industry.
          </h4>
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        speed={600}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper   mb-12"
        id="historical-slide"
      >
        <div className="swiper-button-next">
          <IconButton className="w-16 h-16 ">
            <EastIcon className="text-[#032624]" />
          </IconButton>
        </div>
        <div className="swiper-button-prev">
          <IconButton className="w-10 h-10">
            <WestIcon className="text-[#032624]" />
          </IconButton>
        </div>

        <SwiperSlide>
          <div
            className="font-satoshi 
           h-[80vh] w-[100vw] bg-[#E9EEE0]  "
          >
            <video
              className=" h-[75vh] lg:w-[100vw] mb-[10vh] rounded-lg object-cover"
              controls
            >
              <source src="/intro-vedio-hmpg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="font-satoshi 
           h-[80vh] w-[100vw] bg-[#E9EEE0]  "
          >
            <video
              className=" h-[75vh] w-[100vw] mb-[10vh] rounded-lg object-cover"
              controls
            >
              <source src="/intro-vedio-hmpg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="font-satoshi 
           h-[80vh] w-[100vw] bg-[#E9EEE0]  "
          >
            <video
              className=" h-[75vh] w-[100vw] mb-[10vh] rounded-lg object-cover"
              controls
            >
              <source src="/intro-vedio-hmpg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
}
