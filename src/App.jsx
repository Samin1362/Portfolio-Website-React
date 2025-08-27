import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import TechLogoBar from "./components/TechLogoBar/TechLogoBar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <TechLogoBar></TechLogoBar>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>

    </>
  );
}

export default App;
