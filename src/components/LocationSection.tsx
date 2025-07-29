import React from 'react';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';
import FloralBackground from './FloralBackground';

const LocationSection = () => {
  const locations = [
    {
      title: "Recepción",
      name: "Las Antorchas",
      address: "Aldama 6 Col. Centro 43800 Tizayuca, Mexico",
      time: "15:30 PM", 
      phone: "",
      mapUrl: "https://maps.app.goo.gl/GdhK54mzmSGQHNbe8?g_st=aw",
      image: "/images/salon.jpeg"
    }
  ];

  return (
    <section id="ubicacion" className="relative py-6 md:py-8 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4 md:mb-6 animate-fade-in">
          <h2 className="font-script text-3xl md:text-4xl text-quince-burgundy mb-2 drop-shadow-lg">
            Ubicación
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-quince-gold via-quince-rose to-quince-gold mx-auto mb-2 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
            Encuentra fácilmente el lugar donde celebraremos juntos
          </p>
        </div>

        {/* Contenedor ultra compacto */}
        <div className="max-w-2xl mx-auto">
          {locations.map((location, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30">
              
              {/* Imagen del salón - muy compacta */}
              <div className="h-32 md:h-40 relative overflow-hidden">
                <img
                  src={location.image}
                  alt={`Imagen de ${location.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.image-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                
                {/* Fallback cuando la imagen no carga */}
                <div className="image-fallback absolute inset-0 bg-gradient-to-br from-quince-rose via-quince-blush to-quince-burgundy hidden items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2 drop-shadow-lg" />
                    <p className="text-sm font-semibold">{location.name}</p>
                  </div>
                </div>

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
                  <MapPin className="w-3 h-3 text-quince-burgundy" />
                </div>
              </div>
              
              {/* Información ultra compacta */}
              <div className="p-3 md:p-4">
                <div className="text-center mb-3">
                  <h3 className="font-script text-xl md:text-2xl text-quince-burgundy mb-0.5">
                    {location.title}
                  </h3>
                  <h4 className="text-lg md:text-xl font-serif text-gray-800">
                    {location.name}
                  </h4>
                  <div className="w-8 h-0.5 bg-quince-gold mx-auto mt-1"></div>
                </div>
                
                {/* Grid horizontal compacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  
                  {/* Dirección */}
                  <div className="bg-gradient-to-r from-quince-blush/10 to-quince-rose/10 rounded-lg p-2 text-center">
                    <div className="flex justify-center mb-1">
                      <div className="bg-quince-burgundy/10 rounded-full p-1.5">
                        <MapPin className="w-3 h-3 text-quince-burgundy" />
                      </div>
                    </div>
                    <h5 className="font-semibold text-quince-burgundy mb-0.5 text-xs">Dirección</h5>
                    <p className="text-gray-700 text-xs leading-tight">{location.address}</p>
                  </div>

                  {/* Hora */}
                  <div className="bg-gradient-to-r from-quince-gold/10 to-quince-blush/10 rounded-lg p-2 text-center">
                    <div className="flex justify-center mb-1">
                      <div className="bg-quince-gold/20 rounded-full p-1.5">
                        <Clock className="w-3 h-3 text-quince-burgundy" />
                      </div>
                    </div>
                    <h5 className="font-semibold text-quince-burgundy mb-0.5 text-xs">Hora</h5>
                    <p className="text-gray-700 font-medium text-sm">{location.time}</p>
                  </div>
                  
                </div>
                
                {/* Botones ultra compactos */}
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <button 
                    className="bg-gradient-to-r from-quince-burgundy to-quince-burgundy/90 text-white py-2 rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-1 group text-xs"
                    onClick={() => window.open(location.mapUrl, '_blank')}
                  >
                    <Navigation className="w-3 h-3" />
                    <span className="font-medium">Ir</span>
                  </button>

                  <button 
                    className="bg-gradient-to-r from-quince-gold to-quince-rose text-white py-2 rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-1 group text-xs"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: `${location.title} - ${location.name}`,
                          text: `Te invito a mi quinceañera en ${location.name}`,
                          url: location.mapUrl
                        });
                      } else {
                        navigator.clipboard.writeText(`${location.name} - ${location.address} - ${location.mapUrl}`);
                        alert('¡Información copiada!');
                      }
                    }}
                  >
                    <div className="text-xs">📍</div>
                    <span className="font-medium">Compartir</span>
                  </button>
                </div>

                {/* Nota ultra compacta */}
                <div className="p-2 bg-quince-blush/5 rounded-lg border border-quince-rose/10">
                  <p className="text-center text-gray-600 text-xs">
                    <span className="font-semibold text-quince-burgundy">💝</span> 
                    {" "}Guarda esta ubicación en tu teléfono
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;