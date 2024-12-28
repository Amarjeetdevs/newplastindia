"use client";

import Image from "next/image";
import frm from "../../assets/BLOGS/Frame 619.jpg";
import frm1 from "../../assets/BLOGS/Frame 619 (1).jpg";
import frm2 from "../../assets/BLOGS/Frame 619 (2).jpg";
import frm3 from "../../assets/BLOGS/Frame 619 (3).jpg";
import img2 from "../../assets/BLOGS/Rectangle 9a.jpg";
import img3 from "../../assets/BLOGS/Rectangle 9 2.jpg";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";
import "../../components/styles.css"

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SubHeadingText = {
    pageref: "Home> Blogs> PLASTINDIA 2023: Why is it was a success?",
    title: "PLASTINDIA 2023",
    descriptionFontSize: "44px",
    description: "Why it was a success?",
    content:
      "PLASTINDIA 2023 was a game-changer for the plastics industry. With thousands of global exhibitors, PLASTINDIA 2023 set new benchmarks, transforming the future of plastics.",
  };

  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
    

    <article>
      <Image
        src={frm}
        alt="Not Found"
        layout="responsive"
        className="mix-blend-multiply px-10 py-12"
      />
      <div className="lg:mx-60 px-10 text-[#3C3E3D]">
        <h2 className="text-2xl  lg:mt-10 font-bold lg:pb-5 italic">
          A Triumph of Innovation and Collaboration in the Plastics Industry
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          PLASTINDIA 2023, the world&apos;s largest plastic exhibition, concluded
          with resounding success at Pragati Maidan, New Delhi, from February
          1st to 5th, 2023. The event brought together industry leaders,
          innovators, and enthusiasts from the global plastics industry,
          showcasing cutting-edge technologies, fostering significant
          businesses, and positioning India as a burgeoning hub for plastics.
          Here&apos;s why PLASTINDIA remains a must-attend event for every
          stakeholder in the plastics industry.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">
          A Grand Showcase of Global Innovations
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          With around 1800 exhibitors from India and countries such as Germany,
          Austria, Japan, and Singapore, PLASTINDIA 2023 was a melting pot of
          innovation and technology. Spanning a massive 150 acres with a
          built-up area of 4.2 million square feet, the exhibition was a
          testament to the industry&apos;s growth and potential. Exhibitors displayed
          the latest in processing machinery, raw materials, recycling
          technology, and automation. Companies like RIL, IOC, HMEL, Alok
          Masterbatches, Fine Organics, and many others highlighted their
          groundbreaking innovations, setting new benchmarks in the plastics
          industry.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">Record-Breaking Attendance</h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          The exhibition attracted an impressive 3.60 lakh visitors, including
          industry professionals, business leaders, and potential customers.
          This high footfall translated into numerous high-value transactions
          and opened up new avenues for business growth. The interactions
          facilitated during the event helped exhibitors reach out to potential
          customers and identify expansion opportunities.
        </h3>
        <Image
          src={frm1}
          alt="Not Found"
          layout="responsive"
          className="mix-blend-multiply  pt-2 lg:pt-12"
        />
        <div className="flex gap-5 pt-5 pb-12">
          <Image
            src={frm2}
            alt="Not Found"
            // layout="responsive"
            className="mix-blend-multiply w-1/2 "
          />
          <Image
            src={frm3}
            alt="Not Found"
            // layout="responsive"
            className="mix-blend-multiply w-1/2 "
          />
        </div>
        <h2 className="text-xl lg:pb-5 italic">
          Focus on Innovation, Sustainability, and Growth
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          PLASTINDIA 2023 emphasized innovation, sustainability, and growth,
          aligning with the global push towards environmentally friendly
          practices. The event showcased modern techniques that promise to
          sustain the development of the plastics industry in India, ensuring it
          remains competitive on the global stage.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">
          A Platform for Domestic and International Collaboration
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          The exhibition provided a unique opportunity for Indian exhibitors to
          showcase their products alongside their international counterparts.
          This exposure was crucial for domestic companies looking to expand
          their reach and influence. The support and visibility gained at
          PLASTINDIA 2023 were instrumental in positioning India as a preferred
          sourcing hub for plastics globally.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">
          CEO Conclave: A Vision for the Future
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          One of the highlights of the event was the high-powered CEO Conclave,
          presided over by the Hon&apos;ble Minister of Chemical & Fertilizers
          and Health & Family Welfare, Shri Mansukh Bhai Mandaviya ji. Over 90
          industry leaders and CEOs discussed the future of the Indian plastics
          industry, emphasizing the need for policy support to unlock the
          industry&apos;s full potential. The conclave underscored the
          collaborative spirit between industry and policymakers, essential for
          creating a conducive environment for growth.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">
          RBSM Meetings: Bridging Global Markets
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          In association with PLEXCONCIL, the RBSM meetings during PLASTINDIA
          2023 brought over 300 buyers from various countries to source their
          requirements from India. These meetings were pivotal in connecting
          overseas buyers with Indian manufacturers and fostering international
          trade and collaboration.
        </h3>
        <h2 className="text-xl lg:pb-5 italic">Drafting a Future Roadmap</h2>
        The innovations and technologies showcased at PLASTINDIA 2023 have set
        the roadmap for the industry&apos;s future. The event brought together the
        brightest minds in the plastics industry, facilitating networking,
        exploration, and learning. It also introduced businesses to state
        governments and city councils, paving the way for future collaborations
        and opportunities.
        <h2 className="text-xl lg:pb-5 italic">
          A Global Stage for the Indian Plastics Industry
        </h2>
        <h3 className="text-sm text-[#3C3E3D] leading-6 lg:pb-5 font-thin">
          PLASTINDIA 2023 was more than just an exhibition; it was a platform
          that propelled the Indian plastics industry to the global stage. By
          showcasing the best in innovation, fostering collaboration, and
          highlighting sustainability, the event has laid the foundation for a
          bright future. As the world looks towards India for its plastics
          needs, PLASTINDIA 2023 has proven that with the right support and
          vision, the Indian plastics industry can achieve remarkable heights.
        </h3>
      </div>
      <div>
        
      <div className="flex justify-center gap-2 py-16 ">
  <div className="join ">
  <button className="join-item btn bg-[#EDEDED] border-[#EDEDED] hover:bg-[#EDEDED] hover:border-[#EDEDED] rounded-full text-xl font-light px-10 ">Prev.</button>
  </div>
  <div className="join">
    <button className="join-item btn bg-[#EDEDED] border-[#EDEDED] hover:bg-[#EDEDED] hover:border-[#EDEDED] rounded-full text-xl font-light px-10 ">Next</button>
   
  </div>
</div>


      </div>

      <div className="flex bg-[#EDEDED] pb-12 flex-col">
        <h2 className="text-center font-bold text-[#3C3E3D] py-10  text-2xl">
          Up Next
        </h2>
        <div className=" gap-5 px-10  flex flex-col lg:flex-row rounded-2xl">
          <div
            
            className="flex-1 bg-[#EAEAEA]  rounded-lg"
          >
            <div className="flex  justify-between items-center">
              <div
                className={`flex lg:flex-row flex-col justify-start items-center text-start  duration-1000 
                }`}
              >
                <div className="lg:w-1/2">
                  {" "}
                  <Image
                    src={img3}
                    alt="Not found"
                    width={350}
                    className="lg:p-4 mix-blend-multiply"
                  />
                </div>
               <div className="lg:w-1/2">
               <h3
                  className={`flex lg:mt-0 mt-5 text-xl justify-start items-center text-[#3C3E3D] pb-2 font-semibold text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 `}
                  
                >
               The Circular Economy: Redefining <br/> Plastic Waste Management
                </h3>{" "}
                <span className="text-sm justify-start text-[#3C3C3C]">
                Discover how a circular economy promises a sustainable future, making plastics a valuable resource rather than waste. Read on to find out more!
                </span>
                <h3 className="text-[#032624] text-md font-semibold text-start mt-2 ">
                  April 25, 2024
                </h3>
               </div>
              </div>
              
            </div>
          </div>

          <div
         
            className="flex-1 bg-[#EAEAEA] lg:mt-0 mt-8  rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div
                className={`flex lg:flex-row flex-col justify-start items-center text-start  duration-1000 
                }`}
              >
                <div className="lg:w-1/2">
                  {" "}
                  <Image
                    src={img2}
                    alt="Not found"
                    width={350}
                    className="lg:p-4 mix-blend-multiply"
                  />
                </div>
               <div className="lg:w-1/2">
               <h3
                  className={`flex lg:mt-0 mt-5  justify-start text-[#3C3E3D] font-semibold mb-2 items-center text-start bg-opacity-0 hover:bg-opacity-80 transition-opacity duration-1000 `}
                  
                >
                Plastics in Sustainability: A <br/> Challenging Possibility
                </h3>{" "}
                <span className="text-sm justify-start text-[#3C3C3C]">

                Discover how plastics are not just part of the problem, but a significant part of the solution in our sustainable energy journey.
</span>
                <h3 className="text-[#032624] text-md font-semibold text-start mt-2 ">
                  April 25, 2024
                </h3>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
















      <Footer />
    </div>
  );
};

export default Page;

