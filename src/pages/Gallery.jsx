import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery - Elegance Aesthetics & Wellness Clinic';
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'clinic', name: 'Our Clinic' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'results', name: 'Before & After' }
  ];

  const galleryImages = [
    {
      id: 1,
      category: 'clinic',
      src: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Elegance Clinic Reception',
      title: 'Our Luxurious Reception'
    },
    {
      id: 2,
      category: 'clinic',
      src: 'https://images.pexels.com/photos/1366942/pexels-photo-1366942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Treatment Room',
      title: 'Premium Treatment Room'
    },
    {
      id: 3,
      category: 'clinic',
      src: 'https://images.pexels.com/photos/3735782/pexels-photo-3735782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Consultation Room',
      title: 'Private Consultation Space'
    },
    {
      id: 4,
      category: 'clinic',
      src: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Waiting Area',
      title: 'Comfortable Waiting Lounge'
    },
    {
      id: 5,
      category: 'treatments',
      src: 'https://images.pexels.com/photos/3997380/pexels-photo-3997380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Facial Treatment',
      title: 'Hydra Facial Treatment'
    },
    {
      id: 6,
      category: 'treatments',
      src: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Laser Treatment',
      title: 'Advanced Laser Therapy'
    },
    {
      id: 7,
      category: 'treatments',
      src: 'https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Hair Treatment',
      title: 'PRP Hair Restoration'
    },
    {
      id: 8,
      category: 'treatments',
      src: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Skin Analysis',
      title: 'Digital Skin Analysis'
    },
    {
      id: 9,
      category: 'results',
      src: 'https://images.pexels.com/photos/5069438/pexels-photo-5069438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Before & After Skin Treatment',
      title: 'Acne Treatment Results'
    },
    {
      id: 10,
      category: 'results',
      src: 'https://images.pexels.com/photos/6799788/pexels-photo-6799788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Before & After Facial',
      title: 'Anti-Aging Treatment Results'
    },
    {
      id: 11,
      category: 'results',
      src: 'https://images.pexels.com/photos/4946409/pexels-photo-4946409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Before & After Hair Treatment',
      title: 'Hair Restoration Results'
    },
    {
      id: 12,
      category: 'results',
      src: 'https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Before & After Laser Treatment',
      title: 'Laser Treatment Results'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner 
        title="Our Gallery" 
        subtitle="Explore our clinic space, treatments, and the transformative results we deliver."
        bgImage="https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle 
            title="Browse Our Gallery" 
            subtitle="Take a visual journey through our premium clinic, innovative treatments, and stunning results."
            centered={true}
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-lg shadow-soft cursor-pointer h-64 relative group"
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 text-gray-800 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="h-[70vh]">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium">{selectedImage.title}</h3>
                <p className="text-gray-600 mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;