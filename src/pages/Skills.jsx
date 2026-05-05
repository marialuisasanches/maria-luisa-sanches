// Skills.jsx
import styles from "./skills.module.css";
import foto from "../assets/img_estatua.png";

const skills = [
  {
    name: "React",
    category: "Frontend",
    svg: "https://cdn.simpleicons.org/react/6d3a3c",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    svg: "https://cdn.simpleicons.org/javascript/6d3a3c",
  },
  {
    name: "CSS",
    category: "Frontend",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "HTML",
    category: "Frontend",
    svg: "https://cdn.simpleicons.org/html5/6d3a3c",
  },
  {
    name: "Figma",
    category: "Design",
    svg: "https://cdn.simpleicons.org/figma/6d3a3c",
  },
  {
    name: "Git",
    category: "Ferramentas",
    svg: "https://cdn.simpleicons.org/git/6d3a3c",
  },
  {
    name: "GitHub",
    category: "Ferramentas",
    svg: "https://cdn.simpleicons.org/github/6d3a3c",
  },
  {
    name: "Vite",
    category: "Ferramentas",
    svg: "https://cdn.simpleicons.org/vite/6d3a3c",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    svg: "https://cdn.simpleicons.org/framer/6d3a3c",
  },
];

function Skills() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>

      <div className={styles.grid}>
        {skills.map((skill) => (
          <div className={styles.card} key={skill.name}>
            <img
              src={skill.svg}
              alt={skill.name}
              className={styles.icon}
              onError={(e) => (e.target.style.opacity = "0.2")}
            />
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.skillCategory}>{skill.category}</span>
          </div>
        ))}
      </div>

      <img className={styles.image} src={foto} alt="Estatua" />
    </div>
  );
}

export default Skills;
