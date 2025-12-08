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
  // можно добавлять новых героев
];

export const TeamSlide: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Герои Команды</h2>

      <div className={styles.heroGrid}>
        {heroes.map((hero, i) => (
          <div key={i} className={styles.heroCard}>
            <div className={styles.imageWrapper}>
              <img src={hero.image} alt={hero.name} />
            </div>

            <h3 className={styles.heroName}>{hero.name}</h3>
            <p className={styles.heroRole}>{hero.role}</p>

            <ul className={styles.abilities}>
              {hero.abilities.map((a, j) => (
                <li key={j}>{a}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
