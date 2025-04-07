import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import MainContent from "../../components/About/MainContent";
import Funfacts from "../../components/Home/Funfacts";
import FooterTwo from "../../components/Layouts/FooterTwo";
import Team from "../../components/Home/Team";
import Testimonials from "../../components/Home/Testimonials";
import Aboutus from "@/components/About/Aboutus";
import MediaGallery from "@/components/About/MediaGallery";


export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
        imgClass="/images/page-title-bg.jpg"
      />

      <MainContent />

      <Funfacts />
      <Aboutus />
      <MediaGallery />
      {/* <Team /> */}

      <Testimonials />

      <FooterTwo />
    </>
  );
}
