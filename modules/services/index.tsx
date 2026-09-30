import { Button } from "@/components/ui/button";
import React from "react";
import Partners from "./components/partners";

export default function Services() {
  return (
    <>
      <div className="grid grid-cols-2 max-w-5xl mx-auto ">
        <div className="px-1 font-medium text-4xl leading-tight ">
          <p>
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </p>
          <Button className="bg-blue-500 rounded-3xl mt-14">Services</Button>
        </div>
        <div className="font-bold text-5xl leading-normal tracking-tight">
          <p>UI & UX</p>
          <p>Development</p>
          <p>Blockchain</p>
        </div>
      </div>
      <Partners />
    </>
  );
}
