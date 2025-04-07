"use client";

import React, { useEffect } from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import FooterTwo from "../../components/Layouts/FooterTwo";
import Component_main from "./Component_main";

import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1); // remove #
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay to let the component load
      }
    }
  }, [pathname]); // pathname updates when route changes

  return (
    <>
      <NavbarTwo />
      <Component_main />
      <FooterTwo />
    </>
  );
}
