import { customFetch } from "@/lib/api";
import { Product } from "../types/product.types";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function getProducts(
  searchParams?: SearchParams,
): Promise<Product[]> {
  return customFetch("/products", searchParams);
}
