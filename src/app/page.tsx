here
"use client";

import { PromoBanner } from "@/components/PromoBanner";
import { Marketplace } from "@/components/Marketplace";
import { PrasadBooking } from "@/components/PrasadBooking";
import { TrustSection } from "@/components/TrustSection";
import { TrackingScreen } from "@/components/TrackingScreen";
import { useMithas } from "@/lib/store";
import Image from "next/image";

const CATEGORIES = [
  { name: 'Laddus', image: 'https://images.unsplash.com/photo-1605698801201-fe6d68b6b1cb?q=80&w=120&h=120&fit=crop' },
  { name: 'Kaju Katli', image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=120&h=120&fit=crop' },
  { name: 'Gulab Jamun', image: 'https://images.unsplash.com/photo-1542444459-bb3d94013e7f?q=80&w=120&h=120&fit=crop' },
  { name: 'Rasgulla', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=120&h=120&fit=crop' },
  { name: 'Jalebi', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=120&h=120&fit=crop' },
  { name: 'Gift Hampers', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=120&h=120&fit=crop' },
];

export default function Home() {
  const { activeOrder } = useMithas();

  return (
    <div className="min-h-screen pb-20 selection:bg-brand-gold selection:text-white">
      <PromoBanner />

      {/* Popular Categories Track */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <h3 className="text-xl font-bold text-brand-maroon mb-8 text-center uppercase tracking-widest">
          Popular Categories
        </h3>
        <div className="flex items-center justify-center gap-6 md:gap-12 overflow-x-auto no-scrollbar pb-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-3 group cursor-pointer shrink-0">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-brand-gold transition-all duration-300">
                <Image src={cat.image} alt={cat.name} width={112} height={112} className="object-cover w-full h-full group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-bold text-brand-maroon/80 group-hover:text-brand-gold transition-colors">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <Marketplace />
      
      <PrasadBooking />
      
      <TrustSection />

      {activeOrder && <TrackingScreen />}
    </div>
  );
}
