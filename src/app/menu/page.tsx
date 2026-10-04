"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  Flame,
  Utensils,
  Drumstick,
  Crown,
  Sandwich,
  Salad,
  Coffee,
  X,
  ArrowRight,
} from "lucide-react";
import { menuItems, menuCategories, MenuItem } from "@/data/menu";
import { DishCard } from "@/components/menu/DishCard";
import { DishDetailModal } from "@/components/menu/DishDetailModal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">(
    "featured"
  );
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter & Sort
  const filteredItems = useMemo(() => {
    return menuItems
      .filter((item) => {
        const matchesCategory =
          selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.ingredients &&
            item.ingredients.some((ing) =>
              ing.toLowerCase().includes(searchQuery.toLowerCase())
            ));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const getCategoryCount = (catId: string) => {
    if (catId === "all") return menuItems.length;
    return menuItems.filter((i) => i.category === catId).length;
  };

  return (
    <div className="py-10 md:py-16 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading
          badge="قائمة الطعام"
          title="منيو مطعم العشايشي للمشويات والبروست"
          subtitle="تصفح جميع أصنافنا من المشويات على الفحم، وجبات البروست الذهبي، صواني العزومات الكبرى، والسندوتشات والسلطات."
        />

        {/* Search & Sort Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-[#eee4d3] shadow-sm mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن صنف، كباب، كفتة، بروست، حواوشي..."
                className="w-full pr-11 pl-10 py-3 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] text-sm text-[#1c1514] focus:outline-none focus:border-[#781016] transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  aria-label="مسح البحث"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-4 h-4 text-[#a97314] flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "featured" | "price-asc" | "price-desc"
                  )
                }
                className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] text-xs font-bold text-[#1c1514] focus:outline-none focus:border-[#781016] cursor-pointer"
              >
                <option value="featured">ترتيب: الأكثر طلباً وتوصية</option>
                <option value="price-asc">السعر: من الأقل إلى الأعلى</option>
                <option value="price-desc">السعر: من الأعلى إلى الأقل</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {menuCategories.map((category) => {
              const isActive = selectedCategory === category.id;
              const count = getCategoryCount(category.id);
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black whitespace-nowrap transition cursor-pointer flex-shrink-0 ${
                    isActive
                      ? "bg-[#781016] text-white shadow-md"
                      : "bg-[#faf6f0] text-neutral-700 hover:bg-[#eee4d3] border border-[#eee4d3]"
                  }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white text-neutral-500 border border-neutral-200"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count & Current Filter Info */}
        <div className="flex items-center justify-between mb-6 text-xs text-neutral-500 font-bold px-1">
          <span>
            عرض {filteredItems.length} صنف من أصل {menuItems.length}
          </span>
          {searchQuery && (
            <span>نتائج البحث عن: "{searchQuery}"</span>
          )}
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#eee4d3] p-12 text-center max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#faf6f0] border border-[#d99b26]/30 flex items-center justify-center mx-auto text-[#781016]">
              <Search className="w-8 h-8 stroke-1" />
            </div>
            <h3 className="text-lg font-black text-[#1c1514]">
              لم نجد أصنافاً مطابقة لبحثك!
            </h3>
            <p className="text-xs text-neutral-500">
              جرب البحث بكلمات أخرى أو اختر قسماً من الأقسام بالأعلى.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 rounded-xl bg-[#781016] text-white text-xs font-bold shadow hover:bg-[#52090e] transition"
            >
              عرض جميع الأصناف
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <DishCard
                key={dish.id}
                item={dish}
                onOpenDetails={(item) => setSelectedDish(item)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
}
