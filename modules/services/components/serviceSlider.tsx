import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ServiceSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-4">
        <CarouselItem className="pl-4 basis-[75%] md:basis-[80%]">
          <Image
            src="/images/service-1.png"
            width={1000}
            height={500}
            alt="service"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </CarouselItem>

        {/* 2nd Card: Remaining space ma aafnai AADHA (HALF) matrai peeking part dekhincha */}
        <CarouselItem className="pl-4 basis-[75%] md:basis-[80%]">
          <Image
            src="/images/service-1.png"
            width={1000}
            height={500}
            alt="service"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-4 basis-[75%] md:basis-[80%]">
          <Image
            src="/images/service-1.png"
            width={1000}
            height={500}
            alt="service"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </CarouselItem>
        <CarouselItem className="pl-4 basis-[75%] md:basis-[80%]">
          <Image
            src="/images/service-1.png"
            width={1000}
            height={500}
            alt="service"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
