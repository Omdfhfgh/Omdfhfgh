import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  Sparkles,
  Heart,
  Users,
  Award,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { restaurantInfo } from "@/data/restaurant";

export const metadata = {
  title: `عن مطعم العشايشي | حكاية المشويات والبروست بالواسطي`,
  description:
    "تعرف على قصة مطعم العشايشي في الواسطي، سر شواء اللحوم البلدية على الفحم، خلطة البروست الذهبي، ورؤيتنا في تقديم طعام بلدي فاخر يشرفك.",
};

export default function AboutPage() {
  return (
    <div className="py-10 md:py-16 bg-[#faf6f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          badge="حكايتنا وأصولنا"
          title="مطعم العشايشي: شغف الشواء وسر القرمشة"
          subtitle="من قلب الواسطي على ضفاف النيل، بنينا سمعتنا على الأمانة في اللحوم البلدية، وإتقان أسرار الشواء والبروست."
        />

        {/* Story Section: Two Columns */}
        <div className="bg-white rounded-3xl border border-[#eee4d3] p-6 sm:p-10 lg:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-right">
              <span className="text-xs font-black text-[#a97314] tracking-wider uppercase block">
                الأصالة تبدأ من هنا
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-[#1c1514] leading-snug">
                طعم زمان.. بأيدي شيفات تعشق التفاصيل
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                في مطعم العشايشي، لا نعتبر تحضير الطعام مجرد عمل، بل هو شغف حقيقي يبدأ مع إشراقة كل صباح. نختار ذبائحنا البلدية الطازجة بعناية تامة، ونحرص على ألا يدخل مطبخنا أي لحوم مجمدة أو مستوردة على الإطلاق.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                سر مذاقنا الشهير يكمن في "التتبيلة المتوازنة"؛ تلك التتبيلة التي تبرز حلاوة وطعم اللحم البلدي الطبيعي دون أن تطغى عليه، ثم يأتي دور جمر الفحم الطبيعي الذي يعطي كبابنا وكفتتنا وطربنا تلك الرائحة المدخنة المميزة التي تسري في شوارع الواسطي.
              </p>

              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d3] flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#d99b26] bg-[#781016] flex-shrink-0">
                  <Image
                    src={restaurantInfo.logo}
                    alt="شعار العشايشي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#781016]">
                    شعارنا الدائم: كرم الضيافة وأمانة الطعم
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    "عزومتك أمانة في رقبتنا، وهدفنا أن يخرج ضيوفك مبهورين بالجودة والطعم."
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Mosaic (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#d99b26] h-80 sm:h-96 w-full">
                <Image
                  src="/images/chef_fire.jpg"
                  alt="شيف المشويات على الفحم"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 text-white text-xs font-bold">
                  <span>شواء على الفحم الطبيعي الهادئ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-16">
          <SectionHeading
            badge="مبادئنا"
            title="أسرار تميز أطباق العشايشي"
            subtitle="نلتزم بمعايير صارمة في كل مرحلة من مراحل التحضير."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm transition space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#781016]/10 text-[#781016] flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#1c1514]">
                1. اللحوم البلدية فقط
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                نرفض اللحوم المجمدة قطعياً. نختار اللحوم البلدية الطازجة التي تذبح يومياً لضمان سلامة وصحة ونكهة كل وجبة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm transition space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#781016]/10 text-[#781016] flex items-center justify-center font-black">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#1c1514]">
                2. شواء الفحم الاحترافي
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                نستخدم الفحم النباتي الطبيعي وشبكات الشواء التي تضمن توزيع الحرارة بالتساوي للحصول على عصارة لا تجف وقشرة مشوية مثالية.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm transition space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#781016]/10 text-[#781016] flex items-center justify-center font-black">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#1c1514]">
                3. سر قرمشة البروست
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                تتبيل دجاج طازج بمزيج أعشاب سرية مع طبقة كرانشي خفيفة مقلية في زيت نقي يمنحك قرمشة تدوم حتى باب منزلك.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm transition space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#781016]/10 text-[#781016] flex items-center justify-center font-black">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#1c1514]">
                4. خدمة أهلنا في الواسطي
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                صالة عائلية مكيفة ومريحة، وطاقم عمل ودود يرحب بك بحفاوة وكرم مصري أصيل كأنك في بيتك تماماً.
              </p>
            </div>
          </div>
        </div>

        {/* Atmosphere & Hall Showcase */}
        <div className="bg-[#781016] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#d99b26] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-right">
              <span className="text-xs font-bold text-[#f5bc43] uppercase tracking-wider block">
                في خدمتكم دائماً
              </span>
              <h3 className="text-2xl sm:text-3xl font-black">
                صالة المطعم وخدمة الدليفري السريع
              </h3>
              <p className="text-sm text-amber-100/90 leading-relaxed">
                سواء كنت تفضل الجلوس وتناول وجبتك في صالتنا الهادئة المطلة على شارع طراد النيل، أو تفضل طلب أكلتك لتصلك لمنزلك ساخنة وطازجة، نحن دائماً في انتظارك.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="px-6 py-3 rounded-2xl bg-[#d99b26] text-[#1c1514] font-black text-xs hover:bg-amber-400 transition"
                >
                  استكشف المنيو والأسعار
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-2xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 border border-white/20 transition"
                >
                  معلومات الفرع وأرقام الهواتف
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <Image
                src="/images/restaurant_hall.jpg"
                alt="صالة مطعم العشايشي"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
