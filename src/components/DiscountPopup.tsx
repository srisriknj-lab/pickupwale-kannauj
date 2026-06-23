import React, { useState, useEffect } from 'react';
import { X, Tag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-brand-blue/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-white/80 rounded-full p-1"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="bg-brand-orange p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
              
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg text-brand-orange">
                <Tag className="w-8 h-8 fill-brand-orange text-brand-orange" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2 md:text-4xl tracking-tight">
                10% OFF
              </h2>
              <p className="text-white/90 text-lg font-medium">
                On Your First Booking!
              </p>
            </div>
            
            <div className="p-8 text-center bg-gray-50">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book your pickup today and get an exclusive <strong className="text-gray-900">10% discount</strong> on our courier services. Valid for new customers.
              </p>
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-blue hover:bg-brand-blue-600 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 flex justify-center items-center gap-2 group"
              >
                Claim Offer Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                No thanks, maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
