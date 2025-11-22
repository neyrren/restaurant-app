'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { MenuItem, CartItem } from './types';
import { menuData } from './data/menuData';

export default function HomePage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Simulate user role: 'admin' or 'client'
  const [role] = useState<'admin' | 'client'>('client'); // Change to 'admin' to see admin features

  const addToCart = (item: MenuItem) => {
    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(
      cart
        .map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setShowCart(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header 
        cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setShowCart(true)}
        role={role} // Pass role if Header has admin features
      />
      <Hero />
      <MenuGrid 
        menuItems={menuItems}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={addToCart}
      />

      {/* Only show AdminPanel button if role is 'admin' */}
      {role === 'admin' && (
        <div className="fixed bottom-4 right-4">
          <AdminPanel menuItems={menuItems} setMenuItems={setMenuItems} />
        </div>
      )}

      <Footer />
      
      {showCart && (
        <Cart 
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
        />
      )}
    </div>
  );
}
