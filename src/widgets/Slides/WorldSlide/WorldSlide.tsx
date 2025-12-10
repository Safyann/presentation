import styles from "./WorldSlide.module.scss";

const locations = [
  {
    name: "Гора Техдолга",
    description:
      "Древняя вершина, где обитают монолиты legacy-кода. Здесь команда сражалась со старыми модулями и укрепляла архитектуру.",
  },
  {
    name: "Лес Запутанных Требований",
    description:
      "Туманное место, где тропы постоянно меняются. Команда училась находить путь сквозь недосказанность и уточнять цели.",
  },
  {
    name: "Город Релизов",
    description:
      "Шумный мегаполис, где каждая фича проходит испытание стабильностью. Здесь рождаются релизы и угасают баги.",
  },
  {
    name: "Пустоши Ошибок",
    description:
      "Бесплодные земли, наполненные ошибками 400–500 уровней. Команда очищала территорию и поднимала надёжность.",
  },
  {
    name: "Храм Метрик",
    description:
      "Священное место данных, где открывается реальная картина происходящего. Здесь команда обрела аналитическую ясность.",
  },
  {
    name: "Порт 2026",
    description:
      "Большая гавань, откуда начинается следующая эпическая кампания. Здесь открываются новые горизонты и планы команды.",
  },
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
