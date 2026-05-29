"use client";

import React, { useState } from "react";
import { 
  Users, ShoppingBag, Globe, MapPin, 
  X, CheckCircle, ShieldAlert, PhoneCall, FileText 
} from "lucide-react";

// Mock Data representing Papa, Mummy & Vendor Logistical flows
const INITIAL_ORDERS = [
  { id: "MTH-9081", customer: "Aman Sharma", phone: "9876543210", address: "Sector Q, Aliganj, Lucknow", items: "2kg Premium Sweets", total: 1540, method: "COD", status: "Active" },
  { id: "MTH-9082", customer: "Priya Verma", phone: "9140223344", address: "Near Chatori Gali, Gomti Nagar", items: "1kg Malai Gilori", total: 1045, method: "Prepaid", status: "Active" },
  { id: "MTH-9083", customer: "Rajesh Kumar", phone: "9935112233", address: "Chandrasekhar Azad Park, Indiranagar", items: "500g Jalebi + 1kg Rasgulla", total: 850, method: "COD", status: "Active" }
];

const RUSH_DATA = {
  global: 412,
  indiaStates: [
    { state: "Uttar Pradesh", hits: 280 },
    { state: "Delhi NCR", hits: 85 },
    { state: "Maharashtra", hits: 47 }
  ],
  lucknowSectors: [
    { sector: "Aliganj (Active)", hits: 190, status: "Serving" },
    { sector: "Gomti Nagar", hits: 65, status: "Unserviceable" },
    { sector: "Indira Nagar", hits: 25, status: "Unserviceable" }
  ]
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<typeof INITIAL_ORDERS[0] | null>(null);
  const [activeTab, setActiveTab] = useState<"orders" | "rush" | "vendor">("orders");
  
  // Vendor Form States
  const [isAgreed, setIsAgreed] = useState(false);
  const [vendorFeePaid, setVendorFeePaid] = useState(false);

  const handleForceCancel = (orderId: string, isPrepaid: boolean) => {
    alert(`Order ${orderId} Force Cancelled by Admin. Halwai gets 20% packaging compensation. ${isPrepaid ? "80% routed to Mithas Profit Wallet." : "0% product payout."}`);
    setOrders(orders.filter(o => o.id !== orderId));
    setSelectedOrder(null);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#4A0E17] font-sans">
      {/* Navbar */}
      <div className="bg-[#800020] p-4 text-white flex justify-between items-center border-b-2 border-amber-400 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold tracking-wide">Mithaas Control Room</h1>
          <p className="text-[10px] text-amber-300 font-mono">SECURE ADMIN INTERFACE</p>
        </div>
        <div className="flex space-x-2 text-xs">
          <button onClick={() => setActiveTab("orders")} className={`px-3 py-1 rounded-full font-bold ${activeTab === "orders" ? "bg-amber-400 text-[#800020]" : "bg-black/20"}`}>Orders</button>
          <button onClick={() => setActiveTab("rush")} className={`px-3 py-1 rounded-full font-bold ${activeTab === "rush" ? "bg-amber-400 text-[#800020]" : "bg-black/20"}`}>Mummy's Radar</button>
          <button onClick={() => setActiveTab("vendor")} className={`px-3 py-1 rounded-full font-bold ${activeTab === "vendor" ? "bg-amber-400 text-[#800020]" : "bg-black/20"}`}>Halwai Policy</button>
        </div>
      </div>

      {/* 1. ORDERS MONITOR SYSTEM */}
      {activeTab === "orders" && (
        <div className="p-4 max-w-md mx-auto space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center space-x-1">
            <ShoppingBag className="w-3.5 h-3.5" /> <span>Live Incoming Pipeline</span>
          </h2>
          
          <div className="space-y-2">
            {orders.map((order) => (
              <div 
                key={order.id} 
                onClick={() => setSelectedOrder(order)}
                className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm flex justify-between items-center cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-amber-600">{order.id}</span>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${order.method === "COD" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}>{order.method}</span>
                  </div>
                  <h3 className="text-sm font-bold mt-1 text-[#800020]">{order.customer}</h3>
                  <p className="text-[11px] text-gray-500 truncate w-56">{order.address}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-[#800020]">₹{order.total}</span>
                  <p className="text-[9px] font-bold text-emerald-600">Tap to Details</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DYNAMIC DETAILS MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-4 space-y-4 shadow-xl border-t-4 border-amber-400 animate-slide-up">
            <div className="flex justify-between items-start border-b pb-2">
              <div>
                <span className="text-xs font-mono text-amber-600 font-bold">{selectedOrder.id} Details</span>
                <h2 className="text-base font-black text-[#800020]">{selectedOrder.customer}</h2>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-1 bg-gray-100 rounded-full"><X className="w-5 h-5 text-gray-500" /></button>
            </div>

            <div className="text-xs space-y-2 font-medium">
              <p>📞 <span className="font-bold">Phone Number:</span> {selectedOrder.phone}</p>
              <p>📍 <span className="font-bold">Address:</span> {selectedOrder.address}</p>
              <p>🛒 <span className="font-bold">Items Ordered:</span> {selectedOrder.items}</p>
              <p>💳 <span className="font-bold">Payment Mode:</span> {selectedOrder.method}</p>
            </div>

            {/* OTP Status Badge inside Modal */}
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
              {selectedOrder.method === "Prepaid" ? (
                <div className="text-emerald-700 font-bold flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  <span>🔒 PREPAID ORDER: Safe OTP auto-sent to customer phone.</span>
                </div>
              ) : (
                <div className="text-blue-700 font-bold flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  <span>💵 COD ORDER: No OTP required. Collect Exact Cash.</span>
                </div>
              )}
            </div>

            {/* Support Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href={`tel:${selectedOrder.phone}`} className="flex items-center justify-center space-x-1 bg-amber-500 text-white font-bold text-xs py-2 rounded-lg border border-amber-400">
                <PhoneCall className="w-3.5 h-3.5" /> <span>Call Support</span>
              </a>
              <button 
                onClick={() => handleForceCancel(selectedOrder.id, selectedOrder.method === "Prepaid")}
                className="flex items-center justify-center space-x-1 bg-red-600 text-white font-bold text-xs py-2 rounded-lg shadow-sm"
              >
                <X className="w-3.5 h-3.5" /> <span>Admin Force Cancel</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. GLOBAL & REGIONAL RUSH ANALYTICS (MUMMY'S RADAR) */}
      {activeTab === "rush" && (
        <div className="p-4 max-w-md mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5" /> <span>Mummy's Live Traffic Map</span>
          </h2>

          {/* Global Counter */}
          <div className="bg-gradient-to-br from-[#800020] to-[#4A0E17] text-white p-4 rounded-xl shadow-md text-center border border-amber-400">
            <span className="text-[10px] tracking-widest text-amber-300 uppercase font-black">Total Global Hits</span>
            <h3 className="text-3xl font-black mt-1 text-amber-400">{RUSH_DATA.global}</h3>
          </div>

          {/* India Regional Stats */}
          <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-2 shadow-sm">
            <h4 className="text-xs font-bold text-[#800020] border-b pb-1">🇮🇳 India State Traffic</h4>
            {RUSH_DATA.indiaStates.map((st, i) => (
              <div key={i} className="flex justify-between items-center text-xs">
                <span className="font-medium">{st.state}</span>
                <span className="font-bold bg-amber-50 px-2 py-0.5 rounded text-amber-800">{st.hits} rush hits</span>
              </div>
            ))}
          </div>

          {/* Micro-Local Sectors (Lucknow) */}
          <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-2 shadow-sm">
            <h4 className="text-xs font-bold text-[#800020] border-b pb-1">📍 Lucknow Micro-Local Rush</h4>
            {RUSH_DATA.lucknowSectors.map((sec, i) => (
              <div key={i} className="space-y-1 py-1 border-b last:border-0 border-dashed border-gray-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-[#4A0E17]">{sec.sector}</span>
                  <span className="font-black text-amber-600">{sec.hits} hits</span>
                </div>
                {sec.status === "Unserviceable" && (
                  <div className="bg-red-50 text-[10px] text-red-700 font-bold p-1.5 rounded border border-red-100">
                    📢 Automation Triggered: Out of zone! Banner linked to WhatsApp support active for this sector.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. VENDOR ENTRY FEES & MANDATORY POLICY CONTRACT */}
      {activeTab === "vendor" && (
        <div className="p-4 max-w-md mx-auto space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 flex items-center space-x-1">
            <FileText className="w-3.5 h-3.5" /> <span>Halwai Agreement Wizard</span>
          </h2>

          <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-4 shadow-sm">
            <div className="border-b pb-2">
              <h3 className="text-sm font-bold text-[#800020]">Step 1 & 2: Rules & Documents Upload</h3>
              <p className="text-[10px] text-gray-500">Scroll to read the 20% flat compensation policy</p>
            </div>

            {/* Scrollable contract viewport */}
            <div className="h-32 overflow-y-scroll p-2 bg-amber-50/50 rounded-lg text-[11px] leading-relaxed text-gray-700 border font-medium space-y-2">
              <p className="font-bold text-[#800020]">MITHAS VENDOR POLICIES & TERMS V1.2</p>
              <p>1. Under ALL cancellation instances (including both Prepaid online orders or Cash on Delivery orders), the entire inventory item must be returned safely and un-tampered to the vendor counter.</p>
              <p>2. Upon successful physical counter verification, the baseline item payout evaluated is exactly 0%. The platform settles a constant 20% Compensatory Packaging & Effort Fee directly to the vendor.</p>
              <p>3. Platform takes the remainder of forfeited deposits as pure liquid architecture operational fees.</p>
            </div>

            <label className="flex items-center space-x-2 pt-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={isAgreed} 
                onChange={(e) => setIsAgreed(e.target.checked)} 
                className="w-4 h-4 accent-[#800020]"
              />
              <span className="text-xs font-bold text-[#4A0E17]">I Agree to all terms & policies</span>
            </label>

            {/* Step 3: Entry Fees Layer */}
            <div className="border-t pt-3 space-y-2">
              <h4 className="text-xs font-bold text-[#800020]">Step 3: Platform Security Entry Fee</h4>
              <div className="bg-amber-50 p-3 rounded-lg flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-[#4A0E17]">Baseline Onboarding Fee</span>
                  <p className="text-[9px] text-gray-500">Will scale upwards as scale expands</p>
                </div>
                <span className="text-sm font-black text-[#800020]">₹1000</span>
              </div>
              
              <button
                disabled={!isAgreed}
                onClick={() => {
                  setVendorFeePaid(true);
                  alert("₹1000 Onboarding Fee Processed Successfully! Vendor Document Flag updated to SUBMITTED_AND_VERIFIED.");
                }}
                className={`w-full py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all border ${
                  isAgreed 
                    ? "bg-[#800020] text-white border-amber-400 active:scale-95" 
                    : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                }`}
              >
                {vendorFeePaid ? "✓ Fee Paid & Form Submitted" : "Pay ₹1000 & Submit Documents"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
