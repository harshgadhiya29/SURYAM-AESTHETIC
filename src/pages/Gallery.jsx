import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery - Elegance Aesthetics & Wellness Clinic';
    
    // Don't remove scrollbars - let the footer be accessible
    // Removed the overflow hidden styles to allow normal scrolling
    
    // Cleanup function (no longer needed but kept for consistency)
    return () => {
      // No cleanup needed since we're not modifying overflow anymore
    };
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
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="w-full max-w-full">
          <PageBanner 
            title="Our Gallery" 
            subtitle="Explore our clinic space, treatments, and the transformative results we deliver."
            bgImage="https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />

          <section className="py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionTitle 
                title="Browse Our Gallery" 
                subtitle="Take a visual journey through our premium clinic, innovative treatments, and stunning results."
                centered={true}
              />

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === category.id 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
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
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-lg shadow-soft cursor-pointer h-48 sm:h-56 lg:h-64 relative group w-full"
                      onClick={() => openModal(image)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                        <div className="p-3 sm:p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-medium text-sm sm:text-base lg:text-lg line-clamp-2">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black bg-opacity-80"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden bg-white rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 text-gray-800 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
                
                <div className="h-[60vh] sm:h-[70vh] w-full">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif font-medium line-clamp-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base line-clamp-2">
                    {selectedImage.alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Prevent horizontal overflow */
        .w-full {
          width: 100%;
          max-width: 100%;
        }
        
        /* Responsive improvements */
        @media (max-width: 640px) {
          .grid {
            gap: 0.75rem;
          }
        }
        
        @media (max-width: 480px) {
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;