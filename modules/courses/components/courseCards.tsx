"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CARDS_DATA = [
  {
    id: "all-courses",
    title: "All Courses",
    subtitle: "courses you're powering through right now.",
    count: "23",
    icons: [
      "/images/react.svg",
      "/images/like.svg",
      "/images/vue.svg",
      "/images/pencil.svg",
    ],
  },
  {
    id: "upcoming-courses",
    title: "Upcoming Courses",
    subtitle: "exciting new courses waiting to boost your skills.",
    count: "05",
    icons: [
      "/images/react.svg",
      "/images/like.svg",
      "/images/vue.svg",
      "/images/pencil.svg",
    ],
  },
  {
    id: "ongoing-courses",
    title: "Ongoing Courses",
    subtitle: "currently happening—don't miss out on the action!",
    count: "10",
    icons: [
      "/images/react.svg",
      "/images/like.svg",
      "/images/vue.svg",
      "/images/pencil.svg",
    ],
  },
];

export default function CourseCards() {
  const [activeId, setActiveId] = useState("all-courses");

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
      <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
        {CARDS_DATA.map((card) => {
          const isBig = activeId === card.id;

          return (
            <motion.div
              key={card.id}
              layout
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              onClick={() => setActiveId(card.id)}
              className={`cursor-pointer rounded-3xl md:rounded-4xl p-6 md:p-9 transition-colors duration-300 ${
                isBig
                  ? "col-span-12 md:col-span-6 bg-red-800 text-white flex flex-col space-y-8 md:space-y-12"
                  : "col-span-12 sm:col-span-6 md:col-span-3 bg-[#fbf0ef] text-red-800 flex flex-col justify-between h-auto md:h-[420px]"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {isBig ? (
                  <motion.div
                    key="big-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col space-y-8 md:space-y-12 w-full"
                  >
                    <div className="flex items-center justify-end">
                      <Button
                        className="bg-transparent outline-0 border-0 text-sm cursor-pointer hover:bg-transparent text-white p-0 flex items-center gap-2"
                        variant="outline"
                      >
                        View all courses
                        <ArrowRight size={18} />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                      {card.icons.map((icon, idx) => (
                        <Image
                          key={idx}
                          src={icon}
                          alt="tech-icon"
                          width={100}
                          height={100}
                          className="object-contain w-16 h-16 md:w-20 md:h-20"
                        />
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 items-start sm:items-center pt-2 md:pt-4">
                      <h3 className="font-bold text-7xl sm:text-8xl md:text-[120px] leading-none flex items-start">
                        {card.count}
                        <span className="text-4xl sm:text-6xl font-bold -mt-1">
                          +
                        </span>
                      </h3>
                      <div className="flex flex-col space-y-1">
                        <p className="font-bold text-xl md:text-2xl">
                          {card.title}
                        </p>
                        <span className="text-xs md:text-sm opacity-90 max-w-xs">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="small-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-row md:flex-col justify-between  md:justify-start gap-4 md:gap-7 items-center md:items-start w-full"
                  >
                    <div className="flex flex-col justify-center md:[writing-mode:vertical-rl] md:rotate-180 md:max-h-[220px] gap-1 md:gap-2">
                      <h3 className="font-bold text-xl md:text-3xl  leading-tight md:leading-none">
                        {card.title}
                      </h3>
                      <p className="text-xs md:text-sm opacity-80">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="flex items-start md:mt-auto">
                      <span className="text-5xl sm:text-7xl md:text-[120px] font-bold leading-none tracking-tight">
                        {card.count}
                      </span>
                      <Plus className="mt-1" size={24} strokeWidth={3} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
