"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--background)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{
              fontSize: "52px",
              fontWeight: 800,
              letterSpacing: "-2px",
              color: "var(--foreground)",
            }}
          >
            YB<span style={{ color: "var(--accent)" }}>.</span>
          </motion.div>

          <div
            style={{
              width: "120px",
              height: "3px",
              borderRadius: "2px",
              background: "var(--background-tertiary)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{
                height: "100%",
                borderRadius: "2px",
                background:
                  "linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #f97316))",
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontSize: "12px",
              color: "var(--foreground-muted)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Chargement
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
