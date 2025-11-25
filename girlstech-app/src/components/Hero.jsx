// src/components/Hero.jsx
import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
// Importe sua imagem da mascote se tiver: import Mascote from '../assets/img/mascote.png';

function Hero() {
  const originalSubText = "Entre para o ambiente seguro e acolhedor onde mulheres se apoiam, trocam conhecimento e crescem juntas na jornada de TI.";
  const typedText = useTypewriter(originalSubText);
  const whatsappLink = "https://chat.whatsapp.com/FLYgrWYHrZbBzP46fEBAd0";

  return (
    <header className="hero">
      <div className="container">
        <p className="badge-gratuito">COMUNIDADE 100% GRATUITA</p>
        <h1 className="headline">Girls Tech: Sua Rede de Sororidade na Tecnologia.</h1>
        <p className="sub-headline" style={{ minHeight: '3em' }}>{typedText}</p>
        
        <a href={whatsappLink} className="cta-btn main-cta">
          QUERO FAZER PARTE DA COMUNIDADE! ✨
        </a>
        
        {/* <img src={Mascote} alt="Mascote Girls Tech com laptop" className="hero-mascote" /> */}
      </div>
    </header>
  );
}

export default Hero;