import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Truck, Box, Map, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: "Book Pickup", desc: "Call or submit an online request." },
  { icon: Truck, title: "We Collect", desc: "Our team picks up your parcel from your location." },
  { icon: Box, title: "Safe Dispatch", desc: "Your shipment is packed (if required) and dispatched." },
  { icon: Map, title: "Live Tracking", desc: "Track every step of your shipment online." },
  { icon: CheckCircle2, title: "Delivered", desc: "Fast and secure delivery anywhere in India." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
         <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Workflow</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">How It Works</h3>
        </div>

        <div className="relative">
          {/* Connector Line - Hidden on Mobile */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/20 via-brand-orange/50 to-brand-orange/20 rounded-full z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-brand-blue-50 flex items-center justify-center text-brand-orange mb-6 relative z-10">
                    <Icon size={36} />
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 px-4">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
