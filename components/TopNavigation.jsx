import React from "react";
import Image from "next/image";
import logo from "../assets/PI Logo Final.png";
import "./styles.css";
import Link from "next/link";
export default function TopNavigation() {
  return (
    <div
      className="flex flex-row lg:flex-row md:flex-row w-full justify-between pl-4 lg:pl-10  py-4 md:py-0">
      <div className="">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="w-[32em] lg:w-[16em] lg:py-1 md:py-3"
          />
        </Link>
      </div>


      <div className="lg:-pr-2 text-end  overflow-hidden md:text-right flex flex-row  md:flex-row items-center py-0 lg:py-4 md:py-0">
        <p className="text-md lg:text-3xl  hidden lg:block    tracking-tight max-w-xs   text-4xl text-[#3C3E3D] font-bold   lg:-inset-2  md:pr-4 font-satoshi-bold">
          5th-10th Feb, 2026
        </p>


        <div id="w-1/3 scroll-container  " className="lg:hidden block">
          <div id="scroll-text" className="text-md font-semibold text-[#042523]">
            <span className="text-md font-bold lg:hidden inline">FEB 5-10</span>      12TH INTERNATIONAL PLASTICS EXHIBITION, CONFERENCE & CONVENTION

          </div>
        </div>


        <div className="ml-1 lg:mr-4 lg:mt-0">
          <p className="hidden lg:block text-md   md:text-md tracking-tight md:tracking-tighter pr-2 font-normal  text-[#3C3E3D] ">
            12TH INTERNATIONAL
            PLASTICS
            EXHIBITION, CONFERENCE & CONVENTION
          </p>
          <p className="text-md  font-bold uppercase md:text-md text-[#3C3E3D] text-left pt-1  hidden lg:block">
            Bharat Mandapam, New Delhi India
          </p>
        </div>
      </div>
    </div>
  );
}
