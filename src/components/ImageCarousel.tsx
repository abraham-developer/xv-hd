import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import FloralBackground from './FloralBackground';

const ImageCarousel = () => {
  // Imágenes locales del proyecto (HD1 a HD9)
  // Ubicadas en /public/images/
  const images = [
    {
      url: "/images/HD1.jpeg",
      alt: "Quinceañera elegante",
      caption: ""
    },
    {
      url: "/images/HD2.jpeg",
      alt: "Vestido de quinceañera", 
      caption: ""
    },
    {
      url: "/images/HD3.jpeg",
      alt: "Decoración elegante",
      caption: ""
    },
    {
      url: "/images/HD4.jpeg",
      alt: "Celebración quinceañera",
      caption: ""
    },
    {
      url: "/images/HD9.jpeg",
      alt: "Celebración nocturna",
      caption: ""
    },
    {
      url: "/images/HD5.jpeg",
      alt: "Fiesta quinceañera",
      caption: ""
    },
    {
      url: "/images/HD6.jpeg",
      alt: "Quinceañera con familia",
      caption: ""
    },
    {
      url: "/images/HD7.jpeg",
      alt: "Decoración de mesa",
      caption: ""
    },
    {
      url: "/images/HD8.jpeg",
      alt: "Quinceañera bailando",
      caption: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Cambiado a 5 segundos para mejor visualización

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const goToSlide = (index: number) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setTimeout(() => setIsLoading(false), 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section id="galeria" className="relative py-8 md:py-16 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="peonies" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-quince-burgundy mb-4 drop-shadow-lg">
            Galería de Momentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-quince-gold via-quince-rose to-quince-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Cada imagen cuenta una historia, cada momento es un tesoro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contenedor principal con efecto glassmorphism */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 md:p-3">
            
            {/* Imagen principal */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden">
              <div className={`absolute inset-0 transition-all duration-500 ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}>
                <img
                  src={images[currentIndex].url}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-900 via-black to-gray-800 transition-all duration-700 ease-in-out"
                  onError={(e) => {
                    console.error(`Error loading image: ${images[currentIndex].url}`);
                  }}
                />
              </div>
              
              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none"></div>
              
              {/* Esquinas decorativas */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 md:border-l-3 border-t-2 md:border-t-3 border-quince-gold rounded-tl-lg opacity-80"></div>
              <div className="absolute top-2 md:top-4 right-2 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 md:border-r-3 border-t-2 md:border-t-3 border-quince-gold rounded-tr-lg opacity-80"></div>
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 md:border-l-3 border-b-2 md:border-b-3 border-quince-gold rounded-bl-lg opacity-80"></div>
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 md:border-r-3 border-b-2 md:border-b-3 border-quince-gold rounded-br-lg opacity-80"></div>
            </div>

            {/* Botones de navegación mejorados */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-md hover:bg-white/40 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-quince-gold transition-colors" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-md hover:bg-white/40 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-white group-hover:text-quince-gold transition-colors" />
            </button>

            {/* Botón play/pause */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-3 md:top-6 right-3 md:right-6 bg-white/25 backdrop-blur-md hover:bg-white/40 rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-quince-gold transition-colors" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-quince-gold transition-colors" />
              )}
            </button>

            {/* Indicadores de puntos mejorados */}
            <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-quince-gold scale-125 shadow-lg' 
                      : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                  }`}
                />
              ))}
            </div>

            {/* Barra de progreso */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div 
                className="h-full bg-gradient-to-r from-quince-gold to-quince-rose transition-all duration-300"
                style={{ 
                  width: `${((currentIndex + 1) / images.length) * 100}%`,
                  transition: 'width 0.5s ease-in-out'
                }}
              ></div>
            </div>
          </div>

          {/* Miniaturas mejoradas */}
          <div className="flex justify-center mt-3 md:mt-6 space-x-2 md:space-x-3 overflow-x-auto pb-2 md:pb-3 px-2 md:px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-14 h-10 md:w-18 md:h-14 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 ${
                  index === currentIndex 
                    ? 'border-quince-gold shadow-xl scale-110 ring-1 ring-quince-gold/50' 
                    : 'border-white/30 hover:border-quince-rose/60 shadow-md'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                />
                
                {/* Overlay cuando está seleccionada */}
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-quince-gold/20 flex items-center justify-center">
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Contador elegante */}
          <div className="text-center mt-2 md:mt-4 mb-2">
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 text-quince-burgundy font-medium text-sm md:text-base">
              <span className="text-quince-gold font-bold">{currentIndex + 1}</span>
              <span className="mx-1 md:mx-2">de</span>
              <span className="font-bold">{images.length}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;