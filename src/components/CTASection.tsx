import { FC } from 'react';

const CTASection: FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-navy">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          className="w-full h-full object-cover opacity-20" 
          alt="Campus" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/40 mix-blend-multiply"></div>
      </div>

      {/* Floating Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/30 rounded-full blur-[120px] z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-sky/20 rounded-full blur-[120px] z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[8px] p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden group">
          {/* Inner glow hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="w-full lg:w-6/12 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center space-x-2 py-1.5 px-5 border border-brand-yellow/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-yellow mb-8 bg-brand-navy/50 shadow-md backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse"></span>
              <span>Admissions Open 2026-27</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Begin Your Journey <br />at <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange drop-shadow-lg">Pavna</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 font-medium mb-0 leading-relaxed max-w-md mx-auto lg:mx-0">
              Step into a world of limitless possibilities. Join a vibrant community of scholars, innovators, and future leaders today.
            </p>
          </div>

          <div className="w-full lg:w-5/12 flex flex-col space-y-5 relative z-10">
            {/* Apply Now Premium Card Button */}
            <a href="#" className="group/btn relative flex items-center justify-between bg-brand-orange text-white p-5 md:p-6 rounded-[8px] hover:bg-brand-darkOrange transition-all duration-300 shadow-glow transform hover:-translate-y-1 overflow-hidden border border-brand-orange/50 hover:border-white/20">
              <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover/btn:w-full"></div>
              <div className="flex flex-col text-left relative z-10">
                <span className="text-sm md:text-base font-bold uppercase tracking-widest mb-1">Apply Now</span>
                <span className="text-xs text-white/80 font-medium">Start your application process</span>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative z-10 group-hover/btn:bg-white group-hover/btn:text-brand-orange transition-colors duration-300 shadow-sm">
                <i className="fas fa-arrow-right transform -rotate-45 group-hover/btn:rotate-0 group-hover/btn:-translate-y-1 transition-transform duration-300"></i>
              </div>
            </a>

            {/* Download Brochure Premium Card Button */}
            <a href="#" className="group/btn relative flex items-center justify-between bg-white/5 border border-white/10 text-white p-5 md:p-6 rounded-[8px] hover:border-brand-sky hover:bg-brand-sky/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md">
              <div className="flex flex-col text-left">
                <span className="text-sm md:text-base font-bold uppercase tracking-widest mb-1">Download Brochure</span>
                <span className="text-xs text-gray-400 font-medium group-hover/btn:text-brand-sky transition-colors">Explore our curriculum & campus</span>
              </div>
              <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-full flex items-center justify-center group-hover/btn:border-brand-sky group-hover/btn:bg-brand-sky group-hover/btn:text-white transition-colors duration-300">
                <i className="fas fa-download transform group-hover/btn:-translate-y-1 transition-transform duration-300"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
