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
        pageTitle="Clinical Trial Site Monitoring"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Clinical Trial Site Monitoring"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="services-details-area ptb-10 md:ptb-20">
        <div className="container mx-auto px-4">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Clinical Trial Site Monitoring for Ongoing Compliance</h1>
              <p className="mt-4 text-sm md:text-base" style={{fontSize:"16px"}}>
                Our independent monitoring services ensure that clinical trial sites
                comply with all regulatory requirements and maintain data integrity
                throughout the trial.
              </p>
            </div>

            <div className="services-details-image">
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

          <div className="services-details-overview mt-8">
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
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">Why Site Monitoring is Important</h2>
              <p className="mt-2 text-sm md:text-base text-black" style={{fontSize:"16px"}}>
                Site monitoring ensures the trial is conducted in accordance with the approved protocol, GCP, and regulatory requirements,
                safeguarding the rights and safety of participants.
              </p>

              <h2 className="mt-4 text-lg md:text-xl font-semibold">What We Monitor</h2>
              <ul className="list-disc list-inside mt-2 text-sm md:text-base" style={{fontSize:"16px"}}>
                <li>Informed Consent Documentation</li>
                <li>erence to Protocol</li>
                <li>a Collection & Integrity</li>
                <li>Investigational Product Accountability</li>
                <li>Reporting of Adverse Events (AEs) and Serious Adverse Events (SAEs)</li>
              </ul>

              <h2 className="mt-4 text-lg md:text-xl font-semibold">Monitoring Process</h2>
              <ul style={{fontSize:"16px"}} className="list-disc list-inside mt-2 text-sm md:text-base">
                <li>Initial Consultation</li>
                <li>On-Site Visits & Remote Monitoring</li>
                <li>Documentation Review</li>
                <li>Compliance Reporting</li>
                <li>Follow-Up Support</li>
              </ul>
            </div>

            <div style={{ marginTop: '60px', marginLeft:"15px", marginBottom:"20px" }}>
              <h2 >Ensure Trial Integrity with CRET</h2>
              <p style={{ color: 'black', fontSize:"16px" }}>
              Partner with us for professional, independent site monitoring to ensure trial compliance and data integrity.
              </p>
              <Link
                href="/contact"
                className="p-2"
                style={{
                  fontSize: "16px",
                  backgroundColor: "red", // Button background color
                  color: "white", // Button text color
                  maxWidth: "240px", // Set maximum width
                  width: "90%", // Make button responsive on smaller screens
                  borderRadius: "10px",
                  padding: "10px", // Added padding for better touch target
                  transition: "transform 0.3s ease", // Smooth transition for scaling
                  display: 'inline-block', // Ensures the button behaves like a block element
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
               Contact Us for Site Monitoring
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
