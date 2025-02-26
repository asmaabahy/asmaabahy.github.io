import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
//import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Title from "./components/Title";

function App() {
  return (
    <>
      {/* <header className="sticky w-full top-0 z-50">
        <Navbar />
      </header> */}
      <Title />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
