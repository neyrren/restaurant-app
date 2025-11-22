'use client';

import { useState } from 'react';
import Header from '../components/Header';
import AdminPanel from '../components/AdminPanel';
import Footer from '../components/Footer';
import { MenuItem } from '../types';
import { menuData } from '../data/menuData';

export default function AdminPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header cartItemsCount={0} onCartClick={() => {}} isAdmin />
      <AdminPanel menuItems={menuItems} setMenuItems={setMenuItems} />
      <Footer />
    </div>
  );
}