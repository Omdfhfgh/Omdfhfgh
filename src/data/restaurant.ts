export interface RestaurantInfo {
  name: string;
  nameEn: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  description: string;
  phones: string[];
  displayPhones: string[];
  whatsapp: string;
  whatsappDisplay: string;
  facebookUrl: string;
  address: string;
  city: string;
  governorate: string;
  landmark: string;
  fullAddress: string;
  googleMapsUrl: string;
  googleRating: number;
  reviewsCount: number;
  openingHours: {
    days: string;
    hours: string;
    note: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  logo: string;
  mascot: string;
}

export const restaurantInfo: RestaurantInfo = {
  name: "مطعم العشايشي للمشويات والبروست",
  nameEn: "Al Ashishi Restaurant for Grills & Broast",
  shortName: "العشايشي",
  tagline: "أصل المشويات على الفحم وسر قرمشة البروست",
  subTagline: "طعم بلدي أصيل وتتبيلة متوارثة تشرّفك في كل عزومة",
  description:
    "يقدم مطعم العشايشي أرقى تشكيلة من المشويات البلدي الطازجة المطهوة على الفحم الطبيعي، إلى جانب خلطة البروست الذهبي المقرمش بالسرية التامة، وصواني العزومات الكبرى في الواسطي وبني سويف.",
  phones: ["01286865908", "01286374749"],
  displayPhones: ["012 868 65 908", "012 863 74 749"],
  whatsapp: "201286865908",
  whatsappDisplay: "01286865908",
  facebookUrl: "https://www.facebook.com/restaurantelAshishi/",
  address: "الواسطي - شارع طراد النيل - بجوار الإدارة التعليمية",
  city: "الواسطي",
  governorate: "بني سويف",
  landmark: "بجوار الإدارة التعليمية - طراد النيل",
  fullAddress: "جمهورية مصر العربية، محافظة بني سويف، مركز الواسطي، شارع طراد النيل، بجوار الإدارة التعليمية",
  googleMapsUrl: "https://maps.google.com/?q=مطعم+العشايشي+للمشويات+والبروست+الواسطي",
  googleRating: 4.8,
  reviewsCount: 320,
  openingHours: {
    days: "طوال أيام الأسبوع",
    hours: "11:00 صباحاً - 02:00 بعد منتصف الليل",
    note: "خدمة التوصيل السريع متاحة حتى آخر وقت العمل",
  },
  features: [
    {
      title: "لحوم بلدية طازجة 100%",
      description: "نختار أجود أنواع الذبائح البلدية يومياً لضمان أعلى جودة ونكهة لا تُنسى.",
      icon: "ShieldCheck",
    },
    {
      title: "شواء على الفحم الطبيعي",
      description: "نار هادئة وفحم طبيعي أصيل يعطي نكهة الشواء المصرية التي يعشقها الجميع.",
      icon: "Flame",
    },
    {
      title: "بروست ذهبي فائق القرمشة",
      description: "تتبيلة سرية مميزة وقرمشة تدوم حتى آخر قطمة مع لحم دجاج طري ومتبل بالكامل.",
      icon: "Sparkles",
    },
    {
      title: "صواني العزومات الملكية",
      description: "صواني ضخمة مشكلة تشرفك أمام ضيوفك في كل مناسبة وعزومة عائلية.",
      icon: "Crown",
    },
    {
      title: "توصيل سريع وسخن",
      description: "أسطول دليفري جاهز لتوصيل طلبك سخن كأنه لسه طالع من على الشواية لجميع أنحاء الواسطي.",
      icon: "Truck",
    },
  ],
  stats: [
    { label: "سنوات من الخبرة والجودة", value: "+15", sublabel: "ثقة متوارثة" },
    { label: "زبون سعيد ومستمر", value: "+50k", sublabel: "أهل الواسطي" },
    { label: "تقييم الجودة والمذاق", value: "4.8★", sublabel: "تقييمات موثقة" },
    { label: "طازج يومياً", value: "100%", sublabel: "بلا مجمدات" },
  ],
  logo: "/images/logo_official.png",
  mascot: "/images/mascot_banner.png",
};
