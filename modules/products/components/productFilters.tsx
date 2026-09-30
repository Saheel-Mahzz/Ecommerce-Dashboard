import InputElement from "@/components/inputFields/inputElement";
import { SelectElement } from "@/components/inputFields/selectElement";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Category } from "../types/product.types";

interface ProductFiltersProps {
  categories: Category[];
  setCategory: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  setSearchQuery: (val: string) => void;
}

export function ProductFilters({
  categories,
  setCategory,
  maxPrice,
  setMaxPrice,
  setSearchQuery,
}: ProductFiltersProps) {
  const categoryOptions =
    categories.map((cat) => {
      return {
        value: cat.name.toLowerCase(),
        label: cat.name,
      };
    }) || [];
  return (
    <div className="grid grid-cols-3  items-center gap-4">
      <SelectElement
        name="category"
        placeholder="Pick the category.."
        label="Category"
        options={categoryOptions}
        onChange={(_, value) => setCategory(value)}
      />
      <Label className="flex flex-col text-gray-400">
        Price Range (Up to Rs. {maxPrice})
        <Slider
          defaultValue={[200]}
          max={2000}
          step={1}
          onValueChange={(val) => {
            const numericValue = Array.isArray(val) ? val[0] : val;
            setMaxPrice(numericValue);
          }}
        />
      </Label>
      <InputElement
        name="name"
        label="Search"
        placeholder="Search by name.."
        type="text"
        onChange={setSearchQuery}
      />
    </div>
  );
}
