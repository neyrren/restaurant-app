'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-16">
          Have questions? We would love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">Dar es Salaam, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+255 13 020 620</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">hello@freshbite.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 9am - 10pm</p>
                  <p className="text-gray-600">Sat-Sun: 10am - 11pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:outline-none"
                  rows={5}
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-linear-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}