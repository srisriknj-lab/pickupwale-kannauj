import React from 'react';
import { motion } from 'motion/react';
import { MapPin, IndianRupee, BoxSelect, Map, MonitorCheck, Briefcase } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "FREE Pickup At Your Door",
    desc: "No need to visit a courier office—we collect your shipment from your location.",
  },
  {
    icon: <IndianRupee className="w-6 h-6" />,
    title: "Best Shipping Rates",
    desc: "Competitive pricing for individual and business customers to keep your costs low.",
  },
  {
    icon: <BoxSelect className="w-6 h-6" />,
    title: "Safe Packaging",
    desc: "Special care and handling for perfumes, attars, glass bottles, and fragile products.",
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Pan India Delivery",
    desc: "Reliable delivery to destinations across India with expansive network coverage.",
  },
  {
    icon: <MonitorCheck className="w-6 h-6" />,
    title: "Live Tracking",
    desc: "Track your shipment seamlessly from pickup to the final delivery at your door.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Business Solutions",
    desc: "Special pricing and logistics support for manufacturers, exporters, and bulk shippers.",
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Features</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Why Choose Pickupwale?</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-14 h-14 bg-brand-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
