import { IListResponse } from "@/types/apiResponse";
import { Product } from "../types/product.types";

export default async function getProducts(): Promise<IListResponse<Product>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
  if (!res.ok) {
  }
  return res.json();
}
