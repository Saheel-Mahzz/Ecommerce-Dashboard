import { IListResponse } from "@/types/apiResponse";
import { Category } from "../types/product.types";

export default async function getCategories(): Promise<
  IListResponse<Category>
> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
  );

  if (!res.ok) {
    console.log("err", res);
  }
  return res.json();
}
