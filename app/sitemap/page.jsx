"use client"
import TopNavigation from "../../components/TopNavigation";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <section className="bg-white h-screen font-satoshi ">
        <TopNavigation />
    
        <div className="container space-y-4 grid grid-cols-1 lg:grid-cols-4 px-12  mx-auto p-4">
          <nav className=" ">
          <h2 className="text-black text-2xl">Home PLASTINDIA</h2>

            <div>
              <Link href="/">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Home
                </h3>
              </Link>
              <Link href="/exhibit">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Exhibit
                </h3>
              </Link>
              <Link href="/visit">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Visit
                </h3>
              </Link>
            

              <Link href="/contact-us">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Contact Us
                </h3>
              </Link>

    

              <Link href="/photos-and-videos">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Photos and Videos
                </h3>
              </Link>
            </div>

          

            <div>
              <h2 className="text-black text-2xl">Publications</h2>

              <Link href="/publications-insights">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Publication Insight
                </h3>
              </Link>

              <Link href="/publications-industries-status">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  publications industries status
                </h3>
              </Link>

              <Link href="/plastic-recycling-handbook">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Plastic Recycling Handbook
                </h3>
              </Link>

              <Link href="/publications-practice-the-3rs">
                <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Publications-3R&apos;s
                </h3>
              </Link>

              
            </div>
          </nav>

          <div>
          <h2 className="text-black text-2xl">About PLASTINDIA <br /> Foundation</h2>

          <Link href="/foundation">
              <h3 className="text-blue-500 mt-4 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Foundation
              </h3>
            </Link>
            <Link href="/about-key-members">
              <h3 className="text-blue-500 mt-4 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About Key Members
              </h3>
            </Link>
            <Link href="/about-members-association">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About Members Association
              </h3>
            </Link>

            <Link href="/about-past-office-bearers">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About Past Office Bearers
              </h3>
            </Link>

            <Link href="/about-president">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About President
              </h3>
            </Link>
            <Link href="/about-plastindia">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About PLASTINDIA
              </h3>
            </Link>

            <Link href="/about-plastindia-2023">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About PLASTINDIA 2023
              </h3>
            </Link>
            <Link href="/about-committee">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About Committee
              </h3>
            </Link>
          </div>

          <nav>
          <h2 className="text-black text-2xl">Tradeshow <br /> PLASTINDIA 2023</h2>

            <Link href="/tradeshow">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Overview
              </h3>
            </Link>

            <Link href="/nec">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Nec
              </h3>
            </Link>
            <Link href="/history-tradeshow">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                History Tradeshow
              </h3>
            </Link>
            <Link href="/organizers">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Organizers
              </h3>
            </Link>

            <Link href="/exhibition-details">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Exhibition Details
              </h3>
            </Link>

            <Link href="/about-tradeshow">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                About Tradeshow
              </h3>
            </Link>

            <Link href="/sustainability-tradeshow">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Sustainability
              </h3>
            </Link>
            <Link href="/concurrent-events">
              <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                Concurrent events
              </h3>
            </Link>
          </nav>

          <div>
                <h2 className="text-black text-2xl">Blog</h2>

                <Link href="/blog">
                  <h3 className="text-blue-500 mt-4 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                    Blog
                  </h3>
                </Link>
                <Link href="/individual-blogs">
                  <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                    Individual Blogs
                  </h3>
                </Link>
                <Link href="/impact-of-plastics">
                  <h3 className="text-blue-500 hover:text-blue-700 underline underline-offset-4 cursor-pointer">
                  Impact of Plastics
                  </h3>
                </Link>
              </div>
        
        </div>
      </section>
    </>
  );
}
