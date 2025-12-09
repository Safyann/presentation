import { useState } from "react";

import { HeroModal } from "./HeroModal";
import styles from "./TeamSlide.module.scss";

interface Hero {
  name: string;
  role: string;
  image: string;
  abilities: string[];
}

const heroes: Hero[] = [
  {
    name: "Алёна",
    role: "Тимлид фронтенд команды",
    image: "/images/heroes/alena.png",
    abilities: [
      "Призыв Синхронизации",
      "Рефакторинг Реальности",
      "Щит Спокойствия",
    ],
  },
  {
    name: "Коля",
    role: "Фронтенд → Фулстек разработчик",
    image: "/images/heroes/kolya.png",
    abilities: ["Стрела Типизации", "Перекат в Фулстек", "Призыв Логов"],
  },
  {
    name: "Айнур",
    role: "Фронтенд разработчик, «Микрофронт», Связной Яндекса",
    image: "/images/heroes/ainur.png",
    abilities: ["Метрика Призыва", "Путь Чистого CSS", "Голос Микрофронта"],
  },
  {
    name: "Саша",
    role: "Фронтенд разработчик — Тайный Душнила",
    image: "/images/heroes/sasha.png",
    abilities: [
      "Клинок Разделения Слоёв",
      "Призыв Типобезопасности",
      "Тень Архитектуры Next",
    ],
  },
];

export const TeamSlide: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Герои Команды</h2>

      <div className={styles.heroGrid}>
        {heroes.map((hero, i) => (
          <div
            key={i}
            className={styles.heroCard}
            onClick={() => setSelectedHero(hero)}
          >
            <div className={styles.imageWrapper}>
              <img src={hero.image} alt={hero.name} />
            </div>

            <h3 className={styles.heroName}>{hero.name}</h3>

            <p className={styles.heroRole}>{hero.role}</p>
          </div>
        ))}
      </div>

      {selectedHero && (
        <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
      )}
    </div>
  );
};
