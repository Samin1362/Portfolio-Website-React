import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import TechLogoBar from "./components/TechLogoBar/TechLogoBar";
import Projects from "./components/Projects/Projects";
import Reports from "./components/Reports/Reports";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <TechLogoBar></TechLogoBar>
      <Skills></Skills>
      <Projects></Projects>
      <Reports></Reports>
      <Footer></Footer>

    </>
  );
}

export default App;
