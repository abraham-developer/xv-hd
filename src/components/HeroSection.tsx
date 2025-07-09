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

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="medium" />
      
      {/* Magical Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkle animations */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-quince-burgundy rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Additional Floating Elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-quince-gold/20 rounded-full blur-xl animate-float"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-quince-burgundy/10 rounded-full blur-2xl animate-float"
        style={{
          animationDelay: '1s',
          transform: `translateY(${scrollY * -0.2}px)`
        }}
      ></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Hannah Balloon Image */}
          <div className="relative mb-6">
            <img 
              src="/images/Hannah_hp.png" 
              alt="Hannah en globos"
              className="mx-auto max-w-md md:max-w-lg lg:max-w-xl w-full h-auto animate-float filter drop-shadow-2xl"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                filter: 'drop-shadow(0 0 20px rgba(139, 69, 19, 0.3))'
              }}
              onLoad={() => setIsLoaded(true)}
            />
            
            {/* Magical glow effect behind image */}
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-quince-gold/30 via-transparent to-transparent blur-3xl scale-110 animate-pulse"></div>
          </div>
          
          {/* Separator with decorative elements */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-quince-gold to-transparent flex-1 max-w-32"></div>
            <span className="font-serif text-2xl md:text-3xl text-quince-deep font-medium relative">
              Mis XV Años
              {/* Small sparkles around text */}
              <div className="absolute -top-2 -right-2 w-1 h-1 bg-quince-gold rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-quince-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-quince-gold to-transparent flex-1 max-w-32"></div>
          </div>
          
          {/* Invitation text */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium relative">
            Te invito a celebrar conmigo este momento tan especial
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg -z-10"></div>
          </p>
          
          {/* Countdown container with enhanced styling */}
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-quince-gold/20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-quince-gold/5 to-quince-burgundy/5"></div>
            
            <p className="text-quince-burgundy font-serif text-xl mb-4 relative z-10">
              15 de Marzo, 2025
            </p>
            <div className="relative z-10">
              <CountdownTimer targetDate="2025-03-15T19:00:00" />
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-quince-gold/30 rounded-tl-lg"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-quince-gold/30 rounded-tr-lg"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-quince-gold/30 rounded-bl-lg"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-quince-gold/30 rounded-br-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-quince-burgundy rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-quince-burgundy rounded-full mt-2 animate-pulse"></div>
          {/* Small sparkle on scroll indicator */}
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-quince-gold rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;