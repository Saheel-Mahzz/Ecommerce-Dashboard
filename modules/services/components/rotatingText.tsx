"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["UI & UX", "Development", "Blockchain"];

export default function MultiLineRollingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const line1Text = WORDS[index % WORDS.length];
  const line2Text = WORDS[(index + 1) % WORDS.length];
  const line3Text = WORDS[(index + 2) % WORDS.length];

  return (
    <div className="font-bold text-5xl leading-tight tracking-tight flex flex-col space-y-2 py-4">
      <RollingSlot text={line1Text} active={false} />
      <RollingSlot text={line2Text} active={true} />
      <RollingSlot text={line3Text} active={false} />
    </div>
  );
}

function RollingSlot({ text }: { text: string; active: boolean }) {
  return (
    <div className={`relative overflow-hidden h-[1.2em] flex items-center}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={text}
          initial={{ y: "100%", rotateX: -80, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          exit={{ y: "-100%", rotateX: 80, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="origin-center"
        >
          {text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
