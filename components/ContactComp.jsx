import React from "react";
import ContactForm from "./ContactForm";

import './styles.css';
export default function ContactComp() {

 

  return (
    <div className="mt-16 px-6  lg:px-10">
      <div
        
        className="relative rounded-xl lg:rounded-[50px] w-full h-[450px] lg:h-[750px] overflow-hidden rounded-br-3xl rounded-tl-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=
          Plastindia+Foundation,+401%2FB,+Landmark,+Suren+Rd,+opp.+Andheri+-+Kurla+Road,+Andheri+East,+Mumbai,+Maharashtra+400093
          "
          className="w-full h-full border-0"
          allowFullScreen
          title="Business Centre Pragati Maidan"
        />
      </div>
      <div className="lg:absolute lg:top-[680px] lg:right-[100px] flex flex-row items-center lg:gap-4  top-auto right-auto lg:mt-0 mt-10 gap-8">
  <ContactForm />
</div>

      <div
      className="ml-0 mb-24">
        <h3
      id="address-icon"
        className="text-black pl-16 mt-6 pb-2 pt-2">
        401, Landmark B, Suren Road, Off Andheri Kurla Road,
          <br />
          Andheri (East), Mumbai -400093 India
        </h3>
        <h3
        id="email-icon"
        className="text-black   h-16 pl-16 mt-0 pb-2 pt-5"
  
        >CONTACT@PLASTINDIA.ORG</h3>
        <h3 
        id="contact-icon"
        className="text-black pl-16 h-16 pb-2 pt-5">
        
          +91 22 26832911/14</h3>
      </div>
    </div>
  );
}
