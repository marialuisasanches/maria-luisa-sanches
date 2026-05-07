import styles from "./projects.module.css";
import dedoDeus from "../assets/dedoDeDeus.png";
import dedoAdao from "../assets/dedoDeAdao.png";
import Astrova from "../assets/astrova.png";
import Reellist from "../assets/reellist.png";
import ImpactHub from "../assets/impacthub.jpg";
import CodeSprint from "../assets/codeSprint.png";
import Vecta from "../assets/vecta.png";

const projects = [
  {
    title: "Astrova",
    desc: "Plataforma de dados espaciais em React que consome múltiplas APIs da NASA para fornecer insights astronômicos em tempo real.",
    techs: ["React", "JavaScript", "API"],
    href: "https://astrova-rouge.vercel.app",
    image: Astrova,
  },
  {
    title: "Reellist",
    desc: "Explore, busque e favorite filmes com a API do TMDB. React + Vite, com persistência local e deploy na Vercel.",
    techs: ["React", "JavaScript", "API"],
    href: "https://reellist.vercel.app",
    image: Reellist,
  },
  {
    title: "ImpactHub",
    desc: "Plataforma web para gestão de eventos e iniciativas de ONGs, com feed dinâmico, autenticação e painel administrativo.",
    techs: ["React", "TypeScript", "Tailwind", "Vite", "Vitest", "Playwright"],
    href: "https://github.com/marialuisasanches/impacthub",
    image: ImpactHub,
  },
  {
    title: "VectaBio",
    desc: "Landing page para o perfil de contabilidade VectaBio, com foco em apresentação de serviços e identidade visual da marca.",
    techs: ["React", "JavaScript"],
    href: "https://vectasolucoescontabeis.vercel.app/",
    image: Vecta,
  },
  {
    title: "CodeSprint",
    desc: "Plataforma desktop que integra board visual, backlog e GitHub num fluxo baseado em markdown.",
    techs: ["Electron", "React", "JavaScript"],
    href: "https://github.com/marialuisasanches/CodeSprint",
    image: CodeSprint,
  },
];

const firstRow = projects.slice(0, 3);
const secondRow = projects.slice(3);

function Projects() {
  return (
    <div className={styles.container}>
      <img src={dedoDeus} alt="Dedo de Deus" className={styles.dedoDeus} />
      <h1 className={styles.title}>Projetos</h1>
      <img src={dedoAdao} alt="Dedo de Adão" className={styles.dedoAdao} />

      <div className={styles.cards}>
        {/* grid único no mobile */}
        <div className={styles.gridMobile}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.techs}>
                  {project.techs.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* layout original no tablet+ */}
        <div className={styles.rowDesktop}>
          {firstRow.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.techs}>
                  {project.techs.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.rowCenteredDesktop}>
          {secondRow.map((project, index) => (
            <a
              key={index + 3}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                />
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.techs}>
                  {project.techs.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
