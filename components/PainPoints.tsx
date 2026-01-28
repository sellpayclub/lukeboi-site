import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Cansado de organizar churrasco e <span className="text-brand-red">sempre dar problema?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No fim… quem deveria curtir, acaba trabalhando. Conhece essa história?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-gray-400">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">😫</span> O Jeito Antigo
            </h3>
            <ul className="space-y-4">
              {[
                "Não sabe quanto comprar e erra na conta",
                "Perde tempo na fila do açougue",
                "Espetinhos de tamanhos diferentes (despadronizados)",
                "Corre no mercado em cima da hora",
                "Festa vira estresse e trabalho"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <XCircle className="text-red-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-brand-red transform md:scale-105 relative">
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
              Recomendado
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">😎</span> Com Luke-boi
            </h3>
            <ul className="space-y-4">
              {[
                "Espetinhos prontos na quantidade certa",
                "Produtos crus e frescos, prontos pra assar",
                "Sem cálculo complicado ou desperdício",
                "Kits completos com acompanhamentos",
                "Você só escolhe o kit e a gente entrega"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                  <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;