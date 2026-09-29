export async function getProductDetails(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  if (!res.ok) {
  }
  return res.json();
}
