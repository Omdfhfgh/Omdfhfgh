import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { restaurantInfo } from "@/data/restaurant";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elashishi.com"),
  title: `${restaurantInfo.name} | ${restaurantInfo.city} - أصل المشويات على الفحم والبروست`,
  description:
    "الموقع الرسمي لمطعم العشايشي للمشويات والبروست في الواسطي، طراد النيل. كباب وكفتة وطرب وفراخ مشوية على الفحم، دجاج بروست مقرمش، وصواني العزومات الكبرى. للطلب والدليفري: 01286865908 - 01286374749.",
  keywords: [
    "مطعم العشايشي",
    "مشويات العشايشي",
    "بروست العشايشي",
    "مطاعم الواسطي",
    "مشويات الواسطي",
    "كفتة على الفحم",
    "كباب ضاني",
    "طرب بلدي",
    "بروست مقرمش",
    "صواني عزومات",
    "دليفري الواسطي",
  ],
  authors: [{ name: restaurantInfo.name }],
  openGraph: {
    title: restaurantInfo.name,
    description: restaurantInfo.description,
    url: "https://el-ashishi.com",
    siteName: restaurantInfo.name,
    images: [
      {
        url: "/images/real_tray_feast.jpg",
        width: 1200,
        height: 630,
        alt: restaurantInfo.name,
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: "/images/logo_official.png",
    apple: "/images/logo_official.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#faf6f0] text-[#1c1514] font-sans antialiased selection:bg-[#781016] selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <MobileActionBar />
        </CartProvider>
      </body>
    </html>
  );
}
