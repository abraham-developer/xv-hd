import React, { useState } from 'react';
import { Gift, Heart, CreditCard, ExternalLink, Copy, Check } from 'lucide-react';
import FloralBackground from './FloralBackground';

const GiftRegistrySection = () => {
  const [copiedCLABE, setCopiedCLABE] = useState(false);

  const handleCopyCLABE = async () => {
    try {
      await navigator.clipboard.writeText('014180140178250299');
      setCopiedCLABE(true);
      setTimeout(() => setCopiedCLABE(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const giftOptions = [
    {
      icon: CreditCard,
      title: "Regalo en Efectivo",
      subtitle: "¡Tu regalo en efectivo me hará muy feliz!",
      description: "Depósitalo con amor a:",
      details: [
        { label: "Banco", value: "Santander" },
        { label: "CLABE", value: "014180140178250299", copyable: true }
      ],
      message: "¡Gracias por hacerme sonreír!",
      color: "from-quince-gold to-amber-400",
      bgColor: "bg-gradient-to-br from-quince-gold/10 to-amber-400/10"
    },
    {
      icon: Gift,
      title: "Mesa de Regalos Liverpool",
      subtitle: "Encuentra el regalo perfecto",
      description: "Visita mi lista de regalos en Liverpool:",
      link: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51660537",
      linkText: "Ver Lista de Regalos",
      message: "¡Cada regalo será muy especial para mí!",
      color: "from-quince-burgundy to-red-600",
      bgColor: "bg-gradient-to-br from-quince-burgundy/10 to-red-600/10"
    }
  ];

  return (
    <section id="regalos" className="relative py-12 md:py-16 overflow-hidden">
      {/* Floral Background */}
      <FloralBackground variant="mixed" intensity="light" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-quince-burgundy mb-4 drop-shadow-lg">
            Mesa de Regalos
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-quince-gold via-quince-rose to-quince-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto font-medium">
            ¿No sabes qué regalar? Aquí tienes algunas opciones que me harían muy feliz
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {giftOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div
                  key={index}
                  className={`${option.bgColor} backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/30`}
                >
                  {/* Header con icono */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                    </div>
                    
                    <h3 className="font-serif text-xl md:text-2xl text-quince-burgundy font-bold mb-2">
                      {option.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-gray-700 font-medium">
                      {option.subtitle}
                    </p>
                  </div>

                  {/* Contenido */}
                  <div className="space-y-4">
                    <p className="text-center text-gray-700 font-medium">
                      {option.description}
                    </p>

                    {/* Detalles bancarios */}
                    {option.details && (
                      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 space-y-3">
                        {option.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center justify-between">
                            <span className="font-semibold text-quince-burgundy">
                              {detail.label}:
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                                {detail.value}
                              </span>
                              {detail.copyable && (
                                <button
                                  onClick={handleCopyCLABE}
                                  className="bg-quince-gold hover:bg-quince-gold/80 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110"
                                  title="Copiar CLABE"
                                >
                                  {copiedCLABE ? (
                                    <Check className="w-4 h-4" />
                                  ) : (
                                    <Copy className="w-4 h-4" />
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                        
                        {copiedCLABE && (
                          <div className="text-center">
                            <span className="text-sm text-green-600 font-medium">
                              ✅ CLABE copiada al portapapeles
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Link externo */}
                    {option.link && (
                      <div className="text-center">
                        <a
                          href={option.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center space-x-2 bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                        >
                          <span>{option.linkText}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}

                    {/* Mensaje de agradecimiento */}
                    <div className="text-center mt-6 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-quince-rose/20">
                      <p className="text-quince-burgundy font-medium text-sm md:text-base">
                        <Heart className="w-4 h-4 inline mr-1 text-quince-rose" />
                        {option.message}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nota adicional */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 md:px-8 md:py-6 border border-white/50 shadow-lg">
              <p className="text-gray-700 text-sm md:text-base mb-2">
                <span className="font-bold text-quince-burgundy">💝 Recuerda:</span> 
                {" "}Tu presencia es el regalo más importante
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                Pero si deseas obsequiarme algo, estas opciones me harían muy feliz ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftRegistrySection;