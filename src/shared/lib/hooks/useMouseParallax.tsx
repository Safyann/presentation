import { useEffect, useState } from "react";

export const useMouseParallax = (intensity = 20) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / intensity;
      const y = (e.clientY - window.innerHeight / 2) / intensity;

      setOffset({ x: -x, y: -y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [intensity]);

  return offset;
};
