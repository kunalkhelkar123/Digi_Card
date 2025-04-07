"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Recent projects</span>
              <h2>Proud Projects That Make Us Stand Out</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="image">
              <Image
                src="/images/section-title/3.png"
                alt="image"
                width={416}
                height={312}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid maxW-1920">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="projects-slides"
          >
            <SwiperSlide>
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/1.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Design/Idea</span>
                  <h3>
                    <Link href="/projects/details">Flutter Development</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas.
                  </p>

                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/2.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Design/Development</span>
                  <h3>
                    <Link href="/projects/details">
                      Application Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas.
                  </p>

                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/3.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Design</span>
                  <h3>
                    <Link href="/projects/details">Web Development</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas.
                  </p>

                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/4.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Idea</span>
                  <h3>
                    <Link href="/projects/details">Big Data Analysis</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas.
                  </p>

                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/5.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Guard</span>
                  <h3>
                    <Link href="/projects/details">Cyber Security</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas.
                  </p>

                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="shape13">
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

export default Projects;
