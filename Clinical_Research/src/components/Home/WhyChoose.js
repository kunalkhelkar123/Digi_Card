"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <>
      <div className="why-choose-area ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content sm:ml-0 ml-[-30px]">
              <span className="choose_us">Why choose us</span>
              <h2>We Different From Others Should Choose Us</h2>
              <p className="difference_explain">
                <b className="check ">Tailored Solutions:</b> Customized training and consulting services to fit the unique needs of
                your ethics committee or institution.
              </p>
              <p className="difference_explain">
                <b className="check">Industry Expertise:</b> Over 15 years of experience in the clinical research and ethics
                compliance space. </p>
              <p className="difference_explain"><b className="check">Regulatory Focus:</b> Ensure adherence to national and international guidelines
                with our expert services. </p>
            </div>

            <div className="image">
              <Image
                src="/images/section-title/2.png"
                alt="image"
                width={440}
                height={300}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-choose-box">
                <Image
                  src="/images/why-choose-us/1.jpg"
                  alt="image"
                  width={660}
                  height={660}
                />

                <div className="title">
                  <h3>Online Ethics Committee Training</h3>
                </div>

                <div className="content">
                  <div className="inner-content">
                    <h3>
                      <Link href="">Online Ethics Committee Training</Link>
                    </h3>
                    <p>
                      Module wise courses for ethics committee members to stay <br/> compliant.
                    </p>

                    <Link href="" className="read-more-btn">
                      Read More <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-choose-box">
                <Image
                  src="/images/why-choose-us/1.jpg"
                  alt="image"
                  width={660}
                  height={660}
                />

                <div className="title">
                  <h3>Auditing & Compliance Services</h3>
                </div>

                <div className="content">
                  <div className="inner-content">
                    <h3>
                      <Link href="">
                        Auditing & Compliance Services
                      </Link>
                    </h3>
                    <p>
                      Complete auditing and compliance solutions for ethics <br></br> committees.
                    </p>

                    <Link href="/services" className="read-more-btn">
                      Read More <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-choose-box">
                <Image
                  src="/images/why-choose-us/3.jpg"
                  alt="image"
                  width={660}
                  height={660}
                />

                <div className="title">
                  <h3>Informed Consent & GCP Programs</h3>
                </div>

                <div className="content">
                  <div className="inner-content">
                    <h3>
                      <Link href="">
                        Informed Consent & GCP Programs
                      </Link>
                    </h3>
                    <p>
                      Enhance ethical standards with specialized training in Good <br/>Clinical Practices
                      and informed consent.
                    </p>

                    <Link href="/services" className="read-more-btn">
                      Read More <i className="bx bx-plus"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape14">
          <Image
            src="/images/shape/13.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape15">
          <Image
            src="/images/shape/13.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
