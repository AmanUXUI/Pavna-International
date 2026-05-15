import { useState, useEffect } from 'react';
import { CONTENT } from '../constants';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-12 border-b border-black/5",
        isScrolled ? "bg-white shadow-sm py-3" : "bg-white py-4"
      )}
      id="navbar"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img 
            src="https://pavnaschoolaligarh.com/wp-content/uploads/2026/04/Link-Logo-%E2%86%92-Pavna-School-Logo.webp" 
            alt="Pavna School Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7 h-full">
          {CONTENT.navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.hasDropdown ? setActiveDropdown(link.name) : setActiveDropdown(null)}
            >
              <a 
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-[12px] font-bold transition-colors py-4",
                  activeDropdown === link.name ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={12} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
              </a>

              {/* Desktop Dropdown Content */}
              <AnimatePresence>
                {activeDropdown === link.name && link.hasDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 bg-white border border-black/5 shadow-2xl hidden lg:block rounded-2xl overflow-hidden mt-0"
                    style={{ 
                      width: 'max-content',
                      minWidth: '320px'
                    }}
                  >
                    <div className="flex flex-col">
                      <div className="flex flex-col gap-0.5 p-5">
                        {link.dropdownItems?.map((item) => (
                          <a 
                            key={item} 
                            href="#" 
                            className="text-brand-navy hover:text-brand-orange text-[13px] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-between group/link"
                          >
                            {item}
                            <div className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-black/5 flex flex-col items-center gap-3 bg-gray-50/50 p-6">
                        <div className="w-48 aspect-square rounded-xl overflow-hidden bg-white shadow-md border border-black/5 group/img">
                          <img 
                             src={link.image} 
                             alt={link.name} 
                             className="w-full h-full object-cover grayscale-[10%] transition-transform duration-700 group-hover/img:scale-110"
                             referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <p className="text-[9px] uppercase tracking-widest font-bold text-brand-navy/50">
                            Discover {link.name}
                          </p>
                          <div className="w-6 h-[1.5px] bg-brand-orange rounded-full" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block shrink-0">
          <button className="flex items-center gap-2 bg-brand-orange text-white px-6 py-2.5 rounded-[4px] text-[13px] font-bold shadow-md hover:opacity-90 transition-all">
            <User size={16} />
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-brand-navy" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>



      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-brand-black border-t border-gray-100 shadow-xl p-6 lg:hidden max-h-[80vh] overflow-y-auto">
          {CONTENT.navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <button 
                className="flex items-center justify-between text-lg font-medium text-brand-navy hover:text-brand-orange py-3"
                onClick={() => link.hasDropdown ? setActiveDropdown(activeDropdown === link.name ? null : link.name) : setMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={20} className={cn("transition-transform", activeDropdown === link.name ? "rotate-180" : "")} />}
              </button>
              
              {link.hasDropdown && activeDropdown === link.name && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="pl-4 flex flex-col gap-2 border-l-2 border-brand-orange/20 mb-2"
                >
                  {link.dropdownItems?.map(item => (
                    <a key={item} href="#" className="py-2 text-brand-navy/70 text-sm hover:text-brand-orange">
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
          <button className="flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-4 rounded-xl font-bold mt-4">
            <User size={20} />
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
