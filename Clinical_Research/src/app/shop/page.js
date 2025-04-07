import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import ProductContent from "../../components/Shop/ProductContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Shop"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Shop"
        imgClass="/images/page-title-bg.jpg"
      />

      <ProductContent />

      <FooterTwo />
    </>
  );
}
