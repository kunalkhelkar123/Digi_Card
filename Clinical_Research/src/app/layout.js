/* eslint-disable @next/next/no-sync-scripts */
import "../../styles/bootstrap.min.css";
import "../../styles/animate.min.css";
import "../../styles/boxicons.min.css";
import "../../styles/fontawesome.min.css";
import "../../styles/progresscircle.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../styles/globals.css";
import "../../styles/style.css";

import "../../styles/responsive.css";

// For RTL style just comment out the rtl.css
// import '../../styles/rtl.css';

import { Open_Sans, Dosis } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import Script from "next/script";

// For all body text font
const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

// For all heading font
const dosis = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-dosis",
  display: "swap",
});

export const metadata = {
  title: "CRET Consulting",
  description: "CRET Consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        <script 
          src="https://mercury.phonepe.com/web/bundle/checkout.js"
          defer
        />
      </head>
      <body className={`${open_sans.variable} ${dosis.variable}`}>
        {children}
        <AosAnimation />
        <GoTop />
      </body>
    </html>
  );
}
