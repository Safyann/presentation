import { useMouseParallax } from "~/shared/lib/hooks/useMouseParallax";
import styles from "./TitleSlide.module.scss";

export const TitleSlide: React.FC = () => {
  const map = useMouseParallax(25); // сильный эффект
  const text = useMouseParallax(60); // слабый эффект

  return (
    <div className={styles.container}>
      {/* Левая часть — карта с сильным параллаксом */}
      <div
        className={styles.mapWrapper}
        style={{ transform: `translate(${map.x}px, ${map.y}px)` }}
      >
        <div className={styles.map} />
      </div>

      {/* Правая часть — блок текста с мягким параллаксом */}
      <div
        className={styles.content}
        style={{ transform: `translate(${text.x}px, ${text.y}px)` }}
      >
        <h1 className={styles.title}>КАРТА ПРИКЛЮЧЕНИЙ КОМАНДЫ — 2025</h1>

        <p className={styles.subtitle}>
          Путешествие через испытания, победы и финальных боссов. Всё — ради
          ценности для бизнеса и роста команды.
        </p>

        <div className={styles.meta}>
          <span>Команда: Фронтенд / Фулстек</span>
          <span>Локация: Королевство Продуктивных Релизов</span>
          <span>Версия 1.0 — начало эпического пути 2026</span>
        </div>
      </div>
    </div>
  );
};
