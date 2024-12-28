import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo 1.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedLink, setExpandedLink] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setExpandedLink(null);
  };

  const handleLinkClick = (link) => {
    // Expand or collapse the clicked link
    setExpandedLink(link === expandedLink ? null : link);
  };

  const handleChildLinkClick = (childLink) => {
    window.location.href = childLink;
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Exhibit", link: "/exhibit" },
    { text: "Visit", link: "/visit" },
    { text: "PLASTINDIA 2026", link: "/tradeshow" },
    {
      text: "Plastindia Foundation",
      link: "/foundation",
      children: [
        { text: "Foundation", link: "/foundation" },
        { text: "About PLASTINDIA 2023", link: "/about-plastindia-2023" },
        { text: "President's Message", link: "/about-president" },
        { text: "Managing Committee", link: "/about-key-members" },
        { text: "Secretariat", link: "/secretariat" },

        {
          text: "Members of Plastindia Foundation",
          link: "/about-members-association",
        },
        { text: "Committee", link: "/about-committee" },
      ],
    },
    {
      text: "Publication",
      link: "/publication",
      children: [
        { text: "Insights", link: "/publications-insights" },
        { text: "Practice 3R's", link: "/publications-practice-the-3rs" },
        {
          text: "Plastic Industry Status Report",
          link: "/publications-industries-status",
        },
        {
          text: "Plastic Recycling Handbook",
          link: "/plastic-recycling-handbook",
        },
      ],
    },

    { text: "Media Center", link: "/photos-and-videos" },

    {
      text: "Resources",
      link: "/resources",
      children: [
        {
          text: "Blogs",
          link: "/blogs",
        },
        // { text: "News And Events", link: "/news-and-events" },
        {
          text: "Impact Of Plastics",
          link: "/impact-of-plastics",
        },
        { text: "Download Centre", link: "/download-centre" },
      ],
    },
    { text: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className="bg-[#27A65B] flex justify-between py-2 pr-1">
      <button onClick={toggleDrawer} className="text-white text-xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <Link href={"http://exhibitors.plastindia.org"}>
        <button className="ml-24 text-white  text-md bg-[#0E4E28] px-4 py-2 rounded-full font-semibold">
          Register
          <span className="ml-2">
            <ArrowOutwardIcon />
          </span>
        </button>
      </Link>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-4">
            <Image src={logo} alt="Not Found" className="w-[20em]" />
            <button onClick={toggleDrawer} className="text-[#4A5567] text-2xl">
              <FaTimes />
            </button>
          </div>
          <hr className="border-[#E2E8F0]" />

          <nav className="p-4 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                if (
                  !expandedLink ||
                  item.text === expandedLink ||
                  (item.children &&
                    item.children.some((child) => expandedLink === item.text))
                ) {
                  return (
                    <React.Fragment key={item.text}>
                      <li className="flex items-center justify-between">
                        {item.children ? (
                          <button
                            onClick={() => handleLinkClick(item.text)}
                            className="ml-4 text-[#4A5567] w-full text-left py-1 flex justify-between items-center"
                          >
                            <span>{item.text}</span>
                            {expandedLink === item.text ? (
                              <FaChevronLeft className="text-[#4A5567]" />
                            ) : (
                              <FaChevronRight className="text-[#4A5567]" />
                            )}
                          </button>
                        ) : (
                          <a
                            href={item.link}
                            className="ml-4 text-[#4A5567] w-full text-left py-2 block"
                          >
                            {item.text}
                          </a>
                        )}
                      </li>
                      <hr className="border-[#E2E8F0]" />
                      {item.children && expandedLink === item.text && (
                        <ul className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <React.Fragment key={child.text}>
                              <li>
                                <button
                                  onClick={() =>
                                    handleChildLinkClick(child.link)
                                  }
                                  className="ml-4 text-[#4A5567] w-full text-left py-1"
                                >
                                  {child.text}
                                </button>
                              </li>
                              <hr className="border-[#E2E8F0]" />
                            </React.Fragment>
                          ))}
                        </ul>
                      )}
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </ul>
          </nav>

          {/* Buttons always at the bottom */}
          <div className="flex items-center justify-center flex-col p-4 gap-5">
            <Link
              href={"http://exhibitors.plastindia.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white border-2 text-lg bg-[#042523] px-5 py-2 rounded-full ">
                Register as Exhibitor
                <span className="ml-2">
                  <ArrowOutwardIcon />
                </span>
              </button>
            </Link>

            <Link href={"/visit#visit-brewing"}>
              <button className="bg-white border-2 text-lg text-[#042523] px-7 py-2 rounded-full ">
                Register as Visitor
                <span className="ml-2">
                  <ArrowOutwardIcon />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
