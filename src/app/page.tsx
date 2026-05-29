"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Search, ShoppingCart, User, AlertCircle } from "lucide-react";

// Fixed categories data to prevent any re-rendering glitch loops
const DUMMY_CATEGORIES = [
  { id: "1", name: "Popular Sweets", image: "/assets/products/premium-sweets.png" },
  { id: "2", name: "Cakes & Pastries", image: "/assets/products/cakes-category.png" },
  { id: "3", name: "Malai Gilori", image: "/assets/products/malai-gilori.png" },
  { id: "4", name: "Gulab Jamun", image: "/assets/products/gulab-jamun.png" },
  { id: "5", name: "Jalebi", image: "/assets/products/jalebi.png" },
];

export default function HomePage() {
  const [isGlitchStable, setIsGlitchStable] = useState(true);

  // Safeguard hook to explicitly lock component thread state from flickering
  useEffect(() => {
    setIsGlitchStable(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#4A0E17] font-sans relative overflow-x-hidden">
      
      {/* 🧿 NAZAR BATTU SWING ELEMENT */}
      <div className="absolute top-0 right-4 z-50 pointer-events-none animate-bounce" style={{ animationDuration: '3s' }}>
        <Image 
          src="/logo/nazar-battu.png" 
          alt="Nazar Battu" 
          width={45} 
          height={45} 
          className="drop-shadow-md"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      {/* 🏛️ HEADER COMPONENT */}
      <header className="sticky top-0 bg-white border-b border-gold/20 px-4 py-3 flex items-center justify-between shadow-sm z-40">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border border-amber-400">
            M
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wide text-[#800020] leading-none">Mithaas</h1>
            <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Lucknow</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-[#800020]">
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
          <button className="bg-[#800020] text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-amber-400 flex items-center space-x-1 shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </button>
        </div>
      </header>

      {/* 📐 NEW HERO BANNER COMPONENT (Adjusted for Width > Height) */}
      <section className="p-4 max-w-md mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-amber-100 bg-[#FAF4E8] aspect-[4/3] cursor-pointer">
          <Image
            src="/assets/banners/hero-thali-banner.png"
            alt="Mithaas Top Hero Banner"
            fill
            priority
            className="object-cover object-center"
            onError={(e) => {
              // Graceful fallback to avoid blank space if image is .jpg
              const img = e.currentTarget as HTMLImageElement;
              if (!img.src.endsWith('.jpg')) {
                img.src = "/assets/banners/hero-thali-banner.jpg";
              }
            }}
          />
        </div>
      </section>

      {/* 🍪 GLITCH-FREE POPULAR CATEGORIES (STABLE CIRCLES GRID) */}
      <section className="px-4 py-2 max-w-md mx-auto">
        <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-3 flex items-center space-x-1">
          <span>✨</span> <span>Popular Categories</span>
        </h3>
        
        {isGlitchStable ? (
          <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
            {DUMMY_CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center space-y-1.5 group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-amber-200 p-0.5 shadow-sm overflow-hidden relative flex items-center justify-center transition-transform active:scale-95">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full rounded-full"
                    onError={(e) => {
                      // Static background placeholder instead of flickering or crashing loop
                      e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'><rect width='64' height='64' fill='%23F5E6CC'/></svg>";
                    }}
                  />
                </div>
                <span className="text-[10px] font-bold text-center tracking-tight text-[#5C2C16] break-words w-16 leading-tight">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-xs text-amber-600 p-4 bg-amber-50 rounded-xl">
            <AlertCircle className="w-4 h-4" />
            <span>Loading safe catalog view...</span>
          </div>
        )}
      </section>

      {/* 📢 BOTTOM WHATSAPP SERVICE ROUTER SECTOR */}
      <section className="m-4 p-4 rounded-xl bg-gradient-to-br from-[#800020] to-[#4A0E17] text-white shadow-md border border-amber-400 max-w-md mx-auto">
        <h4 className="text-sm font-bold text-amber-300 mb-1">📍 Abhi Hum Aliganj Me Live Hain!</h4>
        <p className="text-[11px] text-amber-100 leading-relaxed mb-3">
          Agar aap Gomti Nagar, Indira Nagar ya Lucknow ke kisi aur area se hain aur hamari premium sweets order karna chahte hain, toh fikar mat kijiye!
        </p>
        <a 
          href="https://wa.me/91XXXXXXXXXX?text=Hi%20Mithaas%20I%20want%20to%20order"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-4 rounded-lg tracking-wide uppercase transition-all shadow-inner border border-emerald-400"
        >
          💬 WhatsApp Par Direct Order Karein
        </a>
      </section>

    </div>
  );
}
