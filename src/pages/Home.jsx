import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import styles from "./home.module.css";

const roles = [
  "Maria Luisa Sanches",
  "Frontend Developer",
  "UI Designer",
  "React Developer",
];

function Home() {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [currentRole, setCurrentRole] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const heroNameRef = useRef(null);

  const onSplineLoad = () => setSplineLoaded(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setRoleVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const fitHeroName = () => {
      const heroName = heroNameRef.current;
      if (!heroName) return;
      const maxWidth = window.innerWidth - 64;
      const maxSize = 224;
      const minSize = 48;
      let fontSize = maxSize;
      heroName.style.fontSize = `${fontSize}px`;
      while (heroName.scrollWidth > maxWidth && fontSize > minSize) {
        fontSize -= 2;
        heroName.style.fontSize = `${fontSize}px`;
      }
    };
    fitHeroName();
    window.addEventListener("resize", fitHeroName);
    return () => window.removeEventListener("resize", fitHeroName);
  }, [currentRole]);

  const sections = [
    "Home",
    "About",
    "Timeline",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.splineWrapper}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: splineLoaded ? 1 : 0,
          scale: splineLoaded ? 1 : 0.95,
        }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <div className={styles.splineInner}>
          <Spline
            scene="https://prod.spline.design/kNqea8ru4A73BV59/scene.splinecode"
            onLoad={onSplineLoad}
            style={{ width: "100%", height: "100%", pointerEvents: "all" }}
          />
        </div>
      </motion.div>

      <p className={styles.logo}>
        <span>Maria Luisa</span>
        <span>Sanches</span>
      </p>

      <nav className={styles.nav}>
        {sections.map((section) => (
          <a
            key={section}
            className={`${styles.navItem} ${selectedSection === section ? styles.active : ""}`}
            href={`#${section.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSection(section);
              const id =
                section === "Timeline" ? "timeline" : section.toLowerCase();
              const target = document.getElementById(id);
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {section}
          </a>
        ))}
      </nav>

      <div className={styles.hero}>
        <h1
          ref={heroNameRef}
          className={styles.heroName}
          style={{
            opacity: roleVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          {roles[currentRole]}
        </h1>
      </div>
    </div>
  );
}

export default Home;
