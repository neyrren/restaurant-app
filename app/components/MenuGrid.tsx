'use client';

import Image from 'next/image';
import { MenuItem } from '../types';

interface MenuGridProps {
  menuItems: MenuItem[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuGrid({ 
  menuItems, 
  selectedCategory, 
  onCategoryChange, 
  onAddToCart 
}: MenuGridProps) {
  const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="sticky top-[76px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">

                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />

                {!item.available && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Sold Out
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <span className="text-emerald-600 font-bold text-lg">${item.price}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 grow">
                  {item.description}
                </p>

                <button
                  onClick={() => onAddToCart(item)}
                  disabled={!item.available}
                  className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    item.available
                      ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white hover:shadow-md'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {item.available ? 'Add to Cart' : 'Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
