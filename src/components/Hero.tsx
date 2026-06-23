import React from 'react';
import { motion } from 'motion/react';
import { PackageSearch, CircleCheck, Star, ArrowRight, ShieldCheck, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-blue min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0 opacity-10 background-pattern"></div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] rounded-full bg-brand-orange/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] rounded-full bg-brand-blue-50/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide flex-1">Kannauj's Trusted Perfume & Attar Cargo Partner</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            FREE Pickup At Your Door for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Perfume & Attar</span> Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Courier & Cargo Services Across India. Best Shipping Rates, Fast Delivery, Safe Handling, and Live Tracking tailored for manufacturers, exporters, and sellers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2 group">
              Book FREE Pickup
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.dtdc.com/track-your-shipment/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <PackageSearch className="w-5 h-5" />
              Track Consignment
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 flex items-center justify-center lg:justify-start"
          >
            <a href="tel:7525027993" className="text-xl font-bold text-white hover:text-brand-orange transition-colors flex items-center gap-2">
              <Phone className="w-6 h-6 text-brand-orange" />
              Mobile - 7525027993
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 items-center justify-center lg:justify-start text-sm text-brand-blue-50/80 font-medium"
          >
            <div className="flex items-center gap-1"><CircleCheck className="w-4 h-4 text-brand-orange" /> Pan India Delivery</div>
            <div className="flex items-center gap-1"><CircleCheck className="w-4 h-4 text-brand-orange" /> Secure Packaging</div>
            <div className="flex items-center gap-1"><CircleCheck className="w-4 h-4 text-brand-orange" /> Fast Transit</div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 hidden lg:block"
        >
           <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-transparent rounded-3xl z-10"></div>
             <img 
               src="/src/assets/images/attar_perfume_bottles_1781719713777.jpg" 
               alt="Traditional Attar and Perfume Bottles" 
               className="w-full h-[500px] object-cover rounded-3xl shadow-2xl opacity-90"
             />
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">100% Safe Handling</div>
                  <div className="text-sm text-gray-500">Fragile & Glass Shipments</div>
                </div>
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
