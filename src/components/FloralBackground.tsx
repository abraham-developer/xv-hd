import React from 'react';

interface FloralBackgroundProps {
  variant?: 'roses' | 'peonies' | 'lilies' | 'mixed';
  intensity?: 'light' | 'medium' | 'heavy';
}

const FloralBackground: React.FC<FloralBackgroundProps> = ({
  variant = 'mixed',
  intensity = 'medium'
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Gradient - Solo fondo elegante */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 via-rose-50/30 to-pink-100/20"></div>
    </div>
  );
};

export default FloralBackground;