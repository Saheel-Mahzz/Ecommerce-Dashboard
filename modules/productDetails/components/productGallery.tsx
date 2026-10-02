import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductGalleryProps {
  image: string;
  title: string;
}

export function ProductGallery({ image, title }: ProductGalleryProps) {
  return (
    <div className="relative rounded-2xl bg-[#f5f1ea] p-8 flex items-center justify-center min-h-[450px]">
      <Badge className="absolute top-4 left-4 bg-[#d4a373] hover:bg-[#c39262] text-white rounded-full px-3 py-1 font-semibold text-xs tracking-wider border-none shadow-sm">
        BEST SELLER
      </Badge>
      <div className="relative w-full h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}
