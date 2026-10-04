"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Flame,
  ShoppingBag,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems, GalleryItem } from "@/data/gallery";
import Link from "next/link";

const categories = [
  { id: "all", label: "جميع الصور" },
  { id: "grills", label: "مشويات الفحم" },
  { id: "broast", label: "البروست المقرمش" },
  { id: "trays", label: "صواني العزومات" },
  { id: "kitchen", label: "أجواء وكواليس المطبخ" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setActiveLightboxIndex(idx);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="py-10 md:py-16 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="معرض أطباقنا"
          title="لقطات حية من مطبخ وصالة العشايشي"
          subtitle="استمتع بمشاهدة صور حية لأشهى أطباقنا المشوية على الجمر، ولائم البروست الذهبي، وصواني العزومات الكبرى."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                  isActive
                    ? "bg-[#781016] text-white shadow-md"
                    : "bg-white text-neutral-700 hover:bg-[#eee4d3] border border-[#eee4d3]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-[#eee4d3] hover:border-[#d99b26] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category tag */}
              <div className="absolute top-3 right-3 bg-[#781016]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-full text-[11px] font-black border border-[#d99b26]/40">
                {item.categoryLabel}
              </div>

              {/* Zoom icon button */}
              <div className="absolute top-3 left-3 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 right-4 left-4 text-right space-y-1">
                <h3 className="text-base font-black text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to order */}
        <div className="mt-14 text-center">
          <div className="p-8 rounded-3xl bg-white border border-[#eee4d3] max-w-xl mx-auto shadow-sm space-y-3">
            <h4 className="text-lg font-black text-[#1c1514]">
              شهيتك انفتحت على أكلتنا؟
            </h4>
            <p className="text-xs text-neutral-500">
              تصفح قائمة الطعام الآن واطلب وجبتك المفضلة وسنصلك أينما كنت بالواسطي.
            </p>
            <div className="pt-2">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#781016] hover:bg-[#52090e] text-white text-xs font-black shadow transition"
              >
                <ShoppingBag className="w-4 h-4 text-[#f5bc43]" />
                <span>الذهاب لقائمة الطعام</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
            aria-label="إغلاق المعرض"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev & Next */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center text-white space-y-1 max-w-lg">
              <span className="text-xs text-[#f5bc43] font-bold">
                {currentItem.categoryLabel}
              </span>
              <h3 className="text-lg font-black">{currentItem.title}</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
