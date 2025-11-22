'use client';

import Link from 'next/link';
import { ShoppingCart, Settings } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  role?: 'admin' | 'client'; // Optional role prop
}

export default function Header({ cartItemsCount, onCartClick, role = 'client' }: HeaderProps) {
  const isAdmin = role === 'admin';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">FreshBite</h1>
              <p className="text-sm text-gray-600">Fresh & Delicious</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 font-medium transition">
              Contact
            </Link>
          </nav>

          <div className="flex gap-3 items-center">
            {/* Only show admin link if role is admin */}
            {isAdmin && (
              <Link
                href="/admin"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-xl transition-all duration-300"
              >
                <Settings size={22} />
              </Link>
            )}

            <button
              onClick={onCartClick}
              className="relative bg-linear-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <ShoppingCart size={22} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
