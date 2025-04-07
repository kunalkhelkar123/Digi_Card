"use client";

import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      {/* <div className="cta-area">
        <div className="container">
          <div 
            className="cta-content" 
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}

      <div className="cta-main">
        <div className="cta-area">
          <div className="container1">
            <h1 className="container1-h1">
              READY TO SETUP YOUR ETHICS COMMITTEES COMPLIANCE?
            </h1>
            <p className="container1-p">
              {" "}
              Reach out today for expert consultation and training to ensure
              your research aligns with global ethical standards.{" "}
            </p>
            <div>
              <ul>
                <p className="container1-ul">
                  ✔ Portals for doctors, patients and staff
                </p>
                <p className="container1-ul">
                  ✔ Portals for doctors, patients and staff
                </p>
                <p className="container1-ul">
                  ✔ Portals for doctors, patients and staff
                </p>
              </ul>
            </div>
          </div>
          <div className="container2">
            <h1 className="container2-h1">SETUP YOUR ETHICS COMMITTEES With US</h1>
            {/* <p className="container2-p">
              Start your free trial and experience the full-featured Hospital
              Management Software.
            </p> */}
            <div className="container2-main-input">
              <div className="container2-input">
                <input
                  type="text"
                  placeholder="Name"
                  className="container2-input-single"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="container2-input-single"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="container2-input-single"
                />
              </div>
              <div className="container2-input2">
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="container2-input-single"
                />
                <input
                  type="text"
                  placeholder="Phone/WhatsApp"
                  className="container2-input-single"
                />
                <select className="container2-input-single">
                  <option>Select Country</option>
                  <option value="USA">United States (USA)</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="India">India</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="div-form-button">
              <button className="form-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
