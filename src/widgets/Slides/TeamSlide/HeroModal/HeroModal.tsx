import styles from "./HeroModal.module.scss";

export const HeroModal = ({ hero, onClose }) => {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрывал
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.portrait}>
          <img src={hero.image} alt={hero.name} />
        </div>

        <h2 className={styles.name}>{hero.name}</h2>

        <h3 className={styles.subtitle}>Способности</h3>
        <ul className={styles.abilities}>
          {hero.abilities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
