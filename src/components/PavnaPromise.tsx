import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function PavnaPromise() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[380px] md:min-h-[420px] flex items-center px-8 py-12 md:px-20 md:py-16">
          {/* Background Box with Clipping */}
          <div className="absolute inset-0 bg-brand-navy rounded-lg overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img 
                src="https://i.postimg.cc/FzsLgnHD/PIS-WEBSITE-Homepage-01-1.png" 
                alt="Library" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-[65%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-brand-yellow text-[10px] md:text-xs font-bold tracking-[0.2em] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              PAVNA PROMISE
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[32px] md:text-[48px] leading-[1.1] font-bold text-white mb-8 md:mb-10 tracking-tight"
            >
              Discover the <span className="text-brand-yellow">Future of</span> <br />
              Learning at Pavna
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <p className="text-white/80 text-[14px] leading-relaxed max-w-2xl font-normal opacity-90">
                At Pavna, education is a journey of becoming - of discovering the best version of oneself while learning to live with purpose and joy. We aspire to build global citizens who are rooted in values, are lifelong learners, and unafraid to #BeYourself
              </p>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group bg-brand-yellow hover:bg-white text-brand-navy px-6 py-3 rounded-full font-bold text-sm flex items-center gap-4 transition-all duration-300"
            >
              DOWNLOAD BROCHURE
              <div className="w-9 h-9 rounded-full bg-brand-navy group-hover:bg-brand-yellow flex items-center justify-center text-white group-hover:text-brand-navy transition-all duration-300">
                <ArrowDown className="w-4 h-4" />
              </div>
            </motion.button>
          </div>

          {/* Student Cutout Image */}
          <div className="absolute bottom-0 right-0 lg:right-[2%] w-[42%] h-[115%] hidden lg:block z-20 pointer-events-none">
            <motion.img 
              src="https://pavnaschool.com/wp-content/uploads/2026/04/Cutout-PNG-Image-Container-h-120-to-h-130-to-pop-out-the-top-%E2%86%92-Student-Cutout.webp" 
              alt="Pavna Student"
              className="w-full h-full object-contain object-bottom pointer-events-auto cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
