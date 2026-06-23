import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Ready to Book Your FREE Pickup?
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              Contact us today for the best shipping rates tailored for perfume manufacturers, exporters, and online sellers in Kannauj.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                  <p className="text-gray-600">Warsi Complex, Ajay Pal Road<br/>Lakhan Chouraha, Kannauj 209725 (U.P.)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                  <div className="flex flex-col">
                    <a href="tel:7525037993" className="text-brand-orange font-bold text-xl hover:text-brand-orange-600 transition-colors">7525037993</a>
                    <a href="tel:8957439175" className="text-brand-orange font-bold text-xl hover:text-brand-orange-600 transition-colors">8957439175</a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                  <a href="mailto:info@pickupwale.in" className="text-gray-600 hover:text-brand-orange transition-colors">info@pickupwale.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue-50 rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Website</h4>
                  <a href="http://www.pickupwale.in" className="text-gray-600 hover:text-brand-orange transition-colors" target="_blank" rel="noopener noreferrer">www.pickupwale.in</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request a Callback / Pickup</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company / Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors" placeholder="e.g. Acme Exporters" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors" placeholder="+91 00000 00000" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location / Address</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-colors resize-none" placeholder="Kannauj location details..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-brand-orange hover:bg-brand-orange-600 text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 group shadow-xl shadow-brand-orange/20">
                Submit Request
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">We will call you back shortly to confirm the pickup.</p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
