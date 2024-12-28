"use client"
/** @jsxImportSource @emotion/react */
import  {useState ,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imga from "../assets/VISITOR PLACES/places 2/Akshardham Temple.png";
import imgb from "../assets/VISITOR PLACES/places 2/Chandni Chowk.png";
import imgc from "../assets/VISITOR PLACES/places 2/Connaught Palace.png";
import imgd from "../assets/VISITOR PLACES/places 2/Dilli Haat.png";
import imge from "../assets/VISITOR PLACES/places 2/Humayun╬ôC╠ºO╠ês Tomb.png";
import imgf from "../assets/VISITOR PLACES/places 2/India Gate.png";
import imgg from "../assets/VISITOR PLACES/places 2/Lotus Temple.png";
import imgh from "../assets/VISITOR PLACES/places 2/National Museum .png";
import imgi from "../assets/VISITOR PLACES/places 2/Red Fort.png";
import imgj from "../assets/VISITOR PLACES/places 2/qutub minar.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { css } from "@emotion/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";
import "./styles.css";

const slideData = [
  {
    image: imgf,
    title: "India Gate",
    description:
      "A war memorial dedicated to the soldiers who died in World War I, India Gate is a prominent landmark in Delhi. The surrounding lawns are a popular spot for picnics and evening strolls.",
    tip: "<strong> Distance from Bharat Mandapam: </strong> 4 km Travel",
    distance: "<strong>Travel Time: </strong> 10 minutes by car",
    travel:
      "<strong >  Tip: </strong> Visit in the evening to see the illuminated monument and enjoy a leisurely walk.",
  },
  {
    image: imge,
    title: "Humayun’s Tomb",
    description:
      "This splendid garden-tomb, built in 1570, is the first example of Mughal architecture in India. It is the precursor to the Taj Mahal and is surrounded by beautiful gardens perfect for a leisurely stroll.",
    tip: "<strong> Distance from Bharat Mandapam: </strong> 4 km ",
    distance: "<strong>Travel Time: </strong> 10 minutes by car",
    travel:
      "<strong >  Tip: </strong> Visit in the evening to see the illuminated monument and enjoy a leisurely walk.",
  },

  {
    image: imgh,
    title: "National Museum",
    description:
      "One of India's largest museums, the National Museum houses an extensive collection of artifacts from India’s rich cultural history, including ancient sculptures, textiles, and paintings.",
    tip: "<strong> Distance from Bharat Mandapam: </strong> 4 km ",
    distance: "<strong>Travel Time: </strong> 5 minutes by car",
    travel:
      "<strong >  Tip: </strong>  Allocate a few hours to explore the various exhibits and enjoy a deep dive into India’s past",
  },
  {
    image: imgc,
    title: "Connaught Place",
    description:
      " Known as CP, this commercial and business hub is filled with restaurants, shops, and cafes. It’s the perfect place to relax and unwind after a day at the exhibition.",
    tip: "<strong> Distance from Bharat Mandapam: </strong> 4 km ",
    distance: "<strong>Travel Time: </strong> 15 minutes by car",
    travel:
      "<strong >  Tip: </strong> Visit Janpath Market for budget shopping.",
  },
  {
    image: imgi,
    title: "Red Fort (Lal Qila)",
    description:
      "A UNESCO World Heritage Site, the Red Fort is a majestic red sandstone fortification that served as the main residence of the Mughal emperors for nearly 200 years. Located in the heart of Old Delhi, it offers a glimpse into India’s rich history and architectural grandeur. Don’t miss the evening sound and light show that narrates the fort's history.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 6 km",
    travel: "<strong>Travel Time:</strong> 20 minutes by car",
    tip: " <strong >  Tip: </strong>  Visit early in the morning to avoid crowds.",
  },

  {
    image: imgb,
    title: "Chandni Chowk",
    description:
      "One of the oldest and busiest markets in Delhi, Chandni Chowk offers a variety of goods ranging from textiles and jewelry to spices and electronics. The narrow lanes are filled with the aroma of street food, offering a true taste of Delhi.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 6 km",
    tip: "Visit Paranthe Wali Gali for some delicious stuffed parathas.",
    travel:
      "<strong >  Tip: </strong>  <strong>Travel Time:</strong> 20 minutes by car",
  },
  {
    image: imga,
    title: "Akshardham Temple",
    description:
      "A modern architectural marvel, Akshardham Temple showcases the essence of India’s ancient art, culture, and spirituality. The complex includes an IMAX theatre, musical fountain, and beautiful gardens.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 8 km",
    travel: "<strong>Travel Time:</strong> 20 minutes by car",
    tip: "<strong >  Tip: </strong>  Allocate at least half a day to explore the entire complex.",
  },
  {
    image: imgd,
    title: "Dilli Haat",
    description:
      "An open-air market that showcases crafts and cuisines from different states of India, Dilli Haat is a great place to shop for souvenirs and enjoy traditional Indian food.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 10 km",
    travel: "<strong>Travel Time:</strong> 25 minutes by car",
    tip: "Bargaining is expected, so don’t hesitate to negotiate prices.",
  },
  {
    image: imgg,
    title: "Lotus Temple",
    description:
      "Known for its unique flower-like shape, the Lotus Temple is a Bahá'í House of Worship and is open to people of all religions. Its tranquil environment makes it an ideal place for meditation and reflection.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 12 km",
    travel: "<strong>Travel Time:</strong> 25 minutes by car",
    tip: "<strong >  Tip: </strong>  Wear comfortable shoes as you might need to walk a bit to get to the temple.",
  },
  {
    image: imgj,
    title: "Qutub Minar",
    description:
      "Another UNESCO World Heritage Site, Qutub Minar is a towering minaret standing at 73 meters tall. This iconic structure, surrounded by lush gardens, dates back to the 12th century and is a fine example of Indo-Islamic architecture.",
    distance: "<strong>Distance from Bharat Mandapam:</strong> 15 km",
    travel: "<strong>Travel Time:</strong> 30 minutes by car",
    tip: "<strong >  Tip: </strong>  Combine your visit with a trip to the nearby Mehrauli Archaeological Park.",
  },
];

const swiperContainerStyles = css`
  .swiper {
    width: 100%;
    height 100%;
   padding-top: 1%;


    padding-bottom:8%;
  // background-color:red;
  }

  @media (max-width: 750px) {
  .swiper {
  background-color:none;
  }
}
  .swiper-slide {
    margin-top: 0%;
    margin-bottom: 0%;
  display: flex;
    justify-content: center;
    align-items: center;
   background-color:#E9EEE1;

    width: 68%;
 
   font-family:satoshi;

     @media screen and (max-width: 725px) {
    // border-radius:20px
    height 85vh;
    width: 90%;
  
    
  }

  }


  .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 750px) {
  .swiper-slide img {
    width: 100vw;
    height: 100vh;
    border-radius: 20px 20px 20px 20px; 
  object-fit: cover;
   
  }
}



  .swiper-pagination {
    margin-top: 12px;
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
    // color: #032624;
    position: absolute;
    top: 50%;
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
    right: 20px;
  }

  .swiper-button-prev {
    left: 20px;
  }

  @media (max-width: 750px) {
  .swiper-button-next {
    right: 5px;
  }

  .swiper-button-prev {
    left: 5px;
  }

    .swiper-button-next,
  .swiper-button-prev {
 
    width: 32px;
    height: 32px;
  
  }
}
    .swiper-button-next .MuiIconButton-root,
  .swiper-button-prev .MuiIconButton-root {
    width: 48px; 
    height: 48px; 
  }
`;

export default function HistoricalMonumentsCarausal() {
  const [carouselStyle, setCarouselStyle] = useState({});
  useEffect(() => {
    const updateStyles = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 750) {
        setCarouselStyle({
          height: "80vh",
          width: "90vw",

         
        });
      } else if (screenWidth <= 1500) {
        setCarouselStyle({
          height: "80vh",
          width: "68vw",
        });
      } else if (screenWidth <= 1950) {
        setCarouselStyle({
          height: "80vh",
          width: "68vw",
        });
      } else {
        setCarouselStyle({
          height: "80vh",
          width: "90vw",

        });
      }
    };

    
    updateStyles();

    
    window.addEventListener("resize", updateStyles);
    return () => {
      window.removeEventListener("resize", updateStyles);
    };
  }, []);
  return (
    <div css={swiperContainerStyles} className="bg-[#CEDCB659]   pb-1">
      <div className=" flex items-center justify-center  py-14">
        <h4 className="tet-4xl lg:text-[2.65em]    font-satoshi text-center text-[#3C3E3D]">
          Historical Monuments
        </h4>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={35}
        speed={600}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2500,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper   mb-12"
        id="historical-slide"
      >
        <div className="swiper-button-next ">
          <IconButton className="w-10 h-10 mb-2  hidden lg:inline-block  ">
            <EastIcon className="text-[#032624]" />
          </IconButton>
        </div>
        <div className="swiper-button-prev">
          <IconButton className="w-10 h-10 hidden lg:block ">
            <WestIcon className="text-[#032624]" />
          </IconButton>
        </div>

        {slideData.map((slide, index) => (
          <SwiperSlide key={index} >
            <div
            //  style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div id="monuments-carausal" style={carouselStyle} >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-[10px]  lg:rounded-[20px]  "
                />
              </div>
              {/* <div className="relative inset-0   bg-black bg-opacity-30  rounded-3xl"></div> */}

              <div className="absolute bottom-7 left-3  lg:left-8 text-start text-[#FFFFFF]   ">
                <h2 className="font-satoshi text-[32px] ">{slide.title}</h2>
                <p className="font-satoshi opacity-80 pb-4 lg:mr-52 text-[15px]">
                  {slide.description}
                </p>
                <p
                  className="font-satoshi opacity-90 text-[15px]"
                  dangerouslySetInnerHTML={{ __html: slide.tip }}
                ></p>
                <p
                  className="font-satoshi opacity-90 text-[15px]"
                  dangerouslySetInnerHTML={{ __html: slide.distance }}
                ></p>
                <p
                  className="font-satoshi opacity-90 text-[15px]"
                  dangerouslySetInnerHTML={{ __html: slide.travel }}
                ></p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
