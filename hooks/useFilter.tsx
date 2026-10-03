import { Product } from "@/modules/products/types/product.types";
import { useState } from "react";

interface IFilterParams {
  category?: string;
  maxPrice: number;
  searchQuery?: string;
}
export default function useFilter(products: Product[]) {
  const [filters, setFilters] = useState<IFilterParams>({
    category: "",
    maxPrice: 2000,
    searchQuery: "",
  });
  const handleFilter = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const filteredProducts = products.filter((prod) => {
    const matchesCategory = filters.category
      ? prod?.category.toLowerCase() === filters?.category.toLowerCase()
      : true;
    const matchesPrice =
      filters.maxPrice && filters.maxPrice > 0
        ? prod.price <= filters.maxPrice
        : true;

    const matchesName = filters?.searchQuery
      ? prod.title
          .toLowerCase()
          .includes(filters?.searchQuery?.toLowerCase().trim())
      : true;

    return matchesCategory && matchesPrice && matchesName;
  });
  return { filteredProducts, filters, handleFilter };
}
