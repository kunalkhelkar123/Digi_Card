import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBannerTitle from "../../components/Common/PageBannerTitle";
import FooterTwo from "../../components/Layouts/FooterTwo";
import CheckoutForm from "../../components/Checkout/CheckoutForm";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Checkout"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Checkout"
        imgClass="/images/page-title-bg.jpg"
      />

      <CheckoutForm />

      <FooterTwo />
    </>
  );
}
