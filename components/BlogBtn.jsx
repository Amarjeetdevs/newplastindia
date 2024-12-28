import React from "react";

export default function BlogBtn({ text, active, categorySlug, onClick }) {
  return (
    <>
      <button
        className={`lg:px-7 md:px-5 py-3 rounded-full font-satoshi-medium md:text-md lg:text-lg focus:outline-none md:mx-1.5 lg:mx-3  mb-3 ${
          active ? "bg-[#032624] text-white" : "bg-[#EAEAEA] text-[#959595]"
        }`}
        onClick={() => onClick(categorySlug)}
      >
        {text}
      </button>
    </>
  );
}
