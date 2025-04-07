"use client";

import React from "react";
import Image from "next/image";

const MainContent = () => {
  return (
    <>
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>Incredible Infrastructure</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>
            </div>

            <div className="services-details-image">
              <Image
                src="/images/services-details/1.png"
                alt="image"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image ">
              <Image
                src="/images/services-details/2.png"
                alt="image"
                width={800}
                height={600}
              />
            </div>

            <div className="services-details-desc">
              <h3>Information Retrieval</h3>
              <p>
                Took a galley of type and scrambled it to make a type specimen
                book. survived not only five centuries, but also the leap into
                electronic remaining. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry’s standard dummy text ever since the 1500s, when an
                unknown printer when an unknown.
              </p>

              <h4>Which material types can you work with?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>

              <h4>Is Smart Lock required for instant apps?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>

              <h4>Can I have multiple activities in a single feature?</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
