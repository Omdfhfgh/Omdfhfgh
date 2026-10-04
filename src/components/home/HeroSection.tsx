"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-right space-y-6">
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
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-amber-200">
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-[#f5bc43]" />
                لحوم بلدية طازجة 100%
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <Sparkles className="w-4 h-4 text-[#f5bc43]" />
                بروست مقرمش بخلطة سرية
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
                <Clock className="w-4 h-4 text-[#f5bc43]" />
                دليفري سريع وسخن
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
              <Link
                href="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#d99b26] hover:bg-[#a97314] text-[#1c1514] font-black text-base shadow-xl hover:shadow-2xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-5 h-5 text-[#1c1514]" />
                <span>استكشف قائمة الطعام</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-black text-base border border-white/20 backdrop-blur-md transition flex items-center justify-center gap-2"
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
                className="hover:text-white transition flex items-center gap-1 font-bold text-white"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#f5bc43]" />
                {restaurantInfo.displayPhones[0]}
              </a>
            </div>
          </div>

          {/* Left Column (RTL End): Layered Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Circle */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#d99b26]/30 via-red-600/20 to-transparent blur-xl" />

              {/* Main Feast Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#d99b26]/50 shadow-2xl bg-[#1c1514]">
                <div className="relative h-72 sm:h-80 w-full">
                  <Image
                    src="/images/hero_grill_feast.jpg"
                    alt="مشويات مطعم العشايشي على الفحم"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="p-5 bg-gradient-to-t from-[#1c1514] to-[#2a1715] border-t border-[#d99b26]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#f5bc43] uppercase tracking-wider block">
                        صواني العزومات الكبرى
                      </span>
                      <h2 className="text-lg font-black text-white">
                        صينية مشويات العشايشي الملكية
                      </h2>
                    </div>

                    <Link
                      href="/offers"
                      className="px-3.5 py-1.5 rounded-xl bg-[#d99b26] text-[#1c1514] text-xs font-black hover:bg-amber-400 transition"
                    >
                      تفاصيل العرض
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Chef Mascot Card */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white p-2.5 rounded-2xl shadow-2xl border-2 border-[#d99b26] flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[#781016] flex-shrink-0">
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
                  <span className="text-xs font-black text-[#781016]">
                    تتبيلة العشايشي السرية
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Broast Crunch Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-2.5 rounded-2xl shadow-2xl border-2 border-[#d99b26] flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-100 flex-shrink-0">
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
                  <span className="text-xs font-black text-[#1c1514]">
                    قرمشة حتى آخر قطمة!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
