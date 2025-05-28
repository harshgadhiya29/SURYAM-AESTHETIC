import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-20 bg-cover bg-center" style={{ 
      backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg?auto=compress&cs=tinysrgb&w=1920')" 
    }}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-medium text-white mb-6"
          >
            Ready to Experience the Elegance Difference?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 text-lg mb-8"
          >
            Schedule your consultation today and take the first step toward enhancing your natural beauty and improving your quality of life. Our expert team is ready to create a personalized treatment plan just for you.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary inline-flex items-center"
            >
              <Calendar className="mr-2" size={20} />
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta;