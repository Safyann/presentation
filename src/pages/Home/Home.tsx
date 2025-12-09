import { observer } from "mobx-react-lite";

import { BossSlide } from "~/widgets/Slides/BossSlide";
import { Campaign2026Slide } from "~/widgets/Slides/Campaign2026Slide";
import { FinalSlide } from "~/widgets/Slides/FinalSlide";
import { QuestSlide } from "~/widgets/Slides/QuestSlide";
import { TeamProgressSlide } from "~/widgets/Slides/TeamProgressSlide";
import { TeamSlide } from "~/widgets/Slides/TeamSlide";
import { TitleSlide } from "~/widgets/Slides/TitleSlide";
import { WorldSlide } from "~/widgets/Slides/WorldSlide";

import { useSlideScroll } from "~/shared/lib/hooks/useSlideScroll";

import styles from "./Home.module.scss";

export const Home = observer(() => {
  const active = useSlideScroll(8);

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

        <section className={styles.slide}>
          <BossSlide />
        </section>

        <section className={styles.slide}>
          <Campaign2026Slide />
        </section>

        <section className={styles.slide}>
          <FinalSlide />
        </section>
      </div>
    </main>
  );
});
