import { getProductDetails } from "./api/getProductDetails";

export default async function ProductDetails({ id }: { id: string }) {
  const response = await getProductDetails(id);
  return <div>I am product details title : {response?.title}</div>;
}
