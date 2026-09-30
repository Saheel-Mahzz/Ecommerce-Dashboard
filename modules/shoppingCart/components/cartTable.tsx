"use client";

import { List } from "@/components/list";
import { IColumn } from "@/components/list/types/columns";
import { Button } from "@/components/ui/button";
import { Product } from "@/modules/products/types/product.types";
import { useCartStore } from "@/stores/useCartStore";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartTable() {
  const { removeProduct, updateProduct, products } = useCartStore();
  const cartColumns: IColumn<Product>[] = [
    {
      header: "",
      accessorKey: "",
      cell: (row) => (
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => removeProduct?.(row)}
        >
          <X className="h-4 w-4" />
        </Button>
      ),
    },
    {
      header: "Products",
      accessorKey: "",
      cell: (row) => (
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-gray-100 rounded overflow-hidden">
            <Image src={row?.image} alt="product" width={50} height={50} />
          </div>
          <span className="font-medium text-gray-900">{row.title}</span>
        </div>
      ),
    },
    {
      header: "Price",
      accessorKey: "",
      cell: (row) => `Rs. ${row.price.toFixed(2)}`,
    },
    {
      header: "Quantity",
      accessorKey: "",
      cell: (row) => (
        <div className="flex items-center border rounded-md w-max px-2 py-1 gap-3">
          <Button
            className="text-gray-500 hover:text-black cursor-pointer"
            variant="outline"
            onClick={() => updateProduct?.(row?._id, (row?.quantity || 1) - 1)}
          >
            <Minus className="h-3 w-3" />
          </Button>

          <span className="text-xs font-semibold">
            {String(row?.quantity || 1).padStart(2, "0")}
          </span>

          <Button
            className="text-gray-500 hover:text-black cursor-pointer"
            variant="outline"
            onClick={() => updateProduct?.(row?._id, (row?.quantity || 1) + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      ),
    },
    {
      header: "Subtotal",
      accessorKey: "",
      cell: (row) => (
        <span className="font-semibold text-gray-900">
          Rs. {(row.price * (row.quantity || 1)).toFixed(2)}
        </span>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-center">Shopping Cart</h2>
      <List columns={cartColumns} rows={products} />
      <Link href="/products/">
        <Button variant="outline" className="w-1/3 cursor-pointer">
          Update Cart
        </Button>
      </Link>
    </div>
  );
}
