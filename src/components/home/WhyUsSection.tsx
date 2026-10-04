import React from "react";
import {
  ShieldCheck,
  Flame,
  Sparkles,
  Truck,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurantInfo } from "@/data/restaurant";

const whyUsPillars = [
  {
    icon: ShieldCheck,
    title: "لحوم بلدية طازجة 100%",
    description:
      "لا نستخدم أي لحوم مجمدة على الإطلاق. ذبائحنا بلدية طازجة يتم ذبحها وفحصها يومياً لضمان سلامة وطعم نقي يشرفك.",
  },
  {
    icon: Flame,
    title: "أصول الشواء على جمر الفحم",
    description:
      "شواء بطيء ومحترف على الفحم الطبيعي بدون أي مواد كيميائية، ليمنحك الرائحة المدخنة الشهية والقوام الطري من الداخل.",
  },
  {
    icon: Sparkles,
    title: "خلطة البروست الذهبي السرية",
    description:
      "تتبيل عميق للدجاج الطازج وقلي بأحدث المعدات الدقيقة، لتحصل على دجاج مقرمش ذهبي خفيف على المعدة ومش شارب زيت.",
  },
  {
    icon: Truck,
    title: "توصيل سريع وسخن لحد باب بيتك",
    description:
      "أسطول دليفري مجهز بحافظات حرارية مخصصة لضمان وصول طلبك ساخناً ومقرمشاً كأنه لسه خارج من مطبخ المطعم فوراً.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="سر تميزنا"
          title="لماذا يختار أهالي الواسطي مطعم العشايشي؟"
          subtitle="معادلتنا بسيطة: مكونات بلدي طازجة، نظافة فائقة، وأمانة في كل وجبة تخرج من مطبخنا."
        />

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#781016]/10 text-[#781016] flex items-center justify-center mb-5 group-hover:bg-[#781016] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-black text-[#1c1514] mb-2 group-hover:text-[#781016] transition">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#a97314]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#d99b26]" />
                  <span>معيار جودة ثابت</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#781016] text-white shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center border-2 border-[#d99b26]/40">
          {restaurantInfo.stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f5bc43] tracking-tight block">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white block">
                {stat.label}
              </span>
              <span className="text-[11px] text-amber-200/80 block">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
