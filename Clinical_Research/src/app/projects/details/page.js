import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../../components/Common/PageBannerTitle";
import ProjectDetailsContent from "../../../components/Project/ProjectDetailsContent";
import FooterTwo from "../../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Project Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Project Details"
        imgClass="/images/page-title-bg.jpg"
      />

      <ProjectDetailsContent />

      <FooterTwo />
    </>
  );
}
