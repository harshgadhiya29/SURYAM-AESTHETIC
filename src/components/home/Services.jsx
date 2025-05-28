import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Zap, HeartPulse } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Sparkles size={24} />,
      title: "Facial Treatments",
      description: "Rejuvenate your skin with our advanced facial treatments including hydra facials, vampire facials, and chemical peels.",
      link: "/services#face"
    },
    {
      icon: <Scissors size={24} />,
      title: "Hair Treatments",
      description: "Address hair loss and improve hair health with our specialized PRP and GFC hair treatments for both men and women.",
      link: "/services#hair"
    },
    {
      icon: <Zap size={24} />,
      title: "Laser Treatments",
      description: "Experience the latest in laser technology for hair removal, skin tightening, and other aesthetic enhancements.",
      link: "/services#laser"
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Gynecological Care",
      description: "Comprehensive gynecological treatments including vaginal rejuvenation, tightening, and infection control.",
      link: "/services#gynec"
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="Discover our comprehensive range of aesthetic and wellness treatments designed to enhance your natural beauty and improve your quality of life."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                link={service.link}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;