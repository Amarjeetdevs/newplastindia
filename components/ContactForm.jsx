

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    designation: "",
    address: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = formData;

    if (!name || !email || !mobile || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    
    console.log("Form Submitted", formData);
  };

  return (
    <div
      style={{ width: 700 }}
      className="mx-auto bg-white shadow-2xl shadow-[#0327241A] rounded-2xl p-6"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Add Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          />
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Add Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          />
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            id="mobile"
            placeholder="Add Mobile Number *"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          />
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="company"
            placeholder="Add Company Name"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          />
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="designation"
            placeholder="Add Designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          />
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <textarea
            id="address"
            rows="3"
            placeholder="Add Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-white"
          ></textarea>
          <hr className="my-2 border-gray-300" />
        </div>

        <div className="mb-4">
          <textarea
            id="message"
            rows="4"
            placeholder="Add Message *"
            value={formData.message}
            onChange={handleInputChange}
            required
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
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
