import React from "react";
import { Star, Quote, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { customerReviews } from "@/data/reviews";
import { restaurantInfo } from "@/data/restaurant";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf6f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="شهادات نعتز بها"
          title="ماذا يقول زبائننا عن مطعم العشايشي؟"
          subtitle="ثقة زبائننا في الواسطي وبني سويف هي وسام شرف على صدورنا ودافعنا الدائم لتقديم الأفضل."
        />

        {/* Overall Google Rating Banner */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-white border border-[#d99b26]/40 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#781016] text-[#f5bc43] flex items-center justify-center font-black text-xl shadow-xs">
              4.8
            </div>
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-neutral-600 block mt-0.5">
                تقييم موثق على خرائط Google
              </span>
            </div>
          </div>

          <span className="text-xs font-bold text-[#781016] bg-[#781016]/10 px-2.5 py-1 rounded-lg">
            أكثر من {restaurantInfo.reviewsCount}+ تقييم
          </span>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-[#eee4d3] hover:border-[#d99b26] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d99b26]/30" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-[#1c1514]">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] text-neutral-400">
                    {rev.date}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                  <MapPin className="w-3 h-3 text-[#781016]" />
                  <span>{rev.location}</span>
                </div>

                <div className="mt-2 text-[10px] font-bold text-[#a97314] bg-[#faf6f0] px-2 py-1 rounded-lg truncate">
                  الطلب المفضل: {rev.favoriteDish}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
