import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import MainContent from "../../components/Team/MainContent";
import FooterTwo from "../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
        imgClass="/images/page-title-bg.jpg"
      />

      <MainContent />

      <FooterTwo />
    </>
  );
}
