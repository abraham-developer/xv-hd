import React, { useState } from 'react';
import FloralBackground from './FloralBackground';

const ImageCarousel = () => {
  // Imágenes locales del proyecto (HD1 a HD9)
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
  const [touchStart, setTouchStart] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch handlers para swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !touchStart) return;
    
    const currentX = e.touches[0].clientX;
    const diff = touchStart - currentX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) { // 50px mínimo para cambiar
      if (dragOffset > 0) {
        goToNext(); // Swipe izquierda = siguiente
      } else {
        goToPrevious(); // Swipe derecha = anterior
      }
    }
    
    setDragOffset(0);
    setTouchStart(0);
  };

  // Mouse handlers para desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !touchStart) return;
    
    const diff = touchStart - e.clientX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    setDragOffset(0);
    setTouchStart(0);
  };

  // Click para cambiar imagen
  const handleClick = () => {
    if (!isDragging && Math.abs(dragOffset) < 10) {
      goToNext();
    }
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
          {/* Indicador simple de swipe - solo manos */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center space-x-2 animate-pulse">
              <div className="text-2xl animate-bounce" style={{ animationDelay: '0s' }}>👈</div>
              <div className="text-lg text-quince-burgundy font-medium">Desliza</div>
              <div className="text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>👉</div>
            </div>
          </div>

          {/* Stack de Fotos */}
          <div 
            className="relative h-[350px] md:h-[450px] lg:h-[500px] mx-auto max-w-lg cursor-pointer select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={handleClick}
            style={{ touchAction: 'pan-y' }} // Permite scroll vertical pero no horizontal
          >

            {/* Stack de imágenes */}
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;
              
              let zIndex = 1;
              let transform = 'translateX(-50%) translateY(-50%)';
              let opacity = 0;
              let scale = 0.85;
              let rotation = 0;
              
              if (isActive) {
                zIndex = 10;
                opacity = 1;
                scale = 1;
                transform = `translateX(-50%) translateY(-50%) translateX(${-dragOffset * 0.3}px) rotate(${dragOffset * 0.02}deg)`;
              } else if (isPrevious) {
                zIndex = 5;
                opacity = 0.6;
                scale = 0.95;
                rotation = -3;
                transform = `translateX(-50%) translateY(-50%) rotate(${rotation}deg) translateX(-20px) translateY(10px)`;
              } else if (isNext) {
                zIndex = 5;
                opacity = 0.6;
                scale = 0.95;
                rotation = 3;
                transform = `translateX(-50%) translateY(-50%) rotate(${rotation}deg) translateX(20px) translateY(10px)`;
              } else {
                // Imágenes más atrás en el stack
                zIndex = 2;
                opacity = 0.3;
                scale = 0.9;
                rotation = (index % 2 === 0 ? -2 : 2);
                transform = `translateX(-50%) translateY(-50%) rotate(${rotation}deg) translateY(20px)`;
              }

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-80 h-96 md:w-96 md:h-[450px] transition-all duration-500 ease-out"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  {/* Marco de foto tipo Polaroid */}
                  <div 
                    className="w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
                    style={{
                      transform: `scale(${scale})`,
                      transition: isDragging ? 'none' : 'all 0.5s ease-out'
                    }}
                  >
                    {/* Imagen */}
                    <div className="w-full h-5/6 overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    
                    {/* Área blanca inferior tipo Polaroid */}
                    <div className="h-1/6 bg-white flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 text-sm font-handwriting">
                          Momento {index + 1}
                        </p>
                      </div>
                    </div>
                    
                    {/* Sombra adicional para profundidad */}
                    <div className="absolute inset-0 shadow-inner pointer-events-none rounded-lg"></div>
                  </div>
                </div>
              );
            })}

            {/* Contador e indicador */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-quince-rose/30">
                <div className="flex items-center space-x-3">
                  <span className="text-quince-burgundy font-medium text-sm">
                    <span className="text-quince-gold font-bold">{currentIndex + 1}</span>
                    <span className="mx-1">de</span>
                    <span className="font-bold">{images.length}</span>
                  </span>
                  
                  {/* Puntos indicadores */}
                  <div className="flex space-x-1">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-quince-gold scale-125' 
                            : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de swipe */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-15 opacity-30">
              <div className="animate-pulse">
                <svg className="w-6 h-6 text-quince-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-15 opacity-30">
              <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>
                <svg className="w-6 h-6 text-quince-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;