import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import FooterTwo from "../../../components/Layouts/FooterTwo";
import MainContent from "../../../components/SingleServices/MainContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Product Engineering"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Product Engineering"
        imgClass="/images/page-title-bg.jpg"
      />

      <MainContent />

      <FooterTwo />
    </>
  );
}
