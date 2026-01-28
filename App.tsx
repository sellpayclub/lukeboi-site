import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Kits from './components/Kits';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Kits />
        
        {/* Transformation Statement */}
        <section className="bg-brand-red py-16 text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black mb-6">
              "Você pede. A gente prepara. Você só assa e aproveita 🍻🔥"
            </h2>
            <p className="text-xl text-red-100">
              Pare de perder tempo em açougues e mercados. O churrasco inteligente é aqui.
            </p>
          </div>
        </section>

        <WhyUs />
        <FAQ />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;