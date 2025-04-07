import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FaqContent from "../../components/Faq/FaqContent";
import FooterTwo from "../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="FAQ"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ"
        imgClass="/images/page-title-bg.jpg"
      />

      <FaqContent />

      <FooterTwo />
    </>
  );
}
