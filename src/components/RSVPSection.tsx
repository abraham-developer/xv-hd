
import React, { useState } from 'react';
import { Send, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    phone: '',
    email: '',
    attendance: '',
    allergies: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "¡Confirmación recibida!",
        description: "Gracias por confirmar tu asistencia. ¡Te esperamos!",
        duration: 5000,
      });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="confirmacion" className="py-20 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-script text-4xl text-quince-burgundy mb-4">
                ¡Confirmación Recibida!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Gracias por confirmar tu asistencia. ¡Será un honor tenerte en mi celebración!
              </p>
              <div className="flex justify-center">
                <Heart className="w-8 h-8 text-quince-rose animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmacion" className="py-20 bg-gradient-to-b from-white to-quince-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-quince-burgundy mb-4">
            Confirmación de Asistencia
          </h2>
          <div className="w-24 h-1 bg-quince-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Por favor confirma tu asistencia antes del 1 de marzo
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-quince-burgundy font-medium mb-2">
                  Nombre Completo *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border-quince-rose focus:border-quince-burgundy"
                  required
                />
              </div>

              {/* Number of Guests */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-quince-burgundy font-medium mb-2">
                    Número de Invitados *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-quince-rose rounded-lg focus:border-quince-burgundy focus:ring-2 focus:ring-quince-burgundy/20"
                    required
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-quince-burgundy font-medium mb-2">
                    Teléfono *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-quince-rose focus:border-quince-burgundy"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-quince-burgundy font-medium mb-2">
                  Correo Electrónico
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-quince-rose focus:border-quince-burgundy"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-quince-burgundy font-medium mb-2">
                  ¿Confirmas tu asistencia? *
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="si"
                      onChange={handleInputChange}
                      className="mr-2 text-quince-burgundy"
                      required
                    />
                    <span>Sí, asistiré</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      onChange={handleInputChange}
                      className="mr-2 text-quince-burgundy"
                      required
                    />
                    <span>No podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Allergies */}
              <div>
                <label className="block text-quince-burgundy font-medium mb-2">
                  Alergias o Restricciones Alimentarias
                </label>
                <Input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  placeholder="Ninguna / Especificar..."
                  className="w-full border-quince-rose focus:border-quince-burgundy"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-quince-burgundy font-medium mb-2">
                  Mensaje Especial (Opcional)
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Un mensaje de felicitación o buenos deseos..."
                  className="w-full h-24 border-quince-rose focus:border-quince-burgundy resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-quince-burgundy hover:bg-quince-burgundy/90 text-white py-4 text-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Confirmación</span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-2">
              ¿Tienes alguna pregunta? Contáctanos:
            </p>
            <p className="text-quince-burgundy font-medium">
              WhatsApp: +52 555 123 4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
