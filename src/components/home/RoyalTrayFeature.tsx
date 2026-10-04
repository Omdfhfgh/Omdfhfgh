"use client";

import React from "react";
import Image from "next/image";
import {
  Crown,
  Users,
  Check,
  ShoppingBag,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menu";
import { restaurantInfo } from "@/data/restaurant";

export function RoyalTrayFeature() {
  const { addToCart } = useCart();

  const royalTrayItem =
    menuItems.find((i) => i.id === "royal-alashishi-tray") || menuItems[0];

  const handleAddToCart = () => {
    addToCart(royalTrayItem, 1);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `السلام عليكم، أود الاستفسار وحجز (صينية العشايشي الملكية الكبرى للعزومات) من مطعم العشايشي.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-[#52090e] text-white relative overflow-hidden border-y-4 border-[#d99b26]">
      {/* Background patterns */}
      <div className="absolute inset-0 pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#d99b26]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Feast Image Display (5 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d99b26] shadow-2xl bg-black group">
              <div className="relative h-80 sm:h-96 md:h-[420px] w-full">
                <Image
                  src="/images/real_tray_feast.jpg"
                  alt="صينية العشايشي الملكية الكبرى"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Floating Banner */}
              <div className="absolute top-4 right-4 bg-[#781016] text-[#f5bc43] px-3.5 py-1.5 rounded-full text-xs font-black border border-[#d99b26]/50 shadow-lg flex items-center gap-1.5">
                <Crown className="w-4 h-4" />
                <span>الصينية الملكية رقم 1 في الواسطي</span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-200 block">
                    عرض العزومات الكبرى
                  </span>
                  <span className="text-xl font-black text-white">
                    1450 ج.م
                  </span>
                  <span className="text-xs text-neutral-400 line-through mr-2">
                    1650 ج.م
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#f5bc43] font-bold">
                  <Users className="w-4 h-4" />
                  <span>تكفي 6 - 8 أفراد</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feast Details & Action (7 cols) */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#f5bc43] text-xs font-black border border-[#d99b26]/40">
              <Sparkles className="w-4 h-4" />
              <span>فخر مائدة العزومات والمناسبات</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              صينية العشايشي الملكية:{" "}
              <span className="text-[#f5bc43] block mt-1">
                صينية العزومات اللي ترفع راسك
              </span>
            </h2>

            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              مهما كان عدد ضيوفك، صينية العشايشي الملكية مصممة خصيصاً لتجمع كل روائع المشويات على سفرة واحدة. لحوم مشوية طازجة على الجمر، نكهات لا تُقاوم، وسيرفيس ضخم يشرفك بكل تأكيد.
            </p>

            {/* Inclusions checklist */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/30 border border-white/10 space-y-3">
              <h4 className="text-sm font-black text-[#f5bc43] border-b border-white/10 pb-2">
                محتويات الصينية الملكية بالتفصيل:
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-neutral-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>1 كجم كفتة بلدي مشوية على الفحم</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>1/2 كجم كباب ضاني بلدي فاخر</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>1/2 كجم طرب بلدي مشوي مخصوص</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>فرخة كاملة مشوية على شبكة الفحم</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>سيرفيس أرز بسمتي بالمكسرات والزبيب</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#f5bc43] flex-shrink-0" />
                  <span>6 علب سلطات وطحينة وبابا غنوج</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#d99b26] hover:bg-[#a97314] text-[#1c1514] font-black text-sm shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#1c1514]" />
                <span>أضف الصينية للطلب الآن (1450 ج.م)</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>حجز لعزومة عبر واتساب</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
