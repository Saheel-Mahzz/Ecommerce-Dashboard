export default async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
  if (!res.ok) {
  }
  return res.json();
}
