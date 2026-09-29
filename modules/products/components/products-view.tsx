"use client";

import React, { useState } from "react";
import { Product } from "../types/product.types";
import { List } from "@/components/list";
import { IColumn } from "@/components/list/types/columns";
import { ProductGrid } from "./product-grid";
import { Button } from "@/components/ui/button";
import { LayoutGrid, List as ListIcon } from "lucide-react";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { PaginationCount } from "@/components/pagination";
import { getPageOffset } from "@/components/list/utils/getPageOffset";
import Image from "next/image";
import { ProductFilters } from "./productFilters";

const columns: IColumn<Product>[] = [
  {
    header: "S.N.",
    accessorKey: "",
    cell: (_, index) => <span>{(index || 0) + 1}</span>,
  },
  { accessorKey: "title", header: "Name" },
  { accessorKey: "price", header: "Price (Rs.)" },
  {
    accessorKey: "image",
    header: "Image",
    cell: (row) => (
      <div className="h-12 w-12 bg-gray-100 rounded overflow-hidden">
        <Image src={row?.image} alt="product" width={50} height={50} />
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (row) => <p>{row?.description?.substring(0, 20)}...</p>,
  },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "rating", header: "Rating" },
  {
    accessorKey: "",
    header: "Actions",
    cell: (row) => (
      <Link href={`/products/${row?._id}`}>
        <EyeIcon />
      </Link>
    ),
  },
];

export function ProductsView({
  products,
  categories,
  count,
  search,
}: {
  products: Product[];
  categories: string[];
  count: number;
  search: { [key: string]: string | undefined };
}) {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  console.log("selected category", selectedCategory);
  // const filteredProducts = products.filter((prod) =>
  //   selectedCategory
  //     ? selectedCategory?.toLowerCase().includes(prod.category.toLowerCase())
  //     : true,
  // );
  const filteredProducts = products.filter((prod) => {
    // 1. Category Match Check
    const matchesCategory = selectedCategory
      ? selectedCategory.toLowerCase().includes(prod.category.toLowerCase())
      : true;

    // 2. Price Range Check
    const matchesPrice = prod.price <= maxPrice;

    // Filter pass huna DUBAI true huna parchha
    return matchesCategory && matchesPrice;
  });
  return (
    <div className="flex flex-col gap-4">
      <ProductFilters
        categories={categories}
        setCategory={setSelectedCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
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
          columns={columns}
          startIndex={getPageOffset(search)}
        />
      ) : (
        <ProductGrid products={products} />
      )}

      <PaginationCount totalCount={count} />
    </div>
  );
}
