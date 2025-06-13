import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Skin Treatment Client",
      text: "I've been struggling with acne scars for years until I found Elegance Clinic. Their microneedling treatment completely transformed my skin. The staff is professional and the results exceeded my expectations!",
      rating: 5,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Brown",
      role: "Hair Treatment Client",
      text: "The PRP hair treatment I received at Elegance Clinic has significantly improved my hair thickness. I was skeptical at first, but after three sessions, the results are remarkable. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jennifer Davis",
      role: "Laser Treatment Client",
      text: "I had laser hair removal on multiple areas and couldn't be happier with the results. The procedure was much less painful than I expected, and the staff made me feel comfortable throughout the entire process.",
      rating: 4,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary-off overflow-hidden">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Hear from our satisfied clients about their transformative experiences at Elegance Aesthetics & Wellness Clinic."
          centered={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full flex"
            >
              <div className="w-full">
                <TestimonialCard 
                  name={testimonial.name}
                  role={testimonial.role}
                  text={testimonial.text}
                  rating={testimonial.rating}
                  image={testimonial.image}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;