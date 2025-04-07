"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="testimonials-area">
        <div className="container-fluid maxW-1920 p-0">
          <div className="testimonials-inner-area">
            <div className="testimonials-inner-content">
              <Swiper
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, Pagination]}
                className="testimonials-slides"
              >
                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>
                    What a fantastic session! It was not only crisp and clear but also incredibly informative, delivering valuable insights with every moment and leaving me inspired and eager for more.
                    </p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author1.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Juhi Deshmukh</h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>
                    Their consultation services have been invaluable in navigating complex clinical trial 	compliance requirements.
                    </p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author2.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr Sonali Palkar</h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>
                    The team at CRET provided us with thorough auditing and excellent guidance, ensuring our research protocols met ethical standards.
                    </p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author3.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Aman Kulkarni </h3>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>
                    Awareness that I got about significant role of EC before conducting research . The training was very informative and insightful. Thank you for the same.
                    </p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author3.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Priya Pankaj Chopde</h3>
                    </div>
                  </div>
                </SwiperSlide>  <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>
                    The team at CRET provided us with thorough auditing and excellent guidance, ensuring our research protocols met ethical standards.
                    </p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author3.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Suman Kulkarni </h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>The ethics committee training we received from CRET was detailed and relevant, greatly improving our understanding of global guidelines.</p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author3.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Amit Desai</h3>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="single-testimonials-item">
                    <p>We highly recommend CRET for anyone needing expert advice and training in clinical research compliance</p>

                    <div className="client-info">
                      {/* <Image
                        src="/images/author3.jpg"
                        alt="image"
                        width={150}
                        height={150}
                      /> */}
                      <h3>Dr. Neha Iyer </h3>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>

              <div className="circle-map">
                <Image
                  src="/images/circle-map3.png"
                  alt="image"
                  width={592}
                  height={468}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
