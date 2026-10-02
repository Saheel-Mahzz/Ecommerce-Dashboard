import InputElement from "@/components/inputFields/inputElement";
import { SelectElement } from "@/components/inputFields/selectElement";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface ProductFiltersProps {
  categories: string[];
  maxPrice?: number;
  handleFilters: (key: string, value: string) => void;
}

export function ProductFilters({
  categories,
  maxPrice,
  handleFilters,
}: ProductFiltersProps) {
  const categoryOptions =
    categories.map((cat) => {
      return {
        value: cat.toLowerCase(),
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
      };
    }) || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-start gap-4">
      <SelectElement
        name="category"
        placeholder="Pick the category.."
        label="Category"
        options={categoryOptions}
        onChange={(_, value) => handleFilters("category", value)}
      />
      <Label className="flex flex-col text-gray-400">
        Price Range (Up to Rs. {maxPrice})
        <Slider
          defaultValue={[200]}
          max={2000}
          step={1}
          onValueChange={(val) => {
            const numericValue = Array.isArray(val) ? val[0] : val;
            handleFilters("maxPrice", numericValue);
          }}
        />
      </Label>
      <InputElement
        name="name"
        label="Search"
        placeholder="Search by name.."
        type="text"
        onChange={(value) => handleFilters("name", value)}
      />
    </div>
  );
}
