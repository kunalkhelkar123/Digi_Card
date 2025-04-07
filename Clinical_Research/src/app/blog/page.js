import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import BlogPost from "../../components/Blog/BlogPost";
import FooterTwo from "../../components/Layouts/FooterTwo";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
        imgClass="/images/page-title-bg.jpg"
      />

      <BlogPost />

      <FooterTwo />
    </>
  );
}
