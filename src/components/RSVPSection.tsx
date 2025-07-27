import React, { useState } from 'react';
import { Send, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const [folio, setFolio] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!folio.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingresa tu folio de invitación.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "¡Folio recibido!",
        description: "Gracias por ingresar tu folio. ¡Te esperamos!",
        duration: 5000,
      });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-script text-3xl md:text-4xl text-quince-burgundy mb-4">
                ¡Folio Recibido!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Gracias por ingresar tu folio. ¡Será un honor tenerte en mi celebración!
              </p>
              <div className="flex justify-center">
                <Heart className="w-6 h-6 text-quince-rose animate-pulse" />
              </div>
              
              {/* Información adicional */}
              <div className="mt-6 p-4 bg-quince-blush/10 rounded-xl border border-quince-rose/20">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-quince-burgundy">Folio registrado:</span> {folio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-quince-burgundy mb-4">
            Confirmación de Asistencia
          </h2>
          <div className="w-20 h-0.5 bg-quince-gold mx-auto mb-4 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
            Por favor confirma tu asistencia. Es indispensable presentar esta invitación al ingresar al salón.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Folio de Invitación */}
              <div>
                <label className="block text-quince-burgundy font-semibold mb-3 text-lg">
                  Folio de Invitación *
                </label>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Ingresa el número de folio que aparece en la parte inferior de tu invitación recibida.
                </p>
                
                <div className="relative">
                  <Input
                    type="text"
                    value={folio}
                    onChange={(e) => setFolio(e.target.value)}
                    placeholder="Ej: INV-2025-001"
                    className="w-full border-2 border-quince-rose/30 focus:border-quince-burgundy focus:ring-2 focus:ring-quince-burgundy/20 text-lg py-4 text-center font-mono tracking-wider"
                    required
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <div className="w-2 h-2 bg-quince-gold rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Ayuda visual */}
                <div className="mt-4 p-3 bg-quince-gold/5 rounded-lg border border-quince-gold/20">
                  <p className="text-xs text-gray-600 text-center">
                    💡 <span className="font-semibold">Tip:</span> El folio se encuentra impreso en la parte inferior de tu invitación física
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-quince-burgundy to-quince-burgundy/90 hover:from-quince-burgundy/90 hover:to-quince-burgundy text-white py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>Confirmar Asistencia</span>
              </Button>
              
              {/* Nota informativa */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Al confirmar, recibirás los detalles finales del evento
                </p>
              </div>
            </form>
          </div>

          {/* Información adicional */}
          <div className="mt-6 text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-quince-burgundy">Importante:</span> 
              {" "}Tu folio es único y cuenta con numero limitado de personas que pueden utilizarlo
            </p>
            <p className="text-xs text-gray-600">
              Si tienes problemas para encontrar tu folio, contáctanos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;