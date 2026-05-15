import { motion } from 'motion/react';

const GUESTS = [
  {
    name: "Mary Kom",
    title: "Olympic Medalist; World Champion Boxer",
    image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/hjlfvs07nd8qj2p1ibmh",
    bgColor: "bg-[#717197]" // Approximating background color from screenshot
  },
  {
    name: "Sushil Kumar",
    title: "Olympic Medalist Wrestler",
    image: "https://img.olympics.com/images/image/private//t_s_w440/f_auto/primary/wlj4twjphrpfz5bqviyv",
    bgColor: "bg-[#F5E6D3]"
  },
  {
    name: "Sunita Rani",
    title: "International Athlete; Arjuna Awardee",
    image: "https://images.tribuneindia.com/cms/gall_content/2018/4/2018_4$largeimg02_Monday_2018_022503868.jpg",
    bgColor: "bg-[#D9D9E3]"
  },
  {
    name: "Dhanraj Pillay",
    title: "Former Captain, Indian Hockey Team",
    image: "https://images.news18.com/ibnlive/uploads/2021/08/1628216779_dhanraj-pillai.jpg",
    bgColor: "bg-[#EAE1D7]"
  }
];

export default function DistinguishedGuests() {
  return (
    <section className="py-24 bg-[#F8F8F8] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[24px] font-bold text-brand-navy mb-16 text-center"
        >
          Distinguished Guests At Pavna School Legacy
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUESTS.map((guest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/4.5] rounded-lg overflow-hidden group shadow-lg"
            >
              {/* Card Background Color */}
              <div className={`absolute inset-0 ${guest.bgColor} opacity-40`} />
              
              <img 
                src={guest.image}
                alt={guest.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if images aren't exactly at these paths
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(guest.name)}&background=random&size=512`;
                }}
              />

              {/* Bottom Gradient for Text legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {guest.name}
                </h3>
                <p className="text-brand-yellow text-xs font-medium leading-tight">
                  {guest.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
