import React, { useState, useEffect } from 'react';

interface LavenderCurtainProps {
  onOpen: () => void;
}

const LavenderCurtain: React.FC<LavenderCurtainProps> = ({ onOpen }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Solo configurar altura normal, sin scroll forzado
  useEffect(() => {
    document.body.style.height = 'auto';
    
    return () => {
      document.body.style.height = 'auto';
    };
  }, []);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !touchStart) return;
    
    const currentY = e.touches[0].clientY;
    const diff = touchStart - currentY;
    
    if (diff > 0) {
      const swipeProgress = Math.min(diff / 300, 1);
      setProgress(swipeProgress);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    if (progress > 0.6) {
      setIsOpened(true);
      setTimeout(() => onOpen(), 800);
    } else if (progress < 0.3) {
      setProgress(0);
    }
    
    setTouchStart(0);
  };

  // Click handler
  const handleClick = () => {
    if (!isDragging && progress < 0.1) {
      setProgress(1);
      setIsOpened(true);
      setTimeout(() => onOpen(), 800);
    }
  };

  // Si se abrió, no mostrar
  if (isOpened) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black" style={{ height: '100vh', width: '100vw' }}>
      {/* Área de interacción */}
      <div
        className="absolute inset-0 cursor-pointer"
        style={{ height: '100%', width: '100%' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        {/* Cortina Izquierda - Expandida completamente */}
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{
            transform: `translateX(-${progress * 50}%)`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-out',
            zIndex: 2
          }}
        >
          <img 
            src="/images/FlowerLeft.png"
            alt="Lavender Left"
            className="w-full h-full object-cover opacity-90"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Borde derecho suave para entrelazado */}
          <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black/30 to-transparent"></div>
        </div>

        {/* Cortina Derecha - Expandida completamente */}
        <div
          className="absolute top-0 right-0 w-full h-full overflow-hidden"
          style={{
            transform: `translateX(${progress * 50}%)`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-out',
            zIndex: 1
          }}
        >
          <img 
            src="/images/FlowersRight.png"
            alt="Lavender Right"
            className="w-full h-full object-cover opacity-90"
            style={{
              transform: 'scaleX(-1)'
            }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Borde izquierdo suave para entrelazado */}
          <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/30 to-transparent"></div>
        </div>

        {/* Contenido Central */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          style={{ 
            opacity: Math.max(0, 1 - progress * 1.5),
            zIndex: 10
          }}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 md:mb-6" 
              style={{
                textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 0px 2px 0px #000, 2px 0px 0px #000, 0px -2px 0px #000, -2px 0px 0px #000, 4px 4px 8px rgba(0,0,0,0.8)'
              }}>
            Hannah
          </h1>
          <div className="flex items-center justify-center space-x-3 md:space-x-6 mb-4 md:mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-12 md:w-24"></div>
            <span className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-200"
                  style={{
                    textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 2px 2px 4px rgba(0,0,0,0.8)'
                  }}>
              XV Años
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent w-12 md:w-24"></div>
          </div>
          <p className="text-purple-300 text-lg md:text-xl lg:text-2xl px-4"
             style={{
               textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 2px 2px 4px rgba(0,0,0,0.6)'
             }}>
            Una celebración mágica te espera
          </p>
        </div>

        {/* Instrucciones */}
        <div 
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
          style={{ 
            opacity: Math.max(0, 1 - progress * 2),
            zIndex: 10
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl border border-purple-300/50 mb-4">
            <p className="text-purple-900 font-bold text-lg">Desliza hacia arriba</p>
          </div>
          
          <div className="flex justify-center">
            {/* Solo indicador de deslizar */}
            <div className="animate-bounce">
              <div className="w-10 h-16 border-3 border-white rounded-full mx-auto flex justify-center bg-purple-900/30 backdrop-blur-sm">
                <div className="w-2 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
              </div>
              <p className="text-white text-sm mt-2 font-medium"
                 style={{
                   textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'
                 }}>
                Desliza hacia arriba
              </p>
            </div>
          </div>
        </div>

        {/* Barra de progreso */}
        {progress > 0.05 && (
          <div 
            className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div className="w-80 h-4 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full transition-all duration-300 shadow-lg"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="text-white text-sm text-center mt-2 font-medium"
               style={{
                 textShadow: '1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000'
               }}>
              {Math.round(progress * 100)}% desentreleazada
            </p>
          </div>
        )}

        {/* Partículas en el centro */}
        {progress > 0.3 && (
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-purple-300 rounded-full animate-ping"
                style={{
                  left: `${48 + Math.random() * 4}%`,
                  top: `${20 + i * 10 + Math.random() * 5}%`,
                  animationDelay: `${i * 0.3}s`,
                  opacity: progress
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LavenderCurtain;