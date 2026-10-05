import getCategories from "./api/getCategories";
import getProducts from "./api/getProducts";
import { ProductsView } from "./components/productsView";

export default async function Products({
  search,
}: {
  search: { [key: string]: string | undefined };
}) {
  const [products, categories] = await Promise.all([
    getProducts(search),
    getCategories(),
  ]);

  console.log('prodcust',products)

  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center mb-6">Products</h2>
      <ProductsView
        products={products}
        categories={categories}
        search={search}
      />
    </div>
  );
}
