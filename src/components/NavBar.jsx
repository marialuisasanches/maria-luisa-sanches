import { useState, useEffect } from "react";
import styles from "./navbar.module.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const allSections = ["hello", ...sections.map((s) => s.id)];

function Navbar() {
  const [active, setActive] = useState("hello");

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const handleScroll = () => {
      allSections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActive(id);
        }
      });
    };

    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <nav className={`${styles.nav} ${active === "hello" ? styles.hidden : ""}`}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={styles.dotWrapper}
          onClick={() => scrollTo(id)}
        >
          <span className={styles.label}>{label}</span>
          <span
            className={`${styles.dot} ${active === id ? styles.dotActive : ""}`}
          />
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
