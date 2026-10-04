"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  Clock,
  Users,
  Flame,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { restaurantInfo } from "@/data/restaurant";

interface DishDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function DishDetailModal({ item, onClose }: DishDetailModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const handleAdd = () => {
    addToCart(item, quantity, notes);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `السلام عليكم، أود طلب صنف (${item.name}) - الكمية: ${quantity} من مطعم العشايشي.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" dir="rtl">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden border border-[#d99b26]/30 animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Dish Image */}
          <div className="relative h-64 sm:h-72 w-full bg-neutral-900">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Badges */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {item.badge && (
                <span className="px-3 py-1 rounded-full bg-[#a8171f] text-white text-xs font-black shadow-md flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  {item.badge}
                </span>
              )}
              {item.spicy && (
                <span className="px-2.5 py-1 rounded-full bg-orange-600 text-white text-xs font-bold">
                  حار 🌶️
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 space-y-4">
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-black text-[#1c1514]">
                  {item.name}
                </h3>
                <div className="text-left flex-shrink-0">
                  <span className="text-2xl font-black text-[#781016]">
                    {item.price}
                  </span>
                  <span className="text-xs font-bold text-neutral-500 mr-1">
                    ج.م
                  </span>
                  {item.oldPrice && (
                    <span className="block text-xs text-neutral-400 line-through">
                      {item.oldPrice} ج.م
                    </span>
                  )}
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-medium mt-0.5">
                {item.nameEn}
              </p>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.description}
            </p>

            {/* Meta tags (serving, prep time) */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
              {item.servingSize && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf6f0] border border-[#eee4d3] text-xs font-bold text-[#1c1514]">
                  <Users className="w-4 h-4 text-[#d99b26]" />
                  <span>{item.servingSize}</span>
                </div>
              )}
              {item.preparationTime && (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf6f0] border border-[#eee4d3] text-xs font-bold text-[#1c1514]">
                  <Clock className="w-4 h-4 text-[#781016]" />
                  <span>وقت التحضير: {item.preparationTime}</span>
                </div>
              )}
            </div>

            {/* Ingredients */}
            {item.ingredients && item.ingredients.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-neutral-700 block">
                  المكونات والتقديم:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 text-neutral-700 text-xs font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions Note */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-neutral-700 block">
                ملاحظات إضافية على الطلب:
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="مثال: زيادة طحينة، بدون بصل، عيش زيادة..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-gray-200 bg-neutral-50 focus:outline-none focus:border-[#781016]"
              />
            </div>

            {/* Actions: Quantity + Add to Cart */}
            <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center gap-3 bg-[#faf6f0] border border-[#eee4d3] rounded-2xl px-3 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-red-700 transition"
                  aria-label="تقليل"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-black min-w-[24px] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-green-700 transition"
                  aria-label="زيادة"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Tray */}
              <button
                type="button"
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-md transition transform active:scale-98 cursor-pointer ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#781016] hover:bg-[#52090e] text-white"
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>تمت الإضافة للسلة!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>أضف للطلب ({item.price * quantity} ج.م)</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp CTA */}
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-emerald-800 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>طلب فوري مباشر لهذا الصنف عبر واتساب</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
