import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import UpcomingCourses from "./components/upcomingCourses";
import Image from "next/image";
import CourseCards from "./components/courseCards";

export default function Courses() {
  return (
    <div className="flex flex-col space-y-9 max-w-6xl mx-auto text-white">
      <div className="text-black">
        <p className="text-2xl">
          Explore our classes and master trending skills!
        </p>
        <p className="font-bold text-3xl">
          Dive Into{" "}
          <span className="text-green-600">What’s Hot Right Now!</span> 🔥
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 w-full">
        <div className="bg-red-800 p-9 rounded-4xl col-span-6 flex flex-col space-y-16">
          <div className="flex items-center justify-end text-white ">
            <Button
              className="bg-transparent outline-0 border-0 text-sm  cursor-pointer hover:bg-transparent "
              variant="outline"
            >
              View all courses
              <ArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-4 ">
            <Image
              src="/images/react.svg"
              alt="image"
              width={100}
              height={100}
            />
            <Image
              src="/images/like.svg"
              alt="image"
              width={100}
              height={100}
            />
            <Image src="/images/vue.svg" alt="image" width={100} height={100} />
            <Image
              src="/images/pencil.svg"
              alt="image"
              width={100}
              height={100}
            />
          </div>
          <div className="flex space-x-4 items-start">
            <h3 className="font-bold text-[150px] leading-none flex items-start ">
              23
              <span className="text-6xl font-bold -mt-3">+</span>
            </h3>
            <div className="flex flex-col ">
              <p className="font-bold text-xl"> All Courses</p>
              <span>courses youre powering through right now.</span>
            </div>
          </div>
        </div>
        <UpcomingCourses />
        <UpcomingCourses />
      </div>
      <CourseCards />
    </div>
  );
}
