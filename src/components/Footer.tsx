import React from 'react';
import { Heart, Instagram, Facebook, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-quince-burgundy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="font-script text-4xl md:text-5xl mb-4">
              Hannah Dimas
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-quince-gold flex-1 max-w-32"></div>
              <Heart className="w-6 h-6 text-quince-gold" />
              <div className="h-px bg-quince-gold flex-1 max-w-32"></div>
            </div>
            <p className="text-quince-blush text-lg mb-8">
              Mis XV Años • 27 de septiembre, 2025
            </p>
            
            {/* Social Links */}
            {/* <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="#" 
                className="w-12 h-12 bg-quince-gold/20 rounded-full flex items-center justify-center hover:bg-quince-gold/30 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-quince-gold/20 rounded-full flex items-center justify-center hover:bg-quince-gold/30 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="tel:+525551234567" 
                className="w-12 h-12 bg-quince-gold/20 rounded-full flex items-center justify-center hover:bg-quince-gold/30 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div> */}
          </div>
          
          {/* Thank You Message */}
          <div className="bg-quince-gold/10 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <blockquote className="font-script text-2xl md:text-3xl text-quince-gold mb-4">
              "Gracias por formar parte de este sueño hecho realidad. Tu presencia hace que este día sea aún más especial."
            </blockquote>
            <p className="text-quince-blush">Con amor, Hannah</p>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-quince-gold/20 pt-8">
            <p className="text-quince-blush text-sm">
              © 2025 Hannah Dimas XV Años. Diseñado con amor para una celebración única.
            </p>
            <p className="text-quince-blush/70 text-xs mt-2">
              #HannahXV #MisQuinceAños #Celebración2025
            </p>
            
            {/* Colaboraciones */}
            <div className="mt-6 space-y-2">
              <p className="text-quince-blush/70 text-sm font-medium tracking-wide">
                Experiencia exclusiva creada por{' '}
                <a 
                  href="https://mis-xv.blog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-quince-gold/80 hover:text-quince-gold transition-all duration-500 border-b border-quince-gold/30 hover:border-quince-gold/60 font-semibold"
                >
                  mis-xv.blog
                </a>
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-quince-blush/60 text-xs">
                <span>En colaboración con</span>
                <a 
                  href="https://abrahamdev.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-quince-gold/70 hover:text-quince-gold transition-all duration-500 font-semibold"
                >
                  abrahamdev.net
                </a>
                <span className="text-quince-gold/50">•</span>
                <span className="text-quince-gold/70 font-mono text-xs">[ACUBIC]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;