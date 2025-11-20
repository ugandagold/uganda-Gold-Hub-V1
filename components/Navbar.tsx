import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-serif font-bold tracking-tight">Uganda Gold Hub</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-stone-900 transition-colors">{link.name}</a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-2 text-xs font-medium hover:opacity-70" aria-label="Track Shipment">
            TRACK
            <Search size={14} aria-hidden="true" />
          </button>
          <span className="hidden md:block text-xs font-medium" aria-hidden="true">UG / INT</span>
          
          <a 
            href="https://wa.me/256761389093"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-stone-900 rounded-full text-xs font-bold uppercase hover:bg-stone-900 hover:text-white transition-colors" 
            aria-label="Contact via WhatsApp"
          >
            WhatsApp
          </a>

          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-50 border-t border-stone-200 p-6 md:hidden flex flex-col gap-4 shadow-xl" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-serif hover:text-amber-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;