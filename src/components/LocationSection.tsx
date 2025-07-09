import React from 'react';
import { MapPin, Navigation, Phone } from 'lucide-react';
import FloralBackground from './FloralBackground';

const LocationSection = () => {
  const locations = [
    {
      title: "Ceremonia Religiosa",
      name: "Iglesia San José", 
      address: "Av. Principal 123, Centro",
      time: "7:00 PM",
      phone: "+52 555 123 4567",
      mapUrl: "https://goo.gl/maps/example1"
    },
    {
      title: "Recepción",
      name: "Jardín Rosa",
      address: "Calle de los Sueños 456, Zona Rosa",
      time: "8:30 PM", 
      phone: "+52 555 987 6543",
      mapUrl: "https://goo.gl/maps/example2"
    }
  ];

  return (
    <section id="ubicacion" className="relative py-20 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-quince-burgundy mb-4">
            Ubicaciones
          </h2>
          <div className="w-24 h-1 bg-quince-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Encuentra fácilmente los lugares donde celebraremos juntos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-quince-rose to-quince-blush relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Mapa Interactivo</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl text-quince-burgundy mb-2">
                  {location.title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {location.name}
                </h4>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-quince-burgundy mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-quince-gold rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{location.time}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-quince-burgundy flex-shrink-0" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                </div>
                
                <button 
                  className="w-full bg-quince-burgundy text-white py-3 rounded-lg hover:bg-quince-burgundy/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                  onClick={() => window.open(location.mapUrl, '_blank')}
                >
                  <Navigation className="w-5 h-5" />
                  <span>Cómo llegar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl text-quince-burgundy mb-4">
            Transporte
          </h3>
          <p className="text-gray-700 mb-4">
            Habrá servicio de transporte gratuito entre la ceremonia y la recepción.
          </p>
          <p className="text-sm text-gray-600">
            El transporte saldrá 15 minutos después de finalizada la ceremonia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
