import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education  from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <h3 id="education" className="education">
        Education
      </h3>
      <Education />
      <Footer/>
    </div>
  );
}

export default App;