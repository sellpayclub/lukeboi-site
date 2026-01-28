import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = "https://wa.me/5515999999999"; 

  return (
    <header className="fixed w-full top-0 z-40 bg-brand-dark/95 backdrop-blur-sm border-b border-gray-800 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-orange bg-white">
                <img 
                    src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/logo%20luke.jpg" 
                    alt="Luke-boi Espetinhos Logo" 
                    className="w-full h-full object-cover"
                />
             </div>
             <div>
                <h1 className="text-xl font-black uppercase tracking-wider text-white">Luke-boi</h1>
                <p className="text-xs text-brand-orange font-semibold">Espetinhos & Cia</p>
             </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('kits')} className="hover:text-brand-orange transition-colors font-medium">Nossos Kits</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-brand-orange transition-colors font-medium">Benefícios</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-brand-orange transition-colors font-medium">Dúvidas</button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="py-2 px-4 text-sm">
                <MessageCircle size={18} />
                Pedir Agora
                </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <button onClick={() => scrollToSection('kits')} className="block px-3 py-4 text-base font-medium hover:text-brand-orange w-full text-center">Nossos Kits</button>
            <button onClick={() => scrollToSection('benefits')} className="block px-3 py-4 text-base font-medium hover:text-brand-orange w-full text-center">Benefícios</button>
            <button onClick={() => scrollToSection('faq')} className="block px-3 py-4 text-base font-medium hover:text-brand-orange w-full text-center">Dúvidas</button>
            <div className="p-4 w-full">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button variant="whatsapp" fullWidth>
                        <MessageCircle size={20} />
                        Fazer Pedido
                    </Button>
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;