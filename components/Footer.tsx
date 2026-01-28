import React from 'react';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-orange bg-white">
                    <img 
                        src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/logo%20luke.jpg" 
                        alt="Luke-boi Logo" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-xl font-black uppercase">Luke-boi</span>
            </div>
            <p className="text-gray-400 mb-6">
              O jeito mais fácil de organizar um churrasco ou festa sem dor de cabeça. Qualidade, praticidade e sabor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-orange">Navegação</h4>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">Início</button></li>
              <li><button onClick={() => document.getElementById('kits')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">Nossos Kits</button></li>
              <li><button onClick={() => document.getElementById('benefits')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">Benefícios</button></li>
              <li><button onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth'})} className="text-gray-400 hover:text-white transition-colors">Perguntas Frequentes</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-orange">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Vila Barão, Sorocaba - SP<br />Atendimento local e regional</span>
              </li>
              <li className="flex items-center gap-3">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
                 Atendimento via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Luke-boi Espetinhos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;