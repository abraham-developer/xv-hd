import React from 'react';
import { Gift, Music, Camera, Utensils } from 'lucide-react';
import FloralBackground from './FloralBackground';

const ImportantNotes = () => {
  const notes = [
    {
      icon: Gift,
      title: "Mesa de Regalos",
      content: "Liverpool y Amazon. También puedes contribuir con sobres para mi futuro."
    },
    {
      icon: Utensils,
      title: "Menú Especial", 
      content: "Cena de tres tiempos con opciones vegetarianas. Por favor confirma alergias alimentarias."
    },
    {
      icon: Music,
      title: "Música y Baile",
      content: "DJ profesional y pista de baile. ¡Prepara tus mejores pasos para celebrar!"
    },
    {
      icon: Camera,
      title: "Fotografías",
      content: "Fotógrafo profesional y cabina de fotos. Comparte tus momentos con #HannahXV"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Floral Background */}
      <div className="absolute inset-0 bg-quince-burgundy"></div>
      <FloralBackground variant="lilies" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl mb-4 text-white">
            Notas Importantes
          </h2>
          <div className="w-24 h-1 bg-quince-gold mx-auto mb-6"></div>
          <p className="text-lg text-quince-blush max-w-2xl mx-auto">
            Información importante para que disfrutes al máximo esta celebración
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {notes.map((note, index) => {
            const IconComponent = note.icon;
            return (
              <div 
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-quince-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-quince-gold" />
                </div>
                <h3 className="font-serif text-xl mb-3 text-quince-gold">
                  {note.title}
                </h3>
                <p className="text-sm text-quince-blush leading-relaxed">
                  {note.content}
                </p>
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
};

export default ImportantNotes;
