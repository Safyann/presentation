import styles from "./Campaign2026Slide.module.scss";

export const Campaign2026Slide = () => {
  const goals = [
    "Стандартизация и консистентность процессов",
    "Укрепление архитектуры и уменьшение техдолга",
    "Усиление аналитики и метрик",
    "Развитие дизайн-системы",
    "Автоматизация и улучшение CI/CD",
    "Рост компетенций и развитие команды",
    "Укрепление взаимодействия с бизнесом",
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Кампания 2026 — Новая Глава</h2>

      <div className={styles.content}>
        {/* Иллюстрация */}
        <div className={styles.art}>
          <img src="/images/future-portal.png" alt="Portal to 2026" />
        </div>

        {/* Цели */}
        <div className={styles.goals}>
          <h3 className={styles.subtitle}>Главные квесты года:</h3>
          <ul>
            {goals.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
