import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const LEADERSHIP_DATA = [
  {
    id: 1,
    headline: "From Visionary Leadership to Educational Excellence",
    description: "Guided by purpose and legacy, Pavna Group continues to shape future leaders through world-class infrastructure, international faculty, and a commitment to surpassing conventional academic boundaries.",
    name: "Dr. Shayama Chona",
    title: "Patron & Principal Advisor",
    recognition: "Padma Shri & Padma Bhushan",
    image: "https://i.postimg.cc/02gKr06L/Guest-Image.png",
  },
  {
    id: 2,
    headline: "From Cambridge Classrooms to Global Leadership",
    description: "Nurturing innovators through a dynamic Cambridge curriculum, rooted in cultural values and global perspectives preparing students to lead and drive change worldwide.",
    name: "Mr. Swapnil Jain",
    title: "Chairman",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/J0twLXm8/Guest-Image-2.png",
  },
  {
    id: 3,
    headline: "From 35 Years of Experience to Shaping Future Leaders",
    description: "Championing collaborative education through teachers, parents, and community fostering interactive learning and a lifelong passion for knowledge at PIS.",
    name: "Jeanie Naozer Aibara",
    title: "Board Member",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/90VkmN9q/Guest-Image-5.png",
  },
  {
    id: 4,
    headline: "From Global Standards to Sculpting Individual Excellence",
    description: "Blending Cambridge curriculum, cultural values, and Apple-enabled technology to empower every student to chart their own unique path guided by the spirit of 'Be Yourself'.",
    name: "Prof. KVSM Krishna",
    title: "Director Emeritus",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/hPz8516s/Guest-Image-3.png",
  },
  {
    id: 5,
    headline: "From 21st-Century Learning to Holistic Development",
    description: "Balancing rigorous Cambridge academics with sports, arts, and experiential learning celebrating individuality and empowering every student.",
    name: "Ms. Aarti Nigam",
    title: "Principal",
    institution: "Pavna International School (PIS)",
    image: "https://i.postimg.cc/vBDFRKW9/Guest-Image-4.png",
  }
];

export default function LeadershipSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % LEADERSHIP_DATA.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + LEADERSHIP_DATA.length) % LEADERSHIP_DATA.length);

  const current = LEADERSHIP_DATA[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="bg-brand-navy py-24 px-8 md:px-16 overflow-hidden min-h-[750px] flex items-center font-gill">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Headline and Nav */}
        <div className="lg:col-span-12 xl:col-span-5 text-white">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00b6dd] mb-6 block">Leadership & Vision</span>
          <h2 className="text-[34px] leading-[1.1] font-bold mb-12">
            Discover the inspiring stories <br className="hidden md:block" />
            <span className="text-white">& honest experiences</span> <br className="hidden md:block" />
            shared by our leaders.
          </h2>

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-4 mb-12">
            {LEADERSHIP_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative w-16 h-20 rounded-[4px] overflow-hidden border-2 transition-all duration-500",
                  activeIndex === index ? "border-white scale-110 z-10" : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                )}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className={cn(
                  "absolute inset-0 bg-brand-navy/20 transition-opacity duration-300",
                  activeIndex === index ? "opacity-0" : "group-hover:opacity-0"
                )}></div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-[4px] border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-[4px] border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Showcase Card */}
        <div className="lg:col-span-12 xl:col-span-7 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white rounded-none overflow-hidden flex flex-col md:flex-row h-full min-h-[520px] md:h-[520px]"
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <Quote className="text-[#f48120] mb-6" size={54} fill="currentColor" />
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-5 leading-tight">
                  {current.headline}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic font-bold">
                  "{current.description}"
                </p>
                
                <div className="flex items-center gap-6 mt-4">
                  <div className="w-12 h-1 bg-brand-orange/30 rounded-full"></div>
                  <button className="group/btn flex items-center gap-2 text-[#f48120] hover:text-brand-navy transition-colors duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Read More</span>
                    <ChevronRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Photo Side */}
              <div className="w-full md:w-1/2 relative bg-gray-100 min-h-[350px] md:min-h-0">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{current.name}</h4>
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-sky mb-3">{current.title}</p>
                    
                    {(current.recognition || current.institution) && (
                      <div className="pt-4 border-t border-white/20 space-y-3">
                        {current.recognition && (
                          <div>
                            <p className="text-[9px] uppercase tracking-widest font-bold text-white/50 mb-0.5">Recognition</p>
                            <p className="text-lg font-medium">{current.recognition}</p>
                          </div>
                        )}
                        {current.institution && (
                          <div>
                            <p className="text-[9px] uppercase tracking-widest font-bold text-white/50 mb-0.5">Institution</p>
                            <p className="text-lg font-medium">{current.institution}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
