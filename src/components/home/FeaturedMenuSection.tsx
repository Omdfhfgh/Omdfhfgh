"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Utensils } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { menuItems, MenuItem } from "@/data/menu";
import { DishCard } from "@/components/menu/DishCard";
import { DishDetailModal } from "@/components/menu/DishDetailModal";

const filterTabs = [
  { id: "all", label: "الكل" },
  { id: "grills", label: "المشويات على الفحم" },
  { id: "broast", label: "البروست المقرمش" },
  { id: "trays", label: "صواني العزومات" },
  { id: "hawawshi", label: "الحواوشي والسندوتشات" },
];

export function FeaturedMenuSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    if (activeTab === "all") return item.featured;
    return item.category === activeTab;
  });

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="الأكثر طلباً"
          title="أطباق مميزة يعشقها زبائن العشايشي"
          subtitle="تذوق اختيارات زبائننا المفضلة من الكباب والكفتة المشوية على الفحم ووجبات البروست الذهبي المقرمش."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#781016] text-white shadow-md"
                    : "bg-[#faf6f0] text-neutral-700 hover:bg-[#eee4d3] border border-[#eee4d3]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.slice(0, 6).map((item) => (
            <DishCard
              key={item.id}
              item={item}
              onOpenDetails={(dish) => setSelectedDish(dish)}
            />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#781016] hover:bg-[#52090e] text-white font-black text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#f5bc43]" />
            <span>عرض قائمة الطعام كاملة بالأسعار</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Dish Details Modal */}
      <DishDetailModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </section>
  );
}
