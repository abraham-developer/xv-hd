import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import FloralBackground from './FloralBackground';

const EventSection = () => {
  return (
    <section id="evento" className="relative py-20 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="roses" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-quince-burgundy mb-4">
            Una Noche Mágica
          </h2>
          <div className="w-24 h-1 bg-quince-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Acompáñame en esta celebración única e inolvidable donde los sueños se hacen realidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-quince-rose rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-quince-burgundy" />
            </div>
            <h3 className="font-serif text-2xl text-quince-burgundy mb-4">Ceremonia</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">15 de Marzo, 2025</p>
              <p>7:00 PM</p>
              <p>Iglesia San José</p>
              <p className="text-sm text-gray-500">Av. Principal 123</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-quince-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-quince-burgundy" />
            </div>
            <h3 className="font-serif text-2xl text-quince-burgundy mb-4">Recepción</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Salón de Eventos</p>
              <p>8:30 PM</p>
              <p>Jardín Rosa</p>
              <p className="text-sm text-gray-500">Calle de los Sueños 456</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-quince-blush rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-quince-burgundy" />
            </div>
            <h3 className="font-serif text-2xl text-quince-burgundy mb-4">Código de Vestimenta</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Formal/Cocktail</p>
              <p>Colores sugeridos:</p>
              <div className="flex justify-center space-x-2 mt-3">
                <div className="w-6 h-6 bg-quince-rose rounded-full border-2 border-white shadow"></div>
                <div className="w-6 h-6 bg-quince-burgundy rounded-full border-2 border-white shadow"></div>
                <div className="w-6 h-6 bg-quince-gold rounded-full border-2 border-white shadow"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto">
          <blockquote className="font-script text-2xl md:text-3xl text-quince-deep mb-4">
            "En cada momento especial de nuestras vidas, los sueños se vuelven realidad cuando los compartimos con quienes más amamos"
          </blockquote>
          <p className="text-quince-burgundy font-medium">- Hannah Dimas</p>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
