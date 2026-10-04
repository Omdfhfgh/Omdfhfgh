"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Check, Flame, Eye, Sparkles } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface DishCardProps {
  item: MenuItem;
  onOpenDetails: (item: MenuItem) => void;
}

export function DishCard({ item, onOpenDetails }: DishCardProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <div
      onClick={() => onOpenDetails(item)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[#eee4d3] hover:border-[#d99b26]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Badges on top */}
        <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 z-10">
          {item.badge && (
            <span className="px-2.5 py-1 rounded-full bg-[#781016] text-white text-[11px] font-black shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#f5bc43] fill-[#f5bc43]" />
              {item.badge}
            </span>
          )}
          {item.spicy && (
            <span className="px-2 py-0.5 rounded-full bg-red-700 text-white text-[10px] font-bold">
              حار 🌶️
            </span>
          )}
        </div>

        {/* Quick View Button on Image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
          <span className="px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-xs text-[#781016] text-xs font-black flex items-center gap-1.5 shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            <span>عرض التفاصيل</span>
          </span>
        </div>

        {/* Price Tag Floating */}
        <div className="absolute bottom-3 left-3 bg-[#781016] text-white px-3 py-1 rounded-xl shadow-md border border-[#d99b26]/30 flex items-baseline gap-1" dir="rtl">
          <span className="text-base font-black tracking-tight">{item.price}</span>
          <span className="text-[10px] font-bold text-amber-200">ج.م</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base sm:text-lg font-black text-[#1c1514] group-hover:text-[#781016] transition leading-snug">
              {item.name}
            </h3>
          </div>

          {item.servingSize && (
            <span className="inline-block text-[11px] font-semibold text-[#a97314] mt-0.5">
              {item.servingSize}
            </span>
          )}

          <p className="text-xs text-neutral-500 line-clamp-2 mt-1.5 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer: Add Button & Price info */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
          <div className="text-right">
            {item.oldPrice ? (
              <span className="text-xs text-neutral-400 line-through block">
                {item.oldPrice} ج.م
              </span>
            ) : item.unit ? (
              <span className="text-[11px] text-neutral-400 font-medium block">
                {item.unit}
              </span>
            ) : null}
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            className={`px-3.5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-xs transition transform active:scale-95 cursor-pointer ${
              justAdded
                ? "bg-green-600 text-white"
                : "bg-[#781016] hover:bg-[#52090e] text-white"
            }`}
            aria-label={`إضافة ${item.name} للطلب`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>أُضيف للسلة</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>أضف للطلب</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
