import React from 'react';
import { Clock } from 'lucide-react';
import FloralBackground from './FloralBackground';

const ScheduleSection = () => {
  const schedule = [
    {
      time: "15:30",
      event: "Recepción de invitados",
      description: "¡Bienvenidos! Tiempo para fotos, saludos y disfrutar del ambiente.",
      emoji: "📷"
    },
    {
      time: "16:15",
      event: "Palabras de bienvenida / Brindis familiar",
      description: "Un momento para agradecer y compartir emociones.",
      emoji: "🥂"
    },
    {
      time: "16:30",
      event: "Banquete",
      description: "¡A disfrutar de la comida!",
      emoji: "🍽"
    },
    {
      time: "18:00",
      event: "Cabina de fotos y botanas",
      description: "¡Pásate a tomarte fotos divertidas y disfruta de una botana mientras esperas!",
      emoji: "📸"
    },
    {
      time: "19:00",
      event: "Vals padre e hija y familiares",
      description: "El vals tradicional con los seres más queridos.",
      emoji: "💃"
    },
    {
      time: "19:30",
      event: "Video/ Palabras de sus hermanas",
      description: "Un recorrido lleno de recuerdos, risas y momentos inolvidables y un mensaje desde el corazón.",
      emoji: "🎥"
    },
    {
      time: "20:00",
      event: "Pastel y mesa de dulces",
      description: "Momento dulce para cerrar con broche de oro.",
      emoji: "🎂"
    },
    {
      time: "20:30",
      event: "Baile sorpresa de la quinceañera",
      description: "Advertencia: lo que están a punto de ver podría causar ganas repentinas de bailar, gritar o aplaudir sin control.",
      emoji: "💃"
    },
    {
      time: "21:00",
      event: "¡Explosión de ritmo!",
      description: "Prepárate para la batucada… ¡porque esto apenas comienza!",
      emoji: "🥁"
    },
    {
      time: "23:00",
      event: "Despedida",
      description: "Gracias por ser parte de esta noche mágica.",
      emoji: "💖"
    }
  ];

  return (
    <section id="agenda" className="relative py-8 md:py-12 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="roses" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h2 className="font-script text-3xl md:text-4xl text-quince-burgundy mb-3">
            Agenda del Evento
          </h2>
          <div className="w-16 h-0.5 bg-quince-gold mx-auto mb-3 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
            Cronograma de actividades para que no te pierdas ningún momento especial
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline elegante para XV años */}
          <div className="relative">
            {/* Línea principal con gradiente elegante */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-quince-gold via-quince-rose to-quince-burgundy transform md:-translate-x-0.5 rounded-full shadow-lg"></div>
            
            {/* Decoraciones en la línea */}
            <div className="absolute left-5.5 md:left-1/2 top-8 w-2 h-2 bg-quince-gold rounded-full transform md:-translate-x-1 animate-pulse"></div>
            <div className="absolute left-5.5 md:left-1/2 bottom-16 w-2 h-2 bg-quince-rose rounded-full transform md:-translate-x-1 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {schedule.map((item, index) => (
              <div key={index} className="relative flex items-center mb-6 md:mb-8 last:mb-0">
                {/* Punto de la timeline con diseño de XV */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 transform md:-translate-x-1/2 z-10">
                  <div className="w-6 h-6 bg-white rounded-full border-3 border-quince-burgundy shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-quince-gold to-quince-rose rounded-full animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}></div>
                  </div>
                  
                  {/* Emoji flotante decorativo */}
                  <div className="absolute -top-1 -right-1 text-sm bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    {item.emoji}
                  </div>
                </div>
                
                {/* Contenido alternado elegante */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                  <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-quince-gold/20">
                    
                    {/* Header con hora y decoración */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-quince-burgundy to-red-600 rounded-lg px-3 py-1 shadow-md">
                          <span className="text-white font-bold text-sm drop-shadow-sm">
                            {item.time}
                          </span>
                        </div>
                        <div className="w-2 h-2 bg-quince-rose rounded-full animate-ping"></div>
                      </div>
                      <div className="text-xl opacity-80">
                        {item.emoji}
                      </div>
                    </div>
                    
                    {/* Título del evento */}
                    <h3 className="font-serif text-base md:text-lg text-quince-deep font-semibold mb-2 leading-tight">
                      {item.event}
                    </h3>
                    
                    {/* Descripción */}
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Decoración inferior */}
                    <div className="mt-3 flex justify-center">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-quince-gold to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Línea conectora decorativa para desktop */}
                  <div className={`hidden md:block absolute top-3 w-6 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? 'left-1/2 bg-gradient-to-r from-quince-gold to-transparent' : 'right-1/2 bg-gradient-to-l from-quince-gold to-transparent'}`}></div>
                </div>
              </div>
            ))}
            
            {/* Decoración final de la línea */}
            <div className="absolute left-4 md:left-1/2 -bottom-4 w-6 h-6 bg-gradient-to-br from-quince-gold to-quince-burgundy rounded-full transform md:-translate-x-1/2 flex items-center justify-center shadow-lg">
              <div className="text-white text-xs">✨</div>
            </div>
          </div>
        </div>

        {/* Nota final compacta */}
        <div className="mt-6 md:mt-8 text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-2xl mx-auto">
          <h3 className="font-serif text-lg md:text-xl text-quince-burgundy mb-2">
            Información Adicional
          </h3>
          <p className="text-gray-700 mb-1 text-sm md:text-base">
            Los horarios pueden variar ligeramente. Te mantendremos informado durante el evento.
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            ¡Gracias por ser parte de esta celebración tan especial! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;