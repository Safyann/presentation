import { useEffect, useState } from "react";

export const useSlideScroll = (maxSlides: number) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      setIsScrolling(true);

      if (e.deltaY > 0) {
        // scroll down
        setActiveSlide((s) => Math.min(s + 1, maxSlides - 1));
      } else {
        // scroll up
        setActiveSlide((s) => Math.max(s - 1, 0));
      }

      // блокируем быстрое переключение
      setTimeout(() => setIsScrolling(false), 900);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isScrolling, maxSlides]);

  return activeSlide;
};
