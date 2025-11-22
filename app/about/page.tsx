'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChefHat, Clock, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">About FreshBite</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          We are passionate about serving fresh, delicious food made with love and the finest ingredients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ChefHat className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">Our team of skilled chefs brings years of culinary expertise</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Service</h3>
            <p className="text-gray-600">Fast preparation without compromising on quality</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in food and service</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="w-16 h-16 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Made with Love</h3>
            <p className="text-gray-600">Every dish is prepared with care and passion</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2020, FreshBite started with a simple mission: to bring fresh, delicious, and healthy food to our community. What began as a small family restaurant has grown into a beloved dining destination.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We source our ingredients from local farms and suppliers, ensuring that every dish is made with the freshest produce. Our menu combines traditional recipes with modern culinary techniques, creating unique flavors that keep our customers coming back.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}