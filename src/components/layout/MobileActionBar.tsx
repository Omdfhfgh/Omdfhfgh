"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Utensils, ShoppingBag } from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";
import { useCart } from "@/context/CartContext";

export function MobileActionBar() {
  const { totalItems, setIsOpen } = useCart();

  return (
    <aside
      aria-label="شريط الوصول السريع"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#eee4d3] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-2"
    >
      <div className="grid grid-cols-4 gap-1.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${restaurantInfo.phones[0]}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#781016] text-white hover:bg-[#52090e] transition text-center shadow-sm"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#f5bc43]" />
          <span className="text-[10px] font-black leading-tight">اتصال فوري</span>
        </a>

        {/* WhatsApp Order Button */}
        <a
          href={`https://wa.me/${restaurantInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition text-center shadow-sm"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-black leading-tight">واتساب</span>
        </a>

        {/* Menu Navigation */}
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#faf6f0] text-[#1c1514] border border-[#eee4d3] hover:bg-[#eee4d3] transition text-center"
        >
          <Utensils className="w-4 h-4 mb-0.5 text-[#781016]" />
          <span className="text-[10px] font-bold leading-tight">المنيو</span>
        </Link>

        {/* Cart Drawer Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#faf6f0] text-[#1c1514] border border-[#eee4d3] hover:bg-[#eee4d3] transition text-center cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4 mb-0.5 text-[#a97314]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#a8171f] text-white text-[9px] font-black flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold leading-tight">سلة الطلب</span>
        </button>
      </div>
    </aside>
  );
}
