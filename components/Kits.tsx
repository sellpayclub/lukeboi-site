import React from 'react';
import { ShoppingBag, Star, Users, Flame } from 'lucide-react';
import Button from './Button';

const Kits: React.FC = () => {
  const whatsappLink = "https://wa.me/5515999999999";

  const kits = [
    {
      title: "Kit Família",
      price: "A partir de R$ 114,00",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      features: [
        "Ideal para churrasco em casa",
        "Variedade de sabores",
        "Inclui acompanhamentos básicos",
        "Praticidade total"
      ],
      highlight: false
    },
    {
      title: "Kit Festa",
      price: "Sob Consulta",
      icon: <Star className="w-8 h-8 text-brand-yellow" />,
      features: [
        "Para aniversários e reuniões",
        "Quantidade sem desperdício",
        "Opções da Linha Festa (60g)",
        "Melhor custo-benefício"
      ],
      highlight: true
    },
    {
      title: "Grandes Eventos",
      price: "Kits de 300 a 500 un.",
      icon: <Flame className="w-8 h-8 text-brand-red" />,
      features: [
        "Casamentos e Eventos Corporativos",
        "Alta capacidade produtiva",
        "Padronização garantida",
        "Linha Premium disponível"
      ],
      highlight: false
    }
  ];

  return (
    <section id="kits" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">O que oferecemos</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            Kits Pensados para <span className="text-brand-red">Você</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aqui você não compra "só espetinho". Você compra tranquilidade. Escolha a opção ideal para o seu momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {kits.map((kit, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-2xl p-8 border-2 transition-transform hover:-translate-y-2 duration-300 flex flex-col ${kit.highlight ? 'border-brand-orange shadow-2xl shadow-brand-orange/20 scale-105 z-20' : 'border-gray-700 shadow-xl'}`}
            >
              <div className="bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {kit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{kit.title}</h3>
              <p className="text-brand-orange font-bold text-xl mb-6">{kit.price}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {kit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={`${whatsappLink}?text=Tenho interesse no ${kit.title}`} target="_blank" rel="noopener noreferrer">
                <Button variant={kit.highlight ? 'primary' : 'outline'} fullWidth>
                    Quero esse
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">💥 Oferta Inteligente</h3>
                    <p className="text-gray-300 mb-6">
                        Além dos espetinhos, complete seu pedido com nossos itens de conveniência.
                        Tudo no mesmo pedido, sem esquecer nada.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Carvão', 'Pão de Alho', 'Queijo Coalho', 'Bebidas'].map((item) => (
                            <span key={item} className="px-4 py-2 bg-gray-700 rounded-lg text-sm font-semibold text-brand-yellow">
                                ✅ {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="whatsapp">
                            <ShoppingBag className="w-5 h-5" />
                            Pedir Catálogo Completo
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Kits;