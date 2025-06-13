import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, GraduationCap, FileText, Users } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const Doctor = () => {
  useEffect(() => {
    document.title = 'Our Doctor - Elegance Aesthetics & Wellness Clinic';
  }, []);

  const qualifications = [
    "MD from Harvard Medical School",
    "Residency in Obstetrics & Gynecology, Johns Hopkins Hospital",
    "Fellowship in Aesthetic Medicine, American Academy of Aesthetic Medicine",
    "Board Certified in Obstetrics & Gynecology",
    "Member, American Society for Laser Medicine and Surgery",
    "Advanced training in Facial Aesthetics and Injectables"
  ];

  const specializations = [
    "Non-surgical Facial Rejuvenation",
    "Advanced Laser Treatments",
    "PRP Therapy for Skin and Hair",
    "Chemical Peels and Microneedling",
    "Vaginal Rejuvenation and Tightening",
    "Gynecological Wellness"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <PageBanner 
        title="Meet Our Doctor" 
        subtitle="The expert behind our premium aesthetic and gynecological treatments."
        bgImage="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
                <img 
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dr. Elizabeth Chen" 
                  className="rounded-lg shadow-medium w-full h-full object-cover"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary p-3 sm:p-4 lg:p-6 rounded-lg shadow-medium text-white hidden sm:block max-w-[200px]">
                  <div className="text-center">
                    <div className="text-sm lg:text-lg font-medium">Appointments Available</div>
                    <div className="mt-1 lg:mt-2 text-xs lg:text-sm">Monday - Friday</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <SectionTitle 
                title="Dr. Elizabeth Chen, MD" 
                subtitle="Founder & Medical Director"
              />

              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  Dr. Elizabeth Chen is a board-certified physician with over 15 years of specialized experience in aesthetic medicine and gynecological care. Her unique combination of expertise allows her to provide comprehensive treatments that address both external appearance and internal wellness.
                </p>
                <p>
                  After completing her medical education at Harvard Medical School and residency at Johns Hopkins Hospital, Dr. Chen pursued advanced training in aesthetic procedures, becoming one of the few physicians nationally with dual expertise in both fields.
                </p>
                <p>
                  Her approach blends scientific precision with an artistic eye, allowing her to create natural-looking results that enhance each client's unique beauty. Dr. Chen is known for her gentle technique, meticulous attention to detail, and commitment to client safety and satisfaction.
                </p>
                <p className="hidden sm:block">
                  Beyond her clinical work, Dr. Chen is an active educator and researcher in the field of aesthetic medicine, regularly presenting at conferences and contributing to medical journals on the latest advancements in non-surgical rejuvenation and gynecological treatments.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <Link to="/contact" className="btn-primary text-sm sm:text-base">
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 bg-secondary-off">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <GraduationCap size={24} className="text-primary mr-3 sm:mr-4 flex-shrink-0 sm:w-8 sm:h-8" />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-medium">Education & Qualifications</h2>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{qualification}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Award size={24} className="text-primary mr-3 sm:mr-4 flex-shrink-0 sm:w-8 sm:h-8" />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-serif font-medium">Specializations</h2>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {specializations.map((specialization, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{specialization}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Dr. Chen's Philosophy" 
            subtitle="The guiding principles behind our approach to aesthetic and wellness treatments."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-soft w-full"
            >
              <FileText size={28} className="text-primary mb-3 sm:mb-4 sm:w-9 sm:h-9" />
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Holistic Approach</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                "True beauty is a reflection of overall wellness. I believe in addressing both the visible concerns and their underlying causes to create results that are not only beautiful but also healthy and sustainable."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-soft w-full"
            >
              <Users size={28} className="text-primary mb-3 sm:mb-4 sm:w-9 sm:h-9" />
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Natural Enhancement</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                "My goal is never to change how someone looks, but rather to enhance their natural beauty and help them look like the best version of themselves—refreshed, rejuvenated, and confidently authentic."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-soft w-full md:col-span-2 lg:col-span-1"
            >
              <Award size={28} className="text-primary mb-3 sm:mb-4 sm:w-9 sm:h-9" />
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">Ethical Practice</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                "I am committed to maintaining the highest standards of medical ethics in aesthetic practice. This means recommending only treatments that are truly beneficial and appropriate for each individual client."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 bg-primary text-white">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium mb-4 sm:mb-6">
              Experience Expert Care
            </h2>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Schedule your personal consultation with Dr. Chen and discover how our premium treatments can enhance your natural beauty and improve your quality of life.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm sm:text-base">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Doctor;