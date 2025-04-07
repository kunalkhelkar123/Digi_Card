import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import CartContent from "../../components/Cart/CartContent";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Cart"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Cart"
        imgClass="/images/page-title-bg.jpg"
      />

      <CartContent />

      <FooterTwo />
    </>
  );
}
