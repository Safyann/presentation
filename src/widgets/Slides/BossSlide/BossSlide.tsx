import { useState } from "react";

import styles from "./BossSlide.module.scss";

const bosses = [
  {
    name: "Дракон Дедлайнов",
    danger: "Высокая",
    attacks: [
      "Резкие изменения сроков",
      "Срочные хотфиксы",
      "Неожиданные блокеры",
    ],
    win: "Команда синхронизировалась, распределила роли и вытащила релиз.",
    reward: "Артефакт: «Щит Спокойствия Релизов»",
  },
  {
    name: "Голем Техдолга",
    danger: "Средняя",
    attacks: [
      "Ломкие модули",
      "Неочевидные зависимости",
      "Отсутствие документации",
    ],
    win: "Постепенно разрушали его рефакторингом и ревью.",
    reward: "Способность: «Укрощение Legacy +1»",
  },
];

export const BossSlide = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Финальные Боссы Года</h2>

      <div className={styles.content}>
        {/* Левая часть: абстрактная иллюстрация */}
        <div className={styles.bossIllustration}>
          <img src={`/images/boss-${active + 1}.png`} />
        </div>

        {/* Правая часть: список боссов */}
        <div className={styles.bossList}>
          {bosses.map((boss, index) => (
            <div
              key={index}
              className={`${styles.bossCard} ${
                index === active ? styles.active : ""
              }`}
              onClick={() => setActive(index)}
            >
              <h3>{boss.name}</h3>
              <p className={styles.danger}>Угроза: {boss.danger}</p>

              <p className={styles.sectionTitle}>Атаки:</p>
              <ul className={styles.attacks}>
                {boss.attacks.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              <p className={styles.sectionTitle}>Победа:</p>
              <p className={styles.text}>{boss.win}</p>

              <p className={styles.sectionTitle}>Награда:</p>
              <p className={styles.reward}>{boss.reward}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
