import Image from "next/image";

export default function Partners() {
  return (
    <div className="flex flex-col space-y-9">
      <h3 className="text-2xl font-bold text-center">Our Partners</h3>
      <div className="grid grid-cols-4">
        <Image
          src="/images/cloudedu.png"
          alt="Hero Banner"
          width={102}
          height={74}
        />
        <Image
          src="/images/cmc.png"
          alt="Hero Banner"
          width={102}
          height={74}
        />
        <Image
          src="/images/snp.png"
          alt="Hero Banner"
          width={102}
          height={74}
        />
        <Image
          src="/images/zebec.png"
          alt="Hero Banner"
          width={102}
          height={74}
        />
      </div>
    </div>
  );
}
