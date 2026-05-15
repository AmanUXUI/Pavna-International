import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const STAGES = [
  {
    id: "early-years",
    title: "Early Years",
    tag: "(Age 3 TO 5 Yrs)",
    image: "https://i.postimg.cc/Hx6c4m8X/1.png",
    description: "The school offers co-educational boarding and day places at key academic stages.",
    link: "Find out more →",
    position: "left"
  },
  {
    id: "primary",
    title: "Primary",
    tag: "(Age 5 TO 11 Yrs)",
    image: "https://i.postimg.cc/Kz0krb3M/2.png",
    description: "Broad, balanced curriculum focused on intellectual development.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "lower-secondary",
    title: "Lower Secondary",
    tag: "(Age 11 TO 14 Yrs)",
    image: "https://i.postimg.cc/rmf0CTR4/3.png",
    description: "Transitioning to deeper academic focus and personal development.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "upper-secondary",
    title: "Upper Secondary - IGCSE",
    tag: "(Age 14 TO 16 Yrs)",
    image: "https://i.postimg.cc/1tvncSVn/4.png",
    description: "Rigorous academic preparation for international recognized qualifications.",
    link: "Find out more →",
    position: "center"
  },
  {
    id: "advance",
    title: "Advance - AS & A Level",
    tag: "(Age 16 TO 18 Yrs)",
    image: "https://i.postimg.cc/rmVRrss4/5.png",
    description: "Expert guidance for university success and global leadership roles.",
    link: "Find out more →",
    position: "center"
  }
];

export default function ImageGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="stages-gallery" className="relative w-full h-[900px] overflow-hidden bg-brand-navy">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img 
              src={STAGES[activeIdx].image} 
              alt="background" 
              className="w-full h-full object-cover filter grayscale brightness-[0.2]"
              style={{ objectPosition: STAGES[activeIdx].position }}
            />
            <div className="absolute inset-0 bg-brand-navy/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {STAGES.map((stage, i) => (
          <div
            key={stage.id}
            onMouseEnter={() => setActiveIdx(i)}
            className={cn(
              "relative flex-1 group transition-all duration-700 cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-0",
              activeIdx === i ? "md:flex-[1.5] bg-brand-navy/0" : "bg-black/20"
            )}
          >
            {/* Hover Highlight (Stroke) */}
            <div className={cn(
              "absolute inset-0 z-20 border-yellow-400 transition-all duration-300 pointer-events-none",
              activeIdx === i ? "border-[5px]" : "border-0"
            )} />

            {/* Image in Card */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={stage.image} 
                alt={stage.title} 
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  activeIdx === i ? "grayscale-0 scale-105 opacity-100" : "grayscale brightness-50 opacity-40 group-hover:opacity-60"
                )}
                style={{ objectPosition: stage.position }}
              />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-700",
                activeIdx === i ? "bg-transparent" : "bg-brand-navy/20"
              )} />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-30 pointer-events-none">
              <div className="flex flex-col h-full">
                <motion.div
                  initial={false}
                  animate={{ 
                    y: activeIdx === i ? 0 : 20,
                    opacity: activeIdx === i ? 1 : 0.7
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[11px] font-bold text-yellow-400 uppercase tracking-[2px] mb-2 block">
                    {stage.tag}
                  </span>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-bold text-white transition-all duration-500",
                    activeIdx === i ? "mb-6" : "mb-0"
                  )}>
                    {stage.title}
                  </h3>
                </motion.div>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-500 max-h-0",
                  activeIdx === i ? "max-h-[200px] opacity-100 mt-2" : "max-h-0 opacity-0"
                )}>
                  <p className="text-white/70 text-base md:text-lg mb-8 max-w-xs leading-relaxed font-medium">
                    {stage.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-yellow-400 text-[11px] font-bold uppercase tracking-[2px] hover:text-white transition-colors pointer-events-auto">
                    {stage.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
