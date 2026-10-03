import getCategories from "./api/getCategories";
import getProducts from "./api/getProducts";
import { ProductsView } from "./components/productsView";
import { ITEMS_PER_PAGE } from "./constants/product.constant";

export default async function Products({
  search,
}: {
  search: { [key: string]: string | undefined };
}) {
  const [products, categories] = await Promise.all([
    getProducts(search),
    getCategories(),
  ]);

  const currentPage = Number(search?.page) || 1;
  const totalCount = products.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="max-w-5xl mx-auto w-full my-7">
      <h2 className="text-3xl font-semibold text-center mb-6">Products</h2>
      <ProductsView
        products={paginatedProducts}
        categories={categories}
        count={totalCount}
        search={search}
      />
    </div>
  );
}
