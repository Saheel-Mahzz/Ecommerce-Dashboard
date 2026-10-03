import CourseCards from "./components/courseCards";

export default function Courses() {
  return (
    <div className="flex flex-col space-y-7 max-w-312 mt-9  mx-auto text-white">
      <div className="text-black px-4">
        <p className="text-2xl mb-4">
          Explore our classes and master trending skills!
        </p>
        <p className="font-bold text-3xl">
          Dive Into{" "}
          <span className="text-green-600">What’s Hot Right Now!</span> 🔥
        </p>
      </div>

      <CourseCards />
    </div>
  );
}
