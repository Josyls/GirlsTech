// src/pages/homePage.jsx - VERSÃO FINAL SEM VESTÍGIOS DO VÍDEO

import React from 'react';

// Importação dos Componentes Visuais (Nomes em minúsculo e caminho correto)
import HeroSection from '../components/heroSection'; 
import BenefitCard from '../components/BenefitCard'; 
import CtaFinalSection from '../components/ctaFinalSection';
import AboutSection from '../components/aboutSection'; 
import AdmSection from '../components/admSection';   

// Dados dos Benefícios (Hardcoded temporariamente)
const benefitsData = [
    { icon: '🚀', title: 'Networking de Valor', description: 'Conecte-se com mulheres em diferentes estágios da carreira, prontas para compartilhar experiências e oportunidades.' },
    { icon: '💡', title: 'Troca de Informação Segura', description: 'Um ambiente acolhedor, moderado e livre de preconceitos, onde você pode tirar dúvidas e trocar dicas sem julgamentos.' },
    { icon: '💖', title: 'Apoio e Sororidade', description: 'Encontre outras mulheres que sentem os "percalços" da jornada, para se sentir motivada, apoiada e nunca desistir.' },
];

// Componente Marquee
const MarqueeBanner = () => (
    <div className="marquee-container">
        <div className="marquee-content">
            COMUNIDADE 100% GRATUITA * REDE DE SORORIDADE * CRESÇA NA TI SEM SOFRER *
            COMUNIDADE 100% GRATUITA * REDE DE SORORIDADE * CRESÇA NA TI SEM SOFRER *
        </div>
    </div>
);


function HomePage({ whatsappLink }) {
  
  return (
    <div className="home-page">
      
      {/* 1. BANNER PRINCIPAL / HERO */}
      <HeroSection whatsappLink={whatsappLink} />

      {/* 2. FITA DE ROLAGEM (MARQUEE) */}
      <MarqueeBanner />

      {/* 3. SEÇÃO DE BENEFÍCIOS */}
      <section className="benefits-section">
        <div className="container">
          <h2>Seu lugar seguro para crescer em TI.</h2>
          <div className="cards-grid">
            {benefitsData.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                icon={benefit.icon} 
                title={benefit.title} 
                description={benefit.description} 
                whatsappLink={whatsappLink}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. QUEM SOMOS (ANCORADO) */}
      <AboutSection /> 

      {/* A SEÇÃO DE VÍDEO FOI REMOVIDA DAQUI */}

      {/* 5. ADMS E DEPOIMENTOS (ANCORADO) */}
      <AdmSection whatsappLink={whatsappLink} />

      {/* 6. CTA FINAL */}
      <CtaFinalSection whatsappLink={whatsappLink} />
    </div>
  );
}

export default HomePage;