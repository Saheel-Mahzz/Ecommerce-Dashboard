import { Product } from "../types/product.types";

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function getProducts(
  searchParams?: SearchParams,
): Promise<Product[]> {
  const params = new URLSearchParams();
  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        params.append(key, Array.isArray(value) ? value.join(",") : value);
      }
    });
  }
  const queryString = params.toString();

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/products?sort=${sort}`,
  // );
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url);
  if (!res.ok) {
  }
  return res.json();
}
