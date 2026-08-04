import { useEffect, useState } from "react";

export function useCountUp(target: number, durationStr = "1.5s") {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  const startCount = () => {
    if (hasTriggered) return;
    setHasTriggered(true);
    let startTimestamp: number | null = null;
    const duration = parseFloat(durationStr) * 1000;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return { count, startCount };
}
