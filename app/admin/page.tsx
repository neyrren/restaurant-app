'use client';

import Header from '../components/Header';
import AdminPanel from '../components/AdminPanel';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { menuData } from '../data/menuData';
import { useState } from 'react';
import { MenuItem } from '../types';

export default function AdminPage() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);

  // Redirect if not admin
  useEffect(() => {
    const r = localStorage.getItem("role");
    if (r !== "admin") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header role="admin" cartItemsCount={0} onCartClick={() => {}} />
      <AdminPanel menuItems={menuItems} setMenuItems={setMenuItems} />
      <Footer />
    </div>
  );
}
