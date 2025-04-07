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
        pageTitle="Ethics Committee Training"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Ethics Committee Training"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h2 style={{ fontSize: '2rem' }}>Ethics Committee Training for Regulatory Compliance</h2>
              <p style={{ fontSize: "16px" }}>
                Equip your ethics committee with comprehensive training programs tailored to meet
                international and national regulatory requirements, ensuring ethical clinical trial practices.
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

            <div className="services-details-desc" >
              <h2 style={{ marginTop: "40px" }}>Overview of Ethics Committee Training</h2>
              <p style={{ fontSize: "16px" }}>
                Our Ethics Committee Training program provides in-depth knowledge on regulatory guidelines
                and the roles and responsibilities of committee members to ensure ethical review processes in clinical trials.
              </p>
              <h2>Key Topics Covered:</h2>
              <ul style={{ fontSize: "16px" }}>
                <li>Roles and responsibilities of ethics committee members</li>
                <li>ICH GCP guidelines</li>
                <li>Informed Consent processes</li>
                <li>New clinical trial rules 2019</li>
                <li>Ethical review of clinical protocols</li>
              </ul>
            </div>

            <h2 style={{ marginTop: "120px", fontWeight: "bolder", textAlign: 'center', }}>
              Course Modules (Expandable Sections)
            </h2>

            <div className="row" style={{ marginTop: "40px" }}>
              {/** Repeat this block for each course module */}
              <div className="col-lg-6 col-md-4 col-sm-4" style={{ height: "250px" }}>
                <div className="single-services-box">
                  <div className="icon">
                    <i className="bx bxs-user-account"></i>
                  </div>
                  <h3>
                    Roles and Responsibilities of Ethics Committee Members
                  </h3>
                  <p>
                    Detailed overview of the duties of ethics committee members, ensuring thorough and ethical trial reviews.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-services-box" style={{ height: "270px" }}>
                  <div className="icon">
                    <i className="bx bx-desktop"></i>
                  </div>
                  <h3>
                    Understanding ICH GCP Guidelines
                  </h3>
                  <p>
                    Familiarize your team with global ICH GCP standards that are critical for ethical clinical research.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-services-box" style={{ height: "250px" }}>
                  <div className="icon">
                    <i className="bx bxs-devices"></i>
                  </div>
                  <h3>
                    Informed Consent and Ethical Protocol Review
                  </h3>
                  <p>
                    Training on the significance of informed consent and how to ethically review clinical trial protocols.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="single-services-box" style={{ height: "250px" }}>
                  <div className="icon">
                    <i className="bx bx-code-alt"></i>
                  </div>
                  <h3>
                    New Clinical Trial Rules 2019
                  </h3>
                  <p>
                    Explore the latest updates in clinical trial regulations and how they impact ethics committees in India.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:text-center md:px-0 text-black">
              <div>
                <h2
                  className="heading-margin center-desktop font-normal text-xl md:text-2xl"
                  style={{
                    marginTop: "80px",
                    fontWeight: "bolder",
                    textAlign: "center",

                  }}
                >
                  Benefits of Our Training Program
                </h2>
              </div>

              <ul className="mt-2" style={{ fontSize: "16px" }}>
                <li>
                  <b>Regulatory Compliance:</b> Ensure your ethics committee complies with
                  international guidelines.
                </li>
                <li>
                  <b>Improved Trial Outcomes:</b> Ethics training enhances the review
                  process, leading to better clinical trial outcomes.
                </li>
                <li>
                  <b>Confidence in Decision Making:</b> Equip members with the skills to
                  make informed decisions.
                </li>
              </ul>
            </div>

            <div className="text-left px-4 md:text-center md:px-0">
              <div>
                <h2
                  className="heading-margin center-desktop font-normal text-xl md:text-2xl"
                  style={{
                    marginTop: "80px",
                    fontWeight: "bolder",
                    textAlign: "center",

                  }}
                >
                  Enroll in Our Ethics Committee Training
                </h2>
              </div>
              <p className="text-base mt-4 text-black md:text-lg" style={{ fontSize: "16px" }}>
                Equip your team with the knowledge and tools to oversee clinical trials
                ethically. Get in touch to discuss your training needs.
              </p>
              <div className="flex justify-center md:justify-start md:mt-14 center-desktop-button">
                <Link
                  href="/contact"
                  className="py-3 bg-red-500 text-white font-semibold text-center transform transition-transform duration-300"
                  style={{

                    backgroundColor: "red",
                    borderRadius: "5px",
                    width: "220px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Contact Us for Training Details
                </Link>
              </div>
            </div>



          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
