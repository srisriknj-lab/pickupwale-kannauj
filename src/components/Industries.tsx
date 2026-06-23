import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const industries = [
  "Perfume Manufacturers",
  "Attar Manufacturers",
  "Fragrance Exporters",
  "Essential Oil Producers",
  "Cosmetic Companies",
  "Traders & Wholesalers",
  "Online Sellers",
  "Amazon Sellers",
  "Flipkart Sellers",
  "Meesho Sellers",
  "MSMEs",
  "Retail Businesses"
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-32 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute right-0 bottom-0 opacity-5 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Our Network</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-16">Industries We Serve</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/10 hover:bg-white/20 border border-white/10 p-4 rounded-xl flex items-center gap-3 transition-colors backdrop-blur-sm"
            >
              <div className="w-6 h-6 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="font-medium text-left">{ind}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
