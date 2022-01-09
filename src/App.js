import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
