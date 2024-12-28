import React from "react";
import Image from "next/image";
import img3 from "../assets/TRADESHOW/ABOUT-IMAGE.jpg";
import img2 from "../assets/TRADESHOW/J IMAGE.jpg";
import img4 from "../assets/TRADESHOW/Frame 102.jpg";
import img5 from "../assets/TRADESHOW/Frame 113.jpg";
import imgr from "../assets/TRADESHOW/Rectangle 45.jpg";
import imgs from "../assets/TRADESHOW/Rectangle 46.jpg";
import imgt from "../assets/TRADESHOW/Rectangle 47.jpg";
import icon1 from "../assets/TRADESHOW/iconamoon_arrow-up-1 (1).png";

import "./styles.css";
import TradeMapComp from "./TradeMapComp";

export default function TradeshowComp() {
  return (
    <>
      <div className="px-10 pt-2">
        <div className="">
          <Image
            src={img3}
            alt="Not Found"
            className="mix-blend-multiply py-14"
          />
        </div>
        <h3 className="text-md font-satoshi-light px-52 pt-5 text-[#3C3E3D] text-center">
          PLASTINDIA  envisions and creates the future of plastic. As we gear up
          for PLASTINDIA 2026,
          <strong>
            with over and representation from more than 80 countries, the
            coveted tradeshow promises cutting-edge technologies and
            groundbreaking standards.
          </strong>
          Celebrating the success of PLASTINDIA 2023, which drew 3.60 lakh
          visitors and hosted a visionary CEO Conclave with key industry
          leaders, we continue with full spirit.
        </h3>

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
                  <h2 className="card-title pl-4 lg:pl-0 lg:text-2xl  mt-5">
                    Exhibitors
                  </h2>

                  <p className="text-md   lg:pl-0 lg:text-md leading-6  mt-4   text-start">
                    PLASTINDIA 2026 will host over{" "}
                    <strong>2000 exhibitors</strong> representing{" "}
                    <strong>80 countries.</strong> Each exhibitor – a master of
                    their craft in the plastics industry, bringing their best to
                    the forefront. Gear up to{" "}
                    <strong>experience the brilliance</strong> and expertise of
                    these <strong>international leaders</strong> as they drive
                    the future of plastics.
                  </p>
                  <div className="card-actions justify-end">
                    {/* <ArrowOutwardIcon className="relative -top-5 text-[#989793] bg-red-500 w-[10em] h-[10em] h28 ml-5 lg:mb-16 " /> */}
                    <Image
                      src={icon1}
                      alt="Not found"
                      className="  w-[8em] h-[8em] -mt-1 object-contain "
                    />
                  </div>
                </div>
              </div>

              <div
                id="trde-crd2"
                className="card  slider bg-[#CEDCB6] text-[#3C3E3D] "
              >
                <div className=" px-4 lg:px-8  lg:pt-10">
                  <h2 className="card-title pl-4 lg:pl-0 lg:text-2xl  mt-5">
                    Visitors
                  </h2>

                  {/* <h2 className="card-title lg:text-2xl  mt-5">    </h2> */}

                  <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                    Be a part of the phenomenal PLASTINDIA 2026! Witness
                    <strong>
                      {" "}
                      groundbreaking innovations, connect with global leaders,
                    </strong>{" "}
                    and <strong>explore cutting-edge technologies</strong> that
                    are shaping the future of plastics. Join lakhs of{" "}
                    <strong>visitors from around the world</strong> and
                    experience the progress of the plastics industry. 
                  </p>
                  <div className="card-actions justify-end">
                    {/* <ArrowOutwardIcon className="relative  text-[#989793]  w-28 h-28 ml-5 lg:mb-16 " /> */}
                    <Image
                      src={icon1}
                      alt="Not found"
                      className="  w-[8em] h-[8em]  object-contain "
                    />
                  </div>
                </div>
              </div>

              <div
                id="trde-crd2"
                className="card slider bg-[#E8EEE3] text-[#3C3E3D]"
              >
                <div className=" px-4 lg:px-8  lg:pt-10">
                  <h2 className="card-title lg:text-2xl  mt-5">
                    Concurrent Events
                  </h2>

                  <p className="text-md leading-6  mt-4 text-[#3C3E3D]  text-start">
                    At PLASTINDIA 2026, <strong>engage in dynamic Concurrent Events</strong>  like
                    the <strong>Reverse Buyer-Seller Meet</strong> for strategic international
                    connections, insightful International Conferences with
                    expert discussions, and the <strong>CEO Meet</strong> for top executives to
                    exchange ideas and explore opportunities.
                  </p>
                  <div className="card-actions justify-end">
                  
                    <Image
                      src={icon1}
                      alt="Not found"
                      className="  w-[8em] h-[8em]  object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
        <section className="mt-20 text-[#3C3E3D]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2
              style={{ fontSize: 42 }}
              className="text-3xl  md:text-4xl lg:text-5xl  mb-1"
            >
              PLASTINDIA 2023: Breaking Records, Building Futures
            </h2>
            <h3
              style={{ fontSize: 16 }}
              className="text-lg md:text-lg opacity-90 lg:px-48 mb-8"
            >
              The 11th edition of PLASTINDIA, held from February 1-5, 2023, saw
              a record-breaking 360,000 visitors. Over 1800 exhibitors showcased
              the latest in machinery, raw materials, recycling technology, and
              automation solutions, setting the stage for the industry&apos;s
              future growth. A key highlight was the visionary CEO Conclave,
              featuring over 90 industry leaders and CEOs, along with
              Hon&apos;ble Minister Shri Mansukh Bhai Mandaviya and Joint
              Secretary Shri Arun Baroka. The conclave emphasized the importance
              of collaboration between industry and policymakers to boost the
              Indian Plastics Industry.
              <strong> Join us in February 2026 at Pragati Maidan!</strong>
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:mt-12 gap-4">
            <Image src={img4} alt="Not Found" className="mix-blend-multiply" />
            <Image src={img5} alt="Not Found" className="mix-blend-multiply" />
          </div>
        </section>
      </div>
      <section>
        <TradeMapComp />
      </section>
      <section>
        <div className="px-10  pt-16 pb-24 text-[#3C3E3D]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2
              style={{ fontSize: 42 }}
              className="text-3xl  md:text-4xl lg:text-5xl  mb-1"
            >
              Our Journey
            </h2>
            <h3
              style={{ fontSize: 16 }}
              className="text-lg md:text-lg opacity-90 lg:px-52 mb-8"
            >
              <p>
              PLASTINDIA Exhibition, with its illustrious history, completing
                11 impactful editions since 1990. Starting with 486 exhibitors,
                it has grown into a monumental event, with the 2023 edition
                featuring over 1800 exhibitors from 79 countries and attracting
                more than 360,000 visitors. An essential event for corporations
                and industry leaders worldwide, PLASTINDIA encompasses the
                entire spectrum of plastics producers, processors, and
                end-users, fostering robust participation and
                collaboration. More than an exhibition, PLASTINDIA is a catalyst
                for the plastics industry, driving knowledge exchange,
                technological advancements, and strategic partnerships. Its
                focus on innovation and emerging trends has solidified its role
                in shaping the industry&apos;s future.
              </p>
              <p>
                Looking ahead, PLASTINDIA is dedicated to progress,
                sustainability, and excellence. Each edition reinforces its
                status as a premier exhibition, reflecting the industry&apos;s
                current state and influencing its future trajectory. Committed
                to progress, sustainability, and excellence, PLASTINDIA&apos;s
                journey paves the way for a sustainable and prosperous future in
                the plastics industry.
              </p>
            </h3>
          </div>
          <div className="grid grid-cols-3 mt-16 gap-6">
            <Image src={imgr} alt="Not found" />

            <Image src={imgs} alt="Not found" />

            <Image src={imgt} alt="Not found" />
          </div>
        </div>
      </section>
    </>
  );
}
