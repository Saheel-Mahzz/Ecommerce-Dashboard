import getProducts from "./api/getProducts";
import { ProductsView } from "./components/products-view";

export default async function Products({
  search,
}: {
  search: {
    [key: string]: string | undefined | string[];
  };
}) {
  const response = await getProducts();
  const allProducts = response.data || [];
  const count = response.totalProducts || 0;

  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center mb-6">Products</h2>
      <ProductsView products={allProducts} count={count} />
    </div>
  );
}
