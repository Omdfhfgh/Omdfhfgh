export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  tag: string;
  image: string;
  itemsIncluded: string[];
  servesCount: string;
  validUntil?: string;
  isPopular?: boolean;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "grand-royal-offer",
    title: "عرض العزومة الكبرى - صينية العشايشي الملكية",
    subtitle: "الصينية الأشهر في الواسطي بتوفير فوري 200 جنيه",
    description: "صينية مشويات عملاقة تكفي عزومة عائلية متكاملة لـ 6 إلى 8 أفراد، مليئة بالكباب والكفتة والطرب وفرخة فحم وأرز بسمتي وسلطات.",
    price: 1450,
    originalPrice: 1650,
    discountPercentage: 12,
    tag: "عرض العزومات",
    image: "/images/real_tray_feast.jpg",
    itemsIncluded: [
      "1 كجم كفتة بلدي مشوية على الفحم",
      "1/2 كجم كباب ضاني بلدي مشوي",
      "1/2 كجم طرب بلدي فاخر",
      "فرخة كاملة مشوية على شبكة الفحم",
      "سيرفيس أرز بسمتي بالخلطة والمكسرات والزبيب",
      "6 علب سلطات (طحينة + بابا غنوج + مخلل)",
      "عيش بلدي طازج يكفي العزومة",
      "زجاجة بيبسي عائلية 2 لتر مثلجة مجاناً",
    ],
    servesCount: "6 - 8 أفراد",
    validUntil: "متاح طوال الأسبوع",
    isPopular: true,
  },
  {
    id: "broast-mega-feast",
    title: "كومبو بروست اللمة (12 قطعة كرانشي)",
    subtitle: "قرمشة حتى آخر قطمة مع وجبة توفير كاملة",
    description: "12 قطعة بروست ذهبي مقرمش مع بطاطس فارم فريتس عائلية وخبز كايزر وكول سلو وثومية ومشروب لتر ونصف.",
    price: 490,
    originalPrice: 560,
    discountPercentage: 15,
    tag: "توفير العيلة",
    image: "/images/hero_broast.jpg",
    itemsIncluded: [
      "12 قطعة دجاج بروست مقرمش (حار أو عادي)",
      "علبة بطاطس فريتس عائلية كبيرة",
      "4 قطع خبز كايزر طازج",
      "3 علب سلطة كول سلو بالمايونيز",
      "3 علب ثومية كريمية مميزة",
      "زجاجة مشروب غازي 1.5 لتر",
    ],
    servesCount: "4 - 5 أفراد",
    validUntil: "ساري لفترة محدودة",
    isPopular: true,
  },
  {
    id: "duo-grill-box",
    title: "عرض دويتو المشويات الفاخر",
    subtitle: "وجبة مشبعة ومتكاملة لفردين بسعر مميز",
    description: "نصف كجم كفتة مشوية على الفحم + نصف فرخة فحم ذهبية + طبقين أرز بسمتي بالمكسرات + 2 طحينة وعيش سخن.",
    price: 395,
    originalPrice: 460,
    discountPercentage: 14,
    tag: "عرض لشخصين",
    image: "/images/hero_grill_feast.jpg",
    itemsIncluded: [
      "نصف كجم كفتة بلدي على الفحم",
      "نصف دجاجة مشوية على الفحم",
      "طبقين أرز بسمتي ذهبي بالخلطة",
      "2 سلطة طحينة سمسم",
      "خبز بلدي سخن",
      "2 كانز بيبسي مثلج",
    ],
    servesCount: "فردين",
    validUntil: "متاح يومياً",
    isPopular: false,
  },
  {
    id: "hawawshi-lovers-bundle",
    title: "باندل عشاق الحواوشي على الفحم",
    subtitle: "4 أرغفة حواوشي بلدي مخصوص بسعر 3 فقط!",
    description: "4 أرغفة حواوشي بلدي غنية باللحم المفروم والجبنة الموتزاريلا المشوية على الفحم، مع بطاطس مقلية ومخلل وطحينة.",
    price: 240,
    originalPrice: 300,
    discountPercentage: 20,
    tag: "خصم 20%",
    image: "/images/hawawshi.jpg",
    itemsIncluded: [
      "4 أرغفة حواوشي بلدي فحم بالجبنة",
      "طبق بطاطس فارم فريتس مقلية",
      "2 علبة طحينة بلدي مخصوصة",
      "مخلل بلدي مشكل",
    ],
    servesCount: "2 - 4 أفراد",
    validUntil: "العرض الأسبوعي",
    isPopular: false,
  },
];
