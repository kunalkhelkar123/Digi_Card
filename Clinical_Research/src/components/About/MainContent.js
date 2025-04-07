"use client";

import React from "react";
import Image from "next/image";

const MainContent = () => {
  return (
    <>
      <div className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about-img1.jpg"
                  alt="image"
                  width={775}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span>About Us</span>
                <h2>We&apos;ve Been Thriving in 30+ Years The CRET Area</h2>
                <p>
                At CRET Consulting, we specialize in providing expert training and
                 consultancy services to ethics committees and clinical research
                  professionals. Our focus is to equip these teams with the skills
                   and knowledge needed to navigate the complex ethical and regulatory
                    landscape of clinical trials. Through our customized programs, we 
                    help improve decision-making, ensuring research processes align with
                     global ethical standards and compliance requirements.
                </p>
                <p>
                With over a decade of experience, we have developed a deep understanding 
                of the challenges faced by ethics committees and clinical research teams.
                 Our extensive expertise allows us to offer tailored solutions that enhance
                  the quality of clinical trials across various therapeutic areas. We work
                   closely with sponsors, investigators, and clinical research organizations,
                    ensuring that all aspects of the trial process meet the highest ethical and
                     regulatory standards.
                </p>
                <p>
                Our mission at CRET Consulting is to improve the quality and compliance of 
                clinical trials on a global scale. By delivering innovative training and expert
                 guidance, we help foster ethical research practices that contribute to advancing
                  medical knowledge while safeguarding patient well-being and ensuring research
                   integrity.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="about-text">
                  <h3>Who we are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainContent;
