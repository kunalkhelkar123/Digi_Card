"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <div className="blog-area extra-pb ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Latest News</span>
              <h2>Insights into Clinical Research & Ethics</h2>
              <p>
              Explore our latest articles on best practices in clinical research, 
              ethics committee roles, and compliance in the rapidly evolving field of medical research. 
              Stay informed with expert insights. 
              </p>
            </div>

            <div className="image">
              <Image
                src="/images/section-title/5.png"
                alt="image"
                width={423}
                height={300}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post sticky">
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                    
                      <li>August 16, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    The Importance of Ethics Committees in Clinical Trials
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <Image
                      src="/images/blog/1.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                     
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    How Good Clinical Practices (GCP) Improve Research Outcomes
                    </Link>
                  </h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p> */}

                  {/* <Link href="#" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <Image
                      src="/images/blog/2.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      
                      <li>August 18, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    The Role of Informed Consent in Ethical Clinical Research
                    </Link>
                  </h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p> */}

                  {/* <Link href="#" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link> */}
                </div>
              </div>

              <div className="single-blog-post link">
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      
                      <li>August 01, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    Navigating NABH Audits for Ethics Committees: Best Practices
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post quote">
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                     
                      <li>August 08, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    How Good Clinical Practices (GCP) Improve Research Outcomes
                    </Link>
                  </h3>
                </div>
              </div>

              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="#">
                    <Image
                      src="/images/blog/3.jpg"
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      
                      <li>August 15, 2023</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="#">
                    The Importance of Ethics Committees in Clinical Trials
                    </Link>
                  </h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="#" className="read-more-btn">
                    Read More <i className="bx bx-plus"></i>
                  </Link> */}
                </div>
              </div>
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
        <div className="shape14">
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

export default Blog;
