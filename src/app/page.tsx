
"use client";

import { PromoBanner } from "@/components/PromoBanner";
import { Marketplace } from "@/components/Marketplace";
import { PrasadBooking } from "@/components/PrasadBooking";
import { TrustSection } from "@/components/TrustSection";
import { TrackingScreen } from "@/components/TrackingScreen";
import { MithasExpress } from "@/components/MithasExpress";
import { useMithas } from "@/lib/store";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MessageCircle, MapPin } from "lucide-react";

const CATEGORIES = [
  { name: 'Laddus', image: 'https://images.unsplash.com/photo-1605698801201-fe6d68b6b1cb?q=80&w=120&h=120&fit=crop' },
  { name: 'Kaju Katli', image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=120&h=120&fit=crop' },
  { name: 'Cakes & Pastries', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=120&h=120&fit=crop' },
  { name: 'Gulab Jamun', image: 'https://images.unsplash.com/photo-1542444459-bb3d94013e7f?q=80&w=120&h=120&fit=crop' },
  { name: 'Rasgulla', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=120&h=120&fit=crop' },
  { name: 'Jalebi', image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=120&h=120&fit=crop' },
  { name: 'Gift Hampers', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=120&h=120&fit=crop' },
];

export function DiyaBullet() {
  return <span className="text-xl mx-2">🪔</span>;
}

export default function Home() {
  const { activeOrder, currentZone } = useMithas();

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      <PromoBanner />

      {/* Unserviceable Zone Banner */}
      {currentZone !== 'Aliganj' && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
          <div className="bg-brand-maroon p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 animate-in slide-in-from-top-4 duration-500 shadow-xl border-b-4 border-brand-gold">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Currently serving Aliganj only.</p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Want delivery in {currentZone}?</p>
              </div>
            </div>
            <a 
              href="https://wa.me/918445794015" 
              className="bg-brand-gold text-white px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp Support
            </a>
          </div>
        </div>
      )}

      {/* Popular Categories Track */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex items-center justify-center mb-10">
          <DiyaBullet />
          <h3 className="text-sm font-bold text-brand-maroon uppercase tracking-[0.3em]">
            Popular Categories
          </h3>
          <DiyaBullet />
        </div>
        
        <div className="flex items-center justify-center gap-6 md:gap-14 overflow-x-auto no-scrollbar pb-4 px-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-4 group cursor-pointer shrink-0">
              <div className={cn(
                "w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-300 relative bg-brand-maroon/5",
                cat.name === 'Cakes & Pastries' 
                  ? "border-brand-gold shadow-[0_0_15px_rgba(232,155,30,0.3)]" 
                  : "group-hover:border-brand-gold"
              )}>
                {cat.image ? (
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    width={112} 
                    height={112} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-maroon/20">
                    <span className="text-2xl">🍬</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-colors" />
              </div>
              <span className={cn(
                "text-[10px] font-bold uppercase tracking-widest transition-colors",
                cat.name === 'Cakes & Pastries' ? "text-brand-gold" : "text-brand-maroon/80 group-hover:text-brand-gold"
              )}>
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <MithasExpress />

      <Marketplace />
