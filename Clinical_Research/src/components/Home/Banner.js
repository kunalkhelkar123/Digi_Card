"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="main-banner">
        <div className="container-fluid maxW-1920 p-0">
          <div className="row m-0">
            <div className="col-lg-7 col-md-12 p-0">
              <div className="main-banner-content">
                <div className="d-table">
                  <div className="d-table-cell" style={{fontFamily:"Regular400"}}>
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1200"
                      style={{ fontFamily: '"Poppins", sans-serif' }}

                    >
                      Clinical Research Ethics Training. 
                    </h1>

                    <p
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="1200"
                      style={{ fontFamily: '"Poppins", sans-serif',  fontSize:"17px"}}
                      className=""
                    >
                     At CRET Consulting, we specialize in ethical clinical research training, providing expert consultation and compliance support to hospitals and ethics committees across the globe. 
                    </p>

                    <div
                      className="btn-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                    >
                      <Link href="/about" className="btn btn-primary">
                      Explore Our Services
                      </Link>
                      <Link href="/contact" className="btn btn-light">
                      Join Our Online Training Programs
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 p-0">
              <div className="main-banner-image">
                <Image
                  src="/images/banner-img1.jpg"
                  alt="image"
                  width={800}
                  height={1080}
                />

                {/* <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="bx bx-play"></i>
                </div> */}
              </div>
            </div>
          </div>

          <div className="banner-inner-content">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-6" style={{marginLeft:"-60px"}}>
                <div className="single-inner-box" >
                  <div className="icon">
                    <i className="bx bx-building-house"></i>
                  </div>

                  <h3 className="text-white" >
                 
                    Training  
                    
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6" >
                <div className="single-inner-box">
                  <div className="icon">
                    <i className="bx bx-code-alt"></i>
                  </div>

                  <h3  className="text-white">
                   
                    Consultation  
                   
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="single-inner-box">
                  <div className="icon">
                    <i className="bx bx-highlight"></i>
                  </div>

                  <h3  className="text-white">
                  
                      Auditing & Monitoring 
                   
                  </h3>
                </div>
              </div>
            </div>

            <div className="map">
              <Image
                src="/images/circle-map2.png"
                alt="image"
                width={330}
                height={260}
              />
            </div>
          </div>
        </div>

        {/* Shape images */}
        <div className="shape1">
          <Image
            src="/images/shape/1.png"
            alt="image"
            width={50}
            height={147}
          />
        </div>
        <div className="shape2">
          <Image src="/images/shape/2.png" alt="image" width={65} height={68} />
        </div>
        <div className="shape3">
          <Image src="/images/shape/3.png" alt="image" width={50} height={50} />
        </div>
        <div className="shape4">
          <Image src="/images/shape/4.png" alt="image" width={82} height={79} />
        </div>
        <div className="shape5">
          <Image src="/images/shape/5.png" alt="image" width={55} height={55} />
        </div>
        <div className="shape6">
          <Image src="/images/shape/6.png" alt="image" width={75} height={75} />
        </div>
        <div className="shape7">
          <Image src="/images/shape/7.png" alt="image" width={65} height={65} />
        </div>
        <div className="shape8">
          <Image src="/images/shape/8.png" alt="image" width={75} height={73} />
        </div>
        <div className="shape9">
          <Image
            src="/images/shape/9.png"
            alt="image"
            width={140}
            height={140}
          />
        </div>
        <div className="shape10">
          <Image
            src="/images/shape/10.png"
            alt="image"
            width={60}
            height={60}
          />
        </div>
        <div className="shape11">
          <Image
            src="/images/shape/11.png"
            alt="image"
            width={50}
            height={52}
          />
        </div>
        <div className="shape12">
          <Image
            src="/images/shape/12.png"
            alt="image"
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
