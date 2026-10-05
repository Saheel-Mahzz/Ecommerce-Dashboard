import { customFetch } from "@/lib/api";

export default async function getCategories(): Promise<string[]> {
  return customFetch("/products/categories");
}
//testing