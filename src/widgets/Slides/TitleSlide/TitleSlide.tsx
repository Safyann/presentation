import { useParallax } from "~/shared/lib/hooks/useParallax";

import styles from "./TitleSlide.module.scss";

export const TitleSlide: React.FC = () => {
  const mapOffset = useParallax(0.2); // медленный слой
  const textOffset = useParallax(0.5); // быстрый слой

  return (
    <div className={styles.container}>
      {/* Карта слева — медленный параллакс */}
      <div
        className={styles.mapWrapper}
        style={{ transform: `translateY(${mapOffset}px)` }}
      >
        <div className={styles.parallax} />
      </div>

      {/* Контент справа — более заметный параллакс */}
      <div
        className={styles.content}
        style={{ transform: `translateY(${textOffset}px)` }}
      >
        <h1 className={styles.title}>КАРТА ПРИКЛЮЧЕНИЙ КОМАНДЫ — 2025</h1>

        <p className={styles.subtitle}>
          Путешествие через испытания, победы и финальных боссов. Всё — ради
          ценности для бизнеса и роста команды.
        </p>

        <div className={styles.meta}>
          <span>Команда: Фронтенд / Фулстек</span>
          <span>Локация: Королевство Продуктивных Релизов</span>
          <span>Версия 1.0 — перед началом нового путешествия 2026</span>
        </div>
      </div>
    </div>
  );
};
