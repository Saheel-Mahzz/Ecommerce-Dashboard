import { Button } from "@/components/ui/button";
import React from "react";
import Partners from "./components/partners";
import { ServiceSlider } from "./components/serviceSlider";

export default function Services() {
  return (
    <div className="w-full max-w-7xl ml-auto space-y-28 ">
      <div className="grid grid-cols-2 ">
        <div className="px-1 font-medium text-4xl leading-[49px] ">
          <p>
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <Button className="bg-blue-500 rounded-3xl mt-16 w-28 p-6">
            Services
          </Button>
        </div>
        <div className="font-bold text-5xl leading-normal tracking-tight ">
          <p>UI & UX</p>
          <p>Development</p>
          <p>Blockchain</p>
        </div>
      </div>
      <ServiceSlider />
      <Partners />
    </div>
  );
}
