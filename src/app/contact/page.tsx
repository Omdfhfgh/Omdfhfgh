"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ExternalLink,
  Send,
  Truck,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurantInfo } from "@/data/restaurant";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("طلب دليفري");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `*رسالة جديدة من موقع مطعم العشايشي:*\n\n• الاسم: ${name}\n• الهاتف: ${phone}\n• موضوع التواصل: ${subject}\n• الرسالة: ${message}`;
    const url = `https://wa.me/${restaurantInfo.whatsapp}?text=${encodeURIComponent(
      formatted
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-10 md:py-16 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="تواصل معنا"
          title="فروعنا وأرقام الطلبات والدليفري"
          subtitle="نسعد دائماً بخدمتكم في صالتنا بكورنيش طراد النيل بالواسطي أو بتوصيل طلباتكم ساخنة إلى باب منزلكم."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Branch & Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl border border-[#eee4d3] p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#d99b26] bg-[#781016] flex-shrink-0">
                  <Image
                    src={restaurantInfo.logo}
                    alt={restaurantInfo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1c1514]">
                    مطعم العشايشي
                  </h3>
                  <p className="text-xs font-bold text-[#a97314]">
                    فرع الواسطي - كورنيش طراد النيل
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-[#781016]/10 text-[#781016] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-400 block">
                    العنوان التفصيلي:
                  </span>
                  <p className="text-sm font-black text-[#1c1514] mt-0.5">
                    {restaurantInfo.address}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {restaurantInfo.landmark}، محافظة بني سويف
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-[#781016]/10 text-[#781016] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-neutral-400 block mb-1">
                    أرقام الطلبات والدليفري:
                  </span>
                  <div className="space-y-1.5" dir="ltr">
                    {restaurantInfo.phones.map((p, idx) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="flex items-center justify-between p-2 rounded-xl bg-[#faf6f0] border border-[#eee4d3] hover:border-[#781016] text-xs font-black text-[#781016] transition group"
                      >
                        <span>{restaurantInfo.displayPhones[idx]}</span>
                        <span className="text-[10px] font-bold text-neutral-400 group-hover:text-[#781016]">
                          اتصال مباشر 📞
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-2xl bg-[#781016]/10 text-[#781016] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-400 block">
                    مواعيد العمل الرسمية:
                  </span>
                  <p className="text-sm font-black text-[#1c1514] mt-0.5">
                    {restaurantInfo.openingHours.days}
                  </p>
                  <p className="text-xs text-[#a97314] font-bold mt-0.5">
                    {restaurantInfo.openingHours.hours}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {restaurantInfo.openingHours.note}
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black shadow transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>محادثة فورية للطلبات عبر واتساب</span>
                </a>

                <a
                  href={restaurantInfo.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition"
                >
                  <FacebookIcon className="w-4 h-4" />
                  <span>صفحتنا الرسمية على فيسبوك</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact / Reservation / Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-[#eee4d3] p-6 sm:p-8 shadow-sm">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-black text-[#1c1514]">
                  أرسل استفسارك أو احجز عزومتك
                </h3>
                <p className="text-xs text-neutral-500">
                  املأ النموذج وسيتم تحويل رسالتك مباشرة لفريق خدمة العملاء عبر واتساب.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block">
                      الاسم الكريم:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أدخل اسمك"
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#faf6f0] text-sm focus:outline-none focus:border-[#781016]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-700 block">
                      رقم الهاتف / الواتساب:
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01286865908"
                      required
                      dir="ltr"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#faf6f0] text-sm focus:outline-none focus:border-[#781016] text-right"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 block">
                    موضوع التواصل:
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#faf6f0] text-sm focus:outline-none focus:border-[#781016] cursor-pointer"
                  >
                    <option value="طلب دليفري وتوصيل">طلب دليفري وتوصيل لمنزل</option>
                    <option value="حجز وتجهيز صواني عزومة">حجز وتجهيز صواني عزومة كبرى</option>
                    <option value="حجز طاولة بصالة المطعم">حجز طاولة بصالة المطعم</option>
                    <option value="استفسار عام أو شكوى واقتراح">استفسار عام أو اقتراح</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-neutral-700 block">
                    نص الرسالة أو تفاصيل الطلب:
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب هنا ما تود السؤال عنه أو تفاصيل العزومة وعدد الأفراد..."
                    rows={4}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#faf6f0] text-sm focus:outline-none focus:border-[#781016] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#781016] hover:bg-[#52090e] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md transition transform active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال الرسالة عبر واتساب الآن</span>
                </button>
              </form>
            </div>

            {/* Google Maps / Directions Card */}
            <div className="bg-[#781016] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#d99b26]/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-right">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f5bc43] flex-shrink-0">
                  <Navigation className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-base font-black">
                    تريد الوصول إلى فرعنا مباشرة؟
                  </h4>
                  <p className="text-xs text-amber-100/90 mt-0.5">
                    الواسطي - كورنيش طراد النيل - بجوار الإدارة التعليمية
                  </p>
                </div>
              </div>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-[#781016] font-black text-xs hover:bg-[#faf6f0] transition shadow whitespace-nowrap flex items-center justify-center gap-1.5"
              >
                <span>فتح الخريطة بالـ GPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
