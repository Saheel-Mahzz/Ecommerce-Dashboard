
export default async function getCategories(): Promise<string[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
  );

  if (!res.ok) {
  }
  return res.json();
}
