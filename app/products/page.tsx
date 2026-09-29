import Products from "@/modules/products";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined | string[] }>;
}) {
  const search = await searchParams;
  return <Products search={search} />;
}
