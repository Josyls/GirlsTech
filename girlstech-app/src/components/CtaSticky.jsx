// src/components/CtaSticky.jsx
import React from 'react';

function CtaSticky({ whatsappLink }) {
  // Ícone simples de WhatsApp (pode ser substituído por um SVG ou Font Awesome se tiver)
  const WhatsAppIcon = "💬"; 

  return (
    <div className="cta-sticky">
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cta-sticky-button"
        title="Fale conosco no WhatsApp (Comunidade Gratuita)"
      >
        {WhatsAppIcon}
      </a>
    </div>
  );
}

export default CtaSticky;