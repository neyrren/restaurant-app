'use client';

import Link from 'next/link';
import { ShoppingCart, Settings } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  role?: 'admin' | 'client';
}

export default function Header({
  cartItemsCount,
  onCartClick,
  role = 'client',
}: HeaderProps) {
  // Initialize role directly, no useEffect needed
  const [userRole] = useState(
    typeof window !== "undefined" ? localStorage.getItem("role") || role : role
  );

  const isAdmin = userRole === "admin";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">FreshBite</h1>
            <p className="text-sm text-gray-600">Fresh & Delicious</p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <Link href="/about" className="hover:text-emerald-600">About</Link>
          <Link href="/contact" className="hover:text-emerald-600">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Admin button */}
          {isAdmin && (
            <Link
              href="/admin"
              className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200"
            >
              <Settings size={22} />
            </Link>
          )}

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="relative bg-linear-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-xl"
          >
            <ShoppingCart size={22} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Logout */}
          {isAdmin && (
            <button
              onClick={() => {
                localStorage.removeItem("role");
                window.location.href = "/login";
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
