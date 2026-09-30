import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import UpcomingCourses from "./components/upcomingCourses";

export default function Courses() {
  return (
    <div className="flex flex-col space-y-9 max-w-5xl mx-auto text-white">
      <div className="text-black">
        <p>Explore our classes and master trending skills!</p>
        <p className="font-bold text-3xl">
          Dive Into{" "}
          <span className="text-green-600">What’s Hot Right Now!</span> 🔥
        </p>
      </div>
      <div className="grid grid-cols-4 space-x-6">
        <div className="bg-red-600 p-9 rounded-4xl col-span-2">
          <div className="flex items-center justify-end text-white ">
            <Button
              className="bg-transparent outline-0 border-0 text-sm cursor-pointer hover:bg-transparent "
              variant="outline"
            >
              View all courses
              <ArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-4">
            <p>Image here</p>
            <p>Image here</p>
            <p>Image here</p>
            <p>Image here</p>
          </div>
          <div className="flex space-x-4 items-start">
            <h3 className="font-bold text-[150px] flex  ">
              23
              <Plus className="mt-14" size={32} />
            </h3>
            <div className="flex flex-col space-y-3 pt-16">
              <p className="font-bold text-xl"> All Courses</p>
              <span>courses youre powering through right now.</span>
            </div>
          </div>
        </div>
        <UpcomingCourses />
      </div>
    </div>
  );
}
