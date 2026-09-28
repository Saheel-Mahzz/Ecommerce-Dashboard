import Testing from "@/modules/testing";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const search = await searchParams;
  return <Testing search={search} />;
}
