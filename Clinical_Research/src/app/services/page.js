import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import MainContent from "../../components/Services/MainContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        imgClass="/images/page-title-bg.jpg"
      />

      <MainContent />

      <FooterTwo />
    </>
  );
}
