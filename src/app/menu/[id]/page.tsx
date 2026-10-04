import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Flame,
  Clock,
  Users,
  MessageCircle,
  ShoppingBag,
  ShieldCheck,
  ChevronLeft,
} from "lucide-react";
import { menuItems } from "@/data/menu";
import { restaurantInfo } from "@/data/restaurant";
import { DishDetailClientActions } from "./DishDetailClientActions";

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = menuItems.find((i) => i.id === id);
  if (!item) return { title: "الصنف غير موجود" };

  return {
    title: `${item.name} | ${restaurantInfo.name}`,
    description: `${item.description} - اطلب الآن من مطعم العشايشي بالواسطي: 01286865908`,
    openGraph: {
      title: `${item.name} - مطعم العشايشي`,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default async function DishDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = menuItems.find((i) => i.id === id);

  if (!item) {
    notFound();
  }

  // Related items from same category
  const relatedItems = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="py-8 md:py-14 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-neutral-500 mb-6">
          <Link href="/" className="hover:text-[#781016] transition">
            الرئيسية
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/menu" className="hover:text-[#781016] transition">
            قائمة الطعام
          </Link>
          <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#781016]">{item.name}</span>
        </nav>

        {/* Main Dish Showcase Grid */}
        <div className="bg-white rounded-3xl border border-[#eee4d3] shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Dish Image (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-[#eee4d3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {item.badge && (
                  <div className="absolute top-4 right-4 bg-[#781016] text-white px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5 border border-[#d99b26]/50">
                    <Flame className="w-4 h-4 fill-white" />
                    <span>{item.badge}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dish Details & Client Ordering Actions (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1514] leading-snug">
                  {item.name}
                </h1>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                  {item.nameEn}
                </p>
              </div>

              {/* Price Banner */}
              <div className="flex items-baseline gap-2 p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] w-fit">
                <span className="text-3xl font-black text-[#781016]">
                  {item.price}
                </span>
                <span className="text-sm font-bold text-neutral-600">
                  جنيه مصري
                </span>
                {item.unit && (
                  <span className="text-xs text-neutral-400">/ {item.unit}</span>
                )}
                {item.oldPrice && (
                  <span className="text-sm text-neutral-400 line-through mr-3">
                    {item.oldPrice} ج.م
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              {/* Meta tags (serving, prep time) */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
                {item.servingSize && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#faf6f0] border border-[#eee4d3] text-xs font-bold text-[#1c1514]">
                    <Users className="w-4 h-4 text-[#d99b26]" />
                    <span>{item.servingSize}</span>
                  </div>
                )}
                {item.preparationTime && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-[#faf6f0] border border-[#eee4d3] text-xs font-bold text-[#1c1514]">
                    <Clock className="w-4 h-4 text-[#781016]" />
                    <span>وقت التحضير: {item.preparationTime}</span>
                  </div>
                )}
              </div>

              {/* Ingredients List */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-neutral-700 block">
                    المكونات والتقديم:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="px-3 py-1 rounded-xl bg-gray-100 text-neutral-700 text-xs font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Client Component for Interactive Cart & Quantity */}
              <DishDetailClientActions item={item} />
            </div>
          </div>
        </div>

        {/* Related Dishes */}
        {relatedItems.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black text-[#1c1514]">
                أصناف أخرى قد تعجبك
              </h3>
              <Link
                href="/menu"
                className="text-xs font-bold text-[#781016] hover:underline flex items-center gap-1"
              >
                <span>عرض كل المنيو</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/menu/${rel.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#eee4d3] hover:border-[#d99b26] p-4 flex gap-4 items-center shadow-xs hover:shadow-md transition"
                >
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-100">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-black text-[#1c1514] group-hover:text-[#781016] transition truncate">
                      {rel.name}
                    </h4>
                    <span className="text-xs font-black text-[#781016] block mt-1">
                      {rel.price} ج.م
                    </span>
                    <span className="text-[11px] text-neutral-400 block truncate">
                      {rel.description}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
