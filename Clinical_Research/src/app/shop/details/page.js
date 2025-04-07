import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import MainContent from "../../../components/SingleProduct/MainContent";
import RelatedProducts from "../../../components/SingleProduct/RelatedProducts";
import FooterTwo from "../../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="White Book"
        homePageUrl="/"
        homePageText="Home"
        activePageText="White Book"
        imgClass="/images/page-title-bg.jpg"
      />

      <div className="product-details-area ptb-110">
        {/* MainContent */}
        <MainContent />

        {/* RelatedProducts */}
        <RelatedProducts />
      </div>

      <FooterTwo />
    </>
  );
}
