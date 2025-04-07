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
        pageTitle="Ethics Committee Audits"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ethics Committee Audits"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h1 style={{ fontSize: '2rem' }}>Ethics Committee Audits to Ensure Regulatory Compliance</h1>
              <p style={{fontSize:"16px"}}>
                Our expert audit services help ethics committees assess compliance with
                national and international regulations to ensure the ethical conduct of
                clinical trials.
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
                />
              )}
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image">
              {isClient && (
                <Image
                  src="/images/services-details/2.png"
                  alt="Ethics Committee Overview"
                  width={800}
                  height={600}
                  priority
                />
              )}
            </div>

            <div className="services-details-desc" style={{marginTop:"30px"}}>
              <h2>Overview of Our Ethics Committee Audits</h2>
              <p style={{fontSize:"16px"}}>
                We perform comprehensive external audits of ethics committees
                to ensure that all trial protocols, informed consent processes, and
                ethical reviews are compliant with regulatory guidelines.
              </p>

              <h2>Scope of Our Audits</h2>
              <p style={{fontSize:"16px"}}>
                Our audit services include evaluating the roles and performance
                of ethics committee members, reviewing clinical trial protocols,
                and ensuring adherence to informed consent processes.
              </p>
              <h2>Audit Process (Step-by-Step)</h2>
              <ul style={{fontSize:"16px"}}>
                <li><b>Pre-Audit Consultation:</b> Discussion on audit goals and requirements.</li>
                <li><b>On-Site Audits:</b> A detailed review of ethics committee protocols, informed consent, and GCP compliance.</li>
                <li><b>Audit Report:</b> Comprehensive reports with actionable recommendations.</li>
                <li><b>Follow-Up Support:</b> Assistance in implementing recommended improvements.</li>
              </ul>
            </div>

            <div>
              <h1 style={{ marginTop: '60px',  marginLeft:"20px", fontSize: '2rem' }}>Why Choose CRET for Ethics Audits</h1>
              <ul style={{fontSize:"16px"}}>
                <li><b>Thorough Compliance Audits:</b> Detailed checks to ensure adherence to ethical and regulatory standards.</li>
                <li><b>Expert Auditors:</b> Experienced in conducting NABH, GCP, and national ethics committee audits.</li>
                <li><b>Comprehensive Audit Reports:</b> Gain a detailed understanding of areas needing improvement.</li>
              </ul>
            </div>

            <div style={{ marginTop: '60px', marginLeft:"15px" }}>
              <h2 >Contact Us for Ethics Committee Audits</h2>
              <p style={{ color: 'black', fontSize:"16px"}} >
                Ensure your ethics committee meets all regulatory standards by scheduling an audit today.
              </p>
              <Link
                href="/contact"
                className="p-2"
                style={{
                  fontSize: "16px",
                  fontFamily: "Regular400",
                  backgroundColor: "red", // Button background color
                  color: "white", // Button text color
                  maxWidth: "220px", // Set maximum width
                  width: "90%", // Make button responsive on smaller screens
                  borderRadius: "10px",
                  padding: "10px", // Added padding for better touch target
                  transition: "transform 0.3s ease", // Smooth transition for scaling
                  display: 'inline-block', // Ensures the button behaves like a block element
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Schedule an Ethics Audit Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
