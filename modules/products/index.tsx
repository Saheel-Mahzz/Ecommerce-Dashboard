import { IColumn } from "@/components/list/types/columns";
import React from "react";
import { Product } from "./types/product.types";
import { List } from "@/components/list";
import { PaginationCount } from "@/components/pagination";

export default function Products() {
  const columns: IColumn<Product> = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "image",
      header: "Image",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "rating",
      header: "Rating",
    },
  ];

  const rows: Product[] = [
    {
      name: "saheel",
      price: "200",
      image: "8833",
      description: "This is a description",
      category: "Best",
      rating: "7",
    },
    {
      name: "saheel",
      price: "200",
      image: "8833",
      description: "This is a description",
      category: "Best",
      rating: "7",
    },

    {
      name: "saheel",
      price: "200",
      image: "8833",
      description: "This is a description",
      category: "Best",
      rating: "7",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center">Products</h2>
      <List rows={rows} columns={columns} />
      <PaginationCount totalCount={20} />
    </div>
  );
}
