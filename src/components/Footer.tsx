import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="relative bg-brand-navy text-gray-300 pt-24 pb-10 text-xs font-normal overflow-hidden z-20 mt-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 banner-pattern opacity-10 pointer-events-none"></div>
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-sky"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="mb-6 bg-white inline-block p-3.5 rounded-[4px] border border-white/10 shadow-lg">
              <img src="https://i.postimg.cc/bvqjtjRQ/logo.png" alt="Pavna School Logo" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium text-[13px] pr-4">Empowering future leaders through holistic education, dynamic global curriculum, and unwavering core values.</p>
            
            {/* Campus Addresses & Contacts */}
            <div className="space-y-6 mb-8">
              {/* Sasni */}
              <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                <div className="leading-relaxed">
                  <strong className="text-white block mb-0.5">Pavna International School, Sasni</strong>
                  Pavna International School, Aligarh–Agra Highway, Sasni, Hathras, Uttar Pradesh – 204216, India
                  <div className="mt-1 text-brand-sky font-bold flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 82669 54007
                  </div>
                </div>
              </div>
              {/* Hathras */}
              <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                <div className="leading-relaxed">
                  <strong className="text-white block mb-0.5">Pavna School, Hathras</strong>
                  8 Km Milestone on SH-33, Hathras–Mathura Road, Hathras – 204213 (U.P.), India
                  <div className="mt-1 text-brand-sky font-bold flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 8006409329
                  </div>
                </div>
              </div>
              {/* Aligarh */}
              <div className="flex items-start space-x-3 text-gray-400 text-[12px]">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1 flex-shrink-0"></i>
                <div className="leading-relaxed">
                  <strong className="text-white block mb-0.5">Pavna School, Aligarh</strong>
                  Agra Highway, Near Gyan Mahavidyalaya, Aligarh – 202001, Uttar Pradesh, India
                  <div className="mt-1 text-brand-sky font-bold flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-[10px]"></i> +91 8006409329
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="inline-flex items-center text-brand-yellow hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] group">
              Get Directions <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
              <span className="w-2 h-2 bg-brand-orange rounded-full mr-3 shadow-glow"></span> The School
            </h4>
            <ul className="space-y-4 text-[13px]">
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Policies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-orange mr-0 group-hover:mr-2">-</span> Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
              <span className="w-2 h-2 bg-brand-sky rounded-full mr-3 shadow-[0_0_10px_rgba(0,183,221,0.5)]"></span> Admissions
            </h4>
            <ul className="space-y-4 text-[13px]">
              <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Apply Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Fee Structure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Scholarships</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> Campus Tour</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-sky transition-all duration-300 flex items-center group"><span className="w-0 group-hover:w-2 transition-all duration-300 overflow-hidden text-brand-sky mr-0 group-hover:mr-2">-</span> FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[11px] text-white flex items-center">
              <span className="w-2 h-2 bg-brand-yellow rounded-full mr-3 shadow-[0_0_10px_rgba(255,202,5,0.5)]"></span> Stay Connected
            </h4>
            <p className="text-gray-400 mb-5 text-[13px] leading-relaxed">Subscribe to our newsletter for the latest updates, event details, and school news.</p>
            
            <form className="relative mb-8 group" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" className="w-full bg-white/5 border border-white/10 rounded-[4px] py-4 pl-6 pr-32 focus:outline-none focus:border-brand-orange text-white placeholder-gray-500 font-medium transition-all duration-300 focus:bg-white/10 shadow-inner" />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-orange hover:bg-brand-darkOrange text-white rounded-[4px] px-6 transition-all duration-300 uppercase text-[10px] font-bold tracking-widest shadow-glow hover:shadow-lg transform group-hover:scale-[1.02]">Join</button>
            </form>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-youtube"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 font-medium text-[10px] uppercase tracking-widest">
          <p>&copy; 2026 Pavna School. All rights reserved.</p>
          <div className="space-x-5 mt-5 md:mt-0 flex items-center">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-brand-yellow transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
