// src/App.jsx
import React, { useEffect, useRef } from 'react';
import CtaSticky from './components/CtaSticky';
import Hero from './components/Hero';
import BenefitSection from './components/BenefitSection'; 
import CtaFinal from './components/CtaFinal';
// Certifique-se de que o seu index.js/main.jsx está importando o './styles.css'

function App() {
  const whatsappLink = "https://chat.whatsapp.com/FLYgrWYHrZbBzP46fEBAd0";
  
  // Lógica para o Efeito de Flutuação (Parallax/Float)
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      const scrollPosition = window.scrollY;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Verifica se o card está na área de visualização
        if (cardTop < scrollPosition + windowHeight && cardTop + card.offsetHeight > scrollPosition) {
          // Pequena transformação baseada no seno para um movimento suave
          const offset = scrollPosition + (index * 5); 
          card.style.transform = `translateY(${Math.sin(offset * 0.003) * 5}px)`;
        } else {
          // Reseta a posição quando fora da área (ou deixa levemente abaixado)
          card.style.transform = `translateY(0)`; 
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // O array vazio garante que o listener só seja criado na montagem

  return (
    <div className="App">
      <CtaSticky />
      <Hero />

      {/* Seção O Problema */}
      <section className="problema">
        <div className="container">
          <h2>Não se perca no caminho.</h2>
          <p>Sabemos que a jornada em tecnologia é desafiadora. Onde buscar apoio? Como fazer networking de forma segura? É fácil sentir ansiedade, desânimo ou solidão quando você não vê pessoas "iguais" ao seu lado.</p>
          <p>Nossa missão é simples: garantir que nenhuma mulher se perca por falta de apoio e recursos. <a href={whatsappLink} className="link-cta">Junte-se a nós agora!</a></p>
        </div>
      </section>

      <BenefitSection />

      <CtaFinal />
    </div>
  );
}

export default App;