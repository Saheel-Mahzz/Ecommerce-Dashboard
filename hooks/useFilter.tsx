import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());
  const setFilter = (key: string, value: string) => {
    const currentValue = params.get(key);
    if (currentValue !== value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };
  return {
    setFilter,
  };
}
