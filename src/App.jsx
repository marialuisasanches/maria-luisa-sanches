import Hello from "./pages/Hello";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Skills from "./pages/Skills";
import Cmd from "./pages/Cmd";
import Projects from "./pages/Projects";

function App() {
  return (
    <main
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      <section id="hello" style={{ scrollSnapAlign: "start", height: "100vh" }}>
        <Hello />
      </section>
      <section id="home" style={{ scrollSnapAlign: "start", height: "100vh" }}>
        <Home />
      </section>
      <section id="about" style={{ scrollSnapAlign: "start", height: "100vh" }}>
        <About />
      </section>
      <section
        id="timeline"
        style={{ scrollSnapAlign: "start", height: "100vh" }}
      >
        <Achievements />
      </section>
      <section
        id="skills"
        style={{ scrollSnapAlign: "start", height: "100vh" }}
      >
        <Skills />
      </section>
      <section id="cmd" style={{ scrollSnapAlign: "start", height: "100vh" }}>
        <Cmd />
      </section>

      <section
        id="projects"
        style={{ scrollSnapAlign: "start", height: "100vh" }}
      >
        <Projects />
      </section>
    </main>
  );
}

export default App;
