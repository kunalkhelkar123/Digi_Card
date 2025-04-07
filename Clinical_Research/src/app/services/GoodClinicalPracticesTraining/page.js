"use client";

import React, { useEffect, useState } from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import Image from "next/image";
import Link from "next/link";

const SectionTitle = ({ title, marginTop = "60px", fontWeight = "normal" }) => (
  <h2 style={{ marginTop, fontWeight, marginLeft: "auto", marginRight: "auto", textAlign: "center",   }}>
    {title}
  </h2>
);


const CourseModules = () => (
  <div className="row" style={{ marginTop: "40px" }}>
    {[
      {
        title: "Introduction to Good Clinical Practices",
        description: "An overview of ICH guidelines and their application in clinical research.",
        icon: "bx bxs-user-account",
        link: "",
      },
      {
        title: "Ensuring Subject Safety and Ethical Compliance",
        description: "Learn the importance of informed consent and how to protect clinical trial participants.",
        icon: "bx bx-desktop",
        link: "",
      },
      {
        title: "Conducting Clinical Trials",
        description: "How to manage clinical trials in compliance with GCP, including trial monitoring, reporting, and auditing.",
        icon: "bx bxs-devices",
        link: "",
      },
    ].map((module, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="single-services-box p-4 border rounded shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="icon mb-2">
            <i className={module.icon}></i>
          </div>
          <h3 className="text-lg">
            <Link href={module.link}>{module.title}</Link>
          </h3>
          <p>{module.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the code only runs on the client
  }, []);

  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Good Clinical Practices (GCP) Training"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Good Clinical Practices (GCP) Training"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="services-details-area ptb-110">
        <div className="container mx-auto">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h1 className="text-2xl md:text-3xl">Good Clinical Practices (GCP) Training for Clinical Trials</h1>
              <p style={{fontSize:"18px"}}>
                Get certified in GCP with our comprehensive training programs, covering every aspect
                of good clinical practices, from design to conduct and reporting of clinical trials.
              </p>
            </div>

            <div className="services-details-image">
              {isClient && (
                <Image
                  src="/images/services-details/1.png"
                  alt="Good Clinical Practices Training"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              )}
            </div>
          </div>

          <div className="services-details-overview">


            <div className="px-4 md:px-8 py-6">
              <h2
                className="text-xl mb-4 mt-10 font-bold text-center md:text-left"
                
              >
                What is Good Clinical Practice (GCP)?
              </h2>
              <p className="text-left mb-6  text-sm" style={{fontSize:"18px"}}>
                Good Clinical Practice (GCP) is an international ethical and scientific quality
                standard for the design, conduct, performance, and monitoring of clinical trials involving
                human subjects.
              </p>

              <h2
                className="text-xl mb-4 mt-10 font-bold text-center md:text-left"
              
              >
                Course Overview
              </h2>
              <p className="text-left mb-6  text-sm" style={{fontSize:"18px"}}>
                Our GCP training is aligned with ICH guidelines and designed to provide your
                team with the skills and knowledge to implement good clinical practices across all
                clinical trial phases.
              </p>

              <h2
                className=" text-center md:text-left mb-4 font-bold"
              
              >
                Key Areas Covered:
              </h2>
              <ul className="list-disc  text-left text-sm mb-6" style={{fontSize:"16px"}}>
                <li>Principles of ICH GCP</li>
                <li>Informed Consent and subject safety</li>
                <li>Conduct and management of clinical trials</li>
                <li>Compliance with regulatory authorities</li>
                <li>Data integrity and reporting standards</li>
              </ul>

              <h2
                className="text-xl mb-4  font-bold text-center md:text-left"
                style={{   marginTop:"40px" }}
              >
                Why GCP Training Matters?
              </h2>
              <p className="text-left mb-6 text-black text-sm" style={{fontSize:"18px"}}>
                Compliance with GCP is crucial for conducting ethical clinical trials and ensures the protection of human subjects and the integrity of the data collected.
              </p>

              <h2
                className="text-xl mb-4 mt-10 font-bold text-center md:text-left"
       
              >
                Key Benefits of Our GCP Training
              </h2>
              <ul className="list-disc pl-5 text-left text-sm" style={{fontSize:"18px"}}>
                <li><b>Compliance with International Standards:</b> Equip your team to follow ICH GCP guidelines.</li>
                <li><b>Improved Trial Quality:</b> Ensure ethical conduct in all phases of clinical trials.</li>
                <li><b>Global Recognition:</b> Increase credibility with global regulatory authorities.</li>
              </ul>
            </div>


            <SectionTitle title="Course Modules (Expandable Sections)" marginTop="100px" fontWeight="bolder" />

            <CourseModules />

            <div>
              <h2  style={{ marginTop: "60px", marginRight: 'auto', marginLeft:"10px",}}>
                Get Certified in GCP
              </h2>
              <p style={{ color: 'black', fontSize: '17px', textAlign: 'center' }}>
                Join our GCP training and ensure your clinical trial practices meet the highest international standards.
              </p>
              <div className="flex justify-center md:justify-start  md:mt-14 ">
                <Link
                  href="/contact"
                  className="py-3 bg-red-500 text-white  font-semibold text-center transform transition-transform duration-300"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "5px",
                    width: "220px",
                    marginLeft: "20px",
                    fontSize:"15px"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Get Started with GCP Training
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
