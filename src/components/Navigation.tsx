import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'evento', label: 'Mensaje de padres' },
    { id: 'galeria', label: 'Galería' },
    { id: 'regalos', label: 'Mesa de regalos' },
    { id: 'ubicacion', label: 'Ubicación' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'confirmacion', label: 'Confirmación' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-script text-2xl font-bold text-quince-burgundy">
            Hannah XV
          </div>
          
          {/* Menu Button - Visible en todos los dispositivos */}
          <button
            className="z-10 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 
              <X size={24} className="text-gray-700" /> : 
              <Menu size={24} className="text-gray-700" />
            }
          </button>
        </div>
        
        {/* Menu Dropdown - Desplegable en todos los dispositivos */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-quince-burgundy hover:bg-quince-blush/20 transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;