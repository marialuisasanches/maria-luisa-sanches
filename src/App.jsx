import Hello from "./pages/Hello";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Cmd from "./pages/Cmd";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ height: "100vh", overflowY: "scroll" }}>
        <section id="hello" style={{ height: "100vh" }}>
          <Hello />
        </section>
        <section id="home" style={{ height: "100vh" }}>
          <Home />
        </section>
        <section id="about" style={{ height: "100vh" }}>
          <About />
        </section>
        <section id="timeline" style={{ height: "100vh" }}>
          <Achievements />
        </section>
        <section id="skills" style={{ height: "100vh" }}>
          <Skills />
        </section>
        <section id="cmd" style={{ height: "100vh" }}>
          <Cmd />
        </section>
        <section id="projects" style={{ height: "100vh" }}>
          <Projects />
        </section>
        <section id="contact" style={{ height: "100vh" }}>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
