// src/components/CtaFinalSection.jsx
import React from 'react';

function CtaFinalSection({ whatsappLink }) {
  return (
    <section className="cta-final-section">
      <div className="container">
        <h2>Não fique sozinha. Sua rede de apoio está aqui.</h2>
        <p>Apoio, Conexão e Crescimento. Tudo em um só lugar. Nossa comunidade é 100% gratuita e feita de mulheres para mulheres.</p>
        
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-final-button">
          ENTRAR AGORA NO GRUPO DE SORORIDADE 📲
        </a>
      </div>
    </section>
  );
}

export default CtaFinalSection;