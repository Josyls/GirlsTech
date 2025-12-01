// src/components/heroSection.jsx - VERSÃO FINAL SEM BOLA ROSA

import React from 'react';
import useTypewriter from '../hooks/useTypewriter'; 

function HeroSection({ whatsappLink }) {
  const originalSubText = "Entre para o ambiente seguro e acolhedor onde mulheres se apoiam, trocam conhecimento e crescem juntas na jornada de TI.";
  const typedText = useTypewriter(originalSubText, 40);

  return (
    <section className="hero-section">
      <div className="container hero-content">
        
        {/* O LOGO FOI SUBSTITUÍDO POR UM TITULO MAIS VISUALMENTE LIMPO */}
        <h1 className="logo-text">Girls Tech</h1> 

        {/* TAG GRATUITA */}
        <p className="badge-gratuito">COMUNIDADE 100% GRATUITA</p>
        
        <h1 className="hero-title">Sua Rede de Apoio Feminino.</h1>
        <h2 className="hero-subtitle">
          <span className="typewriter-text">{typedText}</span>
        </h2>

        {/* Botão de Chamada para Ação */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-button">
          QUERO FAZER PARTE AGORA! ✨
        </a>
      </div>
    </section>
  );
}

export default HeroSection;