"use client";
import { useState } from "react";
import { Product } from "../types/product.types";
import { List } from "@/components/list";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import { PaginationCount } from "@/components/pagination";
import { getPageOffset } from "@/components/list/utils/getPageOffset";
import { ProductFilters } from "./productFilters";
import { productColumns } from "./productColumns";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { SelectElement } from "@/components/inputFields/selectElement";
import { ITEMS_PER_PAGE, SORT_OPTIONS } from "../constants/product.constant";
import { ProductGrid } from "./productGrid";

export function ProductsView({
  products,
  categories,
  search,
}: {
  products: Product[];
  categories: string[];
  count?: number;
  search: { [key: string]: string | undefined };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const { filteredProducts, filters, handleFilter } = useFilter(products);

  const handleSorting = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const currentPage = Number(searchParams.get("page")) || 1;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="flex flex-col gap-4">
      <ProductFilters
        categories={categories}
        maxPrice={filters?.maxPrice}
        handleFilters={handleFilter}
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
        <div className="w-[180px]">
          <SelectElement
            name="sort"
            label="Sort By"
            placeholder="Select order"
            options={SORT_OPTIONS}
            onChange={(name, value) => handleSorting(value ?? "")}
          />
        </div>
      </div>

      {viewMode === "list" ? (
        <List
          rows={paginatedProducts}
          columns={productColumns}
          startIndex={getPageOffset(search)}
        />
      ) : (
        <ProductGrid products={paginatedProducts} />
      )}
      <PaginationCount totalCount={filteredProducts.length} />
    </div>
  );
}
