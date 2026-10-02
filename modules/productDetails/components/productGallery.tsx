import Image from "next/image";

interface ProductGalleryProps {
  image: string;
  title: string;
}

export function ProductGallery({ image, title }: ProductGalleryProps) {
  return (
    <div className="relative rounded-2xl bg-[#f5f1ea] p-8 flex items-center justify-center min-h-[450px]">
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
