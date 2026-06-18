"use client";

import { useEffect, useState, useRef } from "react";

export function AnimatedCounter({
  value,
  duration = 2000,
  inView,
}: {
  value: string;
  duration?: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numericMatch[1], 10);
    const suffix = value.slice(numericMatch[1].length);
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  return <>{display}</>;
}
