/** @jsxImportSource @emotion/react */

import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/PLASTINDIA_NewContent/PLASTINDIA/EXHIBITOR/TESTIMONIALS/1.png";
import img2 from "../assets/PLASTINDIA_NewContent/PLASTINDIA/EXHIBITOR/TESTIMONIALS/2.png";
import img3 from "../assets/PLASTINDIA_NewContent/PLASTINDIA/EXHIBITOR/TESTIMONIALS/3.png";

// import img2 from "../assets/EXHIBITOR/Rectangle 1 (1).png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { css } from "@emotion/react";
import { Pagination, Navigation } from "swiper/modules";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { IconButton } from "@mui/material";

const swiperContainerStyles = css`
  .swiper {
    width: 100%;
    height:100%;
    margin-top: 1%;
  background-color:none;
  }
  .swiper-slide {
    margin-top: 5%;
    margin-bottom: 5%;
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  // background-color:#E5E5E5;
 width: 55%;
    height: 50%;
    border-radius:10px
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    margin-top: 12px;
  }

  .swiper-pagination-bullet {
    width: 25px;
    height: 5px;
    background: #afafaf;
    border-radius: 3px;
  }

  .swiper-pagination-bullet-active {
    background: #019e40;
    width: 50px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #019e40;
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
  }
  .swiper-button-next {
    right: 270px;
  }

  .swiper-button-prev {
    left: 270px;
  }

    .swiper-button-next .MuiIconButton-root,
  .swiper-button-prev .MuiIconButton-root {
    width: 48px; 
    height: 48px; 
  }
`;

export default function VisitCarausal() {
  return (
    <div 
    css={swiperContainerStyles}
    className="pb-10 font-satoshi"
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={25}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper  font-satoshi -mb-8"
      >
        <div className="swiper-button-next">
        <IconButton 
        className="w-16 h-16 "
        >
            <EastIcon className="text-[#019E40]" />
          </IconButton>
        </div>
        <div className="swiper-button-prev">
          <IconButton className="w-16 h-16">
            <WestIcon className="text-[#019E40]" />
          </IconButton>
        </div>
       
        <SwiperSlide>
          <div className="flex bg-[#E8E6DD78] text-[#525252] rounded-lg justify-center h-96 items-center py-20">
            <div>
              <div className="avatar">
                <div className="w-48 h-48 rounded-full mx-8">
                  <Image alt="Not found" src={img1} />
                </div>
              </div>
            </div>
            <div className="text-start pr-14">
              <h5 className="text-xs">May 8, 2026</h5>
              <h2 className="text-xl font-semibold">
                Expanding Global Horizons
              </h2>
              <h3 style={{ fontSize: 14 }}>
              “Participating in PLASTINDIA 2026  proved to be an invaluable investment for our strategic growth. The event excelled in bringing together diverse stakeholders from across the plastics supply chain, from raw material suppliers to machinery companies, and leading buyers. The exposure we received was phenomenal, enhancing our brand visibility and opening up new market channels. Additionally, the insights shared by global leaders during panel discussions provided us with a clear direction on how to navigate the evolving industry landscape. This exhibition is crucial for anyone looking to cement their position in the plastics sector.”
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex bg-[#E8E6DD78] text-[#525252] rounded-lg justify-center h-96 items-center py-20">
            <div>
              <div className="avatar">
                <div className="w-48 h-48 rounded-full mx-8">
                  <Image alt="Not found" src={img2} />
                </div>
              </div>
            </div>
            <div className="text-start pr-14">
              <h5 style={{ fontSize: 10 }}>May 8, 2026</h5>
              <h2 className="text-xl font-semibold">
              Expanding Global Horizons
              </h2>
              <h3 style={{ fontSize: 15 }}>
              Attending PLASTINDIA 2026  was a game-changer for our company. The exhibition not only allowed us to showcase our latest innovations but also to connect with key players from around the globe. The networking opportunities were unparalleled, facilitating discussions that turned into lucrative partnerships. The professional environment and the quality of exhibitors and attendees truly set this event apart as a leading international platform in the plastics industry.
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex bg-[#E8E6DD78] text-[#525252] rounded-lg justify-center items-center h-96 py-20">
            <div>
              <div className="avatar">
                <div className="w-48 h-48 rounded-full mx-10">
                  <Image alt="Not found" src={img3} />
                </div>
              </div>
            </div>
            <div className="text-start pr-14">
              <h5 className="text-xs">May 8, 2026</h5>
              <h2 className="text-xl font-semibold">
              Strategic Business Advantages
              </h2>
              <h3 style={{ fontSize: 15 }}>
              “Attending PLASTINDIA 2026  was a game-changer for our company. The exhibition not only allowed us to showcase our latest innovations but also to connect with key players from around the globe. The networking opportunities were unparalleled, facilitating discussions that turned into lucrative partnerships. The professional environment and the quality of exhibitors and attendees truly set this event apart as a leading international platform in the plastics industry.”
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
