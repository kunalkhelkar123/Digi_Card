"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone, FaUserPlus, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaShareAlt, FaQrcode, FaMapMarkerAlt, FaEnvelope, FaGlobe 
} from 'react-icons/fa';

const MainBanner = () => {
  return (
    <>
      <div className="services-area ptb-110">
        <div className="container">
          <div className="row">
            {/* Service Box 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="single-services-box" style={{height:"300px"}}>
                <div className="icon">
                  <i className="bx bxs-user-account" ></i>
                </div>
                <h3>
                  <Link href="/services/EthicsCommitteeTraining">Ethics Committee Training</Link>
                </h3>
                <p>Equip your team with essential ethics training to ensure regulatory compliance.</p>
                <Link href="/services/EthicsCommitteeTraining" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            {/* Service Box 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="single-services-box" style={{height:"300px"}}>
                <div className="icon">
                  <i className="bx bx-desktop"></i>
                </div>
                <h3>
                  <Link href="/services/GoodClinicalPracticesTraining">Good Clinical Practices Training</Link>
                </h3>
                <p>Complete GCP training modules designed to meet international standards.</p>
                <Link href="/services/GoodClinicalPracticesTraining" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            {/* Service Box 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="single-services-box" style={{height:"300px"}}>
                <div className="icon">
                  <i className="bx bx-code-alt"></i>
                </div>
                <h3>
                  <Link href="/services/EthicsCommitteeAudits">Ethics Committee Audits</Link>
                </h3>
                <p>Perform external audits to ensure your ethics committee meets all regulatory requirements.</p>
                <Link href="/services/EthicsCommitteeAudits" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            {/* Service Box 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="single-services-box" style={{height:"330px"}}>
                <div className="icon">
                  <i className="bx bxs-devices"></i>
                </div>
                <h3>
                  <Link href="/services/ClinicalTrialSiteMonitoring">Clinical Trial Site Monitoring</Link>
                </h3>
                <p>Independent site monitoring to ensure ongoing trial compliance and data integrity.</p>
                <Link href="/services/ClinicalTrialSiteMonitoring" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            {/* Service Box 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="single-services-box" style={{height:"330px"}}>
                <div className="icon">
                  <i className="bx bx-lock-alt"></i>
                </div>
                <h3>
                  <Link href="/services/NABHAuditsforEthicsCommittees">NABH Audits for Ethics Committees</Link>
                </h3>
                <p>Expert audits following NABH elements for ethics committees in hospitals and institutions.</p>
                <Link href="/services/NABHAuditsforEthicsCommittees" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shapes for Background Decoration */}
        <div className="shape13">
          <Image src="/images/shape/13.svg" alt="shape" width={20} height={20} />
        </div>
        <div className="shape14">
          <Image src="/images/shape/13.svg" alt="shape" width={20} height={20} />
        </div>
      </div>

      <style jsx>{`
        .services-area {
          padding-top: 70px;
          padding-bottom: 70px;
        }
        
        .single-services-box {
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 8px;
          text-align: center;
          background: #fff;
          transition: 0.3s;
        }
        
        .single-services-box .icon {
          font-size: 24px;
          margin-bottom: 15px;
        }
        
        .read-more-btn {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          color: #007bff;
          text-decoration: none;
          transition: 0.3s;
        }
        
        .read-more-btn i {
          margin-left: 5px;
        }
        
        @media (max-width: 768px) {
          .services-area {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          
          .single-services-box {
            padding: 20px;
            margin-bottom: 20px;
          }
          
          .read-more-btn {
            font-size: 13px;
          }
        }
        
        @media (max-width: 576px) {
          .icon {
            font-size: 20px;
          }
          
          .single-services-box h3 {
            font-size: 18px;
          }
          
          .single-services-box p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;
