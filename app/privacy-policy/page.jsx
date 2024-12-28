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

  const privacyPolicyText = `Plastindia Foundation (&quot;the Foundation&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
is committed to safeguarding the privacy of its website visitors, event participants, 
and other stakeholders (&quot;Users&quot;). This Privacy Policy outlines how we collect, use, disclose, 
and protect your personal information. By accessing our website or using our services, 
you consent to the practices described in this Privacy Policy.`;

  return (
    <div className="bg-[#FBFBFB] font-satoshi">
      <TopNavigation />
      <div className={isSticky ? "sticky top-0 z-50 bg-white shadow-md" : ""}>
        <Navigation />
      </div>

      <div className="w-full px-6 lg:px-10 py-14  pb-5 flex flex-col md:pb-20  lg:mt-0  text-[#1f1f1f] ">
        <h1 className="lg:py-24 text-3xl lg:text-6xl leading-9 lg:leading-12 text-center font-bold font-satoshi">
          Privacy Policy
        </h1>
        <h1 className="lg:pb-8 pb-5 text-lg lg:text-2xl font-bold">
          Introduction
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
        {privacyPolicyText}
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold text-[#1f1f1f] ">
          1. Information We Collect
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          We may collect the following types of information:
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          1.1 Personal Information
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            Name, email address, phone number, and mailing address.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Professional details such as company name, job title, and industry
            affiliation (if applicable).
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Information provided during event registrations, surveys, or
            correspondence.
          </li>
        </ul>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          1.2 Technical Information
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            IP address, browser type, device information, and operating system.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Usage data, such as pages visited, time spent on the website, and
            referral URLs.
          </li>
        </ul>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          1.3 Payment Information
        </h1>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            If you make payments for registrations, donations, or other
            services, we collect payment details through secure third-party
            payment gateways. Plastindia Foundation does not store sensitive
            financial information such as credit card details.
          </li>
        </ul>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          2. How We Use Your Information
        </h1>
        <p className="pb-2 text-sm lg:text-lg">We use your information for the following purposes:</p>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            To facilitate event registrations, communication, and participation.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            To provide updates about our initiatives, events, and programs.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            To improve our website and services by analyzing usage patterns and
            feedback.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            To comply with legal and regulatory obligations.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            For internal record-keeping and administrative purposes.
          </li>
        </ul>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          3. Sharing and Disclosure of Information
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          We do not sell, rent, or trade your personal information to third
          parties. However, we may share your information in the following
          circumstances:
        </p>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Service Providers:</strong> With trusted third-party vendors for
            event management, email distribution, or data analysis, strictly for
            the purposes outlined in this policy.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Legal Requirements:</strong> To comply with legal obligations,
            enforce our terms, or protect the rights and safety of Plastindia
            Foundation, its Users, or others.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Consent:</strong> When you explicitly provide consent for specific
            purposes.
          </li>
        </ul>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          4. Cookies and Tracking Technologies
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          We use cookies and similar technologies to enhance your experience on
          our website. These technologies help us:
        </p>
        <ul className="list-disc pl-10 ">
          <li className="pb-2 text-sm lg:text-lg">
            Understand how users interact with our website.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Provide personalized content and recommendations.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Track analytics and website performance.
          </li>
        </ul>
        <p className="pb-2 text-sm lg:text-lg">
          You can manage your cookie preferences through your browser settings.
        </p>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          5. Data Retention
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy or to comply with
          legal obligations. When information is no longer required, we securely
          delete or anonymize it.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          6. Data Security
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation employs industry-standard security measures to
          protect your information from unauthorized access, alteration,
          disclosure, or destruction. These measures include:
        </p>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            Secure servers and encrypted connections.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Regular security assessments and updates.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            Restricted access to personal data to authorized personnel only.
          </li>
        </ul>
        <p className="pb-2 text-sm lg:text-lg">
          While we strive to protect your information, no system can guarantee
          absolute security. Users are advised to take precautions to safeguard
          their own devices and accounts.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          7. Your Rights
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Depending on your location and applicable laws, you may have the
          following rights regarding your personal information:
        </p>
        <ul className="list-disc pl-10">
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Access and Correction:</strong> Request access to your
            personal data or correct inaccuracies.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Deletion:</strong>Request the deletion of your personal
            information, subject to legal and operational requirements.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Objection and Restriction:</strong>Object to certain data
            processing activities or request limitations on how your data is
            used.
          </li>
          <li className="pb-2 text-sm lg:text-lg">
            <strong>Data Portability: </strong>Request a copy of your data in a
            structured, machine-readable format.
          </li>
        </ul>
        <p className="pb-2 text-sm lg:text-lg">
          To exercise these rights, please contact us at privacy@plastindia.org.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          8. Third-Party Links
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Our website may contain links to external websites. Plastindia
          Foundation is not responsible for the privacy practices or content of
          these third-party websites. Users are encouraged to review the privacy
          policies of any external sites they visit.
        </p>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          9. Children’s Privacy
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Our website may contain links to external websites. Plastindia
          Foundation is not responsible for the privacy practices or content of
          these third-party websites. Users are encouraged to review the privacy
          policies of any external sites they visit.
        </p>

        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          10. International Data Transfers
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Our website may contain links to external websites. Plastindia
          Foundation is not responsible for the privacy practices or content of
          these third-party websites. Users are encouraged to review the privacy
          policies of any external sites they visit.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          11. Updates to This Privacy Policy
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          Plastindia Foundation reserves the right to update or modify this
          Privacy Policy at any time. Changes will be effective immediately upon
          posting on our website. We encourage Users to review this policy
          periodically to stay informed about our privacy practices.
        </p>
        <h1 className="lg:py-8 py-5 text-lg lg:text-2xl font-bold  ">
          12. Contact Information
        </h1>
        <p className="pb-2 text-sm lg:text-lg">
          If you have any questions, concerns, or complaints about this Privacy
          Policy or how your data is handled, please contact us at:
        </p>
        <h2>Plastindia Foundation</h2>
        <p className="pb-2 text-sm lg:text-lg">401, Landmark B, Suren Road,</p>
        <p className="pb-2 text-sm lg:text-lg">Off Andheri Kurla Road, Andheri (East),</p>
        <p className="pb-2 text-sm lg:text-lg">Mumbai - 400093, India</p>
        <p className="pb-2 text-sm lg:text-lg"><strong>Email:</strong> privacy@plastindia.org</p>
        <p className="pb-2 text-sm lg:text-lg"><strong>Phone:</strong> +91 22 26832911/15</p>
        <p className="pb-2 text-sm lg:text-lg">
          By using our website and services, you acknowledge that you have read
          and understood this Privacy Policy and agree to its terms.
        </p>
      </div>
      <div className="text-[#3C3E3D] w-full px-6 lg:px-10 pb-5 flex flex-col  lg:pb-0 lg:mt-0 "></div>
      <Footer />
    </div>
  );
};

export default Page;
