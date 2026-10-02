import { ProductGallery } from "./components/productGallery";
import { ProductHeaderInfo } from "./components/productHeader";
import { ProductPricing } from "./components/productPricing";
import { getProductDetails } from "./api/getProductDetails";
import AddToCartButton from "../products/components/addToCartButton";

export default async function ProductDetailsView({ id }: { id: string }) {
  const product = await getProductDetails(id);
  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
        <ProductGallery image={product.image} title={product.title} />

        <div className="space-y-6 ">
          <ProductHeaderInfo
            title={product.title}
            category={product.category}
            rate={product.rating.rate}
            count={product.rating.count}
          />

          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          <ProductPricing price={product.price} />

          <div className="space-y-2"></div>

          <div className="space-y-4 pt-2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
