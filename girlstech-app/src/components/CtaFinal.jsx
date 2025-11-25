// src/components/CtaFinal.jsx
import React from 'react';

function CtaFinal() {
  const whatsappLink = "https://chat.whatsapp.com/FLYgrWYHrZbBzP46fEBAd0";
  
  return (
    <section className="cta-final">
      <div className="container">
        <h2>Apoio, Conexão e Crescimento. Tudo em um só lugar.</h2>
        <p>Lembrete: Nossa comunidade é <strong>100% gratuita</strong> e feita de mulheres para mulheres.</p>
        
        <a href={whatsappLink} className="cta-btn final-cta">
          ENTRAR AGORA NO GRUPO DE WHATSAPP 📲
        </a>
      </div>
    </section>
  );
}

export default CtaFinal;