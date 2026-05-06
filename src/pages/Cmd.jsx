import { useEffect, useState } from "react";
import styles from "./cmd.module.css";

const lines = [
  { type: "cmd", text: "cd ./marialuisasanches" },
  { type: "cmd", text: "cd ./projetos" },
  { type: "cmd", text: "ls -la" },
  { type: "output", text: "drwxr-xr-x  Astrova" },
  { type: "output", text: "drwxr-xr-x  Reellist" },
  { type: "output", text: "drwxr-xr-x  ImpactHub" },
  { type: "output", text: "drwxr-xr-x  VectaBio" },
  { type: "output", text: "drwxr-xr-x  CodeSprint" },
];

function Cmd() {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const timeouts = [];

    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        if (!cancelled) {
          setVisibleLines((prev) => [...prev, line]);
        }
      }, i * 800);
      timeouts.push(t);
    });

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.terminal}>
        <div className={styles.bar}>
          <span className={styles.dot} style={{ background: "#c47a7a" }} />
          <span className={styles.dot} style={{ background: "#c4a87a" }} />
          <span className={styles.dot} style={{ background: "#7aaa8a" }} />
          <span className={styles.barTitle}>
            bash ~/marialuisasanches/projetos
          </span>
        </div>
        <div className={styles.body}>
          {visibleLines.map((line, i) => (
            <p
              key={i}
              className={line.type === "cmd" ? styles.cmd : styles.output}
            >
              {line.type === "cmd" && (
                <span className={styles.prompt}>~ $ </span>
              )}
              {line.text}
            </p>
          ))}
          <span className={styles.cursor}>▋</span>
        </div>
        <div className={styles.scrollHint}>
          <span>scroll</span>
          <div className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}

export default Cmd;
