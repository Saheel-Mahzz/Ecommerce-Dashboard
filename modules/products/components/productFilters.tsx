import { SelectElement } from "@/components/inputFields/selectElement";

interface ProductFiltersProps {
  categories: string[];
  setCategory: (value: string) => void;
}

export function ProductFilters({
  categories,
  setCategory,
}: ProductFiltersProps) {
  console.log("category", categories);
  const categoryOptions =
    categories.map((cat) => {
      return {
        value: cat.name.toLowerCase(),
        label: cat.name,
      };
    }) || [];
  console.log("category options", categoryOptions);
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <SelectElement
        name="category"
        placeholder="Pick the category.."
        label="Category"
        options={categoryOptions}
        onChange={(_, value) => setCategory(value)}
      />
    </div>
  );
}
