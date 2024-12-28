import React from "react";
import Image from "next/image";

export default function Card({ cards, subtitle }) {
  return (
    <section className=" px-8  mb-12 lg:mb-0 lg:px-10 font-satoshi ">
      <h2 className=" text-[#3C3E3D] text-4xl lg:text-[2.65em]   mt-8 lg:mt-20">
        {subtitle.title}
      </h2>
      <h3
        className="lg:text-md text-sm lg:pt-0 pt-1 lg:pb-0 pb-10   lg:w-3/5  text-[#032624]"
        dangerouslySetInnerHTML={{ __html: subtitle.description }}
      ></h3>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 lg:pb-20 md:pb-20 pb-12 gap-10
       lg:mt-8"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-[#E8E6DD] h-96  lg:w-auto md:w-auto shadow-sm rounded-3xl"
          >
            <figure>
              <Image className="" src={card.imgSrc} alt="Shoes" />
            </figure>
            <div className="card-body text-[#686868] -mx-3">
              <h2
                style={{ fontSize: 18 }}
                className="card-title font-satoshi text-[#3C3E3D]"
              >
                {card.title}
              </h2>
              <p className="text-sm font-satoshi">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
