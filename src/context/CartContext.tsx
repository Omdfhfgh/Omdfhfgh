"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/menu";
import { restaurantInfo } from "@/data/restaurant";

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface CustomerOrderData {
  name: string;
  phone: string;
  address: string;
  orderType: "delivery" | "pickup" | "dine_in";
  notes?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, notes?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  totalPrice: number;
  totalItems: number;
  sendWhatsAppOrder: (data: CustomerOrderData) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("al_ashishi_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("al_ashishi_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (item: MenuItem, quantity = 1, notes?: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id
            ? { ...i, quantity: i.quantity + quantity, notes: notes || i.notes }
            : i
        );
      }
      return [...prev, { item, quantity, notes }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (sum, i) => sum + i.item.price * i.quantity,
    0
  );

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);

  const sendWhatsAppOrder = (data: CustomerOrderData) => {
    if (cart.length === 0) return;

    const orderTypeLabel =
      data.orderType === "delivery"
        ? "توصيل للمنزل (دليفري)"
        : data.orderType === "pickup"
        ? "استلام من المطعم (تيك أواي)"
        : "حجز صالة بالمطعم";

    let message = `*طلب جديد من موقع مطعم العشايشي للمشويات والبروست*\n\n`;
    message += `📋 *قائمة الطلبات:*\n`;

    cart.forEach((i, idx) => {
      const itemTotal = i.item.price * i.quantity;
      message += `${idx + 1}. *${i.item.name}*\n`;
      message += `   - الكمية: ${i.quantity} | السعر: ${itemTotal} ج.م\n`;
      if (i.notes) {
        message += `   - ملاحظة: ${i.notes}\n`;
      }
    });

    message += `\n💵 *الإجمالي المطلوب: ${totalPrice} جنيه مصري*\n`;
    message += `──────────────────\n`;
    message += `👤 *بيانات العميل:*\n`;
    message += `• الاسم: ${data.name || "عميل كريم"}\n`;
    message += `• الهاتف: ${data.phone}\n`;
    message += `• نوع الطلب: ${orderTypeLabel}\n`;
    if (data.orderType === "delivery" && data.address) {
      message += `• العنوان: ${data.address}\n`;
    }
    if (data.notes) {
      message += `• ملاحظات إضافية: ${data.notes}\n`;
    }
    message += `──────────────────\n`;
    message += `شكرًا لكم، في انتظار تأكيد وتجهيز الطلب 🙏`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${restaurantInfo.whatsapp}?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        setIsOpen,
        totalPrice,
        totalItems,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
