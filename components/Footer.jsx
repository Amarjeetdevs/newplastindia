import React from "react";
import Image from "next/image";
import footerlogo from "../assets/FooterIcons/Plastindia_2026_logo.png";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import icon1 from "../assets/FooterIcons/twitter_logo.svg";
import icon2 from "../assets/FooterIcons/Group (2).svg";
import icon3 from "../assets/FooterIcons/Group.svg";
import icon4 from "../assets/FooterIcons/Instagram logo.svg";
import icon5 from "../assets/FooterIcons/Vector.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-[#F8F4F1] font-satoshi text-[#3C3C3C] pb-5 pt-20 px-6  lg:px-10">
        <nav>
          <h6 className="text-[#3C3E3D] text-4xl lg:text-[3.1em]">
            Are you ready for
          </h6>
          <div className="flex">
            <Link href={"/"}>
              <Image
                src={footerlogo}
                alt="FOOTER LOGO"
                // className="h-[6em] w-[22em] xs:-ml-6 lg:-ml-0 lg:h-[6em] lg:w-[18em] md:h-[5em] md:w-[22em] sm:h-[4em] sm:w-[20em] xs:h-[3em] xs:w-[16em] xl:h-[6em] xl:w-[24em]"
                className="w-80 mt-4"
              />
            </Link>

            <h6 className="lg:text-4xl text-[3.4em] mt-4 -ml-0 relative -right-1 top-1 text-[#3C3E3D] font-satoshi">
              ?
            </h6>
          </div>
          <h2 className="text-[16px] py-3 text-[#3C3C3C] w-[20em]">
            India&apos;s biggest plastic trade show is coming back.
          </h2>
          <Link href="/visit">
            <h2 className="text-md pb-1 underline underline-offset-4 text-gray-900 font-semibold">
              Join us as a Visitor{" "}
              <span>
                <ArrowOutwardIcon className="w-4 h-4 text-[#3C3E3D]" />
              </span>
            </h2>
          </Link>
          <Link href="/exhibit">
            <h2 className="text-md mb-20 underline underline-offset-4 text-gray-900 font-semibold">
              Join us as an Exhibitor{" "}
              <span>
                <ArrowOutwardIcon className="w-4 h-4 text-[#3C3E3D]" />
              </span>
            </h2>
          </Link>
        </nav>

        <nav className="-mt-20 lg:-mt-0">
          <h6 className="text-[15.5px] font-semibold  pb-2 text-[#3C3C3C]">
            Menu
          </h6>
          <Link href="/">
            <h2 className="link link-hover text-[15.5px] pb-1 ">Home</h2>
          </Link>
          <Link href="/exhibit">
            <h2 className="link link-hover text-[15.5px] pb-1 ">Exhibit</h2>
          </Link>
          <Link href="/visit">
            <h2 className="link link-hover text-[15.5px] pb-1 ">Visit</h2>
          </Link>

          <Link href="/tradeshow">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              PLASTINDIA 2026
            </h2>
          </Link>

          {/* <Link href="/blog">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              Industry Insights
            </h2>
          </Link> */}

          <Link href="/photos-and-videos">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              Photos & Videos
            </h2>
          </Link>

          <Link href="/faq">
            <h2 className="link link-hover text-[15.5px] pb-1 ">Faq&apos;s</h2>
          </Link>

          <Link href="/contact-us">
            <h2 className="link link-hover text-[15.5px] pb-1 ">Contact us</h2>
          </Link>
        </nav>

        <nav>
          <Link href="/foundation">
            <h6 className="text-[15.5px] font-semibold pb-2 text-[#3C3C3C]">
              Plastindia Foundation
            </h6>
          </Link>
          <Link href="/foundation">
            <h2 className="link  link-hover text-[15.5px] pb-1">Foundation</h2>
          </Link>
          <Link href="/about-president">
            <h2 className="link link-hover text-[15.5px] pb-1">
              President&apos;s Message
            </h2>
          </Link>

          <Link href="/about-key-members">
            <h2 className="link link-hover text-[15.5px] pb-1">
              Managing Committee
            </h2>
          </Link>
          <Link href="/secretariat">
            <h2 className="link link-hover text-[15.5px] pb-1">Secretariat</h2>
          </Link>
          <Link href="/about-members-association">
            <h2 className="link link-hover text-[15.5px] pb-1">
              Members of Plastindia Foundation
            </h2>
          </Link>
          <Link href="/about-past-office-bearers">
            <h2 className="link link-hover text-[15.5px] pb-1">
              Past Office Bearers
            </h2>
          </Link>

          <Link href="/about-plastindia-2023">
            <h2 className="link link-hover text-[15.5px] pb-1">
              PLASTINDIA 2023
            </h2>
          </Link>

          <Link href="/about-committee">
            <h2 className="link link-hover text-[15.5px] pb-1"> Committees</h2>
          </Link>
        </nav>

        <nav>
          <h6 className="text-[15.5px] font-semibold  pb-2 text-[#3C3C3C]">
            Knowledge Hub
          </h6>
          <Link href="/publications-practice-the-3rs">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              Practice 3 R&apos;s
            </h2>
          </Link>
          <Link href="/publications-insights">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              INSIGHTS – Plastics <br /> Industry in Focus
            </h2>
          </Link>
          <Link href="/publications-industries-status">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              Plastic Industry Status <br /> Report
            </h2>
          </Link>

          <Link href="/plastic-recycling-handbook">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              Plastic Recycling Handbook
            </h2>
          </Link>
        </nav>

        <nav>
          <h6 className="text-[15.5px] font-semibold  pb-2 text-[#3C3C3C]">
            Address
          </h6>
          <Link href="mailto:contact@plastindia.org">
            <h2 className="link link-hover text-[15.5px] pb-1">
              contact@plastindia.org
            </h2>
          </Link>

          <Link
            href="https://maps.app.goo.gl/uunQDqiE2kyABPAZ7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="link link-hover text-[15.5px] leading-7 pb-1 ">
              401, Landmark B, Suren <br /> Road, Off Andheri Kurla <br /> Road,
              Andheri (East), <br /> Mumbai -400093 India
            </h2>
          </Link>
          <Link href="#">
            <h2 className="link link-hover text-[15.5px] pb-1 ">
              +91 22 26832911/15
            </h2>
          </Link>

          <h2 className="link link-hover text-[15.5px] pb-1 ">
            <span className="flex flex-row items-center justify-between gap-2">
              <Link
                href="https://x.com/Pif_PLASTINDIA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon1} alt="Twitter" width="30" height="30" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCF6I_V3QFOC72VuG_R6EkEQ/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon2} alt="YouTube" />
              </Link>
              <Link
                href="https://www.facebook.com/plastindiaorg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon3} alt="Facebook" />
              </Link>
              <Link
                href="https://www.instagram.com/plastindiafoundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon4} alt="Instagram" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/plastindia-foundation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon5} alt="LinkedIn" />
              </Link>
            </span>
          </h2>
        </nav>

        
      </footer>

      <hr className="border-t-2  border-gray-300" />

      <div className="px-10  bg-[#F8F4F1]">
        <div className="flex flex-col gap-5 lg:flex-row pb-6 pt-6 justify-between items-center">
          <h5 className="text-md text-[#3C3C3C]  font-satoshi">
            Powered by{" "}
            <span className="text-[#016DA3] underline underline-offset-2">
              <a href="https://nothuman.ai" target="_blank">
                NotHuman.AI
              </a>
            </span>
          </h5>
          <h5 className=" text-md text-[#3C3C3C] text-center font-satoshi">
            <Link href={"/privacy-policy"}> Privacy  Policy</Link>
          </h5>
          <h5 className=" text-md text-[#3C3C3C] text-center font-satoshi">
            <Link href={"https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/QUALITY_POLICY_FINAL_542f71d8e0.pdf"} target="_blank"> Quality Policy</Link>
          </h5>
          <h5 className=" text-md text-[#3C3C3C] text-center font-satoshi">
            <Link href={"/terms-conditions"}>Terms & Conditions</Link>
          </h5>
          <h5 className=" text-md text-[#3C3C3C] text-center font-satoshi">
            Copyright &copy; 2024 Plastindia Foundation. All Rights Reserved.
          </h5>
        </div>
      </div>
    </>
  );
}
