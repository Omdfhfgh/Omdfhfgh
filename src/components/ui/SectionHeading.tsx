import React from "react";
import { Flame } from "lucide-react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-2.5 mb-10 md:mb-14 ${
        center ? "items-center text-center" : "items-start text-start"
      }`}
    >
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide border ${
            light
              ? "bg-white/10 text-[#f5bc43] border-[#f5bc43]/30"
              : "bg-[#781016]/10 text-[#781016] border-[#781016]/20"
          }`}
        >
          <Flame className="w-3.5 h-3.5 fill-current" />
          <span>{badge}</span>
        </span>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-snug ${
          light ? "text-white" : "text-[#1c1514]"
        }`}
      >
        {title}
      </h2>

      {/* Decorative Gold Accent Bar */}
      <div className="flex items-center gap-2 my-1">
        <span className="w-8 h-0.5 bg-[#d99b26]/50 rounded-full" />
        <span className="w-2 h-2 rotate-45 bg-[#d99b26]" />
        <span className="w-8 h-0.5 bg-[#d99b26]/50 rounded-full" />
      </div>

      {subtitle && (
        <p
          className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
            light ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
