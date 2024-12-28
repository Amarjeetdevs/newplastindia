"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TabComp = ({ tabdata, buttonsArray, tabtitle, images }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // const images = [imgn1, imgn2, imgn3];

  const handleTabClick = (tabIndex) => {
    if (tabIndex !== activeTab) {
      setTransitioning(true);
      setTimeout(() => {
        setActiveTab(tabIndex);
        setTransitioning(false);
      }, 100);
    }
  };

  return (
    <section>
      <div className="lg:mb-20 ">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:mt-20 ">
          <div className="lg:px-10 px-6 ">
            <Image
              src={images[activeTab]}
              alt="Not Found"
              className=" object-cover lg:rounded-[50px]  lg:object-cover rounded-lg lg:h-full h-96 mix-blend-multiply top-16"
            />
          </div>
          <div className=" pl-5 w-full  ">
            <div className="lg:pr-14 ">
              <h2 className="text-[#3C3E3D] text-3xl  lg:py-0 my-8  lg:text-[2.65em]  font-satoshi mb-1">
                {tabtitle.title}
              </h2>
              <h3
                className="text-md font-satoshi  my-4 text-[#3C3E3D]"
                dangerouslySetInnerHTML={{ __html: tabtitle.description }}
              ></h3>
            </div>

            <div className="mx-auto px-4 -ml-6 mr-0 lg:mr-10 mt-14">
            <div
  style={{
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  }}
>
  <div
    style={{
      display: 'inline-flex '
    }}
  >
    {buttonsArray.map((buttonText, index) => (
      <button
        key={index}
        style={{
          minWidth: 'max-content',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          borderRadius: '9999px',
          margin: '0 0.25rem',
          backgroundColor: activeTab === index ? '#032624' : '#CEDCB669',
          color: activeTab === index ? '#FFFFFF' : '#737D63',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={() => handleTabClick(index)}
      >
        {buttonText}
      </button>
    ))}
  </div>
</div>

              <div
                className={`text-[#3C3E3D] p-4  ${
                  transitioning ? "opacity-0" : "opacity-100"
                } transition-opacity duration-300`}
              >
                {activeTab === 0 &&
                  tabdata.content.map((item, index) => (
                    <div
                      key={index}
                      id={`tabpanel-${index}`}
                      role="tabpanel"
                      className="tab-content duration-100 text-[#3C3E3D]"
                    >
                      <div className="flex flex-row">
                        <div className="avatar flex items-center justify-center ">
                          <div className="w-20 h-20  mr-4 rounded-full">
                            <Image src={item?.images} alt="Not Found" />
                          </div>
                        </div>
                        <div className="flex-col  text-start">
                          <h2 className="font-satoshi text-lg  font-normal pt-4">
                            {item?.subtitle}
                          </h2>
                          <p
                            className="text-[13.5px] py-2 font-satoshi"
                            dangerouslySetInnerHTML={{ __html: item?.content }}
                          ></p>
                         
                        </div>
                        

                      </div>
                      <hr className="pt-2"></hr>

                    </div>
                  ))}

                {activeTab === 1 &&
                  tabdata.content1.map((item, index) => (
                    <div
                      key={index}
                      id={`tabpanel-${index}`}
                      role="tabpanel"
                      className="tab-content duration-100 text-[#3C3E3D]"
                    >
                      <div className="flex flex-row">
                        <div className="avatar flex items-center justify-center ">
                          <div className="w-20 h-20  mr-4 rounded-full">
                            <Image src={item?.images} alt="Not Found" />
                          </div>
                        </div>
                        <div className="flex-col text-start">
                          <h2 className="font-satoshi text-lg  font-normal pt-4">
                            {item?.subtitle}
                          </h2>
                          <p
                            className="text-[13.5px] py-2 font-satoshi"
                            dangerouslySetInnerHTML={{ __html: item?.content }}
                          ></p>
                       
                        </div>
                      </div>
                      <hr className="pt-2"></hr>

                    </div>
                  ))}

                {activeTab === 2 &&
                  tabdata.content2.map((item, index) => (
                    <div
                      key={index}
                      id={`tabpanel-${index}`}
                      role="tabpanel"
                      className="tab-content duration-100 text-[#3C3E3D]"
                    >
                      <div className="flex flex-row">
                        <div className="avatar flex items-center justify-center ">
                          <div className="w-20 h-20  mr-4 rounded-full">
                            <Image src={item?.images} alt="Not Found" />
                          </div>
                        </div>
                        <div className="flex-col text-start">
                          <h2 className="font-satoshi text-lg  font-normal pt-4">
                            {item?.subtitle}
                          </h2>
                          <p
                            className="text-[13.5px] py-2 font-satoshi"
                            dangerouslySetInnerHTML={{ __html: item?.content }}
                          ></p>
                       
                        </div>
                      </div>
                      <hr className="pt-2"></hr>

                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabComp;
