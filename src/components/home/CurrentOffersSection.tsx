"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag, Users, Check, ShoppingBag, ArrowLeft, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { specialOffers } from "@/data/offers";
import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menu";
import { restaurantInfo } from "@/data/restaurant";

export function CurrentOffersSection() {
  const { addToCart } = useCart();

  const handleOrderOffer = (offerId: string) => {
    // find matching menu item or add royal tray
    const matchedItem =
      menuItems.find((i) => i.id === "royal-alashishi-tray") || menuItems[0];
    addToCart(matchedItem, 1);
  };

  const handleWhatsAppOffer = (title: string, price: number) => {
    const text = encodeURIComponent(
      `السلام عليكم، أود الاستفادة من (${title}) بسعر ${price} ج.م من مطعم العشايشي.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="عروض التوفير"
          title="عروض حصرية وولائم عائلية مميزة"
          subtitle="استمتع بأشهى وجبات المشويات والبروست بأسعار خاصة وعروض توفير مصممة للمة العيلة والأصحاب."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.slice(0, 3).map((offer) => (
            <div
              key={offer.id}
              className="bg-[#faf6f0] rounded-3xl overflow-hidden border border-[#eee4d3] hover:border-[#d99b26] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Offer Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Discount Badge */}
                  <div className="absolute top-3 right-3 bg-[#a8171f] text-white px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    <span>{offer.tag}</span>
                  </div>

                  {/* Serves Count */}
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#f5bc43] px-2.5 py-1 rounded-xl text-xs font-bold flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{offer.servesCount}</span>
                  </div>
                </div>

                {/* Offer Info */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-black text-[#1c1514] group-hover:text-[#781016] transition leading-snug">
                      {offer.title}
                    </h3>
                    <p className="text-xs font-bold text-[#a97314] mt-1">
                      {offer.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Inclusions checklist (first 3) */}
                  <ul className="space-y-1.5 pt-2 border-t border-gray-200 text-xs font-medium text-neutral-700">
                    {offer.itemsIncluded.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#781016] flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                    {offer.itemsIncluded.length > 3 && (
                      <li className="text-[11px] text-[#a97314] font-bold">
                        + {offer.itemsIncluded.length - 3} أصناف إضافية مشمولة
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Price & Action */}
              <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                <div className="p-4 rounded-2xl bg-white border border-[#eee4d3] flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[10px] text-neutral-400 block font-bold">
                      السعر في العرض:
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-[#781016]">
                        {offer.price}
                      </span>
                      <span className="text-xs font-bold text-neutral-500">
                        ج.م
                      </span>
                      <span className="text-xs text-neutral-400 line-through mr-1">
                        {offer.originalPrice} ج.م
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-xl bg-green-100 text-green-800 text-xs font-black">
                    وفر {offer.originalPrice - offer.price} ج.م
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleOrderOffer(offer.id)}
                    className="py-2.5 px-3 rounded-xl bg-[#781016] hover:bg-[#52090e] text-white text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>أضف للسلة</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppOffer(offer.title, offer.price)}
                    className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>طلب واتساب</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/offers"
            className="inline-flex items-center gap-2 text-sm font-black text-[#781016] hover:text-[#52090e] transition"
          >
            <span>عرض جميع باقات وعروض العشايشي</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
