import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Preciso pedir com antecedência?",
      answer: "Sim. Trabalhamos com produção sob encomenda para garantir a máxima qualidade e padronização dos espetinhos. Recomendamos pedir com pelo menos 24h a 48h de antecedência para grandes quantidades."
    },
    {
      question: "Vocês entregam?",
      answer: "Temos atendimento local em Sorocaba (Vila Barão) e região. As taxas e disponibilidade de entrega podem ser consultadas diretamente pelo WhatsApp no momento do pedido."
    },
    {
      question: "Posso misturar sabores nos kits?",
      answer: "Sim! Você tem total liberdade para montar seu pedido conforme sua preferência de sabores dentro das opções disponíveis no cardápio."
    },
    {
      question: "Atendem eventos grandes?",
      answer: "Sim. Temos estrutura e capacidade produtiva para atender pedidos de 300 a 500 espetos ou mais para casamentos, aniversários e eventos corporativos."
    },
    {
      question: "É só para pessoa física?",
      answer: "Não. Atendemos também B2B: bares, lanchonetes e revendas que buscam espetinhos de qualidade para seus estabelecimentos."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Tire suas dúvidas antes de fazer seu pedido.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-red" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;