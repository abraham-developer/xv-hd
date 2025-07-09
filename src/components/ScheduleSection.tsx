import React from 'react';
import { Clock } from 'lucide-react';
import FloralBackground from './FloralBackground';

const ScheduleSection = () => {
  const schedule = [
    {
      time: "7:00 PM",
      event: "Ceremonia Religiosa",
      description: "Misa de Acción de Gracias en la Iglesia San José",
      color: "bg-white/80"
    },
    {
      time: "8:00 PM",
      event: "Traslado",
      description: "Transporte hacia el salón de recepción",
      color: "bg-white/70"
    },
    {
      time: "8:30 PM",
      event: "Recepción y Cocktail",
      description: "Bienvenida con canapés y bebidas",
      color: "bg-white/80"
    },
    {
      time: "9:00 PM",
      event: "Vals de Honor",
      description: "Baile tradicional con mi corte de honor",
      color: "bg-white/70"
    },
    {
      time: "9:30 PM",
      event: "Cena",
      description: "Menú de tres tiempos especialmente preparado",
      color: "bg-white/80"
    },
    {
      time: "11:00 PM",
      event: "Fiesta y Baile",
      description: "¡Música, diversión y celebración hasta altas horas!",
      color: "bg-white/80"
    }
  ];

  return (
    <section id="agenda" className="relative py-20 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="roses" intensity="medium" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-quince-burgundy mb-4">
            Agenda del Evento
          </h2>
          <div className="w-24 h-1 bg-quince-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Cronograma de actividades para que no te pierdas ningún momento especial
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-quince-gold transform md:-translate-x-0.5"></div>
            
            {schedule.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-quince-burgundy rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>
                
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className={`${item.color} backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                    <div className="flex items-center mb-3">
                      <Clock className="w-5 h-5 text-quince-burgundy mr-2" />
                      <span className="text-quince-burgundy font-bold text-lg">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-quince-deep font-semibold mb-2">
                      {item.event}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl text-quince-burgundy mb-4">
            Información Adicional
          </h3>
          <p className="text-gray-700 mb-2">
            Los horarios pueden variar ligeramente. Te mantendremos informado durante el evento.
          </p>
          <p className="text-sm text-gray-600">
            ¡Gracias por ser parte de esta celebración tan especial!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
