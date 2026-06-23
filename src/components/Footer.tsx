import React from 'react';
import { Truck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900 text-brand-blue-100 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/src/assets/images/pickupwale_new_logo_1781715452666.jpg" alt="Pickupwale Logo" className="w-12 h-12 object-contain rounded-md border border-white/20 bg-white/5" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none text-white tracking-tight">Pickupwale</span>
                <span className="text-[10px] font-semibold text-brand-orange tracking-widest uppercase mt-0.5">We Pickup We Deliver</span>
              </div>
            </div>
            <p className="text-brand-blue-100/80 mb-6 text-sm leading-relaxed">
              India's Trusted Courier & Cargo Partner. Providing reliable, fast, and safe delivery solutions from Kannauj to everywhere in India.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-blue-100/80">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Book Free Pickup</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-3 text-sm text-brand-blue-100/80">
              <li>Perfume Manufacturers</li>
              <li>Attar Exporters</li>
              <li>Essential Oils</li>
              <li>E-Commerce Sellers</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-3 text-sm text-brand-blue-100/80">
              <li>Warsi Complex, Ajay Pal Road<br/>Lakhan Chouraha, Kannauj 209725 (U.P.)</li>
              <li><a href="tel:7525037993" className="hover:text-brand-orange transition-colors">7525037993</a></li>
              <li><a href="tel:8957439175" className="hover:text-brand-orange transition-colors">8957439175</a></li>
              <li><a href="mailto:info@pickupwale.in" className="hover:text-brand-orange transition-colors">info@pickupwale.in</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-center text-brand-blue-100/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Pickupwale Kannauj. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
