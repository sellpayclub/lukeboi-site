import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsapp: React.FC = () => {
  const whatsappNumber = "5515999999999"; // Replace with actual number if available, using generic format
  const message = "Olá! Gostaria de fazer um pedido de espetinhos.";

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce group flex items-center gap-2"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Faça seu pedido
      </span>
    </button>
  );
};

export default FloatingWhatsapp;