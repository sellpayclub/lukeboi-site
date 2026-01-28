import React from 'react';
import Button from './Button';
import { MessageCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5515999999999";

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop" 
          alt="Churrasco sendo preparado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
        <div className="inline-block px-4 py-1 rounded-full bg-brand-orange/20 border border-brand-orange text-brand-orange font-bold text-sm mb-6 animate-fade-in-up">
            📍 Vila Barão, Sorocaba & Região
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
          O jeito mais fácil de organizar seu <span className="text-brand-orange">Churrasco</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl font-light drop-shadow-md">
          Espetinhos crus, padronizados e prontos pra assar. 
          <br className="hidden md:block" />
          Você pede pelo WhatsApp, a gente cuida do resto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="primary" className="text-lg px-8 py-4 w-full sm:w-auto">
              <MessageCircle size={24} />
              Faça seu pedido agora
            </Button>
          </a>
          <Button 
            variant="outline" 
            className="text-lg px-8 py-4"
            onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Kits Disponíveis
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-12 w-full fill-gray-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;