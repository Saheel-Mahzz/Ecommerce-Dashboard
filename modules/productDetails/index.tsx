"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ShieldCheck, Sun, Zap } from "lucide-react";
import { ProductGallery } from "./components/productGallery";
import { ProductHeaderInfo } from "./components/productHeader";
import { ProductPricing } from "./components/productPricing";

const dummyProduct = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  rating: {
    rate: 4.7,
    count: 500,
  },
};

const highlights = [
  { icon: ShieldCheck, text: "Durable Material" },
  { icon: Sun, text: "All-Weather Warmth" },
  { icon: Zap, text: "Wind Proof" },
  { icon: Sparkles, text: "Premium Cotton" },
];

export default function ProductDetailsView() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
        <ProductGallery image={dummyProduct.image} title={dummyProduct.title} />

        <div className="space-y-6">
          <ProductHeaderInfo
            title={dummyProduct.title}
            category={dummyProduct.category}
            rate={dummyProduct.rating.rate}
            count={dummyProduct.rating.count}
          />

          <p className="text-sm text-slate-600 leading-relaxed">
            {dummyProduct.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-b border-slate-100 py-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700"
                >
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          <ProductPricing price={dummyProduct.price} />

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase">
              Size
            </span>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-md border transition-all ${
                    selectedSize === size
                      ? "border-slate-900 bg-slate-900 text-white"
                      : "border-slate-200 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {/* <QuantitySelector quantity={quantity} onChange={setQuantity} /> */}

            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-6 rounded-md shadow-sm text-sm">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
