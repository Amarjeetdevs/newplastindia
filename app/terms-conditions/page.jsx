"use client";
import React, { useState, useEffect } from "react";
import TopNavigation from "../../components/TopNavigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Page = () => {
  const [isSticky, setIsSticky] = useState(false);
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
const termsandcondition=` This document outlines the terms and conditions ("Agreement")
          governing the use of the website, services, events, and activities
          provided by Plastindia Foundation ("the Organization"). By accessing
          or using any of Plastindia Foundation’s services, you ("the User")
          agree to comply with and be bound by these terms. If you do not agree,
          you must discontinue your use of the Organization’s services and
          website.`;
  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>

      <div className="w-full px-6 lg:px-10 py-14  pb-5 flex flex-col md:pb-20  lg:mt-0  text-[#1f1f1f] ">
        <h1 className="lg:py-24 text-3xl lg:text-6xl leading-9 lg:leading-12 text-center font-bold font-satoshi">
          Terms & Conditions
        </h1>

        <p className="text-sm lg:text-lg lg:pb-8 pb-5 ">
         {termsandcondition}
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold text-[#1f1f1f] ">
          1. Introduction
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation is a non-profit organization dedicated to
          promoting the growth, development, and sustainability of the plastics
          industry. The Foundation organizes events, exhibitions, research
          initiatives, and capacity-building activities to achieve its
          objectives. These terms govern all interactions between the User and
          Plastindia Foundation.
        </p>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          2. Acceptance of Terms
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            By accessing the Organization’s website or engaging in any services
            provided by Plastindia Foundation, you acknowledge that you have
            read, understood, and agreed to these terms and any additional
            guidelines or policies referenced herein.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            To provide updates about our initiatives, events, and programs.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          3. User Eligibility and Responsibilities
        </h1>

        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Eligibility:</strong>Users must be 18 years or older to
            access the website or participate in events and services unless
            explicitly stated otherwise.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Accurate Information: </strong>The User is responsible for
            ensuring that all information provided to Plastindia Foundation is
            accurate, complete, and up-to-date.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Prohibited Activities: </strong>Users are prohibited from
            engaging in any activities that may:
            <ul className="list-disc pl-10">
              <li className="pb-2 text-sm lg:text-lg">
                Violate any laws or regulations.
              </li>
              <li className="pb-2 text-sm lg:text-lg">
                Harm or interfere with the operations of Plastindia Foundation’s
                website or services.
              </li>
              <li className="pb-2 text-sm lg:text-lg">
                Exploit, misuse, or infringe upon the intellectual property or
                proprietary rights of Plastindia Foundation.
              </li>
            </ul>
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          4. Services Provided
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation provides the following services:
        </p>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            Organization of exhibitions, events, and seminars related to the
            plastics industry.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Dissemination of research, studies, and publications aimed at
            advancing industry knowledge.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Networking opportunities for stakeholders in the plastics industry.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Educational and capacity-building programs.
          </li>
        </ul>
        <p className="pb-2 text-sm lg:text-lg">
          The Foundation may modify, suspend, or discontinue any service at its
          sole discretion and without prior notice.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          5. Intellectual Property Rights
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            All content, materials, and intellectual property available on
            Plastindia Foundation’s website, including logos, trademarks, text,
            images, and multimedia, are owned by Plastindia Foundation unless
            otherwise stated.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Users are prohibited from copying, reproducing, distributing, or
            using any content for commercial purposes without prior written
            consent.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          6. Use of the Website
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            The User agrees to use Plastindia Foundation’s website solely for
            lawful purposes aligned with the Organization’s objectives.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Unauthorized activities, such as hacking, data mining, or
            introducing harmful software, are strictly prohibited.
          </li>
        </ul>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          7. Third-Party Links and Services
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation’s website may contain links to third-party
          websites or services for informational purposes. The Foundation does
          not endorse or assume responsibility for the content or practices of
          such third parties. Users accessing third-party links do so at their
          own risk.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          8. Limitation of Liability
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            Plastindia Foundation shall not be held liable for any direct,
            indirect, incidental, or consequential damages arising out of the
            use or inability to use the website, services, or events.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            The Organization is not responsible for errors, omissions, or
            inaccuracies in the content provided on its website or promotional
            materials.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Any technical issues that disrupt services will be addressed
            promptly; however, no guarantees are made regarding uninterrupted
            service.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          9. Confidentiality and Data Protection
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            Plastindia Foundation respects the privacy of its Users. The
            collection, use, and storage of personal data are governed by the
            Foundation’s Privacy Policy.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Users agree not to disclose any confidential information obtained
            through their engagement with the Foundation unless required by law.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          10. Event Participation
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Registration:</strong> Users participating in events
            organized by Plastindia Foundation must register as per the
            guidelines provided.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Code of Conduct:</strong> Participants are expected to
            adhere to professional and ethical behavior during events.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Cancellations and Refunds:</strong> In case of cancellation
            of an event by Plastindia Foundation, registered participants will
            be notified, and refunds (if applicable) will be processed as per
            the stated policy.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          11. Force Majeure
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation shall not be held liable for failure to perform
          any of its obligations due to events beyond its reasonable control,
          including but not limited to acts of God, natural disasters, strikes,
          governmental actions, or technical failures.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          12. Indemnification
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation shall not be held liable for failure to perform
          any of its obligations due to events beyond its reasonable control,
          including but not limited to acts of God, natural disasters, strikes,
          governmental actions, or technical failures.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          13. Governing Law and Jurisdiction
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          This Agreement is governed by and construed in accordance with the
          laws of India. Any disputes arising under these terms shall be
          resolved in the courts of Mumbai, India.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          14. Termination
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation reserves the right to terminate or restrict
          access to its website or services for Users who violate these terms or
          engage in prohibited activities.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          15. Contact Information
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          For any questions, concerns, or clarifications regarding these terms,
          please contact:
        </p>
        <h2>Plastindia Foundation</h2>
        <p className="pb-2 text-sm lg:text-lg">401, Landmark B, Suren Road,</p>
        <p className="pb-2 text-sm lg:text-lg">
          Off Andheri Kurla Road, Andheri (East),
        </p>
        <p className="pb-2 text-sm lg:text-lg">Mumbai - 400093, India</p>
        <p className="pb-2 text-sm lg:text-lg">
          <strong>Email:</strong> contact@plastindia.org
        </p>
        <p className="pb-2 text-sm lg:text-lg">
          <strong>Phone:</strong> +91 22 26832911/15
        </p>
      </div>
      <div className="text-[#3C3E3D] w-full px-6 lg:px-10 pb-5 flex flex-col  lg:pb-0 lg:mt-0 "></div>
      <Footer />
    </div>
  );
};

export default Page;
