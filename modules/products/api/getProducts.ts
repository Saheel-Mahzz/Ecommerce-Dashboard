export default async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
  if (!res.ok) {
  }
  return res.json();
}
