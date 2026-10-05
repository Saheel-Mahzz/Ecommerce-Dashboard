import { customFetch } from "@/lib/api";
import { Product, TestProduct } from "../types/product.types";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function getProducts(
  searchParams?: SearchParams,
): Promise<TestProduct> {
  return customFetch("/products", searchParams);
}
