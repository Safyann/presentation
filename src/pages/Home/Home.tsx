import { observer } from "mobx-react-lite";

import { TeamSlide } from "~/widgets/Slides/TeamSlide";
import { TitleSlide } from "~/widgets/Slides/TitleSlide";

import { useInView } from "~/shared/lib/hooks/useInView";
import { PageSection } from "~/shared/ui/PageSection";

export const Home = observer(() => {
  const title = useInView<HTMLDivElement>();
  const team = useInView<HTMLDivElement>();

  return (
    <main>
      {/* --- Первый слайд --- */}
      <PageSection visible={title.visible}>
        <div ref={title.ref}>
          <TitleSlide />
        </div>
      </PageSection>

      {/* --- Второй слайд --- */}
      <PageSection visible={team.visible}>
        <div ref={team.ref}>
          <TeamSlide />
        </div>
      </PageSection>
    </main>
  );
});
