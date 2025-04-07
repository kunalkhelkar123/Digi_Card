"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div
            className="subscribe-area"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <h3>Subscribe To Our Newsletter</h3>

            <form className="newsletter-form">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                  />
                </div>

                <div className="col-lg-5 col-md-6 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12">
                  <button type="submit">
                    Subscribe Now <i className="bx bx-send"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row">
            <div
              className="col-lg-1 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/black-logo.png"
                      alt="image"
                      width={146}
                      height={37}
                    />
                  </Link>
                  {/* <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p> */}
                </div>

                {/* <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook "></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="">Ethics Committee Training</Link>
                  </li>
                  <li>
                    <Link href="">Good Clinical Practices (GCP) Training </Link>
                  </li>
                  <li>
                    <Link href="">Informed Consent Training </Link>
                  </li>
                  <li>
                    <Link href="">Ethics Committee Audits </Link>
                  </li>
                  <li>
                    <Link href="">Clinical Trial Site Monitoring </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    {/* <Link href="/blog">Blog</Link> */}
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    {/* <Link href="/contact">Support</Link> */}
                  </li>
                  {/* <li>
                    <Link href="#">Applications</Link>
                  </li> */}
                </ul>
                <ul className="social">
                  <li>
                    <a href="?#" target="_blank">
                    <FaFacebook className="text-2xl  ml-1 pt-2" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                    <FaInstagram className="text-2xl  ml-1 pt-2" />
                    </a>
                  </li>
                  <li className=" ">
                    <a href="https://www.linkedin.com/in/vaishali-deshpande-b7311b10/" target="_blank">
                    <FaLinkedin className="text-2xl  ml-1 pt-2" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="flaticon-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-footer-widget">
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span> 109/14, Mithila apt. Thorat col. Erandwana
                    Pune 411004
                    Maharashtra,  India
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:opstar@gmail.com">info@cretconsulting.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+919326022386">+91 9326022386</a>
                  </li>
                  {/* <li>
                    <span>Fax:</span>{" "}
                    <a href="tel:+447854578964">+44 785 4578964</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>Copyright @{currentYear} CRET Consulting. All Rights Reserved.</p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/Privacy-Policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/Terms-Conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/Refund-Policy">Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <Image
            src="/images/circle-map.png"
            alt="image"
            width={370}
            height={292}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
