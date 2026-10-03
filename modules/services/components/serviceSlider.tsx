import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { SERVICE_IMAGES } from "../constants/services.constant";

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
        {SERVICE_IMAGES?.map((image, index) => (
          <CarouselItem className="pl-4 basis-[75%] md:basis-[80%]" key={index}>
            <Image
              src={image.src}
              width={1000}
              height={500}
              alt="service"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
