import ProductDetails from "@/modules/productDetails";
import React from "react";

export default async function page(props: PageProps<"/products/[id]">) {
  const { id } = await props.params;
  return <ProductDetails id={id} />;
}
