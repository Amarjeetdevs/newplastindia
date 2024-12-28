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
import { Pagination, Navigation ,Autoplay} from "swiper/modules";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";

const swiperContainerStyles = css`
  .swiper {
    // width: 100%;
    height: 75vh;
     width: 100%;

    padding-top:0%;
    padding-bottom: 0%;

    // background-color: red;
  }
    @media (max-width: 767px) { 
    .slider {
     height:100vh;
     width: 75vh;
    }
    }
  .swiper-slide {
    margin-top: 2%;
    margin-bottom: 15%;
    text-align: center;
    font-size: 18px;
    // display: flex;
    justify-content: center;
    align-items: center;
    // background-color:#E5E5E5;
    width: 55%;
    height: 50%;
    border-radius: 10px;
  }
  @media (max-width: 767px) {
    .swiper-slide {
      height: 62vh;
      width: 85%;
    }
  }

  @media (max-width: 767px) {
    .swiper-slide-content {
      height: 70vh;
      width: 80vw;
    }
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
    // color: #019e40;
    position: absolute;
    top: 88%;
    transform: translateY(-50%);
    // background-color: white;
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
  @media (max-width: 767px) {
    .swiper-button-next {
      right: 50px;
    }
    .slider {
      height: 90%;
    }

    .swiper-button-prev {
      left: 50px;
    }
  }

  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      top: 105%;
    }
.slider {
  height:83vh;
}
  }
  .swiper-button-next .MuiIconButton-root,
  .swiper-button-prev .MuiIconButton-root {
    width: 48px;
    height: 48px;
  }
`;

export default function VisitCarausal() {
  return (
    <div css={swiperContainerStyles} className="pb-10 -mb-0 py-14 lg:-mb-32 font-satoshi">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
        }}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper  font-satoshi -mb-8"
      >
        <div className="swiper-button-next  ">
          <IconButton className="w-16 h-16  hidden lg:block ">
            <EastIcon className="text-[#019E40]" />
          </IconButton>
        </div>
        <div className="swiper-button-prev ">
          <IconButton className="w-16 h-16 hidden lg:block  ">
            <WestIcon className="text-[#019E40]" />
          </IconButton>
        </div>

        <SwiperSlide className="mb-2 ">
          <div
            id="swiper-slide-content"
            className="flex p-3 flex-col    lg:flex-row  bg-[#E5E5E5]  text-[#525252] rounded-lg justify-center  items-center py-6 lg:py-[75px]"
          >
            <div className="flex lg:py-0 py-3 mt-2 flex-row">
              <div className="avatar">
                {/* <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full mx-8"> */}
                <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full ml-3 mr-8">
                  
                  <Image alt="Not found" src={img1} />
                </div>
              </div>
              <div className="lg:hidden text-start block ">
                <h5 className="text-xs">8 May, 2026</h5>
                <h2 className="text-xl font-semibold">
                  Expanding Global Horizons
                </h2>
              </div>
            </div>
            <div className="text-start lg:pr-14">
              <div className="lg:block hidden ">
                <h5 className="text-xs">28 Aug 2023</h5>
                <h2 className="text-xl font-semibold">
                  Expanding Global Horizons
                </h2>
              </div>
              <h3
                style={{ fontSize: 14 }}
                className="p-2 lg:text-md text-sm mb-2  "
              >
                &quot;Participating in PLASTINDIA 2023 was a game-changer for
                our business. The event brought together a diverse range of
                stakeholders across the plastics supply chain, from raw material
                suppliers to machinery manufacturers, offering unmatched
                networking opportunities. The exposure significantly boosted our
                brand visibility and opened new market channels. The insights
                gained from global leaders during panel discussions provided
                clear direction for navigating the evolving industry landscape.
                PLASTINDIA remains a crucial event for anyone looking to
                solidify their presence and stay competitive in the
                plastics industry.&quot;
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            id="swiper-slide-content"
            className="flex p-3 flex-col  lg:flex-row bg-[#E5E5E5] text-[#525252] rounded-lg justify-center items-center py-11 lg:py-[85px]"
          >
            <div className="flex items-start  lg:py-0 py-3 mt-2 flex-row">
              <div className="avatar">
                {/* <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full ml-3 mr-8"> */}
                <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full ml-3 mr-8">
              
                  <Image alt="Not found" src={img2} />
                </div>
              </div>
              <div className="lg:hidden text-start block ">
                <h5 className="text-xs">8 May , 2023</h5>
                <h2 className="text-xl font-semibold">
                  Unmatched Industry Impact
                </h2>
              </div>
            </div>
            <div className="text-start lg:pr-14">
              <div className="lg:block hidden ">
                <h5 className="text-xs">May 8, 2023</h5>
                <h2 className="text-xl font-semibold">
                  Unmatched Industry Impact
                </h2>
              </div>
              <h3
                style={{ fontSize: 14 }}
                className="p-2 lg:text-md text-sm mb-2  "
              >
                &quot;Participating in PLASTINDIA 2023 was a game-changer for
                our strategic growth. The event brought together a diverse range
                of stakeholders across the plastics supply chain, from raw
                material suppliers to machinery companies and leading buyers.
                The exposure we gained was phenomenal, enhancing our brand
                visibility and opening up new market channels. Insights from
                global leaders during panel discussions provided clear guidance
                on navigating the evolving industry. This exhibition is
                essential for anyone serious about solidifying their position in
                the plastics sector.&quot;
              </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            id="swiper-slide-content"
            className="flex p-3 flex-col  lg:flex-row  bg-[#E5E5E5] text-[#525252] rounded-lg justify-center  items-center -py-8 lg:py-[70px] "
          >
            <div className="flex lg:py-0 py-0  pt-12 flex-row">
              <div className="avatar">
                {/* <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full mx-8"> */}
                <div className="lg:w-48 lg:h-48 h-20 w-20  rounded-full ml-3 mr-8">
                 
                  <Image alt="Not found" src={img3} />
                </div>
              </div>
              <div className="lg:hidden text-start block ">
                <h5 className="text-xs">Feb 10, 2023</h5>
                <h2 className="text-xl font-semibold">
                  Strategic Business Advantages
                </h2>
              </div>
            </div>
            <div className="text-start lg:pr-14">
              <div className="lg:block hidden ">
                <h5 className="text-xs">Feb 10, 2023</h5>
                <h2 className="text-xl font-semibold">
                  Strategic Business Advantages
                </h2>
              </div>
              <h3
                style={{ fontSize: 14 }}
                className="p-2 lg:text-md text-sm mt-6 my-2  "
              >
                {/* “Attending  PLASTINDIA 2026 was a game-changer for our company. The exhibition not only allowed us to showcase our latest innovations but also to connect with key players from around the globe. The networking opportunities were unparalleled, facilitating discussions that turned into lucrative partnerships. The professional environment and the quality of exhibitors and attendees truly set this event apart as a leading international platform in the plastics industry.” */}
                &quot;Attending PLASTINDIA 2023 was a transformative experience
                for our company. The exhibition provided us with an unparalleled
                platform to showcase our innovations and connect with industry
                leaders from around the globe. The networking opportunities were
                exceptional, leading to discussions that blossomed into
                profitable partnerships. The professional environment, coupled
                with the high caliber of exhibitors and attendees, solidified
                PLASTINDIA&apos;s reputation as a premier international platform
                in the plastics industry. We&apos;re already looking forward to
                PLASTINDIA 2026&quot;
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
