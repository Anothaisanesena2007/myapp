'use client';

import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  User, 
  ShoppingCart, 
  ChevronLeft, 
  Search as SearchIcon, 
  ShoppingBag 
} from 'lucide-react';

export default function MobileAppPage() {
  const [activeTab, setActiveTab] = useState<'home' | 'categories' | 'detail' | 'checkout'>('home');
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('M');

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6 text-white">
        <h1 className="text-xl font-bold mb-1">Cloth Store Mobile App Mockup</h1>
        <p className="text-sm text-slate-400">Next.js App Router & Tailwind CSS</p>
      </div>

      <div className="w-[380px] h-[760px] bg-gradient-to-b from-pink-100 via-purple-100 to-pink-200 rounded-[40px] shadow-2xl border-8 border-slate-800 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-b-xl z-30"></div>

        <div className="flex-1 overflow-y-auto pt-8 pb-16 px-4">
          {activeTab === 'home' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-xl font-bold text-slate-800">Home</h2>
                <div className="flex gap-3 text-slate-700">
                  <SearchIcon size={20} className="cursor-pointer" />
                  <ShoppingCart size={20} className="cursor-pointer" onClick={() => setActiveTab('checkout')} />
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-4 rounded-2xl shadow-sm flex items-center justify-between">
                <div>
                  <span className="bg-white/80 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">FEATURED</span>
                  <h3 className="text-lg font-extrabold text-purple-900 mt-1">COLLECTION</h3>
                </div>
                <div className="flex -space-x-4 opacity-90">
                  <div className="w-12 h-12 rounded-full bg-pink-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-purple-300 border-2 border-white"></div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-800 text-sm mb-2">Featured Collection</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: 'Pink T-shirt', price: '50.00', color: 'bg-pink-200' },
                    { name: 'Denim Jeans', price: '30.00', color: 'bg-blue-200' },
                    { name: 'Knitted Sweater', price: '50.00', color: 'bg-amber-100' },
                    { name: 'Black Shorts', price: '50.00', color: 'bg-slate-800 text-white' }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTab('detail')}
                      className="bg-white/70 backdrop-blur-sm p-3 rounded-2xl shadow-sm cursor-pointer hover:bg-white transition"
                    >
                      <div className={`w-full h-28 rounded-xl ${item.color} mb-2 flex items-center justify-center`}>
                        <ShoppingBag size={24} className="opacity-40" />
                      </div>
                      <p className="text-xs font-medium text-slate-800 truncate">{item.name}</p>
                      <p className="text-xs font-bold text-purple-700">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="space-y-3 mt-2">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-slate-800">Categories</h2>
                <div className="flex gap-3 text-slate-700">
                  <SearchIcon size={20} />
                  <ShoppingCart size={20} />
                </div>
              </div>

              {[
                { name: 'T-shirts', color: 'bg-pink-200' },
                { name: 'Jeans', color: 'bg-blue-200' },
                { name: 'Jackets', color: 'bg-purple-200' },
                { name: 'Comment', color: 'bg-rose-200' },
                { name: 'Chooters', color: 'bg-indigo-200' },
                { name: 'Shorts', color: 'bg-pink-200' }
              ].map((cat, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveTab('home')}
                  className={`flex items-center p-3 rounded-2xl shadow-sm ${cat.color} cursor-pointer hover:opacity-90 transition`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center mr-4">
                    <ShoppingBag size={20} className="text-slate-700" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{cat.name}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'detail' && (
            <div className="space-y-3 mt-2">
              <div className="flex items-center justify-between">
                <button onClick={() => setActiveTab('home')} className="p-1 rounded-full bg-white/60 text-slate-700">
                  <ChevronLeft size={20} />
                </button>
                <h2 className="text-base font-bold text-slate-800">Product Details</h2>
                <div className="w-6"></div>
              </div>

              <div className="w-full h-48 bg-purple-200 rounded-3xl flex items-center justify-center shadow-inner">
                <ShoppingBag size={48} className="text-purple-400" />
              </div>

              <div className="flex justify-between items-center">
                <h3 className="font-bold text-slate-800 text-base">Sample Jacket</h3>
                <span className="font-bold text-purple-700 text-base">$50.00</span>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-700 mb-1">Description</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Sample Jacket dollars sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-700 mb-1">Size Chart</h4>
                <p className="text-[10px] text-slate-500">• Sample T-shirt (M) - 20.00</p>
                <p className="text-[10px] text-slate-500">• Sample Jeans (L) - 30.00</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-700 mb-1">Size</h4>
                <div className="flex gap-2">
                  {(['S', 'M', 'L'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-xl font-bold text-xs transition ${
                        selectedSize === size 
                          ? 'bg-purple-700 text-white shadow-md' 
                          : 'bg-white/70 text-slate-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setActiveTab('checkout')}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-2xl shadow-lg transition text-xs tracking-wider"
              >
                Add to Cart
              </button>
            </div>
          )}

          {activeTab === 'checkout' && (
            <div className="space-y-4 mt-2">
              <div className="flex items-center justify-between">
                <button onClick={() => setActiveTab('detail')} className="p-1 rounded-full bg-white/60 text-slate-700">
                  <ChevronLeft size={20} />
                </button>
                <h2 className="text-base font-bold text-slate-800">Checkout</h2>
                <div className="w-6"></div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-700 mb-2">Summary</h4>
                <div className="space-y-2">
                  <div className="bg-white/70 p-2.5 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="w-10 h-10 bg-pink-200 rounded-xl"></div>
                    <div className="flex-1 ml-3">
                      <p className="text-xs font-medium text-slate-800">Sample Pink T-shirt</p>
                      <p className="text-[10px] text-slate-500">(M)</p>
                    </div>
                    <span className="text-xs font-bold text-slate-700">20.00</span>
                  </div>

                  <div className="bg-white/70 p-2.5 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="w-10 h-10 bg-blue-200 rounded-xl"></div>
                    <div className="flex-1 ml-3">
                      <p className="text-xs font-medium text-slate-800">Sample Denim Jeans</p>
                      <p className="text-[10px] text-slate-500">(L)</p>
                    </div>
                    <span className="text-xs font-bold text-slate-700">30.00</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center px-1 pt-1 border-t border-purple-200">
                <span className="text-xs font-bold text-slate-700">Subtotal:</span>
                <span className="text-sm font-extrabold text-purple-900">50.00</span>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-700 mb-1">Shipping Address</h4>
                <input 
                  type="text" 
                  placeholder="Shipping Address" 
                  className="w-full p-2.5 rounded-xl bg-white/80 border border-purple-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <button 
                onClick={() => alert('Order Placed Successfully!')}
                className="w-full py-3 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-2xl shadow-lg transition text-xs tracking-wider"
              >
                Place Order
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/90 backdrop-blur-md border-t border-purple-100 flex justify-around items-center px-2 z-20">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center ${activeTab === 'home' ? 'text-purple-700 font-bold' : 'text-slate-400'}`}
          >
            <Home size={20} />
            <span className="text-[10px]">Home</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('categories')}
            className={`flex flex-col items-center ${activeTab === 'categories' ? 'text-purple-700 font-bold' : 'text-slate-400'}`}
          >
            <Search size={20} />
            <span className="text-[10px]">Search</span>
          </button>

          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center text-slate-400`}
          >
            <User size={20} />
            <span className="text-[10px]">Profile</span>
          </button>

          <button 
            onClick={() => setActiveTab('checkout')}
            className={`flex flex-col items-center ${activeTab === 'checkout' || activeTab === 'detail' ? 'text-purple-700 font-bold' : 'text-slate-400'}`}
          >
            <ShoppingCart size={20} />
            <span className="text-[10px]">Cart</span>
          </button>
        </div>

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-800 rounded-full z-30"></div>
      </div>
    </div>
  );
}