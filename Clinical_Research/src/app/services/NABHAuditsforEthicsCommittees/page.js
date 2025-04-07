"use client";

import React, { useEffect, useState } from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the code only runs on the client
  }, []);

  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="NABH Audits for Ethics Committees"
        homePageUrl="/"
        homePageText="Home"
        activePageText="NABH Audits for Ethics Committees"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="services-details-area ptb-10">
        <div className="container mx-auto px-4">
          <div className="services-details-overview flex flex-col md:flex-row items-center">
            <div className="services-details-desc flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">NABH Audits for Ethics Committees</h1>
              <p className="mt-4" style={{fontSize:"16px"}}>
                Our NABH audits ensure that ethics committees in hospitals and research institutions comply with the stringent requirements set by the NABH.
              </p>
            </div>

            <div className="services-details-image flex-1 mt-4 md:mt-0">
              {isClient && (
                <Image
                  src="/images/services-details/1.png"
                  alt="Ethics Committee Training"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>

          <div className="services-details-overview mt-10">
            <div className="services-details-image">
              {isClient && (
                <Image
                  src="/images/services-details/2.png"
                  alt="Ethics Committee Overview"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              )}
            </div>

            <div className="services-details-desc">
              <h2 className="text-xl font-semibold mt-4">What is NABH?</h2>
              <p style={{fontSize:"16px"}}>
                The National Accreditation Board for Hospitals & Healthcare Providers (NABH) sets standards for hospital and healthcare quality, including ethics committee compliance.
              </p>

              <h2 className="font-bold mt-4">Audit Focus Areas</h2>
              <ul className="list-disc pl-5" style={{fontSize:"16px"}}>
                <li>Member Roles & Responsibilities </li>
                <li>Ethical Review Procedures </li>
                <li>Documentation Compliance </li>
                <li>Regulatory Adherence </li>
                <li>Informed Consent Processes </li>
              </ul>
            </div>
          </div>

          <div className="mt-80 text-center" style={{ marginTop: "80px" }}>
            <h2 className="text-xl font-bold">Comprehensive NABH Audit Services</h2>
            <p className="mt-4 text-gray-700" style={{fontSize:"16px" , color:"black"}}>
              We assess your committees compliance with NABH standards and provide detailed recommendations for maintaining accreditation.
            </p>
          </div>

          <div className="mt-10 text-center" style={{ marginTop: "60px" }}>
            <h2 className="text-xl font-bold">Get Ready for NABH Audits</h2>
            <p className="mt-4 text-gray-700" style={{ color: "black" ,fontSize:"16px"}}>
              Prepare your ethics committee for NABH accreditation with our expert audit services.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // height: "100vh", // Full viewport height for vertical centering
              }}
            >
              <Link
                href="/contact"
                className="p-2 mt-4 inline-block"
                style={{
                  fontSize: "16px",
                  fontFamily: "Regular400",
                  backgroundColor: "red",
                  color: "white",
                  width: "220px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                  marginBottom: "40px",
                  textAlign: "center", // Ensures text is centered within the button
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Schedule NABH Audit
              </Link>
            </div>

          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
