import styles from "./TeamProgressSlide.module.scss";

export const TeamProgressSlide = () => {
  const stats = [
    { label: "Скорость релизов", value: 65 },
    { label: "Качество кода", value: 68 },
    { label: "Закрытие квестов", value: 82 },
    { label: "Синхронизация команды", value: 78 },
    { label: "Рост компетенций", value: 81 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Прогресс Команды — LVL UP</h2>

      <div className={styles.content}>
        {/* Левая панель — общий уровень */}
        <div className={styles.levelPanel}>
          <div className={styles.levelCircle}>
            <span className={styles.levelValue}>5</span>
            <p className={styles.levelLabel}>Уровень команды</p>
          </div>

          <p className={styles.description}>
            Команда получила новый уровень благодаря выполненным квестам,
            изученным технологиям и успешным релизам.
          </p>
        </div>

        {/* Правая панель — характеристики */}
        <div className={styles.statsPanel}>
          {stats.map((s, index) => (
            <div key={index} className={styles.statRow}>
              <span className={styles.statLabel}>{s.label}</span>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${s.value}%` }}
                />
              </div>

              <span className={styles.statValue}>{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
