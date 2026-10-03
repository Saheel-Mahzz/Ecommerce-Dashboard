import Image from "next/image";
import { SERVICE_PARTNERS } from "../constants/services.constant";

export default function Partners() {
  return (
    <div className="flex flex-col md:space-y-9 max-w-[1058px] mx-auto">
      <h3 className="text-2xl font-bold text-center">Our Partners</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 items-center place-items-center md:place-items-start">
        {SERVICE_PARTNERS.map((service, index) => (
          <Image
            key={index}
            src={service.src}
            alt="Hero Banner"
            width={140}
            height={74}
          />
        ))}
      </div>
    </div>
  );
}
