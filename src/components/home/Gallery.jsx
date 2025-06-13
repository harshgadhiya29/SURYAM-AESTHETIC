import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const Gallery = () => {
  const images = [
    "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3737600/pexels-photo-3737600.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Gallery" 
          subtitle="Take a glimpse inside our premium clinic and see the transformative results of our treatments."
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-none">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-lg shadow-soft h-48 sm:h-56 lg:h-64 w-full"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;