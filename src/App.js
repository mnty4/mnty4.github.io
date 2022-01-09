import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import Socials from "./components/Socials/Socials";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Socials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
