import React, { useRef } from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import MyProjectsSection from "../Components/MyProjectsSection";
import ContactSection from "../Components/ContactSection";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HomePage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <div>
        <Navbar
          onHero={() => heroRef.current.scrollIntoView({ behavior: "smooth" })}
          onAbout={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onProject={() =>
            projectsRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />

        <div ref={heroRef}>
          <HeroSection />
        </div>

        <div ref={aboutRef}>
          <AboutSection />
        </div>

        <div ref={projectsRef}>
          <MyProjectsSection />
        </div>

        <div ref={contactRef}>
          <ContactSection />
        </div>

        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
