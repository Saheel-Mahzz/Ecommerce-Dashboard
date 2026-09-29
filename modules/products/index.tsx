import getCategories from "./api/getCategories";
import getProducts from "./api/getProducts";
import { ProductsView } from "./components/products-view";

export default async function Products({
  search,
}: {
  search: {
    [key: string]: string | undefined | string[];
  };
}) {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  const allProducts = products.data || [];
  const allCategories = categories?.data;
  const count = products.totalProducts || 0;
  console.log("all products", allProducts);

  console.log("categories", allCategories);

  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center mb-6">Products</h2>
      <ProductsView products={allProducts} count={count} search={search} />
    </div>
  );
}
