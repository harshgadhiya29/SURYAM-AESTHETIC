import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "30+", label: "Treatments" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-primary overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center w-full"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white mb-1 sm:mb-2 leading-tight">
                {stat.number}
              </div>
              <div className="text-white text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;