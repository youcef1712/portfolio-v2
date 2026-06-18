"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TextRotator({
  texts,
  interval = 3000,
  style,
}: {
  texts: readonly string[];
  interval?: number;
  style?: React.CSSProperties;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span
      style={{
        display: "inline-flex",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "bottom",
        ...style,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
