import styles from "./FinalSlide.module.scss";

export const FinalSlide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <h1 className={styles.title}>Путь продолжается…</h1>

      <p className={styles.subtitle}>
        Глава 2025 завершена, но впереди — новая кампания.
      </p>
    </div>
  );
};
