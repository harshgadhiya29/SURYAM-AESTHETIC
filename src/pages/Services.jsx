import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, Scissors, Zap, HeartPulse, Heart, 
  Droplets, Syringe, Scan, Brush, Gift
} from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';

const Services = () => {
  const location = useLocation();
  const faceRef = useRef(null);
  const laserRef = useRef(null);
  const hairRef = useRef(null);
  const skinRef = useRef(null);
  const gynecRef = useRef(null);

  useEffect(() => {
    document.title = 'Our Services - Elegance Aesthetics & Wellness Clinic';
    
    // Handle anchor links
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const serviceCategories = [
    {
      id: "face",
      ref: faceRef,
      title: "Face Treatments",
      icon: <Sparkles size={20} className="sm:w-6 sm:h-6" />,
      services: [
        {
          name: "Hydra Facial",
          description: "A multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin using a specialized device. The HydraFacial is suitable for all skin types and addresses various skin concerns, including fine lines, elasticity, tone, texture, and advanced signs of aging.",
          image: "https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Vampire Facial",
          description: "A combination treatment that involves microneedling followed by the application of platelet-rich plasma (PRP) derived from your own blood. This procedure stimulates collagen production and cell turnover, resulting in smoother, tighter, and brighter skin with improved texture and reduced scarring.",
          image: "https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Chemical Peel",
          description: "A technique used to improve the appearance of the skin by applying a chemical solution that causes the dead skin to slough off and eventually peel off. The regenerated skin is usually smoother and less wrinkled than the old skin, with improvements in tone, texture, and pigmentation.",
          image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Microneedling",
          description: "A minimally invasive procedure that uses fine needles to create controlled micro-injuries to the skin, triggering the body's natural wound healing process. This results in increased collagen and elastin production, improving skin texture, reducing scars, and diminishing signs of aging.",
          image: "https://images.pexels.com/photos/3997319/pexels-photo-3997319.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Dermaplaning",
          description: "A physical exfoliation procedure that removes the top layer of dead skin cells along with fine vellus hair (peach fuzz). This treatment leaves the skin immediately smoother, brighter, and more receptive to skincare products, with no downtime required.",
          image: "https://images.pexels.com/photos/3997311/pexels-photo-3997311.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Back Facial",
          description: "A specialized treatment designed to cleanse, exfoliate, and hydrate the skin on your back, addressing concerns like acne, dryness, or uneven texture. This hard-to-reach area gets the same attention as your face, resulting in clearer, smoother skin.",
          image: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    {
      id: "laser",
      ref: laserRef,
      title: "Laser Treatments",
      icon: <Zap size={20} className="sm:w-6 sm:h-6" />,
      services: [
        {
          name: "Laser Hair Removal",
          description: "A medical procedure that uses a concentrated beam of light to remove unwanted hair. During treatment, the laser emits light that is absorbed by the pigment in the hair follicles, destroying them at the root and inhibiting future growth while leaving the surrounding skin undamaged.",
          image: "https://images.pexels.com/photos/7176306/pexels-photo-7176306.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Skin Tightening",
          description: "A non-surgical procedure that uses laser energy to heat the collagen under the skin's surface, causing the skin to contract and tighten. Over time, the treatment also stimulates natural collagen production, further improving skin elasticity and reducing sagging.",
          image: "https://images.pexels.com/photos/7176303/pexels-photo-7176303.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Double Chin Reduction",
          description: "A targeted laser treatment that helps eliminate stubborn fat cells under the chin and contour the jawline without surgery. The procedure uses controlled cooling to crystallize fat cells, which are then naturally eliminated from the body over time.",
          image: "https://images.pexels.com/photos/7176046/pexels-photo-7176046.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Jawline Shaping",
          description: "A precise laser procedure that helps define and contour the jawline by targeting excess fat and stimulating collagen production. This treatment creates a more sculpted appearance without the need for invasive surgery or extended downtime.",
          image: "https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    {
      id: "hair",
      ref: hairRef,
      title: "Hair Treatments",
      icon: <Scissors size={20} className="sm:w-6 sm:h-6" />,
      services: [
        {
          name: "PRP Hair Treatment",
          description: "A therapeutic treatment that involves injecting platelet-rich plasma derived from your own blood into the scalp to stimulate hair follicles. PRP contains growth factors that promote healing and regeneration, helping to improve hair thickness, reduce hair loss, and stimulate new hair growth.",
          image: "https://images.pexels.com/photos/3998009/pexels-photo-3998009.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "GFC Hair Treatment",
          description: "Growth Factor Concentrate therapy is an advanced hair restoration treatment that uses a specialized concentration of growth factors to stimulate hair follicles. This treatment helps improve hair density, thickness, and overall scalp health while addressing the underlying causes of hair thinning.",
          image: "https://images.pexels.com/photos/3998014/pexels-photo-3998014.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    {
      id: "skin",
      ref: skinRef,
      title: "Skin Treatments",
      icon: <Droplets size={20} className="sm:w-6 sm:h-6" />,
      services: [
        {
          name: "Acne Scar Removal",
          description: "A specialized treatment that combines multiple modalities such as laser resurfacing, microneedling, and chemical peels to reduce the appearance of acne scars. These treatments work by promoting skin renewal and collagen production, gradually improving skin texture and tone.",
          image: "https://images.pexels.com/photos/3997377/pexels-photo-3997377.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Melasma Treatment",
          description: "A customized approach to treating this complex pigmentation disorder, often combining topical treatments, chemical peels, and laser therapy. Our protocols focus on reducing pigmentation while addressing the underlying factors that contribute to melasma development.",
          image: "https://images.pexels.com/photos/3997995/pexels-photo-3997995.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Open Pores Treatment",
          description: "A multi-faceted treatment plan to minimize the appearance of enlarged pores, including deep cleansing, exfoliation, and advanced procedures such as laser therapy and microneedling. These treatments help refine skin texture and reduce pore visibility.",
          image: "https://images.pexels.com/photos/3997984/pexels-photo-3997984.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Skin Hydrating Treatment",
          description: "An intensive moisture-replenishing treatment that combines hyaluronic acid, peptides, and antioxidants to deeply hydrate the skin. This procedure helps restore the skin's moisture barrier, improving elasticity, plumpness, and overall radiance.",
          image: "https://images.pexels.com/photos/3997316/pexels-photo-3997316.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Dark Circle Treatment",
          description: "A targeted therapy that addresses the multiple causes of under-eye circles, including pigmentation, thin skin, and visible blood vessels. Our approach combines specialized eye products, gentle chemical peels, and light therapy to brighten and rejuvenate the delicate eye area.",
          image: "https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Anti-Aging Treatment",
          description: "A comprehensive approach to addressing signs of aging, including fine lines, wrinkles, and loss of elasticity. Our personalized anti-aging protocols may include a combination of retinol treatments, antioxidant therapy, peptide infusions, and collagen-stimulating procedures.",
          image: "https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Stretch Mark Treatment",
          description: "An effective treatment protocol that combines microneedling, laser therapy, and topical treatments to reduce the appearance of stretch marks. These procedures stimulate collagen production and skin renewal, gradually improving the texture and color of affected areas.",
          image: "https://images.pexels.com/photos/7176301/pexels-photo-7176301.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    {
      id: "gynec",
      ref: gynecRef,
      title: "Gynecological Treatments",
      icon: <HeartPulse size={20} className="sm:w-6 sm:h-6" />,
      services: [
        {
          name: "Vaginal Tightening",
          description: "A non-surgical procedure that uses laser or radiofrequency energy to stimulate collagen production in vaginal tissues. This treatment helps improve vaginal laxity, enhancing both physical comfort and sexual satisfaction without surgery or downtime.",
          image: "https://images.pexels.com/photos/8871545/pexels-photo-8871545.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Breast Tightening",
          description: "A non-invasive treatment that uses advanced technology to stimulate collagen and elastin production in breast tissues. This procedure helps improve skin elasticity and firmness, resulting in a subtle lifting effect without surgery.",
          image: "https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Vaginal Rejuvenation",
          description: "A comprehensive treatment approach that addresses both functional and aesthetic concerns related to the vaginal area. This may include improving vaginal laxity, enhancing sensation, addressing dryness, and improving the external appearance.",
          image: "https://images.pexels.com/photos/8437874/pexels-photo-8437874.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "SUI (Urine Leaking) Treatment",
          description: "A specialized therapy for stress urinary incontinence that strengthens the pelvic floor muscles and improves urethral support. Our non-surgical approach uses targeted energy to stimulate collagen production and enhance muscle tone in the treated area.",
          image: "https://images.pexels.com/photos/7176307/pexels-photo-7176307.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Vaginal Infection Control",
          description: "A medical treatment plan to address and prevent recurrent vaginal infections, combining appropriate medications with strategies to restore and maintain healthy vaginal flora. Our approach focuses on both immediate symptom relief and long-term prevention.",
          image: "https://images.pexels.com/photos/7176275/pexels-photo-7176275.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Vaginal Dryness & Laxity Treatment",
          description: "A therapeutic treatment that addresses both vaginal dryness and laxity using advanced technologies to stimulate natural lubrication and improve tissue quality. This procedure helps enhance comfort during daily activities and intimate moments.",
          image: "https://images.pexels.com/photos/8437870/pexels-photo-8437870.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          name: "Dyspareunia (Pain During Intercourse) Treatment",
          description: "A comprehensive approach to diagnosing and treating painful intercourse, addressing physical, hormonal, and psychological factors. Our treatment protocols are customized to the specific causes of discomfort, with the goal of restoring comfortable and enjoyable intimacy.",
          image: "https://images.pexels.com/photos/8437861/pexels-photo-8437861.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    }
  ];

  const ServiceNavigation = () => (
    <div className="bg-white shadow-soft rounded-lg p-4 sm:p-6 sticky top-20 sm:top-24">
      <h3 className="text-lg sm:text-xl font-serif font-medium mb-3 sm:mb-4">Service Categories</h3>
      <ul className="space-y-1 sm:space-y-2">
        {serviceCategories.map((category) => (
          <li key={category.id}>
            <a 
              href={`#${category.id}`}
              className="flex items-center py-2 px-3 sm:px-4 rounded-md hover:bg-primary-50 hover:text-primary transition-colors text-sm sm:text-base"
            >
              <span className="mr-2 sm:mr-3 flex-shrink-0">{category.icon}</span>
              <span className="truncate">{category.title}</span>
            </a>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary-50 rounded-lg">
        <h4 className="font-medium mb-2 text-sm sm:text-base">Need Assistance?</h4>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Have questions about our services or need help choosing the right treatment?</p>
        <Link to="/contact" className="btn-primary text-xs sm:text-sm w-full block text-center">
          Contact Us
        </Link>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <PageBanner 
        title="Our Services" 
        subtitle="Discover our comprehensive range of premium aesthetic and wellness treatments."
        bgImage="https://images.pexels.com/photos/3997988/pexels-photo-3997988.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
            <div className="hidden xl:block">
              <ServiceNavigation />
            </div>
            
            <div className="xl:col-span-3">
              <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                {serviceCategories.map((category, index) => (
                  <div key={category.id} id={category.id} ref={category.ref} className="scroll-mt-20 sm:scroll-mt-28">
                    <SectionTitle 
                      title={category.title}
                      subtitle={`Experience our premium ${category.title.toLowerCase()} designed to enhance your natural beauty and improve your quality of life.`}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={serviceIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                          className="bg-white rounded-lg shadow-soft overflow-hidden w-full"
                        >
                          <div className="h-40 sm:h-48 overflow-hidden">
                            <img 
                              src={service.image} 
                              alt={service.name} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          </div>
                          <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">{service.name}</h3>
                            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{service.description}</p>
                            <Link 
                              to="/contact" 
                              className="inline-flex items-center text-primary font-medium hover:underline text-sm sm:text-base"
                            >
                              Book This Treatment
                              <Heart size={14} className="ml-2 sm:w-4 sm:h-4 flex-shrink-0" />
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="bg-primary-50 rounded-lg p-6 sm:p-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Gift size={36} className="text-primary mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
                    <h3 className="text-xl sm:text-2xl font-serif font-medium mb-2 sm:mb-3">Customized Treatment Packages</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      Experience enhanced results with our personalized treatment packages, designed to address multiple concerns simultaneously. Our expert doctor will create a customized plan tailored to your specific needs and goals.
                    </p>
                    <Link to="/contact" className="btn-primary text-sm sm:text-base">
                      Inquire About Custom Packages
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Treatment Process" 
            subtitle="What to expect when you choose Elegance Clinic for your aesthetic and wellness journey."
            centered={true}
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 lg:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 sm:mb-6">
                <Syringe size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">1. Consultation</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Begin with a thorough consultation with our expert doctor. We'll discuss your concerns, goals, medical history, and create a personalized treatment plan tailored specifically to your needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 sm:mb-6">
                <Scan size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">2. Treatment</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Experience your selected procedures in our luxurious treatment rooms. Our doctor will perform your treatment with precision and care, ensuring your comfort throughout the process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-lg md:col-span-3 lg:col-span-1"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 sm:mb-6">
                <Brush size={20} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-medium mb-2 sm:mb-3">3. Aftercare</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Receive detailed aftercare instructions and personalized recommendations to optimize your results. We'll schedule follow-up appointments to monitor your progress and make any necessary adjustments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium mb-4 sm:mb-6">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Schedule your consultation today and take the first step toward enhancing your natural beauty and improving your quality of life.
            </p>
            <Link to="/contact" className="btn-primary text-sm sm:text-base">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;