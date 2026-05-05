import Hello from "./pages/Hello";
import Home from "./pages/Home";
import About from "./pages/About";

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
    </main>
  );
}

export default App;
