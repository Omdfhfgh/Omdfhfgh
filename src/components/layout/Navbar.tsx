"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  ShoppingBag,
  Menu as MenuIcon,
  X,
  Flame,
  MessageCircle,
} from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/menu", label: "قائمة الطعام" },
  { href: "/offers", label: "العروض والصواني" },
  { href: "/about", label: "عن العشايشي" },
  { href: "/gallery", label: "معرض الصور" },
  { href: "/contact", label: "الفروع والطلب" },
];

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent jitter
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Top Bar for contact, hours, location */}
      <div className="bg-[#52090e] text-[#f7e8d3] text-xs py-2 px-4 border-b border-[#a97314]/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-[#f5bc43]" />
              {restaurantInfo.address}
            </span>
            <span className="flex items-center gap-1.5 text-amber-200/90">
              <Clock className="w-3.5 h-3.5 text-[#f5bc43]" />
              {restaurantInfo.openingHours.hours}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${restaurantInfo.phones[0]}`}
              className="flex items-center gap-1.5 font-bold hover:text-[#f5bc43] transition"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#f5bc43]" />
              {restaurantInfo.displayPhones[0]}
            </a>
            <span className="text-amber-300/40">|</span>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#f5bc43] hover:text-white transition font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              واتساب فوري للطلبات
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf6f0]/95 backdrop-blur-md shadow-md py-2 border-b border-[#eee4d3]"
            : "bg-[#faf6f0] py-3.5 border-b border-[#eee4d3]/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#d99b26] shadow-sm bg-[#781016] flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src={restaurantInfo.logo}
                  alt={restaurantInfo.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 48px, 56px"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black text-[#781016] tracking-tight group-hover:text-[#52090e] transition">
                  مطعم العشايشي
                </span>
                <span className="text-[11px] sm:text-xs font-bold text-[#a97314] flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#781016] fill-[#781016]" />
                  للمشويات على الفحم والبروست
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-bold transition-all ${
                      isActive
                        ? "bg-[#781016] text-white shadow-sm"
                        : "text-[#1c1514] hover:text-[#781016] hover:bg-[#eee4d3]/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Cart Tray Button & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Order Cart Button */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white border border-[#d99b26]/40 text-[#781016] hover:bg-[#faf6f0] shadow-sm hover:shadow transition font-bold text-sm cursor-pointer"
                aria-label="عرض سلة الطلبات"
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#781016]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#a8171f] text-white text-[11px] font-black flex items-center justify-center animate-pulse">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline">سلة الطلبات</span>
              </button>

              {/* Quick Order CTA Desktop */}
              <Link
                href="/menu"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#781016] hover:bg-[#52090e] text-white text-sm font-black shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>اطلب أكلتك الآن</span>
              </Link>

              {/* Hamburger Button Mobile with Spring Micro-interaction */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-[#1c1514] hover:bg-[#eee4d3] transition focus:outline-none cursor-pointer"
                aria-label="القائمة الرئيسية"
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close-icon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <X className="w-6 h-6 text-[#781016]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-icon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <MenuIcon className="w-6 h-6 text-[#781016]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu & Backdrop with Framer Motion Spring Physics */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Smooth Backdrop Overlay */}
              <motion.div
                key="mobile-nav-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-xs z-30 lg:hidden"
                aria-hidden="true"
              />

              {/* Drawer Menu Panel */}
              <motion.div
                key="mobile-nav-panel"
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                className="overflow-hidden lg:hidden bg-[#fffdf9] border-t border-[#eee4d3] shadow-2xl relative z-40 max-h-[calc(100vh-75px)] overflow-y-auto"
              >
                {/* Nav Links with Staggered Entrance */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.05,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-1.5 px-4 pt-3.5 pb-2"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          show: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-4 py-3 rounded-xl text-base font-bold transition flex items-center justify-between ${
                            isActive
                              ? "bg-[#781016] text-white shadow-sm"
                              : "text-[#1c1514] hover:bg-[#faf6f0] active:bg-[#eee4d3]"
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#f5bc43] shadow-sm" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Mobile Contact Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.25 }}
                  className="px-4 pt-2.5 pb-6 border-t border-gray-100 flex flex-col gap-2.5"
                >
                  <a
                    href={`tel:${restaurantInfo.phones[0]}`}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#781016] hover:bg-[#52090e] active:scale-[0.99] text-white font-black text-sm shadow transition"
                  >
                    <Phone className="w-4 h-4 text-[#f5bc43]" />
                    <span>اتصل فوراً للطلب: {restaurantInfo.displayPhones[0]}</span>
                  </a>
                  <a
                    href={`https://wa.me/${restaurantInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.99] text-white font-black text-sm shadow transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>طلب سريع عبر واتساب: {restaurantInfo.displayPhones[0]}</span>
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

