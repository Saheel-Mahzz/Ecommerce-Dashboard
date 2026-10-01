import { Button } from "@/components/ui/button";
import React from "react";
import Partners from "./components/partners";
import { ServiceSlider } from "./components/serviceSlider";
import RotatingText from "./components/rotatingText";

export default function Services() {
  return (
    <div className="w-full max-w-7xl ml-auto space-y-4 sm:space-y-12 md:space-y-48 overflow-hidden ">
      <div className="grid md:grid-cols-2 ">
        <div className="px-1 font-medium text-2xl md:text-4xl md:leading-[49px] text-balance ">
          <p>
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <Button className="bg-blue-500 rounded-3xl md:mt-16 w-28 p-6">
            Services
          </Button>
        </div>
        <RotatingText />
      </div>
      <ServiceSlider />
      <Partners />
    </div>
  );
}
