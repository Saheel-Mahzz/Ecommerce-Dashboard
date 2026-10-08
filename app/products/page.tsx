import { Suspense } from "react";
import Products from "@/modules/products";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = await searchParams;

  return (
    <Suspense
      fallback={
        <div className="w-full h-96 bg-gray-100 animate-pulse rounded-2xl" />
      }
    >
      <Products search={search} />
    </Suspense>
  );
}
