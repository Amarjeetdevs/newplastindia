import React from "react";
import Image from "next/image";
import img from "../assets/VISITORS/Frame 587 (1).png";
import img2 from "../assets/VISITORS/Frame 587 (2).png";
import img3 from "../assets/VISITORS/Frame 587 (3).png";
import img4 from "../assets/VISITORS/Frame 587 (4).png";
import img5 from "../assets/EXHIBITOR/Frame 587.svg";
import img6 from "../assets/VISITORS/Group.png";
import imgVisa from "../assets/VISITORS/eVISA (1).svg";

import ArrowOutward from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
export default function ReachOut({ data, value, url }) {
  const handleDownload = (e) => {
    e.preventDefault();

    const files = ["/PI Logo Final (1).png", "/PI Logo Final (2).png"];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.setAttribute("download", file.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const visaUrl =
    "https://docs.google.com/presentation/d/1XZPCUtk5TsBWzzXhli_hIXlrPzaz1ovm/edit#slide=id.p1";
  return (
    <div className="px-6  lg:px-10 font-satoshi bg-[#032624]">
      <h2 className="lg:text-[2.65em] text-4xl lg:text-start text-center   pt-10 text-white">
        {data.title}
      </h2>
      <h3 className=" text-sm lg:text-md lg:text-start text-center   font-extralight pb-16 opacity-80 text-[#FFFFFF]">
        {data.description}
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-2 justify-between  ">
        <div className="flex flex-col w-full py-7 items-center  mt-4 lg:mt-0 lg:border-r-2 lg:border-b-2 border-r-2 border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Image
              src={img2}
              alt="Image 1"
              className="lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start ml-4">
              <h2 className="text-sm lg:text-lg text-start text-white">
                Register as a {value}:
              </h2>
              <Link href={url}>
                <h2 className="text-start text-white text-sm lg:text-lg pt-2 relative">
                  <span className="underline underline-offset-4">
                    Register online
                  </span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 items-center mt-4 lg:mt-0 lg:border-b-2 lg:border-r-2  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Image
              src={img4}
              alt="Image 1"
              className=" lg:-ml-3 lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start ml-4">
              <h2 className="text-sm lg:text-lg text-start text-white">
                Download Brochure
              </h2>
              <h2 className="text-start text-white text-sm lg:text-lg pt-2 relative">
                <a
                  href="https://plastindia-website-assets.s3.ap-south-1.amazonaws.com/Plastindia_2026_Brochure_Final_LQ_41e3bd013e_06bfb23929.pdf"
                  // download="Plastindia 2026 Brochure Final LQ.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center underline underline-offset-4"
                >
                  <span>Download</span>
                  <span className="ml-2">
                    <ArrowOutward className="w-5" />
                  </span>
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 items-center border-r-2 lg:border-b-2 lg:border-r-0 mt-2 lg:mt-0 border-[#AFAFAF33]">
          <div className="flex items-center flex-col lg:flex-row justify-center">
            <Image
              src={img6}
              alt="Image 1"
              className=" lg:mr-5 lg:w-14 pb-3 lg:pb-0 w-12"
            />
            <div className="flex flex-col items-start lg:ml-4">
              <h2 className="text-sm lg:text-lg text-start text-white">
                Connect with us:
              </h2>
              <Link
                href={"https://wa.me/918051305305?text=Hi"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 class="text-start text-white text-sm lg:text-lg pt-2 relative">
                  <span className="underline underline-offset-4">Whatsapp</span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 ml-6 lg:ml-0 items-center  lg:border-b-2 lg:border-r-2  mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center mr-10 justify-center">
            <Image
              src={img3}
              alt="Image 1"
              className=" lg:-ml-3 lg:mx-5 lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start mr-8 lg:mr-10 ">
              <Link href={"/faq"}>
                <h2 className="text-sm lg:text-lg text-start text-white">
                  Explore FAQs
                </h2>
                <h2 class="text-start text-white text-sm lg:text-lg pt-2 relative">
                  <span class="underline underline-offset-4">FAQs</span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 items-center  border-r-2 lg:border-b-2 mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Image
              src={img5}
              alt="Image 1"
              className=" lg:ml-16 lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start ml-3">
              <h2 className="text-sm lg:text-lg text-start text-white">
                Download PLASTINDIA logo
              </h2>

              <h2
                onClick={handleDownload}
                className="text-start text-white text-sm lg:text-lg pt-2 cursor-pointer relative"
              >
                <span className="underline underline-offset-4">Download</span>
                <span>
                  <ArrowOutward className="w-5 ml-2" />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 items-center lg:border-b-2 border-r-0 border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <Image
              src={img}
              alt="Image 1"
              className="lg:w-20 pb-2 lg:pb-0 w-14"
            />
            <div className="flex flex-col  items-start ml-5 lg:ml-4">
              <h2 className="text-sm lg:text-lg text-start text-white">
                Reach out to us at:
              </h2>
              <h2 className="text-start text-white text-sm lg:text-lg pt-2 relative">
                <span className="underline underline-offset-4">
                  +912226832911/12/13/14
                </span>
                <span>
                  <ArrowOutward className="w-5 ml-2" />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 justify-between lg:pb-20 pb-10">
        <div className="hidden lg:flex flex-col w-full py-7 ml-6 lg:ml-0 items-center   lg:border-r-0  mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center mr-10 justify-center">
            <div className="flex flex-col items-start mr-8 lg:mr-10 "></div>
          </div>
        </div>
        <div className="flex flex-col w-full py-7 ml-6 lg:ml-0 items-center   lg:border-r-2  mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center mr-10 justify-center">
            <Image
              src={imgVisa}
              alt="Image 1"
              className=" lg:-ml-3 lg:mx-5 lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start mr-8 lg:mr-10 ">
              <Link href={visaUrl}>
                <h2 className="text-sm lg:text-lg text-start text-white">
                  E-Visa Guide
                </h2>
                <h2 class="text-start text-white text-sm lg:text-lg pt-2 relative">
                  <span class="underline underline-offset-4">View Here</span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full py-7 ml-6 lg:ml-0 items-center   lg:border-r-0  mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center mr-10 justify-center">
          <Image
              src={img}
              alt="Image 1"
              className="lg:w-20 pb-2 lg:pb-0 w-14"
            />

            <div className="flex flex-col items-start mr-8 lg:mr-10 ">
              <Link href={visaUrl}>
                <h2 className="text-sm lg:text-lg text-start text-white">
                Call us at:
                </h2>
                <h2 class="text-start text-white text-sm lg:text-lg pt-2 relative">
                  <span class="underline underline-offset-4">7045644609</span>
                  <span>
                    <ArrowOutward className="w-5 ml-2" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-full py-7 ml-6 lg:ml-0 items-center   lg:border-r-0  mt-4 lg:mt-0  border-[#AFAFAF33]">
          <div className="flex flex-col lg:flex-row items-center mr-10 justify-center">
            <div className="flex flex-col items-start mr-8 lg:mr-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
