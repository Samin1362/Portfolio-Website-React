import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FloatingNavbar from "./components/FloatingNavbar/FloatingNavbar";
import Banner from "./components/Banner/Banner";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const TechLogoBar = lazy(() => import("./components/TechLogoBar/TechLogoBar"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Education = lazy(() => import("./components/Education/Education"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const allContentLoading = useRef(null);
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  // content loading animation — runs after splash finishes
  useEffect(() => {
    if (!splashDone) return;
    gsap.fromTo(
      allContentLoading.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power1.out",
      }
    );
  }, [splashDone]);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
      />
      <FloatingNavbar
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />
      <Banner allContentLoading={allContentLoading}></Banner>
      <Suspense fallback={null}>
        <TechLogoBar></TechLogoBar>
        <Skills ref={skillsRef}></Skills>
        <Projects ref={projectsRef}></Projects>
        <Education ref={educationRef}></Education>
        <Contact ref={contactRef}></Contact>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;
