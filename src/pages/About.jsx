import styles from "./about.module.css";
import foto from "../assets/foto_portifolio2-sf.png";

const icons = [
  // topo espalhado
  {
    id: 1,
    type: "folder",
    label: "sobre_mim.folder",
    color: "#6d3a3c",
    top: "3%",
    left: "3%",
  },
  {
    id: 2,
    type: "folder",
    label: "sonhos.file",
    color: "#361319",
    top: "2%",
    left: "22%",
  },
  {
    id: 3,
    type: "folder",
    label: "interesses.folder",
    color: "#7b694e",
    top: "3%",
    left: "72%",
  },
  {
    id: 4,
    type: "folder",
    label: "musicas.playlist",
    color: "#280b0f",
    top: "2%",
    right: "3%",
  },

  // meio lateral esquerdo
  {
    id: 5,
    type: "file",
    label: "readme.txt",
    color: "#6d3a3c",
    top: "38%",
    left: "1%",
  },
  {
    id: 6,
    type: "folder",
    label: "cafe.log",
    color: "#7b694e",
    top: "58%",
    left: "3%",
  },

  // meio lateral direito
  {
    id: 7,
    type: "file",
    label: "maria_luisa.png",
    color: "#361319",
    top: "35%",
    right: "1%",
  },
  {
    id: 8,
    type: "folder",
    label: "iso27001.cert",
    color: "#6d3a3c",
    top: "60%",
    right: "3%",
  },

  // base espalhada
  {
    id: 9,
    type: "folder",
    label: "hackathon_9lugar.zip",
    color: "#280b0f",
    bottom: "3%",
    left: "4%",
  },
  {
    id: 10,
    type: "file",
    label: "projetos.zip",
    color: "#7b694e",
    bottom: "2%",
    left: "24%",
  },
  {
    id: 11,
    type: "folder",
    label: "iff.curso",
    color: "#361319",
    bottom: "3%",
    left: "70%",
  },
  {
    id: 12,
    type: "file",
    label: "links.url",
    color: "#6d3a3c",
    bottom: "2%",
    right: "3%",
  },
];

function FolderIcon({ color }) {
  return (
    <svg
      width="64"
      height="54"
      viewBox="0 0 52 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10C2 7.8 3.8 6 6 6H20L24 10H46C48.2 10 50 11.8 50 14V38C50 40.2 48.2 42 46 42H6C3.8 42 2 40.2 2 38V10Z"
        fill={color}
        fillOpacity="0.85"
      />
      <rect
        x="2"
        y="14"
        width="48"
        height="28"
        rx="2"
        fill={color}
        fillOpacity="0.65"
      />
    </svg>
  );
}

function FileIcon({ color }) {
  return (
    <svg
      width="50"
      height="62"
      viewBox="0 0 42 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2H28L40 14V46C40 48.2 38.2 50 36 50H6C3.8 50 2 48.2 2 46V4C2 2.9 2.9 2 4 2Z"
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        d="M28 2L40 14H30C28.9 14 28 13.1 28 12V2Z"
        fill={color}
        fillOpacity="0.3"
      />
      <line
        x1="10"
        y1="22"
        x2="32"
        y2="22"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <line
        x1="10"
        y1="28"
        x2="32"
        y2="28"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <line
        x1="10"
        y1="34"
        x2="24"
        y2="34"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="1"
      />
    </svg>
  );
}

function About() {
  return (
    <section className={styles.about} id="about">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={styles.icon}
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
          }}
        >
          {icon.type === "folder" ? (
            <FolderIcon color={icon.color} />
          ) : (
            <FileIcon color={icon.color} />
          )}
          <span className={styles.iconLabel}>{icon.label}</span>
        </div>
      ))}

      <div className={styles.window}>
        <div className={styles.windowBar}>
          <div className={styles.windowDots}>
            <span className={styles.dot} style={{ background: "#c47a7a" }} />
            <span className={styles.dot} style={{ background: "#c4a87a" }} />
            <span className={styles.dot} style={{ background: "#7aaa8a" }} />
          </div>
          <span className={styles.windowTitle}>sobre_mim.txt</span>
        </div>

        <div className={styles.windowBody}>
          <div className={styles.windowLeft}>
            <img
              src={foto}
              alt="Maria Luisa Sanches"
              className={styles.photo}
            />
          </div>
          <div className={styles.windowRight}>
            <p className={styles.bio}>
              Desenvolvedora Front-End em formação, cursando Sistemas de
              Informação no IFF. Construo interfaces modernas com React,
              JavaScript e CSS — sempre com atenção obsessiva aos detalhes e
              foco na experiência do usuário.
            </p>
            <p className={styles.bio}>
              Em 2026, fiquei em <strong>9º lugar no Hackathon NewHack</strong>,
              entregando uma plataforma do zero sob pressão de tempo.
              Certificada em ISO/IEC 27001 e acredito que código, design e
              segurança andam juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
