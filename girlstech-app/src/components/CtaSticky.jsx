// src/components/CtaSticky.jsx
import React from 'react';

function CtaSticky() {
  const whatsappLink = "https://chat.whatsapp.com/FLYgrWYHrZbBzP46fEBAd0";

  return (
    <a href={whatsappLink} id="cta-sticky" className="cta-btn">
      Quero Entrar (GRÁTIS!) 🚀
    </a>
  );
}

export default CtaSticky;