import { Product } from "@/modules/products/types/product.types";

interface IFilterParams {
  category?: string;
  maxPrice: number;
  searchQuery?: string;
}
export default function filterProducts(
  products: Product[],
  filters: IFilterParams,
): Product[] {
  const { category, maxPrice, searchQuery } = filters;

  return products.filter((prod) => {
    const matchesCategory = category
      ? prod.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesPrice = prod.price <= maxPrice;

    const matchesName = searchQuery
      ? prod.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      : true;

    return matchesCategory && matchesPrice && matchesName;
  });
}
