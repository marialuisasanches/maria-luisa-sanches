import styles from "./hello.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hello() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const greetings = [
    { word: "HELLO" },
    { word: "OLÁ" },
    { word: "HOLA" },
    { word: "BONJOUR" },
    { word: "HEJSA" },
    { word: "こんにちは" },
    { word: "مرحبا" },
  ];

  // animação de entrada
  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  // troca automática
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % greetings.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // detecta o scroll e navega
  useEffect(() => {
    let navigating = false;

    const handleScroll = (e) => {
      if (navigating) return;

      if (e.deltaY > 0) {
        // scroll pra baixo vai pro home
        navigating = true;
        navigate("/home");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <motion.div
      className={styles.container}
      initial={{ borderRadius: "0px", y: 0 }}
      exit={{ borderRadius: "0px 0px 40px 40px", y: "-100vh" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2
        className={visible ? `${styles.word} ${styles.visible}` : styles.word}
      >
        {greetings[current].word}
      </h2>
    </motion.div>
  );
}

export default Hello;
