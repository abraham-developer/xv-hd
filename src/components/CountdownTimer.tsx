import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate = "2025-09-27T15:30:00"
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Crear la fecha de forma más explícita
    const target = new Date(2025, 8, 27, 15, 30, 0); // Año, Mes(0-11), Día, Hora, Minuto, Segundo

    if (isNaN(target.getTime())) {
      console.error('Fecha inválida');
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-quince-burgundy text-white rounded-lg p-3 md:p-4 shadow-lg min-w-16 md:min-w-20">
        <div className="text-2xl md:text-3xl font-bold">
          {value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-sm md:text-base text-quince-deep mt-2 font-medium">
        {label}
      </div>
    </div>
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="text-center">
      <div className="flex justify-center space-x-4">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
      
      <p className="text-sm text-gray-600 mt-4">
        Evento: {formatDate(new Date(2025, 8, 27, 15, 30, 0))}
      </p>
    </div>
  );
};

export default CountdownTimer;