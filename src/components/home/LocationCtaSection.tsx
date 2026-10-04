import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Truck,
  ExternalLink,
  Navigation,
} from "lucide-react";
import { restaurantInfo } from "@/data/restaurant";

export function LocationCtaSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#781016] text-white overflow-hidden shadow-2xl border-4 border-[#d99b26]/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Right Column: Branch Info & Call To Action */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#f5bc43] text-xs font-black border border-white/15">
                  <Truck className="w-4 h-4 text-[#f5bc43]" />
                  <span>خدمة التوصيل السريع متاحة يومياً</span>
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  زُرنا في فرعنا أو اطلب أكلتك{" "}
                  <span className="text-[#f5bc43] block mt-1">
                    توصلك لحد باب بيتك سخنة
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-lg">
                  نسعد باستقبالكم في صالتنا المكيفة بكورنيش طراد النيل بالواسطي، أو تواصلوا معنا عبر الهاتف والواتساب لتوصيل سريع لجميع المناطق.
                </p>
              </div>

              {/* Branch Quick Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-white/15 text-xs text-neutral-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f5bc43] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">عنوان المطعم:</span>
                    <p className="text-amber-200/90 mt-0.5">{restaurantInfo.address}</p>
                    <p className="text-neutral-400 text-[11px]">{restaurantInfo.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#f5bc43] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">مواعيد العمل:</span>
                    <p className="text-amber-200/90 mt-0.5">{restaurantInfo.openingHours.days}</p>
                    <p className="text-neutral-400 text-[11px]">{restaurantInfo.openingHours.hours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`tel:${restaurantInfo.phones[0]}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#d99b26] hover:bg-[#a97314] text-[#1c1514] font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <Phone className="w-4 h-4 text-[#1c1514]" />
                  <span>اتصل الآن: {restaurantInfo.displayPhones[0]}</span>
                </a>

                <a
                  href={`https://wa.me/${restaurantInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>طلب مباشر عبر واتساب</span>
                </a>
              </div>
            </div>

            {/* Left Column: Styled Location Map Card */}
            <div className="lg:col-span-5 bg-[#52090e] p-8 sm:p-12 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-r border-white/10 relative overflow-hidden">
              <div className="relative z-10 space-y-4 max-w-sm">
                <div className="w-16 h-16 rounded-3xl bg-[#d99b26]/20 border border-[#d99b26] flex items-center justify-center mx-auto text-[#f5bc43]">
                  <Navigation className="w-8 h-8 stroke-[2.5]" />
                </div>

                <h3 className="text-xl font-black text-white">
                  موقعنا على الخريطة
                </h3>

                <p className="text-xs text-amber-200/90 leading-relaxed">
                  مركز الواسطي، شارع طراد النيل، بجوار مبنى الإدارة التعليمية، محافظة بني سويف.
                </p>

                <div className="pt-2">
                  <a
                    href={restaurantInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#781016] text-xs font-black shadow-md hover:bg-[#faf6f0] transition"
                  >
                    <span>فتح الموقع في Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Decorative circle glow */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#d99b26]/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
