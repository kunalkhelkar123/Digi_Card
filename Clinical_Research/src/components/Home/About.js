"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Image
                  src="/images/about-img1.jpg"
                  alt="image"
                  width={775}
                  height={620}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <span>About Us</span>
                {/* <h2>We&apos;ve Been Thriving in 37 Years The Tech Area</h2> */}
                <p>
                <b>At</b> CRET Consulting, we provide specialized training and consultancy to ethics committees 
                and clinical research professionals. With over a decade of experience, we strive to enhance 
                the quality and compliance of clinical trials worldwide. 
                </p>

                <Link href="/about" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
