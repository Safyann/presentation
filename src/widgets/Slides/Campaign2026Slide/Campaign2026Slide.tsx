import styles from "./Campaign2026Slide.module.scss";

export const Campaign2026Slide = () => {
  const goals = [
    "Достичь ещё большей стабильности релизов",
    "Прокачать архитектуру и снизить техдолг",
    "Укрепить аналитическую прозрачность",
    "Ускорить передачу задач и завершение фич",
    "орасти до уровня 6+",
    "Выйти в новые домены и проекты",
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
