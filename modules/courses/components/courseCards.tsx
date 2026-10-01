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
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* 10 Columns Grid Strategy: Big (6 cols) + Small (2 cols) + Small (2 cols) = 10 */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {CARDS_DATA.map((card) => {
          const isBig = activeId === card.id;

          return (
            <motion.div
              key={card.id}
              layout // Framer Motion smooth width/layout transition
              transition={{ type: "spring", stiffness: 220, damping: 25 }}
              onClick={() => setActiveId(card.id)}
              className={`cursor-pointer rounded-4xl p-9 transition-colors duration-300 ${
                isBig
                  ? "col-span-6 bg-red-800 text-white flex flex-col space-y-12"
                  : "col-span-3 bg-[#fbf0ef] text-red-800 flex flex-col justify-between h-[480px]"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {isBig ? (
                  /* ================= BIG RED BOX CONTENT ================= */
                  <motion.div
                    key="big-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col space-y-12 w-full"
                  >
                    {/* Top Action Button */}
                    <div className="flex items-center justify-end">
                      <Button
                        className="bg-transparent outline-0 border-0 text-sm cursor-pointer hover:bg-transparent text-white p-0 flex items-center gap-2"
                        variant="outline"
                      >
                        View all courses
                        <ArrowRight size={18} />
                      </Button>
                    </div>

                    {/* Tech / Category Icons */}
                    <div className="grid grid-cols-4 gap-4 items-center">
                      {card.icons.map((icon, idx) => (
                        <Image
                          key={idx}
                          src={icon}
                          alt="tech-icon"
                          width={100}
                          height={100}
                          className="object-contain"
                        />
                      ))}
                    </div>

                    {/* Bottom Number + Title */}
                    <div className="flex space-x-6 items-center pt-4">
                      <h3 className="font-bold text-[140px] leading-none flex items-start">
                        {card.count}
                        <span className="text-6xl font-bold -mt-1">+</span>
                      </h3>
                      <div className="flex flex-col space-y-1">
                        <p className="font-bold text-2xl">{card.title}</p>
                        <span className="text-sm opacity-90 max-w-xs">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* ================= SMALL INACTIVE BOX CONTENT ================= */
                  <motion.div
                    key="small-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-7"
                  >
                    {/* Vertical Rotating Title Section */}
                    <div className="flex flex-col justify-center [writing-mode:vertical-rl] rotate-180 max-h-[220px] gap-2 ">
                      <h3 className="font-bold text-3xl leading-none">
                        {card.title}
                      </h3>
                      <p className="text-sm opacity-80 ">{card.subtitle}</p>
                    </div>

                    {/* Small Number & Plus Icon */}
                    <div className="flex items-start mt-auto">
                      <span className="text-[140px] font-bold leading-none tracking-tight">
                        {card.count}
                      </span>
                      <Plus className="mt-1" size={32} strokeWidth={3} />
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
