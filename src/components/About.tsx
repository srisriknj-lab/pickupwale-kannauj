import React from 'react';
import { motion } from 'motion/react';
import { FileHeart, Droplet, Package, FolderOpen, Box, Truck, Leaf, Settings, Home } from 'lucide-react';

export default function About() {
  const specialties = [
    { icon: Droplet, title: "Perfumes" },
    { icon: FileHeart, title: "Attars" },
    { icon: Droplet, title: "Essential Oils" },
    { icon: FolderOpen, title: "Documents" },
    { icon: Package, title: "Parcels" },
    { icon: Box, title: "E-Commerce" },
    { icon: Truck, title: "Industrial Cargo" },
    { icon: Leaf, title: "Seeds" },
    { icon: Settings, title: "Auto Parts" },
    { icon: Home, title: "Home Products" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">About Pickupwale</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Logistics That Helps Your Business Grow
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Pickupwale Kannauj provides reliable courier and cargo services for businesses shipping products across India. With FREE pickup at your door, affordable pricing, and a nationwide delivery network, we help businesses save time and shipping costs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in the perfume capital, we understand the specific needs of handling fragile glass bottles, liquid shipments, bulk commercial cargo, and everyday business documents.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-blue-50 rounded-3xl p-8 lg:p-12"
          >
            <h4 className="text-xl font-bold text-brand-blue mb-6">We Specialize In Transporting:</h4>
            <div className="grid grid-cols-2 gap-4">
              {specialties.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-brand-orange">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <span className="font-semibold text-gray-800">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
