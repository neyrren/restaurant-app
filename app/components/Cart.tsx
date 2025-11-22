'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CartItem } from '../types';
import { ShoppingCart, X, Minus, Plus, Check } from 'lucide-react';

interface CartProps {
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

export default function Cart({ 
  cart, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}: CartProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClearCart();
    }, 3000);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl flex flex-col">
          <div className="bg-linear-to-r from-emerald-500 to-teal-500 text-white p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-lg transition">
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="grow overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-gray-400 mt-20">
                <ShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex gap-4">
                      
                      <div className="relative w-20 h-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>

                      <div className="grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <button 
                            onClick={() => onRemoveItem(item.id)} 
                            className="text-red-500 hover:bg-red-50 p-1 rounded"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        <p className="text-emerald-600 font-bold mb-3">${item.price}</p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-6 bg-white">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total</span>
                <span className="text-emerald-600">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Success Modal */}
      {orderPlaced && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
            <div className="bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Check size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
            <p className="text-gray-600">Your order is being prepared</p>
          </div>
        </div>
      )}
    </>
  );
}
