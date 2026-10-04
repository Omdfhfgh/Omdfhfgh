"use client";

import React, { useState } from "react";
import { Plus, Minus, ShoppingBag, MessageCircle, CheckCircle2 } from "lucide-react";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { restaurantInfo } from "@/data/restaurant";

export function DishDetailClientActions({ item }: { item: MenuItem }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item, quantity, notes);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `السلام عليكم، أود طلب (${item.name}) - الكمية: ${quantity} ${
        notes ? `ملاحظات: ${notes}` : ""
      } من مطعم العشايشي.`
    );
    window.open(`https://wa.me/${restaurantInfo.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-4 pt-4 border-t border-gray-100">
      {/* Notes */}
      <div className="space-y-1">
        <label className="text-xs font-bold text-neutral-700 block">
          ملاحظات خاصة على تحضير الصنف:
        </label>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="مثال: زيادة طحينة، بدون بصل، عيش زيادة..."
          className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 bg-neutral-50 focus:outline-none focus:border-[#781016]"
        />
      </div>

      {/* Counter + Add to Cart */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Quantity Counter */}
        <div className="flex items-center gap-3 bg-[#faf6f0] border border-[#eee4d3] rounded-2xl px-4 py-3 w-full sm:w-auto justify-between">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:text-red-700 transition"
            aria-label="تقليل"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-base font-black min-w-[28px] text-center">
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

        {/* Add Button */}
        <button
          type="button"
          onClick={handleAdd}
          className={`w-full sm:flex-1 py-3.5 px-6 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition transform active:scale-98 cursor-pointer ${
            added
              ? "bg-green-600 text-white"
              : "bg-[#781016] hover:bg-[#52090e] text-white"
          }`}
        >
          {added ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>تمت الإضافة للسلة بنجاح!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5 text-[#f5bc43]" />
              <span>أضف للطلب ({item.price * quantity} ج.م)</span>
            </>
          )}
        </button>
      </div>

      {/* Direct WhatsApp Button */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-full py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition cursor-pointer"
      >
        <MessageCircle className="w-4 h-4" />
        <span>طلب فوري ومباشر لهذا الصنف عبر واتساب</span>
      </button>
    </div>
  );
}
