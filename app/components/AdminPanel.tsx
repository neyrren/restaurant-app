'use client';

import { useState } from 'react';
import { MenuItem } from '../types';
import { Edit, Trash2, X } from 'lucide-react';

interface AdminPanelProps {
  menuItems: MenuItem[];
  setMenuItems: (items: MenuItem[]) => void;
}

export default function AdminPanel({ menuItems, setMenuItems }: AdminPanelProps) {
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    category: 'Mains',
    price: 0,
    description: '',
    image: '',
    available: true
  });

  const addNewItem = () => {
    if (newItem.name && newItem.price) {
      const item: MenuItem = {
        id: Date.now(),
        name: newItem.name,
        category: newItem.category || 'Mains',
        price: newItem.price,
        description: newItem.description || '',
        image: newItem.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        available: newItem.available !== undefined ? newItem.available : true
      };
      setMenuItems([...menuItems, item]);
      setNewItem({ name: '', category: 'Mains', price: 0, description: '', image: '', available: true });
    }
  };

  const deleteItem = (id: number) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const toggleAvailability = (id: number) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, available: !item.available } : item
    ));
  };

  const startEdit = (item: MenuItem) => {
    setEditingItem({ ...item });
  };

  const saveEdit = () => {
    if (editingItem) {
      setMenuItems(menuItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ));
      setEditingItem(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

      {/* Add New Item */}
      <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8 border border-emerald-200">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Add New Item</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Item Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
          />
          <select
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
          >
            <option value="Starters">Starters</option>
            <option value="Mains">Mains</option>
            <option value="Desserts">Desserts</option>
            <option value="Drinks">Drinks</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            value={newItem.price || ''}
            onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
          />
          <textarea
            placeholder="Description"
            value={newItem.description}
            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none md:col-span-2"
            rows={2}
          />
        </div>
        <button
          onClick={addNewItem}
          className="mt-4 w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Add Item
        </button>
      </div>

      {/* Edit Items */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Manage Menu Items</h3>
        <div className="space-y-4">
          {menuItems.map(item => (
            <div key={item.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              {editingItem?.id === item.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      value={editingItem.price}
                      onChange={(e) => setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })}
                      className="px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    />
                    <select
                      value={editingItem.category}
                      onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                      className="px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    >
                      <option value="Starters">Starters</option>
                      <option value="Mains">Mains</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Drinks">Drinks</option>
                    </select>
                  </div>
                  <textarea
                    value={editingItem.description}
                    onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="flex-1 bg-emerald-500 text-white py-2 rounded-lg font-semibold hover:bg-emerald-600 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingItem(null)}
                      className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="grow">
                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">${item.price} - {item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
                        item.available 
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                          : 'bg-red-100 text-red-700 hover:bg-red-200'
                      }`}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </button>
                    <button
                      onClick={() => startEdit(item)}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}