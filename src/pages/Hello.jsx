import styles from "./hello.module.css";
import { useState, useEffect } from "react";

function Hello() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const greetings = [
    { word: "HELLO" },
    { word: "OLÁ" },
    { word: "HOLA" },
    { word: "BONJOUR" },
    { word: "HEJSA" },
    { word: "こんにちは" },
    { word: "مرحبا" },
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % greetings.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2
        className={visible ? `${styles.word} ${styles.visible}` : styles.word}
      >
        {greetings[current].word}
      </h2>
      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.arrow} />
      </div>
    </div>
  );
}

export default Hello;
