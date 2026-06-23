import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { text: "Excellent service for shipping perfumes across India. Pickup is always on time. Highly reliable for our domestic network.", author: "FFDC", title: "Perfumer & Exporter" },
  { text: "Affordable rates and professional handling of fragile products. They understand the value of traditional attars.", author: "Meena Perfumery", title: "Perfume Manufacturer" },
  { text: "The best courier partner for our perfume business in Kannauj. Secure packaging and fast transit time.", author: "Vaibhav Perfumery", title: "Best Perfumer in Kannauj" },
  { text: "We trust them with all our commercial cargo. Their door pickup service saves us hours of logistics planning.", author: "Maruti Fragrance", title: "Perfumer Exporter & Manufacturer" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Our Clients</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Trusted By The Best</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-blue-50 p-8 rounded-3xl"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-base text-gray-800 font-medium mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-brand-blue">— {t.author}</div>
                <div className="text-sm text-brand-orange font-semibold mt-1">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
