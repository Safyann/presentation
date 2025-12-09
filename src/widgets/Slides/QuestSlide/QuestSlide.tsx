import { useState } from "react";

import styles from "./QuestSlide.module.scss";

const quests = [
  {
    title: "Гора Техдолга",
    subtitle: "Битва с legacy и стабилизация архитектуры",
    story:
      "Команда столкнулась с древними файлами эпохи До-Компонентной. \
Мы устраняли хаос в стилях, переписывали старые модули и создавали новые точки опоры.",
    result: "Снижение багов, ускорение разработки новых фич на.",
    reward: [
      "Навык «Рефакторинг Реальности +1»",
      "Артефакт: Укрощённый Legacy",
      "Повышение чистоты кода",
    ],
  },
  {
    title: "Город Релизов",
    subtitle: "Крупные поставки и успешные интеграции",
    story:
      "Команда прошла через несколько крупных релизов без падений продакшна. \
Каждый релиз — маленькая победа над хаосом и дедлайнами.",
    result: "Ускорение time-to-market, повышение стабильности релизов.",
    reward: [
      "Артефакт: Реликвия CI/CD",
      "Способность: «Спокойствие Продакшна»",
    ],
  },
  {
    title: "Храм Метрик",
    subtitle: "Внедрение аналитики и прозрачности",
    story:
      "Появились метрики, которые наконец-то показывают реальность. \
Айнур призвал МЕТРИКУ, и теперь бизнес видит всё.",
    result: "Данные перестали быть туманом, стали инструментом.",
    reward: [
      "Способность: «Метрика Призыва» (усиленная)",
      "Артефакт: Око Аналитики",
    ],
  },
];

export const QuestSlide: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Квестовый Журнал</h2>

      <div className={styles.content}>
        {/* Список квестов */}
        <div className={styles.questList}>
          {quests.map((q, index) => (
            <div
              key={index}
              className={`${styles.questItem} ${active === index ? styles.active : ""}`}
              onClick={() => setActive(index)}
            >
              {q.title}
            </div>
          ))}
        </div>

        {/* Подробности квеста */}
        <div className={styles.questDetails}>
          <h3>{quests[active].title}</h3>
          <p className={styles.subtitle}>{quests[active].subtitle}</p>

          <p className={styles.sectionTitle}>История</p>
          <p className={styles.text}>{quests[active].story}</p>

          <p className={styles.sectionTitle}>Результат</p>
          <p className={styles.text}>{quests[active].result}</p>

          <p className={styles.sectionTitle}>Награда</p>
          <ul className={styles.rewardList}>
            {quests[active].reward.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
