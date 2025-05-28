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
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-serif font-medium text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;