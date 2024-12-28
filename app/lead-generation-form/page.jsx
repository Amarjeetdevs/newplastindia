"use client";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { postLeadGenerationData } from "@/utils/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    designation: "",
    mobileNumber: "",
    location: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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

  const validateFormData = (data) => {
    const requiredFields = [
      { field: "fullName", message: "Full Name is required" },
      { field: "email", message: "Email is required" },
      { field: "organisation", message: "Organisation Name is required" },
      { field: "designation", message: "Designation is required" },
      { field: "mobileNumber", message: "Mobile Number is required" },
      { field: "location", message: "Location is required" },
    ];

    for (let { field, message } of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        toast.error(message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(data.mobileNumber)) {
      toast.error("Mobile Number must be a 10-digit number", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData(formData)) {
      return;
    }
    try {
      const response = await postLeadGenerationData(formData);
      if (response) {
        setIsPopupVisible(true);
        setFormData({
          fullName: "",
          email: "",
          organisation: "",
          designation: "",
          mobileNumber: "",
          location: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast.error("Error submitting the form. Please try again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    }
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };
  const SubHeadingText = {
    pageref: "Home > Visit > Register as Visitor",
    title: "Visit",
    description:
      "Want to Experience the Future of Plastics at PLASTINDIA 2026?",
    content:
      "Share your details, and we’ll notify you as soon as registration begins. Don’t miss the chance to connect with industry leaders and explore the latest innovations.",
  };
  return (
    <div className="bg-[#F7F7F7]  font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className=" lg:w-1/2 ">
          <h3 className="text-start  hidden lg:block font-satoshi font-semibold text-[#8F9290] text-md pb-4 px-10 pt-4">
            {SubHeadingText?.pageref}
          </h3>
          <div className="lg:px-10 font-satoshi flex  flex-col px-6 py-5">
            <div className=" flex flex-col">
              <h2 className="text-start  text-md font-bold text-[#029D3F]">
                {SubHeadingText?.title}
              </h2>
              <h2 className="text-start  font-satoshi text-3xl lg:text-[40px]  text-[#3C379C]">
                {SubHeadingText?.description}
              </h2>
            </div>
            <div className="flex flex-col text-lg  lg:mt-8 text-[#3C3E3D] ">
              <h2
                className="text-start text-sm lg:text-[18px] lg:pt-0  pt-5 font-satoshi"
                dangerouslySetInnerHTML={{ __html: SubHeadingText?.content }}
              ></h2>
              <h2 className="text-start text-sm lg:text-[18px] pt-5 font-satoshi font-bold">
                <span className="text-[#FF0000]">Note:</span> Entry to
                PlastIndia is a paid opportunity.
              </h2>
            </div>
          </div>
        </div>

        <div className="lg:my-16 lg:w-1/2 flex flex-col px-6 lg:px-10">
          <div className="w-full mx-auto bg-white shadow-2xl shadow-[#0327241A] rounded-2xl p-6 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col">
                <label className="px-3 text-[#363535]">
                  Add Full Name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="e.g. Jane Doe "
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                />
                <hr className="my-2 border-gray-300" />
              </div>

              <div className="mb-4">
                <label className="px-3 text-[#363535]">
                  Add Email<span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. you@xyz.com "
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                />
                <hr className="my-2 border-gray-300" />
              </div>

              <div className="mb-4">
                <label className="px-3 text-[#363535]">
                  Add Organisation Name{" "}
                  <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="text"
                  id="organisation"
                  placeholder="e.g. ABC Enterprice"
                  value={formData.organisation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                />
                <hr className="my-2 border-gray-300" />
              </div>
              <div className="mb-4">
                <label className="px-3 text-[#363535]">
                  Add Designation<span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  placeholder="e.g. CEO"
                  value={formData.designation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                />
                <hr className="my-2 border-gray-300" />
              </div>
              <div className="mb-4">
                <label className="px-3 text-[#363535]">
                  Add Mobile No. <span className="text-[#FF0000]">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  placeholder="+91 00000-00000"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                />
                <hr className="my-2 border-gray-300" />
              </div>

              <div className="mb-4 lg:mb-10">
                <label className="px-3 text-[#363535]">
                  Add Location<span className="text-[#FF0000]">*</span>
                </label>
                <textarea
                  id="location"
                  rows="3"
                  placeholder="e.g. Delhi, India"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
                ></textarea>
                <hr className="my-2 border-gray-300" />
              </div>

              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#032624] text-white text-lg py-3 px-20 hover:cursor-pointer rounded-full"
                >
                  Send Message
                </button>
                <ToastContainer />
              </div>
            </form>
            {isPopupVisible && (
              <div className="font-satoshi fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="relative bg-white rounded-lg shadow-lg py-10 lg:py-[50px] px-6 lg:px-[25px] lg:w-[35%] w-[80%] md:w-[60%] text-center">
                  <button
                    onClick={closePopup}
                    className="absolute top-[-10px] md:top-0 right-[14px] md:right-6 lg:top-[-11px] lg:right-4 text-gray-400 hover:text-gray-700 text-4xl lg:text-[40px]"
                  >
                    ×
                  </button>
                  <h2 className="leading-[28px] lg:leading[38px] text-[20px] lg:text-[32px] font-bold text-[#363535] mb-3">Thank You for Your Interest!</h2>
                  <p className="text-[#939393] text-[14px] lg:text-[16px] mb-4 ">Our team will get in touch with you as soon as the registration process begins. 
                    <br /> <br /> <span className="font-[600] text-black">In the meantime, explore more about the event:</span></p>

                  <Link href={"/tradeshow"}>
                    <button className="ml-4 text-[16px] lg:text-[18px] font-bold leading-[34px] bg-[#0E4E28]  text-white px-5 py-3 lg:py-[15px] lg:px-[25px] rounded-full border-2  border-[#0E4E28]">
                      Discover PlastIndia 2026
                      <span>
                        <ArrowOutwardIcon className="ml-2 text-white w-5 h-5 lg:w-5 lg:h-6 " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
