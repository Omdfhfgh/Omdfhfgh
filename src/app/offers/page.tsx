"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  Users,
  Check,
  ShoppingBag,
  MessageCircle,
  Phone,
  Crown,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialOffers } from "@/data/offers";
import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menu";
import { restaurantInfo } from "@/data/restaurant";

export default function OffersPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (offerId: string) => {
    const matchedItem =
      menuItems.find((i) => i.id === "royal-alashishi-tray") || menuItems[0];
    addToCart(matchedItem, 1);
  };

  const handleWhatsAppOffer = (title: string, price: number) => {
    const text = encodeURIComponent(
      `السلام عليكم، أود حجز واستلام (${title}) بسعر العرض ${price} ج.م من مطعم العشايشي.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="py-10 md:py-16 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="عروض حصرية وتوفير"
          title="عروض صواني العزومات وولائم العائلة"
          subtitle="استمتع بأقوى عروض التوفير على مشويات الفحم وصواني البروست المقرمش، مصممة خصيصاً للمات العائلية والمناسبات في الواسطي."
        />

        {/* Offers Grid */}
        <div className="space-y-8 mb-16">
          {specialOffers.map((offer, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={offer.id}
                className={`rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 bg-white ${
                  isFirst
                    ? "border-[#d99b26] ring-2 ring-[#d99b26]/20"
                    : "border-[#eee4d3]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] bg-neutral-900">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-4 right-4 bg-[#a8171f] text-white px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{offer.tag}</span>
                    </div>

                    {isFirst && (
                      <div className="absolute top-4 left-4 bg-[#781016] text-[#f5bc43] px-3.5 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1 border border-[#d99b26]/50">
                        <Crown className="w-4 h-4" />
                        <span>الصينية الأكثر طلباً</span>
                      </div>
                    )}

                    {/* Serves banner */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-[#f5bc43] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span>تكفي: {offer.servesCount}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-black text-[#1c1514]">
                            {offer.title}
                          </h2>
                          <p className="text-xs sm:text-sm font-bold text-[#a97314] mt-1">
                            {offer.subtitle}
                          </p>
                        </div>

                        {offer.validUntil && (
                          <span className="text-[11px] font-bold text-[#781016] bg-[#781016]/10 px-3 py-1 rounded-full w-fit">
                            {offer.validUntil}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {offer.description}
                      </p>

                      {/* Inclusions Checklist */}
                      <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] space-y-2.5">
                        <span className="text-xs font-black text-[#781016] block">
                          محتويات العرض كاملة:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-neutral-700">
                          {offer.itemsIncluded.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-[#781016] flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price and Action Bar */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-neutral-400 block font-bold">
                          سعر العرض الشامل:
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-black text-[#781016]">
                            {offer.price}
                          </span>
                          <span className="text-xs font-bold text-neutral-600">
                            جنيه مصري
                          </span>
                          <span className="text-sm text-neutral-400 line-through mr-2">
                            {offer.originalPrice} ج.م
                          </span>
                          <span className="text-xs font-black text-green-700 bg-green-100 px-2 py-0.5 rounded-lg">
                            وفر {offer.originalPrice - offer.price} ج.م
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(offer.id)}
                          className="px-5 py-3 rounded-2xl bg-[#781016] hover:bg-[#52090e] text-white text-xs font-black flex items-center gap-1.5 shadow-md transition cursor-pointer"
                        >
                          <ShoppingBag className="w-4 h-4 text-[#f5bc43]" />
                          <span>أضف للطلب</span>
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleWhatsAppOffer(offer.title, offer.price)
                          }
                          className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black flex items-center gap-1.5 shadow-md transition cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>طلب بالواتساب</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Catering & Large Event CTA Card */}
        <div className="rounded-3xl bg-[#781016] text-white p-8 sm:p-12 border-2 border-[#d99b26] shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[#f5bc43] text-xs font-black">
              <Sparkles className="w-4 h-4" />
              <span>تجهيز العزومات والأفراح والمناسبات</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-black">
              عندك عزومة عائلية كبيرة أو مناسبة خاصة؟
            </h3>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              نوفر لك صواني مشويات ملكية مخصصة بحجم العزومة مع تجهيز كامل للسلطات والعيش والمشروبات وتوصيل ساخن في الموعد المحدد بالضبط.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href={`tel:${restaurantInfo.phones[0]}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#d99b26] hover:bg-[#a97314] text-[#1c1514] font-black text-sm flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل للتنسيق: {restaurantInfo.displayPhones[0]}</span>
              </a>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
                  "السلام عليكم، أود الاستفسار عن تجهيز عزومة / مناسبة من مطعم العشايشي."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-black text-sm flex items-center justify-center gap-2 border border-white/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>تنسيق العزومة عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
