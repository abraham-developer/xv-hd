import React, { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import FloralBackground from './FloralBackground';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Letras del nombre HANNAH
  const letters = [
    { src: '/images/HR.png', alt: 'H', delay: '0s' },
    { src: '/images/AR.png', alt: 'A', delay: '0.2s' },
    { src: '/images/NR.png', alt: 'N', delay: '0.4s' },
    { src: '/images/NR.png', alt: 'N', delay: '0.6s' },
    { src: '/images/AR.png', alt: 'A', delay: '0.8s' },
    { src: '/images/HR.png', alt: 'H', delay: '1s' }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50/30 to-white px-4 py-8">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="light" />
      
      {/* Sparkles optimizados - reducidos para mejor rendimiento */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-quince-burgundy rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Elementos flotantes simplificados */}
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-xl opacity-60"
        style={{ 
          animation: 'gentle-float 10s ease-in-out infinite',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-300/15 to-quince-burgundy/15 rounded-full blur-2xl opacity-50"
        style={{
          animation: 'gentle-float 12s ease-in-out infinite',
          animationDelay: '3s',
          transform: `translateY(${scrollY * -0.05}px)`
        }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="animate-fade-in">
          {/* Nombre HANNAH optimizado */}
          <div 
            className="relative mb-4 md:mb-6"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 50)}px)`,
              opacity: Math.max(0.3, 1 - scrollY / 400)
            }}
          >
            {/* Resplandor simplificado */}
            <div 
              className="absolute inset-0 -z-10 bg-gradient-radial from-quince-gold/30 via-pink-300/15 to-transparent blur-2xl scale-110"
              style={{
                animation: 'gentle-pulse 6s ease-in-out infinite'
              }}
            ></div>
            
            {/* Contenedor del nombre responsivo - MÁS COMPACTO */}
            <div className="flex items-center justify-center space-x-0.5 sm:space-x-1 md:space-x-2 mb-3">
              {letters.map((letter, index) => (
                <div
                  key={index}
                  className="relative transform hover:scale-105 transition-all duration-500"
                  style={{
                    animation: `gentle-float 6s ease-in-out infinite`,
                    animationDelay: letter.delay
                  }}
                >
                  {/* Letra con tamaños MÁS PEQUEÑOS */}
                  <img 
                    src={letter.src} 
                    alt={letter.alt}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-500"
                    style={{ 
                      filter: 'drop-shadow(0 0 10px rgba(139, 69, 19, 0.4)) drop-shadow(0 0 20px rgba(255, 192, 203, 0.2))'
                    }}
                    onLoad={() => setIsLoaded(true)}
                    loading="eager"
                  />
                  
                  {/* Sparkles reducidos alrededor de letras */}
                  <div className="absolute -top-1 -right-1 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3}s` }}></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Separator optimizado - MÁS PEQUEÑO */}
          <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-4 md:mb-5">
            <div className="h-px bg-gradient-to-r from-transparent via-quince-gold to-transparent flex-1 max-w-16 sm:max-w-20"></div>
            <span className="font-serif text-lg sm:text-xl md:text-2xl text-quince-deep font-medium relative">
              Mis XV Años
              <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-quince-gold rounded-full animate-ping"></div>
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-quince-gold to-transparent flex-1 max-w-16 sm:max-w-20"></div>
          </div>
          
          {/* Texto de invitación simplificado - MÁS PEQUEÑO */}
          <div className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-5 font-medium relative max-w-xs sm:max-w-sm mx-auto">
            Ven a celebrar conmigo
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-pink-100/10 to-white/10 backdrop-blur-sm rounded-lg -z-10"></div>
          </div>
          
          {/* Countdown container MÁS COMPACTO */}
          <div className="inline-block bg-gradient-to-br from-white/90 via-pink-50/80 to-white/90 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl border border-quince-gold/20 relative overflow-hidden max-w-xs sm:max-w-sm mx-auto">
            {/* Background simplificado */}
            <div className="absolute inset-0 bg-gradient-to-br from-quince-gold/5 via-pink-200/5 to-quince-burgundy/5"></div>
            
            <p className="text-quince-burgundy font-serif text-base md:text-lg mb-2 md:mb-3 relative z-10">
              27 de septiembre, 2025
            </p>
            <div className="relative z-10 mb-2">
              <CountdownTimer targetDate="2025-09-27T15:30:00" />
            </div>
            
            {/* Información del evento - MÁS PEQUEÑA */}
            
            
            {/* Elementos decorativos de esquina MÁS PEQUEÑOS */}
            <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-quince-gold/30 rounded-tl-lg"></div>
            <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-pink-300/30 rounded-tr-lg"></div>
            <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-quince-gold/30 rounded-bl-lg"></div>
            <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-pink-300/30 rounded-br-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator MÁS PEQUEÑO */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-4 h-6 md:w-5 md:h-8 border-2 border-quince-burgundy rounded-full flex justify-center relative">
          <div className="w-1 h-2 bg-gradient-to-b from-quince-burgundy to-pink-400 rounded-full mt-1 animate-pulse"></div>
        </div>
      </div>

      {/* CSS optimizado para animaciones suaves */}
      <style>{`
        @keyframes gentle-float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-6px);
          }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.03);
            opacity: 0.7;
          }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;