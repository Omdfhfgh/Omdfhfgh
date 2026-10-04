export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "grills" | "broast" | "trays" | "kitchen";
  categoryLabel: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "صينية العشايشي الملكية باللحم والكفتة",
    category: "trays",
    categoryLabel: "صواني العزومات",
    image: "/images/real_tray_feast.jpg",
    description: "صينية العزومات الضخمة كما تقدم للزبائن في صالة المطعم ولخدمة التوصيل.",
  },
  {
    id: "gal-2",
    title: "شواء الكفتة البلدي على الفحم الحار",
    category: "grills",
    categoryLabel: "مشويات الفحم",
    image: "/images/kofta_charcoal.jpg",
    description: "لحظات شواء الكفتة البلدي على جمر الفحم الطبيعي بالريحة التي تملأ المكان.",
  },
  {
    id: "gal-3",
    title: "بروست العشايشي فائق القرمشة",
    category: "broast",
    categoryLabel: "البروست المقرمش",
    image: "/images/hero_broast.jpg",
    description: "قطع الدجاج المقرمش الذهبي باللون الشهي والقرمشة التي تدوم حتى آخر قضمة.",
  },
  {
    id: "gal-4",
    title: "كباب ولحم ضاني على السيخ",
    category: "grills",
    categoryLabel: "مشويات الفحم",
    image: "/images/kebab_lamb.jpg",
    description: "قطع كباب اللحم البلدي المشوية بعناية فائقة وتتبيلة متوارثة.",
  },
  {
    id: "gal-5",
    title: "شيف المشويات أمام شواية الفحم",
    category: "kitchen",
    categoryLabel: "كواليس المطبخ",
    image: "/images/chef_fire.jpg",
    description: "مهارة شيفات مطعم العشايشي في ضبط درجة حرارة الجمر لتسوية مثالية.",
  },
  {
    id: "gal-6",
    title: "صينية ميكس السعادة مشويات وبروست",
    category: "trays",
    categoryLabel: "صواني العزومات",
    image: "/images/royal_tray_hd.jpg",
    description: "تشكيلة منوعة تجمع بين طراوة المشويات وقرمشة البروست الشهية.",
  },
  {
    id: "gal-7",
    title: "شيش طاووق بتتبيلة الأعشاب والزبادي",
    category: "grills",
    categoryLabel: "مشويات الفحم",
    image: "/images/shish_tawook.jpg",
    description: "أسياخ الدجاج المتبلة مع الفلفل المشوي والطماطم الشهية.",
  },
  {
    id: "gal-8",
    title: "وجبة استربس الدجاج الذهبي",
    category: "broast",
    categoryLabel: "البروست المقرمش",
    image: "/images/chicken_strips.jpg",
    description: "أصابع دجاج فيليه طازجة مقرمشة بدون عظم مع صوص الثومية والبطاطس.",
  },
  {
    id: "gal-9",
    title: "صالة المطعم واستقبال العائلات",
    category: "kitchen",
    categoryLabel: "أجواء المطعم",
    image: "/images/restaurant_hall.jpg",
    description: "أجواء راقية ومريحة تناسب العائلات والأصدقاء في قلب الواسطي.",
  },
];
