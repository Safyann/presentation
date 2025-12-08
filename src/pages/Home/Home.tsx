import { observer } from "mobx-react-lite";

import { TeamSlide } from "~/widgets/Slides/TeamSlide";
import { TitleSlide } from "~/widgets/Slides/TitleSlide";

import { useSlideScroll } from "~/shared/lib/hooks/useSlideScroll";

import styles from "./Home.module.scss";
import { WorldSlide } from "~/widgets/Slides/WorldSlide";
import { QuestSlide } from "~/widgets/Slides/QuestSlide";
import { TeamProgressSlide } from "~/widgets/Slides/TeamProgressSlide";

export const Home = observer(() => {
  const active = useSlideScroll(5);

  return (
    <main className={styles.wrapper}>
      <div
        className={styles.slides}
        style={{ transform: `translateY(-${active * 100}vh)` }}
      >
        <section className={styles.slide}>
          <TitleSlide />
        </section>

        <section className={styles.slide}>
          <TeamSlide />
        </section>

        <section className={styles.slide}>
          <WorldSlide />
        </section>

        <section className={styles.slide}>
          <QuestSlide />
        </section>

        <section className={styles.slide}>
          <TeamProgressSlide />
        </section>
      </div>
    </main>
  );
});
