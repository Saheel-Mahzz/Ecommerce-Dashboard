import { IListResponse } from "@/types/apiResponse";
import { Category } from "../types/product.types";

export default async function getCategories(): Promise<
  IListResponse<Category>
> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
  if (!res.ok) {
  }
  return res.json();
}
