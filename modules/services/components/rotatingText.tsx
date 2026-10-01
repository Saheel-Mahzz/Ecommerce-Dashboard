"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORD_A = "UI & UX";
const WORD_B = "Development";

export default function MultiLineRollingText() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Har 2.5s ma rolling shift trigger garne
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Toggle huda line pattern flip hunchha
  const line1Text = toggle ? WORD_B : WORD_A; // UI & UX  <->  Development
  const line2Text = toggle ? WORD_A : WORD_B; // Development <-> UI & UX
  const line3Text = toggle ? WORD_B : WORD_A; // UI & UX  <->  Development

  return (
    <div className="font-bold text-5xl leading-tight tracking-tight flex flex-col space-y-2 py-4">
      {/* LINE 1 */}
      <RollingSlot text={line1Text} active={false} />

      {/* LINE 2 (Center Active Highlighted Line) */}
      <RollingSlot text={line2Text} active={true} />

      {/* LINE 3 */}
      <RollingSlot text={line3Text} active={false} />
    </div>
  );
}

// Reusable Single Line Rolling Slot Component
function RollingSlot({ text, active }: { text: string; active: boolean }) {
  return (
    <div
      className={`relative overflow-hidden h-[1.2em] flex items-center [perspective:1000px] `}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={text}
          // Rolling Entrance & Exit Animation Props
          initial={{ y: "100%", rotateX: -80, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          exit={{ y: "-100%", rotateX: 80, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1], // Luxury smooth easing curve
          }}
          className="origin-center [transform-style:preserve-3d]"
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
