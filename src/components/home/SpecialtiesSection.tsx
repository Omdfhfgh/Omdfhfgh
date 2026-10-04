import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SpecialtiesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="تخصصات العشايشي"
          title="عالم المشويات والبروست كما يجب أن يكون"
          subtitle="نجمع لك بين أصالة الشواء المصري على جمر الفحم الطبيعي وبين أحدث أسرار القرمشة الذهبية لدجاج البروست."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Pillar 1: Charcoal Grills */}
          <div className="group rounded-3xl bg-white border border-[#eee4d3] hover:border-[#d99b26] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#781016]/10 text-[#781016] text-xs font-black flex items-center gap-1.5 border border-[#781016]/20">
                  <Flame className="w-4 h-4 fill-[#781016]" />
                  <span>أصل المشويات المصرية</span>
                </span>
                <span className="text-xs font-bold text-[#a97314]">
                  فحم طبيعي 100%
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1c1514] mb-2 group-hover:text-[#781016] transition">
                  مشويات على الفحم البلدي
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  نستخدم اللحوم البلدية الطازجة التي يتم انتقاؤها يومياً. التتبيلة متوارثة تعتمد على ماء البصل، التوابل الشرقية، والأعشاب بدون أي إضافات صناعية، لتتذوق الطعم الحقيقي للحم المشوي.
                </p>
              </div>

              {/* Photo Showcase */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/kofta_charcoal.jpg"
                  alt="كفتة وكباب مشوي على الفحم"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 text-white text-xs font-bold flex items-center gap-2">
                  <span className="bg-[#781016] px-2.5 py-1 rounded-lg">
                    كفتة • طرب • كباب ضاني • شيش
                  </span>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="grid grid-cols-2 gap-2.5 text-xs font-bold text-[#1c1514]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781016]" />
                  <span>لحم بلدي طازج يومياً</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781016]" />
                  <span>تتبيلة خاصة متوارثة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781016]" />
                  <span>شواء على نار الجمر الهادئة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#781016]" />
                  <span>سلطات وطحينة بلدي وعيش سخن</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-500">
                أكثر من 8 أصناف مشويات متوفرة
              </span>
              <Link
                href="/menu?category=grills"
                className="inline-flex items-center gap-1.5 text-sm font-black text-[#781016] hover:text-[#52090e] group-hover:translate-x-1 transition"
              >
                <span>استكشف المشويات</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Golden Crispy Broast */}
          <div className="group rounded-3xl bg-white border border-[#eee4d3] hover:border-[#d99b26] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#d99b26]/15 text-[#a97314] text-xs font-black flex items-center gap-1.5 border border-[#d99b26]/30">
                  <Sparkles className="w-4 h-4" />
                  <span>سر القرمشة الملكية</span>
                </span>
                <span className="text-xs font-bold text-[#781016]">
                  كرانشي حتى آخر قضمة
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1c1514] mb-2 group-hover:text-[#781016] transition">
                  البروست الذهبي المقرمش
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  قطع دجاج طازجة متبلة بعمق حتى العظم لضمان طراوة مذهلة من الداخل مع طبقة خارجية مقرمشة ذهبية وخفيفة. يقدم مع الثومية الغنية، الكول سلو بالمايونيز، والبطاطس المقرمشة.
                </p>
              </div>

              {/* Photo Showcase */}
              <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner">
                <Image
                  src="/images/hero_broast.jpg"
                  alt="بروست دجاج مقرمش ذهبي"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 text-white text-xs font-bold flex items-center gap-2">
                  <span className="bg-[#a97314] px-2.5 py-1 rounded-lg">
                    وجبات فردية • عائلية • استربس
                  </span>
                </div>
              </div>

              {/* Bullet Features */}
              <ul className="grid grid-cols-2 gap-2.5 text-xs font-bold text-[#1c1514]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a97314]" />
                  <span>دجاج طازج بلا زفارة</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a97314]" />
                  <span>قرمشة خفيفة ومش شارب زيت</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a97314]" />
                  <span>اختيار بين الحار والعادي</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#a97314]" />
                  <span>ثومية كريمية وكول سلو طازج</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-500">
                وجبات فردية وعائلية وسندوتشات
              </span>
              <Link
                href="/menu?category=broast"
                className="inline-flex items-center gap-1.5 text-sm font-black text-[#a97314] hover:text-[#781016] group-hover:translate-x-1 transition"
              >
                <span>استكشف وجبات البروست</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
