import React, { Suspense, lazy} from "react";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import img2 from "../assets/TRADESHOW/J IMAGE.jpg";
import img4 from "../assets/newwebp/1.webp";
import img5 from "../assets/newwebp/5.webp";
import icon1 from "../assets/TRADESHOW/iconamoon_arrow-up-1 (1).png";
import img7 from "../assets/TRADESHOW/iconamoon_arrow-up-2 (1).svg";
import img8 from "../assets/TRADESHOW/iconamoon_arrow-up-2 (2).svg";
import img9 from "../assets/TRADESHOW/iconamoon_arrow-up-2.svg";
import img from "../assets/TRADESHOW/alok tibrewala.webp";
import imss7 from "../assets/ABOUT-KEY-ASSOCATION/Rectangle 40.png";
import imss1 from "../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (1).png";
import imss2 from "../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (2).png";
import imss3 from "../assets/ABOUT-KEY-ASSOCATION/Rectangle 40 (3).png";
import InstagramFeed from "../components/InstagramFeed";
const SwiperFoundationComp = lazy(() =>
  import("../components/SwiperFoundationComp")
);
import "./styles.css";
import TradeMapComp from "./TradeMapComp";
import Link from "next/link";
import ApexGraphChart from "./graphChart";
import TradeshowVideoSlider from "./tradeshowVideoSlider";
import ExhibitionChart from "./ExhibitionChart";

const membersData = [
  {
    imgurl: imss7,
    name: "AIPMA",
    position: "The All India Plastics Manufacturers' <br/> Association, Mumbai",
  },
  {
    imgurl: imss1,
    name: "GSPMA",
    position:
      "Gujarat State Plastic Manufacturers  <br/> Association, Ahmedabad  ",
  },
  {
    imgurl: imss2,
    name: "PLEXCONCIL",
    position: "The Plastics Export Promotion <br/> Council, Mumbai",
  },
  {
    imgurl: imss3,
    name: "CIPET",
    position:
      "Central Institute of Plastics Engineering & <br/> Technology, Chennai",
  },
];

export default function TradeshowOverviewcomp() {
  const videoRef = React.useRef(null);
  return (
    <>
      <div className="px-6 lg:px-10 pt-2">
        <div className=" py-4 lg:py-14 ">
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            controls
            playsInline
            poster="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/HP_PT_2_a1d86cd520.webp"
          >
            <source
              src="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy_of_Plast_India_Main_Film_with_VO_15826a850c.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <TradeshowVideoSlider/> */}
        <h3 className="text-md font-satoshi-light px-6 lg:px-52 pt-5 text-[#3C3E3D] text-center">
          PLASTINDIA 2026 is the ultimate event for the plastics industry,
          <strong>
            {" "}
            uniting global leaders, innovators, and professionals
          </strong>{" "}
          to showcase cutting-edge advancements and trends. This triennial event
          underscores PLASTINDIA&apos;s tradition of excellence and innovation.{" "}
          <strong>
            {" "}
            Join us for a dynamic experience of exhibition,{" "}
          </strong>{" "}
          networking, and knowledge-sharing as we shape the future of plastics
          together.
        </h3>

        <div className="flex justify-center items-center mt-10 text-[#3C3E3D]">
          <div className="relative flex flex-col items-center justify-end  mx-2">
            <Image src={img9} alt="Not Found" width={50} />
            <h5 className="font-normal text-sm text-center mt-5 w-full">
              5th - 10th Feb, 2026
            </h5>
          </div>
          <div className="relative flex flex-col items-center justify-end  mx-2">
            <Image src={img7} alt="Not Found" width={50} />
            <h5 className="font-normal text-center  text-sm mt-5 w-full">
              10:00 AM - 6:00 PM
            </h5>
          </div>
          <div className="relative flex flex-col items-center justify-end  mx-2">
            <Image src={img8} alt="Not Found" width={50} className="my-2" />
            <h5
              // style={{ fontSize: 10 }}
              className="font-normal text-sm text-center mt-0 w-full"
            >
              Bharat Mandapam, <br />
              New Delhi, India
            </h5>
          </div>
        </div>
        <div className="">
          <Image
            src={img2}
            alt="Not Found"
            className="mix-blend-multiply py-10"
          />
        </div>
        <div
          id="trde-box2"
          className="flex  lg:flex-row flex-col mt-5  overflow-hidden gap-8 "
        >
          <div
            id="trde-crd2"
            className="card slider text-[#3C3E3D] bg-[#E8E6DD]  "
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Exhibitors
              </h2>

              <p className="text-md   lg:pl-0 lg:text-md leading-6  mt-4   text-start">
                PLASTINDIA 2026 will host over <strong>2000 exhibitors</strong>{" "}
                representing <strong>80 countries.</strong> Each exhibitor – a
                master of their craft in the plastics industry, bringing their
                best to the forefront. Gear up to{" "}
                <strong>experience the brilliance</strong> and expertise of
                these <strong>international leaders</strong> as they drive the
                future of plastics.
              </p>
              <div className="card-actions justify-end ">
                <Link href={"/exhibit"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72   lg:-mt-10 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            id="trde-crd2"
            className="card  slider bg-[#CEDCB6] text-[#3C3E3D] "
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Visitors
              </h2>
              {/* <h2 className="card-title lg:text-2xl  mt-5">    </h2> */}
              <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                Be a part of the phenomenal PLASTINDIA 2026! Witness
                <strong>
                  {" "}
                  groundbreaking innovations, connect with global leaders,
                </strong>{" "}
                and <strong>explore cutting-edge technologies</strong> that are
                shaping the future of plastics. Join lakhs of{" "}
                <strong>visitors from around the world</strong> and experience
                the progress of the plastics industry.
              </p>
              <div className="card-actions justify-end">
                {/* <ArrowOutwardIcon className="relative  text-[#989793]  w-28 h-28 ml-5 lg:mb-16 " /> */}
                <Link href={"/visit"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72 ml-52  lg:-mt-10 object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            id="trde-crd2"
            className="card slider bg-[#E8EEE3] text-[#3C3E3D]"
          >
            <div className=" px-4 lg:px-8  lg:pt-10">
              <h2 className="text-lg font-semibold lg:text-2xl  mt-5">
                Concurrent Events
              </h2>

              <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                At PLASTINDIA 2026,{" "}
                <strong>engage in dynamic Concurrent Events</strong> like the{" "}
                <strong>Reverse Buyer-Seller Meet</strong> for strategic
                international connections, insightful{" "}
                <strong>International Conferences</strong> with expert
                discussions, and the <strong>CEO Meet</strong> for top
                executives to exchange ideas and explore opportunities.
              </p>
              <div className="card-actions justify-end">
                <Link href={"/brewing-soon"}>
                  <Image
                    src={icon1}
                    alt="Not found"
                    className="  w-[8em] h-[8em] lg:ml-72 ml-52  lg:-mt-10 object-contain "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

<InstagramFeed/>
        <section className="flex lg:flex-row flex-col px-6 lg:px-10 -mx-6 lg:-mx-10 pb-5 lg:pb-16 py-5 lg:py-10 mt-8 bg-[#F1F1F1] lg:gap-16">
          <div className="flex flex-col w-full lg:w-1/2    py-10 ">
            <div className="">
              <Image
                src={img4}
                alt="Not Found"
                className="lg:h-[41em] h-[25em] object-cover mb-5 lg:mb-14 rounded-xl lg:rounded-[55px]"
              />
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <h2 className="text-[#3C3E3D] text-center lg:mt-10  text-3xl lg:text-[2.5em]">
                What to Expect
              </h2>
              <h3 className="  ext-justify mx-0 text-md pt-2 lg:pt-4 text-[#3C3E3D]">
                At <strong>PLASTINDIA 2026,</strong> expect a groundbreaking
                event that showcases the very best in plastics innovation and
                sustainability. With over <strong> 2,000 exhibitors </strong>
                from <strong>80 countries,</strong> this is the premier platform
                for cutting-edge technologies, eco-friendly solutions, and
                industry advancements.
              </h3>
            </div>
          </div>
          <div className="flex flex-col  lg:flex-col-reverse  w-full lg:w-1/2 lg:mt-10  bg-[#F1F1F1]   ">
            <div className="">
              <Image
                src={img5}
                alt="Not Found"
                className="lg:h-[41em] h-[25em] object-cover mb-5 lg:mb-14 rounded-xl lg:rounded-[55px]"
              />
            </div>
            <div className=" flex flex-col lg:pt-0  pb-0 justify-center items-center ">
              <h2 className="text-[#3C3E3D]  text-center mb-2 lg:mb-4 -mt-0 lg:mt-0 text-3xl lg:text-[2.6em]">
                Vision of PLASTINDIA 2026
              </h2>

              <h3 className=" text-center text-md   pb-5 lg:mb-16 text-[#3C3E3D]">
                To establish PLASTINDIA 2026 as a transformative global platform
                that drives the future of the plastics industry by fostering
                innovation, sustainability, and collaboration. We envision a
                world where the plastics industry embraces cutting-edge
                technologies, sustainable practices, and global partnerships to
                meet the evolving demands of a modern, eco-conscious world. Our
                goal is to position India at the forefront of the global
                plastics industry while setting new benchmarks for excellence in
                innovation and sustainability.
              </h3>
            </div>
          </div>
        </section>
      </div>
      <section>
        <TradeMapComp />
      </section>

      <section>
        <div className="px-6 lg:px-10  pt-10 lg:pt-16 text-[#3C3E3D]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-3xl lg:text-[2.65em]  md:text-4xl   mb-1">
              A Legacy of Excellence
            </h2>
            <h3
              style={{ fontSize: 16 }}
              className="text-lg py-5 lg:py-0 md:text-lg opacity-90 lg:px-44 mb-8"
            >
              <p>
                Step into the legacy of PLASTINDIA, a journey that began in{" "}
                <strong>1990 with a modest 486 exhibitors</strong> and has
                blossomed into a global phenomenon. By 2023, PLASTINDIA hosted
                over{" "}
                <strong>
                  {" "}
                  1,800 exhibitors from 79 countries, drawing 360,000 visitors.
                </strong>{" "}
                This triennial event has become a beacon of innovation,
                international collaboration, and industry leadership. Each
                edition marks significant milestones.
                <br /> Unite with us at PLASTINDIA 2026 to be part of the next
                chapter in this remarkable journey of growth and excellence.
              </p>
            </h3>
          </div>
          <div className="bg-[#f5f5f5]  grid w-screen-lg mx-auto justify-center lg:grid-cols-2 grid-cols-1 mt-5 lg:mt-16 gap-12">
            <ApexGraphChart
              numberOfSample={[15, 19, 25, 22, 22, 30, 35, 40, 35, 44, 79]}
              sampleTitle={"Number of Countries Participated"}
              chartColor="#f99d46"                     
            />
            <ApexGraphChart
              numberOfSample={[
                486, 671, 751, 1055, 1109, 1288, 1518, 1598, 1600, 1800, 1800,
              ]}
              sampleTitle={"Number of Exhibitors"}
               chartColor="#46ad5a"
            />
            <ApexGraphChart
              numberOfSample={[
                68, 76, 210, 225, 214, 327, 476, 585, 450, 550, 550,
              ]}
              sampleTitle={"Number of Overseas Exhibitors"}
                chartColor="#375e9f"
            />
            <ApexGraphChart
              numberOfSample={[
                19600, 27000, 39800, 46000, 46286, 65541, 77604, 125000, 150000,
                125000, 125000,
              ]}
              sampleTitle={"Total Gross Exhibition Area (sq. mts.)"}
              chartColor="#032524"
            />
          </div>
          {/* <ExhibitionChart/> */}
          <div className="flex items-center justify-center">
            <Link href={"/foundation#history"}>
              <button className="bg-[#042523] my-5 lg:my-10  lg:-mb-0  text-md text-white px-14 py-3 rounded-full border-2">
                Learn more
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 lg:px-0 lg:pl-10">
          <Suspense fallback={<div>Loading...</div>}>
            <SwiperFoundationComp />
          </Suspense>
        </div>
      </section>
      <section>
        <div className="flex pl-6 px-6 lg:px-10 lg:flex-row flex-col -mt-10 lg:mt-20  bg-[#F1F1F1]   lg:pl-10 py-10 ">
          <div className=" w-full lg:w-3/5">
            <Image
              src={img}
              alt="Not Found"
              className="mix-blend-multiply rounded-[20px] lg:rounded-[50px]"
            />
          </div>
          <div className="w-full lg:py-0 py-6 lg:w-[46em]  flex flex-col  justify-center items-center ">
            <h2 className="text-[#3C3E3D] text-center text-3xl lg:text-[2.65em]">
              National Executive Council <br /> (NEC)
            </h2>

            <h3 className="lg:px-8 text-center py-3 text-md text-[#3C3E3D]">
              <strong>
                The driving force behind PLASTINDIA 2026 is the National
                Executive Committee (NEC),
              </strong>{" "}
              a distinguished group nominated by the Office Bearers of the
              Plastindia Foundation. This dedicated team ensures the seamless
              execution and visionary direction of the event. At the helm is
              Alok Tibrewala, whose leadership and innovative strategies have
              been pivotal in PLASTINDIA&apos;s journey. 
            </h3>
            <Link href={"/nec"}>
              <button className="bg-[#042523] mt-10  text-md text-white px-4 py-3 rounded-full border-2">
                Take a look at our Committees
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F1F1F1]  lg:px-10 px-6 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex lg:w-[50%] flex-col items-center justify-center ">
            <h2 className="text-2xl font-medium lg:text-4xl text-[#3C3E3D]  text-center pb-[10px]">
              Supported By
            </h2>

            <div className="flex items-center w-full" />

            <Image
              src={
                "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PI_2026_PT_3_Government_support_26d1772c9a.png"
              }
              alt="Not found"
              width={1500}
              height={2000}
              className=""
            />
          </div>
          <div className="flex lg:w-[50%] flex-col  items-center">
            <h2 className="text-2xl font-medium lg:text-4xl text-[#3C3E3D]  text-center pb-[10px]">
              Overseas Associates
            </h2>

            <div className="flex items-center w-full  ">
              <Image
                src={
                  "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PI_2026_PT_3_Overseas_Associates_c13da8fa60.png"
                }
                alt="Not found"
                width={1500}
                height={2000}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium lg:text-4xl text-center pb-5 lg:pt-24 pt-10  font-satoshi text-[#3C3E3D] ">
            Sponsors
          </h2>

          <div>
            <div className="bg-[#C5CACA] rounded-xl">
              <h2 className="text-xl py-3  font-satoshi text-center text-[#3C3E3D] ">
                Platinum
              </h2>
              <div className="bg-[#DDE3E4]  rounded-b-xl">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-16 justify-center py-5  ">
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_770_d0cc720474.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_771_444397f581.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_772_8647f33603.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#D0B968] mt-10 lg:mb-0 mb-16 rounded-xl ">
              <h2 className="text-xl py-3 font-satoshi  text-center text-[#3C3E3D] ">
                Gold
              </h2>
              <div className="bg-[#D9C785]   rounded-b-xl">
                <div className="flex flex-col lg:flex-row items-center space-x-0 justify-center  py-5">
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_770_1_a85d6d1696.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_771_1_8cb31ca455.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_772_1_067e73beb0.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 h-32 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_772_2_bcf1eef47b.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                  <Image
                    src={
                      "https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Frame_772_3_a8649181aa.svg"
                    }
                    alt="Not found"
                    width={1500}
                    height={2000}
                    className="w-44 lg:w-72 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section >
        <div className="px-6 lg:px-10 mx-0 lg:mx-44 pt-16 mb-10 lg:mb-0 flex flex-col justify-center items-center ">
          <h2 className="text-[#3C3E3D] text-center text-3xl lg:text-[2.8em]">
          Visionaries of PLASTINDIA
          </h2>

          <h3 className="lg:px-8 text-center text-md my-5 text-[#3C3E3D]">
          Plastindia Foundation, established by <strong> visionary leaders and key industry associations, </strong> has grown into a globally recognized platform in the plastics sector. The foundation&apos;s success is attributed to its dedicated founders, who have tirelessly championed innovation and excellence. 
These esteemed organizations and partners will steer PLASTINDIA 2026, ensuring it continues to be a beacon of innovation and collaboration in the plastics industry. <br />
           <strong>Meet our treasured leaders and be part of the innovation at PLASTINDIA 2026!</strong>
          </h3>
        </div>
        
        <div
            className="grid lg:grid-cols-4  px-10 md:grid-cols-2 sm:grid-cols-1 lg:pb-0 md:pb-20 gap-5
       lg:mt-8"
          >
            {membersData.map((card, index) => (
              <div
                key={index}
                className="card bg-[#F4F4F4]   lg:w-auto md:w-auto shadow-xs rounded-xl"
              >
                <div className="">
                  <figure>
                    <Image
                      className="px-5 pt-8  hover:scale-110 duration-300"
                      src={card?.imgurl}
                      alt="Not Found"
                    />
                  </figure>
                  <div className="pb-12  text-[#686868] flex flex-col items-center justify-center">
                    <h2
                      style={{ fontSize: 18 }}
                      className="card-title text-[#3C3E3D]"
                    >
                      {card?.name}
                    </h2>
                    <p
                      className="text-sm text-center"
                      dangerouslySetInnerHTML={{ __html: card?.position }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
       <div className="flex items-center justify-center" >

         <Link href={"/about-members-association"}>
         <button className="bg-[#042523] mt-10  text-md text-white px-14 py-3 rounded-full border-2">
          View all
            <span>
              <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
            </span>
          </button>
         </Link>
          </div>
      </section> */}
      <video
        // ref={videoRef}
        width="100%"
        height="100%"
        controls
        playsInline
        poster="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/PLASTINDIA_2026_LOGO_LAUNCH_THUMBNAIL_fbf327593e.png"
      >
        <source
          src="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Copy+of+PLASTINDIA+2026+LOGO+LAUNCH+FILM+hd+04.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
