// MediaGallery.js
"use client"; // Ensure this is a client component

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const MediaGallery = () => {
  // Static images from public folder
  const images = [
    "/images/Gallary/01.jpeg",
    "/images/Gallary/02.jpeg",
    "/images/Gallary/03.jpeg",
    "/images/Gallary/04.jpeg",
    "/images/Gallary/05.jpeg",
    "/images/Gallary/01.jpeg",
    "/images/Gallary/02.jpeg",
    "/images/Gallary/03.jpeg",
    "/images/Gallary/04.jpeg",
    "/images/Gallary/05.jpeg",
  ];

  const swiperRef = useRef(null); // Create a reference for Swiper

  return (
    <>
      <h3 className="text-center p-6 text-3xl mt-4">
        {" "}
        Excellence with Perfection - 
        <b style={{color : "red"}}> Vaishali Deshpande</b> <br /> <small> ( Independent Consultant in Clinical Research ) </small>
      </h3>
      <div
        style={{
          width: "100%",
          height: "auto",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Swiper
          ref={swiperRef} // Attach the ref to Swiper
          spaceBetween={20} // Adjust spacing between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Enable loop mode
          pagination={{ clickable: true }} // Enable pagination
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
          breakpoints={{
            // When the viewport is >= 500px
            500: {
              slidesPerView: 1, // Show 1 slide on small screens
              spaceBetween: 10, // Reduce space between slides
            },
            // When the viewport is >= 768px (tablets)
            768: {
              slidesPerView: 1, // Show 2 slides on tablet
              spaceBetween: 20,
            },
            // When the viewport is >= 1024px (desktop)
            1024: {
              slidesPerView: 1, // Show 3 slides on larger screens
              spaceBetween: 30,
            },
          }}
          style={{
            width: "100%",
            maxWidth: "600px", // Set a max width for the slider
            height: "auto",
            marginBottom: "100px",
            
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                width={100}
                height={100}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
                }}
              />
              {/* <span>hello world</span> */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons Outside the Swiper */}
        <div
          className="swiper-button-prev"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        />
        <div
          className="swiper-button-next"
          onClick={() => swiperRef.current.swiper.slideNext()}
        />

        <style jsx>{`
          /* Style adjustments for Swiper buttons */
          .swiper-button-prev,
          .swiper-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
            color: black;
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .swiper-button-prev {
            left: 10px;
          }

          .swiper-button-next {
            right: 10px;
          }

          /* Media query for screens smaller than 500px */
          @media (max-width: 500px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none; /* Hide buttons on smaller screens */
            }

            h1 {
              font-size: 18px;
              margin-top: 20px;
              margin-bottom: 30px;
            }

            img {
              border-radius: 5px;
            }
          }

          /* Style adjustments for mobile responsiveness */
          @media (max-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none; /* Hide buttons on mobile */
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default MediaGallery;
