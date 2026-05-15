import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Utensils, Home } from 'lucide-react';

const FEATURES = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Pastoral Care",
    description: "Dedicated house parents ensuring emotional well-being and academic support around the clock."
  },
  {
    icon: <Utensils className="w-5 h-5" />,
    title: "Nutritional Advantage",
    description: "Organic, balanced meals with specialized nutritional options available."
  },
  {
    icon: <Home className="w-5 h-5" />,
    title: "Smart Living",
    description: "Modern dormitories with air purification and biometric access control."
  }
];

const IMAGE_PAIRS = [
  [
    "https://pavnaschool.com/wp-content/uploads/2026/04/Boarding-facility-2-1.webp",
    "https://pavnaschool.com/wp-content/uploads/2026/04/Dorm-Room-1-1.webp"
  ],
  [
    "https://pavnaschool.com/wp-content/uploads/2026/04/Study-Area-1-1-1.webp",
    "https://pavnaschool.com/wp-content/uploads/2026/04/2O0A1216-1.webp"
  ]
];

export default function BoardingSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % IMAGE_PAIRS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="boarding-life" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-0">
          
          {/* Left Content */}
          <div className="w-full lg:w-[42%]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[48px] leading-[56px] font-bold text-brand-navy mb-14 tracking-tight"
            >
              A Home Away <br className="hidden md:block" /> From Home
            </motion.h2>

            <div className="space-y-10">
              {FEATURES.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300">
                    <div className="text-brand-navy group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Images - Slider */}
          <div className="w-full lg:w-[52%] relative h-[450px] md:h-[550px] overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIdx}
                initial={{ x: "calc(100% + 24px)" }}
                animate={{ x: 0 }}
                exit={{ x: "calc(-100% - 24px)" }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 grid grid-cols-2 gap-6"
              >
                {IMAGE_PAIRS[currentIdx].map((src, idx) => (
                  <div 
                    key={idx}
                    className="relative rounded-lg overflow-hidden group"
                  >
                    <img 
                      src={src} 
                      alt={`Boarding Life ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
