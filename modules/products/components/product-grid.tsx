import React from "react";
import { Product } from "../types/product.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore";

export function ProductGrid({ products }: { products: Product[] }) {
  const { addProduct, products: allProducts } = useCartStore();
  console.log("all prducts", allProducts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
      {products.map((product) => (
        <Card key={product._id} className="flex flex-col">
          <CardHeader>
            <div className="h-48 w-full bg-muted flex items-center justify-center overflow-hidden rounded-md mb-4 bg-gray-100">
              {product.image ? (
                <img
                  src={product.image}
                  alt={
                    (product as any).title || product.name || "Product image"
                  }
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-muted-foreground text-sm">No Image</span>
              )}
            </div>
            <CardTitle className="text-lg line-clamp-1">
              {(product as any).title || product.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col gap-2">
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
              {product.description}
            </p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="font-semibold text-lg">Rs. {product.price}</span>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/products/${product._id}`}>
                  <EyeIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <Button onClick={() => addProduct(product)}>Add to cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
