import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Flame,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { restaurantInfo } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-[#1c1514] text-[#f7e8d3] pt-14 pb-24 md:pb-12 border-t-4 border-[#d99b26] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#781016]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Restaurant Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#d99b26] bg-[#781016] flex-shrink-0 shadow-lg">
                <Image
                  src={restaurantInfo.logo}
                  alt={restaurantInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">مطعم العشايشي</h3>
                <p className="text-xs text-[#f5bc43] font-bold">
                  أصل المشويات على الفحم وسر البروست
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              طعم بلدي مصري أصيل وتتبيلات متوارثة من أجود أنواع اللحوم الطازجة والدجاج المقرمش. نفخر بخدمة أهالي مركز الواسطي ومحافظة بني سويف.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={restaurantInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition shadow-md"
                aria-label="صفحة مطعم العشايشي على فيسبوك"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center transition shadow-md"
                aria-label="مراسلة المطعم عبر واتساب"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${restaurantInfo.phones[0]}`}
                className="w-10 h-10 rounded-xl bg-[#781016] hover:bg-[#52090e] text-white flex items-center justify-center transition shadow-md"
                aria-label="الاتصال بالمطعم هاتفياً"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-black text-white border-b-2 border-[#d99b26] pb-2 inline-block mb-4">
              روابط سريعة
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-neutral-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>قائمة المشويات والبروست</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>صواني العزومات والعروض</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>حكاية العشايشي وسر التتبيلة</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>معرض الصور وأطباقنا</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#f5bc43] transition flex items-center gap-1.5"
                >
                  <span>الفروع وأرقام الدليفري</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Order Numbers */}
          <div>
            <h4 className="text-base font-black text-white border-b-2 border-[#d99b26] pb-2 inline-block mb-4">
              أرقام الطلبات والدليفري
            </h4>
            <p className="text-xs text-neutral-400 mb-3">
              اتصل بنا مباشرة لتجهيز وتوصيل طلبك ساخن وسريع:
            </p>
            <div className="flex flex-col gap-2.5">
              {restaurantInfo.phones.map((phone, i) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  dir="ltr"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#d99b26] hover:bg-white/10 text-white font-bold transition group"
                >
                  <span className="text-sm tracking-wider text-[#f5bc43] group-hover:text-white">
                    {restaurantInfo.displayPhones[i]}
                  </span>
                  <Phone className="w-4 h-4 text-[#f5bc43]" />
                </a>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-[#781016]/40 border border-[#781016] text-xs text-amber-200">
              <span className="font-bold block mb-1">خدمة التوصيل السريع:</span>
              تغطي كافة أحياء الواسطي والقرى والمناطق المجاورة.
            </div>
          </div>

          {/* Column 4: Location & Working Hours */}
          <div>
            <h4 className="text-base font-black text-white border-b-2 border-[#d99b26] pb-2 inline-block mb-4">
              العنوان ومواعيد العمل
            </h4>
            <div className="flex flex-col gap-3 text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#f5bc43] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{restaurantInfo.address}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {restaurantInfo.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-5 h-5 text-[#f5bc43] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{restaurantInfo.openingHours.days}</p>
                  <p className="text-xs text-[#f5bc43] mt-0.5">
                    {restaurantInfo.openingHours.hours}
                  </p>
                </div>
              </div>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#f5bc43] hover:underline font-bold"
              >
                <span>عرض الاتجاهات على خرائط Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-3">
          <p>
            © {new Date().getFullYear()} {restaurantInfo.name}. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>الواسطي - طراد النيل</span>
            <span>•</span>
            <span className="text-[#f5bc43]">طازج وبلدي 100%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
