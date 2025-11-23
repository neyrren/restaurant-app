'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import AdminPanel from '../components/AdminPanel';
import Footer from '../components/Footer';
import { MenuItem } from '../types';
import { menuData } from '../data/menuData';

export default function AdminPage() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null); // null = loading
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);

  useEffect(() => {
    const checkRole = () => {
      const role = localStorage.getItem("role");
      if (role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
        router.push("/login");
      }
    };

    checkRole();
  }, [router]);

  if (isAdmin === null) {
    return null; // or loading spinner
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAdmin={true} />
      <AdminPanel menuItems={menuItems} setMenuItems={setMenuItems} />
      <Footer />
    </div>
  );
}
