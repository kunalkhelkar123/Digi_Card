"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Services = () => {
  return (
    <>

    <div className="our_services_first_cont"  style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="our_servies_inside"  style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="content_service">
              <span className="our_core_service"  style={{ fontFamily: '"Poppins", sans-serif' }}>Our Core Services:  </span>
              <h2 className="We_offer"  style={{ fontFamily: '"Poppins", sans-serif' }}>Supporting Every Phase of Clinical Research</h2>
              <p className="We_offer_service_exp">
              Our services are designed to cover the entire spectrum of clinical research ethics and compliance, from training to consultation and auditing. Explore how we can support your research. 
              </p>
            </div>

            <div className="offer_it_service_img">
              <Image
                src="/images/section-title/1.png"
                alt="image"
                width={458}
                height={300}
              />
            </div>
      </div>
    </div>



    <div className="services_cards">
      <div className="services_card_second_cont">

        <div className="services_card_upper_container">
          <div className="cards_">

            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Ethics Committee Training.jpg" alt="img" width={400} height={400} /></div>

            <div className="services_title">Ethics Committee Training</div>

            <div className="Services_discription">Equip your team with essential ethics training to ensure regulatory compliance.</div>

            <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Good Clinical Practices (GCP) Training.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Good Clinical Practices (GCP) Training</div>

            <div className="Services_discription">Complete GCP training modules designed to meet international standards.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/GoodClinicalPracticesTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Informed Consent Training.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Ethics Committee Audits</div>

            <div className="Services_discription">Perform external audits to ensure your ethics committee meets all regulatory requirements.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeAudits"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>
        </div>



        <div className="services_card_upper_container">
          {/* <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Audit.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Ethics Committee Audits</div>

            <div className="Services_discription">Perform external audits to ensure your ethics committee meets all regulatory requirements.</div>
            <div className="service_card_read_mmore_cont"><Link href=""><button className="service_card_read_mmore">Read More</button></Link></div>
          </div> */}











          <div className="cards_">
            <div className="service_img_cont">
              
              <Image className="services_img" src="/images/Services_home/trail.jpg" width={400} height={400} alt="img"/
 >

              </div>

            <div className="services_title">Clinical Trial Site Monitoring</div>

            <div className="Services_discription">Independent site monitoring to ensure ongoing trial compliance and data integrity.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/ClinicalTrialSiteMonitoring"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>
















          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/authority-government-pillar-graphic.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">NABH Audits for Ethics Committees</div>

            <div className="Services_discription">Expert audits following NABH elements for ethics committees in hospitals and institutions.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/NABHAuditsforEthicsCommittees"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>
        </div>


      </div>
    </div>








    <div className="services_cards_for_1000px"  style={{ fontFamily: '"Poppins", sans-serif' }}>
      <div className="services_cards_for_1000px_">

        <div className="services_card_upper_container">
          
          <div className="cards_">

            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Ethics Committee Training.jpg" alt="img" width={400} height={400} /></div>

            <div className="services_title">Ethics Committee Training</div>

            <div className="Services_discription">Equip your team with essential ethics training to ensure regulatory compliance.</div>

            <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Good Clinical Practices (GCP) Training.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Good Clinical Practices (GCP) Training</div>

            <div className="Services_discription">Complete GCP training modules designed to meet international standards.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/GoodClinicalPracticesTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

        </div>



        <div className="services_card_upper_container">
          {/* <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Informed Consent Training.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Informed Consent Training</div>

            <div className="Services_discription">Training programs focused on the ethical collection of participant consent.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/InformedConsentTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div> */}

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Audit.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Ethics Committee Audits</div>

            <div className="Services_discription">Perform external audits to ensure your ethics committee meets all regulatory requirements.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeAudits"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

        </div>


        <div className="services_card_upper_container">

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/trail.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">Clinical Trial Site Monitoring</div>

            <div className="Services_discription">Independent site monitoring to ensure ongoing trial compliance and data integrity.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/ClinicalTrialSiteMonitoring"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>

          <div className="cards_">
            <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/authority-government-pillar-graphic.jpg" width={400} height={400} alt="img"/></div>

            <div className="services_title">NABH Audits for Ethics Committees</div>

            <div className="Services_discription">Expert audits following NABH elements for ethics committees in hospitals and institutions.</div>
            <div className="service_card_read_mmore_cont"><Link href="/services/NABHAuditsforEthicsCommittees"><button className="service_card_read_mmore">Read More</button></Link></div>
          </div>
        </div>


      </div>
    </div>





<div className="services_cards_for_650px_middle"  style={{ fontFamily: '"Poppins", sans-serif' }}>
    <div className="services_cards_for_650px">
      <div className="services_cards_for_650px_second">
      <Swiper
            slidesPerView={1}
            pagination={{
            clickable: true,
            }}
            autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            }}
            modules={[Autoplay, Pagination]}
            className="testimonials-slides"
            >
              <SwiperSlide>
               <div className="cards_">

               <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Ethics Committee Training.jpg" alt="img" width={400} height={400} /></div>
 
               <div className="services_title">Ethics Committee Training</div>

               <div className="Services_discription">Equip your team with essential ethics training to ensure regulatory compliance.</div>

              <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
              </div>
              </SwiperSlide>


              <SwiperSlide>
               <div className="cards_">
               <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Good Clinical Practices (GCP) Training.jpg" width={400} height={400} alt="img"/></div>
               <div className="services_title">Good Clinical Practices (GCP) Training</div>

               <div className="Services_discription">Complete GCP training modules designed to meet international standards.</div>
               <div className="service_card_read_mmore_cont"><Link href="/services/GoodClinicalPracticesTraining"><button className="service_card_read_mmore">Read More</button></Link></div>
               </div>
              </SwiperSlide>

             


              <SwiperSlide>
               <div className="cards_">
               <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/Audit.jpg" width={400} height={400} alt="img"/></div>

               <div className="services_title">Ethics Committee Audits</div>

               <div className="Services_discription">Perform external audits to ensure your ethics committee meets all regulatory requirements.</div>
               <div className="service_card_read_mmore_cont"><Link href="/services/EthicsCommitteeAudits"><button className="service_card_read_mmore">Read More</button></Link></div>
               </div>
              </SwiperSlide>

              <SwiperSlide>
               <div className="cards_">
               <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/trail.jpg" width={400} height={400} alt="img"/></div>

               <div className="services_title">Clinical Trial Site Monitoring</div>
 
               <div className="Services_discription">Independent site monitoring to ensure ongoing trial compliance and data integrity.</div>
               <div className="service_card_read_mmore_cont"><Link href="/services/ClinicalTrialSiteMonitoring"><button className="service_card_read_mmore">Read More</button></Link></div>
               </div>
              </SwiperSlide>

              <SwiperSlide>
               <div className="cards_">
               <div className="service_img_cont"><Image className="services_img" src="/images/Services_home/authority-government-pillar-graphic.jpg" width={400} height={400} alt="img"/></div>

               <div className="services_title">NABH Audits for Ethics Committees</div>

               <div className="Services_discription">Expert audits following NABH elements for ethics committees in hospitals and institutions.</div>
               <div className="service_card_read_mmore_cont"><Link href="/services/NABHAuditsforEthicsCommittees"><button className="service_card_read_mmore">Read More</button></Link></div>
               </div>
              </SwiperSlide>

      </Swiper> 
      </div>
    </div>
</div>




    
      {/* <div className="services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Our Services</span>
              <h2>We Offer Professional IT Solutions For Business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="image">
              <Image
                src="/images/section-title/1.png"
                alt="image"
                width={458}
                height={300}
              />
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bxs-user-account"></i>
                </div>

                <h3>
                  <Link href="/services/details">Product Engineering</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bx-desktop"></i>
                </div>

                <h3>
                  <Link href="/services/details">UX/UI Design</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bx-search-alt-2"></i>
                </div>

                <h3>
                  <Link href="/services/details">Big Data Analysis</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bx-code-alt"></i>
                </div>

                <h3>
                  <Link href="/services/details">Desktop Applications</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bxs-devices"></i>
                </div>

                <h3>
                  <Link href="/services/details">Mobile Applications</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
            >
              <div className="single-services-box">
                <div className="icon">
                  <i className="bx bx-lock-alt"></i>
                </div>

                <h3>
                  <Link href="/services/details">Cyber Security</Link>
                </h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida lacu. Risus commodo
                  viverra maecenas accumsan lacus vel adipiscing aliqua.
                </p>

                <Link href="/services/details" className="read-more-btn">
                  Read More <i className="bx bx-plus"></i>
                </Link>
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
      </div> */}
    </>
  );
};

export default Services;
