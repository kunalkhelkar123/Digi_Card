"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <>
      <div className="projects-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    <Link href="/projects/details">
                      Application Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    <Link href="/projects/details">Application Design</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    <Link href="/projects/details">
                      Web Application Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-projects-box">
                <Link href="/projects/details">
                  <Image
                    src="/images/projects/6.jpg"
                    alt="image"
                    width={660}
                    height={530}
                  />
                </Link>

                <div className="projects-content">
                  <span>Development</span>
                  <h3>
                    <Link href="/projects/details">Network Marketing</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <Link href="/projects/details" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="#" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="#" className="page-numbers">
                  3
                </a>
                <a href="#" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
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
      </div>
    </>
  );
};

export default ProjectCard;
