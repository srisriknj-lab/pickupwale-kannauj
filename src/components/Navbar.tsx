import React from 'react';
import { Truck, MapPin, Clock, Phone, PackageSearch } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/images/pickupwale_new_logo_1781715452666.jpg" 
              alt="Pickupwale Logo" 
              className="w-10 h-10 object-contain rounded-lg border border-gray-100" 
              referrerPolicy="no-referrer" 
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl leading-none text-brand-blue tracking-tight">Pickupwale</span>
              <span className="text-[10px] font-semibold text-brand-orange tracking-widest uppercase mt-0.5">We Pickup We Deliver</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">About Us</a>
            <a href="#services" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Services</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center whitespace-nowrap"
            >
              Book Pickup
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
