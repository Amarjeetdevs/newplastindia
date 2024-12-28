"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubHeading from "../../components/SubHeading";

import icon from "../../assets/VISITORS/iconamoon_arrow-up-2.svg";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [topics, setTopics] = useState([]);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClick = (text) => {
    setActiveButton(text);
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      const response = await fetch("https://admin.plastindia.org/api/faqs?populate[faqSingle][populate]=*");
      const data = await response.json();
      setFaqs(data.data);

      const uniqueTopics = [...new Set(data.data.flatMap(faq => 
        faq.attributes.faqSingle.map(item => item.topic)
      ))];
      setTopics(uniqueTopics);
    };

    fetchFAQs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredFAQs = faqs.flatMap(faq => 
    faq.attributes.faqSingle.filter(item => item.topic === activeButton)
  );

  const SubHeadingText = {
    pageref: "Faq",
    title: `LEARN MORE`,
    description: `Frequently asked questions`,
    content: `Welcome to the FAQ section, where we address all your questions and concerns related to PlastIndia 2026. Discover detailed answers about registration, participation, and event logistics. Stay informed and make your experience at PlastIndia smooth and hassle-free.`,
  };

  return (
    <div className="bg-[#F7F7F7] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <SubHeading subHeadingText={SubHeadingText} />
      <section className="px-6 lg:px-10 mb-24">
        <div className="pt-20 pb-10">
          {topics.map((topic) => (
            <BlogBtn
              key={topic}
              text={topic}
              active={activeButton === topic}
              onClick={handleClick}
            />
          ))}
        </div>
        <div id="faq" className="z-0 relative">
          {filteredFAQs.map((faq, index) => (
            <div key={index}>
              {faq.question.map((q, qIndex) => (
                <details
                  key={qIndex}
                  className={`bg-white mb-3 rounded-xl transition-all duration-300 overflow-hidden ${
                    openIndex === qIndex ? "open" : "closed"
                  }`}
                  onClick={() => toggleDetails(qIndex)}
                >
                  <summary className="px-2 lg:px-4 py-4 lg:py-6 text-black text-lg text-start lg:text-xl cursor-pointer list-none shadow-sm rounded-xl flex justify-between items-center outline-none">
                    <span dangerouslySetInnerHTML={{ __html: q.question }}></span>
                    <div>
                      <Image
                        src={icon}
                        width={20}
                        height={20}
                        alt="Icon"
                        className={`transition-transform block max-w-[3em] lg:w-[2em] duration-300 ${
                          openIndex === qIndex ? "rotate-0 opacity-100" : "rotate-180 opacity-50"
                        }`}
                      />
                    </div>
                  </summary>
                  <hr />
                  {openIndex === qIndex && (
                    <div className={`py-8 lg:py-14 px-4 text-black text-md lg:text-lg transition-all duration-500`}>
                      {q.answer}
                    </div>
                  )}
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

function BlogBtn({ text, active, onClick }) {
  return (
    <button
      className={`lg:px-10 px-4 py-3 mr-4 rounded-full font-satoshi-medium text-md lg:text-lg focus:outline-none mb-2 ${
        active ? "bg-[#032624] text-white" : "bg-[#EAEAEA] text-[#959595]"
      }`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
}

export default Page;
