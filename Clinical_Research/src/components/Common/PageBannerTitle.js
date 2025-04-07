"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageBannerTitle = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  imgClass,
}) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${imgClass})` }}
      >
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li className="active">{activePageText}</li>
            </ul>
          </div>
        </div>

        {/* Shape Images */}
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot2.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="dot-shape3">
          <Image
            src="/images/shape/dot3.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="dot-shape4">
          <Image
            src="/images/shape/dot4.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
        <div className="dot-shape5">
          <Image
            src="/images/shape/dot5.png"
            alt="image"
            width={9}
            height={9}
          />
        </div>
        <div className="dot-shape6">
          <Image
            src="/images/shape/dot6.png"
            alt="image"
            width={11}
            height={11}
          />
        </div>
        <div className="dot-shape7">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape16">
          <Image
            src="/images/shape/13.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>
        <div className="shape17">
          <Image
            src="/images/shape/14.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
        <div className="shape18">
          <Image
            src="/images/shape/15.png"
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <div className="shape19">
          <Image
            src="/images/shape/16.png"
            alt="image"
            width={182}
            height={146}
          />
        </div>
        <div className="shape20">
          <Image
            src="/images/shape/14.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default PageBannerTitle;
