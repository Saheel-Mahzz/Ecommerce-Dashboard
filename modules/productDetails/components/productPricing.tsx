import { Badge } from "@/components/ui/badge";

interface ProductPricingProps {
  price: number;
}

export function ProductPricing({ price }: ProductPricingProps) {
  const originalPrice = (price * 1.25).toFixed(2);
  const savingsPercent = 20;

  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-slate-900">
        Rs. {price.toFixed(2)}
      </span>
      <span className="text-lg text-muted-foreground line-through">
        Rs. {originalPrice}
      </span>
      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-none font-semibold px-2.5 py-0.5 rounded-sm">
        Save {savingsPercent}%
      </Badge>
    </div>
  );
}
