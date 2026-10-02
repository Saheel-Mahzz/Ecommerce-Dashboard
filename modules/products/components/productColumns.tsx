import { IColumn } from "@/components/list/types/columns";
import Image from "next/image";
import { Product } from "../types/product.types";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import AddToCartButton from "./addToCartButton";

export const productColumns: IColumn<Product>[] = [
  {
    header: "S.N.",
    accessorKey: "id",
  },
  {
    accessorKey: "title",
    header: "Name",
    cell: (row) => <p>{row.title.substring(0, 20)}...</p>,
  },
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
  { accessorKey: "rating.rate", header: "Rating" },
  {
    accessorKey: "",
    header: "Actions",
    cell: (row) => (
      <Link href={`/products/${row?.id}`}>
        <EyeIcon />
      </Link>
    ),
  },
  {
    accessorKey: "",
    header: "",
    cell: (row) => <AddToCartButton product={row} />,
  },
];
