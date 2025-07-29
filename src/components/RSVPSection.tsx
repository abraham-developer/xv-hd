import React, { useState } from 'react';
import { Send, Check, Heart, User, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

interface FolioResponse {
  id: number;
  nombre: string;
  folio: string;
  numero_boletos: number;
  whatsapp_envio_grupo: string;
}

interface ErrorResponse {
  Error: string;
}

interface Invitado {
  nombre: string;
}

const RSVPSection = () => {
  const [folio, setFolio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'folio' | 'asistencia' | 'invitados' | 'confirmado' | 'no_asiste'>('folio');
  const [folioData, setFolioData] = useState<FolioResponse | null>(null);
  const [invitados, setInvitados] = useState<Invitado[]>([]);
  const [isSubmittingInvitados, setIsSubmittingInvitados] = useState(false);
  const [motivoNoAsistencia, setMotivoNoAsistencia] = useState('');
  const [isSubmittingNoAsistencia, setIsSubmittingNoAsistencia] = useState(false);
  const { toast } = useToast();

  const handleFolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!folio.trim()) {
      toast({
        title: "Campo requerido",
        description: "Por favor ingresa tu folio de invitación.",
        variant: "destructive",
        duration: 3000,
        className: "bg-red-600 text-white border-red-700 shadow-lg",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('https://aan8nwebhook.abrahamdev.net/webhook/b90f2446-d5d6-45f4-8ab8-da6adb234bb0', {
        Folio: folio.trim()
      });

      // Verificar si es un error
      if (response.data.Error) {
        const errorData = response.data as ErrorResponse;
        toast({
          title: "Error",
          description: errorData.Error,
          variant: "destructive",
          duration: 5000,
          className: "bg-red-600 text-white border-red-700 shadow-xl",
        });
        return;
      }

      // Si es exitoso, esperamos un array
      if (Array.isArray(response.data) && response.data.length > 0) {
        const data = response.data[0] as FolioResponse;
        setFolioData(data);
        
        // Inicializar array de invitados con nombres vacíos
        const initialInvitados = Array.from({ length: data.numero_boletos }, () => ({ nombre: '' }));
        setInvitados(initialInvitados);
        
        setStep('asistencia');
        
        toast({
          title: "¡Folio encontrado!",
          description: `Folio válido para ${data.numero_boletos} persona(s). ¿Asistirás al evento?`,
          duration: 5000,
          className: "bg-green-600 text-white border-green-700 shadow-xl",
        });
      }
    } catch (error: any) {
      console.error('Error al verificar folio:', error);
      
      let errorMessage = "No se pudo verificar el folio. Intenta de nuevo.";
      
      if (error.response) {
        // El servidor respondió con un código de error
        errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        if (error.response.status === 404) {
          errorMessage = "Endpoint no encontrado. Verifica la URL del webhook.";
        }
      } else if (error.request) {
        // La petición se hizo pero no hubo respuesta
        errorMessage = "Sin respuesta del servidor. Verifica la conexión.";
      }
      
      toast({
        title: "Error de conexión",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-red-600 text-white border-red-700 shadow-xl",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInvitadoChange = (index: number, nombre: string) => {
    const newInvitados = [...invitados];
    newInvitados[index] = { nombre };
    setInvitados(newInvitados);
  };

  const handleConfirmarInvitados = async () => {
    // Filtrar solo los invitados que tienen nombre (no vacíos)
    const invitadosConNombre = invitados.filter(inv => inv.nombre.trim() !== '');
    
    // Validar que al menos haya un invitado confirmado
    if (invitadosConNombre.length === 0) {
      toast({
        title: "Sin invitados",
        description: "Debes confirmar al menos un invitado.",
        variant: "destructive",
        duration: 3000,
        className: "bg-orange-600 text-white border-orange-700 shadow-xl",
      });
      return;
    }

    setIsSubmittingInvitados(true);

    try {
      // Crear array solo con los invitados que tienen nombre
      const confirmacionData = invitadosConNombre.map(inv => ({
        Folio: folio,
        nombre: inv.nombre.trim()
      }));

      const response = await axios.post('https://aan8nwebhook.abrahamdev.net/webhook/223de2a4-654b-4a20-8f98-a2d269e18e40', confirmacionData);

      setStep('confirmado');
      
      toast({
        title: "¡Confirmación exitosa!",
        description: `${invitadosConNombre.length} invitado(s) confirmado(s) correctamente.`,
        duration: 5000,
        className: "bg-green-600 text-white border-green-700 shadow-xl",
      });

    } catch (error: any) {
      console.error('Error al confirmar invitados:', error);
      
      let errorMessage = "No se pudo confirmar la asistencia. Intenta de nuevo.";
      
      if (error.response) {
        errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        if (error.response.status === 404) {
          errorMessage = "Endpoint de confirmación no encontrado. Verifica la URL del webhook.";
        }
      } else if (error.request) {
        errorMessage = "Sin respuesta del servidor. Verifica la conexión.";
      }
      
      toast({
        title: "Error al confirmar",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-red-600 text-white border-red-700 shadow-xl",
      });
    } finally {
      setIsSubmittingInvitados(false);
    }
  };

  const handleNoAsistencia = async () => {
    setIsSubmittingNoAsistencia(true);

    try {
      const noAsistenciaData = {
        Folio: folio,
        no_asiste: true,
        motivo: motivoNoAsistencia.trim() || null
      };

      const response = await axios.post('https://aan8nwebhook.abrahamdev.net/webhook/931cca98-ab87-4d76-b6e9-31e6081bacf7', noAsistenciaData);

      setStep('no_asiste');
      
      toast({
        title: "Respuesta registrada",
        description: "Hemos registrado que no podrás asistir. ¡Gracias por informarnos!",
        duration: 5000,
        className: "bg-blue-600 text-white border-blue-700 shadow-xl",
      });

    } catch (error: any) {
      console.error('Error al registrar no asistencia:', error);
      
      let errorMessage = "No se pudo registrar la respuesta. Intenta de nuevo.";
      
      if (error.response) {
        errorMessage = `Error ${error.response.status}: ${error.response.statusText}`;
        if (error.response.status === 404) {
          errorMessage = "Endpoint no encontrado. Verifica la URL del webhook.";
        }
      } else if (error.request) {
        errorMessage = "Sin respuesta del servidor. Verifica la conexión.";
      }
      
      toast({
        title: "Error al registrar",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
        className: "bg-red-600 text-white border-red-700 shadow-xl",
      });
    } finally {
      setIsSubmittingNoAsistencia(false);
    }
  };

  // Pantalla de no asistencia confirmada
  if (step === 'no_asiste') {
    return (
      <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="font-script text-3xl md:text-4xl text-quince-burgundy mb-4">
                Respuesta Registrada
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Hemos registrado que no podrás asistir al evento. ¡Gracias por informarnos!
              </p>
              <div className="flex justify-center mb-6">
                <Heart className="w-6 h-6 text-quince-rose animate-pulse" />
              </div>
              
              {/* Información del folio */}
              <div className="mb-4 p-4 bg-quince-blush/10 rounded-xl border border-quince-rose/20">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-quince-burgundy">Folio:</span> {folio}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-quince-burgundy">Estado:</span> No asistirá
                </p>
                {motivoNoAsistencia && (
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold text-quince-burgundy">Motivo:</span> {motivoNoAsistencia}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-600">
                Esperamos poder celebrar contigo en una próxima ocasión.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Pantalla de confirmación final
  if (step === 'confirmado') {
    // Filtrar solo los invitados confirmados para mostrar
    const invitadosConfirmados = invitados.filter(inv => inv.nombre.trim() !== '');
    
    return (
      <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-script text-3xl md:text-4xl text-quince-burgundy mb-4">
                ¡Confirmación Exitosa!
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                {invitadosConfirmados.length === 1 
                  ? 'El invitado ha sido confirmado.'
                  : 'Los invitados han sido confirmados.'
                } ¡Será un honor tenerlos en mi celebración!
              </p>
              <div className="flex justify-center mb-6">
                <Heart className="w-6 h-6 text-quince-rose animate-pulse" />
              </div>
              
              {/* Información del folio */}
              <div className="mb-4 p-4 bg-quince-blush/10 rounded-xl border border-quince-rose/20">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold text-quince-burgundy">Folio:</span> {folio}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-quince-burgundy">Personas confirmadas:</span> {invitadosConfirmados.length}
                </p>
              </div>

              {/* Lista de invitados confirmados */}
              <div className="text-left">
                <h3 className="font-semibold text-quince-burgundy mb-3 text-center">
                  {invitadosConfirmados.length === 1 ? 'Invitado Confirmado:' : 'Invitados Confirmados:'}
                </h3>
                <div className="space-y-2">
                  {invitadosConfirmados.map((inv, index) => (
                    <div key={index} className="flex items-center p-2 bg-green-50 rounded-lg">
                      <User className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-700">{inv.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Pantalla para confirmar asistencia
  if (step === 'asistencia' && folioData) {
    return (
      <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-quince-burgundy mb-4">
              ¿Asistirás al Evento?
            </h2>
            <div className="w-20 h-0.5 bg-quince-gold mx-auto mb-4 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
              Tu folio es válido para <span className="font-bold text-quince-burgundy">{folioData.numero_boletos}</span> persona(s). 
              Por favor confirma si podrás asistir a la celebración.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
              
              {/* Información del folio */}
              <div className="mb-6 p-4 bg-quince-blush/10 rounded-xl border border-quince-rose/20">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-quince-burgundy">Folio:</span> {folioData.folio}
                </p>
              </div>

              {/* Botones de decisión */}
              <div className="space-y-4 mb-6">
                <Button
                  onClick={() => setStep('invitados')}
                  className="w-full bg-gradient-to-r from-quince-burgundy to-quince-burgundy/90 hover:from-quince-burgundy/90 hover:to-quince-burgundy text-white py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Check className="w-5 h-5" />
                  <span>Sí, asistiré</span>
                </Button>

                <div className="space-y-3">
                  <label className="block text-quince-burgundy font-semibold text-sm">
                    Motivo (opcional):
                  </label>
                  <Input
                    type="text"
                    value={motivoNoAsistencia}
                    onChange={(e) => setMotivoNoAsistencia(e.target.value)}
                    placeholder="Ej: Tengo otro compromiso, estaré fuera de la ciudad..."
                    className="w-full border-2 border-quince-rose/30 focus:border-quince-burgundy focus:ring-2 focus:ring-quince-burgundy/20 text-sm py-3"
                  />
                  
                  <Button
                    onClick={handleNoAsistencia}
                    disabled={isSubmittingNoAsistencia}
                    variant="outline"
                    className="w-full border-2 border-gray-400 text-gray-700 hover:bg-gray-100 py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300"
                  >
                    {isSubmittingNoAsistencia ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Registrando...</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>No podré asistir</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Botón para regresar */}
              <Button
                onClick={() => {
                  setStep('folio');
                  setFolioData(null);
                  setInvitados([]);
                  setMotivoNoAsistencia('');
                }}
                variant="ghost"
                className="w-full text-quince-burgundy hover:bg-quince-burgundy/10"
              >
                Cambiar Folio
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Pantalla para ingresar nombres de invitados
  if (step === 'invitados' && folioData) {
    return (
      <section id="confirmacion" className="py-12 md:py-16 bg-gradient-to-b from-white to-quince-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h2 className="font-script text-3xl md:text-4xl lg:text-5xl text-quince-burgundy mb-4">
              Ingresa los Nombres
            </h2>
            <div className="w-20 h-0.5 bg-quince-gold mx-auto mb-4 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto">
              Tu folio es válido para <span className="font-bold text-quince-burgundy">{folioData.numero_boletos}</span> persona(s). 
              Por favor ingresa el nombre completo de cada invitado que asistirá.
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-xl mx-auto">
              <span className="font-semibold">Nota:</span> Puedes dejar campos vacíos si no todos los invitados asistirán.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">
              
              {/* Información del folio */}
              <div className="mb-6 p-4 bg-quince-blush/10 rounded-xl border border-quince-rose/20">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold text-quince-burgundy">Folio:</span> {folioData.folio}
                </p>
              </div>

              {/* Campos para nombres */}
              <div className="space-y-4 mb-6">
                {invitados.map((invitado, index) => (
                  <div key={index}>
                    <label className="block text-quince-burgundy font-semibold mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Invitado {index + 1} (opcional)
                    </label>
                    <Input
                      type="text"
                      value={invitado.nombre}
                      onChange={(e) => handleInvitadoChange(index, e.target.value)}
                      placeholder="Nombre completo (deja vacío si no asiste)"
                      className="w-full border-2 border-quince-rose/30 focus:border-quince-burgundy focus:ring-2 focus:ring-quince-burgundy/20 text-base py-3"
                    />
                  </div>
                ))}
              </div>

              {/* Información sobre campos completados */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  {invitados.filter(inv => inv.nombre.trim() !== '').length} de {invitados.length} invitados con nombre ingresado
                </p>
              </div>

              {/* Botón de confirmación */}
              <Button
                onClick={handleConfirmarInvitados}
                disabled={isSubmittingInvitados}
                className="w-full bg-gradient-to-r from-quince-burgundy to-quince-burgundy/90 hover:from-quince-burgundy/90 hover:to-quince-burgundy text-white py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmittingInvitados ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Confirmando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Confirmar Invitados</span>
                  </>
                )}
              </Button>

              {/* Botón para regresar */}
              <Button
                onClick={() => {
                  setStep('asistencia');
                }}
                variant="outline"
                className="w-full mt-3 border-quince-burgundy text-quince-burgundy hover:bg-quince-burgundy hover:text-white"
              >
                Regresar
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Pantalla inicial para ingresar folio
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
            <form onSubmit={handleFolioSubmit} className="space-y-6">
              
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
                    placeholder="Ej: HAD-XV-240927-GM-004"
                    className="w-full border-2 border-quince-rose/30 focus:border-quince-burgundy focus:ring-2 focus:ring-quince-burgundy/20 text-lg py-4 text-center font-mono tracking-wider"
                    required
                    disabled={isLoading}
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 text-quince-burgundy animate-spin" />
                    ) : (
                      <div className="w-2 h-2 bg-quince-gold rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
                
                {/* Ayuda visual */}
                <div className="mt-4 p-3 bg-quince-gold/5 rounded-lg border border-quince-gold/20">
                  <p className="text-xs text-gray-600 text-center">
                    💡 <span className="font-semibold">Tip:</span> El folio se encuentra en el PDF adjuntado a tu invitación
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-quince-burgundy to-quince-burgundy/90 hover:from-quince-burgundy/90 hover:to-quince-burgundy text-white py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Verificando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Verificar Folio</span>
                  </>
                )}
              </Button>
              
              {/* Nota informativa */}
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Al verificar, podrás ingresar los nombres de los invitados
                </p>
              </div>
            </form>
          </div>

          {/* Información adicional */}
          <div className="mt-6 text-center bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-semibold text-quince-burgundy">Importante:</span> 
              {" "}Tu folio es único y cuenta con número limitado de personas que pueden utilizarlo
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