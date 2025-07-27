import React, { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import ImageCarousel from '@/components/ImageCarousel';
import ImportantNotes from '@/components/ImportantNotes';
import LocationSection from '@/components/LocationSection';
import ScheduleSection from '@/components/ScheduleSection';
import RSVPSection from '@/components/RSVPSection';
import GiftRegistrySection from '@/components/TableRgls';

import Footer from '@/components/Footer';
import { Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
        
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Función para toggle de la música - Corregida
  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(error => {
          console.log('Error reproduciendo audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  };

  // Manejadores de eventos del audio
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
      >
        {/* Coloca tu archivo de música aquí */}
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        <source src="/music/background-music.ogg" type="audio/ogg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {/* Botón de Control de Música con señalización - Parte inferior derecha */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Señalización "Escucha mi canción" */}
        <div className="absolute -top-16 -left-32 bg-white/95 backdrop-blur-sm text-quince-burgundy px-4 py-2 rounded-full shadow-lg border border-quince-rose/30 text-sm font-medium whitespace-nowrap animate-pulse">
          🎵 Escucha mi canción
          {/* Flecha apuntando al botón */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/95"></div>
        </div>
        
        {/* Botón de música */}
        <button
          onClick={toggleMusic}
          className="bg-quince-burgundy hover:bg-quince-burgundy/80 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative overflow-hidden"
          aria-label="Controlar música"
        >
          {/* Efecto de ondas cuando está sonando */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full bg-quince-rose/30 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-quince-rose/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          )}
          
          {/* Iconos CORREGIDOS */}
          <div className="relative z-10">
            {isPlaying ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>

      {/* Componentes de la página */}
      <Navigation />
      <HeroSection />
      <EventSection />
      <ImageCarousel />
      <ImportantNotes />
      <GiftRegistrySection />
      
      <LocationSection />
      <ScheduleSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;