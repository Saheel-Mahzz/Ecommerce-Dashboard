import React from "react";

export default function UpcomingCourses() {
  return (
    <div className="bg-red-300 p-7 rounded-4xl flex flex-col overflow-hidden text-red-700">
      <div className="flex flex-col [writing-mode:vertical-rl] rotate-180  justify-center  max-h-1/2">
        <h3 className="font-bold text-3xl leading-none">Upcoming Courses</h3>
        <p className="text-sm opacity-80 mt-2">
          exciting new courses waiting to boost your skills.
        </p>
      </div>

      <h3 className="text-[150px] font-bold leading-none ">05</h3>
    </div>
  );
}
