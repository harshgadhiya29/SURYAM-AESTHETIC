import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Expert Specialists",
      description: "Our highly qualified doctor brings years of specialized experience in aesthetic and gynecological care."
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Care",
      description: "We believe in customized treatment plans tailored to your unique needs and aesthetic goals."
    },
    {
      icon: <Clock size={24} />,
      title: "Modern Techniques",
      description: "We utilize the latest, most advanced procedures and technologies in aesthetic medicine."
    },
    {
      icon: <Heart size={24} />,
      title: "Comfortable Environment",
      description: "Our clinic provides a luxurious, relaxing atmosphere that ensures your comfort throughout your visit."
    }
  ];

  return (
    <section className="py-20 bg-secondary-off">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5407031/pexels-photo-5407031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Elegance Clinic Interior" 
                className="rounded-lg shadow-medium w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-soft hidden md:block">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-serif font-medium text-primary">15+</div>
                    <div className="text-gray-600 mt-1">Years of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              title="Welcome to Elegance Aesthetics & Wellness Clinic" 
              subtitle="Where beauty meets medical expertise, offering transformative aesthetic, skin, hair, and gynecological treatments."
            />

            <p className="text-gray-600 mb-6">
              At Elegance Clinic, we believe that everyone deserves to feel confident and comfortable in their own skin. Our state-of-the-art facility combines the latest advancements in aesthetic medicine with a warm, inviting atmosphere where clients can relax and rejuvenate.
            </p>
            
            <p className="text-gray-600 mb-8">
              Founded by a leading specialist with extensive experience in both aesthetic procedures and gynecological care, our clinic offers a unique, integrated approach to beauty and wellness that addresses both external appearance and internal health.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;