import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import TechLogoBar from "./components/TechLogoBar/TechLogoBar";
import Projects from "./components/Projects/Projects";
import Reports from "./components/Reports/Reports";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const contactRef = useRef(null);
  const allContentLoading = useRef(null);

  // content loading animation 
  useEffect(() => {
    gsap.fromTo(
      allContentLoading.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 0.8,
        ease: "power1.in",
      }
    );
  }, []);

  return (
    <>
      <Navbar contactRef={contactRef}></Navbar>
      <Banner allContentLoading={allContentLoading}></Banner>
      <TechLogoBar></TechLogoBar>
      <Skills></Skills>
      <Projects></Projects>
      <Reports></Reports>
      <Education></Education>
      <Contact ref={contactRef}></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
