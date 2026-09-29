import { IColumn } from "@/components/list/types/columns";
import React from "react";
import { Product } from "./types/product.types";
import { List } from "@/components/list";
import { PaginationCount } from "@/components/pagination";
import getProducts from "./api/getProducts";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

export default async function Products({
  search,
}: {
  search: {
    [key: string]: string | undefined | string[];
  };
}) {
  console.log("search product", search);
  // const response = await getProducts(search);
  const response = await getProducts();
  console.log("response", response?.data);
  const allProducts = response.data || [];
  const count = response.totalProducts || 0;
  const columns: IColumn<Product>[] = [
    {
      header: "S.N.",
      accessorKey: "",
      cell: (_, index) => {
        return <span>{(index || 0) + 1}</span>;
      },
    },
    {
      accessorKey: "title",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price (Rs.)",
    },
    {
      accessorKey: "image",
      header: "Image",
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: (row) => {
        const desc = row?.description;
        return <p>{desc.substring(0, 20)}...</p>;
      },
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "rating",
      header: "Rating",
    },
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

  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center">Products</h2>
      <List rows={allProducts} columns={columns} />
      <PaginationCount totalCount={count} />
    </div>
  );
}
