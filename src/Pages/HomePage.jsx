import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import MyProjectsSection from "../Components/MyProjectsSection";
import ContactSection from "../Components/ContactSection";
import Navbar from "../Layouts/Navbar";

function HomePage() {
  return (
    <>
      <div className="">
        <Navbar/>
        <HeroSection />
        <AboutSection/>
        <MyProjectsSection/>
        <ContactSection/>
      </div>
    </>
  );
}

export default HomePage;
