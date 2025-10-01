import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FloatingNavbar from "./components/FloatingNavbar/FloatingNavbar";
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
import Events from "./components/Events/Events";

function App() {
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const reportsRef = useRef(null);
  const educationRef = useRef(null);
  const eventsRef = useRef(null);
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
      <Navbar
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        reportsRef={reportsRef}
        educationRef={educationRef}
        eventsRef={eventsRef}
      />
      <FloatingNavbar
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        reportsRef={reportsRef}
        educationRef={educationRef}
        eventsRef={eventsRef}
        contactRef={contactRef}
      />
      <Banner allContentLoading={allContentLoading}></Banner>
      <TechLogoBar></TechLogoBar>
      <Skills ref={skillsRef}></Skills>
      <Projects ref={projectsRef}></Projects>
      <Reports ref={reportsRef}></Reports>
      <Education ref={educationRef}></Education>
      <Events ref={eventsRef}></Events>
      <Contact ref={contactRef}></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
