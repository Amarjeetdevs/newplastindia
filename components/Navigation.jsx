"use client";
import React, { Suspense, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  return (
    <Suspense fallback={<div>...</div>}>
      <NavContent />
    </Suspense>
  );
};

export default Navigation;

const NavContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropdownVisiblePublications, setDropdownVisiblePublications] =
    useState(false);
  const [isDropdownVisibleResources, setDropdownVisibleResources] =
    useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseEnterPublications = () => {
    setDropdownVisiblePublications(true);
  };

  const handleMouseLeavePublications = () => {
    setDropdownVisiblePublications(false);
  };
  const handleMouseEnterResources = () => {
    setDropdownVisibleResources(true);
  };

  const handleMouseLeaveResources = () => {
    setDropdownVisibleResources(false);
  };

  const linkClass = (path) =>
    `text-lg ${
      pathname === path
        ? "opacity-100 text-md font-semibold text-white"
        : "opacity-70"
    }`;

  return (
    <nav
      className="w-full  lg:h-full text-white px-6 lg:px-10 bg-[#27A65B] py-[11px] z-10"
      aria-label="Main Navigation"
    >
      {width >= 1024 ? (
        <div className="lg:flex hidden items-center justify-between ">
          <ul className="flex space-x-4 py-2">
            <li>
              <Link
                href="/"
                className={`text-lg ${
                  pathname === "/"
                    ? "opacity-100 text-md font-semibold text-white"
                    : "opacity-70"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/exhibit"
                className={`text-lg ${
                  pathname === "/exhibit"
                    ? "opacity-100 text-md font-semibold text-white"
                    : "opacity-70"
                }`}
              >
                Exhibit
              </Link>
            </li>
            <li>
              <Link
                href="/visit"
                className={`text-lg ${
                  pathname === "/visit"
                    ? "opacity-100 text-md font-semibold text-white"
                    : "opacity-70"
                }`}
              >
                Visit
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/tradeshow"
                className={`text-lg ${
                  pathname === "/tradeshow"
                    ? "opacity-100 text-md font-semibold text-white"
                    : "opacity-70"
                }`}
              >
                <span className=" text-[#FFFFFF] px-1 relative block">
                  PLASTINDIA 2026
                </span>
                <span
                  style={{ fontSize: 8 }}
                  className="absolute rounded-sm bottom-3 -right-2 transform -translate-x-1/2 bg-[#EE0000] text-[#EDEDED] mb-4 px-2 py-0"
                >
                  New
                </span>
              </Link>
            </li>
            <></>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/foundation">
                <h2 className={linkClass("/foundation")}>
                  Plastindia Foundation
                </h2>
              </Link>
              {isDropdownVisible && (
                <div className="dropdown-menu absolute top-full rounded-t-3xl rounded-b-xl left-0 bg-[#27A65B] px-3 text-black shadow-lg z-50">
                  <ul>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-52 pt-4 p-2">
                      <Link href="/foundation">
                        <h2 className={linkClass("/foundation")}>Foundation</h2>
                      </Link>
                    </li>

                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-52 p-2">
                      <Link href="/about-plastindia-2023">
                        <h2 className={linkClass("/foundation")}>
                          PLASTINDIA 2023
                        </h2>
                      </Link>
                    </li>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-52 p-2">
                      <Link href="/about-president">
                        <h2 className={linkClass("/foundation")}>
                          President&apos;s Message
                        </h2>
                      </Link>
                    </li>

                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-52 p-2">
                      <Link href="/about-key-members">
                        <h2 className={linkClass("/foundation")}>
                          Managing Committee
                        </h2>
                      </Link>
                    </li>

                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-52 p-2">
                      <Link href="/secretariat">
                        <h2 className={linkClass("/foundation")}>
                          Secretariat
                        </h2>
                      </Link>
                    </li>

                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-96 p-2">
                      <Link href="/about-members-association">
                        <h2 className={linkClass("/foundation")}>
                          Members of Plastindia Foundation
                        </h2>
                      </Link>
                    </li>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] mb-3 w-52 p-2">
                      <Link href="/about-committee">
                        <h2 className={linkClass("/foundation")}>Committees</h2>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnterPublications}
              onMouseLeave={handleMouseLeavePublications}
            >
              <Link href="/publications-insights">
                <h2 className={linkClass("/publications-insights")}>
                  Publications
                </h2>
              </Link>
              {isDropdownVisiblePublications && (
                <div role="menu" aria-hidden={!isDropdownVisiblePublications}className="dropdown-menu absolute top-full rounded-t-3xl rounded-b-xl left-0 bg-[#27A65B] px-3 text-black shadow-lg z-50">
                  <ul>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-80 pt-4 p-2">
                      <Link href="/publications-insights">
                        <h2 className={linkClass("/publications-insights")}>
                          Insights
                        </h2>
                      </Link>
                    </li>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-80 p-2">
                      <Link href="/publications-practice-the-3rs">
                        <h2 className={linkClass("/publications-insights")}>
                          Practice 3R&apos;s
                        </h2>
                      </Link>
                    </li>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-80 p-2">
                      <Link href="/publications-industries-status">
                        <h2 className={linkClass("/publications-insights")}>
                          Plastic Industry Status Report
                        </h2>
                      </Link>
                    </li>
                    <li className="hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-80 pb-4 p-2">
                      <Link href="/plastic-recycling-handbook">
                        <h2 className={linkClass("/publications-insights")}>
                          Plastic Recycling Handbook{" "}
                        </h2>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            
            <li
              className="relative"
              onMouseEnter={handleMouseEnterResources}
              onMouseLeave={handleMouseLeaveResources}
            >
              <h2 className="pointer">
                <h2 className={linkClass("/resources")}>Resources</h2>
              </h2>
              {isDropdownVisibleResources && (
                <div className="dropdown-menu absolute top-full rounded-t-3xl rounded-b-xl left-0 bg-[#27A65B] px-3 text-black shadow-lg z-50 ">
                  <ul>
                    <li className="pt-4 p-2 capitalize hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B] w-[180px] ">
                      <Link href="/blogs">
                        <h2 className={linkClass("/blogs")}>Blogs</h2>
                      </Link>
                    </li>

                    {/* <li className="capitalize hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B]  w-[180px]  p-2">
                      <Link href="/news-and-events">
                        <h2 className={linkClass("/news-and-events")}>
                          News And Events
                        </h2>
                      </Link>
                    </li> */}

                    <li className=" hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B]  w-[180px]  p-2">
                      <Link href="/impact-of-plastics">
                        <h2 className={linkClass("/impact-of-plastics")}>
                          Impact of Plastics
                        </h2>
                      </Link>
                    </li>
                    <li className="capitalize hover:text-gray-200 text-white opacity-70 hover:opacity-100 bg-[#27A65B]  w-[180px]  p-2">
                      <Link href="/download-centre">
                        <h2 className={linkClass("/download-center")}>
                          Download Centre
                        </h2>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/photos-and-videos">
                <h2 className={linkClass("/photos-and-videos")}>
                  Media Center
                </h2>
              </Link>
            </li>

          </ul>

          <div className="text-right my-[2px] ">
            <Link
              href={"http://exhibitors.plastindia.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="  border-2 border-white  text-white px-4 py-3 rounded-full ">
                Register as Exhibitor
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
            <Link href={"/visit#visit-brewing"}>
              <button className="ml-4  bg-[#0E4E28]  text-white px-4 py-3 rounded-full border-2  border-[#0E4E28]">
                Register as Visitor
                <span>
                  <ArrowOutwardIcon className="ml-2 text-white w-5 h-5" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <MobileNavigation />
      )}
    </nav>
  );
};
