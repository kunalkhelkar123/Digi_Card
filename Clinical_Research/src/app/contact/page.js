import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import ContactForm from "../../components/Contact/ContactForm";
import FooterTwo from "../../components/Layouts/FooterTwo";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Send Message</span>
              <h2>Drop us message for any query</h2>
              <p>If you have an idea, we would love to hear about it.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span>Address</span>
                    109/14, Mithila apt. Thorat col. Erandwana Pune 411004 Maharashtra, India
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>Email</span>
                    <a href="mailto:opstar@email.com">info@cretconsulting.com</a>
                    {/* <a href="mailto:fax@email.com">fax@email.com</a> */}
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <span>Phone</span>
                    <a href="tel:+91 9326022386">+91 9326022386</a>
                    {/* <a href="tel:+55555514574">+55 5555 14574</a> */}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="bg-map">
          <Image
            src="/images/bg-map.png"
            alt="image"
            width={1296}
            height={450}
          />
        </div>
      </div>

      <FooterTwo />
    </>
  );
}
