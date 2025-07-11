import React, { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import FloralBackground from './FloralBackground';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="medium" />
      
      {/* Magical Sparkles - Más intensos */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkles principales */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-quince-burgundy rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        
        {/* Sparkles adicionales para más magia */}
        <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/6 left-2/3 w-1.5 h-1.5 bg-rose-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 left-1/5 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute bottom-1/2 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '4.5s' }}></div>
      </div>
      
      {/* Additional Floating Elements - Más elementos florales */}
      <div 
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-xl"
        style={{ 
          animation: 'gentle-float 10s ease-in-out infinite',
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-purple-300/20 to-quince-burgundy/20 rounded-full blur-2xl"
        style={{
          animation: 'gentle-float 12s ease-in-out infinite',
          animationDelay: '3s',
          transform: `translateY(${scrollY * -0.1}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/5 w-32 h-32 bg-gradient-to-br from-amber-300/25 to-orange-300/25 rounded-full blur-xl"
        style={{
          animation: 'gentle-float 14s ease-in-out infinite',
          animationDelay: '6s',
          transform: `translateY(${scrollY * 0.25}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Nombre HANNAH con letras individuales */}
          <div 
            className="relative mb-8"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              opacity: Math.max(0, 1 - scrollY / 300)
            }}
          >
            {/* Resplandor mágico detrás del nombre */}
            <div 
              className="absolute inset-0 -z-10 bg-gradient-radial from-quince-gold/40 via-pink-300/20 to-transparent blur-3xl scale-150"
              style={{
                animation: 'gentle-pulse 8s ease-in-out infinite',
                opacity: Math.max(0, 1 - scrollY / 250)
              }}
            ></div>
            <div 
              className="absolute inset-0 -z-10 bg-gradient-radial from-purple-300/30 via-rose-300/20 to-transparent blur-2xl scale-125" 
              style={{ 
                animation: 'gentle-pulse 8s ease-in-out infinite',
                animationDelay: '2s',
                opacity: Math.max(0, 1 - scrollY / 250)
              }}
            ></div>
            
            {/* Contenedor del nombre */}
            <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-4">
              {letters.map((letter, index) => (
                <div
                  key={index}
                  className="relative transform hover:scale-110 transition-all duration-700"
                  style={{
                    animation: `gentle-float 6s ease-in-out infinite`,
                    animationDelay: letter.delay,
                    transform: `translateY(${scrollY * 0.3}px)`,
                    opacity: Math.max(0, 1 - scrollY / 400)
                  }}
                >
                  {/* Resplandor individual para cada letra */}
                  <div className="absolute inset-0 -z-10 bg-gradient-radial from-quince-gold/50 to-transparent blur-lg scale-125 animate-pulse"></div>
                  
                  {/* Letra */}
                  <img 
                    src={letter.src} 
                    alt={letter.alt}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 filter drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-700"
                    style={{ 
                      filter: 'drop-shadow(0 0 15px rgba(139, 69, 19, 0.5)) drop-shadow(0 0 25px rgba(255, 192, 203, 0.3))',
                      animation: 'gentle-glow 4s ease-in-out infinite'
                    }}
                    onLoad={() => setIsLoaded(true)}
                  />
                  
                  {/* Sparkles alrededor de cada letra */}
                  <div className="absolute -top-2 -right-1 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3}s` }}></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3 + 0.5}s` }}></div>
                  <div className="absolute top-1/2 -left-2 w-1 h-1 bg-rose-300 rounded-full animate-ping" style={{ animationDelay: `${index * 0.3 + 1}s` }}></div>
                </div>
              ))}
            </div>
            
            {/* Elementos florales decorativos alrededor del nombre */}
            <div 
              className="absolute -top-6 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-300/60 to-rose-300/60 rounded-full blur-sm"
              style={{
                animation: 'gentle-float 8s ease-in-out infinite',
                opacity: Math.max(0, 1 - scrollY / 350)
              }}
            ></div>
            <div 
              className="absolute -bottom-6 right-1/4 w-6 h-6 bg-gradient-to-br from-purple-300/60 to-violet-300/60 rounded-full blur-sm" 
              style={{ 
                animation: 'gentle-float 8s ease-in-out infinite',
                animationDelay: '2s',
                opacity: Math.max(0, 1 - scrollY / 350)
              }}
            ></div>
            <div 
              className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-amber-300/60 to-orange-300/60 rounded-full blur-sm" 
              style={{ 
                animation: 'gentle-float 8s ease-in-out infinite',
                animationDelay: '4s',
                opacity: Math.max(0, 1 - scrollY / 350)
              }}
            ></div>
            <div 
              className="absolute top-1/2 -right-8 w-5 h-5 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full blur-sm" 
              style={{ 
                animation: 'gentle-float 8s ease-in-out infinite',
                animationDelay: '1s',
                opacity: Math.max(0, 1 - scrollY / 350)
              }}
            ></div>
          </div>
          
          {/* Separator con más elementos decorativos */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-quince-gold via-pink-300 to-transparent flex-1 max-w-32"></div>
            <span className="font-serif text-2xl md:text-3xl text-quince-deep font-medium relative">
              Mis XV Años
              {/* Sparkles más intensos alrededor del texto */}
              <div className="absolute -top-3 -right-3 w-2 h-2 bg-quince-gold rounded-full animate-ping"></div>
              <div className="absolute -bottom-3 -left-3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-0 -left-4 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 -right-4 w-1 h-1 bg-rose-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-pink-300 via-quince-gold to-transparent flex-1 max-w-32"></div>
          </div>
          
          {/* Invitation text con más efectos */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium relative">
            Te invito a celebrar conmigo este momento tan especial
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-pink-100/20 to-white/20 backdrop-blur-sm rounded-lg -z-10"></div>
            
            {/* Sparkles en el texto de invitación */}
            <div className="absolute -top-2 left-1/4 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute -bottom-2 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1.3s' }}></div>
          </p>
          
          {/* Countdown container con más efectos florales */}
          <div className="inline-block bg-gradient-to-br from-white/95 via-pink-50/90 to-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-quince-gold/30 relative overflow-hidden">
            {/* Background pattern mejorado */}
            <div className="absolute inset-0 bg-gradient-to-br from-quince-gold/10 via-pink-200/10 to-quince-burgundy/10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/5 via-rose-200/5 to-amber-200/5"></div>
            
            <p className="text-quince-burgundy font-serif text-xl mb-4 relative z-10">
              15 de Marzo, 2025
            </p>
            <div className="relative z-10">
              <CountdownTimer targetDate="2025-03-15T19:00:00" />
            </div>
            
            {/* Decorative corner elements mejorados */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-quince-gold/40 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-pink-300/40 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-purple-300/40 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-rose-300/40 rounded-br-lg"></div>
            
            {/* Sparkles en las esquinas */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-quince-gold rounded-full animate-ping"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator con más efectos */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-quince-burgundy rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-gradient-to-b from-quince-burgundy to-pink-400 rounded-full mt-2 animate-pulse"></div>
          {/* Sparkles en el scroll indicator */}
          <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-quince-gold rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      

      {/* CSS personalizado para animaciones suaves */}
      <style>{`
        @keyframes gentle-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-8px) rotate(1deg);
          }
          66% { 
            transform: translateY(-4px) rotate(-0.5deg);
          }
        }
        
        @keyframes gentle-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 15px rgba(139, 69, 19, 0.5)) drop-shadow(0 0 25px rgba(255, 192, 203, 0.3));
          }
          50% { 
            filter: drop-shadow(0 0 20px rgba(139, 69, 19, 0.7)) drop-shadow(0 0 35px rgba(255, 192, 203, 0.5)) drop-shadow(0 0 10px rgba(147, 51, 234, 0.3));
          }
        }
        
        @keyframes gentle-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;