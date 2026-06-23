import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, Navigation } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Our Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Comprehensive Services</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-3xl bg-gray-50 border border-gray-100"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue mb-6">
              <Package size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Courier Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Express Parcel Delivery</li>
              <li className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Document Delivery</li>
              <li className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Business Courier</li>
              <li className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>COD Shipping</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-3xl bg-brand-blue text-white shadow-xl shadow-brand-blue/20"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center text-brand-orange mb-6">
              <Truck size={32} />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Cargo Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brand-blue-100"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Bulk Shipments</li>
              <li className="flex items-center gap-2 text-brand-blue-100"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Commercial Cargo</li>
              <li className="flex items-center gap-2 text-brand-blue-100"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Heavy Parcels</li>
              <li className="flex items-center gap-2 text-brand-blue-100"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Industrial Goods</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-brand-orange-50 border border-brand-orange-50"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-orange mb-6">
              <Navigation size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">FREE Pickup</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-brand-orange-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Factory Pickup</li>
              <li className="flex items-center gap-2 text-brand-orange-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Office & Shop Pickup</li>
              <li className="flex items-center gap-2 text-brand-orange-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Warehouse Pickup</li>
              <li className="flex items-center gap-2 text-brand-orange-600 font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>Home Pickup</li>
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
