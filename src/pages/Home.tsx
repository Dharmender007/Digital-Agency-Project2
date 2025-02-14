// pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import CompanyLogos from "../components/CompanyLogos";

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <CompanyLogos />
      <Services />
      <Testimonial />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
