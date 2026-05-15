import { motion } from 'motion/react';
import { BookOpen, Smartphone, Target, Lightbulb, Users, Globe, Heart, Brain, Flag } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AboutSection() {
  const stats = [
    { icon: <BookOpen className="text-brand-orange" size={24} />, title: "Cambridge", subtitle: "Curriculum" },
    { icon: <Users className="text-brand-sky" size={24} />, title: "Global", subtitle: "Faculty" },
    { icon: <Smartphone className="text-brand-navy" size={24} />, title: "Apple", subtitle: "Enabled campus" },
    { icon: <Target className="text-brand-orange" size={24} />, title: "Holistic", subtitle: "Development" },
  ];

  const highlights = [
    {
      title: "Our vision",
      description: "To shape well-rounded individuals, disciplined, culturally rooted, and morally grounded who contribute meaningfully to society and are equipped to lead in an ever-changing world.",
      tags: [
        { name: "Character first", icon: <Users size={14} /> },
        { name: "Global mindset", icon: <Globe size={14} /> },
        { name: "Moral values", icon: <Heart size={14} /> }
      ],
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      color: "brand-sky"
    },
    {
      title: "Our mission",
      description: "To build confident, technology-ready young people who are lifelong learners and changemakers, empowered to face global challenges with integrity, curiosity, and purpose.",
      tags: [
        { name: "Critical thinking", icon: <Brain size={14} /> },
        { name: "Lifelong learning", icon: <BookOpen size={14} /> },
        { name: "Global leadership", icon: <Flag size={14} /> }
      ],
      icon: <Target className="w-8 h-8 text-white" />,
      color: "brand-orange"
    }
  ];

  return (
    <section id="about-pavna" className="bg-[#FDFCFB] py-24 px-8 md:px-16 font-gill overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-orange"></div>
              <span className="text-[11px] leading-[28px] tracking-[1.65px] uppercase font-bold text-brand-orange">About Pavna International School</span>
            </div>
            
            <h2 className="text-[48px] leading-[56px] tracking-[-1.2px] font-bold text-brand-navy mb-8">
              A Legacy of Learning, <br />
              A Future of Possibilities
            </h2>
            
            <p className="text-gray-600 text-[16px] leading-[24px] font-medium mb-12 max-w-2xl">
              For nearly three decades, Pavna has been quietly raising a different kind of student, one who thinks independently, leads with empathy, and walks into the world ready for it. As one of the most respected international curriculum schools in Uttar Pradesh, we blend rigorous academics with the warmth of a true school community.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="group p-5 bg-white border border-gray-100 rounded-[4px] hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                  <div className="text-sm font-bold text-brand-navy mb-0.5">{stat.title}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-sky/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative rounded-lg overflow-hidden shadow-[0_30px_60px_-15px_rgba(32,26,91,0.2)] aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img 
                src="https://i.postimg.cc/sDX0mLp4/DSC05807-JPG.jpg" 
                alt="Pavna Campus Life" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                  {[
                    "https://plus.unsplash.com/premium_photo-1682089936169-d8b131f87407?q=80&w=1470&auto=format&fit=crop",
                    "https://plus.unsplash.com/premium_photo-1723291325908-1bde6fe9bc60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    "https://plus.unsplash.com/premium_photo-1682089792384-a73f54b564a0?q=80&w=1470&auto=format&fit=crop"
                  ].map((url, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy overflow-hidden bg-brand-navy">
                      <img src={url} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  </div>
                  <span className="text-sm font-medium">Joined by 2000+ Alumni</span>
                </div>
                <div className="text-3xl font-bold">Reshaping Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative group p-12 bg-white border border-gray-100 rounded-lg transition-all duration-500 overflow-hidden"
            >
              {/* Decorative element */}
              <div className={cn(
                "absolute top-0 right-0 w-48 h-48 -mr-16 -mt-16 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500",
                item.color === "brand-sky" ? "bg-brand-sky" : "bg-brand-orange"
              )}></div>

              <div className="flex flex-col h-full">
                <div className="flex items-center gap-6 mb-10">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6",
                    item.color === "brand-sky" ? "bg-brand-sky text-white" : "bg-brand-orange text-white"
                  )}>
                    {item.icon}
                  </div>
                  <h3 className="text-[30px] leading-tight font-medium text-brand-navy">{item.title}</h3>
                </div>

                <p className="text-gray-500 text-[16px] leading-[24px] font-medium mb-12">
                  {item.description}
                </p>

                <div className="mt-auto pt-8 border-t border-gray-50 flex gap-3 overflow-hidden">
                  {item.tags.map((tag, j) => (
                    <div key={j} className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-[4px] text-xs font-bold text-brand-navy group-hover:bg-white transition-all duration-300 whitespace-nowrap">
                      <div className={cn("w-4 h-4 flex items-center justify-center rounded-md", item.color === "brand-sky" ? "text-brand-sky" : "text-brand-orange")}>
                        {tag.icon}
                      </div>
                      {tag.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
