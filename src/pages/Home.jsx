import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let navigating = false;

    const handleScroll = (e) => {
      if (navigating) return;

      if (e.deltaY < 0) {
        // scroll pra cima volta pro hello
        navigating = true;
        navigate("/hello");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <h2>Home</h2>
    </div>
  );
}

export default Home;
