import styles from "./achievements.module.css";

const achievements = [
  {
    year: "2024",
    title: "Idosos Conectados",
    desc: "Projeto de inclusão digital voltado para a terceira idade, promovendo autonomia e pertencimento.",
    plaque: "Inclusão Digital",
    featured: false,
  },
  {
    year: "2026",
    title: "ISO/IEC 27001 Certified",
    desc: "Certificação internacional em Segurança da Informação, padrão reconhecido globalmente.",
    plaque: "Certificação Internacional",
    featured: false,
  },
  {
    year: "2026",
    title: "ImpactHub ",
    desc: "Participação no ecossistema de inovação social do ImpactHub, desenvolvendo projetos com impacto real.",
    plaque: "Inovação Social",
    featured: false,
  },
  {
    year: "2026",
    title: "9º lugar · NewHack",
    desc: "Entre os melhores do hackathon NewHack 2026, competindo com projetos inovadores de todo o Brasil.",
    plaque: "NewHack 2026",
    featured: true,
  },
  {
    year: "2026",
    title: "IFF - Pesquisa em IA",
    desc: "Iniciação científica aplicando inteligência artificial em projetos do Instituto Federal Fluminense.",
    plaque: "Pesquisadora · IFF",
    featured: false,
  },
];

export default function Achievements() {
  return (
    <section className={styles.achievements} id="Timeline">
      <div className={styles.header}>
        <p className={styles.label}>Galeria de</p>
        <h2 className={styles.title}>Conquistas</h2>
        <div className={styles.divider} />
      </div>

      <div className={styles.grid}>
        {achievements.map((item, i) => (
          <div className={styles.frameWrap} key={i}>
            <div
              className={`${styles.frame} ${item.featured ? styles.frameFeatured : ""}`}
            >
              <div className={styles.wire} />
              <div className={styles.nail} />
              <div className={styles.frameOuter}>
                <div className={styles.frameInnerBorder} />
                <div className={styles.frameCanvas}>
                  <span className={styles.frameYear}>{item.year}</span>
                  <h3 className={styles.frameTitle}>{item.title}</h3>
                  <div className={styles.frameDivider} />
                  <p className={styles.frameDesc}>{item.desc}</p>
                </div>
              </div>
            </div>
            <div
              className={`${styles.plaque} ${item.featured ? styles.plaqueFeatured : ""}`}
            >
              <p className={styles.plaqueText}>{item.plaque}</p>
            </div>
          </div>
        ))}

        {/* Quadro reservado */}
        <div className={styles.frameWrap}>
          <div className={`${styles.frame} ${styles.frameReserved}`}>
            <div className={styles.wire} />
            <div className={styles.nail} />
            <div
              className={`${styles.frameOuter} ${styles.frameOuterReserved}`}
            >
              <div className={styles.frameInnerBorder} />
              <div
                className={`${styles.frameCanvas} ${styles.frameCanvasReserved}`}
              >
                <span
                  className={`${styles.frameYear} ${styles.frameYearMuted}`}
                >
                  em breve
                </span>
                <h3
                  className={`${styles.frameTitle} ${styles.frameTitleMuted}`}
                >
                  Próxima conquista
                </h3>
              </div>
            </div>
          </div>
          <div className={`${styles.plaque} ${styles.plaqueReserved}`}>
            <p className={`${styles.plaqueText} ${styles.plaqueTextMuted}`}>
              · · ·
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
