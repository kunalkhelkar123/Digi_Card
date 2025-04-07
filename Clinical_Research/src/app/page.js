import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import WhyChoose from "../components/Home/WhyChoose";
import Funfacts from "../components/Home/Funfacts";
import Cta from "../components/Home/Cta";
import Projects from "../components/Home/Projects";
import Partner from "../components/Home/Partner";
import Team from "../components/Home/Team";
import Testimonials from "../components/Home/Testimonials";
import Blog from "../components/Home/Blog";
import Footer from "../components/Layouts/Footer";
import Workshop_Fees from "../components/Home/Workshop_Fees";

import '../../styles/globals.css';

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <Services />
      <Workshop_Fees />
      <About />

      <WhyChoose />

      <Funfacts />

      <Cta />

      {/* <Projects /> */}

      {/* <Partner /> */}

      {/* <Team /> */}

      <Testimonials />

      <Blog />

      <Footer />
    </>
  );
}
