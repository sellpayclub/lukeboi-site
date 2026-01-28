import React from 'react';
import { ShieldCheck, Clock, MapPin, ThumbsUp } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-10 h-10 text-brand-red" />,
      title: "Produção sob Encomenda",
      description: "Garantia de produtos frescos e preparados especialmente para o seu pedido."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-red" />,
      title: "Padrão de Qualidade",
      description: "Peso padronizado e tempero na medida certa. Sem surpresas na hora de assar."
    },
    {
      icon: <MapPin className="w-10 h-10 text-brand-red" />,
      title: "Local em Sorocaba",
      description: "Atendimento focado na Vila Barão e região, com logística ágil."
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-brand-red" />,
      title: "Variedade",
      description: "Desde a linha econômica para festas até picanha e medalhões premium."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Por que confiar no <span className="text-brand-red">Luke-boi?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Já são dezenas de churrascos, festas e eventos atendidos. Nosso compromisso é entregar exatamente o que foi combinado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;