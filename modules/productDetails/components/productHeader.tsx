import { Star } from "lucide-react";

interface ProductHeaderInfoProps {
  title: string;
  category: string;
  rate: number;
  count: number;
}

export function ProductHeaderInfo({
  title,
  category,
  rate,
  count,
}: ProductHeaderInfoProps) {
  return (
    <div className="space-y-2">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        {category}
      </span>
      <h1 className="text-3xl font-serif font-bold tracking-tight text-slate-900">
        {title}
      </h1>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(rate) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="font-semibold text-slate-800">({rate})</span>
        <span className="text-muted-foreground">{count}+ reviews</span>
      </div>
    </div>
  );
}
