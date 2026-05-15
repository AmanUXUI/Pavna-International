import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTENT } from '../constants';
import { ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CONTENT.heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % CONTENT.heroImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + CONTENT.heroImages.length) % CONTENT.heroImages.length);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-screen flex w-full overflow-hidden" id="hero">
        {/* Side Vertical Text */}
        <div className="hidden md:flex w-16 border-r border-black/5 flex-col justify-center items-center gap-8 bg-white/50">
          <span className="rotate-180 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.3em] font-medium opacity-40">
            Established 2022
          </span>
          <div className="w-[1px] h-24 bg-black/10"></div>
        </div>

        <div className="flex-grow relative">
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-white/10 z-10" />
                <img
                  src={CONTENT.heroImages[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="h-full w-full object-cover grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Static Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-3xl bg-gradient-to-r from-white/95 via-white/70 to-transparent">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[48px] leading-[48px] tracking-[-1.2px] font-bold capitalize mb-6 text-brand-navy font-serif max-w-[600px]"
            >
              Where Small Steps Build <br/> 
              Lifelong Greatness.
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-[16px] text-black/70 mb-8 leading-relaxed font-light max-w-lg"
            >
              {CONTENT.about.text}
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="flex flex-wrap gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -4, shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#f58021] transition-all duration-300 shadow-md rounded-[4px]"
              >
                Explore Academics
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -4, shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white border border-brand-navy text-brand-navy text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-all duration-300 shadow-sm rounded-[4px]"
              >
                View Campus
              </motion.button>
            </motion.div>
          </div>

          {/* Slider Indicators Editorial Style */}
          <div className="absolute bottom-12 left-8 md:left-16 z-30 flex items-center gap-6">
            {CONTENT.heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "flex items-center gap-2 transition-all duration-300",
                  index === currentIndex ? "opacity-100" : "opacity-30"
                )}
              >
                <span className="text-[10px] font-bold font-sans italic">0{index + 1}</span>
                <div className={cn("h-[1px] bg-black transition-all", index === currentIndex ? "w-12" : "w-6")}></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <div className="ImpactContainer overflow-hidden">
        <h2 className="ImpactHead mb-5 text-center">Impact of Pavna School Legacy</h2>
        <div className="font-gill w-full">
          <section className="bg-brand-navy border-b border-brand-navy overflow-hidden relative z-30 marquee-hover py-2">
            <div className="absolute inset-0 banner-pattern opacity-10 pointer-events-none"></div>
            
            {/* Gradient fades for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-marquee items-center relative z-0">
              {/* Group 1 */}
              <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-chalkboard-teacher text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">250+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Educators</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-book-reader text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">3000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Learners Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-friends text-brand-yellow text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">2000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mt-1">Happy Parents</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-graduate text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">6000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Alumni Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-landmark text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">27+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Years Legacy</span>
                  </div>
                </div>
              </div>

              {/* Group 2 (Exact Duplicate for seamless infinite loop) */}
              <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-chalkboard-teacher text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">250+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Educators</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-book-reader text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">3000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Learners Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-friends text-brand-yellow text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">2000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow mt-1">Happy Parents</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-user-graduate text-brand-orange text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">6000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mt-1">Alumni Base</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-default">
                  <i className="fas fa-landmark text-brand-sky text-2xl group-hover:scale-110 transition-transform"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-gill font-bold text-white leading-none">27+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky mt-1">Years Legacy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Welcome Video Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Full-Width Background Video Container */}
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
              src="https://www.youtube.com/embed/p3AVsVJ6HSU?autoplay=1&mute=1&loop=1&playlist=p3AVsVJ6HSU&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3"
              title="Welcome to Pavna International School"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          {/* Brand Overlay */}
          <div className="absolute inset-0 bg-brand-navy/80 z-10 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto px-8 md:px-16 text-center py-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[48px] leading-[48px] tracking-[-1.2px] font-serif font-bold text-white mb-8">
              Welcome to PIS <br className="hidden md:block" /> nurturing growth, fostering individuality
            </h2>
            
            <div className="w-20 h-1 bg-brand-orange mx-auto mb-8 rounded-full"></div>

            <p className="text-[16px] text-white/90 leading-relaxed font-light max-w-3xl mx-auto mb-10">
              Welcome to Pavna International School, a nurturing ground where education mirrors the growth of a tree, blossoming beyond the confines of traditional learning. Here, students are encouraged to stretch their branches, exploring realms beyond textbooks and classrooms through our emphasis on experiential learning. This approach not only fosters freedom of expression but also instils a sense of wonder and curiosity.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest hover:bg-brand-darkOrange transition-all duration-300 shadow-xl rounded-[4px]"
            >
              Discover More
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
