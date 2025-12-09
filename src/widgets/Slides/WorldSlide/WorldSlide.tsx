import styles from "./WorldSlide.module.scss";

const locations = [
  {
    name: "Гора Техдолга",
    description: "Главная битва с legacy и архитектурой",
  },
  {
    name: "Лес Запутанных Требований",
    description: "Блуждали, но вышли живыми",
  },
  { name: "Город Релизов", description: "Крупные поставки и улучшения" },
  { name: "Пустоши Ошибок", description: "Ошибка 500 и её родственники" },
  { name: "Храм Метрик", description: "Данные, аналитика, контроль" },
  { name: "Порт 2026", description: "Начало нового эпического пути" },
];

export const WorldSlide: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мир Команды — Локации Года</h2>

      <div className={styles.content}>
        {/* карта */}
        <div className={styles.mapWrapper}>
          <img src="/images/map.png" className={styles.map} />
        </div>

        {/* список локаций */}
        <div className={styles.locations}>
          {locations.map((loc, i) => (
            <div key={i} className={styles.locationCard}>
              <h3>{loc.name}</h3>
              <p>{loc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
