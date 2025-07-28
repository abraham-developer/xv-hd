import React from 'react';
import { Shirt, Clock } from 'lucide-react';
import FloralBackground from './FloralBackground';

const ImportantNotes = () => {
  const notes = [
    {
      icon: Shirt,
      title: "Dress Code",
      content: "Formal con un toque cool — ¡ven con tus mejores tenis! (Sí, es obligatorio) 👟👗",
      emoji: "👗"
    },
    {
      icon: Clock,
      title: "Puntualidad",
      content: "¡Llegar tarde no es cool! La puntualidad es parte del estilo 😎",
      emoji: "⏰"
    }
  ];

  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Floral Background */}
      <div className="absolute inset-0 bg-quince-burgundy"></div>
      <FloralBackground variant="lilies" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h2 className="font-script text-3xl md:text-4xl mb-3 text-white drop-shadow-lg">
            Notas Importantes
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-quince-gold via-quince-rose to-quince-gold mx-auto mb-3 rounded-full"></div>
          <p className="text-sm md:text-base text-quince-blush max-w-xl mx-auto">
            Información importante para que disfrutes al máximo esta celebración
          </p>
        </div>

        {/* Grid compacto para 2 elementos */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {notes.map((note, index) => {
            const IconComponent = note.icon;
            return (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-lg"
              >
                {/* Contenedor del icono compacto */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-quince-gold/30 to-quince-rose/30 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 relative">
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-quince-gold drop-shadow-lg" />
                  
                  {/* Emoji decorativo más pequeño */}
                  <div className="absolute -top-1 -right-1 text-lg md:text-xl">
                    {note.emoji}
                  </div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="font-serif text-lg md:text-xl mb-2 md:mb-3 text-quince-gold font-semibold">
                  {note.title}
                </h3>
                
                <p className="text-xs md:text-sm text-quince-blush leading-relaxed font-medium">
                  {note.content}
                </p>
                
                {/* Elemento decorativo inferior más pequeño */}
                <div className="mt-3 md:mt-4 flex justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-quince-gold to-transparent rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
        
       
      </div>
    </section>
  );
};

export default ImportantNotes;