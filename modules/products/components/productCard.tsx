import { Button } from "@/components/ui/button";
import { Product } from "../types/product.types";
import { toast } from "sonner";
import { useCartStore } from "@/stores/useCartStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon } from "lucide-react";

export default function ProductCard({
  product,
  isInCart,
}: {
  product: Product;
  isInCart: boolean;
}) {
  const { addProduct } = useCartStore();
  return (
    <Card key={product.id} className="flex flex-col">
      <CardHeader>
        <div className="h-48 w-full  flex items-center justify-center overflow-hidden rounded-md mb-4 bg-gray-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={"Product image"}
              width={200}
              height={200}
              className="object-cover h-full w-full"
            />
          ) : (
            <span className="text-muted-foreground text-sm">No Image</span>
          )}
        </div>
        <CardTitle className="text-lg line-clamp-1">{product?.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-2">
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-semibold text-lg">Rs. {product.price}</span>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/products/${product.id}`}>
              <EyeIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        <Button
          disabled={isInCart}
          onClick={() => {
            addProduct(product);
            toast.success(`${product.title} added to cart!`);
          }}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardContent>
    </Card>
  );
}
