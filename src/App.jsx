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
import { useRef } from "react";

function App() {

  const contactRef = useRef(null);

  return (
    <>
      <Navbar contactRef={contactRef}></Navbar>
      <Banner></Banner>
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
