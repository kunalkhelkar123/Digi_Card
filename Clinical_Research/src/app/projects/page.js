import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import ProjectCard from "../../components/Project/ProjectCard";
import FooterTwo from "../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Projects"
        imgClass="/images/page-title-bg.jpg"
      />

      <ProjectCard />

      <FooterTwo />
    </>
  );
}
