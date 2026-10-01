import { IListResponse } from "@/types/apiResponse";
import { Product } from "../types/product.types";

export default async function getProducts(
  sort?: string,
): Promise<IListResponse<Product>> {
  console.log("sorting", sort);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?sort=${sort}`,
  );
  if (!res.ok) {
  }
  return res.json();
}
