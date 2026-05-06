import styles from "./contact.module.css";

const contacts = [
  {
    label: "LinkedIn",
    value: "maria-luisa-sanches",
    href: "https://linkedin.com/in/maria-luisa-sanches",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  },
  {
    label: "GitHub",
    value: "marialuisasanches",
    href: "https://github.com/marialuisasanches",
    svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "Email",
    value: "marialuisasanches.dev@gmail.com",
    href: "mailto:marialuisasanches.dev@gmail.com",
    svg: "https://cdn.simpleicons.org/gmail/6d3a3c",
  },
];

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.postcard}>
        {/* lado esquerdo — imagem/stamp */}
        <div className={styles.left}>
          <div className={styles.stamp}>
            <p className={styles.stampText}>Maria Luisa</p>
            <p className={styles.stampSub}>Frontend Dev</p>
          </div>
          <p className={styles.phrase}>
            Se você chegou até aqui,
            <br />
            já sabe o suficiente.
            <br />
            <em>O próximo passo é seu.</em>
          </p>
        </div>

        {/* divisória */}
        <div className={styles.divider} />

        {/* lado direito */}
        <div className={styles.right}>
          <div className={styles.stamps}>
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.stampSticker}
              >
                <img src={c.svg} alt={c.label} className={styles.stickerIcon} />
                <p className={styles.stickerLabel}>{c.label}</p>
              </a>
            ))}
          </div>

          <p className={styles.cta}>clique nos selos para entrar em contato</p>

          <div className={styles.addressBlock}>
            <p className={styles.to}>Para:</p>
            <p className={styles.name}>Você</p>
            <p className={styles.address}>Qualquer lugar do mundo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
