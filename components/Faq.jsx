"use client";
import React, { useState } from "react";
import Image from "next/image";
import icon from "../assets/VISITORS/iconamoon_arrow-up-2.svg";

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="z-0 relative">
      {data.map((faq, index) => (
        <details
          key={index}
          className={`bg-white mb-3 rounded-xl transition-all duration-300 overflow-hidden ${
            openIndex === index ? "open" : "closed"
          }`}
          onClick={() => toggleDetails(index)}
        >
          <summary
          
            className="px-2 lg:px-4 py-4 lg:py-6 text-lg text-start lg:text-xl cursor-pointer list-none shadow-sm rounded-xl flex justify-between items-center outline-none"
            
           >
         <span dangerouslySetInnerHTML={{ __html: faq.question }}></span>
            <div>
              <Image
                src={icon}
                width={20}
                height={20}
                alt="Icon"
                className={`transition-transform max-w-[3em] lg:max-w-[2em] duration-300 ${
                  openIndex === index
                    ? "rotate-0 opacity-100"
                    : "rotate-180 opacity-50"
                }`}
              />
            </div>
          </summary>
          <hr />
          <div
            className={`py-8 lg:py-14 px-4 text-md lg:text-lg transition-all duration-500 ${
              openIndex === index ? "opacity-100" : "opacity-100"
            }`}
          >
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
