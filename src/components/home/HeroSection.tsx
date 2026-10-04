"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  ShoppingBag,
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  Star,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#52090e] via-[#781016] to-[#52090e] text-white pt-8 pb-16 md:pt-14 md:pb-24 border-b-4 border-[#d99b26]">
      {/* Background radial glow & patterns */}
      <div className="absolute inset-0 pattern-dark opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#d99b26]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Right Column (RTL Start): Main Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#d99b26]/40 text-[#f5bc43] text-xs sm:text-sm font-black shadow-sm">
              <Flame className="w-4 h-4 fill-[#f5bc43] animate-pulse" />
              <span>أصل المشويات على الفحم وسر قرمشة البروست بالواسطي</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] text-white">
              طعم الشواء المصري الأصيل{" "}
              <span className="block text-[#f5bc43] mt-2 drop-shadow-md">
                مع مطعم العشايشي
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-amber-100/90 max-w-xl leading-relaxed">
              لحوم بلدية طازجة تُشوى على جمر الفحم الطبيعي بتتبيلة متوارثة، ودجاج بروست ذهبي مقرمش حتى آخر قطمة. عزومتك جاهزة ومشرفة دائماً!
            </p>

            {/* Key Trust Signals */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-bold text-amber-200">
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#f5bc43]" />
                لحوم بلدية طازجة 100%
              </span>
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-xl border border-white/10">
                <Sparkles className="w-4 h-4 text-[#f5bc43]" />
                بروست مقرمش بخلطة سرية
              </span>
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-[#f5bc43]" />
                دليفري سريع وسخن
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#d99b26] hover:bg-[#a97314] text-[#1c1514] font-black text-base shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#1c1514]" />
                <span>استكشف قائمة الطعام</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-black text-base border border-white/20 backdrop-blur-md transition flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>اطلب الآن عبر واتساب</span>
              </a>
            </div>

            {/* Quick Contact & Rating */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-amber-200/80">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-white">4.8 / 5</span>
                <span>(أكثر من 300+ تقييم بالواسطي)</span>
              </div>

              <a
                href={`tel:${restaurantInfo.phones[0]}`}
                className="hover:text-white transition flex items-center gap-1.5 font-bold text-white group"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#f5bc43] group-hover:scale-110 transition-transform" />
                <span>{restaurantInfo.displayPhones[0]}</span>
              </a>
            </div>
          </motion.div>

          {/* Left Column (RTL End): Layered Visual Composition with proper Z-Index and Non-Overlapping Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center py-6 sm:py-8 lg:py-6"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer Glowing Circle (Z-0) */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#d99b26]/30 via-red-600/20 to-transparent blur-2xl pointer-events-none z-0" />

              {/* Floating Badge 1: Chef Mascot Card (Z-20, top-right of image) */}
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-4 sm:-top-5 -right-2 sm:-right-5 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-2xl border-2 border-[#d99b26] flex items-center gap-2.5 transform -rotate-2 cursor-default select-none"
              >
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#781016] flex-shrink-0 shadow-inner">
                  <Image
                    src={restaurantInfo.logo}
                    alt="شيف العشايشي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pr-1 text-right">
                  <span className="text-[11px] font-bold text-[#a97314] block">
                    سر النكهة
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#781016]">
                    تتبيلة العشايشي السرية
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Broast Crunch Card (Z-20, floating over middle-left of image - NEVER covers bottom card or button) */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-24 sm:bottom-28 -left-2 sm:-left-5 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-2xl border-2 border-[#d99b26] flex items-center gap-2.5 transform rotate-2 cursor-default select-none"
              >
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0 shadow-inner">
                  <Image
                    src="/images/broast_crispy.jpg"
                    alt="بروست مقرمش"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pr-1 text-right">
                  <span className="text-[11px] font-bold text-[#781016] block">
                    بروست ذهبي
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#1c1514]">
                    قرمشة حتى آخر قطمة!
                  </span>
                </div>
              </motion.div>

              {/* Main Feast Card (Z-10) */}
              <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-[#d99b26]/60 shadow-2xl bg-[#1c1514]">
                <div className="relative h-68 sm:h-80 w-full">
                  <Image
                    src="/images/hero_grill_feast.jpg"
                    alt="مشويات مطعم العشايشي على الفحم"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                </div>

                {/* Bottom Overlay Info (Clearly stacked, ample padding, unobstructed button) */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-[#160d0d] via-[#1f100f] to-[#2a1715] border-t border-[#d99b26]/40 relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-[#f5bc43] uppercase tracking-wider block">
                        صواني العزومات الكبرى
                      </span>
                      <h2 className="text-base sm:text-lg font-black text-white truncate sm:whitespace-normal">
                        صينية مشويات العشايشي الملكية
                      </h2>
                    </div>

                    <Link
                      href="/offers"
                      className="flex-shrink-0 px-4 py-2 rounded-xl bg-[#d99b26] hover:bg-[#f5bc43] text-[#1c1514] text-xs font-black shadow-md transition-all flex items-center gap-1.5 transform hover:scale-105 active:scale-95"
                    >
                      <span>تفاصيل العرض</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
