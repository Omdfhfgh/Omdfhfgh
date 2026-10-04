"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Phone,
  Truck,
  Store,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import { useCart, CustomerOrderData } from "@/context/CartContext";
import { restaurantInfo } from "@/data/restaurant";

export function CartDrawer() {
  const {
    cart,
    isOpen,
    setIsOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    sendWhatsAppOrder,
  } = useCart();

  const [orderType, setOrderType] = useState<"delivery" | "pickup" | "dine_in">(
    "delivery"
  );
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const data: CustomerOrderData = {
      name: customerName,
      phone: customerPhone,
      address: customerAddress,
      orderType,
      notes: customerNotes,
    };
    sendWhatsAppOrder(data);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" dir="rtl">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full pointer-events-auto"
            >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#781016] text-white flex items-center justify-between border-b border-[#a97314]/30">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-white/10 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-[#f5bc43]" />
              </div>
              <div>
                <h2 className="text-lg font-black">سلة طلباتك</h2>
                <p className="text-xs text-amber-200">
                  {totalItems > 0
                    ? `${totalItems} أصناف جاهزة للطلب`
                    : "السلة فارغة"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="إغلاق السلة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 rounded-full bg-[#faf6f0] border-2 border-dashed border-[#d99b26]/50 flex items-center justify-center mb-4 text-[#781016]">
                  <ShoppingBag className="w-10 h-10 stroke-1" />
                </div>
                <h3 className="text-lg font-black text-[#1c1514] mb-1">
                  سلة طلباتك فارغة!
                </h3>
                <p className="text-sm text-neutral-500 mb-6 max-w-xs">
                  اختر من تشكيلة المشويات على الفحم، البروست المقرمش، أو صواني العزومات الكبرى.
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#781016] text-white font-bold text-sm shadow hover:bg-[#52090e] transition cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>تصفح المنيو الآن</span>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <span className="text-xs font-bold text-neutral-500">
                      الأصناف المحددة
                    </span>
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-xs text-red-600 hover:text-red-700 font-bold transition flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      مسح الكل
                    </button>
                  </div>

                  {cart.map((cartItem) => (
                    <div
                      key={cartItem.item.id}
                      className="p-3 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] flex gap-3 items-center"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-200">
                        <Image
                          src={cartItem.item.image}
                          alt={cartItem.item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-black text-[#1c1514] truncate">
                          {cartItem.item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-[#781016]">
                            {cartItem.item.price} ج.م
                          </span>
                          {cartItem.item.unit && (
                            <span className="text-[11px] text-neutral-400">
                              / {cartItem.item.unit}
                            </span>
                          )}
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-1 py-0.5">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(cartItem.item.id, -1)
                              }
                              className="p-1 hover:text-red-600 transition"
                              aria-label="تقليل الكمية"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-black min-w-[20px] text-center">
                              {cartItem.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(cartItem.item.id, 1)}
                              className="p-1 hover:text-green-600 transition"
                              aria-label="زيادة الكمية"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <span className="text-xs font-black text-[#781016]">
                            {cartItem.item.price * cartItem.quantity} ج.م
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Order Information Form */}
                <form onSubmit={handleSubmitOrder} className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">
                      طريقة استلام الطلب:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setOrderType("delivery")}
                        className={`p-2.5 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition cursor-pointer ${
                          orderType === "delivery"
                            ? "bg-[#781016] text-white border-[#781016] shadow-sm"
                            : "bg-[#faf6f0] text-neutral-700 border-[#eee4d3]"
                        }`}
                      >
                        <Truck className="w-4 h-4" />
                        <span>دليفري</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType("pickup")}
                        className={`p-2.5 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition cursor-pointer ${
                          orderType === "pickup"
                            ? "bg-[#781016] text-white border-[#781016] shadow-sm"
                            : "bg-[#faf6f0] text-neutral-700 border-[#eee4d3]"
                        }`}
                      >
                        <Store className="w-4 h-4" />
                        <span>تيك أواي</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setOrderType("dine_in")}
                        className={`p-2.5 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition cursor-pointer ${
                          orderType === "dine_in"
                            ? "bg-[#781016] text-white border-[#781016] shadow-sm"
                            : "bg-[#faf6f0] text-neutral-700 border-[#eee4d3]"
                        }`}
                      >
                        <UtensilsCrossed className="w-4 h-4" />
                        <span>صالة المطعم</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block">
                      الاسم الكريم:
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="أدخل اسمك الكريم"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#781016] bg-neutral-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block">
                      رقم الهاتف / الواتساب:
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="مثال: 01286374749"
                      required
                      dir="ltr"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#781016] bg-neutral-50 text-right"
                    />
                  </div>

                  {orderType === "delivery" && (
                    <div className="space-y-1.5 animate-in fade-in duration-200">
                      <label className="text-xs font-bold text-neutral-700 block">
                        عنوان التوصيل في الواسطي:
                      </label>
                      <input
                        type="text"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="المنطقة - الشارع - رقم العقار أو علامة مميزة"
                        required={orderType === "delivery"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#781016] bg-neutral-50"
                      />
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block">
                      ملاحظات للشيف (اختياري):
                    </label>
                    <textarea
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="مثال: بدون شطة، زيادة طحينة، تسوية زيادة..."
                      rows={2}
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#781016] bg-neutral-50 resize-none"
                    />
                  </div>

                  {/* Summary & Submit */}
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center justify-between text-base font-black text-[#1c1514]">
                      <span>إجمالي الطلب:</span>
                      <span className="text-[#781016] text-xl">
                        {totalPrice} جنيه مصري
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-500 text-center">
                      * التوصيل سريع وطازج لكافة مناطق الواسطي وضواحيها.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition transform active:scale-98 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>إرسال الطلب فوراً عبر واتساب</span>
                    </button>

                    <a
                      href={`tel:${restaurantInfo.phones[0]}`}
                      className="w-full py-3 px-4 rounded-xl bg-[#781016] hover:bg-[#52090e] text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                    >
                      <Phone className="w-4 h-4 text-[#f5bc43]" />
                      <span>أو اتصل لتأكيد الطلب: {restaurantInfo.displayPhones[0]}</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )}
</AnimatePresence>
  );
}
