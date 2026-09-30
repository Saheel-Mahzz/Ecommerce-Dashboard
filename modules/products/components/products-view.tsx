"use client";
import { useState } from "react";
import { Category, Product } from "../types/product.types";
import { List } from "@/components/list";
import { ProductGrid } from "./product-grid";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import { PaginationCount } from "@/components/pagination";
import { getPageOffset } from "@/components/list/utils/getPageOffset";
import { ProductFilters } from "./productFilters";
import { productColumns } from "./productColumns";

export function ProductsView({
  products,
  categories,
  count,
  search,
}: {
  products: Product[];
  categories: Category[];
  count: number;
  search: { [key: string]: string | undefined };
}) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = selectedCategory
      ? selectedCategory.toLowerCase().includes(prod.category.toLowerCase())
      : true;

    const matchesPrice = prod.price <= maxPrice;

    const matchesName = searchQuery
      ? prod.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      : true;

    return matchesCategory && matchesPrice && matchesName;
  });
  return (
    <div className="flex flex-col gap-4">
      <ProductFilters
        categories={categories}
        setCategory={setSelectedCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex justify-end items-center gap-2">
        <Button
          variant={viewMode === "list" ? "default" : "outline"}
          size="icon"
          onClick={() => setViewMode("list")}
          aria-label="List view"
        >
          <ListIcon className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="icon"
          onClick={() => setViewMode("grid")}
          aria-label="Grid view"
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>

      {viewMode === "list" ? (
        <List
          rows={filteredProducts}
          columns={productColumns}
          startIndex={getPageOffset(search)}
        />
      ) : (
        <ProductGrid products={filteredProducts} />
      )}

      <PaginationCount totalCount={count} />
    </div>
  );
}
