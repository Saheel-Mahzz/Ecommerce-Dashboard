import ProductDetails from "@/modules/productDetails";
import React from "react";

export default function page(id: PageProps<"/products/[id]">) {
  return <ProductDetails />;
}
